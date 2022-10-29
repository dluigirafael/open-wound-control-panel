import App from '@/app';

import IndexRoute from '@routes/index.route';

import validateEnv from '@utils/validateEnv';
// console.log(IndexRoute);
validateEnv();
const index = IndexRoute();
App([index]);
