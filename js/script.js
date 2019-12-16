$(document).ready(function () {
    autoHeightBottomMenu();
    openCard();
    funcPopup();
    openFullDescPrivilege();
    openItemIcon();
    iniSliders();
    openMobileMenu();
    openSubMenuFooter();
    openSearchFormHeader();
    openDescScenar();
    updatePageAfterResize();
    activeCase();
    showVideo();
    showCase();
});

function autoHeightBottomMenu() {
    if($(window).width <= 767){
        var height_wrp = $('.bottomMenu').height(),
            height_head = $('.headMenu').height() + 25;
        height_wrp = height_wrp - height_head;
        $('.bodyMenu').css('height', height_wrp);
    }
}

function openCard() {
    $('.grid-top-product .wrp').click(function(){
        $(this).children('.small-button').fadeToggle('fast');
    });
}

function funcPopup() {
    var scroll_pos,
        flag_popup = '',
        wrp_popup = $('.wrp-popup');

    $('.open-popup').click(function () {
        wrp_popup.css('display','flex');
        $('.popup').css('display','block');
        scroll_pos = $(window).scrollTop();
        $('body').css({'position':'fixed', 'width':'100%', 'overflow':'hidden', 'top':'-' +scroll_pos+ 'px'});
        $(window).scrollTop(scroll_pos);
        flag_popup = 'open';
    });

    wrp_popup.click(function (event) {
        if($(event.target).closest('.popup').length) return;
        wrp_popup.css('display', 'none');
        $('.popup').css('display','none');
        $('body').removeAttr('style');
        $(window).scrollTop(scroll_pos);
        flag_popup = 'close';
        event.stopPropagation();
    });

    $('.close-popup').click(function () {
        $('.wrp-popup').css('display','none');
        $('.popup').css('display','none');
        $('body').removeAttr('style');
        $(window).scrollTop(scroll_pos);
        flag_popup = 'close';
    });

    $('.open-p').click(function () {
        wrp_popup.css('display','flex');
        scroll_pos = $(window).scrollTop();
        $('body').css({'position':'fixed', 'width':'100%', 'overflow':'hidden', 'top':'-' + scroll_pos + 'px'});
        $(window).scrollTop(scroll_pos);

        var id_popup = '#popup-' + $(this).attr('data-id');
        $(id_popup).css('display','block');

        flag_popup = 'open';
        console.log('open-p');
    });

    $('.open-fb').click(function () {
        wrp_popup.css('display','flex');
        scroll_pos = $(window).scrollTop();
        $('body').css({'position':'fixed', 'width':'100%', 'overflow':'hidden', 'top':'-' + scroll_pos + 'px'});
        $(window).scrollTop(scroll_pos);

        $('.popup-feedback').css('display', 'block');
        console.log('open-fb');
    })

}

function openFullDescPrivilege() {
    $('.privilege').click(function () {
        var id = $(this).attr('id'),
            child = $(this).children('div').children('.privilege-text-desc-sm');

        if($(window).width() >= 576){
            $('.privilege-desc-full').css('display','none');
            $('#' + id + '-desc').css('display','block');
            $('.privilege').removeClass('active-privilege');
            $(this).addClass('active-privilege');
        } else {
            if(child.css('display') === 'block'){
                child.css('display','none');
                $('.privilege').removeClass('active-privilege');
            } else {
                //var id = $(this).attr('id');
                $('.privilege-text-desc-sm').css('display','none');
                $('#' + id + '-desc-sm').css('display','block');
                $('.privilege').removeClass('active-privilege');
                $(this).addClass('active-privilege');
            }
        }

        $(window).resize(function() {
            if($(window).width() >= 576){
                console.log('resize to 576');
                console.log(id);
                $('.privilege-text-desc-sm').css('display','none');
                $('.privilege-desc-full').css('display','none');
                $('#' + id + '-desc').css('display','block');
            }
            else {
                console.log('resize to 575');
                $('.privilege-desc-full').css('display','none');
                $('.privilege-text-desc-sm').css('display','none');
                $('#' + id + '-desc-sm').css('display','block');
            }
        });
    })
}

