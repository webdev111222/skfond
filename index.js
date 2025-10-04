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
const burgerClose = document.querySelector('.burger-close');
const burgerLinks = burgerPopup.querySelectorAll('a'); // все ссылки внутри меню

// открыть меню
burgerBtnNode.addEventListener('click', () => {
    burgerPopup.classList.add('flex-open');
    document.body.classList.add('loked');
});

// закрыть меню крестиком
burgerClose.addEventListener('click', () => {
    burgerPopup.classList.remove('flex-open');
    document.body.classList.remove('loked');
});

// закрыть меню при клике на ссылку
burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerPopup.classList.remove('flex-open');
        document.body.classList.remove('loked');
    });
});

// закрыть меню при клике вне
document.addEventListener('click', (e) => {
    if (
        !burgerPopup.contains(e.target) &&
        !burgerBtnNode.contains(e.target)
    ) {
        burgerPopup.classList.remove('flex-open');
        document.body.classList.remove('loked');
    }
});



// const doc_gos_reestr = document.querySelector('.gos_reestr');
// const doc_fond = document.querySelector('.fond');
// const doc_from_valid = document.querySelector('.from-valid');
// const doc_bank = document.querySelector('.bank');

const doc_popup = document.querySelector('.doc_popup');
const doc_BTN = document.querySelector('.doc_close');
doc_BTN.addEventListener('click', () => {
    doc_popup.classList.toggle('open-doc');
})
const docPopup = document.querySelector('.doc_popup');
const docImg = document.querySelector('.doc_popup-img');
const docPdf = document.querySelector('.doc_popup-pdf');

document.addEventListener('click', (e) => {
  // если клик по госреестру — показываем картинку
  if (e.target.classList.contains('gos_reestr')) {
    docPopup.classList.add('open-doc');
    docImg.src = './icons/gos-reestr.jpg';
    docImg.style.display = 'block';
    docPdf.style.display = 'none';
  }

  // если клик по фонду — показываем PDF
//   if (e.target.classList.contains('fond')) {
//     docPopup.classList.add('open-doc');
//     docPdf.src = './icons/fond-doc.pdf';
//     docPdf.style.display = 'block';
//     docImg.style.display = 'none';
//   }
    if (e.target.classList.contains('from-valid')) {
    docPopup.classList.add('open-doc');
    docImg.src = './icons/from-valid.jpg';
    docPdf.style.display = 'none';
    docImg.style.display = 'block';
  }
    if (e.target.classList.contains('bank')) {
    docPopup.classList.add('open-doc');
    docImg.src = './icons/bank.jpg';
    docPdf.style.display = 'none';
    docImg.style.display = 'block';
  }
});
