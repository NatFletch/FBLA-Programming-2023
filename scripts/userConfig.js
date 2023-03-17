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

function changePoints(){
    require('../modules/db_client').query("UPDATE user_profiles SET Points = $1 WHERE Username = $2", [document.getElementById("input-points").value, require("../modules/cache").getItem("logged_in")])
    document.getElementById("input-points").innerHTML = document.getElementById("input-points").value
}