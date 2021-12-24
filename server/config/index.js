const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

module.exports = {
  server: {
    port: process.env.APP_PORT || 9012,
  },
  database: {
    db_uri: process.env.DB_URI || 'mongodb://localhost:27017',
    db_name: process.env.DB_NAME || 'basecode'
  }
};
