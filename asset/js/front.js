(function ($) {
    $(document).ready(function () {
        //Fix navbar multiple level
        var navbar = $('.pi-navbar-nav');
        var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
        navbar.find('>li').each(function () {
            var $this = $(this);
            var caretStr = '<span class="pi-navbar-caret"></span>';
            caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
            if ($this.find('li').length) {
                $this.append(caretStr);
            }
        });
        navbar.find('ul').addClass('dropdown-menu');

        if (!hasBrand) {
            navbar.css('marginLeft', '-15px');
        }
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
})(jQuery)