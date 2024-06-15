module.exports = {
  type: process.env.RDB_TYPE,
  host: process.env.RDB_HOST,
  port: parseInt(process.env.RDB_PORT, 10),
  username: process.env.RDB_USER,
  password: process.env.RDB_PASSWORD,
  database: process.env.RDB_DATABASE,
  entities: [__dirname + "/dist/**/entities/*.js"],
  migrations: [__dirname + '/dist/migrations/*.js'],
  synchronize: process.env.NODE_ENV === 'development',
};
