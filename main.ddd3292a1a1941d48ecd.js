/*!For license information please see main.ddd3292a1a1941d48ecd.js.LICENSE.txt*/
(self.webpackChunkthetan_landing_page = self.webpackChunkthetan_landing_page || []).push([
    [0], {
        f8f08bdd917755ac017a: (e, n, t) => {
            "use strict";

            function s(e) {
                a.length || (r(), !0), a[a.length] = e
            }
            e.exports = s;
            var r, a = [],
                i = 0;

            function o() {
                for (; i < a.length;) {
                    var e = i;
                    if (i += 1, a[e].call(), i > 1024) {
                        for (var n = 0, t = a.length - i; n < t; n++) a[n] = a[n + i];
                        a.length -= i, i = 0
                    }
                }
                a.length = 0, i = 0, !1
            }
            var l, c, d, p = "undefined" !== typeof t.g ? t.g : self,
                u = p.MutationObserver || p.WebKitMutationObserver;

            function m(e) {
                return function() {
                    var n = setTimeout(s, 0),
                        t = setInterval(s, 50);

                    function s() {
                        clearTimeout(n), clearInterval(t), e()
                    }
                }
            }
            "function" === typeof u ? (l = 1, c = new u(o), d = document.createTextNode(""), c.observe(d, {
                characterData: !0
            }), r = function() {
                l = -l, d.data = l
            }) : r = m(o), s.requestFlush = r, s.makeRequestCallFromTimer = m
        },
        b912ecc4473ae8a2ff0b: (e, n) => {
            var t;
            ! function() {
                "use strict";
                var s = {}.hasOwnProperty;

                function r() {
                    for (var e = [], n = 0; n < arguments.length; n++) {
                        var t = arguments[n];
                        if (t) {
                            var a = typeof t;
                            if ("string" === a || "number" === a) e.push(t);
                            else if (Array.isArray(t)) {
                                if (t.length) {
                                    var i = r.apply(null, t);
                                    i && e.push(i)
                                }
                            } else if ("object" === a)
                                if (t.toString === Object.prototype.toString)
                                    for (var o in t) s.call(t, o) && t[o] && e.push(o);
                                else e.push(t.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 === (t = function() {
                    return r
                }.apply(n, [])) || (e.exports = t)
            }()
        },
        a3d55e29c244c7e90e6f: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var s = t("a665fcf7b16f763beb70"),
                r = t.n(s),
                a = t("0e326f80368fd0b1333e"),
                i = t.n(a)()(r());
            i.push([e.id, ".mSqA9_PdIjIHLGUr9uDd {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: fit-content;\n}\n\n.CFWWZaumRZqGabBHudtc {\n  color: white !important;\n}", "", {
                version: 3,
                sources: ["webpack://./src/Components/ContractAddress/Components/ResizableEllipsisMiddleText/styles.module.scss"],
                names: [],
                mappings: "AAAA;EACE,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sBAAA;AACF;;AAEA;EACE,uBAAA;AACF",
                sourcesContent: [".ellipsisText {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: fit-content;\n}\n\n.textWhite {\n  color: white !important;\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                ellipsisText: "mSqA9_PdIjIHLGUr9uDd",
                textWhite: "CFWWZaumRZqGabBHudtc"
            };
            const o = i
        },
        b5e2d70909e106b750e6: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var s = t("a665fcf7b16f763beb70"),
                r = t.n(s),
                a = t("0e326f80368fd0b1333e"),
                i = t.n(a)()(r());
            i.push([e.id, '.QV1Yipv5AO1EWoulVcD3 {\n  position: relative;\n  display: inline-flex;\n  margin-left: 2px;\n  padding: 0 10px 0 2px;\n  cursor: pointer;\n}\n.QV1Yipv5AO1EWoulVcD3 .gsHCUIm56H3CVF68NBKQ {\n  visibility: hidden;\n  background-color: #0003;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  padding: 0 5px;\n  position: absolute;\n  z-index: 1;\n  left: calc(100% - 5px);\n  font-size: 12px;\n}\n.QV1Yipv5AO1EWoulVcD3 .gsHCUIm56H3CVF68NBKQ::after {\n  content: "";\n  position: absolute;\n  top: 4px;\n  right: 100%;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent #0003 transparent transparent;\n}\n\n.QV1Yipv5AO1EWoulVcD3:hover .gsHCUIm56H3CVF68NBKQ {\n  visibility: visible;\n}\n\n.OtM0H8uKHxqyUYF6_mry {\n  width: 12px;\n}', "", {
                version: 3,
                sources: ["webpack://./src/Components/ContractAddress/Components/TextCopyClipboard/styles.module.scss"],
                names: [],
                mappings: "AAAA;EACE,kBAAA;EACA,oBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AACF;AACE;EACE,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,sBAAA;EACA,eAAA;AACJ;AACE;EACE,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AACJ;;AAIE;EACE,mBAAA;AADJ;;AAKA;EACE,WAAA;AAFF",
                sourcesContent: [".tooltip {\n  position: relative;\n  display: inline-flex;\n  margin-left: 2px;\n  padding: 0 10px 0 2px;\n  cursor: pointer;\n\n  .tooltipText {\n    visibility: hidden;\n    background-color: #0003;\n    color: #fff;\n    text-align: center;\n    border-radius: 4px;\n    padding: 0 5px;\n    position: absolute;\n    z-index: 1;\n    left: calc(100% - 5px);\n    font-size: 12px;\n  }\n  .tooltipText::after {\n    content: '';\n    position: absolute;\n    top: 4px;\n    right: 100%;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent #0003 transparent transparent;\n  }\n}\n\n.tooltip:hover {\n  .tooltipText {\n    visibility: visible;\n  }\n}\n\n.iconCopy {\n  width: 12px;\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                tooltip: "QV1Yipv5AO1EWoulVcD3",
                tooltipText: "gsHCUIm56H3CVF68NBKQ",
                iconCopy: "OtM0H8uKHxqyUYF6_mry"
            };
            const o = i
        },
        c624f5803f7be48eca83: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var s = t("a665fcf7b16f763beb70"),
                r = t.n(s),
                a = t("0e326f80368fd0b1333e"),
                i = t.n(a)()(r());
            i.push([e.id, "/* stylelint-disable */\n.YaWXLS3C5ZncWBG1bMQB {\n  display: grid;\n  gap: 10px;\n}\n.YaWXLS3C5ZncWBG1bMQB .zjf3V8bMhE3z1fvrRARn {\n  font-size: 14px;\n  color: #f9d52c!important;\n  font-weight: bold;\n}\n\n.sPtC0LnMjRGFLLXwmNB_ {\n  background: #f9d52c;\n  box-shadow: 0px 0px 9px rgba(63, 0, 143, 0.87);\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%;\n  border: none;\n  padding: 10px;\n  margin: auto;\n  margin-top: 10px;\n  cursor: pointer;\n  color: black !important;\n  display: flex;\n  justify-content: center;\n}\n\n@media (min-width: 1024px) and (max-width: 1439px) {\n  .YaWXLS3C5ZncWBG1bMQB {\n    font-size: 12px;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 991px) {\n  .sPtC0LnMjRGFLLXwmNB_ {\n    max-width: 460px;\n  }\n}", "", {
                version: 3,
                sources: ["webpack://./src/utils/breakpoints.scss", "webpack://./src/Components/ContractAddress/styles.module.scss"],
                names: [],
                mappings: "AAAA,sBAAA;ACEA;EACE,aAAA;EACA,SAAA;AAAF;AACE;EACE,eAAA;AACJ;;AAGA;EACE,mBAAA;EACA,8CAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,uBAAA;AAAF;;AD+GE;EC3GA;IACE,eAAA;IACA,8BAAA;EAAF;AACF;ADwGE;ECpGA;IACE,gBAAA;EADF;AACF",
                sourcesContent: ["/* stylelint-disable */\n\n// https://css-tricks.com/approaches-media-queries-sass/\n\n//  \t _            _           _                           _ _\n//  \t(_)          | |         | |                         | (_)\n//  \t _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//  \t| | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//  \t| | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//  \t|_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//\t\t\tSimple, elegant and maintainable media queries in Sass\n//\n//\t\t\t \t\t\thttp://include-media.com\n//\n//\t  \t\t Author: Eduardo Boucas <mail@eduardoboucas.com>\n//\n///\n/// Creates a list of global breakpoints\n///\n/// @author Eduardo Boucas\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n$breakpoints: (\n  'phone': 320px,\n  'tablet': 768px,\n  'desktop': 1024px,\n  'wide': 1440px,\n) !default;\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @author Eduardo Boucas\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///\t\t'retina2x': (\n///\t\t\t'(-webkit-min-device-pixel-ratio: 2)',\n///\t\t\t'(min-resolution: 192dpi)'\n///\t\t)\n///\t);\n///\n$media-expressions: (\n  'screen': 'screen',\n  'print': 'print',\n  'handheld': 'handheld',\n  'retina2x': (\n    '(-webkit-min-device-pixel-ratio: 2)',\n    '(min-resolution: 192dpi)',\n  ),\n  'retina3x': (\n    '(-webkit-min-device-pixel-ratio: 3)',\n    '(min-resolution: 350dpi)',\n  ),\n) !default;\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @author Eduardo Boucas\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media(\">128px\") {}\n///\n///\t /* Generates: */\n///\t @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media(\">20em\") {}\n///\n///\t /* Generates: */\n///\t @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media(\">2.0rem\") {}\n///\n///\t /* Generates: */\n///\t @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n  'px': 1,\n  'em': 0.01,\n  'rem': 0.1,\n) !default;\n///\n/// Generates a media query based on a list of conditions\n///\n/// @author Eduardo Boucas\n///\n/// @param {List}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media(\">phone\") { }\n///\n/// @example scss - With two set breakpoints\n///  @include media(\">phone\", \"<=tablet\") { }\n///\n/// @example scss - With custom values\n///  @include media(\">=358px\", \"<850px\") { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media(\">desktop\", \"<=1350px\") { }\n///\n/// @example scss - With a static expression\n///  @include media(\"retina2x\") { }\n///\n/// @example scss - Mixing everything\n///  @include media(\">=350px\", \"<tablet\", \"retina3x\") { }\n///\n@mixin media($conditions...) {\n  @for $i from 1 through length($conditions) {\n    $conditions: set-nth(\n      $conditions,\n      $i,\n      parse-expression(nth($conditions, $i))\n    );\n  }\n\n  $branches: get-query-branches($conditions);\n  $query: '';\n\n  @each $branch in $branches {\n    @if (str-length($query) != 0) {\n      $query: $query + ', ';\n    }\n\n    $query: $query + $branch;\n  }\n\n  @media #{$query} {\n    @content;\n  }\n}\n\n///\n/// Reads a list of media query expressions and separates logical disjunctions into different branches\n///\n/// @author Eduardo Boucas\n///\n/// @param {List}   $expressions  - list of expressions\n///\n/// @throws `$expression` is not a valid expression\n///\n/// @return {List | Null}\n///\n@function get-query-branches($expressions) {\n  $result: '';\n  $has-groups: false;\n\n  // Getting initial snapshot and looking for groups\n  @each $expression in $expressions {\n    @if (str-length($result) != 0) {\n      $result: $result + ' and ';\n    }\n\n    @if (type-of($expression) == 'string') {\n      $result: $result + $expression;\n    } @else if (type-of($expression) == 'list') {\n      $result: $result + nth($expression, 1);\n      $has-groups: true;\n    } @else {\n      @warn '#{$expression} is not a valid expression.';\n    }\n  }\n\n  // If we have groups, we have to create all possible combinations\n  @if $has-groups {\n    @each $expression in $expressions {\n      @if (type-of($expression) == 'list') {\n        $first: nth($expression, 1);\n\n        @each $member in $expression {\n          @if ($member != $first) {\n            @each $partial in $result {\n              $result: join(\n                $result,\n                str-replace-first($first, $member, $partial)\n              );\n            }\n          }\n        }\n      }\n    }\n  }\n\n  @return $result;\n}\n\n///\n/// Parses a string to form a media query expression\n///\n/// @author Eduardo Boucas\n///\n/// @param {String}   $expression  - expression (in string)\n///\n/// @throws Expression with type `type-of($expression)` detected, string expected\n/// @throws `$expression` is missing an operator\n/// @throws Unknown unit: `$unit`\n///\n/// @return {String | Null}\n///\n@function parse-expression($expression) {\n  $operator: '';\n  $value: '';\n  $element: '';\n  $result: '';\n  $is-width: true;\n\n  @if (type-of($expression) != 'string') {\n    @warn 'Expression with type `#{type-of($expression)}` detected, string expected.';\n  }\n\n  // Separating the operator from the rest of the expression\n  @if (str-slice($expression, 2, 2) == '=') {\n    $operator: str-slice($expression, 1, 2);\n    $value: str-slice($expression, 3);\n  } @else {\n    $operator: str-slice($expression, 1, 1);\n    $value: str-slice($expression, 2);\n  }\n\n  // Checking what type of expression we're dealing with\n  @if map-has-key($breakpoints, $value) {\n    $result: map-get($breakpoints, $value);\n  } @else if map-has-key($media-expressions, $expression) {\n    $result: map-get($media-expressions, $expression);\n    $is-width: false;\n  } @else {\n    $result: to-number($value);\n  }\n\n  @if ($is-width) {\n    $unit: unit($result);\n    $interval: 0;\n\n    @if (map-has-key($unit-intervals, $unit)) {\n      $interval: map-get($unit-intervals, $unit);\n    } @else {\n      @warn 'Unknown unit: #{$unit}';\n    }\n\n    @if ($operator == '>') {\n      $element: '(min-width: #{$result + $interval})';\n    } @else if ($operator == '<') {\n      $element: '(max-width: #{$result - $interval})';\n    } @else if ($operator == '>=') {\n      $element: '(min-width: #{$result})';\n    } @else if ($operator == '<=') {\n      $element: '(max-width: #{$result})';\n    } @else {\n      @warn '#{$expression} is missing an operator.';\n    }\n  } @else {\n    $element: $result;\n  }\n\n  @return $element;\n}\n\n///\n/// Replaces the first occurence of the string with the replacement string\n///\n/// @author Eduardo Boucas\n///\n/// @param {String}   $search  - The value being searched for\n/// @param {String}   $replace  - The replacement string\n/// @param {String}   $subject  - The string being replaced on\n///\n/// @return {String | Null}\n///\n@function str-replace-first($search, $replace, $subject) {\n  $search-start: str-index($subject, $search);\n\n  @if $search-start == null {\n    @return $subject;\n  }\n\n  $result: str-slice($subject, 0, $search-start - 1);\n  $result: $result + $replace;\n  $result: $result + str-slice($subject, $search-start + str-length($search));\n\n  @return $result;\n}\n\n///\n/// Casts a number to a string\n///\n/// @author Hugo Giraudel\n///\n/// @param {String}   $string  - Number to be parsed\n///\n/// @return {List | Null}\n///\n@function to-number($string) {\n  // Matrices\n  $strings: '0' '1' '2' '3' '4' '5' '6' '7' '8' '9';\n  $numbers: 0 1 2 3 4 5 6 7 8 9;\n\n  // Result\n  $result: 0;\n  $divider: 0;\n  $minus: false;\n\n  // Looping through all characters\n  @for $i from 1 through str-length($string) {\n    $character: str-slice($string, $i, $i);\n    $index: index($strings, $character);\n\n    @if $character == '-' {\n      $minus: true;\n    } @else if $character == '.' {\n      $divider: 1;\n    } @else {\n      @if type-of($index) != 'number' {\n        $result: if($minus, $result * -1, $result);\n        @return _length($result, str-slice($string, $i));\n      }\n\n      $number: nth($numbers, $index);\n\n      @if $divider == 0 {\n        $result: $result * 10;\n      } @else {\n        // Move the decimal dot to the left\n        $divider: $divider * 10;\n        $number: $number / $divider;\n      }\n\n      $result: $result + $number;\n    }\n  }\n\n  @return if($minus, $result * -1, $result);\n}\n\n@function _length($number, $unit) {\n  $strings: 'px' 'cm' 'mm' '%' 'ch' 'pica' 'in' 'em' 'rem' 'pt' 'pc' 'ex' 'vw'\n    'vh' 'vmin' 'vmax';\n  $units: 1px 1cm 1mm 1% 1ch 1pica 1in 1em 1rem 1pt 1pc 1ex 1vw 1vh 1vmin 1vmax;\n  $index: index($strings, $unit);\n\n  @if type-of($index) != 'number' {\n    @warn 'Unknown unit `#{$unit}`.';\n    @return false;\n  }\n\n  @return $number * nth($units, $index);\n}\n", "@import '../../utils/breakpoints.scss';\n\n.contractAddressSection {\n  display: grid;\n  gap: 10px;\n  .contractLabel {\n    font-size: 14px;\n  }\n}\n\n.trade {\n  background: #6728cd;\n  box-shadow: 0px 0px 9px rgba(63, 0, 143, 0.87);\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%;\n  border: none;\n  padding: 10px;\n  margin: auto;\n  margin-top: 10px;\n  cursor: pointer;\n  color: white !important;\n  display: flex;\n  justify-content: center;\n}\n\n@include media('>=desktop', '<wide') {\n  .contractAddressSection {\n    font-size: 12px;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@include media('<=991px') {\n  .trade {\n    max-width: 460px;\n  }\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                contractAddressSection: "YaWXLS3C5ZncWBG1bMQB",
                contractLabel: "zjf3V8bMhE3z1fvrRARn",
                trade: "sPtC0LnMjRGFLLXwmNB_"
            };
            const o = i
        },
        a996b3d008bba8f6a34e: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var s = t("a665fcf7b16f763beb70"),
                r = t.n(s),
                a = t("0e326f80368fd0b1333e"),
                i = t.n(a)()(r());
            i.push([e.id, "/* stylelint-disable */\n.Zk23IxtnyOAKHSVgzTjQ {\n  color: white;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: auto auto;\n}\n.Zk23IxtnyOAKHSVgzTjQ .S1J1mkZViinFPaRjbr7H {\n  display: grid;\n  align-items: center;\n  margin-top: 0;\n  grid-template-columns: repeat(4, auto);\n}\n.Zk23IxtnyOAKHSVgzTjQ .Zdl_E3vvCO6f78KUJXGU {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.hfOIXAchaIva_3_wxUEV {\n  color: #ff63fa;\n  margin-right: 4px;\n}\n\n@media (max-width: 767px) {\n  .Zk23IxtnyOAKHSVgzTjQ {\n    font-size: 12px;\n    grid-template-columns: auto;\n  }\n  .Zk23IxtnyOAKHSVgzTjQ .Zdl_E3vvCO6f78KUJXGU {\n    font-size: 12px;\n    display: inline-block !important;\n    margin-right: 5px;\n  }\n  .Zk23IxtnyOAKHSVgzTjQ .S1J1mkZViinFPaRjbr7H {\n    display: inline-grid;\n    grid-template-columns: repeat(2, auto);\n  }\n}", "", {
                version: 3,
                sources: ["webpack://./src/utils/breakpoints.scss", "webpack://./src/Components/ContractAddressHeader/styles.module.scss"],
                names: [],
                mappings: "AAAA,sBAAA;ACEA;EACE,YAAA;EACA,aAAA;EACA,SAAA;EACA,gCAAA;AAAF;AAEE;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,sCAAA;AAAJ;AAEE;EACE,eAAA;EACA,gBAAA;AAAJ;;AAGA;EACE,cAAA;EACA,iBAAA;AAAF;;ADkHE;EC9GA;IACE,eAAA;IACA,2BAAA;EAAF;EACE;IACE,eAAA;IACA,gCAAA;IACA,iBAAA;EACJ;EACE;IACE,oBAAA;IACA,sCAAA;EACJ;AACF",
                sourcesContent: ["/* stylelint-disable */\n\n// https://css-tricks.com/approaches-media-queries-sass/\n\n//  \t _            _           _                           _ _\n//  \t(_)          | |         | |                         | (_)\n//  \t _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//  \t| | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//  \t| | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//  \t|_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//\t\t\tSimple, elegant and maintainable media queries in Sass\n//\n//\t\t\t \t\t\thttp://include-media.com\n//\n//\t  \t\t Author: Eduardo Boucas <mail@eduardoboucas.com>\n//\n///\n/// Creates a list of global breakpoints\n///\n/// @author Eduardo Boucas\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n$breakpoints: (\n  'phone': 320px,\n  'tablet': 768px,\n  'desktop': 1024px,\n  'wide': 1440px,\n) !default;\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @author Eduardo Boucas\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///\t\t'retina2x': (\n///\t\t\t'(-webkit-min-device-pixel-ratio: 2)',\n///\t\t\t'(min-resolution: 192dpi)'\n///\t\t)\n///\t);\n///\n$media-expressions: (\n  'screen': 'screen',\n  'print': 'print',\n  'handheld': 'handheld',\n  'retina2x': (\n    '(-webkit-min-device-pixel-ratio: 2)',\n    '(min-resolution: 192dpi)',\n  ),\n  'retina3x': (\n    '(-webkit-min-device-pixel-ratio: 3)',\n    '(min-resolution: 350dpi)',\n  ),\n) !default;\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @author Eduardo Boucas\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media(\">128px\") {}\n///\n///\t /* Generates: */\n///\t @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media(\">20em\") {}\n///\n///\t /* Generates: */\n///\t @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media(\">2.0rem\") {}\n///\n///\t /* Generates: */\n///\t @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n  'px': 1,\n  'em': 0.01,\n  'rem': 0.1,\n) !default;\n///\n/// Generates a media query based on a list of conditions\n///\n/// @author Eduardo Boucas\n///\n/// @param {List}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media(\">phone\") { }\n///\n/// @example scss - With two set breakpoints\n///  @include media(\">phone\", \"<=tablet\") { }\n///\n/// @example scss - With custom values\n///  @include media(\">=358px\", \"<850px\") { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media(\">desktop\", \"<=1350px\") { }\n///\n/// @example scss - With a static expression\n///  @include media(\"retina2x\") { }\n///\n/// @example scss - Mixing everything\n///  @include media(\">=350px\", \"<tablet\", \"retina3x\") { }\n///\n@mixin media($conditions...) {\n  @for $i from 1 through length($conditions) {\n    $conditions: set-nth(\n      $conditions,\n      $i,\n      parse-expression(nth($conditions, $i))\n    );\n  }\n\n  $branches: get-query-branches($conditions);\n  $query: '';\n\n  @each $branch in $branches {\n    @if (str-length($query) != 0) {\n      $query: $query + ', ';\n    }\n\n    $query: $query + $branch;\n  }\n\n  @media #{$query} {\n    @content;\n  }\n}\n\n///\n/// Reads a list of media query expressions and separates logical disjunctions into different branches\n///\n/// @author Eduardo Boucas\n///\n/// @param {List}   $expressions  - list of expressions\n///\n/// @throws `$expression` is not a valid expression\n///\n/// @return {List | Null}\n///\n@function get-query-branches($expressions) {\n  $result: '';\n  $has-groups: false;\n\n  // Getting initial snapshot and looking for groups\n  @each $expression in $expressions {\n    @if (str-length($result) != 0) {\n      $result: $result + ' and ';\n    }\n\n    @if (type-of($expression) == 'string') {\n      $result: $result + $expression;\n    } @else if (type-of($expression) == 'list') {\n      $result: $result + nth($expression, 1);\n      $has-groups: true;\n    } @else {\n      @warn '#{$expression} is not a valid expression.';\n    }\n  }\n\n  // If we have groups, we have to create all possible combinations\n  @if $has-groups {\n    @each $expression in $expressions {\n      @if (type-of($expression) == 'list') {\n        $first: nth($expression, 1);\n\n        @each $member in $expression {\n          @if ($member != $first) {\n            @each $partial in $result {\n              $result: join(\n                $result,\n                str-replace-first($first, $member, $partial)\n              );\n            }\n          }\n        }\n      }\n    }\n  }\n\n  @return $result;\n}\n\n///\n/// Parses a string to form a media query expression\n///\n/// @author Eduardo Boucas\n///\n/// @param {String}   $expression  - expression (in string)\n///\n/// @throws Expression with type `type-of($expression)` detected, string expected\n/// @throws `$expression` is missing an operator\n/// @throws Unknown unit: `$unit`\n///\n/// @return {String | Null}\n///\n@function parse-expression($expression) {\n  $operator: '';\n  $value: '';\n  $element: '';\n  $result: '';\n  $is-width: true;\n\n  @if (type-of($expression) != 'string') {\n    @warn 'Expression with type `#{type-of($expression)}` detected, string expected.';\n  }\n\n  // Separating the operator from the rest of the expression\n  @if (str-slice($expression, 2, 2) == '=') {\n    $operator: str-slice($expression, 1, 2);\n    $value: str-slice($expression, 3);\n  } @else {\n    $operator: str-slice($expression, 1, 1);\n    $value: str-slice($expression, 2);\n  }\n\n  // Checking what type of expression we're dealing with\n  @if map-has-key($breakpoints, $value) {\n    $result: map-get($breakpoints, $value);\n  } @else if map-has-key($media-expressions, $expression) {\n    $result: map-get($media-expressions, $expression);\n    $is-width: false;\n  } @else {\n    $result: to-number($value);\n  }\n\n  @if ($is-width) {\n    $unit: unit($result);\n    $interval: 0;\n\n    @if (map-has-key($unit-intervals, $unit)) {\n      $interval: map-get($unit-intervals, $unit);\n    } @else {\n      @warn 'Unknown unit: #{$unit}';\n    }\n\n    @if ($operator == '>') {\n      $element: '(min-width: #{$result + $interval})';\n    } @else if ($operator == '<') {\n      $element: '(max-width: #{$result - $interval})';\n    } @else if ($operator == '>=') {\n      $element: '(min-width: #{$result})';\n    } @else if ($operator == '<=') {\n      $element: '(max-width: #{$result})';\n    } @else {\n      @warn '#{$expression} is missing an operator.';\n    }\n  } @else {\n    $element: $result;\n  }\n\n  @return $element;\n}\n\n///\n/// Replaces the first occurence of the string with the replacement string\n///\n/// @author Eduardo Boucas\n///\n/// @param {String}   $search  - The value being searched for\n/// @param {String}   $replace  - The replacement string\n/// @param {String}   $subject  - The string being replaced on\n///\n/// @return {String | Null}\n///\n@function str-replace-first($search, $replace, $subject) {\n  $search-start: str-index($subject, $search);\n\n  @if $search-start == null {\n    @return $subject;\n  }\n\n  $result: str-slice($subject, 0, $search-start - 1);\n  $result: $result + $replace;\n  $result: $result + str-slice($subject, $search-start + str-length($search));\n\n  @return $result;\n}\n\n///\n/// Casts a number to a string\n///\n/// @author Hugo Giraudel\n///\n/// @param {String}   $string  - Number to be parsed\n///\n/// @return {List | Null}\n///\n@function to-number($string) {\n  // Matrices\n  $strings: '0' '1' '2' '3' '4' '5' '6' '7' '8' '9';\n  $numbers: 0 1 2 3 4 5 6 7 8 9;\n\n  // Result\n  $result: 0;\n  $divider: 0;\n  $minus: false;\n\n  // Looping through all characters\n  @for $i from 1 through str-length($string) {\n    $character: str-slice($string, $i, $i);\n    $index: index($strings, $character);\n\n    @if $character == '-' {\n      $minus: true;\n    } @else if $character == '.' {\n      $divider: 1;\n    } @else {\n      @if type-of($index) != 'number' {\n        $result: if($minus, $result * -1, $result);\n        @return _length($result, str-slice($string, $i));\n      }\n\n      $number: nth($numbers, $index);\n\n      @if $divider == 0 {\n        $result: $result * 10;\n      } @else {\n        // Move the decimal dot to the left\n        $divider: $divider * 10;\n        $number: $number / $divider;\n      }\n\n      $result: $result + $number;\n    }\n  }\n\n  @return if($minus, $result * -1, $result);\n}\n\n@function _length($number, $unit) {\n  $strings: 'px' 'cm' 'mm' '%' 'ch' 'pica' 'in' 'em' 'rem' 'pt' 'pc' 'ex' 'vw'\n    'vh' 'vmin' 'vmax';\n  $units: 1px 1cm 1mm 1% 1ch 1pica 1in 1em 1rem 1pt 1pc 1ex 1vw 1vh 1vmin 1vmax;\n  $index: index($strings, $unit);\n\n  @if type-of($index) != 'number' {\n    @warn 'Unknown unit `#{$unit}`.';\n    @return false;\n  }\n\n  @return $number * nth($units, $index);\n}\n", "@import '../../utils/breakpoints.scss';\n\n.contractAddressSection {\n  color: white;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: auto auto;\n\n  .addressContent {\n    display: grid;\n    align-items: center;\n    margin-top: 0;\n    grid-template-columns: repeat(4, auto);\n  }\n  .contractLabel {\n    font-size: 14px;\n    margin-bottom: 0;\n  }\n}\n.addressKey {\n  color: #ff63fa;\n  margin-right: 4px;\n}\n\n@include media('<tablet') {\n  .contractAddressSection {\n    font-size: 12px;\n    grid-template-columns: auto;\n    .contractLabel {\n      font-size: 12px;\n      display: inline-block !important;\n      margin-right: 5px;\n    }\n    .addressContent {\n      display: inline-grid;\n      grid-template-columns: repeat(2, auto);\n    }\n  }\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                contractAddressSection: "Zk23IxtnyOAKHSVgzTjQ",
                addressContent: "S1J1mkZViinFPaRjbr7H",
                contractLabel: "Zdl_E3vvCO6f78KUJXGU",
                addressKey: "hfOIXAchaIva_3_wxUEV"
            };
            const o = i
        },
        b660476093494a965b56: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var s = t("a665fcf7b16f763beb70"),
                r = t.n(s),
                a = t("0e326f80368fd0b1333e"),
                i = t.n(a)()(r());
            i.push([e.id, ".pZoD1Ar0NFftxfAR0dxS {\n  color: #00a9ff;\n  font-weight: bold;\n  display: block;\n  margin-top: 10px;\n}", "", {
                version: 3,
                sources: ["webpack://./src/Components/DescriptionTheta/styles.module.scss"],
                names: [],
                mappings: "AAAA;EACE,cAAA;EACA,iBAAA;EACA,cAAA;EACA,gBAAA;AACF",
                sourcesContent: [".hashtagTheta {\n  color: #00a9ff;\n  font-weight: bold;\n  display: block;\n  margin-top: 10px;\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                hashtagTheta: "pZoD1Ar0NFftxfAR0dxS"
            };
            const o = i
        },
        "83406643bfb209d249f4": e => {
            "use strict";
            var n = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable;

            function r(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
                    if ("0123456789" !== Object.getOwnPropertyNames(n).map((function(e) {
                            return n[e]
                        })).join("")) return !1;
                    var s = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        s[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, a) {
                for (var i, o, l = r(e), c = 1; c < arguments.length; c++) {
                    for (var d in i = Object(arguments[c])) t.call(i, d) && (l[d] = i[d]);
                    if (n) {
                        o = n(i);
                        for (var p = 0; p < o.length; p++) s.call(i, o[p]) && (l[o[p]] = i[o[p]])
                    }
                }
                return l
            }
        },
        "5b15df55c1316f23e9d0": (e, n, t) => {
            "use strict";
            "undefined" === typeof Promise && (t("9fbadcf2c98d054f245e").enable(), self.Promise = t("e6615fafe8e11b81e37a")), "undefined" !== typeof window && t("81466c1910d9b02d71b2"), Object.assign = t("83406643bfb209d249f4"), t("1fab3934ec230130e93b"), t("067d570ee5d083ff6ced")
        },
        e7b8d6a0c17f470a4a1b: e => {
            e.exports = "data:image/svg+xml,%3csvg fill='none' height='14px' width='14px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' %3e%3c/path%3e %3c/svg%3e"
        },
        "1b931bd270dfbdb8080b": (e, n, t) => {
            "use strict";
            t.r(n);
            var s = t("8af190b70a6bc55c6f1b"),
                r = t("63f14ac74ce296f77f4d");
            const a = {
                    //  APEJR: {
                    //      BEP20: "0x1f7b373ff8e8e5860bfcc3ce8c773be0677a1cbf"
                    //  },

                },
                i = "https://play.google.com/store/apps/details?id=com.wolffun.thetanarena",
                o = "https://apps.apple.com/us/app/thetan-arena/id1584926372",
                l = "https://assets.thetanarena.com/pcversion/ThetanArenaSetup.exe";
            r.render(s.createElement((() => s.createElement(s.Fragment, null, s.createElement("div", {
                className: "item-wrapper"
            }, s.createElement("div", {
                className: "item"
            }, s.createElement("div", {
                className: "box-btn-main"
            }, s.createElement("a", {
                href: i,
                target: "_blank",
                className: "btn-main",
                rel: "noreferrer"
            }, s.createElement("span", null, s.createElement("img", {
                src: "images/about/Icon_android.svg",
                alt: ""
            }), "Android")))), s.createElement("div", {
                className: "item"
            }, s.createElement("div", {
                className: "box-btn-main"
            }, s.createElement("a", {
                href: o,
                target: "_blank",
                className: "btn-main",
                rel: "noreferrer"
            }, s.createElement("span", null, s.createElement("img", {
                src: "images/about/Icon_IOS.svg",
                alt: ""
            }), "IOS"))))), s.createElement("div", {
                className: "item-wrapper"
            }, s.createElement("div", {
                className: "item"
            }, s.createElement("div", {
                className: "box-btn-main"
            }, s.createElement("a", {
                href: l,
                target: "_blank",
                className: "btn-main",
                rel: "noreferrer"
            }, s.createElement("span", null, s.createElement("img", {
                src: "images/about/icon_pc.svg",
                alt: ""
            }), " WEB"))))))), null), document.getElementById("download-theta"));
            var c = t("745a70c961e0aad60670"),
                d = t.n(c),
                p = t("0b68a4be84b48b4534b2"),
                u = t.n(p),
                m = t("d489ed5914aeebe58ec3"),
                A = t.n(m),
                f = t("f271967859dd8c9d5c97"),
                $ = t.n(f),
                h = t("4de01c6a2717d72946b9"),
                b = t.n(h),
                x = t("784dfee60a1ebe7f7167"),
                g = t.n(x),
                E = t("b660476093494a965b56"),
                v = {};
            v.styleTagTransform = g(), v.setAttributes = $(), v.insert = A().bind(null, "head"), v.domAPI = u(), v.insertStyleElement = b();
            d()(E.default, v);
            const _ = E.default && E.default.locals ? E.default.locals : void 0;
            r.render(s.createElement((() => s.createElement(s.Fragment, null, "ApeCoinVerse is a blockchain based NFT gaming platform and marketplace.", s.createElement("br", null), " Inspired by ApeCoin and other crypto NFT and gaming narratives, ApeCoinVerse will combine and synergize them both to build an attractive platform The game allows every player to collect coins and complete different stages to earn. Furthermore, ApeCoinVerse will also include an NFT marketplace, where players can sell their characters, weapons and upgraded equipment for crypto. Some of the items can even be redeemed for real world replicas. ", s.createElement("br", null), s.createElement("span", {
                className: _.hashtagTheta
            }, ))), null), document.getElementById("desc-theta"));
            var y = t("c624f5803f7be48eca83"),
                C = {};
            C.styleTagTransform = g(), C.setAttributes = $(), C.insert = A().bind(null, "head"), C.domAPI = u(), C.insertStyleElement = b();
            d()(y.default, C);
            const w = y.default && y.default.locals ? y.default.locals : void 0;
            var k = t("b5e2d70909e106b750e6"),
                B = {};
            B.styleTagTransform = g(), B.setAttributes = $(), B.insert = A().bind(null, "head"), B.domAPI = u(), B.insertStyleElement = b();
            d()(k.default, B);
            const S = k.default && k.default.locals ? k.default.locals : void 0;
            var T = t("e7b8d6a0c17f470a4a1b"),
                j = t.n(T);
            const I = ({
                textToCopy: e,
                children: n
            }) => {
                const [t, r] = (0, s.useState)(!1);
                return s.createElement("div", {
                    onClick: () => (e => {
                        navigator.clipboard.writeText(e), r(!0)
                    })(e),
                    onMouseOut: () => {
                        t && r(!1)
                    }
                }, s.createElement("span", {
                    className: S.tooltip
                }, n, s.createElement("span", {
                    className: S.tooltipText
                }, t ? "Copied" : "Copy"), s.createElement("img", {
                    src: j(),
                    className: S.iconCopy
                })))
            };
            var N = t("a3d55e29c244c7e90e6f"),
                O = {};
            O.styleTagTransform = g(), O.setAttributes = $(), O.insert = A().bind(null, "head"), O.domAPI = u(), O.insertStyleElement = b();
            d()(N.default, O);
            const F = N.default && N.default.locals ? N.default.locals : void 0;
            var q = t("b912ecc4473ae8a2ff0b"),
                W = t.n(q);
            const H = ({
                    text: e
                }) => {
                    const n = (e, n) => ({
                        firstPartText: e.substring(0, e.length - n),
                        lastPartText: e.substr(-n)
                    });
                    return s.createElement(s.Fragment, null, s.createElement("span", {
                        className: W()(F.ellipsisText, F.textWhite)
                    }, n(e, 6).firstPartText), s.createElement("span", {
                        className: F.textWhite
                    }, n(e, 6).lastPartText))
                },
                G = ({
                    walletKey: e,
                    walletAddress: n
                }) => s.createElement("tr", null, s.createElement("td", {
                    className: "tg-baqh"
                }, s.createElement("span", null, e)), s.createElement("td", {
                    className: "tg-0lax"
                }, s.createElement("div", {
                    className: w.addressContent
                }, s.createElement(I, {
                    textToCopy: n
                }, s.createElement(H, {
                    text: n
                }))))),
                L = ({
                    coinType: e,
                    addressSet: n
                }) => s.createElement("div", null, s.createElement("span", {
                    className: w.contractLabel
                }, "$", "APEJR", " CONTRACT ADDRESS"), s.createElement("table", {
                    className: "tg"
                }, s.createElement("tbody", null, Object.entries(n).map((([n, t]) => s.createElement(G, {
                    key: `${e}-${n}`,
                    walletKey: n,
                    walletAddress: t
                }))))));
            r.render(s.createElement((() => s.createElement("div", {
                className: w.contractAddressSection
            }, Object.entries(a).map((([e, n]) => s.createElement(L, {
                key: e,
                coinType: e,
                addressSet: n
            }))), s.createElement("a", {
                className: w.trade,
                // href: "#",
                target: "_blank",
                rel: "noreferrer"
            }, "TO BE ANNOUNCED"))), null), document.getElementById("contract-address"));
            var P = t("a996b3d008bba8f6a34e"),
                V = {};
            V.styleTagTransform = g(), V.setAttributes = $(), V.insert = A().bind(null, "head"), V.domAPI = u(), V.insertStyleElement = b();
            d()(P.default, V);
            const z = P.default && P.default.locals ? P.default.locals : void 0,
                M = ({
                    walletKey: e,
                    walletAddress: n
                }) => s.createElement(s.Fragment, null, s.createElement("span", {
                    className: z.addressKey
                }, e), s.createElement(I, {
                    textToCopy: n
                }, s.createElement(H, {
                    text: n
                }))),
                R = ({
                    coinType: e,
                    addressSet: n
                }) => s.createElement("div", null, s.createElement("p", {
                    className: z.contractLabel
                }, "$", e, " Contract Address"), s.createElement("p", {
                    className: z.addressContent
                }, Object.entries(n).map((([n, t]) => s.createElement(M, {
                    key: `${e}-${n}`,
                    walletKey: n,
                    walletAddress: t
                })))));
            r.render(s.createElement((() => s.createElement(s.Fragment, null, s.createElement("div", {
                className: z.contractAddressSection
            }, Object.entries(a).map((([e, n]) => s.createElement(R, {
                key: e,
                coinType: e,
                addressSet: n
            })))))), null), document.getElementById("contract-address-header"));
            var K = function(e, n, t, s) {
                return new(t || (t = Promise))((function(r, a) {
                    function i(e) {
                        try {
                            l(s.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(s.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(e) {
                        var n;
                        e.done ? r(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(i, o)
                    }
                    l((s = s.apply(e, n || [])).next())
                }))
            };
            r.render(s.createElement((() => {
                const [e, n] = (0, s.useState)("");
                return s.useEffect((() => {
                    const e = () => K(void 0, void 0, void 0, (function*() {
                        const e = yield //fetch("https://data.thetanarena.com/thetan/v1/user/totalPlayers");
                        if (e) {
                            const t = yield e.json();
                            n(function(e) {
                                if (e <= 0) return "0";
                                if (e < 1e8) return e.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                if (e < 1e15) {
                                    const n = ["M", "B", "T"];
                                    for (let t = n.length - 1; t >= 0; t--)
                                        if (e >= Math.pow(1e3, t + 2)) return +(e / Math.pow(1e3, t + 2)).toFixed(2) + n[t]
                                }
                                return ">1,000T"
                            }(t.data))
                        }
                    }));
                    e();
                    const t = setInterval(e, 15e3);
                    return () => {
                        clearInterval(t)
                    }
                }), []), s.createElement(s.Fragment, null, s.createElement("span", null, "NOW AVAILABLE ON"), s.createElement("p", {
                    id: "player-number"
                }, e))
            }), null), document.getElementById("total-player"))
        }
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [1, 7, 3, 6, 4, 5, 2, 8], (() => (n("5b15df55c1316f23e9d0"), n("1b931bd270dfbdb8080b"))));
        e.O()
    }
]);