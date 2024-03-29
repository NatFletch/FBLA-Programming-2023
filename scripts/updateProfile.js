/**
 * updateProfile.js is the main script that will display a user's profile. Most of it is handled under the hood by JQuery.
 * The only realy abstraction here is the fact that some views will change depending on what roles the user has.
 * Also if the user is not logged in, it will redirect to "/login.html".
 */

/**
 * 
 * @param {string} username The username of the account to promote to teacher
 */
var user;

function promote(){
    const dialogue = require('../modules/dialogue')
    const db_client = require('../modules/db_client')

    db_client.query("UPDATE user_profiles SET isTeacher = 1, Grade = $1 WHERE username = $2", ['Teacher', user], (err, res) => {
        if(!err){
            dialogue.alert("User promoted to teacher.", "success")
        } else {
            throw err
        }
    })
}


require('jquery')(document).ready(($) =>{
    //modules
    const db_client = require("../modules/db_client")
    const cache = require("../modules/cache")
    const dialogue = require("../modules/dialogue")
    //elements
    const username = $("#username")
    const fullname = $("#fullname")
    const grade = $("#grade")
    const birthday = $("#birthday")
    const role = $("#role")
    const points = $("#points")
    const items = $("#items")

    var user_role
    const url_params = new URLSearchParams(window.location.search)
    if(url_params.get('user') === null){
        user = cache.getItem("logged_in")
    } else {
        user = url_params.get('user')
    }

    if(cache.getItem("logged_in")==null || cache.getItem("logged_in") == "none"){
        window.location.replace("./login.html")
    }

    if (/\s/.test(user)) {
        //check if a name was searched for instead of a username
        db_client.query("SELECT * FROM user_profiles WHERE FullName = $1", [user], (err, res) => {
            if(!err && res.rowCount !== 0){
                var isTeacher = res.rows[0].isteacher
                if(isTeacher == 0){
                    user_role = "Student"
                } else if(isTeacher == 1){
                    user_role = "Teacher"
                } else if(isTeacher == 2) {
                    user_role = "Admin"
                }
    
                db_client.query("SELECT * FROM user_inventory WHERE Username = $1", [res.rows[0].username], (err, res2) => {
                    if(res2.rows[0] === undefined){
                        if(cache.getItem("isTeacher") == 2 && isTeacher == 0){
                            items.html('No Items<br><div class="btn btn-info" onclick="promote("'+res.rows[0].username+'")" id="promote">Promote To Teacher</div>')
                        } else {
                            items.html("No Items")
                        }
                        
                    } else {
                        if(cache.getItem("isTeacher") == 2 && isTeacher == 0){
                            items.html("Items: " + res2.rows[0].items + '<br><div class="btn btn-info" onclick="promote()" id="promote">Promote To Teacher</div>')
                        } else {
                            items.html("Items: " + res2.rows[0].items)
                        }
                    }
                })
                username.html(res.rows[0].username)
                fullname.html("Name: " + res.rows[0].fullname)
                grade.html("Grade: " + res.rows[0].grade)
                birthday.html("Birthday: " + res.rows[0].birthday)
                role.html("Role: " + user_role)
                if(cache.getItem("isTeacher") > 0){
                    points.html("Points: " + res.rows[0].points + ' <input type="text" id="input-points"> <button class="btn btn-primary" onclick="changePoints()">Update Points</button>')
                } else {
                    points.html("Points: " + res.rows[0].points)
                }
                
                
            } else if (res.rowCount == 0){
                return dialogue.alert("No user found with that name.", "danger")
            } else {
                throw err
            }
        })
    } else {
        db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [user], (err, res) => {
            if(!err && res.rowCount !== 0){
                var isTeacher = res.rows[0].isteacher
                if(isTeacher == 0){
                    user_role = "Student"
                } else if(isTeacher == 1){
                    user_role = "Teacher"
                } else if(isTeacher == 2) {
                    user_role = "Admin"
                }
    
                db_client.query("SELECT * FROM user_inventory WHERE Username = $1", [user], (err, res2) => {
                    if(res2.rows[0] === undefined){
                        if(cache.getItem("isTeacher") == 2 && isTeacher == 0){
                            items.html('No Items<br><div class="btn btn-info" onclick="promote()" id="promote">Promote To Teacher</div>')
                        } else {
                            items.html("No Items")
                        }
                        
                    } else {
                        if(cache.getItem("isTeacher") == 2 && isTeacher == 0){
                            items.html("Items: " + res2.rows[0].items + '<br><div class="btn btn-info" onclick="promote()" id="promote">Promote To Teacher</div>')
                        } else {
                            items.html("Items: " + res2.rows[0].items)
                        }
                    }
                })
                username.html(res.rows[0].username)
                fullname.html("Name: " + res.rows[0].fullname)
                grade.html("Grade: " + res.rows[0].grade)
                birthday.html("Birthday: " + res.rows[0].birthday)
                role.html("Role: " + user_role)
                if(cache.getItem("isTeacher") > 0){
                    points.html("Points: " + res.rows[0].points + ' <input type="text" id="input-points"> <button class="btn btn-primary" onclick="changePoints()">Update Points</button>')
                } else {
                    points.html("Points: " + res.rows[0].points)
                }
                
                
            } else if (res.rowCount == 0){
                return dialogue.alert("No user found with that name.", "danger")
            } else {
                throw err
            }
        })
    }
    
})