function logout(){
    window.localStorage.setItem("logged_in", "none")
    window.location.reload()
}