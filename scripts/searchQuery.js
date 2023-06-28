/**
 * This script, searchQuery.js, is used to redirect the user to the profile page of the user they searched for.
 */
window.onload = function(){
    document.getElementById("searchbar").onkeydown = function(e){
        if(e.keyCode == 13){
            console.log('j')
            window.location.replace('../application/profile.html?user='+document.getElementById("searchbar").value)
        }
    }
}