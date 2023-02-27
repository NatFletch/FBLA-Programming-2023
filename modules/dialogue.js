const $ = require('jquery')

module.exports = {
    alert: (text, color) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="container alert alert-${color} alert-dismissible" role="alert">`,
            `   <div style="text-align: center;"><strong>${text}</strong></div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        
        $("#divider").append(wrapper)
    }
}