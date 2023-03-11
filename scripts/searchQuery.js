window.onload = function(){
    document.getElementById("searchbar").onkeydown = function(e){
        if(e.keyCode == 13){
            window.location.replace('../application/profile.html?user='+document.getElementById("searchbar").value)
        }
    }
}