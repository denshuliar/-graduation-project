$('.blog__btn').click(function (e) {
    var elemId = '#js-popup-' + $(this).data('order');
    $(elemId).addClass('blog__popup--is-active');
});

$('.js-blog-close').on('click', function () {
    $(this).closest('div').removeClass('blog__popup--is-active');
});

var addClass = function (id, index) {
    $(id + ' .rating__star').removeClass('rating__star--active');

    for (var i = 0; i < index; i++) {
        $(id + ' .rating__btn').eq(i).children().addClass('rating__star--active');
    }
};

var menuBtn = $('.js-header-menu');
var menu = $('.js-menu');

menuBtn.on('click', function () {
    menu.toggleClass('modal__menu--is-active')
});

$('.menu__item').on('click', function () {
    menu.removeClass('modal__menu--is-active');
});

$('#menu-close').on('click', function () {
    menu.removeClass('modal__menu--is-active');
})
// Home modal btn

var homeMadalBtn = $('.js-modal-btn');
var modalBox = $('.js-modal-box');
var sendBtn = $('.js-btn-send');
var closeBtn = $('.js-btn-close');

homeMadalBtn.on('click', function () {
    modalBox.toggleClass('modal__btn-box--is-active');
});

sendBtn.on('click', function () {
    modalBox.removeClass('modal__btn-box--is-active');
});

closeBtn.on('click', function () {
    modalBox.removeClass('modal__btn-box--is-active');
});

$('.rating').click(function (e) {
    var itemId = '#' + $(this).attr('id');
    var rateIndex = e.target.closest('button').dataset.rate;

    $(itemId + ' .rating__btn').removeClass('js-active');

    for (var i = 0; i < rateIndex; i++) {
        $(itemId + ' .rating__btn').eq(i).addClass('js-active');
    }

    addClass(itemId, rateIndex);
});

$('.rating__btn').mouseover(function (e) {
    var slideId = '#' + $(this).parent('div').attr('id');
    var rateIndex = $(this).data('rate');

    addClass(slideId, rateIndex);
});

$('.rating__btn').mouseleave(function (e) {
    var slideId = '#' + $(this).parent('div').attr('id');
    var items = $(slideId + ' .rating__btn');
    var activeItems = 0;

    for (var i = 0; i < items.length; i++) {
        if (items.eq(i).hasClass('js-active')) {
            activeItems += 1;
        }
    }

    addClass(slideId, activeItems);
});

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 46.9642305,
            lng: 32.002913
        },
        zoom: 8
    });
}

$(document).ready(function () {
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var mail = $('#mail');

    mail.blur(function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {
                $('#valid').text('Подходит');
                $('#submit').attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            } else {
                $('#valid').text('Не подходит');
                $('#submit').attr('disabled', true);
                mail.addClass('ok');
            }
        } else {
            $('#valid').text('Поле e-mail не должно быть пустым!');
            mail.addClass('error');
            $('#submit').attr('disabled', true);
        }
    });
});