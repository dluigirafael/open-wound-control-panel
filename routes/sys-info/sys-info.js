import { Router, createRequire } from "../../dependencies/deps.js";
const require = createRequire(import.meta.url);
const os = require("os");
// import node os from deno

const router = new Router();

// router.get("/", (context) => {
//   context.response.body = { message: "hello " };
//   // makeJwt();
// });

router.get("/sys-info", async (context) => {
	// let nodeOS = {
	// 	platform: os.platform(),
	// 	release: os.release(),
	// 	type: os.type(),
	// 	hostname: os.hostname(),
	// 	arch: os.arch(),
	// 	cpus: os.cpus(),
	// 	totalmem: os.totalmem(),
	// 	freemem: os.freemem(),
	// 	// uptime: os.uptime(),
	// 	loadavg: os.loadavg(),
	// 	networkInterfaces: os.networkInterfaces(),
	// };
	// context.response.body = nodeOS;
	let info = {
		//get deno hostname
		hostname: Deno.hostname(),
		//get linux uptime
		uptime: await Deno.run({
			cmd: ["uptime", "-p"],
			stdout: "piped",
			stderr: "piped",
		})
			.output()
			.then((output) => {
				return new TextDecoder().decode(output).replace(/(\r\n|\n|\r)/gm, "");
			}),
		cpuCores: navigator.hardwareConcurrency,
		memory: Deno.systemMemoryInfo(),
	};
	context.response.body = info;
});

export default router;
