const selectElement = (element) => document.querySelector(element);

let header = selectElement('.navbar');
let body = selectElement('body');

window.onscroll = () => {
    scrolling()
}

let scrolling = () => {
    if (body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('navbar-Over');
    } else {
        header.classList.remove('navbar-Over');
    }
}