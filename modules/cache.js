module.exports = {
    getItem: (name) => {
        return window.localStorage.getItem(name)
    },

    setItem: (name, value) => {
        return window.localStorage.setItem(name, value)
    }
}