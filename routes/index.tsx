import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "@/components/HeadElement.tsx";
import { NavBar } from "@/components/NavBar.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement url={url} title="Ayeoh | Home" description="desc" />
      <NavBar />
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6 text-5xl animate-appear relative">
          Ayeoh Developer Services
        </p>

        <div
          class={`flex flex-col flex-wrap gap-5 font-mono`}
        >
          <p class={``}>
            Welcome to Ayeoh Web Development! Based in Oviedo, FL, we offer a
            range of services to help businesses and individuals build a
            professional and effective online prescence. Our expert team has the
            skills and experience to create custom websites that are tailored to
            your unique needs and goals.
          </p>
          <p class={``}>
            Whether you're looking for a simple brochure site, a complex
            e-commerce platform, or anything in between, we can help you design
            and develop a website that reflects your brand and meets your
            objectives. We believe in providing high-quality services that are
            both afforable and accessible to businesses of all sizes.
          </p>
          <p class={``}>
            At our business, we prioritize clean, modern design and
            user-freindly functionality to ensure that your website not only
            looks great but is also easy to use and navigate. our goal is to
            help you attract more visitors, engage your audience, and drive more
            sales and conversations.
          </p>
          <p class={``}>
            So if you're ready to take you online presence to the next level,
            contact us today to learn more about our web development services
            and how we can help your business succeed in the digital world.
          </p>
        </div>
      </div>
    </>
  );
}
