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
import postRoutes from "./routes/posts.js";

const redis = await connect({
  hostname: "localhost",
  port: 6379,
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

app.use(postRoutes.prefix("/api").routes());
app.use(postRoutes.allowedMethods());

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
