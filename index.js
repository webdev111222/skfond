const aboutNode = document.querySelector('.hero__about');
const popupNode = document.querySelector('.hero__popup');
const closeNode = document.querySelector('.popup__close');

aboutNode.addEventListener('click', () => {
    document.body.classList.add('loked');
    popupNode.classList.add('open');
})
closeNode.addEventListener('click', (event) => {
    document.body.classList.remove('loked');
    popupNode.classList.remove('open');
})
document.addEventListener('click', (event) => {
    if(event.target.classList.contains('hero__popup')){
        document.body.classList.remove('loked');
        popupNode.classList.remove('open');
    }
    if(event.target.classList.contains('header__nav-mobile') || event.target.classList.contains('header__nav-link')){
        document.body.classList.remove('loked');
        burgerPopup.classList.toggle('flex-open');
    }
})


const elements = document.querySelectorAll('section')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('anim');
            observer.unobserve(entry.target);
        }
    })
}, {threshold: 0.1})

elements.forEach(el => observer.observe(el))


const burgerBtnNode = document.querySelector('.burger-menu');
const burgerPopup = document.querySelector('.header__nav-mobile');
const burgerClose = document.querySelector('.burger-close')
console.log(burgerClose);

burgerBtnNode.addEventListener('click', () => {
    burgerPopup.classList.toggle('flex-open');
    document.body.classList.toggle('loked');
})

burgerClose.addEventListener('click', () => {
    burgerPopup.classList.toggle('flex-open');
    document.body.classList.toggle('loked');
})
document.addEventListener('click', (e) => {
    console.log(e);
    
})