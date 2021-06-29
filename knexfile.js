module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      port: '3306',
      host: 'localhost',
      database: 'new_proj',
      user:     'root',
      password: '123456'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
