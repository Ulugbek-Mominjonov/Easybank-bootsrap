window.addEventListener('DOMContentLoaded', () => {
    let togglerIcon = document.querySelector('.navbar-toggler-icon'),
        siteHeader = document.querySelector('.site-header'),
        togglerBtn = document.querySelector('.navbar-toggler')
    
    if (togglerBtn) {
        togglerBtn.addEventListener('click', () => {
            togglerIcon.classList.toggle('navbar-toggler-icon--close');
            siteHeader.classList.toggle('site-header--click');
        })
    }
})