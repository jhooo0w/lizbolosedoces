function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "site/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "site/img/close_white_36dp.svg";
    }
}

function menuShow() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('open'); // Alterna a classe 'open'
}