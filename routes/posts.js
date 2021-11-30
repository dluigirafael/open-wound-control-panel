import { Router } from "../dependencies/deps.js";
const router = new Router();
let users = [];

router.get("/", (context) => {
  context.response.body = { message: "hello " };
  // makeJwt();
});

router.get("/uname", async (context) => {
  const p = await Deno.run({
    cmd: ["uname", "-a"],
    stdout: "piped",
    stderr: "piped",
  }).output();
  context.response.body = p;
});

router.post("/users", async ({ request, response }) => {
  const res = await request.body().value;
  users.push(res);
  response.body = users;
});
export default router;
