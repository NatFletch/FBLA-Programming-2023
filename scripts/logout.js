function logout(){
    const cache = require('../modules/cache')
    cache.setItem("logged_in", "none")
    cache.setItem('isTeacher', 0)
    window.location.reload()
}