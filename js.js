// changed header scroll 
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: false
})

scrollReveal.reveal(
    `#home .title, #home .linkHome,
    #aboutMe .text, #contact .contacts,
    #projects .title, #projects .card`
)