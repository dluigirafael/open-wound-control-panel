import { Router } from 'express';
import IndexController from '@controllers/index.controller';

const IndexRoute = () => {
  const path = '/';
  const router = Router();
  router.get(`${path}`, IndexController);
  return router;
};

export default IndexRoute;
