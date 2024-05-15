/* eslint-disable import/no-named-as-default */
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

const AppController = {
  getStatus: (req, res) => {
    // Logic to check if Redis and DB are alive
    // Return { "redis": true, "db": true } with status code 200
  },
  getStats: (req, res) => {
    // Logic to retrieve the number of users and files in the DB
    // Return { "users": 12, "files": 1231 } with status code 200
  },
};

module.exports = AppController;

