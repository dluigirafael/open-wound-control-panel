import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    vite: {
      resolve: {
        alias: {
          $src: path.resolve("./src/"),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
// // Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
// const mode = process.env.NODE_ENV;
// const dev = mode === "development";
// process.env.TAILWIND_MODE = dev ? "watch" : "build";
