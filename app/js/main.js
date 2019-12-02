$(document).ready(function () {

    $('.slider').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
    });

    $('.project-main-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
    })


    $('.gallery-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
    })

    $('.partnior-img').owlCarousel({
        responsive: {
            1199: {
                items: 5
            },
            991: {
                items: 4
            },
            768: {
                items: 3
            },
            575: {
                items: 2
            },
            480: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    })


});



