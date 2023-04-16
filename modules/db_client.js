const { Client } = require('pg')
const client = new Client('postgresql://nathan-laptop:6QukISEzsWoWJiMCkLboJQ@fbla-2023-9004.7tt.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

client.connect()

module.exports = {
    query: (text, params, callback) => {
        return client.query(text, params, callback)
    },
}