require("jquery")(document).ready(function($) {
    const cache = require('../modules/cache')

    function checkIfOwnPage(){
        const username = cache.getItem("logged_in")
        if(username === $("#username").html()){
            return true
        } else{
            return false;
        }
    }

    if(cache.getItem("isTeacher") > 0 || checkIfOwnPage()){
        document.getElementById("user-config").style.display = "block"
    }
})

function addOnePoint(){
 const db_client = require('../modules/db_client')
 const cache = require('../modules/cache')
 db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [cache.getItem('logged_in')], (err, res) => {
    if (!err){
        db_client.query("UPDATE user_profiles SET Points = $1 WHERE Username = $2", [res.rows[0].points + 1, cache.getItem("logged_in")])
        const pointsNew = parseInt(res.rows[0].points, 10) -0 + 1
        console.log(typeof(Number(res.rows[0].points)))
        console.log(pointsNew)
        require('jquery')("#points").html("Points: "+ pointsNew  +'<button onclick="addOnePoint()" type="button" class="btn btn-success">+</button>')
    }
 })
}