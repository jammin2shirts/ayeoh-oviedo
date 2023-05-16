// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/mailer.tsx";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/sitemap.xml.ts";
import * as $$0 from "./islands/Contact-Form.tsx";

const manifest = {
  routes: {
    "./routes/api/mailer.tsx": $0,
    "./routes/index.tsx": $1,
    "./routes/sitemap.xml.ts": $2,
  },
  islands: {
    "./islands/Contact-Form.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
