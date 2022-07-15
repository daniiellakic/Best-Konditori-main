//Navigation toogle

var toggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});


function closeNav() {
    navigation.classList.remove('active');
    toggle.classList.remove('active');
}


/*  NAVIGATION STICKY AND CHANGES COLOR 

var navbar = document.querySelector('.navigation')

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navigation.classList.add('scrolled')
    } else {
        navigation.classList.remove('scrolled')
    }
}

*/