/*!For license information please see eb70dc91dce281b2022d.js.LICENSE.txt*/ ! function(a) {
    var t, e = [],
        i = !1,
        d = !1,
        n = {
            interval: 250,
            force_process: !1
        },
        o = a(window);

    function r() {
        d = !1;
        for (var i = 0; i < e.length; i++) {
            var n = a(e[i]).filter((function() {
                return a(this).is(":appeared")
            }));
            if (n.trigger("appear", [n]), t) {
                var o = t.not(n);
                o.trigger("disappear", [o])
            }
            t = n
        }
    }
    a.expr[":"].appeared = function(t) {
        var e = a(t);
        if (!e.is(":visible")) return !1;
        var i = o.scrollLeft(),
            d = o.scrollTop(),
            n = e.offset(),
            r = n.left,
            s = n.top;
        return s + e.height() >= d && s - (e.data("appear-top-offset") || 0) <= d + o.height() && r + e.width() >= i && r - (e.data("appear-left-offset") || 0) <= i + o.width()
    }, a.fn.extend({
        appear: function(t) {
            var o = a.extend({}, n, t || {}),
                s = this.selector || this;
            if (!i) {
                var f = function() {
                    d || (d = !0, setTimeout(r, o.interval))
                };
                a(window).scroll(f).resize(f), i = !0
            }
            return o.force_process && setTimeout(r, o.interval), e.push(s), a(s)
        }
    }), a.extend({
        force_appear: function() {
            return !!i && (r(), !0)
        }
    })
}(jQuery),
function(a) {
    var t = {},
        e = "doTimeout",
        i = Array.prototype.slice;

    function d(e) {
        var d, n = this,
            o = {},
            r = e ? a.fn : a,
            s = arguments,
            f = 4,
            l = s[1],
            u = s[2],
            c = s[3];

        function p() {
            e ? d.removeData(e) : l && delete t[l]
        }

        function $() {
            o.id = setTimeout((function() {
                o.fn()
            }), u)
        }
        if ("string" !== typeof l && (f--, l = e = 0, u = s[1], c = s[2]), e ? (d = n.eq(0)).data(e, o = d.data(e) || {}) : l && (o = t[l] || (t[l] = {})), o.id && clearTimeout(o.id), delete o.id, c) o.fn = function(a) {
            "string" === typeof c && (c = r[c]), !0 !== c.apply(n, i.call(s, f)) || a ? p() : $()
        }, $();
        else {
            if (o.fn) return void 0 === u ? p() : o.fn(!1 === u), !0;
            p()
        }
    }
    a.doTimeout = function() {
        return d.apply(window, [0].concat(i.call(arguments)))
    }, a.fn.doTimeout = function() {
        var a = i.call(arguments),
            t = d.apply(this, [e + a[0]].concat(a));
        return "number" === typeof a[0] || "number" === typeof a[1] ? this : t
    }
}(jQuery), $(".animatedParent").appear(), $(".animatedClick").click((function() {
    var a = $(this).attr("data-target");
    if (void 0 != $(this).attr("data-sequence")) {
        var t = $("." + a + ":first").attr("data-id"),
            e = $("." + a + ":last").attr("data-id"),
            i = t;
        $("." + a + "[data-id=" + i + "]").hasClass("go") ? ($("." + a + "[data-id=" + i + "]").addClass("goAway"), $("." + a + "[data-id=" + i + "]").removeClass("go")) : ($("." + a + "[data-id=" + i + "]").addClass("go"), $("." + a + "[data-id=" + i + "]").removeClass("goAway")), i++, delay = Number($(this).attr("data-sequence")), $.doTimeout(delay, (function() {
            if ($("." + a + "[data-id=" + i + "]").hasClass("go") ? ($("." + a + "[data-id=" + i + "]").addClass("goAway"), $("." + a + "[data-id=" + i + "]").removeClass("go")) : ($("." + a + "[data-id=" + i + "]").addClass("go"), $("." + a + "[data-id=" + i + "]").removeClass("goAway")), ++i <= e) return !0
        }))
    } else $("." + a).hasClass("go") ? ($("." + a).addClass("goAway"), $("." + a).removeClass("go")) : ($("." + a).addClass("go"), $("." + a).removeClass("goAway"))
})), $(document.body).on("appear", ".animatedParent", (function(a, t) {
    var e = $(this).find(".animated"),
        i = $(this);
    if (void 0 != i.attr("data-sequence")) {
        var d = $(this).find(".animated:first").attr("data-id"),
            n = $(this).find(".animated:last").attr("data-id");
        $(i).find(".animated[data-id=" + d + "]").addClass("go"), d++, delay = Number(i.attr("data-sequence")), $.doTimeout(delay, (function() {
            if ($(i).find(".animated[data-id=" + d + "]").addClass("go"), ++d <= n) return !0
        }))
    } else e.addClass("go")
})), $(document.body).on("disappear", ".animatedParent", (function(a, t) {
    $(this).hasClass("animateOnce") || $(this).find(".animated").removeClass("go")
})), $(window).on("load", (function() {
    $.force_appear()
}));