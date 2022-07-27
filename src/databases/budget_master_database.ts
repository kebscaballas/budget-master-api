import Database from './database'

const DB_CONFIG = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kebscaballas',
  password: '',
  database: 'budget-master',
  logging: ['query', 'error'],
  synchronize:  true,
}

export default class BudgetMasterDatabase extends Database {
  constructor() {
    super(DB_CONFIG);
  }
}
