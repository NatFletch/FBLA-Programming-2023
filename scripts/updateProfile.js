require('jquery')(document).ready(($) =>{
    //modules
    const db_client = require("../modules/db_client")
    const cache = require("../modules/cache")
    //elements
    const username = $("#username")
    const fullname = $("#fullname")
    const grade = $("#grade")
    const birthday = $("#birthday")
    const role = $("#role")
    const points = $("#points")
    const items = $("#items")

    var user_role
    var user;
    const url_params = new URLSearchParams(window.location.search)
    if(url_params.get('user') === null){
        user = cache.getItem("logged_in")
    } else {
        user = url_params.get('user')
    }

    if(cache.getItem("logged_in")==null || cache.getItem("logged_in") == "none"){
        window.location.replace("./login.html")
    }

    db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [user], (err, res) => {
        if(!err){
            var isTeacher = res.rows[0].isteacher
            if(isTeacher == 0){
                user_role = "Student"
            } else if(isTeacher == 1){
                user_role = "Teacher"
            } else if(isTeacher == 2) {
                user_role = "Admin"
            }

            db_client.query("SELECT * FROM user_inventory WHERE Username = $1", [user], (err, res) => {
                if(res.rows[0] === undefined){
                    items.html("No Items")
                } else {
                    console.log(res.rows[0].items)
                    items.html("Items: " + res.rows[0].items)
                }
            })
            username.html(user)
            fullname.html("Name: " + res.rows[0].fullname)
            grade.html("Grade: " + res.rows[0].grade)
            birthday.html("Birthday: " + res.rows[0].birthday)
            role.html("Role: " + user_role)
            if(isTeacher > 0){
                points.html("Points: " + res.rows[0].points + ' <button type="button" class="btn btn-success">+</button>')
            } else {
                points.html("Points: " + res.rows[0].points)
            }
            
            
        } else {
            throw err
        }
    })
})