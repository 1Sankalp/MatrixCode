function sendToPage(){
    var input = document.getElementById("search").value;
     //alert(input);
    if (input == "FX35"){
        location.replace("FX35.html");
        return false;
    }
    else if (input == "3WRI"){
        location.replace("3WRI.html");
        return false;
    }
    else if (input == "OUS3"){
        location.replace("OUS3.html");
        return false;
    }
    else if (input == "5C6S"){
        location.replace("5C6S.html");
        return false;
    }
    else if (input == "5CZ8"){
        location.replace("5CZ8.html");
        return false;
    }else if (input == "V06B"){
        location.replace("V06B.html");
        return false;
    }else if (input == "TB2H"){
        location.replace("TB2H.html");
        return false;
    }else if (input == "XYCB"){
        location.replace("XYCB.html");
        return false;
    }else if (input == "X69U"){
        location.replace("X69U.html");
        return false;
    }else if (input == "QVAX"){
        location.replace("QVAX.html");
        return false;
    }else if (input == "3B0B"){
        location.replace("3B0B.html");
        return false;
    }else if (input == "Y83C"){
        location.replace("Y83C.html");
        return false;
    }else if (input == "XU1W"){
        location.replace("XU1W.html");
        return false;
    }else if (input == "1BAH"){
        location.replace("1BAH.html");
        return false;
    }else if (input == "3L6Z"){
        location.replace("3L6Z.html");
        return false;
    }else if (input == "E56Q"){
        location.replace("E56Q.html");
        return false;
    }else if (input == "DDPX"){
        location.replace("DDPX.html");
        return false;
    }else if (input == "N8NT"){
        location.replace("N8NT.html");
        return false;
    }else if (input == "V9VQ"){
        location.replace("V9VQ.html");
        return false;
    }else if (input == "TXKQ"){
        location.replace("TXKQ.html");
        return false;
    }else if (input == "T3TW"){
        location.replace("T3TW.html");
        return false;
    }else if (input == "SASH"){
        location.replace("SASH.html");
        return false;
    }
    else {
        alert('Invalid Input.');
    }
        }



      
(function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });



})(jQuery);