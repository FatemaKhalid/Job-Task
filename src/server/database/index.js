const knex = require('knex');
// ({
//     client: 'pg',
//     connection: {
//         user: 'posgres',
//         database: 'royalmanta'
//       },
//     pool: {
//         min: 0,
//         max: 10
//       },
//       acquireConnectionTimeout: 1000
//   });
const knexDb = knex({ client: 'pg',  connection: process.env.POSTGRES_DATABASE_CONNECTION});
const bookshelf = require('bookshelf'); //(knexDb);
const securePassword = require('bookshelf-secure-password');
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = db;
