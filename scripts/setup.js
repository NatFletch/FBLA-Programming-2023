const db_client = require('../modules/db_client')


//Checks to see if the db tables were already created
var needs_update = false
var update_option = "user_profiles"

/**
 * 
 * @param {string} option 
 * update_tables(option) is a function that updates the tables in the database. 
 * We have three tables: user_profiles, events, and user_inventory.
 */
function update_tables(option){
    if (option == "user_profiles"){
        db_client.query("UPDATE TABLE user_profiles", (err, res) => {
            if (err) throw err
            console.log(res)
        })
    } else if(option == "events"){
        db_client.query("UPDATE TABLE events", (err, res) => {
            if (err) throw err
            console.log(res)
        })
    } else if(option == "user_inventory"){
        db_client.query("UPDATE TABLE user_inventory", (err, res) => {
            if (err) throw err
            console.log(res)
        })
    }
}
/**
 * create_tables() is a function that creates the tables in the database.
 * We have three tables: user_profiles, events, and user_inventory.
 * This function will only be called if the tables do not exist. (or in case someone clones the repo and wants to start from scratch)
 */
function create_tables(){
    db_client.query("CREATE TABLE user_profiles (Username text, FullName text, Password text, Points int, allTimePoints int, isTeacher int, Birthday date, Grade text)", (err, res) => {
        if (err) throw err
        console.log(res)
    })
    db_client.query("CREATE TABLE events (Title text, Location text, Time text, Description text, Interested int)", (err, res) => {
        if (err) throw err
        console.log(res)
    })
    db_client.query("CREATE TABLE user_inventory (Username text, Items text[])", (err, res) => {
        if(err) throw err
        console.log(res)
    })
}

if(db_client.query("SELECT * FROM user_profiles") && !needs_update){
    console.log('Skipping setup...')
} else if (needs_update == true){
    update_tables(update_option)
} else {
    create_tables()
}
