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

$('.rating').click(function (e) {
    var itemId = '#' + $(this).attr('id');
    var rateIndex = e.target.closest('button').dataset.rate;

    $(itemId + ' .rating__btn').removeClass('js-active');

    for (var i = 0; i < rateIndex; i++) {
        $(itemId + ' .rating__btn').eq(i).addClass('js-active');
    }

    addClass(itemId, rateIndex);
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