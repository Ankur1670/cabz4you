document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            toggler.setAttribute('aria-expanded', 'false');
        } else {
            navbarCollapse.classList.add('show');
            toggler.setAttribute('aria-expanded', 'true');
        }
    });
});

$(document).ready(function() {
    $('.navbar-close').click(function() {
        $('.navbar-collapse').removeClass('show');
    });
});


$(document).ready(function() {
    $('.nav-item.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});



$(document).ready(function(){
    $('.social-icons a').hover(function(){
        $(this).css('color', $(this).data('hover-color'));
    }, function(){
        $(this).css('color', '#fff');
    });
});