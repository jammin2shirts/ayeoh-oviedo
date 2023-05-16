import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";
import { load } from "https://deno.land/std@0.187.0/dotenv/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";







export const handler: Handlers = {
  async POST(req: Request) {
    const form = await req.formData();
    const fullName = form.get('fullName')?.toString()
    const email = form.get('email')?.toString()
    const message = form.get('message')?.toString()
    if (!fullName || !email || !message) {
        console.warn(`this didn't work`)
        return new Response();
    }
    console.debug('made it here')

    const env = await load();
    const username = env["USERNAME"];
    const password = env["PASSWORD"];
    const client = new SMTPClient({
        connection: {
          hostname: "email-smtp.us-east-1.amazonaws.com",
          port: 2465,
          tls: true,
          auth: {
            username: username,
            password: password,
          },
        },
      });
      
    console.debug('connected')
      await client.send({
        from: "ayeoh.dev@gmail.com",
        to: "ayeoh.dev@gmail.com",
        subject: "Ayeoh.Dev Contact Submission",
        content: fullName + '<br/>'+email+ '<br/>'+message,
        html: "<p>...</p>",
      });
      console.debug('sent')
      
      await client.close();
      console.debug('closed')
    
    // const client = new SmtpClient();
    // const env = await load();
    // const username = env["USERNAME"];
    // const password = env["PASSWORD"];

    // console.debug('got creds')
    // await client.connectTLS({
    //   hostname: "email-smtp.us-east-1.amazonaws.com",
    //   port: 2465,
    //   username: username,
    //   password: password,
    // });
    // console.debug('connected')

    // await client.send({
    //   from: "ayeoh.dev@gmail.com", // Your Email address
    //   to: "ayeoh.dev@gmail.com", // Email address of the destination
    //   subject: "Ayeoh.Dev Contact Submission",
    //   content: fullName + '<br/>'+email+ '<br/>'+message,
    // });

    // console.debug('sent')

    // await client.close();
    // console.debug('closed')

    const headers = new Headers(req.headers);
    headers.set("location","/");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
