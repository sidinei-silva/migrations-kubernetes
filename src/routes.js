import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  const env_teste = process.env.HELLO_ENV ?? '';
  res.json({
    message: 'Retornando Job, retirando livreProbed',
    env: env_teste,
  });
});

export default routes;
