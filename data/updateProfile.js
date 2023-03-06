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

    if(cache.getItem("logged_in")==null || cache.getItem("logged_in") == "none"){
        window.location.replace("./login.html")
    }

    db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [cache.getItem("logged_in")], (err, res) => {
        if(!err){
            console.log(cache.getItem("logged_in"))
            console.log(res)

            var isTeacher = cache.getItem("isTeacher")
            console.log(isTeacher)
            if(isTeacher == 0){
                user_role = "Student"
            } else if(isTeacher == 1){
                user_role = "Teacher"
            } else if(isTeacher == 2) {
                user_role = "Admin"
            }

            if(res.rows[0].items === undefined){
                items.html("No Items")
            } else {
                items.html("Items: " + res.rows[0].items)
            }
            username.html(cache.getItem("logged_in"))
            fullname.html("Name: " + res.rows[0].fullname)
            grade.html("Grade: " + res.rows[0].grade)
            birthday.html("Birthday: " + res.rows[0].birthday)
            role.html("Role: " + user_role)
            points.html("Points: " + res.rows[0].points)
            
        } else {
            throw err
        }
    })
})