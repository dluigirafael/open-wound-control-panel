// import os from "os";

// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
import { Application, Router } from 'oak';

const router = new Router();
router.get('/', (context) => {
	context.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 6900 });
