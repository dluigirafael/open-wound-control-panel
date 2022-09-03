import { Router } from "../../dependencies/deps.js";
const router = new Router();
let users = [];

// router.get("/", (context) => {
//   context.response.body = { message: "hello " };
//   // makeJwt();
// });

router.get("/uname", async (context) => {
	const p = Deno.run({
		cmd: ["uname", "-a"],
		stdout: "piped",
		stderr: "piped",
	});

	context.response.body = {
		message: new TextDecoder().decode(await p.output()).replace(/(\r\n|\n|\r)/gm, ""),
	};
});

export default router;
