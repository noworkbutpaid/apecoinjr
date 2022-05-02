/*!For license information please see npm.react.dd7cafc85611eb368fbc.js.LICENSE.txt*/
"use strict";
(self.webpackChunkthetan_landing_page = self.webpackChunkthetan_landing_page || []).push([
    [4], {
        d576fdbd1b2940cea26e: (e, t, r) => {
            var n = r("83406643bfb209d249f4"),
                o = 60103,
                u = 60106;
            t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
            var a = 60109,
                f = 60110,
                i = 60112;
            t.Suspense = 60113;
            var c = 60115,
                l = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                var s = Symbol.for;
                o = s("react.element"), u = s("react.portal"), t.Fragment = s("react.fragment"), t.StrictMode = s("react.strict_mode"), t.Profiler = s("react.profiler"), a = s("react.provider"), f = s("react.context"), i = s("react.forward_ref"), t.Suspense = s("react.suspense"), c = s("react.memo"), l = s("react.lazy")
            }
            var p = "function" === typeof Symbol && Symbol.iterator;

            function y(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var d = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                h = {};

            function v(e, t, r) {
                this.props = e, this.context = t, this.refs = h, this.updater = r || d
            }

            function _() {}

            function m(e, t, r) {
                this.props = e, this.context = t, this.refs = h, this.updater = r || d
            }
            v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(y(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, _.prototype = v.prototype;
            var b = m.prototype = new _;
            b.constructor = m, n(b, v.prototype), b.isPureReactComponent = !0;
            var g = {
                    current: null
                },
                k = Object.prototype.hasOwnProperty,
                w = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function S(e, t, r) {
                var n, u = {},
                    a = null,
                    f = null;
                if (null != t)
                    for (n in void 0 !== t.ref && (f = t.ref), void 0 !== t.key && (a = "" + t.key), t) k.call(t, n) && !w.hasOwnProperty(n) && (u[n] = t[n]);
                var i = arguments.length - 2;
                if (1 === i) u.children = r;
                else if (1 < i) {
                    for (var c = Array(i), l = 0; l < i; l++) c[l] = arguments[l + 2];
                    u.children = c
                }
                if (e && e.defaultProps)
                    for (n in i = e.defaultProps) void 0 === u[n] && (u[n] = i[n]);
                return {
                    $$typeof: o,
                    type: e,
                    key: a,
                    ref: f,
                    props: u,
                    _owner: g.current
                }
            }

            function $(e) {
                return "object" === typeof e && null !== e && e.$$typeof === o
            }
            var C = /\/+/g;

            function E(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function R(e, t, r, n, a) {
                var f = typeof e;
                "undefined" !== f && "boolean" !== f || (e = null);
                var i = !1;
                if (null === e) i = !0;
                else switch (f) {
                    case "string":
                    case "number":
                        i = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case o:
                            case u:
                                i = !0
                        }
                }
                if (i) return a = a(i = e), e = "" === n ? "." + E(i, 0) : n, Array.isArray(a) ? (r = "", null != e && (r = e.replace(C, "$&/") + "/"), R(a, t, r, "", (function(e) {
                    return e
                }))) : null != a && ($(a) && (a = function(e, t) {
                    return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(a, r + (!a.key || i && i.key === a.key ? "" : ("" + a.key).replace(C, "$&/") + "/") + e)), t.push(a)), 1;
                if (i = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
                    for (var c = 0; c < e.length; c++) {
                        var l = n + E(f = e[c], c);
                        i += R(f, t, r, l, a)
                    } else if (l = function(e) {
                            return null === e || "object" !== typeof e ? null : "function" === typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                        }(e), "function" === typeof l)
                        for (e = l.call(e), c = 0; !(f = e.next()).done;) i += R(f = f.value, t, r, l = n + E(f, c++), a);
                    else if ("object" === f) throw t = "" + e, Error(y(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return i
            }

            function j(e, t, r) {
                if (null == e) return e;
                var n = [],
                    o = 0;
                return R(e, n, "", "", (function(e) {
                    return t.call(r, e, o++)
                })), n
            }

            function P(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(), e._status = 0, e._result = t, t.then((function(t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }), (function(t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    }))
                }
                if (1 === e._status) return e._result;
                throw e._result
            }
            var O = {
                current: null
            };

            function x() {
                var e = O.current;
                if (null === e) throw Error(y(321));
                return e
            }
            var A = {
                ReactCurrentDispatcher: O,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: g,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: n
            };
            t.Children = {
                map: j,
                forEach: function(e, t, r) {
                    j(e, (function() {
                        t.apply(this, arguments)
                    }), r)
                },
                count: function(e) {
                    var t = 0;
                    return j(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return j(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!$(e)) throw Error(y(143));
                    return e
                }
            }, t.Component = v, t.PureComponent = m, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e) throw Error(y(267, e));
                var u = n({}, e.props),
                    a = e.key,
                    f = e.ref,
                    i = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (f = t.ref, i = g.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (l in t) k.call(t, l) && !w.hasOwnProperty(l) && (u[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
                }
                var l = arguments.length - 2;
                if (1 === l) u.children = r;
                else if (1 < l) {
                    c = Array(l);
                    for (var s = 0; s < l; s++) c[s] = arguments[s + 2];
                    u.children = c
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: a,
                    ref: f,
                    props: u,
                    _owner: i
                }
            }, t.createContext = function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: a,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = S, t.createFactory = function(e) {
                var t = S.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: i,
                    render: e
                }
            }, t.isValidElement = $, t.lazy = function(e) {
                return {
                    $$typeof: l,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: P
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: c,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.useCallback = function(e, t) {
                return x().useCallback(e, t)
            }, t.useContext = function(e, t) {
                return x().useContext(e, t)
            }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                return x().useEffect(e, t)
            }, t.useImperativeHandle = function(e, t, r) {
                return x().useImperativeHandle(e, t, r)
            }, t.useLayoutEffect = function(e, t) {
                return x().useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return x().useMemo(e, t)
            }, t.useReducer = function(e, t, r) {
                return x().useReducer(e, t, r)
            }, t.useRef = function(e) {
                return x().useRef(e)
            }, t.useState = function(e) {
                return x().useState(e)
            }, t.version = "17.0.2"
        },
        "8af190b70a6bc55c6f1b": (e, t, r) => {
            e.exports = r("d576fdbd1b2940cea26e")
        }
    }
]);