function openItemIcon() {
    var celebrate_type = $('.celebration-type');
    celebrate_type.click(function(){
        celebrate_type.removeClass('active-item-celebration');
        celebrate_type.removeClass('hover-item-celebration');
        $(this).addClass('active-item-celebration');

        var id = $(this).attr('id');
        $('.celebration-img').css('display','none');
        $('#' + id + '-img').css('display','block');
    });
    celebrate_type.mouseover(function () {
        $(this).addClass('hover-item-celebration');
    });
    celebrate_type.mouseout(function () {
        $(this).removeClass('hover-item-celebration');
    });
}

function iniSliders() {
    var sliderTopProduct,
        sliderHowUse,
        sliderOpportunities,
        sliderSolutionPresent,
        sliderCelebrationType,
        sliderOurClients;

    $('.slider-review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    if($(window).width() <= 767 ){
        $('.top-product-slider').slick({
            dots: true
        });
        sliderTopProduct = true;

        $('.our-clients-slider').slick({
            dots: true
        });
        sliderOurClients = true;
    }
    if($(window).width() <= 575){
        $('.slider-how-use').slick({
            dots: true,
            arrows: false
        });
        sliderHowUse = true;

        $('.slider-opportunities').slick({
            dots: true,
            arrows: false
        });
        sliderOpportunities = true;

        $('.slider-solution-present').slick({
            dots: true,
            arrows: false
        });
        sliderSolutionPresent = true;

        $('.slider-celebration-type').slick({
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false
        });
        sliderCelebrationType = true;
    }

    $(window).resize(function() {
        if($(window).width() > 767) {
            if(sliderTopProduct){
                $('.top-product-slider').slick('unslick');
                sliderTopProduct = false;
            }
            if(sliderOurClients){
                $('.our-clients-slider').slick('unslick');
                sliderOurClients = false;
            }
        }
        if($(window).width() <= 767) {
            if((!sliderTopProduct) || (sliderTopProduct === 'undefined')){
                $('.top-product-slider').slick({
                    dots: true
                });
                sliderTopProduct = true;
            }
            if((!sliderOurClients) || (sliderOurClients === 'undefined')){
                $('.our-clients-slider').slick({
                    dots: true
                });
                sliderOurClients = true;
            }
        }


        if($(window).width() > 575) {
            if(sliderHowUse) {
                $('.slider-how-use').slick('unslick');
                sliderHowUse = false;
            }
            if(sliderOpportunities) {
                $('.slider-opportunities').slick('unslick');
                sliderOpportunities = false;
            }
            if(sliderSolutionPresent) {
                $('.slider-solution-present').slick('unslick');
                sliderSolutionPresent = false;
            }
            if(sliderCelebrationType) {
                $('.slider-celebration-type').slick('unslick');
                sliderCelebrationType = false;
            }
        }
        if($(window).width() <= 575) {
            if((!sliderHowUse) || (sliderHowUse === 'undefined')) {
                $('.slider-how-use').slick({
                    dots: true,
                    arrows: false
                });
                sliderHowUse = true;
            }
            if((!sliderOpportunities) || (sliderOpportunities === 'undefined')) {
                $('.slider-opportunities').slick({
                    dots: true,
                    arrows: false
                });
                sliderOpportunities = true;
            }
            if((!sliderSolutionPresent) || (sliderSolutionPresent === 'undefined')) {
                $('.slider-solution-present').slick({
                    dots: true,
                    arrows: false
                });
                sliderSolutionPresent = true;
            }
            if((!sliderCelebrationType) || (sliderCelebrationType === 'undefined')) {
                $('.slider-celebration-type').slick({
                    dots: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false
                });
                sliderCelebrationType = true;
            }
        }
    });

}

function openMobileMenu() {
    $('.mobile-menu-btn').click(function () {
        $('nav').slideToggle();
    })
}

