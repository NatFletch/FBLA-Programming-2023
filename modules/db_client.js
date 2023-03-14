const { Client } = require('pg')
const client = new Client('postgresql://nathan:mvDTgi49ssHdz37GJbmV8w@fbla-2023-9004.7tt.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')
//const client = new Client(process.env.FBLA_23_DATABASE)

client.connect()

module.exports = {
    query: (text, params, callback) => {
        return client.query(text, params, callback)
    },
}