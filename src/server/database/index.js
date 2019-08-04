const knex = require('knex');
const knexDb = knex({ client: 'pg',  connection: 'http://postgres:pass@127.0.0.1:5432/royalmanta'});
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = db;
