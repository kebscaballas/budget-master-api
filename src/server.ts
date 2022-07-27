import BudgetMasterDatabase from './databases/budget_master_database';

const app = require('./app');

const bootstrap = async () => {
  app.use(async ctx => {
    ctx.body = 'Home is where the ❤️ is.';
  });

  new BudgetMasterDatabase().connect();

  app.listen(3000);
};

bootstrap();
