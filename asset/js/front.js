(function ($) {
    $(document).ready(function ($) {
        $('.guide-block .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 2},
                400: {items: 3},
                600: {items: 3},
                1000: {items: 4}
            }
        })
    });

    $(document).ready(function ($) {
        $('.shop-block-product .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 2},
                400: {items: 3},
                600: {items: 3},
                1000: {items: 4}
            }
        })
    });

    $(document).ready(function ($) {
        $('.shop-block-special .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 2},
                400: {items: 3},
                600: {items: 2},
                1000: {items: 2}
            }
        })
    });

    $(document).ready(function () {
        $('.hover-captions').hover(
            function () {
                $(this).find('.hover-caption').slideDown(250);
            },
            function () {
                $(this).find('.hover-caption').slideUp(250);
            }
        );
    });

    $(document).ready(function () {
        var length = 2;
        var timer = null;
        function search() {
            var keyword = $("#search-keyword").val();
            if (keyword.length >= length) {
                $.get("https://www.cafeyab.com/search/ajax/", {q: keyword}).done(function (data) {
                    $('.search-results').html('');
                    var results = jQuery.parseJSON(data);
                    $(results).each(function (key, value) {
                        if (value.image != '') {
                            $('.search-results').append('<li' + value.class + '><a title="' + value.title + '" href="' + value.url + '"><img src="' + value.image + '" alt="' + value.title + '"> ' + value.title + '</a></li>');
                        } else if (value.icon != '') {
                            $('.search-results').append('<li' + value.class + '><a title="' + value.title + '" href="' + value.url + '"><i class="fa ' + value.icon + '"></i> ' + value.title + '</a></li>');
                        } else {
                            $('.search-results').append('<li' + value.class + '><a title="' + value.title + '" href="' + value.url + '">' + value.title + '</a></li>');
                        }
                    })
                });
            } else {
                $('.search-results').html('');
            }
        }
        $("#search-keyword").keyup(function() {
            clearTimeout(timer);
            timer = setTimeout(search, 1500);
        }).blur(function () {
            $(".search-results").fadeOut(500);
        }).focus(function () {
            $(".search-results").show().append('<li><a>در حال جستجو ...</a></li>');
        });
    });

    $(document).ready(function () {
        $(".dropdown-toggle-shop").click(function () {
            window.open("https://www.cafeyab.com/shop");
        });
    });
})(jQuery)