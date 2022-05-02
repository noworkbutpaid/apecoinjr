/*!For license information please see d07e4380aaacfd78c2b3.js.LICENSE.txt*/ ! function(e, t, n, o, r) {
    "function" === typeof define && define.amd ? define((function() {
        return e.fullpage = o(t, n), e.fullpage
    })) : "object" === typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n)
}(this, window, document, (function(e, t) {
    "use strict";
    var n = "fullpage-wrapper",
        o = "." + n,
        r = "fp-responsive",
        i = "fp-notransition",
        l = "fp-destroyed",
        a = "fp-enabled",
        c = "fp-viewing",
        s = "active",
        u = ".active",
        f = "fp-completely",
        d = "fp-section",
        p = "." + d,
        v = ".fp-section.active",
        h = "fp-tableCell",
        g = "." + h,
        m = "fp-auto-height",
        y = "fp-normal-scroll",
        w = "fp-nav",
        S = "#fp-nav",
        b = "fp-show-active",
        E = "fp-slide",
        x = "." + E,
        L = ".fp-slide.active",
        A = "fp-slides",
        T = ".fp-slides",
        k = "fp-slidesContainer",
        M = "." + k,
        O = "fp-table",
        C = "fp-slidesNav",
        H = "." + C,
        I = ".fp-slidesNav a",
        B = "fp-controlArrow",
        R = "." + B,
        z = "fp-prev",
        N = "fp-controlArrow fp-prev",
        j = ".fp-controlArrow.fp-prev",
        P = "fp-controlArrow fp-next",
        D = ".fp-controlArrow.fp-next";

    function V(t, n) {
        e.console && e.console[t] && e.console[t]("fullPage: " + n)
    }

    function W(e, n) {
        return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null
    }

    function Y(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
                for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = Y(e[r], o[r]))
        }
        return e
    }

    function F(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    }

    function U() {
        return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight
    }

    function X(e, t) {
        var n;
        for (n in e = Z(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n]
                }
        return e
    }

    function _(e, t, n) {
        for (var o = e[n]; o && !we(o, t);) o = o[n];
        return o
    }

    function K(e, t) {
        return _(e, t, "previousElementSibling")
    }

    function $(e, t) {
        return _(e, t, "nextElementSibling")
    }

    function q(e) {
        return e.previousElementSibling
    }

    function Q(e) {
        return e.nextElementSibling
    }

    function G(e) {
        return e[e.length - 1]
    }

    function J(e, t) {
        e = ne(e) ? e[0] : e;
        for (var n = null != t ? W(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++
        }
        return -1
    }

    function Z(e) {
        return ne(e) ? e : [e]
    }

    function ee(e) {
        e = Z(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e
    }

    function te(e) {
        e = Z(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e
    }

    function ne(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }

    function oe(e, t) {
        e = Z(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }

    function re(e, t) {
        e = Z(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }

    function ie(e, t) {
        t.appendChild(e)
    }

    function le(e, n, o) {
        var r;
        n = n || t.createElement("div");
        for (var i = 0; i < e.length; i++) {
            var l = e[i];
            (o && !i || !o) && (r = n.cloneNode(!0), l.parentNode.insertBefore(r, l)), r.appendChild(l)
        }
        return e
    }

    function ae(e, t) {
        le(e, t, !0)
    }

    function ce(e, t) {
        for ("string" === typeof t && (t = be(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
    }

    function se(e) {
        for (var n = t.createDocumentFragment(); e.firstChild;) n.appendChild(e.firstChild);
        e.parentNode.replaceChild(n, e)
    }

    function ue(e, t) {
        return e && 1 === e.nodeType ? we(e, t) ? e : ue(e.parentNode, t) : null
    }

    function fe(e, t) {
        pe(e, e.nextSibling, t)
    }

    function de(e, t) {
        pe(e, e, t)
    }

    function pe(e, t, n) {
        ne(n) || ("string" == typeof n && (n = be(n)), n = [n]);
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t)
    }

    function ve() {
        var n = t.documentElement;
        return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0)
    }

    function he(e) {
        return Array.prototype.filter.call(e.parentNode.children, (function(t) {
            return t !== e
        }))
    }

    function ge(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function me(e) {
        if ("function" === typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function ye(n, o, r) {
        var i;
        r = "undefined" === typeof r ? {} : r, "function" === typeof e.CustomEvent ? i = new CustomEvent(o, {
            detail: r
        }) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r), n.dispatchEvent(i)
    }

    function we(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }

    function Se(e, t) {
        if ("boolean" === typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e
    }

    function be(e) {
        var n = t.createElement("div");
        return n.innerHTML = e.trim(), n.firstChild
    }

    function Ee(e) {
        e = Z(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }

    function xe(e, t, n) {
        for (var o = e[n], r = []; o;)(we(o, t) || null == t) && r.push(o), o = o[n];
        return r
    }

    function Le(e, t) {
        return xe(e, t, "nextElementSibling")
    }

    function Ae(e, t) {
        return xe(e, t, "previousElementSibling")
    }
    return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, n) {
            n = n || e;
            for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this)
        }), e.fp_utils = {
            $: W,
            deepExtend: Y,
            hasClass: F,
            getWindowHeight: U,
            css: X,
            until: _,
            prevUntil: K,
            nextUntil: $,
            prev: q,
            next: Q,
            last: G,
            index: J,
            getList: Z,
            hide: ee,
            show: te,
            isArrayOrList: ne,
            addClass: oe,
            removeClass: re,
            appendTo: ie,
            wrap: le,
            wrapAll: ae,
            wrapInner: ce,
            unwrap: se,
            closest: ue,
            after: fe,
            before: de,
            insertBefore: pe,
            getScrollTop: ve,
            siblings: he,
            preventDefault: ge,
            isFunction: me,
            trigger: ye,
            matches: we,
            toggle: Se,
            createElementFromHTML: be,
            remove: Ee,
            filter: function(e, t) {
                Array.prototype.filter.call(e, t)
            },
            untilAll: xe,
            nextAll: Le,
            prevAll: Ae,
            showError: V
        },
        function(C, B) {
            var _ = B && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(B.licenseKey) || t.domain.indexOf("alvarotrigo.com") > -1;
            if (!F(W("html"), a)) {
                var Z = W("html, body"),
                    ne = W("body")[0],
                    le = {};
                B = Y({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    touchWrapper: "string" === typeof C ? W(C)[0] : C,
                    normalScrollElementTouchThreshold: 5,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    cards: !1,
                    cardsOptions: {
                        perspective: 100,
                        fadeContent: !0,
                        fadeBackground: !0
                    },
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    v2compatible: !1,
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0
                }, B);
                var pe, xe, Te, ke, Me = !1,
                    Oe = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    Ce = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                    He = "string" === typeof C ? W(C)[0] : C,
                    Ie = U(),
                    Be = !1,
                    Re = !0,
                    ze = !0,
                    Ne = [],
                    je = {
                        m: {
                            up: !0,
                            down: !0,
                            left: !0,
                            right: !0
                        }
                    };
                je.k = Y({}, je.m);
                var Pe, De, Ve, We, Ye, Fe, Ue, Xe = function() {
                        var t;
                        t = e.PointerEvent ? {
                            down: "pointerdown",
                            move: "pointermove"
                        } : {
                            down: "MSPointerDown",
                            move: "MSPointerMove"
                        };
                        return t
                    }(),
                    _e = {
                        touchmove: "ontouchmove" in e ? "touchmove" : Xe.move,
                        touchstart: "ontouchstart" in e ? "touchstart" : Xe.down
                    },
                    Ke = !1;
                try {
                    var $e = Object.defineProperty({}, "passive", {
                        get: function() {
                            Ke = !0
                        }
                    });
                    e.addEventListener("testPassive", null, $e), e.removeEventListener("testPassive", null, $e)
                } catch (e) {}
                var qe, Qe = Y({}, B),
                    Ge = !1,
                    Je = !0;
                Yn(), e.fp_easings = Y(e.fp_easings, {
                    easeInOutCubic: function(e, t, n, o) {
                        return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                    }
                }), He && (le.version = "3.0.5", le.setAutoScrolling = st, le.setRecordHistory = ut, le.setScrollingSpeed = ft, le.setFitToSection = dt, le.setLockAnchors = function(e) {
                    B.lockAnchors = e
                }, le.setMouseWheelScrolling = pt, le.setAllowScrolling = vt, le.setKeyboardScrolling = gt, le.moveSectionUp = mt, le.moveSectionDown = yt, le.silentMoveTo = wt, le.moveTo = St, le.moveSlideRight = bt, le.moveSlideLeft = Et, le.fitToSection = Rt, le.reBuild = xt, le.setResponsive = Lt, le.getFullpageData = function() {
                    return B
                }, le.destroy = function(n) {
                    st(!1, "internal"), vt(!0), ht(!1), gt(!1), oe(He, l), clearTimeout(We), clearTimeout(Ve), clearTimeout(De), clearTimeout(Ye), clearTimeout(Fe), e.removeEventListener("scroll", Bt), e.removeEventListener("hashchange", on), e.removeEventListener("resize", Sn), t.removeEventListener("keydown", ln), t.removeEventListener("keyup", cn), ["click", "touchstart"].forEach((function(e) {
                        t.removeEventListener(e, At)
                    })), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach((function(e) {
                        t.removeEventListener(e, kt, !0)
                    })), clearTimeout(We), clearTimeout(Ve), n && (Pn(0), W("img[data-src], source[data-src], audio[data-src], iframe[data-src]", He).forEach((function(e) {
                        Qt(e, "src")
                    })), W("img[data-srcset]").forEach((function(e) {
                        Qt(e, "srcset")
                    })), Ee(W("#fp-nav, .fp-slidesNav, .fp-controlArrow")), X(W(p), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), X(W(x), {
                        width: ""
                    }), X(He, {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), X(Z, {
                        overflow: "",
                        height: ""
                    }), re(W("html"), a), re(ne, r), ne.className.split(/\s+/).forEach((function(e) {
                        0 === e.indexOf(c) && re(ne, e)
                    })), W(".fp-section, .fp-slide").forEach((function(e) {
                        B.scrollOverflowHandler && B.scrollOverflow && B.scrollOverflowHandler.remove(e), re(e, "fp-table active " + f), e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")), F(e, d) && !Ge && e.removeAttribute("data-anchor")
                    })), xn(He), [g, M, T].forEach((function(e) {
                        W(e, He).forEach((function(e) {
                            se(e)
                        }))
                    })), X(He, {
                        "-webkit-transition": "none",
                        transition: "none"
                    }), e.scrollTo(0, 0), [d, E, k].forEach((function(e) {
                        re(W("." + e), e)
                    })))
                }, le.getActiveSection = function() {
                    return new _n(W(v)[0])
                }, le.getActiveSlide = function() {
                    return Kt(W(L, W(v)[0])[0])
                }, le.test = {
                    top: "0px",
                    translate3d: "translate3d(0px, 0px, 0px)",
                    translate3dH: function() {
                        for (var e = [], t = 0; t < W(B.sectionSelector, He).length; t++) e.push("translate3d(0px, 0px, 0px)");
                        return e
                    }(),
                    left: function() {
                        for (var e = [], t = 0; t < W(B.sectionSelector, He).length; t++) e.push(0);
                        return e
                    }(),
                    options: B,
                    setAutoScrolling: st
                }, le.shared = {
                    afterRenderActions: It
                }, e.fullpage_api = le, B.$ && (B.$.fn.fullpage = le), function() {
                    B.css3 && (B.css3 = function() {
                        var n, o = t.createElement("p"),
                            r = {
                                webkitTransform: "-webkit-transform",
                                OTransform: "-o-transform",
                                msTransform: "-ms-transform",
                                MozTransform: "-moz-transform",
                                transform: "transform"
                            };
                        for (var i in o.style.display = "block", t.body.insertBefore(o, null), r) void 0 !== o.style[i] && (o.style[i] = "translate3d(1px,1px,1px)", n = e.getComputedStyle(o).getPropertyValue(r[i]));
                        return t.body.removeChild(o), void 0 !== n && n.length > 0 && "none" !== n
                    }());
                    B.scrollBar = B.scrollBar || B.hybrid,
                        function() {
                            if (!B.anchors.length) {
                                var e = "[data-anchor]",
                                    t = W(B.sectionSelector.split(",").join(e + ",") + e, He);
                                t.length && (Ge = !0, t.forEach((function(e) {
                                    B.anchors.push(e.getAttribute("data-anchor").toString())
                                })))
                            }
                            if (!B.navigationTooltips.length) {
                                e = "[data-tooltip]";
                                var n = W(B.sectionSelector.split(",").join(e + ",") + e, He);
                                n.length && n.forEach((function(e) {
                                    B.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                                }))
                            }
                        }(),
                        function() {
                            X(He, {
                                height: "100%",
                                position: "relative"
                            }), oe(He, n), oe(W("html"), a), Ie = U(), re(He, l), oe(W(B.sectionSelector, He), d), oe(W(B.slideSelector, He), E);
                            for (var e = W(p), o = 0; o < e.length; o++) {
                                var r = o,
                                    i = e[o],
                                    c = W(x, i),
                                    u = c.length;
                                i.setAttribute("data-fp-styles", i.getAttribute("style")), Ot(i, r), Ct(i, r), u > 0 ? Mt(i, c, u) : B.verticalCentered && Tn(i)
                            }
                            B.fixedElements && B.css3 && W(B.fixedElements).forEach((function(e) {
                                ne.appendChild(e)
                            }));
                            B.navigation && function() {
                                var e = t.createElement("div");
                                e.setAttribute("id", w);
                                var n = t.createElement("ul");
                                e.appendChild(n), ie(e, ne);
                                var o = W(S)[0];
                                oe(o, "fp-" + B.navigationPosition), B.showActiveTooltip && oe(o, b);
                                for (var r = "", i = 0; i < W(p).length; i++) {
                                    var l = "";
                                    B.anchors.length && (l = B.anchors[i]), r += '<li><a href="#' + l + '"><span class="fp-sr-only">' + Ht(i, "Section") + "</span><span></span></a>";
                                    var a = B.navigationTooltips[i];
                                    "undefined" !== typeof a && "" !== a && (r += '<div class="fp-tooltip fp-' + B.navigationPosition + '">' + a + "</div>"), r += "</li>"
                                }
                                W("ul", o)[0].innerHTML = r, X(W(S), {
                                    "margin-top": "-" + W(S)[0].offsetHeight / 2 + "px"
                                });
                                var c = W("li", W(S)[0])[J(W(v)[0], p)];
                                oe(W("a", c), s)
                            }();
                            void W('iframe[src*="youtube.com/embed/"]', He).forEach((function(e) {
                                var t, n, o;
                                n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                            })), B.scrollOverflow && (Pe = B.scrollOverflowHandler.init(B))
                        }(), vt(!0), ht(!0), st(B.autoScrolling, "internal"), bn(), zn(), "complete" === t.readyState && nn();
                    e.addEventListener("load", nn), B.scrollOverflow || It()
                }(), e.addEventListener("scroll", Bt), e.addEventListener("hashchange", on), e.addEventListener("blur", pn), e.addEventListener("resize", Sn), t.addEventListener("keydown", ln), t.addEventListener("keyup", cn), ["click", "touchstart"].forEach((function(e) {
                    t.addEventListener(e, At)
                })), B.normalScrollElements && (["mouseenter", "touchstart"].forEach((function(e) {
                    Tt(e, !1)
                })), ["mouseleave", "touchend"].forEach((function(e) {
                    Tt(e, !0)
                }))));
                var Ze = !1,
                    et = 0,
                    tt = 0,
                    nt = 0,
                    ot = 0,
                    rt = 0,
                    it = (new Date).getTime(),
                    lt = 0,
                    at = 0,
                    ct = Ie;
                return le
            }

            function st(e, t) {
                e || Pn(0), Wn("autoScrolling", e, t);
                var n = W(v)[0];
                if (B.autoScrolling && !B.scrollBar) X(Z, {
                    overflow: "hidden",
                    height: "100%"
                }), ut(Qe.recordHistory, "internal"), X(He, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), null != n && Pn(n.offsetTop);
                else if (X(Z, {
                        overflow: "visible",
                        height: "initial"
                    }), ut(!!B.autoScrolling && Qe.recordHistory, "internal"), X(He, {
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), null != n) {
                    var o = $t(n.offsetTop);
                    o.element.scrollTo(0, o.options)
                }
            }

            function ut(e, t) {
                Wn("recordHistory", e, t)
            }

            function ft(e, t) {
                Wn("scrollingSpeed", e, t)
            }

            function dt(e, t) {
                Wn("fitToSection", e, t)
            }

            function pt(n) {
                n ? (! function() {
                    var n, o = "";
                    e.addEventListener ? n = "addEventListener" : (n = "attachEvent", o = "on");
                    var r = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        i = !!Ke && {
                            passive: !1
                        };
                    "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", Wt, i) : t[n](o + r, Wt, i)
                }(), He.addEventListener("mousedown", sn), He.addEventListener("mouseup", un)) : (t.addEventListener ? (t.removeEventListener("mousewheel", Wt, !1), t.removeEventListener("wheel", Wt, !1), t.removeEventListener("MozMousePixelScroll", Wt, !1)) : t.detachEvent("onmousewheel", Wt), He.removeEventListener("mousedown", sn), He.removeEventListener("mouseup", un))
            }

            function vt(e, t) {
                "undefined" !== typeof t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                    Vn(e, t, "m")
                })) : Vn(e, "all", "m")
            }

            function ht(e) {
                e ? (pt(!0), function() {
                    if (Oe || Ce) {
                        B.autoScrolling && (ne.removeEventListener(_e.touchmove, Nt, {
                            passive: !1
                        }), ne.addEventListener(_e.touchmove, Nt, {
                            passive: !1
                        }));
                        var e = B.touchWrapper;
                        e.removeEventListener(_e.touchstart, Dt), e.removeEventListener(_e.touchmove, jt, {
                            passive: !1
                        }), e.addEventListener(_e.touchstart, Dt), e.addEventListener(_e.touchmove, jt, {
                            passive: !1
                        })
                    }
                }()) : (pt(!1), function() {
                    if (Oe || Ce) {
                        B.autoScrolling && (ne.removeEventListener(_e.touchmove, jt, {
                            passive: !1
                        }), ne.removeEventListener(_e.touchmove, Nt, {
                            passive: !1
                        }));
                        var e = B.touchWrapper;
                        e.removeEventListener(_e.touchstart, Dt), e.removeEventListener(_e.touchmove, jt, {
                            passive: !1
                        })
                    }
                }())
            }

            function gt(e, t) {
                "undefined" !== typeof t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                    Vn(e, t, "k")
                })) : (Vn(e, "all", "k"), B.keyboardScrolling = e)
            }

            function mt() {
                var e = K(W(v)[0], p);
                e || !B.loopTop && !B.continuousVertical || (e = G(W(p))), null != e && Ut(e, null, !0)
            }

            function yt() {
                var e = $(W(v)[0], p);
                e || !B.loopBottom && !B.continuousVertical || (e = W(p)[0]), null != e && Ut(e, null, !1)
            }

            function wt(e, t) {
                ft(0, "internal"), St(e, t), ft(Qe.scrollingSpeed, "internal")
            }

            function St(e, t) {
                var n = On(e);
                "undefined" !== typeof t ? Cn(e, t) : null != n && Ut(n)
            }

            function bt(e) {
                Yt("right", e)
            }

            function Et(e) {
                Yt("left", e)
            }

            function xt(t) {
                if (!F(He, l)) {
                    Be = !0, Ie = U();
                    for (var n = W(p), o = 0; o < n.length; ++o) {
                        var r = n[o],
                            i = W(T, r)[0],
                            a = W(x, r);
                        B.verticalCentered && X(W(g, r), {
                            height: kn(r) + "px"
                        }), X(r, {
                            height: Ie + "px"
                        }), a.length > 1 && yn(i, W(L, i)[0])
                    }
                    B.scrollOverflow && Pe.createScrollBarForAll();
                    var c = J(W(v)[0], p);
                    c && wt(c + 1), Be = !1, me(B.afterResize) && t && B.afterResize.call(He, e.innerWidth, e.innerHeight), me(B.afterReBuild) && !t && B.afterReBuild.call(He)
                }
            }

            function Lt(e) {
                var t = F(ne, r);
                e ? t || (st(!1, "internal"), dt(!1, "internal"), ee(W(S)), oe(ne, r), me(B.afterResponsive) && B.afterResponsive.call(He, e), B.scrollOverflow && Pe.createScrollBarForAll()) : t && (st(Qe.autoScrolling, "internal"), dt(Qe.autoScrolling, "internal"), te(W(S)), re(ne, r), me(B.afterResponsive) && B.afterResponsive.call(He, e))
            }

            function At(e) {
                var t = e.target;
                t && ue(t, "#fp-nav a") ? vn.call(t, e) : we(t, ".fp-tooltip") ? an.call(t) : we(t, R) ? dn.call(t, e) : we(t, I) || null != ue(t, I) ? hn.call(t, e) : ue(t, B.menu + " [data-menuanchor]") && gn.call(t, e)
            }

            function Tt(e, n) {
                t["fp_" + e] = n, t.addEventListener(e, kt, !0)
            }

            function kt(e) {
                e.target != t && ("touchend" === e.type && (Je = !1, setTimeout((function() {
                    Je = !0
                }), 800)), ("mouseenter" !== e.type || Je) && B.normalScrollElements.split(",").forEach((function(n) {
                    null != ue(e.target, n) && ht(t["fp_" + e.type])
                })))
            }

            function Mt(e, n, o) {
                var r = 100 * o,
                    i = 100 / o,
                    l = t.createElement("div");
                l.className = A, ae(n, l);
                var a = t.createElement("div");
                a.className = k, ae(n, a), X(W(M, e), {
                    width: r + "%"
                }), o > 1 && (B.controlArrows && function(e) {
                    var t = [be('<div class="' + N + '"></div>'), be('<div class="' + P + '"></div>')];
                    fe(W(T, e)[0], t), "#fff" !== B.controlArrowColor && (X(W(D, e), {
                        "border-color": "transparent transparent transparent " + B.controlArrowColor
                    }), X(W(j, e), {
                        "border-color": "transparent " + B.controlArrowColor + " transparent transparent"
                    }));
                    B.loopHorizontal || ee(W(j, e))
                }(e), B.slidesNavigation && function(e, t) {
                    ie(be('<div class="fp-slidesNav"><ul></ul></div>'), e);
                    var n = W(H, e)[0];
                    oe(n, "fp-" + B.slidesNavPosition);
                    for (var o = 0; o < t; o++) ie(be('<li><a href="#"><span class="fp-sr-only">' + Ht(o, "Slide") + "</span><span></span></a></li>"), W("ul", n)[0]);
                    X(n, {
                        "margin-left": "-" + n.innerWidth / 2 + "px"
                    }), oe(W("a", W("li", n)[0]), s)
                }(e, o)), n.forEach((function(e) {
                    X(e, {
                        width: i + "%"
                    }), B.verticalCentered && Tn(e)
                }));
                var c = W(L, e)[0];
                null != c && (0 !== J(W(v), p) || 0 === J(W(v), p) && 0 !== J(c)) ? jn(c, "internal") : oe(n[0], s)
            }

            function Ot(e, t) {
                t || null != W(v)[0] || oe(e, s), ke = W(v)[0], X(e, {
                    height: Ie + "px"
                }), B.paddingTop && X(e, {
                    "padding-top": B.paddingTop
                }), B.paddingBottom && X(e, {
                    "padding-bottom": B.paddingBottom
                }), "undefined" !== typeof B.sectionsColor[t] && X(e, {
                    "background-color": B.sectionsColor[t]
                }), "undefined" !== typeof B.anchors[t] && e.setAttribute("data-anchor", B.anchors[t])
            }

            function Ct(e, t) {
                "undefined" !== typeof B.anchors[t] && F(e, s) && Ln(B.anchors[t], t), B.menu && B.css3 && null != ue(W(B.menu)[0], o) && W(B.menu).forEach((function(e) {
                    ne.appendChild(e)
                }))
            }

            function Ht(e, t) {
                return B.navigationTooltips[e] || B.anchors[e] || t + " " + (e + 1)
            }

            function It() {
                var e, t = W(v)[0];
                oe(t, f), Gt(t), Jt(t), B.scrollOverflow && B.scrollOverflowHandler.afterLoad(), (!(e = On(rn().section)) || "undefined" !== typeof e && J(e) === J(ke)) && me(B.afterLoad) && Xt("afterLoad", {
                    activeSection: null,
                    element: t,
                    direction: null,
                    anchorLink: t.getAttribute("data-anchor"),
                    sectionIndex: J(t, p)
                }), me(B.afterRender) && Xt("afterRender")
            }

            function Bt() {
                var e;
                if (!B.autoScrolling || B.scrollBar) {
                    var t = ve(),
                        n = function(e) {
                            var t = e > et ? "down" : "up";
                            return et = e, lt = e, t
                        }(t),
                        o = 0,
                        r = t + U() / 2,
                        i = ne.offsetHeight - U() === t,
                        l = W(p);
                    if (i) o = l.length - 1;
                    else if (t)
                        for (var a = 0; a < l.length; ++a) {
                            l[a].offsetTop <= r && (o = a)
                        } else o = 0;
                    if (function(e) {
                            var t = W(v)[0].offsetTop,
                                n = t + U();
                            if ("up" == e) return n >= ve() + U();
                            return t <= ve()
                        }(n) && (F(W(v)[0], f) || (oe(W(v)[0], f), re(he(W(v)[0]), f))), !F(e = l[o], s)) {
                        Ze = !0;
                        var c, u, d = W(v)[0],
                            h = J(d, p) + 1,
                            g = An(e),
                            m = e.getAttribute("data-anchor"),
                            y = J(e, p) + 1,
                            w = W(L, e)[0],
                            S = {
                                activeSection: d,
                                sectionIndex: y - 1,
                                anchorLink: m,
                                element: e,
                                leavingSection: h,
                                direction: g
                            };
                        w && (u = w.getAttribute("data-anchor"), c = J(w)), ze && (oe(e, s), re(he(e), s), me(B.onLeave) && Xt("onLeave", S), me(B.afterLoad) && Xt("afterLoad", S), en(d), Gt(e), Jt(e), Ln(m, y - 1), B.anchors.length && (pe = m), In(c, u, m, y)), clearTimeout(Ye), Ye = setTimeout((function() {
                            Ze = !1
                        }), 100)
                    }
                    B.fitToSection && (clearTimeout(Fe), Fe = setTimeout((function() {
                        B.fitToSection && W(v)[0].offsetHeight <= Ie && Rt()
                    }), B.fitToSectionDelay))
                }
            }

            function Rt() {
                ze && (Be = !0, Ut(W(v)[0]), Be = !1)
            }

            function zt(e) {
                if (je.m[e]) {
                    var t = "down" === e ? yt : mt;
                    if (B.scrollOverflow) {
                        var n = B.scrollOverflowHandler.scrollable(W(v)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!B.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t()
                        } else t()
                    } else t()
                }
            }

            function Nt(e) {
                B.autoScrolling && Pt(e) && je.m.up && ge(e)
            }

            function jt(t) {
                var n = ue(t.target, p) || W(v)[0];
                if (Pt(t)) {
                    B.autoScrolling && ge(t);
                    var o = Nn(t);
                    ot = o.y, rt = o.x, W(T, n).length && Math.abs(nt - rt) > Math.abs(tt - ot) ? !Me && Math.abs(nt - rt) > e.innerWidth / 100 * B.touchSensitivity && (nt > rt ? je.m.right && bt(n) : je.m.left && Et(n)) : B.autoScrolling && ze && Math.abs(tt - ot) > e.innerHeight / 100 * B.touchSensitivity && (tt > ot ? zt("down") : ot > tt && zt("up"))
                }
            }

            function Pt(e) {
                return "undefined" === typeof e.pointerType || "mouse" != e.pointerType
            }

            function Dt(e) {
                if (B.fitToSection && (qe = !1), Pt(e)) {
                    var t = Nn(e);
                    tt = t.y, nt = t.x
                }
            }

            function Vt(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return Math.ceil(n / t)
            }

            function Wt(t) {
                var n = (new Date).getTime(),
                    o = F(W(".fp-completely")[0], y);
                if (!je.m.down && !je.m.up) return ge(t), !1;
                if (B.autoScrolling && !Te && !o) {
                    var r = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                        i = Math.max(-1, Math.min(1, r)),
                        l = "undefined" !== typeof t.wheelDeltaX || "undefined" !== typeof t.deltaX,
                        a = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !l;
                    Ne.length > 149 && Ne.shift(), Ne.push(Math.abs(r)), B.scrollBar && ge(t);
                    var c = n - it;
                    if (it = n, c > 200 && (Ne = []), ze) Vt(Ne, 10) >= Vt(Ne, 70) && a && zt(i < 0 ? "down" : "up");
                    return !1
                }
                B.fitToSection && (qe = !1)
            }

            function Yt(e, t) {
                var n = null == t ? W(v)[0] : t,
                    o = W(T, n)[0];
                if (!(null == o || Me || W(x, o).length < 2)) {
                    var r = W(L, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? K(r, x) : $(r, x))) {
                        if (!B.loopHorizontal) return;
                        var l = he(r);
                        i = "left" === e ? l[l.length - 1] : l[0]
                    }
                    Me = !le.test.isTesting, yn(o, i, e)
                }
            }

            function Ft() {
                for (var e = W(L), t = 0; t < e.length; t++) jn(e[t], "internal")
            }

            function Ut(e, t, n) {
                if (null != e) {
                    var o, r, i = function(e) {
                            var t = e.offsetHeight,
                                n = e.offsetTop,
                                o = n,
                                r = n > lt,
                                i = o - Ie + t,
                                l = B.bigSectionsDestination;
                            return t > Ie ? (r || l) && "bottom" !== l || (o = i) : (r || Be && null == Q(e)) && (o = i), lt = o, o
                        }(e),
                        l = {
                            element: e,
                            callback: t,
                            isMovementUp: n,
                            dtop: i,
                            yMovement: An(e),
                            anchorLink: e.getAttribute("data-anchor"),
                            sectionIndex: J(e, p),
                            activeSlide: W(L, e)[0],
                            activeSection: W(v)[0],
                            leavingSection: J(W(v), p) + 1,
                            localIsResizing: Be
                        };
                    if (!(l.activeSection == e && !Be || B.scrollBar && ve() === l.dtop && !F(e, m))) {
                        if (null != l.activeSlide && (o = l.activeSlide.getAttribute("data-anchor"), r = J(l.activeSlide)), !l.localIsResizing) {
                            var a = l.yMovement;
                            if ("undefined" !== typeof n && (a = n ? "up" : "down"), l.direction = a, me(B.onLeave) && !1 === Xt("onLeave", l)) return
                        }
                        B.autoScrolling && B.continuousVertical && "undefined" !== typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = function(e) {
                                e.isMovementUp ? de(W(v)[0], Le(e.activeSection, p)) : fe(W(v)[0], Ae(e.activeSection, p).reverse());
                                return Pn(W(v)[0].offsetTop), Ft(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.offsetTop, e.yMovement = An(e.element), e.leavingSection = J(e.activeSection, p) + 1, e.sectionIndex = J(e.element, p), e
                            }(l)), l.localIsResizing || en(l.activeSection), B.scrollOverflow && B.scrollOverflowHandler.beforeLeave(), oe(e, s), re(he(e), s), Gt(e), B.scrollOverflow && B.scrollOverflowHandler.onLeave(), ze = le.test.isTesting, In(r, o, l.anchorLink, l.sectionIndex),
                            function(e) {
                                if (B.css3 && B.autoScrolling && !B.scrollBar) {
                                    Mn("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0), B.scrollingSpeed ? (clearTimeout(Ve), Ve = setTimeout((function() {
                                        qt(e)
                                    }), B.scrollingSpeed)) : qt(e)
                                } else {
                                    var t = $t(e.dtop);
                                    le.test.top = -e.dtop + "px", Fn(t.element, t.options, B.scrollingSpeed, (function() {
                                        B.scrollBar ? setTimeout((function() {
                                            qt(e)
                                        }), 30) : qt(e)
                                    }))
                                }
                            }(l), pe = l.anchorLink, Ln(l.anchorLink, l.sectionIndex)
                    }
                }
            }

            function Xt(e, t) {
                var n, o = function(e, t) {
                    var n;
                    n = B.v2compatible ? {
                        afterRender: function() {
                            return [He]
                        },
                        onLeave: function() {
                            return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction]
                        },
                        afterLoad: function() {
                            return [t.element, t.anchorLink, t.sectionIndex + 1]
                        },
                        afterSlideLoad: function() {
                            return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex]
                        },
                        onSlideLeave: function() {
                            return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex]
                        }
                    } : {
                        afterRender: function() {
                            return {
                                section: _t(W(v)[0]),
                                slide: Kt(W(L, W(v)[0])[0])
                            }
                        },
                        onLeave: function() {
                            return {
                                origin: _t(t.activeSection),
                                destination: _t(t.element),
                                direction: t.direction
                            }
                        },
                        afterLoad: function() {
                            return n.onLeave()
                        },
                        afterSlideLoad: function() {
                            return {
                                section: _t(t.section),
                                origin: Kt(t.prevSlide),
                                destination: Kt(t.destiny),
                                direction: t.direction
                            }
                        },
                        onSlideLeave: function() {
                            return n.afterSlideLoad()
                        }
                    };
                    return n[e]()
                }(e, t);
                if (B.v2compatible) {
                    if (!1 === B[e].apply(o[0], o.slice(1))) return !1
                } else if (ye(He, e, o), !1 === B[e].apply(o[Object.keys(o)[0]], (n = o, Object.keys(n).map((function(e) {
                        return n[e]
                    }))))) return !1;
                return !0
            }

            function _t(e) {
                return e ? new _n(e) : null
            }

            function Kt(e) {
                return e ? new Kn(e) : null
            }

            function $t(t) {
                var n = {};
                return B.autoScrolling && !B.scrollBar ? (n.options = -t, n.element = W(o)[0]) : (n.options = t, n.element = e), n
            }

            function qt(e) {
                ! function(e) {
                    null != e.wrapAroundElements && (e.isMovementUp ? de(W(p)[0], e.wrapAroundElements) : fe(W(p)[W(p).length - 1], e.wrapAroundElements), Pn(W(v)[0].offsetTop), Ft())
                }(e), me(B.afterLoad) && !e.localIsResizing && Xt("afterLoad", e), B.scrollOverflow && B.scrollOverflowHandler.afterLoad(), e.localIsResizing || Jt(e.element), oe(e.element, f), re(he(e.element), f), ze = !0, me(e.callback) && e.callback()
            }

            function Qt(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
            }

            function Gt(e) {
                B.lazyLoading && W("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", tn(e)).forEach((function(e) {
                    if (["src", "srcset"].forEach((function(t) {
                            var n = e.getAttribute("data-" + t);
                            null != n && n && Qt(e, t)
                        })), we(e, "source")) {
                        var t = ue(e, "video, audio");
                        t && t.load()
                    }
                }))
            }

            function Jt(e) {
                var t = tn(e);
                W("video, audio", t).forEach((function(e) {
                    e.hasAttribute("data-autoplay") && "function" === typeof e.play && e.play()
                })), W('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) {
                    e.hasAttribute("data-autoplay") && Zt(e), e.onload = function() {
                        e.hasAttribute("data-autoplay") && Zt(e)
                    }
                }))
            }

            function Zt(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function en(e) {
                var t = tn(e);
                W("video, audio", t).forEach((function(e) {
                    e.hasAttribute("data-keepplaying") || "function" !== typeof e.pause || e.pause()
                })), W('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) {
                    /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                }))
            }

            function tn(e) {
                var t = W(L, e);
                return t.length && (e = t[0]), e
            }

            function nn() {
                var e = rn(),
                    t = e.section,
                    n = e.slide;
                t && (B.animateAnchor ? Cn(t, n) : wt(t, n))
            }

            function on() {
                if (!Ze && !B.lockAnchors) {
                    var e = rn(),
                        t = e.section,
                        n = e.slide,
                        o = "undefined" === typeof pe,
                        r = "undefined" === typeof pe && "undefined" === typeof n && !Me;
                    t && t.length && (t && t !== pe && !o || r || !Me && xe != n) && Cn(t, n)
                }
            }

            function rn() {
                var t, n, o = e.location.hash;
                if (o.length) {
                    var r = o.replace("#", "").split("/"),
                        i = o.indexOf("#/") > -1;
                    t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                    var l = i ? r[2] : r[1];
                    l && l.length && (n = decodeURIComponent(l))
                }
                return {
                    section: t,
                    slide: n
                }
            }

            function ln(e) {
                clearTimeout(Ue);
                var n = t.activeElement,
                    o = e.keyCode;
                if (9 === o) ! function(e) {
                    var n = e.shiftKey,
                        o = t.activeElement,
                        r = fn(tn(W(v)[0]));

                    function i(e) {
                        return ge(e), r[0] ? r[0].focus() : null
                    }
                    if (function(e) {
                            var n = fn(t),
                                o = n.indexOf(t.activeElement),
                                r = e.shiftKey ? o - 1 : o + 1,
                                i = n[r],
                                l = Kt(ue(i, x)),
                                a = _t(ue(i, p));
                            return !l && !a
                        }(e)) return;
                    o ? null == ue(o, ".fp-section.active,.fp-section.active .fp-slide.active") && (o = i(e)) : i(e);
                    (!n && o == r[r.length - 1] || n && o == r[0]) && ge(e)
                }(e);
                else if (!we(n, "textarea") && !we(n, "input") && !we(n, "select") && "true" !== n.getAttribute("contentEditable") && "" !== n.getAttribute("contentEditable") && B.keyboardScrolling && B.autoScrolling) {
                    [40, 38, 32, 33, 34].indexOf(o) > -1 && ge(e), Te = e.ctrlKey, Ue = setTimeout((function() {
                        ! function(e) {
                            var t = e.shiftKey;
                            if (!ze && [37, 39].indexOf(e.keyCode) < 0) return;
                            switch (e.keyCode) {
                                case 38:
                                case 33:
                                    je.k.up && mt();
                                    break;
                                case 32:
                                    if (t && je.k.up) {
                                        mt();
                                        break
                                    }
                                case 40:
                                case 34:
                                    je.k.down && yt();
                                    break;
                                case 36:
                                    je.k.up && St(1);
                                    break;
                                case 35:
                                    je.k.down && St(W(p).length);
                                    break;
                                case 37:
                                    je.k.left && Et();
                                    break;
                                case 39:
                                    je.k.right && bt();
                                    break;
                                default:
                                    ;
                            }
                        }(e)
                    }), 150)
                }
            }

            function an() {
                ye(q(this), "click")
            }

            function cn(e) {
                Re && (Te = e.ctrlKey)
            }

            function sn(e) {
                2 == e.which && (at = e.pageY, He.addEventListener("mousemove", mn))
            }

            function un(e) {
                2 == e.which && He.removeEventListener("mousemove", mn)
            }

            function fn(e) {
                return [].slice.call(W('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', e)).filter((function(e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                }))
            }

            function dn() {
                var e = ue(this, p);
                F(this, z) ? je.m.left && Et(e) : je.m.right && bt(e)
            }

            function pn() {
                Re = !1, Te = !1
            }

            function vn(e) {
                ge(e);
                var t = J(ue(this, "#fp-nav li"));
                Ut(W(p)[t])
            }

            function hn(e) {
                ge(e);
                var t = W(T, ue(this, p))[0];
                yn(t, W(x, t)[J(ue(this, "li"))])
            }

            function gn(e) {
                !W(B.menu)[0] || !B.lockAnchors && B.anchors.length || (ge(e), St(this.getAttribute("data-menuanchor")))
            }

            function mn(e) {
                ze && (e.pageY < at && je.m.up ? mt() : e.pageY > at && je.m.down && yt()), at = e.pageY
            }

            function yn(e, t, n) {
                var o = ue(e, p),
                    r = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: {
                            left: t.offsetLeft
                        },
                        slideIndex: J(t),
                        section: o,
                        sectionIndex: J(o, p),
                        anchorLink: o.getAttribute("data-anchor"),
                        slidesNav: W(H, o)[0],
                        slideAnchor: Rn(t),
                        prevSlide: W(L, o)[0],
                        prevSlideIndex: J(W(L, o)[0]),
                        localIsResizing: Be
                    };
                r.xMovement = function(e, t) {
                    if (e == t) return "none";
                    if (e > t) return "left";
                    return "right"
                }(r.prevSlideIndex, r.slideIndex), r.direction = r.direction ? r.direction : r.xMovement, r.localIsResizing || (ze = !1), B.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && me(B.onSlideLeave) && !1 === Xt("onSlideLeave", r) ? Me = !1 : (oe(t, s), re(he(t), s), r.localIsResizing || (en(r.prevSlide), Gt(t)), !B.loopHorizontal && B.controlArrows && (Se(W(j, o), 0 !== r.slideIndex), Se(W(D, o), null != Q(t))), F(o, s) && !r.localIsResizing && In(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), function(e, t, n) {
                    var o = t.destinyPos;
                    if (B.css3) {
                        var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                        le.test.translate3dH[t.sectionIndex] = r, X(En(W(M, e)), Dn(r)), We = setTimeout((function() {
                            n && wn(t)
                        }), B.scrollingSpeed)
                    } else le.test.left[t.sectionIndex] = Math.round(o.left), Fn(e, Math.round(o.left), B.scrollingSpeed, (function() {
                        n && wn(t)
                    }))
                }(e, r, !0))
            }

            function wn(e) {
                var t, n;
                t = e.slidesNav, n = e.slideIndex, B.slidesNavigation && null != t && (re(W(u, t), s), oe(W("a", W("li", t)[n]), s)), e.localIsResizing || (me(B.afterSlideLoad) && Xt("afterSlideLoad", e), ze = !0, Jt(e.destiny)), Me = !1
            }

            function Sn() {
                if (bn(), Oe) {
                    var e = t.activeElement;
                    if (!we(e, "textarea") && !we(e, "input") && !we(e, "select")) {
                        var n = U();
                        Math.abs(n - ct) > 20 * Math.max(ct, n) / 100 && (De = setTimeout((function() {
                            xt(!0), ct = n
                        }), navigator.userAgent.match("CriOS") ? 50 : 0))
                    }
                } else clearTimeout(De), De = setTimeout((function() {
                    xt(!0)
                }), 350)
            }

            function bn() {
                var t = B.responsive || B.responsiveWidth,
                    n = B.responsiveHeight,
                    o = t && e.innerWidth < t,
                    r = n && e.innerHeight < n;
                t && n ? Lt(o || r) : t ? Lt(o) : n && Lt(r)
            }

            function En(e) {
                var t = "all " + B.scrollingSpeed + "ms " + B.easingcss3;
                return re(e, i), X(e, {
                    "-webkit-transition": t,
                    transition: t
                })
            }

            function xn(e) {
                return oe(e, i)
            }

            function Ln(e, t) {
                var n;
                n = e, W(B.menu).forEach((function(e) {
                        B.menu && null != e && (re(W(u, e), s), oe(W('[data-menuanchor="' + n + '"]', e), s))
                    })),
                    function(e, t) {
                        B.navigation && null != W(S)[0] && (re(W(u, W(S)[0]), s), oe(e ? W('a[href="#' + e + '"]', W(S)[0]) : W("a", W("li", W(S)[0])[t]), s))
                    }(e, t)
            }

            function An(e) {
                var t = J(W(v)[0], p),
                    n = J(e, p);
                return t == n ? "none" : t > n ? "up" : "down"
            }

            function Tn(e) {
                if (!F(e, O)) {
                    var n = t.createElement("div");
                    n.className = h, n.style.height = kn(e) + "px", oe(e, O), ce(e, n)
                }
            }

            function kn(e) {
                var t = Ie;
                if (B.paddingTop || B.paddingBottom) {
                    var n = e;
                    F(n, d) || (n = ue(e, p));
                    var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                    t = Ie - o
                }
                return t
            }

            function Mn(e, t) {
                t ? En(He) : xn(He), X(He, Dn(e)), le.test.translate3d = e, setTimeout((function() {
                    re(He, i)
                }), 10)
            }

            function On(e) {
                var t = W('.fp-section[data-anchor="' + e + '"]', He)[0];
                if (!t) {
                    var n = "undefined" !== typeof e ? e - 1 : 0;
                    t = W(p)[n]
                }
                return t
            }

            function Cn(e, t) {
                var n = On(e);
                if (null != n) {
                    var o = function(e, t) {
                        var n = W('.fp-slide[data-anchor="' + e + '"]', t)[0];
                        return null == n && (e = "undefined" !== typeof e ? e : 0, n = W(x, t)[e]), n
                    }(t, n);
                    Rn(n) === pe || F(n, s) ? Hn(o) : Ut(n, (function() {
                        Hn(o)
                    }))
                }
            }

            function Hn(e) {
                null != e && yn(ue(e, T), e)
            }

            function In(e, t, n, o) {
                var r = "";
                B.anchors.length && !B.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), xe = t, Bn(r + "/" + t)) : null != e ? (xe = t, Bn(n)) : Bn(n)), zn()
            }

            function Bn(t) {
                if (B.recordHistory) location.hash = t;
                else if (Oe || Ce) e.history.replaceState(void 0, void 0, "#" + t);
                else {
                    var n = e.location.href.split("#")[0];
                    e.location.replace(n + "#" + t)
                }
            }

            function Rn(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = J(e);
                return null == t && (t = n), t
            }

            function zn() {
                var e = W(v)[0],
                    t = W(L, e)[0],
                    n = Rn(e),
                    o = Rn(t),
                    r = String(n);
                t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
                var i = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
                ne.className = ne.className.replace(i, ""), oe(ne, "fp-viewing-" + r)
            }

            function Nn(e) {
                var t = [];
                return t.y = "undefined" !== typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" !== typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Ce && Pt(e) && B.scrollBar && "undefined" !== typeof e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }

            function jn(e, t) {
                ft(0, "internal"), "undefined" !== typeof t && (Be = !0), yn(ue(e, T), e), "undefined" !== typeof t && (Be = !1), ft(Qe.scrollingSpeed, "internal")
            }

            function Pn(e) {
                var t = Math.round(e);
                if (B.css3 && B.autoScrolling && !B.scrollBar) Mn("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (B.autoScrolling && !B.scrollBar) X(He, {
                    top: -t + "px"
                }), le.test.top = -t + "px";
                else {
                    var n = $t(t);
                    Un(n.element, n.options)
                }
            }

            function Dn(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }

            function Vn(e, t, n) {
                "all" !== t ? je[n][t] = e : Object.keys(je[n]).forEach((function(t) {
                    je[n][t] = e
                }))
            }

            function Wn(e, t, n) {
                B[e] = t, "internal" !== n && (Qe[e] = t)
            }

            function Yn() {
                var e = B.licenseKey,
                    t = "font-size: 15px;background:yellow;";
                _ && e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t));
                F(W("html"), a) ? V("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (B.continuousVertical && (B.loopTop || B.loopBottom) && (B.continuousVertical = !1, V("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !B.scrollOverflow || !B.scrollBar && B.autoScrolling || V("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !B.continuousVertical || !B.scrollBar && B.autoScrolling || (B.continuousVertical = !1, V("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), B.scrollOverflow && null == B.scrollOverflowHandler && (B.scrollOverflow = !1, V("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax", "cards"].forEach((function(e) {
                    B[e] && V("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e)
                })), B.anchors.forEach((function(e) {
                    var t = [].slice.call(W("[name]")).filter((function(t) {
                            return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                        })),
                        n = [].slice.call(W("[id]")).filter((function(t) {
                            return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                        }));
                    (n.length || t.length) && (V("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && V("error", '"' + e + '" is is being used by another element `id` property'), t.length && V("error", '"' + e + '" is is being used by another element `name` property'))
                })))
            }

            function Fn(t, n, o, r) {
                var i = function(t) {
                        return t.self != e && F(t, A) ? t.scrollLeft : !B.autoScrolling || B.scrollBar ? ve() : t.offsetTop
                    }(t),
                    l = n - i,
                    a = 0;
                qe = !0;
                var c = function() {
                    if (qe) {
                        var s = n;
                        a += 20, o && (s = e.fp_easings[B.easing](a, i, l, o)), Un(t, s), a < o ? setTimeout(c, 20) : "undefined" !== typeof r && r()
                    } else a < o && r()
                };
                c()
            }

            function Un(t, n) {
                !B.autoScrolling || B.scrollBar || t.self != e && F(t, A) ? t.self != e && F(t, A) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px"
            }

            function Xn(e, t) {
                this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = J(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index
            }

            function _n(e) {
                Xn.call(this, e, p)
            }

            function Kn(e) {
                Xn.call(this, e, x)
            }
            Yn()
        }
})), window.jQuery && window.fullpage && function(e, t) {
    "use strict";
    e && t ? e.fn.fullpage = function(n) {
        n.$ = e, new t(this[0], n)
    } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
}(window.jQuery, window.fullpage);