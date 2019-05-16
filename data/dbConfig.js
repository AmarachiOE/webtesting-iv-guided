const knex = require('knex');
const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development'; // should we be looking at development or testing? Depends on what process.env.DB_ENV is set to

module.exports = knex(config[dbEnv]);
