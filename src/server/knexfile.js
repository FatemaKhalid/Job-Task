// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.POSTGRES_DATABASE_CONNECTION
  },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