function openSubMenuFooter() {
    $('.headMenu').click(function () {
        if($(window).width() <= 767) {
            var parent = $(this).parent(),
                body_menu = $(parent).find('.bodyMenu'),
                chevron = $(parent).find('.fa-chevron-down');

            if (body_menu.length === 0) {
                var grand_parent = $(parent).parent();
                body_menu = $(grand_parent).find('.bodyMenu');
                console.log(grand_parent);
                console.log(body_menu);
            }

            if ($(body_menu).css('display') === 'none') {
                $(chevron).css({'transform': 'rotate(180deg)', 'transition': 'transform 0.5s'});
            } else {
                $(chevron).css({'transform': 'rotate(0deg)', 'transition': 'transform 0.5s'});
            }

            body_menu.removeClass('left-border');
            body_menu.slideToggle();
        }
    });
}

function openSearchFormHeader() {
    $('.top-part .fa-search').click(function () {
        if($(window).width() <= 991) {
            $('.middle-search').slideToggle();
        }
    });
}

function openDescScenar() {
    var flag_open = false,
        objects = new Array();

    $('.flip-container').click(function () {
        var id = $(this).attr('data-id'),       // Сохраняем элемент по его атрибуту data-id
            length = objects.length,
            flag_search = false;

        // При клике проверяем есть ли элемент в массиве
        if(length > 0) {
            for(i = 0; i < length; i++){
                // Если есть, то закрываем элемент и удаляем его из массива
                if(id === objects[i]){
                    $(this).children('.flipper').css('transform','rotateY(360deg)');
                    objects.splice(i, 1);
                    flag_search = true;
                }
            }
            // // Если нет, то открываем и добавляем в массив
            if(!flag_search) {
                objects.push(id);
                $(this).children('.flipper').css('transform','rotateY(180deg)');
            }
        } else {
            // Массив пустой, просто добавляем элемент и открываем выбранную карту
            objects.push(id);
            $(this).children('.flipper').css('transform','rotateY(180deg)');
        }
    });
}

function updatePageAfterResize() {
    $(window).resize(function() {
        openItemIcon();
        if($(window).width() > 767){
            $('.privilege-text-desc-sm').removeAttr('style');
        }
    });
}

function activeCase() {
    $('.name-case').click(function () {
        $('.name-case').removeClass('active-case');
        $(this).addClass('active-case');
    })
}

function showVideo() {
    $('.video-play-button').click(function () {
        $('.video-wrp img').fadeOut();
        $('.video-wrp video').css('opacity', '1');
    })
}

function showCase() {
    $('.name-case').click(function(){
        var id_case = $(this).attr('id'),
            parent = $(this).closest('.container'),
            case_block = $(parent).find('#' + id_case + '-block');

        $('.case-block').removeClass('d-flex').addClass('d-none');
        $(case_block).removeClass('d-none').addClass('d-flex');
    });
}

function feedbackForm() {
    $('.popup-feedback input[type=submit]').click(function (event) {
        event.preventDefault();
        var data = $('.popup-feedback form').serialize(),
            name = $('#name-fb').val(),
            phone = $('#number-fb').val(),
            email = $('#email-fb').val();
        if((data != '') && (name != '') && (phone != '') && (email != '')) {
            ajaxSend(data);
        } else {
            alert('Пожалуйста, заполните пустые поля!');
        }

    });
    function ajaxSend(data) {
        $.ajax({
            url:        "../send.php",
            type:       "POST",
            dataType:   "html",
            data:       data,
            success: function(response) {
                alert('Данные успешно отправлены! Ожидайте звонка!');
                $('input[type=text]').val('');
                $('input[type=email]').val('');
                $('.wrp-popup').css('display', 'none');
                $('.popup').css('display', 'none');
                $('body').removeAttr('style');
            },
            error: function(response) {
                alert('Произошла ошибка. Попробуйте позже.');
            }
        });
    }
}