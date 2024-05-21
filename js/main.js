$(document).ready(function() {
    $('#nav-toggle').click(function(){
        $("#nav-menu").addClass("show-menu");
    })
    $('#nav-close').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })
    $('.nav__link').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })

    $(window).scroll(function(){
        $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
        $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
    })
})

// ================== SWIPER FAVORITES =============== //
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }else{
        sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true //animations repeat
})

sr.reveal(`.home__data, .favorites__container, .footer__container`) 
sr.reveal(`.home__crircle, .home__img`, {delay: 600, scale: .5}) 
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {delay: 1000, interval: 100}) 
sr.reveal(`.home__left`, {delay: 1200}) 
sr.reveal(`.home__tomato-1,.home__tomato-2`, {delay: 1400, interval: 100}) 
sr.reveal(`.care__img, .contact__img`, {origin: 'left'}) 
sr.reveal(`.care__list, .contact__data`, {origin: 'right'}) 
sr.reveal(`.banner__item, .products__card`, {interval: 100}) 