import {
  Application,
  Router,
  send,
  config,
  Session,
  DashportOak,
  LocalStrategy,
  connect,
} from "./dependencies/deps.js";
// import { database } from "./database/db.js";
import routes from "./routes/routes.js";

let env = config();

const redis = await connect({
  hostname: env["REDIS_HOST"],
  port: env["REDIS_PORT"],
});

const ok = await redis.set("key", { nene: "tanti" });
const fuga = await redis.get("key");
console.log(fuga);

const router = new Router();

const app = new Application();
const dashport = new DashportOak(app);

// console.clear();
// console.log(onyx);

app.use(router.routes());

app.use(router.allowedMethods());

app.use(routes.uname.prefix("/api").routes());
app.use(routes.uname.allowedMethods());

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/client/build`,
    index: "index.html",
  });
});

await app.listen({ port: 6900 });
