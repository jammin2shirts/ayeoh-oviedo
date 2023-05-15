import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "@/components/HeadElement.tsx";
import { NavBar } from "@/components/NavBar.tsx";
import ContactForm from "../islands/Contact-Form.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement url={url} title="Ayeoh | Home" description="desc" />
      <div class="p-4 mx-auto max-w-screen-md">
        <NavBar />
        <p class="my-6 text-5xl animate-appear relative">
          Ayeoh Developer Services
        </p>

        <div
          class={`flex flex-col flex-wrap gap-5 font-mono mb-5`}
        >
          <p>
            Welcome to our web development business based in Oviedo, FL, where
            we offer a range of services to help businesses and individuals
            build a professional and effective online presence. Our team of
            expert developers has the skills and experience to create custom
            websites that are tailored to your unique needs and goals.
          </p>
          <p>
            Whether you're looking for a simple brochure site, a complex
            e-commerce platform, or anything in between, we can help you design
            and develop a website that reflects your brand and meets your
            objectives. We believe in providing high-quality services that are
            both affordable and accessible to businesses of all sizes.
          </p>
          <p>
            At our business, we prioritize clean, modern design and
            user-friendly functionality to ensure that your website not only
            looks great but is also easy to use and navigate. Our goal is to
            help you attract more visitors, engage your audience, and drive more
            sales and conversions.
          </p>
          <p>
            So if you're ready to take your online presence to the next level,
            contact us today to learn more about our web development services
            and how we can help your business succeed in the digital world.
          </p>
        </div>
        <ContactForm class={`text-purple-600`} />
      </div>
    </>
  );
}
