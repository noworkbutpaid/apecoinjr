function saveAccept() {
    localStorage.setItem("acceptThetan", "true"), window.open("https://doc.thetanarena.com/")
}

function openNoticeModal() {
    "true" !== localStorage.getItem("acceptThetan") ? $("#noticeModal").modal("show") : window.open("https://doc.thetanarena.com/")
}
$(window).on("load", (function() {
    $(".loader-wrapper").fadeOut("slow"), $(window).width() < 992 && ($(".video-section video").prop("muted", !0), $("#myVideo")[0].play(), $(".video-section .btn-volume").removeClass("active"))
})), $(document).ready((function() {
    $(window).width() > 991 && $("#fullpage").length > 0 && $("#fullpage").fullpage({
        sectionSelector: ".section-full",
        anchors: ["home", "video", "gameplay", "nfts-item", "theta-coin", "theta-gem", "team", "roadmap", "partner"],
        licenseKey: "",
        autoScrolling: !0,
        menu: "#menu-fullpage",
        scrollHorizontally: !0,
        verticalCentered: !0,
        onLeave: function(e, t, s) {
            $(this);
            "up" == s && $("body").addClass("fixed"), "down" == s && $("body").removeClass("fixed"), $(".section-full").find(".animated").removeClass("go");
            const n = document.getElementsByClassName("header")[0],
                o = document.getElementsByClassName("addr-header")[0];
            o.style.top = `${n.getBoundingClientRect().height}px`, !0 === t.isFirst && (o.style.display = "none")
        },
        afterLoad: function(e, t, s) {
            $(".section-full").find(".animated").addClass("go"), $("#bgvid")[0].play(), $("body").hasClass("fp-viewing-video") ? $("#myVideo")[0].play() : $("#myVideo")[0].pause();
            const n = document.getElementsByClassName("social-btn-group")[0];
            null === t.anchor ? n.style.display = "none" : n.style.display = "flex";
            const o = document.getElementsByClassName("header")[0],
                a = document.getElementsByClassName("addr-header")[0];
            a.style.top = `${o.getBoundingClientRect().height}px`, !0 === t.isFirst ? a.style.display = "none" : a.style.display = "flex"
        }
    }), $(".scroll-to-target[href^='#']").on("click", (function(e) {
        e.preventDefault();
        var t = this.hash,
            s = $(t);
        $("html, body").stop().animate({
            scrollTop: s.offset().top
        }, 1500, "swing", (function() {}))
    })), $(".has-submenu > .btn-toggle-sub").on("click", (function(e) {
        var t = $(this).closest("li");
        t.hasClass("opened") ? (t.removeClass("opened"), t.find("> ul.sub-menu").slideUp(400)) : (t.addClass("opened"), t.find("> ul.sub-menu").slideDown(400)), t.siblings("li").removeClass("opened"), t.siblings("li").find(".has-submenu.opened").removeClass("opened"), t.siblings("li").find("ul:visible").slideUp()
    })), $(".btn-menu-mobile").on("click", (function() {
        return $(".overlay-menu").toggleClass("active"), $(".y-mobile-menu").toggleClass("show"), !1
    })), $(".overlay-menu, .m-menu-close").on("click", (function() {
        $(".y-mobile-menu").removeClass("show"), $(".overlay-menu").removeClass("active")
    })), $(".y-mobile-menu ul li a[href^='#']").on("click", (function(e) {
        e.preventDefault();
        var t = this.hash,
            s = $(t);
        $("html, body").stop().animate({
            scrollTop: s.offset().top - 69
        }, 800, "swing", (function() {})), $(".m-menu-close").trigger("click")
    }));
    var e;
    document.getElementById("myVideo"), document.getElementById("myBtn");
    $(".js-gameplay-slider").length > 0 && $(".js-gameplay-slider").owlCarousel({
        loop: !0,
        lazyLoad: !0,
        margin: 0,
        responsiveClass: !0,
        items: 1,
        dots: !0,
        navText: ["<img src='images/mutual/btn_0001_Previuos.png' /> <span>PREVIOUS </span>", "<span>NEXT </span> <img src='images/mutual/btn_0000_Nexxt.png' />"],
        rewindNav: !0,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    }), $(".js-nfts-slider").length > 0 && $(".js-nfts-slider").owlCarousel({
        loop: !0,
        lazyLoad: !0,
        margin: 40,
        responsiveClass: !0,
        items: 6,
        dots: !0,
        navText: ["<img src='images/mutual/btn_0001_Previuos.png' /> <span>PREVIOUS </span>", "<span>NEXT </span> <img src='images/mutual/btn_0000_Nexxt.png' />"],
        rewindNav: !0,
        nav: !0,
        responsive: {
            0: {
                items: 2,
                margin: 30
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 7
            },
            1400: {
                items: 7
            }
        }
    }), $(".js-team-slider").length > 0 && $(".js-team-slider").owlCarousel({
        loop: !0,
        margin: 20,
        responsiveClass: !0,
        items: 5,
        dots: !0,
        navText: ["<img src='images/mutual/btn_0001_Previuos.png' /> <span>PREVIOUS </span>", "<span>NEXT </span> <img src='images/mutual/btn_0000_Nexxt.png' />"],
        rewindNav: !0,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }), $(".gameplay-section .gameplay-slider .item .box-content .box-right .btn-watch a").click((function() {
        e = $(this).attr("data-src")
    })), $("#gameplayModal").on("shown.bs.modal", (function(t) {
        $("#video-modal").attr("src", e + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1")
    })), $("#gameplayModal").on("hide.bs.modal", (function(e) {
        $("#video-modal").attr("src", "")
    })), $("#gameplayModal").on("hide.bs.modal", (function(t) {
        $("#video").attr("src", e)
    })), $(".video-section .btn-volume").click((function() {
        $(".video-section video").prop("muted") ? ($(".video-section video").prop("muted", !1), $(this).addClass("active")) : ($(".video-section video").prop("muted", !0), $(this).removeClass("active"))
    })), $("#bgvid")[0].play(), $("#noticeFrame").ready((function() {
        var e = document.getElementById("noticeFrame").contentWindow;
        $(e).scroll((function() {
            var t = document.getElementById("noticeFrame").offsetHeight;
            $(e).scrollTop() + t >= .95 * $(e).height() && ($("#acceptBtn").removeAttr("disabled"), $("#acceptBtn").removeClass("btn-secondary"), $("#acceptBtn").addClass("btn-primary"))
        }))
    }))
})), $(document).on("scroll", (function() {
    if ($(window).width() < 992) {
        $("#myVideo");
        $(".video-section .box-video").hasClass("go") ? $("#myVideo")[0].play() : ($(".video-section video").prop("muted", !0), $(".video-section .btn-volume").removeClass("active"), $("#myVideo")[0].pause())
    }
    const e = document.getElementsByClassName("header")[0],
        t = document.getElementsByClassName("addr-header")[0];
    t.style.top = `${e.getBoundingClientRect().height}px`;
    document.getElementsByClassName("chain-table")[0].getBoundingClientRect().top < 0 ? t.style.display = "flex" : t.style.display = "none";
    const s = document.getElementsByClassName("footer")[0],
        n = document.getElementsByClassName("social-btn-group")[0];
    s.getBoundingClientRect().top < 0 ? n.style.display = "none" : n.style.display = "flex"
}));