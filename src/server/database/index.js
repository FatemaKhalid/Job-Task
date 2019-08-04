const knexDb = require('knex')({
    client: 'mysql',
    connection: process.env.POSTGRES_DATABASE_CONNECTION,
    // connection: {
    //     host: 'http://localhost',
    //     user: 'posgres',
    //     password: '',
    //     database: 'royalmanta'
    //   },
    pool: {
        min: 0,
        max: 10
      },
      acquireConnectionTimeout: 1000
  });
// const knexDb = knex({ client: 'pg', connection: 'postgres://postgres:fifi1996@localhost:5432/royalmanta' });
const db = require('bookshelf')(knexDb);
const securePassword = require('bookshelf-secure-password');
// const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = db;
