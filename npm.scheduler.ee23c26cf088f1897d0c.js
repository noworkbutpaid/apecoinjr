/*!For license information please see npm.scheduler.ee23c26cf088f1897d0c.js.LICENSE.txt*/
"use strict";
(self.webpackChunkthetan_landing_page = self.webpackChunkthetan_landing_page || []).push([
    [6], {
        "711da9fec20ebd7abf22": (e, n) => {
            var t, a, r, l;
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                n.unstable_now = function() {
                    return o.now()
                }
            } else {
                var i = Date,
                    u = i.now();
                n.unstable_now = function() {
                    return i.now() - u
                }
            }
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var s = null,
                    c = null,
                    f = function() {
                        if (null !== s) try {
                            var e = n.unstable_now();
                            s(!0, e), s = null
                        } catch (e) {
                            throw setTimeout(f, 0), e
                        }
                    };
                t = function(e) {
                    null !== s ? setTimeout(t, 0, e) : (s = e, setTimeout(f, 0))
                }, a = function(e, n) {
                    c = setTimeout(e, n)
                }, r = function() {
                    clearTimeout(c)
                }, n.unstable_shouldYield = function() {
                    return !1
                }, l = n.unstable_forceFrameRate = function() {}
            } else {
                var b = window.setTimeout,
                    d = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var p = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof p && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var v = !1,
                    y = null,
                    w = -1,
                    m = 5,
                    h = 0;
                n.unstable_shouldYield = function() {
                    return n.unstable_now() >= h
                }, l = function() {}, n.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : m = 0 < e ? Math.floor(1e3 / e) : 5
                };
                var _ = new MessageChannel,
                    k = _.port2;
                _.port1.onmessage = function() {
                    if (null !== y) {
                        var e = n.unstable_now();
                        h = e + m;
                        try {
                            y(!0, e) ? k.postMessage(null) : (v = !1, y = null)
                        } catch (e) {
                            throw k.postMessage(null), e
                        }
                    } else v = !1
                }, t = function(e) {
                    y = e, v || (v = !0, k.postMessage(null))
                }, a = function(e, t) {
                    w = b((function() {
                        e(n.unstable_now())
                    }), t)
                }, r = function() {
                    d(w), w = -1
                }
            }

            function g(e, n) {
                var t = e.length;
                e.push(n);
                e: for (;;) {
                    var a = t - 1 >>> 1,
                        r = e[a];
                    if (!(void 0 !== r && 0 < C(r, n))) break e;
                    e[a] = n, e[t] = r, t = a
                }
            }

            function T(e) {
                return void 0 === (e = e[0]) ? null : e
            }

            function x(e) {
                var n = e[0];
                if (void 0 !== n) {
                    var t = e.pop();
                    if (t !== n) {
                        e[0] = t;
                        e: for (var a = 0, r = e.length; a < r;) {
                            var l = 2 * (a + 1) - 1,
                                o = e[l],
                                i = l + 1,
                                u = e[i];
                            if (void 0 !== o && 0 > C(o, t)) void 0 !== u && 0 > C(u, o) ? (e[a] = u, e[i] = t, a = i) : (e[a] = o, e[l] = t, a = l);
                            else {
                                if (!(void 0 !== u && 0 > C(u, t))) break e;
                                e[a] = u, e[i] = t, a = i
                            }
                        }
                    }
                    return n
                }
                return null
            }

            function C(e, n) {
                var t = e.sortIndex - n.sortIndex;
                return 0 !== t ? t : e.id - n.id
            }
            var P = [],
                F = [],
                I = 1,
                M = null,
                j = 3,
                A = !1,
                L = !1,
                q = !1;

            function R(e) {
                for (var n = T(F); null !== n;) {
                    if (null === n.callback) x(F);
                    else {
                        if (!(n.startTime <= e)) break;
                        x(F), n.sortIndex = n.expirationTime, g(P, n)
                    }
                    n = T(F)
                }
            }

            function Y(e) {
                if (q = !1, R(e), !L)
                    if (null !== T(P)) L = !0, t(E);
                    else {
                        var n = T(F);
                        null !== n && a(Y, n.startTime - e)
                    }
            }

            function E(e, t) {
                L = !1, q && (q = !1, r()), A = !0;
                var l = j;
                try {
                    for (R(t), M = T(P); null !== M && (!(M.expirationTime > t) || e && !n.unstable_shouldYield());) {
                        var o = M.callback;
                        if ("function" === typeof o) {
                            M.callback = null, j = M.priorityLevel;
                            var i = o(M.expirationTime <= t);
                            t = n.unstable_now(), "function" === typeof i ? M.callback = i : M === T(P) && x(P), R(t)
                        } else x(P);
                        M = T(P)
                    }
                    if (null !== M) var u = !0;
                    else {
                        var s = T(F);
                        null !== s && a(Y, s.startTime - t), u = !1
                    }
                    return u
                } finally {
                    M = null, j = l, A = !1
                }
            }
            var N = l;
            n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
                e.callback = null
            }, n.unstable_continueExecution = function() {
                L || A || (L = !0, t(E))
            }, n.unstable_getCurrentPriorityLevel = function() {
                return j
            }, n.unstable_getFirstCallbackNode = function() {
                return T(P)
            }, n.unstable_next = function(e) {
                switch (j) {
                    case 1:
                    case 2:
                    case 3:
                        var n = 3;
                        break;
                    default:
                        n = j
                }
                var t = j;
                j = n;
                try {
                    return e()
                } finally {
                    j = t
                }
            }, n.unstable_pauseExecution = function() {}, n.unstable_requestPaint = N, n.unstable_runWithPriority = function(e, n) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var t = j;
                j = e;
                try {
                    return n()
                } finally {
                    j = t
                }
            }, n.unstable_scheduleCallback = function(e, l, o) {
                var i = n.unstable_now();
                switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? i + o : i : o = i, e) {
                    case 1:
                        var u = -1;
                        break;
                    case 2:
                        u = 250;
                        break;
                    case 5:
                        u = 1073741823;
                        break;
                    case 4:
                        u = 1e4;
                        break;
                    default:
                        u = 5e3
                }
                return e = {
                    id: I++,
                    callback: l,
                    priorityLevel: e,
                    startTime: o,
                    expirationTime: u = o + u,
                    sortIndex: -1
                }, o > i ? (e.sortIndex = o, g(F, e), null === T(P) && e === T(F) && (q ? r() : q = !0, a(Y, o - i))) : (e.sortIndex = u, g(P, e), L || A || (L = !0, t(E))), e
            }, n.unstable_wrapCallback = function(e) {
                var n = j;
                return function() {
                    var t = j;
                    j = n;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        j = t
                    }
                }
            }
        },
        "5fb01c067ce2a2533619": (e, n, t) => {
            e.exports = t("711da9fec20ebd7abf22")
        }
    }
]);