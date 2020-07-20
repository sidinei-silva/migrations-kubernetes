import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  const env_teste = process.env.HELLO_ENV ?? '';
  res.json({
    message: 'Testando migration no dockerfile, ok',
    env: env_teste,
  });
});

export default routes;
