// @ts-nocheck

import { createConnection } from 'typeorm';

export default class Database {
  constructor({
    database,
    host,
    logging,
    password,
    port,
    synchronize,
    type,
    username
   }) {
    this.database = database;
    this.host = host;
    this.logging = logging;
    this.password = password;
    this.port = port;
    this.synchronize = synchronize;
    this.type = type;
    this.username = username;
  }

  async connect() {
    return await createConnection({
      database: this.database,
      host: this.host,
      logging: this.logging,
      password: this.password,
      port: this.port,
      synchronize: this.synchronize,
      type: this.type,
      username: this.username,
    }).then((connection) => {
      console.log('Database connection established.');
    }).catch((error) => {
        console.log('Unable to connect to database. Error details below:');
        console.log(error);
    });
  }
}
