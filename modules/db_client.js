const { Client } = require('pg')
const client = new Client(process.env.FBLA_23_DATABASE)

client.connect()
console.log("Successfully made a connection to the DB!")

module.exports = {
    query: (text, params, callback) => {
        return client.query(text, params, callback)
    },
}