!function(e){e(window).on("load",(function(){e("[data-paroller-factor]").paroller(),e(".preloader").fadeOut(1e3),e(".bg_img").css("background-image",(function(){return"url("+e(this).data("background")+")"}))})),e(document).ready((function(){e(".select-bar").niceSelect(),e(".popup").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1,disableOn:300}),e("body").each((function(){e(this).find(".img-pop").magnificPopup({type:"image",gallery:{enabled:!0}})})),(new WOW).init(),e(".faq-wrapper .faq-title").on("click",(function(o){var a=e(this).parent(".faq-item");a.hasClass("open")?(a.removeClass("open"),a.find(".faq-content").removeClass("open"),a.find(".faq-content").slideUp(300,"swing")):(a.addClass("open"),a.children(".faq-content").slideDown(300,"swing"),a.siblings(".faq-item").children(".faq-content").slideUp(300,"swing"),a.siblings(".faq-item").removeClass("open"),a.siblings(".faq-item").find(".faq-title").removeClass("open"),a.siblings(".faq-item").find(".faq-content").slideUp(300,"swing"))})),e(".faq--area .faq-title").on("click",(function(o){var a=e(this).parent(".faq--item");a.hasClass("open")?(a.removeClass("open"),a.find(".faq-content").removeClass("open"),a.find(".faq-content").slideUp(300,"swing")):(a.addClass("open"),a.children(".faq-content").slideDown(300,"swing"),a.siblings(".faq--item").children(".faq-content").slideUp(300,"swing"),a.siblings(".faq--item").removeClass("open"),a.siblings(".faq--item").find(".faq-title").removeClass("open"),a.siblings(".faq--item").find(".faq-content").slideUp(300,"swing"))})),e("ul>li>.submenu").parent("li").addClass("menu-item-has-children"),e(".submenu").parent("li").hover((function(){var o=e(this).find("ul");if(e(o).offset().left+o.width()>e(window).width()){var a=-e(o).width();o.css({left:a})}})),e(".menu li a").on("click",(function(o){var a=e(this).parent("li");a.hasClass("open")?(a.removeClass("open"),a.find("li").removeClass("open"),a.find("ul").slideUp(300,"swing")):(a.addClass("open"),a.children("ul").slideDown(300,"swing"),a.siblings("li").children("ul").slideUp(300,"swing"),a.siblings("li").removeClass("open"),a.siblings("li").find("li").removeClass("open"),a.siblings("li").find("ul").slideUp(300,"swing"))})),e(".widget-slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,margin:30});var o=e(".widget-slider");o.owlCarousel(),e(".widget-next").on("click",(function(){o.trigger("next.owl.carousel")})),e(".widget-prev").on("click",(function(){o.trigger("prev.owl.carousel",[300])}));var a=e(".scrollToTop");e(window).on("scroll",(function(){e(this).scrollTop()<500?a.removeClass("active"):a.addClass("active")})),e(".scrollToTop").on("click",(function(){return e("html, body").animate({scrollTop:0},500),!1})),e(".header-bar").on("click",(function(){e(this).toggleClass("active"),e(".overlay").toggleClass("active"),e(".menu").toggleClass("active")})),e(".overlay").on("click",(function(){e(this).removeClass("active"),e(".header-bar").removeClass("active"),e(".menu").removeClass("active")})),window.scrollY>=1&&(e(".header-bottom").addClass("active"),e(".header-section-2").removeClass("plan-header"));var s=e(".header-section");e(window).on("scroll",(function(){e(this).scrollTop()<1?s.removeClass("active"):s.addClass("active")})),e(".tab ul.tab-menu li").on("click",(function(o){var a=e(this).closest(".tab"),s=e(this).closest("li").index();a.find("li").siblings("li").removeClass("active"),e(this).closest("li").addClass("active"),a.find(".tab-area").find("div.tab-item").not("div.tab-item:eq("+s+")").hide(10),a.find(".tab-area").find("div.tab-item:eq("+s+")").fadeIn(10),o.preventDefault()})),e(".tab-up ul.tab-menu li").on("click",(function(o){var a=e(this).closest(".tab-up"),s=e(this).closest("li").index();a.find("li").siblings("li").removeClass("active"),e(this).closest("li").addClass("active"),a.find(".tab-area").find("div.tab-item").not("div.tab-item:eq("+s+")").slideUp(400),a.find(".tab-area").find("div.tab-item:eq("+s+")").slideDown(400),o.preventDefault()})),e(".counter").countUp({time:1500,delay:10}),e(".social-icons li a").on("mouseover",(function(o){var a=e(this).parent("li");a.children("a").hasClass("active"),a.siblings("li").children("a").removeClass("active"),e(this).addClass("active")})),e(".testimonial-slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,margin:0,mouseDrag:!1,touchDrag:!0});var i=e(".testimonial-slider");i.owlCarousel(),e(".testi-next").on("click",(function(){i.trigger("prev.owl.carousel")})),e(".testi-prev").on("click",(function(){i.trigger("next.owl.carousel",[300])})),e(".mobile-slider-16").owlCarousel({loop:!0,nav:!1,dots:!0,items:1,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!1,margin:0,mouseDrag:!1,touchDrag:!1}),e(".mobile-slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!1,margin:0,mouseDrag:!1,touchDrag:!1});var l=e(".mobile-slider");l.owlCarousel(),e(".cola-next").on("click",(function(){l.trigger("next.owl.carousel")})),e(".cola-prev").on("click",(function(){l.trigger("prev.owl.carousel",[300])})),e(".colaboration-slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!1,margin:0,mouseDrag:!1,touchDrag:!1});var t=e(".colaboration-slider");t.owlCarousel(),e(".cola-next").on("click",(function(){t.trigger("next.owl.carousel")})),e(".cola-prev").on("click",(function(){t.trigger("prev.owl.carousel",[300])})),e(".banner-4-slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!1,margin:0,mouseDrag:!1,touchDrag:!0});var n=e(".banner-4-slider");n.owlCarousel(),e(".ban-next").on("click",(function(){n.trigger("next.owl.carousel")})),e(".ban-prev").on("click",(function(){n.trigger("prev.owl.carousel",[300])})),e(".banner-1-slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,autoplay:!1,margin:0,mouseDrag:!1,touchDrag:!1,animateOut:"fadeOut",animateIn:"fadeIn"});var r=e(".banner-1-slider");r.owlCarousel(),e(".ban-click").on("click",(function(){r.trigger("next.owl.carousel")})),e((function(){e("#usd-range").slider({range:"min",value:250,min:1,max:500,slide:function(o,a){e("#usd-amount").val(a.value+" Users")}}),e("#usd-amount").val(e("#usd-range").slider("value")+" Users")})),e(".sponsor-slider").owlCarousel({loop:!0,margin:0,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:2},480:{items:3},768:{items:4}}}),e(".sponsor-slider-two").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:2},480:{items:3},768:{items:5},992:{items:3},1200:{items:4}}}),e(".sponsor-slider-3").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:2},480:{items:3},768:{items:4},992:{items:5},1200:{items:6}}}),e(".sponsor-slider-4").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:2},480:{items:3},768:{items:5},992:{items:6},1200:{items:7}}}),e(".logo-slider").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:2},480:{items:3},768:{items:4},992:{items:5},1200:{items:6}}}),e(".client-slider").owlCarousel({loop:!0,margin:0,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:2},992:{items:3}}}),e(".history-slider").owlCarousel({loop:!0,margin:0,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,center:!0,responsive:{0:{items:1},767:{items:3},1199:{items:5}}}),e(".tool-slider").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!0,navText:["<i class='flaticon-double-left-angle-arrows' aria-hidden='true'></i>","<i class='flaticon-double-angle-arrow-pointing-to-right' aria-hidden='true'></i>"],dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:2},768:{items:3},992:{items:2}}}),e(".feature-item-2-slider").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:2},1200:{items:3}}}),e(".pricing-slider").owlCarousel({loop:!0,margin:0,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:2},992:{items:3},1200:{items:4}}}),e(".feat-slider").length&&e(".feat-slider").owlCarousel({center:!0,items:1,loop:!0,margin:0,singleItem:!0,nav:!1,dots:!1,thumbs:!0,mouseDrag:!1,touchDrag:!0,thumbsPrerendered:!0,animateOut:"fadeOut",animateIn:"fadeIn"});var u=e(".feat-slider, .app-screenshot-slider-20, .feature-content-slider-20");e(".feat-prev").on("click",(function(){u.trigger("prev.owl.carousel")})),e(".feat-next").on("click",(function(){u.trigger("next.owl.carousel",[300])})),e(".work-slider").length&&e(".work-slider").owlCarousel({center:!0,items:1,loop:!1,margin:0,singleItem:!0,nav:!0,dots:!1,thumbs:!0,mouseDrag:!1,touchDrag:!0,thumbsPrerendered:!0}),e(".screenshot-slider, .screenshot-slider-3").owlCarousel({items:1,loop:!1,margin:30,singleItem:!0,nav:!1,dots:!1});var c=e(".screenshot-slider, .screenshot-slider-3");e(".app-prev").on("click",(function(){c.trigger("prev.owl.carousel")})),e(".app-next").on("click",(function(){c.trigger("next.owl.carousel",[300])})),e(".screenshot-slider-2").owlCarousel({items:1,loop:!1,margin:30,singleItem:!0,nav:!1,dots:!0,dotsContainer:".dots-2"}),e(".app-screenshot-slider-20, .how-slider-20").owlCarousel({items:1,loop:!1,margin:30,singleItem:!0,nav:!1,dots:!0,dotsContainer:".dots-2",animateOut:"fadeOut",animateIn:"fadeIn",mouseDrag:!1}),e(".client-slider-2, .feature-content-slider-20").owlCarousel({items:1,loop:!1,margin:30,singleItem:!0,nav:!1,dots:!1}),e(".amazing-slider").owlCarousel({loop:!0,margin:30,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},450:{items:2},992:{items:3},1200:{items:3,margin:70}}}),e(".up--down--overflow").prev("*").addClass("pb-lg-200"),e(".up--down--overflow").next("*").addClass("pt-lg-200"),e(".up--down--overflow").addClass("pt-lg-0 pb-lg-0"),e(".chorka").on("click",(function(){e(".swap-area").toggleClass("active")})),e(".client-item-16 .client-thumb").on("mouseover",(function(o){var a=e(this).parent(".client-item-16");a.hasClass("open")?(a.removeClass("open"),a.removeClass("active")):(a.siblings(".client-item-16").find(".client-content").removeClass("active"),a.siblings(".client-item-16").removeClass("active"),a.children(".client-content").addClass("active"),a.addClass("active"))}))}))}(jQuery);