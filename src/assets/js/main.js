'use strict';
(function ($) {
    // ==========================================
    //      Start Document Ready function
    // ==========================================
    $(document).ready(function () {
        // ============== Header Hide Click On Body Js Start ========
        $('.header-button').on('click', function () {
            $('.body-overlay').toggleClass('show');
        });
        $('.body-overlay').on('click', function () {
            $('.header-button').trigger('click');
            $(this).removeClass('show');
        });
        // =============== Header Hide Click On Body Js End =========

        //============================ Scroll To Top Icon Js Start =========
        (function () {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= 200) {
                    $('.header').addClass('fixed-header');
                } else {
                    $('.header').removeClass('fixed-header');
                }
            });

        })()
        // ========================== Header Hide Scroll Bar Js Start =====================
        $('.navbar-toggler.header-button').on('click', function () {
            $('body').toggleClass('scroll-hide-sm');
        });
        $('.body-overlay').on('click', function () {
            $('body').removeClass('scroll-hide-sm');
        });
        // ========================== Header Hide Scroll Bar Js End =====================

        //============================ Scroll To Top Icon Js Start =========
        var btn = $('.scroll-top');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
        //========================= Scroll To Top Icon Js End ======================

        // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js Start =====================
        $('.dropdown-item').on('click', function () {
            $(this).closest('.dropdown-menu').addClass('d-block');
        });
        // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js End =====================

        // ========================== Add Attribute For Bg Image Js Start =====================
        $('.bg-img').css('background-image', function () {
            return `url(${$(this).data('background-image')})`;
        });
        // ========================== Add Attribute For Bg Image Js End =====================

        // ========================== add active class to ul>li top Active current page Js Start =====================
        function dynamicActiveMenuClass(selector) {
            if (!($(selector).length)) return;

            let fileName = window.location.pathname.split('/').reverse()[0];
            selector.find('li').each(function () {
                let anchor = $(this).find('a');
                if ($(anchor).attr('href') == fileName) {
                    $(this).addClass('active');
                }
            });
            // if any li has active element add class
            selector.children('li').each(function () {
                if ($(this).find('.active').length) {
                    $(this).addClass('active');
                }
            });
            // if no file name return
            if ('' == fileName) {
                selector.find('li').eq(0).addClass('active');
            }
        }
        dynamicActiveMenuClass($('ul.sidebar-menu-list'));

        // ========================== add active class to ul>li top Active current page Js End =====================

        // ================== Password Show Hide Js Start ==========
        $('.toggle-password').on('click', function () {
            $(this).toggleClass('fa-eye');
            var input = $($(this).attr('id'));
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
        });
        // =============== Password Show Hide Js End =================

        // ================== Sidebar Menu Js Start ===============
        // Sidebar Dropdown Menu Start
        $('.has-dropdown > a').click(function () {
            $('.sidebar-submenu').slideUp(200);
            if ($(this).parent().hasClass('active')) {
                $('.has-dropdown').removeClass('active');
                $(this).parent().removeClass('active');
            } else {
                $('.has-dropdown').removeClass('active');
                $(this).next('.sidebar-submenu').slideDown(200);
                $(this).parent().addClass('active');
            }
        });
        // Sidebar Dropdown Menu End
        // Sidebar Icon & Overlay js
        $('.navigation-bar').on('click', function () {
            $('.sidebar-menu').addClass('show-sidebar');
            $('.sidebar-overlay').addClass('show');
        });
        $('.sidebar-menu__close, .sidebar-overlay').on('click', function () {
            $('.sidebar-menu').removeClass('show-sidebar');
            $('.sidebar-overlay').removeClass('show');
        });
        // Sidebar Icon & Overlay js
        // ===================== Sidebar Menu Js End =================

        // ==================== Dashboard User Profile Dropdown Start ==================
        $('.user-info__button').on('click', function () {
            $('.user-info-dropdown').toggleClass('show');
        });
        $('.user-info__button').attr('tabindex', -1).focus();

        $('.user-info__button').on('focusout', function () {
            $('.user-info-dropdown').removeClass('show');
        });
        // ==================== Dashboard User Profile Dropdown End ==================

        //Plugin Customization Start
        // ========================= Select2 Js Start ==============
        (function () {
            $('.select2').each((index, select) => {
                $(select).wrap('<div class="select2-wrapper"></div>').select2({
                    dropdownParent: $(select).closest('.select2-wrapper')
                });
            });
        })()
        // ========================= Select2 Js End ==============

        // ========================= Slick Slider Js Start ==============

        $('.banner-review-item').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: true,
            pauseOnHover: true,
            arrows: false,
            prevArrow:
                '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',

            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 464,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    },
                },
            ],
        });
        // ========================= Slick Slider Js End ===================

        //================== popular slider js start here ==================
        $(".category-wrapper").slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"> <i class="las la-angle-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"> <i class="las la-angle-right"></i> </button>',
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        arrows: true,
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                    },
                }
            ],
        });
        //================== popular slider js end here ==================

        // ads js start here 
        $(".discount-ads__slider").slick({
            fade: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            centerMode: false,
            dots: true,
            arrows: false,
            nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
            prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        // ads js end here 

        //============== product details slider js start here ==============
        $('.product-details__wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.product-details__gallery',
            prevArrow: '<button type="button" class="slick-prev gig-details-thumb-arrow"><i class="las la-long-arrow-alt-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next gig-details-thumb-arrow"><i class="las la-long-arrow-alt-right"></i></button>',
        });

        $('.product-details__gallery').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-details__wrapper',
            dots: false,
            arrows: true,

            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev gig-details-arrow"><i class="las la-long-arrow-alt-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next gig-details-arrow"><i class="las la-long-arrow-alt-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 676,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        //============== product details slider js end here ==============

        // ================qty js start here=================== 
        var buttonPlus = $(".qty-btn-plus");
        var buttonMinus = $(".qty-btn-minus")
        var incrementPlus = buttonPlus.click(function () {
            var $n = $(this)
                .parent(".qty-container")
                .find(".input-qty");
            $n.val(Number($n.val()) + 1);
        });
        var incrementMinus = buttonMinus.click(function () {
            var $n = $(this)
                .parent(".qty-container")
                .find(".input-qty");
            var amount = Number($n.val());
            if (amount > 0) {
                $n.val(amount - 1);
            }
        });

        //================= qty js end here =============

        // cart sidebar js start here====================
        $('.cart-action-btn').on('click', function () {
            $('.cart__sidebar').addClass('show');
            $('.sidebar-overlay').addClass('show');
        });
        $('.sidebar-overlay, .sidebar-close-btn').on('click', function () {
            $('.cart__sidebar').removeClass('show');
            $('.sidebar-overlay').removeClass('show');
        });
        // cart sidebar js end here ====================

        // review rating and filter js 
        $('.sort-item__btn').on('click', function () {
            let menu = $(this).siblings('.menu-content-list');
            $('.menu-content-list').not(menu).removeClass('show');
            menu.toggleClass('show');
        });

        // tab js start here ============================
        $(function () {
            function updateBar(navItem) {
                $('.tab-bar').css({
                    'width': navItem.outerWidth(),
                    'left': navItem.position().left
                });
            }

            // Update bar on click and on page load if active
            $('.custom--tab .nav-link').on('click', function () {
                updateBar($(this));
            }).filter('.active').each(function () {
                updateBar($(this));
            });
        });

        // tab js end here ===================================

        // testimonial js start here 
        $(".testimonial-slider").slick({
            fade: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            centerMode: false,
            dots: false,
            arrows: false,
            nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
            prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        // testimonial js end here 
        // ========================= Odometer Counter Up Js End ==========
        $('.counterup-item').each(function () {
            $(this).isInViewport(function (status) {
                if (status === 'entered') {
                    for (
                        var i = 0;
                        i < document.querySelectorAll('.odometer').length;
                        i++
                    ) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute('data-odometer-final');
                    }
                }
            });
        });

        // ========================= Odometer Up Counter Js End =====================
    });

    // ==========================================
    //      End Document Ready function
    // ==========================================

    // ========================= Preloader Js Start =====================
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });
    // ========================= Preloader Js End=====================
})(jQuery);








