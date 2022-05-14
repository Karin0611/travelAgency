$(document).ready(() => {

    let prev = $('.prev');
    let next = $('.next');

    $('#photos-slider').slick({
        infinite: true,
        dots: true,
        appendDots: $('.dots-photos'),
        prevArrow:  $('.prev-photo'),
        nextArrow: $('.next-photo'),
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#photos-slider-adaptive').slick({
        dots: true,
        appendDots: $('.dots-photos-adaptive'),
        prevArrow:  $('.prev-photo-adaptive'),
        nextArrow: $('.next-photo-adaptive'),
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        adaptiveHeight: true
    });


    $('#offers').slick({
        infinite: true,
        dots: true,
        appendDots: $('.dots'),
        prevArrow:  $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    infinite: true,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
                },
            {
                breakpoint: 550,
                settings: {
                    variableWidth: true,
                    infinite: true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $('#reviews').slick({
        infinite: true,
        dots: true,
        appendDots: $('.dots-rev'),
        prevArrow:  $('.prev-rev'),
        nextArrow: $('.next-rev'),
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    infinite: true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('#reviews-adaptive').slick({
        infinite: true,
        dots: true,
        appendDots: $('.dots-rev-adaptive'),
        prevArrow:  $('.prev-rev-adaptive'),
        nextArrow: $('.next-rev-adaptive'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.magnific').magnificPopup({
        type: 'image'
    });

    $('.open-modal').click(() => {
        $('#order-call-block').css('display', 'flex');
    });

    $('#order-call-close, #order-call-block').click((e) => {
        if (e.target.id === 'order-call-close' || e.target.id === 'order-call-block') {
            $('#order-call-block').hide();
        }
    });

    $('#order-call-button > button').click(() => {
        let number = $('#phone-number');
        if (number.val()) {
            $('#order-call-sent').show();
            $('#order-call-content').hide();
        } else {
            $('.popup-error').show();
            number.css('border', 'solid 2px red');
        }
    });

    $('#form-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        if (name.val() && count.val()) {
            $(function(){
                if ( $(window).width() > 479 ) {
                    $('#form').remove();
                    $('#thanks').show();
                }
                else {
                    $('#thanks-mobile-container').show();
                    close.show();
                    close.click(() => {
                        $('#thanks-mobile-container').hide();
                    });
                }
            });
        } else {
            $('.form-error').show();
            name.css('border', 'solid 2px red');
            count.css('border', 'solid 2px red');
        }
    });

    $('#news-input-button').click(() => {
        let mail = $('#mail');
        if (mail.val()) {
        } else {
            mail.css('border', 'solid 2px red');
        }
    });



    $('#burger').click((e) => {
        $('#header').toggleClass('menu-open');
        $('#header #menu a').click ((e) => {
            $('#header').removeClass('menu-open');
        })
        $('#burger-close').click(() => {
            $('#header').removeClass('menu-open');
        });
    });

    let close = $('.x-mark');

    $('#read-1').click((e) => {
        $('#var-1').show();
        close.show();
        close.click(() => {
            $('#var-1').hide();
        });
    });

    $('#read-2').click((e) => {
        $('#var-2').show();
        close.show();
        close.click(() => {
            $('#var-2').hide();
        });
    });

    $('#read-3').click((e) => {
        $('#var-3').show();
        close.show();
        close.click(() => {
            $('#var-3').hide();
        });
    });

    $('#read-4').click((e) => {
        $('#var-4').show();
        close.show();
        close.click(() => {
            $('#var-4').hide();
        });
    });

    $('#read-5').click((e) => {
        $('#var-5').show();
        close.show();
        close.click(() => {
            $('#var-5').hide();
        });
    });

    $('#read-6').click((e) => {
        $('#var-6').show();
        close.show();
        close.click(() => {
            $('#var-6').hide();
        });
    });

    $('#rev-1').click((e) => {
        $('#rev-popup-1').show();
        close.show();
        close.click(() => {
            $('#rev-popup-1').hide();
        });
    });

    $('#rev-2').click((e) => {
        $('#rev-popup-2').show();
        close.show();
        close.click(() => {
            $('#rev-popup-2').hide();
        });
    });

    $('#rev-3').click((e) => {
        $('#rev-popup-3').show();
        close.show();
        close.click(() => {
            $('#rev-popup-3').hide();
        });
    });

    $('#rev-4').click((e) => {
        $('#rev-popup-4').show();
        close.show();
        close.click(() => {
            $('#rev-popup-4').hide();
        });
    });

})