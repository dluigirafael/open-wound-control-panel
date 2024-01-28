import {cpus} from 'os';

// let total_memory = os.totalmem();
// let total_mem_in_kb = total_memory / 1024;
// let total_mem_in_mb = total_mem_in_kb / 1024;
// let total_mem_in_gb = total_mem_in_mb / 1024;

// total_mem_in_kb = Math.floor(total_mem_in_kb);
// total_mem_in_mb = Math.floor(total_mem_in_mb);
// total_mem_in_gb = Math.floor(total_mem_in_gb);

// total_mem_in_mb = total_mem_in_mb % 1024;
// total_mem_in_kb = total_mem_in_kb % 1024;
// total_memory = total_memory % 1024;

// // Display memory size
// console.log(
// 	'Total memory: ' +
// 		total_mem_in_gb +
// 		'GB ' +
// 		total_mem_in_mb +
// 		'MB ' +
// 		total_mem_in_kb +
// 		'KB and ' +
// 		total_memory +
// 		'Bytes'
// );

let cpusArray = cpus();
cpusArray.forEach(cpu => {
    console.log(cpu);
});
// console.log(os.totalmem());
// console.log(os.freemem());
// import { Application, Router } from 'oak';

// const router = new Router();
// router.get('/', (context) => {
// 	context.response.body = `<!DOCTYPE html>
//     <html>
//       <head><title>Hello oak!</title><head>
//       <body>
//         <h1>Hello oak!</h1>
//       </body>
//     </html>
//   `;
// });

// const app = new Application();
// app.use(router.routes());
// app.use(router.allowedMethods());

// app.listen({ port: 6900 });
