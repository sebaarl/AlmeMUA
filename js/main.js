const slideContainer = document.querySelector(".slider")
const sliderText = document.querySelector(".slider--text")
const btnLeft = document.querySelector(".slider__btn-left")
const btnRight = document.querySelector(".slider__btn-right")

const sliderImages = [
    {
        src: "/img/Slider/1.jpg",
        text: "Maquillaje Social",
    },
    {
        src: "/img/Slider/1.jpg",
        text: "Maquillaje Medios Visuales",
    },
    {
        src: "/img/Slider/1.jpg",
        text: "Caracterización y FX",
    },
]

let slideCounter = 0

const startSlider = () => {
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[0].src})`
    sliderText.innerHTML = sliderImages[0].text
}

btnRight.addEventListener("click", function () {
    if (slideCounter === sliderImages.length - 1) {
        slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[0].src})`
        sliderText.innerHTML = sliderImages[0].text
        slideCounter = -1

        slideContainer.classList.add("fadeIn")
        setTimeout(() => {
            slideContainer.classList.remove("fadeIn")
        }, 50)
    }
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(68, 68, 68, 0.4)
        ),url(${sliderImages[slideCounter + 1].src})`
    sliderText.innerHTML = sliderImages[slideCounter + 1].text
    slideCounter++
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
    }, 50)
})

btnLeft.addEventListener("click", function () {
    if (slideCounter === 0) {
        slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[sliderImages.length - 1].src})`
        sliderText.innerHTML = sliderImages[sliderImages.length - 1].text
        slideCounter = sliderImages.length
        slideContainer.classList.add("fadeIn")
        setTimeout(() => {
            slideContainer.classList.remove("fadeIn")
        }, 50)
    }

    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter - 1].src})`
    sliderText.innerHTML = sliderImages[slideCounter - 1].text
    slideCounter--
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
    }, 50)
})

startSlider()

/*==================== MENU MOBILE ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)