const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const { Pool } = require('pg');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Hello, world!';
})

app.use(Logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on port 3000.');
})
