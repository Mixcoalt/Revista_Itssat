document.addEventListener('DOMContentLoaded', function(){
    eventListenr()
    darkMode()
})

function darkMode(){
    const botonDark = document.querySelector('.dark-mode-boton')

    botonDark.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode')
    })
}

function eventListenr(){
    const mobileMenu = document.querySelector('.mobile-menu')

    mobileMenu.addEventListener('click', navegacionResposiva)
}

function navegacionResposiva(){
    const navegacion = document.querySelector('.navegacion')

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar')
    }else{
        navegacion.classList.add('mostrar')
    }
}