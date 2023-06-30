function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var dptPlace = document.querySelector('.off-canvas nav');
    dptPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav ');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();
//show menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');

menuButton.addEventListener('click', function () {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function () {
    addclass.classList.remove('showmenu')
})


//show sub menu
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
    console.log("hihi");
}



// show menu bottom
const searchButton = document.querySelector('.t-search'),
        tClose = document.querySelector('.search-close'),
        showClass = document.querySelector('.site');

searchButton.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
});


//show
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
        dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function(){
    dptClass.classList.toggle('showdpt')
})

// swiper


const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// product image slider


const productThumbnail = new Swiper('.small-image' ,{
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode:true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
}) 

const productBig = new Swiper('.big-image' ,{
loop: true,
autoHeight: true,
navigation : {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
thumbs: {
    swiper :productThumbnail
}
}) 

const divtoshow = '.mini-cart';
const divPopup = document.querySelector(divtoshow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
   
        }
    },250)
});
    // close the popup
    document.addEventListener('click' ,(e) => {
        const isClosest = e.target.closest(divtoshow);
        if(!isClosest && divPopup.classList.contains('show')) { 
            divPopup.classList.remove('show');
    }
})

// model

window.onload = function() {
    document.querySelector('site').classList.toggle('showmodal')
    alert("dfjk")
}
document.querySelector('.modalclose').addEventListener('click' ,function() {
    document.querySelector('.site').classList.remove('showmodal')
})

// back to op

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
    document.getElementById("backtotop").style.display = "block";
} else {
    document.getElementById("backtotop").style.display = "none";
}
}