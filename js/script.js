(function () {
    "use strict";
    var DURU = {
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.enableGridGallery();
            this.enablePopupGallery();
        }
        , cacheDom: function () {
            this._body = $('body');
            this.yscottGalleryTabs = $('.yscott-toolbar-item');
            this.yscottGalleryItem = $('.yscott-gallery-item');
        }
        , bindEvents: function () {
            var self = this;
            this.yscottGalleryTabs.on('click', self.changeActiveTab);
            this.yscottGalleryTabs.on('click', self.addGalleryFilter);
        }
        , /* ======= popup gallery ======= */
        enablePopupGallery: function () {
            $('.yscott-popup-gallery').each(function () {
                $(this).magnificPopup({
                    delegate: 'a'
                    , type: 'image'
                    , gallery: {
                        enabled: true
                    }
                });
            });
        }
        , /* ======= gallery tab ======= */
        changeActiveTab: function () {
            $(this).closest('.yscott-gallery-toolbar').find('.active').removeClass('active');
            $(this).addClass('active');
        }
        , /* ======= gallery filter ======= */
        addGalleryFilter: function () {
            var value = $(this).attr('data-filter');
            if (value === 'all') {
                DURU.yscottGalleryItem.show('3000');
            }
            else {
                DURU.yscottGalleryItem.not('.' + value).hide('3000');
                DURU.yscottGalleryItem.filter('.' + value).show('3000');
            }
        }
        , /* ======= grid gallery ======= */
        enableGridGallery: function () {
            $('.yscott-grid-gallery').each(function (i, el) {
                var item = $(el).find('.yscott-grid-item');
                $(el).masonry({
                    itemSelector: '.yscott-grid-item'
                    , columnWidth: '.yscott-grid-item'
                    , horizontalOrder: true
                });
            });
        }
    };
    var header = $(".start-style");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        }
        else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    // Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });
    // img zoom
    $(".img-zoom").magnificPopup({
            type: "image"
            , closeOnContentClick: !0
            , mainClass: "mfp-fade"
            , gallery: {
                enabled: !0
                , navigateByImgClick: !0
                , preload: [0, 1]
            }
        })
    DURU.init();
})();