const { Client } = require("pg");

const client = new Client(process.env.FBLA_23_DATABASE);

client.connect()

client.query("CREATE TABLE user_profiles (Username text, Password text, Points int, isTeacher int)", (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
})