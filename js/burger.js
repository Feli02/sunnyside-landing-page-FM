function displayBurger(){
    let nav = document.getElementById('list-nav-links')

    if(nav.classList.contains('active')){
        nav.classList.remove('active')
        nav.classList.add('inactive')
        nav.style.opacity = 0
    }else{
        nav.classList.remove('inactive')
        nav.classList.add('active')
        nav.style.opacity = 1
    }
}