const knex = require('knex');
const knexDb = knex({ client: 'pg',  connection: process.env.POSTGRES_DATABASE_CONNECTION});
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = db;
