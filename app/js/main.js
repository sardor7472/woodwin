$(document).ready(function () {

    $('.slider').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
    });


    // $('.gallery-slider').owlCarousel({
    //     margin: 15,
    //     nav: false,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 3
    //         },
    //         992: {
    //             items: 4
    //         }
    //     }
    // });

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
    });

    open();

    var btn = $('.btn');

    btn.on('click', function () {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
    });

    // main slider
    if (windowWidth > 991) {
        mainSlider(3)
        gallerySlider(4)
    } else if (windowWidth > 768) {
        mainSlider(2)
        gallerySlider(2)
    } else {
        mainSlider(1)
        gallerySlider(2)
    }//  main slider







});

function open() {
    $('.hamburger').click(function () {
        const nav = $('#list').toggleClass('open');
    });
}

// render main slider function
const buildProjectMainSlider = function (selector, sliderInner) {
    const projectMainSlider = selector;
    const projectMainSliderElement = projectMainSlider.find(sliderInner);
    return function (n) {
        var projectMainSliders = '<div>';
        var i = 1;
        projectMainSliderElement.each(function (index) {

            projectMainSliders += $(this).prop('outerHTML');
            if (!(index + 1 === projectMainSliderElement.length)) {
                if (i % n === 0) {
                    projectMainSliders += '</div><div>';
                }
                i++;
            }
        });
        projectMainSliders += '</div>';
        projectMainSlider.html(projectMainSliders);
        projectMainSlider.owlCarousel({
            nav: false,
            dots: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
};
const mainSlider = buildProjectMainSlider($('.project-main-slider'), '.project-main-element-card');
const windowWidth = $(window).outerWidth();
const gallerySlider = buildProjectMainSlider($('.gallery-slider'), '.gallery-slider-card');








