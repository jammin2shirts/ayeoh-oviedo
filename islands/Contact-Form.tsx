import { PageProps } from "$fresh/server.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export default function CotactForm(props: JSX.HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      action="/api/mailer"
      method="post"
      {...props}
      class={`shadow-lg flex flex-col rounded-lg p-4 gap-4 ${
        props.class ?? ""
      }`}
    >
      <p class={` text-lg font-bold`}>Contact Form</p>
      <div>
        <label for={`fullName`}>Full Name</label>
        <input
          name={`fullName`}
          type="text"
          class={`w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>
      <div>
        <label for={`email`}>Email</label>
        <input
          name={`email`}
          type="email"
          placeholder={`example@email.com`}
          class={`w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>

      <div>
        <label for={`message`}>Message</label>
        <textarea
          name={`message`}
          rows={4}
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your inquiry here..."
        >
        </textarea>
      </div>

      <button
        type="Submit"
        class="text-white w-36 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Submit
      </button>
    </form>
  );
}
