import { Handlers } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    const headers = new Headers(req.headers);
    headers.set("location", "/");

    const form = await req.formData();
    const fullName = form.get("fullName")?.toString();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();
    if (!fullName || !email || !message) {
      console.warn(`form data didn't work`);
      return new Response(null, {
        status: 302,
        headers,
      });
    }

    const username = Deno.env.get("USERNAME");
    const password = Deno.env.get("PASSWORD");
    if (!username || !password) {
      console.warn(`env didn't work`);
      return new Response(null, {
        status: 302,
        headers,
      });
    }
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

    await client.send({
      from: "ayeoh.dev@gmail.com",
      to: "ayeoh.dev@gmail.com",
      subject: "Ayeoh.Dev Contact Submission",
      content: fullName + "<br/>" + email + "<br/>" + message,
      html: `<p> ${fullName} <br/>${email} <br/> ${message}</p>`,
    });
    console.debug("sent");

    await client.close();
    console.debug("closed");

    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
