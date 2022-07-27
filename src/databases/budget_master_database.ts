// @ts-nocheck

import Database from './database'

const DB_CONFIG = {
  database: process.env.DB_NAME,
  host: 'localhost',
  logging: ['query', 'error'],
  password: process.env.DB_PASSWORD,
  port: 5432,
  synchronize:  true,
  type: 'postgres',
  username: process.env.DB_USER,
}

export default class BudgetMasterDatabase extends Database {
  constructor() {
    super(DB_CONFIG);
  }
}
