import { sveltekit } from "@sveltejs/kit/vite";
import { kitDocsPlugin } from "@svelteness/kit-docs/node";
import Icons from "unplugin-icons/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Icons({ compiler: "svelte" }),
		kitDocsPlugin({
			shiki: {
				theme: "material-ocean",
			},
		}),
		sveltekit(),
	],
};

export default config;
