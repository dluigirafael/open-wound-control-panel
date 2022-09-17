import esbuild from "esbuild";

esbuild.buildSync({
	entryPoints: ["index.js"],
	bundle: true,
	platform: "node",
	external: ["./node_modules/*"],
	outfile: "out.js",
});
