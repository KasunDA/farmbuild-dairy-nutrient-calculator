(function(W, X, u) {
    "use strict";
    function z(b) {
        return function() {
            var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.28/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++) a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a);
        };
    }
    function Sa(b) {
        if (null == b || Ja(b)) return !1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : G(b) || L(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
    }
    function r(b, a, c) {
        var d;
        if (b) if (N(b)) for (d in b) "prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d); else if (L(b) || Sa(b)) for (d = 0; d < b.length; d++) a.call(c, b[d], d); else if (b.forEach && b.forEach !== r) b.forEach(a, c); else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b;
    }
    function Xb(b) {
        var a = [], c;
        for (c in b) b.hasOwnProperty(c) && a.push(c);
        return a.sort();
    }
    function Sc(b, a, c) {
        for (var d = Xb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d;
    }
    function Yb(b) {
        return function(a, c) {
            b(c, a);
        };
    }
    function ib() {
        for (var b = na.length, a; b; ) {
            b--;
            a = na[b].charCodeAt(0);
            if (57 == a) return na[b] = "A", na.join("");
            if (90 == a) na[b] = "0"; else return na[b] = String.fromCharCode(a + 1), na.join("");
        }
        na.unshift("0");
        return na.join("");
    }
    function Zb(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey;
    }
    function E(b) {
        var a = b.$$hashKey;
        r(arguments, function(a) {
            a !== b && r(a, function(a, c) {
                b[c] = a;
            });
        });
        Zb(b, a);
        return b;
    }
    function U(b) {
        return parseInt(b, 10);
    }
    function $b(b, a) {
        return E(new (E(function() {}, {
            prototype: b
        }))(), a);
    }
    function v() {}
    function ga(b) {
        return b;
    }
    function aa(b) {
        return function() {
            return b;
        };
    }
    function F(b) {
        return "undefined" === typeof b;
    }
    function D(b) {
        return "undefined" !== typeof b;
    }
    function T(b) {
        return null != b && "object" === typeof b;
    }
    function G(b) {
        return "string" === typeof b;
    }
    function jb(b) {
        return "number" === typeof b;
    }
    function va(b) {
        return "[object Date]" === Ba.call(b);
    }
    function N(b) {
        return "function" === typeof b;
    }
    function kb(b) {
        return "[object RegExp]" === Ba.call(b);
    }
    function Ja(b) {
        return b && b.document && b.location && b.alert && b.setInterval;
    }
    function Tc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
    }
    function Uc(b, a, c) {
        var d = [];
        r(b, function(b, f, g) {
            d.push(a.call(c, b, f, g));
        });
        return d;
    }
    function Ta(b, a) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0; c < b.length; c++) if (a === b[c]) return c;
        return -1;
    }
    function Ua(b, a) {
        var c = Ta(b, a);
        0 <= c && b.splice(c, 1);
        return a;
    }
    function Ka(b, a, c, d) {
        if (Ja(b) || b && b.$evalAsync && b.$watch) throw Va("cpws");
        if (a) {
            if (b === a) throw Va("cpi");
            c = c || [];
            d = d || [];
            if (T(b)) {
                var e = Ta(c, b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a);
            }
            if (L(b)) for (var f = a.length = 0; f < b.length; f++) e = Ka(b[f], null, c, d), 
            T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                L(a) ? a.length = 0 : r(a, function(b, c) {
                    delete a[c];
                });
                for (f in b) e = Ka(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e;
                Zb(a, g);
            }
        } else if (a = b) L(b) ? a = Ka(b, [], c, d) : va(b) ? a = new Date(b.getTime()) : kb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), 
        a.lastIndex = b.lastIndex) : T(b) && (a = Ka(b, {}, c, d));
        return a;
    }
    function ha(b, a) {
        if (L(b)) {
            a = a || [];
            for (var c = 0; c < b.length; c++) a[c] = b[c];
        } else if (T(b)) for (c in a = a || {}, b) !lb.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
        return a || b;
    }
    function Ca(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c) if (L(b)) {
            if (!L(a)) return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++) if (!Ca(b[d], a[d])) return !1;
                return !0;
            }
        } else {
            if (va(b)) return va(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() === a.getTime() : !1;
            if (kb(b) && kb(a)) return b.toString() == a.toString();
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ja(b) || Ja(a) || L(a)) return !1;
            c = {};
            for (d in b) if ("$" !== d.charAt(0) && !N(b[d])) {
                if (!Ca(b[d], a[d])) return !1;
                c[d] = !0;
            }
            for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !N(a[d])) return !1;
            return !0;
        }
        return !1;
    }
    function Bb(b, a) {
        var c = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !N(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(wa.call(arguments, 0))) : a.apply(b, c);
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b);
        };
    }
    function Vc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = u : Ja(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c;
    }
    function oa(b, a) {
        return "undefined" === typeof b ? u : JSON.stringify(b, Vc, a ? "  " : null);
    }
    function ac(b) {
        return G(b) ? JSON.parse(b) : b;
    }
    function Wa(b) {
        "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = x("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b;
    }
    function ia(b) {
        b = A(b).clone();
        try {
            b.empty();
        } catch (a) {}
        var c = A("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? x(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + x(b);
            });
        } catch (d) {
            return x(c);
        }
    }
    function bc(b) {
        try {
            return decodeURIComponent(b);
        } catch (a) {}
    }
    function cc(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function(b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = bc(c[0]), D(d) && (b = D(c[1]) ? bc(c[1]) : !0, 
            lb.call(a, d) ? L(a[d]) ? a[d].push(b) : a[d] = [ a[d], b ] : a[d] = b));
        });
        return a;
    }
    function Cb(b) {
        var a = [];
        r(b, function(b, d) {
            L(b) ? r(b, function(b) {
                a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)));
            }) : a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)));
        });
        return a.length ? a.join("&") : "";
    }
    function mb(b) {
        return Da(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function Da(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+");
    }
    function Wc(b, a) {
        function c(a) {
            a && d.push(a);
        }
        var d = [ b ], e, f, g = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        r(g, function(a) {
            g[a] = !0;
            c(X.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." + a + "\\:"), c), 
            r(b.querySelectorAll("[" + a + "]"), c));
        });
        r(d, function(a) {
            if (!e) {
                var b = h.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function(b) {
                    !e && g[b.name] && (e = a, f = b.value);
                });
            }
        });
        e && a(e, f ? [ f ] : []);
    }
    function dc(b, a) {
        var c = function() {
            b = A(b);
            if (b.injector()) {
                var c = b[0] === X ? "document" : ia(b);
                throw Va("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift([ "$provide", function(a) {
                a.value("$rootElement", b);
            } ]);
            a.unshift("ng");
            c = ec(a);
            c.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d, e) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a);
                });
            } ]);
            return c;
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (W && !d.test(W.name)) return c();
        W.name = W.name.replace(d, "");
        Xa.resumeBootstrap = function(b) {
            r(b, function(b) {
                a.push(b);
            });
            c();
        };
    }
    function nb(b, a) {
        a = a || "_";
        return b.replace(Xc, function(b, d) {
            return (d ? a : "") + b.toLowerCase();
        });
    }
    function Db(b, a, c) {
        if (!b) throw Va("areq", a || "?", c || "required");
        return b;
    }
    function Ya(b, a, c) {
        c && L(b) && (b = b[b.length - 1]);
        Db(N(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b;
    }
    function Ea(b, a) {
        if ("hasOwnProperty" === b) throw Va("badname", a);
    }
    function fc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && N(b) ? Bb(e, b) : b;
    }
    function Eb(b) {
        var a = b[0];
        b = b[b.length - 1];
        if (a === b) return A(a);
        var c = [ a ];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a);
        } while (a !== b);
        return A(c);
    }
    function Yc(b) {
        var a = z("$injector"), c = z("ng");
        b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || z;
        return b.module || (b.module = function() {
            var b = {};
            return function(e, f, g) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                f && b.hasOwnProperty(e) && (b[e] = null);
                return b[e] || (b[e] = function() {
                    function b(a, d, e) {
                        return function() {
                            c[e || "push"]([ a, d, arguments ]);
                            return n;
                        };
                    }
                    if (!f) throw a("nomod", e);
                    var c = [], d = [], l = b("$injector", "invoke"), n = {
                        _invokeQueue: c,
                        _runBlocks: d,
                        requires: f,
                        name: e,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: b("$provide", "value"),
                        constant: b("$provide", "constant", "unshift"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        config: l,
                        run: function(a) {
                            d.push(a);
                            return this;
                        }
                    };
                    g && l(g);
                    return n;
                }());
            };
        }());
    }
    function Zc(b) {
        E(b, {
            bootstrap: dc,
            copy: Ka,
            extend: E,
            equals: Ca,
            element: A,
            forEach: r,
            injector: ec,
            noop: v,
            bind: Bb,
            toJson: oa,
            fromJson: ac,
            identity: ga,
            isUndefined: F,
            isDefined: D,
            isString: G,
            isFunction: N,
            isObject: T,
            isNumber: jb,
            isElement: Tc,
            isArray: L,
            version: $c,
            isDate: va,
            lowercase: x,
            uppercase: La,
            callbacks: {
                counter: 0
            },
            $$minErr: z,
            $$csp: Za
        });
        $a = Yc(W);
        try {
            $a("ngLocale");
        } catch (a) {
            $a("ngLocale", []).provider("$locale", ad);
        }
        $a("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: bd
            });
            a.provider("$compile", gc).directive({
                a: cd,
                input: hc,
                textarea: hc,
                form: dd,
                script: ed,
                select: fd,
                style: gd,
                option: hd,
                ngBind: id,
                ngBindHtml: jd,
                ngBindTemplate: kd,
                ngClass: ld,
                ngClassEven: md,
                ngClassOdd: nd,
                ngCloak: od,
                ngController: pd,
                ngForm: qd,
                ngHide: rd,
                ngIf: sd,
                ngInclude: td,
                ngInit: ud,
                ngNonBindable: vd,
                ngPluralize: wd,
                ngRepeat: xd,
                ngShow: yd,
                ngStyle: zd,
                ngSwitch: Ad,
                ngSwitchWhen: Bd,
                ngSwitchDefault: Cd,
                ngOptions: Dd,
                ngTransclude: Ed,
                ngModel: Fd,
                ngList: Gd,
                ngChange: Hd,
                required: ic,
                ngRequired: ic,
                ngValue: Id
            }).directive({
                ngInclude: Jd
            }).directive(Fb).directive(jc);
            a.provider({
                $anchorScroll: Kd,
                $animate: Ld,
                $browser: Md,
                $cacheFactory: Nd,
                $controller: Od,
                $document: Pd,
                $exceptionHandler: Qd,
                $filter: kc,
                $interpolate: Rd,
                $interval: Sd,
                $http: Td,
                $httpBackend: Ud,
                $location: Vd,
                $log: Wd,
                $parse: Xd,
                $rootScope: Yd,
                $q: Zd,
                $sce: $d,
                $sceDelegate: ae,
                $sniffer: be,
                $templateCache: ce,
                $timeout: de,
                $window: ee,
                $$rAF: fe,
                $$asyncCallback: ge
            });
        } ]);
    }
    function ab(b) {
        return b.replace(he, function(a, b, d, e) {
            return e ? d.toUpperCase() : d;
        }).replace(ie, "Moz$1");
    }
    function Gb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [ this.filter(b) ] : [ this ], k = a, m, l, n, q, p, s;
            if (!d || null != b) for (;e.length; ) for (m = e.shift(), l = 0, n = m.length; l < n; l++) for (q = A(m[l]), 
            k ? q.triggerHandler("$destroy") : k = !k, p = 0, q = (s = q.children()).length; p < q; p++) e.push(Fa(s[p]));
            return f.apply(this, arguments);
        }
        var f = Fa.fn[b], f = f.$original || f;
        e.$original = f;
        Fa.fn[b] = e;
    }
    function S(b) {
        if (b instanceof S) return b;
        G(b) && (b = $(b));
        if (!(this instanceof S)) {
            if (G(b) && "<" != b.charAt(0)) throw Hb("nosel");
            return new S(b);
        }
        if (G(b)) {
            var a = b;
            b = X;
            var c;
            if (c = je.exec(a)) b = [ b.createElement(c[1]) ]; else {
                var d = b, e;
                b = d.createDocumentFragment();
                c = [];
                if (Ib.test(a)) {
                    d = b.appendChild(d.createElement("div"));
                    e = (ke.exec(a) || [ "", "" ])[1].toLowerCase();
                    e = da[e] || da._default;
                    d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(le, "<$1></$2>") + e[2];
                    d.removeChild(d.firstChild);
                    for (a = e[0]; a--; ) d = d.lastChild;
                    a = 0;
                    for (e = d.childNodes.length; a < e; ++a) c.push(d.childNodes[a]);
                    d = b.firstChild;
                    d.textContent = "";
                } else c.push(d.createTextNode(a));
                b.textContent = "";
                b.innerHTML = "";
                b = c;
            }
            Jb(this, b);
            A(X.createDocumentFragment()).append(this);
        } else Jb(this, b);
    }
    function Kb(b) {
        return b.cloneNode(!0);
    }
    function Ma(b) {
        Lb(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++) Ma(b[a]);
    }
    function lc(b, a, c, d) {
        if (D(d)) throw Hb("offargs");
        var e = pa(b, "events");
        pa(b, "handle") && (F(a) ? r(e, function(a, c) {
            bb(b, c, a);
            delete e[c];
        }) : r(a.split(" "), function(a) {
            F(c) ? (bb(b, a, e[a]), delete e[a]) : Ua(e[a] || [], c);
        }));
    }
    function Lb(b, a) {
        var c = b.ng339, d = cb[c];
        d && (a ? delete cb[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), 
        lc(b)), delete cb[c], b.ng339 = u));
    }
    function pa(b, a, c) {
        var d = b.ng339, d = cb[d || -1];
        if (D(c)) d || (b.ng339 = d = ++me, d = cb[d] = {}), d[a] = c; else return d && d[a];
    }
    function Mb(b, a, c) {
        var d = pa(b, "data"), e = D(c), f = !e && D(a), g = f && !T(a);
        d || g || pa(b, "data", d = {});
        if (e) d[a] = c; else if (f) {
            if (g) return d && d[a];
            E(d, a);
        } else return d;
    }
    function Nb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
    }
    function ob(b, a) {
        a && b.setAttribute && r(a.split(" "), function(a) {
            b.setAttribute("class", $((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + $(a) + " ", " ")));
        });
    }
    function pb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function(a) {
                a = $(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            });
            b.setAttribute("class", $(c));
        }
    }
    function Jb(b, a) {
        if (a) {
            a = a.nodeName || !D(a.length) || Ja(a) ? [ a ] : a;
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        }
    }
    function mc(b, a) {
        return qb(b, "$" + (a || "ngController") + "Controller");
    }
    function qb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = L(a) ? a : [ a ]; b; ) {
            for (var d = 0, e = a.length; d < e; d++) if ((c = A.data(b, a[d])) !== u) return c;
            b = b.parentNode || 11 === b.nodeType && b.host;
        }
    }
    function nc(b) {
        for (var a = 0, c = b.childNodes; a < c.length; a++) Ma(c[a]);
        for (;b.firstChild; ) b.removeChild(b.firstChild);
    }
    function oc(b, a) {
        var c = rb[a.toLowerCase()];
        return c && pc[b.nodeName] && c;
    }
    function ne(b, a) {
        var c = function(c, e) {
            c.preventDefault || (c.preventDefault = function() {
                c.returnValue = !1;
            });
            c.stopPropagation || (c.stopPropagation = function() {
                c.cancelBubble = !0;
            });
            c.target || (c.target = c.srcElement || X);
            if (F(c.defaultPrevented)) {
                var f = c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    f.call(c);
                };
                c.defaultPrevented = !1;
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented || !1 === c.returnValue;
            };
            var g = ha(a[e || c.type] || []);
            r(g, function(a) {
                a.call(b, c);
            });
            8 >= R ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, 
            delete c.stopPropagation, delete c.isDefaultPrevented);
        };
        c.elem = b;
        return c;
    }
    function Na(b, a) {
        var c = typeof b, d;
        "function" == c || "object" == c && null !== b ? "function" == typeof (d = b.$$hashKey) ? d = b.$$hashKey() : d === u && (d = b.$$hashKey = (a || ib)()) : d = b;
        return c + ":" + d;
    }
    function db(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        r(b, this.put, this);
    }
    function qc(b) {
        var a, c;
        "function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(oe, ""), 
        c = c.match(pe), r(c[1].split(qe), function(b) {
            b.replace(re, function(b, c, d) {
                a.push(d);
            });
        })), b.$inject = a) : L(b) ? (c = b.length - 1, Ya(b[c], "fn"), a = b.slice(0, c)) : Ya(b, "fn", !0);
        return a;
    }
    function ec(b) {
        function a(a) {
            return function(b, c) {
                if (T(b)) r(b, Yb(a)); else return a(b, c);
            };
        }
        function c(a, b) {
            Ea(a, "service");
            if (N(b) || L(b)) b = n.instantiate(b);
            if (!b.$get) throw eb("pget", a);
            return l[a + h] = b;
        }
        function d(a, b) {
            return c(a, {
                $get: b
            });
        }
        function e(a) {
            var b = [], c, d, f, h;
            r(a, function(a) {
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        if (G(a)) for (c = $a(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, 
                        f = 0, h = d.length; f < h; f++) {
                            var g = d[f], k = n.get(g[0]);
                            k[g[1]].apply(k, g[2]);
                        } else N(a) ? b.push(n.invoke(a)) : L(a) ? b.push(n.invoke(a)) : Ya(a, "module");
                    } catch (p) {
                        throw L(a) && (a = a[a.length - 1]), p.message && (p.stack && -1 == p.stack.indexOf(p.message)) && (p = p.message + "\n" + p.stack), 
                        eb("modulerr", a, p.stack || p.message || p);
                    }
                }
            });
            return b;
        }
        function f(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] === g) throw eb("cdep", d + " <- " + k.join(" <- "));
                    return a[d];
                }
                try {
                    return k.unshift(d), a[d] = g, a[d] = b(d);
                } catch (e) {
                    throw a[d] === g && delete a[d], e;
                } finally {
                    k.shift();
                }
            }
            function d(a, b, e) {
                var f = [], h = qc(a), g, k, p;
                k = 0;
                for (g = h.length; k < g; k++) {
                    p = h[k];
                    if ("string" !== typeof p) throw eb("itkn", p);
                    f.push(e && e.hasOwnProperty(p) ? e[p] : c(p));
                }
                L(a) && (a = a[g]);
                return a.apply(b, f);
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {}, e;
                    c.prototype = (L(a) ? a[a.length - 1] : a).prototype;
                    c = new c();
                    e = d(a, c, b);
                    return T(e) || N(e) ? e : c;
                },
                get: c,
                annotate: qc,
                has: function(b) {
                    return l.hasOwnProperty(b + h) || a.hasOwnProperty(b);
                }
            };
        }
        var g = {}, h = "Provider", k = [], m = new db([], !0), l = {
            $provide: {
                provider: a(c),
                factory: a(d),
                service: a(function(a, b) {
                    return d(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: a(function(a, b) {
                    return d(a, aa(b));
                }),
                constant: a(function(a, b) {
                    Ea(a, "constant");
                    l[a] = b;
                    q[a] = b;
                }),
                decorator: function(a, b) {
                    var c = n.get(a + h), d = c.$get;
                    c.$get = function() {
                        var a = p.invoke(d, c);
                        return p.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, n = l.$injector = f(l, function() {
            throw eb("unpr", k.join(" <- "));
        }), q = {}, p = q.$injector = f(q, function(a) {
            a = n.get(a + h);
            return p.invoke(a.$get, a);
        });
        r(e(b), function(a) {
            p.invoke(a || v);
        });
        return p;
    }
    function Kd() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1;
        };
        this.$get = [ "$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                r(a, function(a) {
                    b || "a" !== x(a.nodeName) || (b = a);
                });
                return b;
            }
            function f() {
                var b = c.hash(), d;
                b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
            }
            var g = a.document;
            b && d.$watch(function() {
                return c.hash();
            }, function() {
                d.$evalAsync(f);
            });
            return f;
        } ];
    }
    function ge() {
        this.$get = [ "$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a);
            } : function(b) {
                return a(b, 0, !1);
            };
        } ];
    }
    function se(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, wa.call(arguments, 1));
            } finally {
                if (s--, 0 === s) for (;J.length; ) try {
                    J.pop()();
                } catch (b) {
                    c.error(b);
                }
            }
        }
        function f(a, b) {
            (function ea() {
                r(w, function(a) {
                    a();
                });
                t = b(ea, a);
            })();
        }
        function g() {
            y != h.url() && (y = h.url(), r(ba, function(a) {
                a(h.url());
            }));
        }
        var h = this, k = a[0], m = b.location, l = b.history, n = b.setTimeout, q = b.clearTimeout, p = {};
        h.isMock = !1;
        var s = 0, J = [];
        h.$$completeOutstandingRequest = e;
        h.$$incOutstandingRequestCount = function() {
            s++;
        };
        h.notifyWhenNoOutstandingRequests = function(a) {
            r(w, function(a) {
                a();
            });
            0 === s ? a() : J.push(a);
        };
        var w = [], t;
        h.addPollFn = function(a) {
            F(t) && f(100, n);
            w.push(a);
            return a;
        };
        var y = m.href, K = a.find("base"), B = null;
        h.url = function(a, c) {
            m !== b.location && (m = b.location);
            l !== b.history && (l = b.history);
            if (a) {
                if (y != a) {
                    var e = y && Ga(y) === Ga(a);
                    y = a;
                    !e && d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), K.attr("href", K.attr("href"))) : (e || (B = a), 
                    c ? m.replace(a) : m.href = a);
                    return h;
                }
            } else return B || m.href.replace(/%27/g, "'");
        };
        var ba = [], O = !1;
        h.onUrlChange = function(a) {
            if (!O) {
                if (d.history) A(b).on("popstate", g);
                if (d.hashchange) A(b).on("hashchange", g); else h.addPollFn(g);
                O = !0;
            }
            ba.push(a);
            return a;
        };
        h.$$checkUrlChange = g;
        h.baseHref = function() {
            var a = K.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var M = {}, ca = "", P = h.baseHref();
        h.cookies = function(a, b) {
            var d, e, f, h;
            if (a) b === u ? k.cookie = escape(a) + "=;path=" + P + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : G(b) && (d = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + P).length + 1, 
            4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (k.cookie !== ca) for (ca = k.cookie, d = ca.split("; "), M = {}, f = 0; f < d.length; f++) e = d[f], 
                h = e.indexOf("="), 0 < h && (a = unescape(e.substring(0, h)), M[a] === u && (M[a] = unescape(e.substring(h + 1))));
                return M;
            }
        };
        h.defer = function(a, b) {
            var c;
            s++;
            c = n(function() {
                delete p[c];
                e(a);
            }, b || 0);
            p[c] = !0;
            return c;
        };
        h.defer.cancel = function(a) {
            return p[a] ? (delete p[a], q(a), e(v), !0) : !1;
        };
    }
    function Md() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new se(b, d, a, c);
        } ];
    }
    function Nd() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (b in a) throw z("$cacheFactory")("iid", b);
                var g = 0, h = E({}, d, {
                    id: b
                }), k = {}, m = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (m < Number.MAX_VALUE) {
                            var c = l[a] || (l[a] = {
                                key: a
                            });
                            e(c);
                        }
                        if (!F(b)) return a in k || g++, k[a] = b, g > m && this.remove(q.key), b;
                    },
                    get: function(a) {
                        if (m < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            e(b);
                        }
                        return k[a];
                    },
                    remove: function(a) {
                        if (m < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            b == n && (n = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete l[a];
                        }
                        delete k[a];
                        g--;
                    },
                    removeAll: function() {
                        k = {};
                        g = 0;
                        l = {};
                        n = q = null;
                    },
                    destroy: function() {
                        l = h = k = null;
                        delete a[b];
                    },
                    info: function() {
                        return E({}, h, {
                            size: g
                        });
                    }
                };
            }
            var a = {};
            b.info = function() {
                var b = {};
                r(a, function(a, e) {
                    b[e] = a.info();
                });
                return b;
            };
            b.get = function(b) {
                return a[b];
            };
            return b;
        };
    }
    function ce() {
        this.$get = [ "$cacheFactory", function(b) {
            return b("templates");
        } ];
    }
    function gc(b, a) {
        var c = {}, d = "Directive", e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, g = /^(on[a-z]+|formaction)$/;
        this.directive = function k(a, e) {
            Ea(a, "directive");
            G(a) ? (Db(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [ "$injector", "$exceptionHandler", function(b, d) {
                var e = [];
                r(c[a], function(c, f) {
                    try {
                        var g = b.invoke(c);
                        N(g) ? g = {
                            compile: aa(g)
                        } : !g.compile && g.link && (g.compile = aa(g.link));
                        g.priority = g.priority || 0;
                        g.index = f;
                        g.name = g.name || a;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g);
                    } catch (k) {
                        d(k);
                    }
                });
                return e;
            } ])), c[a].push(e)) : r(a, Yb(k));
            return this;
        };
        this.aHrefSanitizationWhitelist = function(b) {
            return D(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return D(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, l, n, q, p, s, J, w, t, y, K) {
            function B(a, b, c, d, e) {
                a instanceof A || (a = A(a));
                r(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0]);
                });
                var f = O(a, b, a, c, d, e);
                ba(a, "ng-scope");
                return function(b, c, d, e) {
                    Db(b, "scope");
                    var g = c ? Oa.clone.call(a) : a;
                    r(d, function(a, b) {
                        g.data("$" + b + "Controller", a);
                    });
                    d = 0;
                    for (var k = g.length; d < k; d++) {
                        var p = g[d].nodeType;
                        1 !== p && 9 !== p || g.eq(d).data("$scope", b);
                    }
                    c && c(g, b);
                    f && f(b, g, g, e);
                    return g;
                };
            }
            function ba(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function O(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, p, l, m, q, n, w;
                    f = c.length;
                    var s = Array(f);
                    for (m = 0; m < f; m++) s[m] = c[m];
                    n = m = 0;
                    for (q = k.length; m < q; n++) p = s[n], c = k[m++], f = k[m++], c ? (c.scope ? (l = a.$new(), 
                    A.data(p, "$scope", l)) : l = a, w = c.transcludeOnThisElement ? M(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? M(a, b) : null, 
                    c(f, l, p, d, w)) : f && f(a, p.childNodes, u, e);
                }
                for (var k = [], p, l, m, q, n = 0; n < a.length; n++) p = new Ob(), l = ca(a[n], [], p, 0 === n ? d : u, e), 
                (f = l.length ? I(l, a[n], p, b, c, null, [], [], f) : null) && f.scope && ba(p.$$element, "ng-scope"), 
                p = f && f.terminal || !(m = a[n].childNodes) || !m.length ? null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), 
                k.push(f, p), q = q || f || p, f = null;
                return q ? g : null;
            }
            function M(a, b, c) {
                return function(d, e, f) {
                    var g = !1;
                    d || (d = a.$new(), g = d.$$transcluded = !0);
                    e = b(d, e, f, c);
                    if (g) e.on("$destroy", function() {
                        d.$destroy();
                    });
                    return e;
                };
            }
            function ca(a, b, c, d, g) {
                var k = c.$attr, p;
                switch (a.nodeType) {
                  case 1:
                    ea(b, qa(Pa(a).toLowerCase()), "E", d, g);
                    for (var l, m, q, n = a.attributes, w = 0, s = n && n.length; w < s; w++) {
                        var t = !1, J = !1;
                        l = n[w];
                        if (!R || 8 <= R || l.specified) {
                            p = l.name;
                            m = $(l.value);
                            l = qa(p);
                            if (q = U.test(l)) p = nb(l.substr(6), "-");
                            var y = l.replace(/(Start|End)$/, "");
                            l === y + "Start" && (t = p, J = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6));
                            l = qa(p.toLowerCase());
                            k[l] = p;
                            if (q || !c.hasOwnProperty(l)) c[l] = m, oc(a, l) && (c[l] = !0);
                            S(a, b, m, l);
                            ea(b, l, "A", d, g, t, J);
                        }
                    }
                    a = a.className;
                    if (G(a) && "" !== a) for (;p = f.exec(a); ) l = qa(p[2]), ea(b, l, "C", d, g) && (c[l] = $(p[3])), 
                    a = a.substr(p.index + p[0].length);
                    break;

                  case 3:
                    x(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        if (p = e.exec(a.nodeValue)) l = qa(p[1]), ea(b, l, "M", d, g) && (c[l] = $(p[2]));
                    } catch (B) {}
                }
                b.sort(F);
                return b;
            }
            function P(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ja("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling;
                    } while (0 < e);
                } else d.push(a);
                return A(d);
            }
            function C(a, b, c) {
                return function(d, e, f, g, k) {
                    e = P(e[0], b, c);
                    return a(d, e, f, g, k);
                };
            }
            function I(a, c, d, e, f, g, k, q, n) {
                function w(a, b, c, d) {
                    if (a) {
                        c && (a = C(a, c, d));
                        a.require = H.require;
                        a.directiveName = z;
                        if (K === H || H.$$isolateScope) a = rc(a, {
                            isolateScope: !0
                        });
                        k.push(a);
                    }
                    if (b) {
                        c && (b = C(b, c, d));
                        b.require = H.require;
                        b.directiveName = z;
                        if (K === H || H.$$isolateScope) b = rc(b, {
                            isolateScope: !0
                        });
                        q.push(b);
                    }
                }
                function t(a, b, c, d) {
                    var e, f = "data", g = !1;
                    if (G(b)) {
                        for (;"^" == (e = b.charAt(0)) || "?" == e; ) b = b.substr(1), "^" == e && (f = "inheritedData"), 
                        g = g || "?" == e;
                        e = null;
                        d && "data" === f && (e = d[b]);
                        e = e || c[f]("$" + b + "Controller");
                        if (!e && !g) throw ja("ctreq", b, a);
                    } else L(b) && (e = [], r(b, function(b) {
                        e.push(t(a, b, c, d));
                    }));
                    return e;
                }
                function J(a, e, f, g, n) {
                    function w(a, b) {
                        var c;
                        2 > arguments.length && (b = a, a = u);
                        Ia && (c = ca);
                        return n(a, b, c);
                    }
                    var y, Q, B, M, C, P, ca = {}, ra;
                    y = c === f ? d : ha(d, new Ob(A(f), d.$attr));
                    Q = y.$$element;
                    if (K) {
                        var ue = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        P = e.$new(!0);
                        !I || I !== K && I !== K.$$originalDirective ? Q.data("$isolateScopeNoTemplate", P) : Q.data("$isolateScope", P);
                        ba(Q, "ng-isolate-scope");
                        r(K.scope, function(a, c) {
                            var d = a.match(ue) || [], f = d[3] || c, g = "?" == d[2], d = d[1], k, l, n, q;
                            P.$$isolateBindings[c] = d + f;
                            switch (d) {
                              case "@":
                                y.$observe(f, function(a) {
                                    P[c] = a;
                                });
                                y.$$observers[f].$$scope = e;
                                y[f] && (P[c] = b(y[f])(e));
                                break;

                              case "=":
                                if (g && !y[f]) break;
                                l = p(y[f]);
                                q = l.literal ? Ca : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                };
                                n = l.assign || function() {
                                    k = P[c] = l(e);
                                    throw ja("nonassign", y[f], K.name);
                                };
                                k = P[c] = l(e);
                                P.$watch(function() {
                                    var a = l(e);
                                    q(a, P[c]) || (q(a, k) ? n(e, a = P[c]) : P[c] = a);
                                    return k = a;
                                }, null, l.literal);
                                break;

                              case "&":
                                l = p(y[f]);
                                P[c] = function(a) {
                                    return l(e, a);
                                };
                                break;

                              default:
                                throw ja("iscp", K.name, c, a);
                            }
                        });
                    }
                    ra = n && w;
                    O && r(O, function(a) {
                        var b = {
                            $scope: a === K || a.$$isolateScope ? P : e,
                            $element: Q,
                            $attrs: y,
                            $transclude: ra
                        }, c;
                        C = a.controller;
                        "@" == C && (C = y[a.name]);
                        c = s(C, b);
                        ca[a.name] = c;
                        Ia || Q.data("$" + a.name + "Controller", c);
                        a.controllerAs && (b.$scope[a.controllerAs] = c);
                    });
                    g = 0;
                    for (B = k.length; g < B; g++) try {
                        M = k[g], M(M.isolateScope ? P : e, Q, y, M.require && t(M.directiveName, M.require, Q, ca), ra);
                    } catch (H) {
                        l(H, ia(Q));
                    }
                    g = e;
                    K && (K.template || null === K.templateUrl) && (g = P);
                    a && a(g, f.childNodes, u, n);
                    for (g = q.length - 1; 0 <= g; g--) try {
                        M = q[g], M(M.isolateScope ? P : e, Q, y, M.require && t(M.directiveName, M.require, Q, ca), ra);
                    } catch (D) {
                        l(D, ia(Q));
                    }
                }
                n = n || {};
                for (var y = -Number.MAX_VALUE, M, O = n.controllerDirectives, K = n.newIsolateScopeDirective, I = n.templateDirective, ea = n.nonTlbTranscludeDirective, F = !1, E = !1, Ia = n.hasElementTranscludeDirective, x = d.$$element = A(c), H, z, V, S = e, R, Ha = 0, sa = a.length; Ha < sa; Ha++) {
                    H = a[Ha];
                    var U = H.$$start, Y = H.$$end;
                    U && (x = P(c, U, Y));
                    V = u;
                    if (y > H.priority) break;
                    if (V = H.scope) M = M || H, H.templateUrl || (fb("new/isolated scope", K, H, x), 
                    T(V) && (K = H));
                    z = H.name;
                    !H.templateUrl && H.controller && (V = H.controller, O = O || {}, fb("'" + z + "' controller", O[z], H, x), 
                    O[z] = H);
                    if (V = H.transclude) F = !0, H.$$tlb || (fb("transclusion", ea, H, x), ea = H), 
                    "element" == V ? (Ia = !0, y = H.priority, V = x, x = d.$$element = A(X.createComment(" " + z + ": " + d[z] + " ")), 
                    c = x[0], ra(f, wa.call(V, 0), c), S = B(V, e, y, g && g.name, {
                        nonTlbTranscludeDirective: ea
                    })) : (V = A(Kb(c)).contents(), x.empty(), S = B(V, e));
                    if (H.template) if (E = !0, fb("template", I, H, x), I = H, V = N(H.template) ? H.template(x, d) : H.template, 
                    V = W(V), H.replace) {
                        g = H;
                        V = Ib.test(V) ? A($(V)) : [];
                        c = V[0];
                        if (1 != V.length || 1 !== c.nodeType) throw ja("tplrt", z, "");
                        ra(f, x, c);
                        sa = {
                            $attr: {}
                        };
                        V = ca(c, [], sa);
                        var Z = a.splice(Ha + 1, a.length - (Ha + 1));
                        K && D(V);
                        a = a.concat(V).concat(Z);
                        v(d, sa);
                        sa = a.length;
                    } else x.html(V);
                    if (H.templateUrl) E = !0, fb("template", I, H, x), I = H, H.replace && (g = H), 
                    J = te(a.splice(Ha, a.length - Ha), x, d, f, F && S, k, q, {
                        controllerDirectives: O,
                        newIsolateScopeDirective: K,
                        templateDirective: I,
                        nonTlbTranscludeDirective: ea
                    }), sa = a.length; else if (H.compile) try {
                        R = H.compile(x, d, S), N(R) ? w(null, R, U, Y) : R && w(R.pre, R.post, U, Y);
                    } catch (ve) {
                        l(ve, ia(x));
                    }
                    H.terminal && (J.terminal = !0, y = Math.max(y, H.priority));
                }
                J.scope = M && !0 === M.scope;
                J.transcludeOnThisElement = F;
                J.templateOnThisElement = E;
                J.transclude = S;
                n.hasElementTranscludeDirective = Ia;
                return J;
            }
            function D(a) {
                for (var b = 0, c = a.length; b < c; b++) a[b] = $b(a[b], {
                    $$isolateScope: !0
                });
            }
            function ea(b, e, f, g, p, m, n) {
                if (e === p) return null;
                p = null;
                if (c.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + d);
                    for (var w = 0, s = e.length; w < s; w++) try {
                        q = e[w], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (m && (q = $b(q, {
                            $$start: m,
                            $$end: n
                        })), b.push(q), p = q);
                    } catch (y) {
                        l(y);
                    }
                }
                return p;
            }
            function v(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                r(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                });
                r(b, function(b, f) {
                    "class" == f ? (ba(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function te(a, b, c, d, e, f, g, k) {
                var p = [], l, m, w = b[0], s = a.shift(), y = E({}, s, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: s
                }), J = N(s.templateUrl) ? s.templateUrl(b, c) : s.templateUrl;
                b.empty();
                n.get(t.getTrustedResourceUrl(J), {
                    cache: q
                }).success(function(q) {
                    var n, t;
                    q = W(q);
                    if (s.replace) {
                        q = Ib.test(q) ? A($(q)) : [];
                        n = q[0];
                        if (1 != q.length || 1 !== n.nodeType) throw ja("tplrt", s.name, J);
                        q = {
                            $attr: {}
                        };
                        ra(d, b, n);
                        var B = ca(n, [], q);
                        T(s.scope) && D(B);
                        a = B.concat(a);
                        v(c, q);
                    } else n = w, b.html(q);
                    a.unshift(y);
                    l = I(a, n, c, e, b, s, f, g, k);
                    r(d, function(a, c) {
                        a == n && (d[c] = b[0]);
                    });
                    for (m = O(b[0].childNodes, e); p.length; ) {
                        q = p.shift();
                        t = p.shift();
                        var K = p.shift(), C = p.shift(), B = b[0];
                        if (t !== w) {
                            var P = t.className;
                            k.hasElementTranscludeDirective && s.replace || (B = Kb(n));
                            ra(K, A(t), B);
                            ba(A(B), P);
                        }
                        t = l.transcludeOnThisElement ? M(q, l.transclude, C) : C;
                        l(m, q, B, d, t);
                    }
                    p = null;
                }).error(function(a, b, c, d) {
                    throw ja("tpload", d.url);
                });
                return function(a, b, c, d, e) {
                    a = e;
                    p ? (p.push(b), p.push(c), p.push(d), p.push(a)) : (l.transcludeOnThisElement && (a = M(b, l.transclude, e)), 
                    l(m, b, c, d, a));
                };
            }
            function F(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function fb(a, b, c, d) {
                if (b) throw ja("multidir", b.name, c.name, a, ia(d));
            }
            function x(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent().length;
                        b && ba(a.parent(), "ng-binding");
                        return function(a, c) {
                            var e = c.parent(), f = e.data("$binding") || [];
                            f.push(d);
                            e.data("$binding", f);
                            b || ba(e, "ng-binding");
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function z(a, b) {
                if ("srcdoc" == b) return t.HTML;
                var c = Pa(a);
                if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b)) return t.RESOURCE_URL;
            }
            function S(a, c, d, e) {
                var f = b(d, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === Pa(a)) throw ja("selmulti", ia(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(c, d, k) {
                                    d = k.$$observers || (k.$$observers = {});
                                    if (g.test(e)) throw ja("nodomevents");
                                    if (f = b(k[e], !0, z(a, e))) k[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || c).$watch(f, function(a, b) {
                                        "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
                                    });
                                }
                            };
                        }
                    });
                }
            }
            function ra(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, k;
                if (a) for (g = 0, k = a.length; g < k; g++) if (a[g] == d) {
                    a[g++] = c;
                    k = g + e - 1;
                    for (var p = a.length; g < p; g++, k++) k < p ? a[g] = a[k] : delete a[g];
                    a.length -= e - 1;
                    break;
                }
                f && f.replaceChild(c, d);
                a = X.createDocumentFragment();
                a.appendChild(d);
                c[A.expando] = d[A.expando];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1;
            }
            function rc(a, b) {
                return E(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            var Ob = function(a, b) {
                this.$$element = a;
                this.$attr = b || {};
            };
            Ob.prototype = {
                $normalize: qa,
                $addClass: function(a) {
                    a && 0 < a.length && y.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && y.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = sc(a, b), d = sc(b, a);
                    0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d);
                },
                $set: function(a, b, c, d) {
                    var e = oc(this.$$element[0], a);
                    e && (this.$$element.prop(a, b), d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = nb(a, "-"));
                    e = Pa(this.$$element);
                    if ("A" === e && "href" === a || "IMG" === e && "src" === a) this[a] = b = K(b, "src" === a);
                    !1 !== c && (null === b || b === u ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    (c = this.$$observers) && r(c[a], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            l(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    e.push(b);
                    J.$evalAsync(function() {
                        e.$$inter || b(c[a]);
                    });
                    return b;
                }
            };
            var sa = b.startSymbol(), Ia = b.endSymbol(), W = "{{" == sa || "}}" == Ia ? ga : function(a) {
                return a.replace(/\{\{/g, sa).replace(/}}/g, Ia);
            }, U = /^ngAttr[A-Z]/;
            return B;
        } ];
    }
    function qa(b) {
        return ab(b.replace(we, ""));
    }
    function sc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a: for (;f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g;
        }
        return c;
    }
    function Od() {
        var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, d) {
            Ea(a, "controller");
            T(a) ? E(b, a) : b[a] = d;
        };
        this.$get = [ "$injector", "$window", function(c, d) {
            return function(e, f) {
                var g, h, k;
                G(e) && (g = e.match(a), h = g[1], k = g[3], e = b.hasOwnProperty(h) ? b[h] : fc(f.$scope, h, !0) || fc(d, h, !0), 
                Ya(e, h, !0));
                g = c.instantiate(e, f);
                if (k) {
                    if (!f || "object" !== typeof f.$scope) throw z("$controller")("noscp", h || e.name, k);
                    f.$scope[k] = g;
                }
                return g;
            };
        } ];
    }
    function Pd() {
        this.$get = [ "$window", function(b) {
            return A(b.document);
        } ];
    }
    function Qd() {
        this.$get = [ "$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments);
            };
        } ];
    }
    function tc(b) {
        var a = {}, c, d, e;
        if (!b) return a;
        r(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = x($(b.substr(0, e)));
            d = $(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d);
        });
        return a;
    }
    function uc(b) {
        var a = T(b) ? b : u;
        return function(c) {
            a || (a = tc(b));
            return c ? a[x(c)] || null : a;
        };
    }
    function vc(b, a, c) {
        if (N(c)) return c(b, a);
        r(c, function(c) {
            b = c(b, a);
        });
        return b;
    }
    function Td() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {
            "Content-Type": "application/json;charset=utf-8"
        }, e = this.defaults = {
            transformResponse: [ function(d) {
                G(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = ac(d)));
                return d;
            } ],
            transformRequest: [ function(a) {
                return T(a) && "[object File]" !== Ba.call(a) && "[object Blob]" !== Ba.call(a) ? oa(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ha(d),
                put: ha(d),
                patch: ha(d)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, f = this.interceptors = [], g = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, d, n, q) {
            function p(a) {
                function b(a) {
                    var d = E({}, a, {
                        data: vc(a.data, a.headers, c.transformResponse)
                    });
                    return 200 <= a.status && 300 > a.status ? d : n.reject(d);
                }
                var c = {
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, d = function(a) {
                    var b = e.headers, c = E({}, a.headers), d, f, b = E({}, b.common, b[x(a.method)]);
                    a: for (d in b) {
                        a = x(d);
                        for (f in c) if (x(f) === a) continue a;
                        c[d] = b[d];
                    }
                    (function(a) {
                        var b;
                        r(a, function(c, d) {
                            N(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                        });
                    })(c);
                    return c;
                }(a);
                E(c, a);
                c.headers = d;
                c.method = La(c.method);
                var f = [ function(a) {
                    d = a.headers;
                    var c = vc(a.data, uc(d), a.transformRequest);
                    F(c) && r(d, function(a, b) {
                        "content-type" === x(b) && delete d[b];
                    });
                    F(a.withCredentials) && !F(e.withCredentials) && (a.withCredentials = e.withCredentials);
                    return s(a, c, d).then(b, b);
                }, u ], g = n.when(c);
                for (r(t, function(a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError);
                }); f.length; ) {
                    a = f.shift();
                    var h = f.shift(), g = g.then(a, h);
                }
                g.success = function(a) {
                    g.then(function(b) {
                        a(b.data, b.status, b.headers, c);
                    });
                    return g;
                };
                g.error = function(a) {
                    g.then(null, function(b) {
                        a(b.data, b.status, b.headers, c);
                    });
                    return g;
                };
                return g;
            }
            function s(c, f, g) {
                function m(a, b, c, e) {
                    C && (200 <= a && 300 > a ? C.put(A, [ a, b, tc(c), e ]) : C.remove(A));
                    q(b, a, c, e);
                    d.$$phase || d.$apply();
                }
                function q(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? t.resolve : t.reject)({
                        data: a,
                        status: b,
                        headers: uc(d),
                        config: c,
                        statusText: e
                    });
                }
                function s() {
                    var a = Ta(p.pendingRequests, c);
                    -1 !== a && p.pendingRequests.splice(a, 1);
                }
                var t = n.defer(), r = t.promise, C, I, A = J(c.url, c.params);
                p.pendingRequests.push(c);
                r.then(s, s);
                !c.cache && !e.cache || (!1 === c.cache || "GET" !== c.method && "JSONP" !== c.method) || (C = T(c.cache) ? c.cache : T(e.cache) ? e.cache : w);
                if (C) if (I = C.get(A), D(I)) {
                    if (I && N(I.then)) return I.then(s, s), I;
                    L(I) ? q(I[1], I[0], ha(I[2]), I[3]) : q(I, 200, {}, "OK");
                } else C.put(A, r);
                F(I) && ((I = Pb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : u) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = I), 
                a(c.method, A, f, m, g, c.timeout, c.withCredentials, c.responseType));
                return r;
            }
            function J(a, b) {
                if (!b) return a;
                var c = [];
                Sc(b, function(a, b) {
                    null === a || F(a) || (L(a) || (a = [ a ]), r(a, function(a) {
                        T(a) && (a = va(a) ? a.toISOString() : oa(a));
                        c.push(Da(b) + "=" + Da(a));
                    }));
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a;
            }
            var w = c("$http"), t = [];
            r(f, function(a) {
                t.unshift(G(a) ? q.get(a) : q.invoke(a));
            });
            r(g, function(a, b) {
                var c = G(a) ? q.get(a) : q.invoke(a);
                t.splice(b, 0, {
                    response: function(a) {
                        return c(n.when(a));
                    },
                    responseError: function(a) {
                        return c(n.reject(a));
                    }
                });
            });
            p.pendingRequests = [];
            (function(a) {
                r(arguments, function(a) {
                    p[a] = function(b, c) {
                        return p(E(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            })("get", "delete", "head", "jsonp");
            (function(a) {
                r(arguments, function(a) {
                    p[a] = function(b, c, d) {
                        return p(E(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            })("post", "put", "patch");
            p.defaults = e;
            return p;
        } ];
    }
    function xe(b) {
        if (8 >= R && (!b.match(/^(get|post|head|put|delete|options)$/i) || !W.XMLHttpRequest)) return new W.ActiveXObject("Microsoft.XMLHTTP");
        if (W.XMLHttpRequest) return new W.XMLHttpRequest();
        throw z("$httpBackend")("noxhr");
    }
    function Ud() {
        this.$get = [ "$browser", "$window", "$document", function(b, a, c) {
            return ye(b, xe, b.defer, a.angular.callbacks, c[0]);
        } ];
    }
    function ye(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), g = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            g = function(a) {
                bb(f, "load", g);
                bb(f, "error", g);
                e.body.removeChild(f);
                f = null;
                var h = -1, s = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), s = a.type, h = "error" === a.type ? 404 : 200);
                c && c(h, s);
            };
            sb(f, "load", g);
            sb(f, "error", g);
            8 >= R && (f.onreadystatechange = function() {
                G(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, 
                g({
                    type: "load"
                }));
            });
            e.body.appendChild(f);
            return g;
        }
        var g = -1;
        return function(e, k, m, l, n, q, p, s) {
            function J() {
                t = g;
                K && K();
                B && B.abort();
            }
            function w(a, d, e, f, g) {
                O && c.cancel(O);
                K = B = null;
                0 === d && (d = e ? 200 : "file" == xa(k).protocol ? 404 : 0);
                a(1223 === d ? 204 : d, e, f, g || "");
                b.$$completeOutstandingRequest(v);
            }
            var t;
            b.$$incOutstandingRequestCount();
            k = k || b.url();
            if ("jsonp" == x(e)) {
                var y = "_" + (d.counter++).toString(36);
                d[y] = function(a) {
                    d[y].data = a;
                    d[y].called = !0;
                };
                var K = f(k.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(a, b) {
                    w(l, a, d[y].data, "", b);
                    d[y] = v;
                });
            } else {
                var B = a(e);
                B.open(e, k, !0);
                r(n, function(a, b) {
                    D(a) && B.setRequestHeader(b, a);
                });
                B.onreadystatechange = function() {
                    if (B && 4 == B.readyState) {
                        var a = null, b = null, c = "";
                        t !== g && (a = B.getAllResponseHeaders(), b = "response" in B ? B.response : B.responseText);
                        t === g && 10 > R || (c = B.statusText);
                        w(l, t || B.status, b, a, c);
                    }
                };
                p && (B.withCredentials = !0);
                if (s) try {
                    B.responseType = s;
                } catch (ba) {
                    if ("json" !== s) throw ba;
                }
                B.send(m || null);
            }
            if (0 < q) var O = c(J, q); else q && N(q.then) && q.then(J);
        };
    }
    function Rd() {
        var b = "{{", a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b;
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a;
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(f, m, l) {
                for (var n, q, p = 0, s = [], J = f.length, w = !1, t = []; p < J; ) -1 != (n = f.indexOf(b, p)) && -1 != (q = f.indexOf(a, n + g)) ? (p != n && s.push(f.substring(p, n)), 
                s.push(p = c(w = f.substring(n + g, q))), p.exp = w, p = q + h, w = !0) : (p != J && s.push(f.substring(p)), 
                p = J);
                (J = s.length) || (s.push(""), J = 1);
                if (l && 1 < s.length) throw wc("noconcat", f);
                if (!m || w) return t.length = J, p = function(a) {
                    try {
                        for (var b = 0, c = J, g; b < c; b++) {
                            if ("function" == typeof (g = s[b])) if (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), 
                            null == g) g = ""; else switch (typeof g) {
                              case "string":
                                break;

                              case "number":
                                g = "" + g;
                                break;

                              default:
                                g = oa(g);
                            }
                            t[b] = g;
                        }
                        return t.join("");
                    } catch (h) {
                        a = wc("interr", f, h.toString()), d(a);
                    }
                }, p.exp = f, p.parts = s, p;
            }
            var g = b.length, h = a.length;
            f.startSymbol = function() {
                return b;
            };
            f.endSymbol = function() {
                return a;
            };
            return f;
        } ];
    }
    function Sd() {
        this.$get = [ "$rootScope", "$window", "$q", function(b, a, c) {
            function d(d, g, h, k) {
                var m = a.setInterval, l = a.clearInterval, n = c.defer(), q = n.promise, p = 0, s = D(k) && !k;
                h = D(h) ? h : 0;
                q.then(null, null, d);
                q.$$intervalId = m(function() {
                    n.notify(p++);
                    0 < h && p >= h && (n.resolve(p), l(q.$$intervalId), delete e[q.$$intervalId]);
                    s || b.$apply();
                }, g);
                e[q.$$intervalId] = n;
                return q;
            }
            var e = {};
            d.cancel = function(b) {
                return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), 
                delete e[b.$$intervalId], !0) : !1;
            };
            return d;
        } ];
    }
    function ad() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other";
                }
            };
        };
    }
    function Qb(b) {
        b = b.split("/");
        for (var a = b.length; a--; ) b[a] = mb(b[a]);
        return b.join("/");
    }
    function xc(b, a, c) {
        b = xa(b, c);
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = U(b.port) || ze[b.protocol] || null;
    }
    function yc(b, a, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        b = xa(b, c);
        a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
        a.$$search = cc(b.search);
        a.$$hash = decodeURIComponent(b.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
    }
    function ta(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length);
    }
    function Ga(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a);
    }
    function Rb(b) {
        return b.substr(0, Ga(b).lastIndexOf("/") + 1);
    }
    function zc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Rb(b);
        xc(b, this, b);
        this.$$parse = function(a) {
            var e = ta(c, a);
            if (!G(e)) throw Sb("ipthprfx", a, c);
            yc(e, this, b);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var a = Cb(this.$$search), b = this.$$hash ? "#" + mb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function(d, e) {
            var f, g;
            (f = ta(b, d)) !== u ? (g = f, g = (f = ta(a, f)) !== u ? c + (ta("/", f) || f) : b + g) : (f = ta(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g;
        };
    }
    function Tb(b, a) {
        var c = Rb(b);
        xc(b, this, b);
        this.$$parse = function(d) {
            var e = ta(b, d) || ta(c, d), e = "#" == e.charAt(0) ? ta(a, e) : this.$$html5 ? e : "";
            if (!G(e)) throw Sb("ihshprfx", d, a);
            yc(e, this, b);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose();
        };
        this.$$compose = function() {
            var c = Cb(this.$$search), e = this.$$hash ? "#" + mb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
        };
        this.$$parseLinkUrl = function(a, c) {
            return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1;
        };
    }
    function Ac(b, a) {
        this.$$html5 = !0;
        Tb.apply(this, arguments);
        var c = Rb(b);
        this.$$parseLinkUrl = function(d, e) {
            var f, g;
            b == Ga(d) ? f = d : (g = ta(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f;
        };
        this.$$compose = function() {
            var c = Cb(this.$$search), e = this.$$hash ? "#" + mb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url;
        };
    }
    function tb(b) {
        return function() {
            return this[b];
        };
    }
    function Bc(b, a) {
        return function(c) {
            if (F(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this;
        };
    }
    function Vd() {
        var b = "", a = !1;
        this.hashPrefix = function(a) {
            return D(a) ? (b = a, this) : b;
        };
        this.html5Mode = function(b) {
            return D(b) ? (a = b, this) : a;
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, f) {
            function g(a) {
                c.$broadcast("$locationChangeSuccess", h.absUrl(), a);
            }
            var h, k = d.baseHref(), m = d.url();
            a ? (k = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (k || "/"), e = e.history ? zc : Ac) : (k = Ga(m), 
            e = Tb);
            h = new e(k, "#" + b);
            h.$$parseLinkUrl(m, m);
            var l = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var b = A(a.target); "a" !== x(b[0].nodeName); ) if (b[0] === f[0] || !(b = b.parent())[0]) return;
                    var e = b.prop("href"), g = b.attr("href") || b.attr("xlink:href");
                    T(e) && "[object SVGAnimatedString]" === e.toString() && (e = xa(e.animVal).href);
                    l.test(e) || (!e || (b.attr("target") || a.isDefaultPrevented()) || !h.$$parseLinkUrl(e, g)) || (a.preventDefault(), 
                    h.absUrl() != d.url() && (c.$apply(), W.angular["ff-684208-preventDefault"] = !0));
                }
            });
            h.absUrl() != m && d.url(h.absUrl(), !0);
            d.onUrlChange(function(a) {
                h.absUrl() != a && (c.$evalAsync(function() {
                    var b = h.absUrl();
                    h.$$parse(a);
                    c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : g(b);
                }), c.$$phase || c.$digest());
            });
            var n = 0;
            c.$watch(function() {
                var a = d.url(), b = h.$$replace;
                n && a == h.absUrl() || (n++, c.$evalAsync(function() {
                    c.$broadcast("$locationChangeStart", h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), 
                    g(a));
                }));
                h.$$replace = !1;
                return n;
            });
            return h;
        } ];
    }
    function Wd() {
        var b = !0, a = this;
        this.debugEnabled = function(a) {
            return D(a) ? (b = a, this) : b;
        };
        this.$get = [ "$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || v;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (k) {}
                return a ? function() {
                    var a = [];
                    r(arguments, function(b) {
                        a.push(d(b));
                    });
                    return e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments);
                    };
                }()
            };
        } ];
    }
    function ka(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw la("isecfld", a);
        return b;
    }
    function ma(b, a) {
        if (b) {
            if (b.constructor === b) throw la("isecfn", a);
            if (b.document && b.location && b.alert && b.setInterval) throw la("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw la("isecdom", a);
            if (b === Object) throw la("isecobj", a);
        }
        return b;
    }
    function ub(b, a, c, d, e) {
        ma(b, d);
        e = e || {};
        a = a.split(".");
        for (var f, g = 0; 1 < a.length; g++) {
            f = ka(a.shift(), d);
            var h = ma(b[f], d);
            h || (h = {}, b[f] = h);
            b = h;
            b.then && e.unwrapPromises && (ya(d), "$$v" in b || function(a) {
                a.then(function(b) {
                    a.$$v = b;
                });
            }(b), b.$$v === u && (b.$$v = {}), b = b.$$v);
        }
        f = ka(a.shift(), d);
        ma(b[f], d);
        return b[f] = c;
    }
    function Qa(b) {
        return "constructor" == b;
    }
    function Cc(b, a, c, d, e, f, g) {
        ka(b, f);
        ka(a, f);
        ka(c, f);
        ka(d, f);
        ka(e, f);
        var h = function(a) {
            return ma(a, f);
        }, k = g.expensiveChecks, m = k || Qa(b) ? h : ga, l = k || Qa(a) ? h : ga, n = k || Qa(c) ? h : ga, q = k || Qa(d) ? h : ga, p = k || Qa(e) ? h : ga;
        return g.unwrapPromises ? function(g, h) {
            var k = h && h.hasOwnProperty(b) ? h : g, t;
            if (null == k) return k;
            (k = m(k[b])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = m(a);
            })), k = m(k.$$v));
            if (!a) return k;
            if (null == k) return u;
            (k = l(k[a])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = l(a);
            })), k = l(k.$$v));
            if (!c) return k;
            if (null == k) return u;
            (k = n(k[c])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = n(a);
            })), k = n(k.$$v));
            if (!d) return k;
            if (null == k) return u;
            (k = q(k[d])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = q(a);
            })), k = q(k.$$v));
            if (!e) return k;
            if (null == k) return u;
            (k = p(k[e])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = p(a);
            })), k = p(k.$$v));
            return k;
        } : function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h) return h;
            h = m(h[b]);
            if (!a) return h;
            if (null == h) return u;
            h = l(h[a]);
            if (!c) return h;
            if (null == h) return u;
            h = n(h[c]);
            if (!d) return h;
            if (null == h) return u;
            h = q(h[d]);
            return e ? null == h ? u : h = p(h[e]) : h;
        };
    }
    function Ae(b, a) {
        return function(c, d) {
            return b(c, d, ya, ma, a);
        };
    }
    function Dc(b, a, c) {
        var d = a.expensiveChecks, e = d ? Be : Ce;
        if (e.hasOwnProperty(b)) return e[b];
        var f = b.split("."), g = f.length, h;
        if (a.csp) h = 6 > g ? Cc(f[0], f[1], f[2], f[3], f[4], c, a) : function(b, d) {
            var e = 0, h;
            do h = Cc(f[e++], f[e++], f[e++], f[e++], f[e++], c, a)(b, d), d = u, b = h; while (e < g);
            return h;
        }; else {
            var k = "var p;\n";
            d && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var m = d;
            r(f, function(b, e) {
                ka(b, c);
                var f = (e ? "s" : '((l&&l.hasOwnProperty("' + b + '"))?l:s)') + '["' + b + '"]', g = d || Qa(b);
                g && (f = "eso(" + f + ", fe)", m = !0);
                k += "if(s == null) return undefined;\ns=" + f + ";\n";
                a.unwrapPromises && (k += 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (g ? "eso(v)" : "v") + ";});\n}\n s=" + (g ? "eso(s.$$v)" : "s.$$v") + "\n}\n");
            });
            k += "return s;";
            h = new Function("s", "l", "pw", "eso", "fe", k);
            h.toString = aa(k);
            if (m || a.unwrapPromises) h = Ae(h, c);
        }
        "hasOwnProperty" !== b && (e[b] = h);
        return h;
    }
    function Xd() {
        var b = {}, a = {}, c = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0,
            expensiveChecks: !1
        };
        this.unwrapPromises = function(a) {
            return D(a) ? (c.unwrapPromises = !!a, this) : c.unwrapPromises;
        };
        this.logPromiseWarnings = function(a) {
            return D(a) ? (c.logPromiseWarnings = a, this) : c.logPromiseWarnings;
        };
        this.$get = [ "$filter", "$sniffer", "$log", function(d, e, f) {
            c.csp = e.csp;
            var g = {
                csp: c.csp,
                unwrapPromises: c.unwrapPromises,
                logPromiseWarnings: c.logPromiseWarnings,
                expensiveChecks: !0
            };
            ya = function(a) {
                c.logPromiseWarnings && !Ec.hasOwnProperty(a) && (Ec[a] = !0, f.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            };
            return function(e, f) {
                var m;
                switch (typeof e) {
                  case "string":
                    var l = f ? a : b;
                    if (l.hasOwnProperty(e)) return l[e];
                    m = f ? g : c;
                    var n = new Ub(m);
                    m = new gb(n, d, m).parse(e);
                    "hasOwnProperty" !== e && (l[e] = m);
                    return m;

                  case "function":
                    return e;

                  default:
                    return v;
                }
            };
        } ];
    }
    function Zd() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(b, a) {
            return De(function(a) {
                b.$evalAsync(a);
            }, a);
        } ];
    }
    function De(b, a) {
        function c(a) {
            return a;
        }
        function d(a) {
            return g(a);
        }
        var e = function() {
            var g = [], m, l;
            return l = {
                resolve: function(a) {
                    if (g) {
                        var c = g;
                        g = u;
                        m = f(a);
                        c.length && b(function() {
                            for (var a, b = 0, d = c.length; b < d; b++) a = c[b], m.then(a[0], a[1], a[2]);
                        });
                    }
                },
                reject: function(a) {
                    l.resolve(h(a));
                },
                notify: function(a) {
                    if (g) {
                        var c = g;
                        g.length && b(function() {
                            for (var b, d = 0, e = c.length; d < e; d++) b = c[d], b[2](a);
                        });
                    }
                },
                promise: {
                    then: function(b, f, h) {
                        var l = e(), J = function(d) {
                            try {
                                l.resolve((N(b) ? b : c)(d));
                            } catch (e) {
                                l.reject(e), a(e);
                            }
                        }, w = function(b) {
                            try {
                                l.resolve((N(f) ? f : d)(b));
                            } catch (c) {
                                l.reject(c), a(c);
                            }
                        }, t = function(b) {
                            try {
                                l.notify((N(h) ? h : c)(b));
                            } catch (d) {
                                a(d);
                            }
                        };
                        g ? g.push([ J, w, t ]) : m.then(J, w, t);
                        return l.promise;
                    },
                    "catch": function(a) {
                        return this.then(null, a);
                    },
                    "finally": function(a) {
                        function b(a, c) {
                            var d = e();
                            c ? d.resolve(a) : d.reject(a);
                            return d.promise;
                        }
                        function d(e, f) {
                            var g = null;
                            try {
                                g = (a || c)();
                            } catch (h) {
                                return b(h, !1);
                            }
                            return g && N(g.then) ? g.then(function() {
                                return b(e, f);
                            }, function(a) {
                                return b(a, !1);
                            }) : b(e, f);
                        }
                        return this.then(function(a) {
                            return d(a, !0);
                        }, function(a) {
                            return d(a, !1);
                        });
                    }
                }
            };
        }, f = function(a) {
            return a && N(a.then) ? a : {
                then: function(c) {
                    var d = e();
                    b(function() {
                        d.resolve(c(a));
                    });
                    return d.promise;
                }
            };
        }, g = function(a) {
            var b = e();
            b.reject(a);
            return b.promise;
        }, h = function(c) {
            return {
                then: function(f, g) {
                    var h = e();
                    b(function() {
                        try {
                            h.resolve((N(g) ? g : d)(c));
                        } catch (b) {
                            h.reject(b), a(b);
                        }
                    });
                    return h.promise;
                }
            };
        };
        return {
            defer: e,
            reject: g,
            when: function(h, m, l, n) {
                var q = e(), p, s = function(b) {
                    try {
                        return (N(m) ? m : c)(b);
                    } catch (d) {
                        return a(d), g(d);
                    }
                }, J = function(b) {
                    try {
                        return (N(l) ? l : d)(b);
                    } catch (c) {
                        return a(c), g(c);
                    }
                }, w = function(b) {
                    try {
                        return (N(n) ? n : c)(b);
                    } catch (d) {
                        a(d);
                    }
                };
                b(function() {
                    f(h).then(function(a) {
                        p || (p = !0, q.resolve(f(a).then(s, J, w)));
                    }, function(a) {
                        p || (p = !0, q.resolve(J(a)));
                    }, function(a) {
                        p || q.notify(w(a));
                    });
                });
                return q.promise;
            },
            all: function(a) {
                var b = e(), c = 0, d = L(a) ? [] : {};
                r(a, function(a, e) {
                    c++;
                    f(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                });
                0 === c && b.resolve(d);
                return b.promise;
            }
        };
    }
    function fe() {
        this.$get = [ "$window", "$timeout", function(b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(b) {
                var c = a(b, 16.66, !1);
                return function() {
                    a.cancel(c);
                };
            };
            f.supported = e;
            return f;
        } ];
    }
    function Yd() {
        var b = 10, a = z("$rootScope"), c = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, e, f, g) {
            function h() {
                this.$id = ib();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = {};
            }
            function k(b) {
                if (q.$$phase) throw a("inprog", q.$$phase);
                q.$$phase = b;
            }
            function m(a, b) {
                var c = f(a);
                Ya(c, b);
                return c;
            }
            function l(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function n() {}
            h.prototype = {
                constructor: h,
                $new: function(a) {
                    a ? (a = new h(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$id = ib();
                        this.$$childScopeClass = null;
                    }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass());
                    a["this"] = a;
                    a.$parent = this;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a;
                },
                $watch: function(a, b, d) {
                    var e = m(a, "watch"), f = this.$$watchers, g = {
                        fn: b,
                        last: n,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    c = null;
                    if (!N(b)) {
                        var h = m(b || v, "listener");
                        g.fn = function(a, b, c) {
                            h(c);
                        };
                    }
                    if ("string" == typeof a && e.constant) {
                        var k = g.fn;
                        g.fn = function(a, b, c) {
                            k.call(this, a, b, c);
                            Ua(f, g);
                        };
                    }
                    f || (f = this.$$watchers = []);
                    f.unshift(g);
                    return function() {
                        Ua(f, g);
                        c = null;
                    };
                },
                $watchCollection: function(a, b) {
                    var c = this, d, e, g, h = 1 < b.length, k = 0, l = f(a), m = [], n = {}, q = !0, r = 0;
                    return this.$watch(function() {
                        d = l(c);
                        var a, b, f;
                        if (T(d)) if (Sa(d)) for (e !== m && (e = m, r = e.length = 0, k++), a = d.length, 
                        r !== a && (k++, e.length = r = a), b = 0; b < a; b++) f = e[b] !== e[b] && d[b] !== d[b], 
                        f || e[b] === d[b] || (k++, e[b] = d[b]); else {
                            e !== n && (e = n = {}, r = 0, k++);
                            a = 0;
                            for (b in d) d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], 
                            f || e[b] === d[b] || (k++, e[b] = d[b])) : (r++, e[b] = d[b], k++));
                            if (r > a) for (b in k++, e) e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, 
                            delete e[b]);
                        } else e !== d && (e = d, k++);
                        return k;
                    }, function() {
                        q ? (q = !1, b(d, d, c)) : b(d, g, c);
                        if (h) if (T(d)) if (Sa(d)) {
                            g = Array(d.length);
                            for (var a = 0; a < d.length; a++) g[a] = d[a];
                        } else for (a in g = {}, d) lb.call(d, a) && (g[a] = d[a]); else g = d;
                    });
                },
                $digest: function() {
                    var d, f, h, l, m = this.$$asyncQueue, r = this.$$postDigestQueue, K, B, u = b, O, M = [], A, P, C;
                    k("$digest");
                    g.$$checkUrlChange();
                    c = null;
                    do {
                        B = !1;
                        for (O = this; m.length; ) {
                            try {
                                C = m.shift(), C.scope.$eval(C.expression);
                            } catch (I) {
                                q.$$phase = null, e(I);
                            }
                            c = null;
                        }
                        a: do {
                            if (l = O.$$watchers) for (K = l.length; K--; ) try {
                                if (d = l[K]) if ((f = d.get(O)) !== (h = d.last) && !(d.eq ? Ca(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) B = !0, 
                                c = d, d.last = d.eq ? Ka(f, null) : f, d.fn(f, h === n ? f : h, O), 5 > u && (A = 4 - u, 
                                M[A] || (M[A] = []), P = N(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, 
                                P += "; newVal: " + oa(f) + "; oldVal: " + oa(h), M[A].push(P)); else if (d === c) {
                                    B = !1;
                                    break a;
                                }
                            } catch (D) {
                                q.$$phase = null, e(D);
                            }
                            if (!(l = O.$$childHead || O !== this && O.$$nextSibling)) for (;O !== this && !(l = O.$$nextSibling); ) O = O.$parent;
                        } while (O = l);
                        if ((B || m.length) && !u--) throw q.$$phase = null, a("infdig", b, oa(M));
                    } while (B || m.length);
                    for (q.$$phase = null; r.length; ) try {
                        r.shift()();
                    } catch (x) {
                        e(x);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this !== q && (r(this.$$listenerCount, Bb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), 
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), 
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, 
                        this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], 
                        this.$destroy = this.$digest = this.$apply = v, this.$on = this.$watch = function() {
                            return v;
                        });
                    }
                },
                $eval: function(a, b) {
                    return f(a)(this, b);
                },
                $evalAsync: function(a) {
                    q.$$phase || q.$$asyncQueue.length || g.defer(function() {
                        q.$$asyncQueue.length && q.$digest();
                    });
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    });
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a);
                },
                $apply: function(a) {
                    try {
                        return k("$apply"), this.$eval(a);
                    } catch (b) {
                        e(b);
                    } finally {
                        q.$$phase = null;
                        try {
                            q.$digest();
                        } catch (c) {
                            throw e(c), c;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = Ta(c, b);
                        -1 !== d && (c[d] = null, l(e, 1, a));
                    };
                },
                $emit: function(a, b) {
                    var c = [], d, f = this, g = !1, h = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, k = [ h ].concat(wa.call(arguments, 1)), l, m;
                    do {
                        d = f.$$listeners[a] || c;
                        h.currentScope = f;
                        l = 0;
                        for (m = d.length; l < m; l++) if (d[l]) try {
                            d[l].apply(null, k);
                        } catch (n) {
                            e(n);
                        } else d.splice(l, 1), l--, m--;
                        if (g) break;
                        f = f.$parent;
                    } while (f);
                    return h;
                },
                $broadcast: function(a, b) {
                    for (var c = this, d = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, g = [ f ].concat(wa.call(arguments, 1)), h, k; c = d; ) {
                        f.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++) if (d[h]) try {
                            d[h].apply(null, g);
                        } catch (l) {
                            e(l);
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return f;
                }
            };
            var q = new h();
            return q;
        } ];
    }
    function bd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return D(a) ? (b = a, this) : b;
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return D(b) ? (a = b, this) : a;
        };
        this.$get = function() {
            return function(c, d) {
                var e = d ? a : b, f;
                if (!R || 8 <= R) if (f = xa(c).href, "" !== f && !f.match(e)) return "unsafe:" + f;
                return c;
            };
        };
    }
    function Ee(b) {
        if ("self" === b) return b;
        if (G(b)) {
            if (-1 < b.indexOf("***")) throw za("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$");
        }
        if (kb(b)) return RegExp("^" + b.source + "$");
        throw za("imatcher");
    }
    function Fc(b) {
        var a = [];
        D(b) && r(b, function(b) {
            a.push(Ee(b));
        });
        return a;
    }
    function ae() {
        this.SCE_CONTEXTS = fa;
        var b = [ "self" ], a = [];
        this.resourceUrlWhitelist = function(a) {
            arguments.length && (b = Fc(a));
            return b;
        };
        this.resourceUrlBlacklist = function(b) {
            arguments.length && (a = Fc(b));
            return a;
        };
        this.$get = [ "$injector", function(c) {
            function d(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                a && (b.prototype = new a());
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                };
                return b;
            }
            var e = function(a) {
                throw za("unsafe");
            };
            c.has("$sanitize") && (e = c.get("$sanitize"));
            var f = d(), g = {};
            g[fa.HTML] = d(f);
            g[fa.CSS] = d(f);
            g[fa.URL] = d(f);
            g[fa.JS] = d(f);
            g[fa.RESOURCE_URL] = d(g[fa.URL]);
            return {
                trustAs: function(a, b) {
                    var c = g.hasOwnProperty(a) ? g[a] : null;
                    if (!c) throw za("icontext", a, b);
                    if (null === b || b === u || "" === b) return b;
                    if ("string" !== typeof b) throw za("itype", a);
                    return new c(b);
                },
                getTrusted: function(c, d) {
                    if (null === d || d === u || "" === d) return d;
                    var f = g.hasOwnProperty(c) ? g[c] : null;
                    if (f && d instanceof f) return d.$$unwrapTrustedValue();
                    if (c === fa.RESOURCE_URL) {
                        var f = xa(d.toString()), l, n, q = !1;
                        l = 0;
                        for (n = b.length; l < n; l++) if ("self" === b[l] ? Pb(f) : b[l].exec(f.href)) {
                            q = !0;
                            break;
                        }
                        if (q) for (l = 0, n = a.length; l < n; l++) if ("self" === a[l] ? Pb(f) : a[l].exec(f.href)) {
                            q = !1;
                            break;
                        }
                        if (q) return d;
                        throw za("insecurl", d.toString());
                    }
                    if (c === fa.HTML) return e(d);
                    throw za("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof f ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function $d() {
        var b = !0;
        this.enabled = function(a) {
            arguments.length && (b = !!a);
            return b;
        };
        this.$get = [ "$parse", "$sniffer", "$sceDelegate", function(a, c, d) {
            if (b && c.msie && 8 > c.msieDocumentMode) throw za("iequirks");
            var e = ha(fa);
            e.isEnabled = function() {
                return b;
            };
            e.trustAs = d.trustAs;
            e.getTrusted = d.getTrusted;
            e.valueOf = d.valueOf;
            b || (e.trustAs = e.getTrusted = function(a, b) {
                return b;
            }, e.valueOf = ga);
            e.parseAs = function(b, c) {
                var d = a(c);
                return d.literal && d.constant ? d : function(a, c) {
                    return e.getTrusted(b, d(a, c));
                };
            };
            var f = e.parseAs, g = e.getTrusted, h = e.trustAs;
            r(fa, function(a, b) {
                var c = x(b);
                e[ab("parse_as_" + c)] = function(b) {
                    return f(a, b);
                };
                e[ab("get_trusted_" + c)] = function(b) {
                    return g(a, b);
                };
                e[ab("trust_as_" + c)] = function(b) {
                    return h(a, b);
                };
            });
            return e;
        } ];
    }
    function be() {
        this.$get = [ "$window", "$document", function(b, a) {
            var c = {}, d = U((/android (\d+)/.exec(x((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g = f.documentMode, h, k = /^(Moz|webkit|O|ms)(?=[A-Z])/, m = f.body && f.body.style, l = !1, n = !1;
            if (m) {
                for (var q in m) if (l = k.exec(q)) {
                    h = l[0];
                    h = h.substr(0, 1).toUpperCase() + h.substr(1);
                    break;
                }
                h || (h = "WebkitOpacity" in m && "webkit");
                l = !!("transition" in m || h + "Transition" in m);
                n = !!("animation" in m || h + "Animation" in m);
                !d || l && n || (l = G(f.body.style.webkitTransition), n = G(f.body.style.webkitAnimation));
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hashchange: "onhashchange" in b && (!g || 7 < g),
                hasEvent: function(a) {
                    if ("input" == a && 9 == R) return !1;
                    if (F(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b;
                    }
                    return c[a];
                },
                csp: Za(),
                vendorPrefix: h,
                transitions: l,
                animations: n,
                android: d,
                msie: R,
                msieDocumentMode: g
            };
        } ];
    }
    function de() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, h, k) {
                var m = c.defer(), l = m.promise, n = D(k) && !k;
                h = a.defer(function() {
                    try {
                        m.resolve(e());
                    } catch (a) {
                        m.reject(a), d(a);
                    } finally {
                        delete f[l.$$timeoutId];
                    }
                    n || b.$apply();
                }, h);
                l.$$timeoutId = h;
                f[h] = m;
                return l;
            }
            var f = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], 
                a.defer.cancel(b.$$timeoutId)) : !1;
            };
            return e;
        } ];
    }
    function xa(b, a) {
        var c = b;
        R && (Y.setAttribute("href", c), c = Y.href);
        Y.setAttribute("href", c);
        return {
            href: Y.href,
            protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
            host: Y.host,
            search: Y.search ? Y.search.replace(/^\?/, "") : "",
            hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
            hostname: Y.hostname,
            port: Y.port,
            pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
        };
    }
    function Pb(b) {
        b = G(b) ? xa(b) : b;
        return b.protocol === Gc.protocol && b.host === Gc.host;
    }
    function ee() {
        this.$get = aa(W);
    }
    function kc(b) {
        function a(d, e) {
            if (T(d)) {
                var f = {};
                r(d, function(b, c) {
                    f[c] = a(c, b);
                });
                return f;
            }
            return b.factory(d + c, e);
        }
        var c = "Filter";
        this.register = a;
        this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ];
        a("currency", Hc);
        a("date", Ic);
        a("filter", Fe);
        a("json", Ge);
        a("limitTo", He);
        a("lowercase", Ie);
        a("number", Jc);
        a("orderBy", Kc);
        a("uppercase", Je);
    }
    function Fe() {
        return function(b, a, c) {
            if (!L(b)) return b;
            var d = typeof c, e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++) if (!e[b](a)) return !1;
                return !0;
            };
            "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return Xa.equals(a, b);
            } : function(a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a) if ("$" !== d.charAt(0) && lb.call(a, d) && c(a[d], b[d])) return !0;
                    return !1;
                }
                b = ("" + b).toLowerCase();
                return -1 < ("" + a).toLowerCase().indexOf(b);
            });
            var f = function(a, b) {
                if ("string" === typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                    return c(a, b);

                  case "object":
                    switch (typeof b) {
                      case "object":
                        return c(a, b);

                      default:
                        for (var d in a) if ("$" !== d.charAt(0) && f(a[d], b)) return !0;
                    }
                    return !1;

                  case "array":
                    for (d = 0; d < a.length; d++) if (f(a[d], b)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof a) {
              case "boolean":
              case "number":
              case "string":
                a = {
                    $: a
                };

              case "object":
                for (var g in a) (function(b) {
                    "undefined" !== typeof a[b] && e.push(function(c) {
                        return f("$" == b ? c : c && c[b], a[b]);
                    });
                })(g);
                break;

              case "function":
                e.push(a);
                break;

              default:
                return b;
            }
            d = [];
            for (g = 0; g < b.length; g++) {
                var h = b[g];
                e.check(h) && d.push(h);
            }
            return d;
        };
    }
    function Hc(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            F(d) && (d = a.CURRENCY_SYM);
            return Lc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
        };
    }
    function Jc(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Lc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
        };
    }
    function Lc(b, a, c, d, e) {
        if (null == b || !isFinite(b) || T(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", k = [], m = !1;
        if (-1 !== g.indexOf("e")) {
            var l = g.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? (g = "0", b = 0) : (h = g, m = !0);
        }
        if (m) 0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e)); else {
            g = (g.split(Mc)[1] || "").length;
            F(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            0 === b && (f = !1);
            b = ("" + b).split(Mc);
            g = b[0];
            b = b[1] || "";
            var l = 0, n = a.lgSize, q = a.gSize;
            if (g.length >= n + q) for (l = g.length - n, m = 0; m < l; m++) 0 === (l - m) % q && 0 !== m && (h += c), 
            h += g.charAt(m);
            for (m = l; m < g.length; m++) 0 === (g.length - m) % n && 0 !== m && (h += c), 
            h += g.charAt(m);
            for (;b.length < e; ) b += "0";
            e && "0" !== e && (h += d + b.substr(0, e));
        }
        k.push(f ? a.negPre : a.posPre);
        k.push(h);
        k.push(f ? a.negSuf : a.posSuf);
        return k.join("");
    }
    function Vb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a; ) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b;
    }
    function Z(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return Vb(e, a, d);
        };
    }
    function vb(b, a) {
        return function(c, d) {
            var e = c["get" + b](), f = La(a ? "SHORT" + b : b);
            return d[f][e];
        };
    }
    function Ic(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = U(b[9] + b[10]), g = U(b[9] + b[11]));
                h.call(a, U(b[1]), U(b[2]) - 1, U(b[3]));
                f = U(b[4] || 0) - f;
                g = U(b[5] || 0) - g;
                h = U(b[6] || 0);
                b = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var f = "", g = [], h, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            G(c) && (c = Ke.test(c) ? U(c) : a(c));
            jb(c) && (c = new Date(c));
            if (!va(c)) return c;
            for (;e; ) (k = Le.exec(e)) ? (g = g.concat(wa.call(k, 1)), e = g.pop()) : (g.push(e), 
            e = null);
            r(g, function(a) {
                h = Me[a];
                f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return f;
        };
    }
    function Ge() {
        return function(b) {
            return oa(b, !0);
        };
    }
    function He() {
        return function(b, a) {
            if (!L(b) && !G(b)) return b;
            a = Infinity === Math.abs(Number(a)) ? Number(a) : U(a);
            if (G(b)) return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [], d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (;d < e; d++) c.push(b[d]);
            return c;
        };
    }
    function Kc(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Wa(b) ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function f(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (va(a) && va(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), 
                b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
            }
            if (!Sa(a)) return a;
            c = L(c) ? c : [ c ];
            0 === c.length && (c = [ "+" ]);
            c = Uc(c, function(a) {
                var c = !1, d = a || ga;
                if (G(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a) return e(function(a, b) {
                        return f(a, b);
                    }, c);
                    d = b(a);
                    if (d.constant) {
                        var m = d();
                        return e(function(a, b) {
                            return f(a[m], b[m]);
                        }, c);
                    }
                }
                return e(function(a, b) {
                    return f(d(a), d(b));
                }, c);
            });
            return wa.call(a).sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }, d));
        };
    }
    function Aa(b) {
        N(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return aa(b);
    }
    function Nc(b, a, c, d) {
        function e(a, c) {
            c = c ? "-" + nb(c, "-") : "";
            d.setClass(b, (a ? wb : xb) + c, (a ? xb : wb) + c);
        }
        var f = this, g = b.parent().controller("form") || yb, h = 0, k = f.$error = {}, m = [];
        f.$name = a.name || a.ngForm;
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        g.$addControl(f);
        b.addClass(Ra);
        e(!0);
        f.$addControl = function(a) {
            Ea(a.$name, "input");
            m.push(a);
            a.$name && (f[a.$name] = a);
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(k, function(b, c) {
                f.$setValidity(c, !0, a);
            });
            Ua(m, a);
        };
        f.$setValidity = function(a, b, c) {
            var d = k[a];
            if (b) d && (Ua(d, c), d.length || (h--, h || (e(b), f.$valid = !0, f.$invalid = !1), 
            k[a] = !1, e(!0, a), g.$setValidity(a, !0, f))); else {
                h || e(b);
                if (d) {
                    if (-1 != Ta(d, c)) return;
                } else k[a] = d = [], h++, e(!1, a), g.$setValidity(a, !1, f);
                d.push(c);
                f.$valid = !1;
                f.$invalid = !0;
            }
        };
        f.$setDirty = function() {
            d.removeClass(b, Ra);
            d.addClass(b, zb);
            f.$dirty = !0;
            f.$pristine = !1;
            g.$setDirty();
        };
        f.$setPristine = function() {
            d.removeClass(b, zb);
            d.addClass(b, Ra);
            f.$dirty = !1;
            f.$pristine = !0;
            r(m, function(a) {
                a.$setPristine();
            });
        };
    }
    function ua(b, a, c, d) {
        b.$setValidity(a, c);
        return c ? d : u;
    }
    function Oc(b, a) {
        var c, d;
        if (a) for (c = 0; c < a.length; ++c) if (d = a[c], b[d]) return !0;
        return !1;
    }
    function Ne(b, a, c, d, e) {
        T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function(f) {
            if (b.$error[a] || Oc(e, d) || !Oc(e, c)) return f;
            b.$setValidity(a, !1);
        }));
    }
    function Ab(b, a, c, d, e, f) {
        var g = a.prop(Oe), h = a[0].placeholder, k = {}, m = x(a[0].type);
        d.$$validityState = g;
        if (!e.android) {
            var l = !1;
            a.on("compositionstart", function(a) {
                l = !0;
            });
            a.on("compositionend", function() {
                l = !1;
                n();
            });
        }
        var n = function(e) {
            if (!l) {
                var f = a.val();
                if (R && "input" === (e || k).type && a[0].placeholder !== h) h = a[0].placeholder; else if ("password" !== m && Wa(c.ngTrim || "T") && (f = $(f)), 
                e = g && d.$$hasNativeValidators, d.$viewValue !== f || "" === f && e) b.$root.$$phase ? d.$setViewValue(f) : b.$apply(function() {
                    d.$setViewValue(f);
                });
            }
        };
        if (e.hasEvent("input")) a.on("input", n); else {
            var q, p = function() {
                q || (q = f.defer(function() {
                    n();
                    q = null;
                }));
            };
            a.on("keydown", function(a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || p();
            });
            if (e.hasEvent("paste")) a.on("paste cut", p);
        }
        a.on("change", n);
        d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
        };
        var s = c.ngPattern;
        s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ? (s = RegExp(e[1], e[2]), e = function(a) {
            return ua(d, "pattern", d.$isEmpty(a) || s.test(a), a);
        }) : e = function(c) {
            var e = b.$eval(s);
            if (!e || !e.test) throw z("ngPattern")("noregexp", s, e, ia(a));
            return ua(d, "pattern", d.$isEmpty(c) || e.test(c), c);
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var r = U(c.ngMinlength);
            e = function(a) {
                return ua(d, "minlength", d.$isEmpty(a) || a.length >= r, a);
            };
            d.$parsers.push(e);
            d.$formatters.push(e);
        }
        if (c.ngMaxlength) {
            var w = U(c.ngMaxlength);
            e = function(a) {
                return ua(d, "maxlength", d.$isEmpty(a) || a.length <= w, a);
            };
            d.$parsers.push(e);
            d.$formatters.push(e);
        }
    }
    function Wb(b, a) {
        b = "ngClass" + b;
        return [ "$animate", function(c) {
            function d(a, b) {
                var c = [], d = 0;
                a: for (;d < a.length; d++) {
                    for (var e = a[d], l = 0; l < b.length; l++) if (e == b[l]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                if (!L(a)) {
                    if (G(a)) return a.split(" ");
                    if (T(a)) {
                        var b = [];
                        r(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")));
                        });
                        return b;
                    }
                }
                return a;
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        r(a, function(a) {
                            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
                        });
                        g.data("$classCounts", c);
                        return d.join(" ");
                    }
                    function m(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var m = e(b || []);
                            if (!l) {
                                var p = k(m, 1);
                                h.$addClass(p);
                            } else if (!Ca(b, l)) {
                                var s = e(l), p = d(m, s), m = d(s, m), m = k(m, -1), p = k(p, 1);
                                0 === p.length ? c.removeClass(g, m) : 0 === m.length ? c.addClass(g, p) : c.setClass(g, p, m);
                            }
                        }
                        l = ha(b);
                    }
                    var l;
                    f.$watch(h[b], m, !0);
                    h.$observe("class", function(a) {
                        m(f.$eval(h[b]));
                    });
                    "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[b]));
                            g === a ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
                        }
                    });
                }
            };
        } ];
    }
    var Oe = "validity", x = function(b) {
        return G(b) ? b.toLowerCase() : b;
    }, lb = Object.prototype.hasOwnProperty, La = function(b) {
        return G(b) ? b.toUpperCase() : b;
    }, R, A, Fa, wa = [].slice, Pe = [].push, Ba = Object.prototype.toString, Va = z("ng"), Xa = W.angular || (W.angular = {}), $a, Pa, na = [ "0", "0", "0" ];
    R = U((/msie (\d+)/.exec(x(navigator.userAgent)) || [])[1]);
    isNaN(R) && (R = U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent)) || [])[1]));
    v.$inject = [];
    ga.$inject = [];
    var L = function() {
        return N(Array.isArray) ? Array.isArray : function(b) {
            return "[object Array]" === Ba.call(b);
        };
    }(), $ = function() {
        return String.prototype.trim ? function(b) {
            return G(b) ? b.trim() : b;
        } : function(b) {
            return G(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b;
        };
    }();
    Pa = 9 > R ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? La(b.scopeName + ":" + b.nodeName) : b.nodeName;
    } : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName;
    };
    var Za = function() {
        if (D(Za.isActive_)) return Za.isActive_;
        var b = !(!X.querySelector("[ng-csp]") && !X.querySelector("[data-ng-csp]"));
        if (!b) try {
            new Function("");
        } catch (a) {
            b = !0;
        }
        return Za.isActive_ = b;
    }, Xc = /[A-Z]/g, $c = {
        full: "1.2.28",
        major: 1,
        minor: 2,
        dot: 28,
        codeName: "finnish-disembarkation"
    };
    S.expando = "ng339";
    var cb = S.cache = {}, me = 1, sb = W.document.addEventListener ? function(b, a, c) {
        b.addEventListener(a, c, !1);
    } : function(b, a, c) {
        b.attachEvent("on" + a, c);
    }, bb = W.document.removeEventListener ? function(b, a, c) {
        b.removeEventListener(a, c, !1);
    } : function(b, a, c) {
        b.detachEvent("on" + a, c);
    };
    S._data = function(b) {
        return this.cache[b[this.expando]] || {};
    };
    var he = /([\:\-\_]+(.))/g, ie = /^moz([A-Z])/, Hb = z("jqLite"), je = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ib = /<|&#?\w+;/, ke = /<([\w:]+)/, le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, da = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
    da.th = da.td;
    var Oa = S.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0, b());
            }
            var c = !1;
            "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(W).on("load", a));
        },
        toString: function() {
            var b = [];
            r(this, function(a) {
                b.push("" + a);
            });
            return "[" + b.join(", ") + "]";
        },
        eq: function(b) {
            return 0 <= b ? A(this[b]) : A(this[this.length + b]);
        },
        length: 0,
        push: Pe,
        sort: [].sort,
        splice: [].splice
    }, rb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        rb[x(b)] = b;
    });
    var pc = {};
    r("input select option textarea button form details".split(" "), function(b) {
        pc[La(b)] = !0;
    });
    r({
        data: Mb,
        removeData: Lb
    }, function(b, a) {
        S[a] = b;
    });
    r({
        data: Mb,
        inheritedData: qb,
        scope: function(b) {
            return A.data(b, "$scope") || qb(b.parentNode || b, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(b) {
            return A.data(b, "$isolateScope") || A.data(b, "$isolateScopeNoTemplate");
        },
        controller: mc,
        injector: function(b) {
            return qb(b, "$injector");
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a);
        },
        hasClass: Nb,
        css: function(b, a, c) {
            a = ab(a);
            if (D(c)) b.style[a] = c; else {
                var d;
                8 >= R && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= R && (d = "" === d ? u : d);
                return d;
            }
        },
        attr: function(b, a, c) {
            var d = x(a);
            if (rb[d]) if (D(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || v).specified ? d : u; else if (D(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), 
            null === b ? u : b;
        },
        prop: function(b, a, c) {
            if (D(c)) b[a] = c; else return b[a];
        },
        text: function() {
            function b(b, d) {
                var e = a[b.nodeType];
                if (F(d)) return e ? b[e] : "";
                b[e] = d;
            }
            var a = [];
            9 > R ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
            b.$dv = "";
            return b;
        }(),
        val: function(b, a) {
            if (F(a)) {
                if ("SELECT" === Pa(b) && b.multiple) {
                    var c = [];
                    r(b.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    });
                    return 0 === c.length ? null : c;
                }
                return b.value;
            }
            b.value = a;
        },
        html: function(b, a) {
            if (F(a)) return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++) Ma(d[c]);
            b.innerHTML = a;
        },
        empty: nc
    }, function(b, a) {
        S.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== nc && (2 == b.length && b !== Nb && b !== mc ? a : d) === u) {
                if (T(a)) {
                    for (e = 0; e < g; e++) if (b === Mb) b(this[e], a); else for (f in a) b(this[e], f, a[f]);
                    return this;
                }
                e = b.$dv;
                g = e === u ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; e < g; e++) b(this[e], a, d);
            return this;
        };
    });
    r({
        removeData: Lb,
        dealoc: Ma,
        on: function a(c, d, e, f) {
            if (D(f)) throw Hb("onargs");
            var g = pa(c, "events"), h = pa(c, "handle");
            g || pa(c, "events", g = {});
            h || pa(c, "handle", h = ne(c, g));
            r(d.split(" "), function(d) {
                var f = g[d];
                if (!f) {
                    if ("mouseenter" == d || "mouseleave" == d) {
                        var l = X.body.contains || X.body.compareDocumentPosition ? function(a, c) {
                            var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                            return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
                        } : function(a, c) {
                            if (c) for (;c = c.parentNode; ) if (c === a) return !0;
                            return !1;
                        };
                        g[d] = [];
                        a(c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[d], function(a) {
                            var c = a.relatedTarget;
                            c && (c === this || l(this, c)) || h(a, d);
                        });
                    } else sb(c, d, h), g[d] = [];
                    f = g[d];
                }
                f.push(e);
            });
        },
        off: lc,
        one: function(a, c, d) {
            a = A(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f);
            });
            a.on(c, d);
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            Ma(a);
            r(new S(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c;
            });
        },
        children: function(a) {
            var c = [];
            r(a.childNodes, function(a) {
                1 === a.nodeType && c.push(a);
            });
            return c;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, c) {
            r(new S(c), function(c) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
            });
        },
        prepend: function(a, c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                r(new S(c), function(c) {
                    a.insertBefore(c, d);
                });
            }
        },
        wrap: function(a, c) {
            c = A(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a);
        },
        remove: function(a) {
            Ma(a);
            var c = a.parentNode;
            c && c.removeChild(a);
        },
        after: function(a, c) {
            var d = a, e = a.parentNode;
            r(new S(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a;
            });
        },
        addClass: pb,
        removeClass: ob,
        toggleClass: function(a, c, d) {
            c && r(c.split(" "), function(c) {
                var f = d;
                F(f) && (f = !Nb(a, c));
                (f ? pb : ob)(a, c);
            });
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType; ) a = a.nextSibling;
            return a;
        },
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
        },
        clone: Kb,
        triggerHandler: function(a, c, d) {
            var e, f;
            e = c.type || c;
            var g = (pa(a, "events") || {})[e];
            g && (e = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopPropagation: v,
                type: e,
                target: a
            }, c.type && (e = E(e, c)), c = ha(g), f = d ? [ e ].concat(d) : [ e ], r(c, function(c) {
                c.apply(a, f);
            }));
        }
    }, function(a, c) {
        S.prototype[c] = function(c, e, f) {
            for (var g, h = 0; h < this.length; h++) F(g) ? (g = a(this[h], c, e, f), D(g) && (g = A(g))) : Jb(g, a(this[h], c, e, f));
            return D(g) ? g : this;
        };
        S.prototype.bind = S.prototype.on;
        S.prototype.unbind = S.prototype.off;
    });
    db.prototype = {
        put: function(a, c) {
            this[Na(a, this.nextUid)] = c;
        },
        get: function(a) {
            return this[Na(a, this.nextUid)];
        },
        remove: function(a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c;
        }
    };
    var pe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, qe = /,/, re = /^\s*(_?)(\S+?)\1\s*$/, oe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, eb = z("$injector"), Qe = z("$animate"), Ld = [ "$provide", function(a) {
        this.$$selectors = {};
        this.register = function(c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0)) throw Qe("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d);
        };
        this.classNameFilter = function(a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter;
        };
        this.$get = [ "$timeout", "$$asyncCallback", function(a, d) {
            return {
                enter: function(a, c, g, h) {
                    g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
                    h && d(h);
                },
                leave: function(a, c) {
                    a.remove();
                    c && d(c);
                },
                move: function(a, c, d, h) {
                    this.enter(a, c, d, h);
                },
                addClass: function(a, c, g) {
                    c = G(c) ? c : L(c) ? c.join(" ") : "";
                    r(a, function(a) {
                        pb(a, c);
                    });
                    g && d(g);
                },
                removeClass: function(a, c, g) {
                    c = G(c) ? c : L(c) ? c.join(" ") : "";
                    r(a, function(a) {
                        ob(a, c);
                    });
                    g && d(g);
                },
                setClass: function(a, c, g, h) {
                    r(a, function(a) {
                        pb(a, c);
                        ob(a, g);
                    });
                    h && d(h);
                },
                enabled: v
            };
        } ];
    } ], ja = z("$compile");
    gc.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var we = /^(x[\:\-_]|data[\:\-_])/i, wc = z("$interpolate"), Re = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ze = {
        http: 80,
        https: 443,
        ftp: 21
    }, Sb = z("$location");
    Ac.prototype = Tb.prototype = zc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: tb("$$absUrl"),
        url: function(a) {
            if (F(a)) return this.$$url;
            a = Re.exec(a);
            a[1] && this.path(decodeURIComponent(a[1]));
            (a[2] || a[1]) && this.search(a[3] || "");
            this.hash(a[5] || "");
            return this;
        },
        protocol: tb("$$protocol"),
        host: tb("$$host"),
        port: tb("$$port"),
        path: Bc("$$path", function(a) {
            a = null !== a ? a.toString() : "";
            return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, c) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (G(a) || jb(a)) a = a.toString(), this.$$search = cc(a); else if (T(a)) r(a, function(c, e) {
                    null == c && delete a[e];
                }), this.$$search = a; else throw Sb("isrcharg");
                break;

              default:
                F(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
            }
            this.$$compose();
            return this;
        },
        hash: Bc("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            this.$$replace = !0;
            return this;
        }
    };
    var la = z("$parse"), Ec = {}, ya, Se = Function.prototype.call, Te = Function.prototype.apply, Pc = Function.prototype.bind, hb = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: v,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return D(d) ? D(e) ? d + e : d : D(e) ? e : u;
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (D(d) ? d : 0) - (D(e) ? e : 0);
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c);
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c);
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c);
        },
        "^": function(a, c, d, e) {
            return d(a, c) ^ e(a, c);
        },
        "=": v,
        "===": function(a, c, d, e) {
            return d(a, c) === e(a, c);
        },
        "!==": function(a, c, d, e) {
            return d(a, c) !== e(a, c);
        },
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c);
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c);
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c);
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c);
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c);
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c);
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c);
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c);
        },
        "&": function(a, c, d, e) {
            return d(a, c) & e(a, c);
        },
        "|": function(a, c, d, e) {
            return e(a, c)(a, c, d(a, c));
        },
        "!": function(a, c, d) {
            return !d(a, c);
        }
    }, Ue = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Ub = function(a) {
        this.options = a;
    };
    Ub.prototype = {
        constructor: Ub,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            this.ch = u;
            this.lastCh = ":";
            for (this.tokens = []; this.index < this.text.length; ) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue;
                } else {
                    a = this.ch + this.peek();
                    var c = a + this.peek(2), d = hb[this.ch], e = hb[a], f = hb[c];
                    f ? (this.tokens.push({
                        index: this.index,
                        text: c,
                        fn: f
                    }), this.index += 3) : e ? (this.tokens.push({
                        index: this.index,
                        text: a,
                        fn: e
                    }), this.index += 2) : d ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: d
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch);
        },
        was: function(a) {
            return -1 !== a.indexOf(this.lastCh);
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, c, d) {
            d = d || this.index;
            c = D(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw la("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length; ) {
                var d = x(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent");
                }
                this.index++;
            }
            a *= 1;
            this.tokens.push({
                index: c,
                text: a,
                literal: !0,
                constant: !0,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            for (var a = this, c = "", d = this.index, e, f, g, h; this.index < this.text.length; ) {
                h = this.text.charAt(this.index);
                if ("." === h || this.isIdent(h) || this.isNumber(h)) "." === h && (e = this.index), 
                c += h; else break;
                this.index++;
            }
            if (e) for (f = this.index; f < this.text.length; ) {
                h = this.text.charAt(f);
                if ("(" === h) {
                    g = c.substr(e - d + 1);
                    c = c.substr(0, e - d);
                    this.index = f;
                    break;
                }
                if (this.isWhitespace(h)) f++; else break;
            }
            d = {
                index: d,
                text: c
            };
            if (hb.hasOwnProperty(c)) d.fn = hb[c], d.literal = !0, d.constant = !0; else {
                var k = Dc(c, this.options, this.text);
                d.fn = E(function(a, c) {
                    return k(a, c);
                }, {
                    assign: function(d, e) {
                        return ub(d, c, e, a.text, a.options);
                    }
                });
            }
            this.tokens.push(d);
            g && (this.tokens.push({
                index: e,
                text: "."
            }), this.tokens.push({
                index: e + 1,
                text: g
            }));
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length; ) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ue[g] || g, f = !1; else if ("\\" === g) f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            string: d,
                            literal: !0,
                            constant: !0,
                            fn: function() {
                                return d;
                            }
                        });
                        return;
                    }
                    d += g;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", c);
        }
    };
    var gb = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d;
    };
    gb.ZERO = E(function() {
        return 0;
    }, {
        constant: !0
    });
    gb.prototype = {
        constructor: gb,
        parse: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a;
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")"); else if (this.expect("[")) a = this.arrayDeclaration(); else if (this.expect("{")) a = this.object(); else {
                var c = this.expect();
                (a = c.fn) || this.throwError("not a primary expression", c);
                a.literal = !!c.literal;
                a.constant = !!c.constant;
            }
            for (var d; c = this.expect("(", "[", "."); ) "(" === c.text ? (a = this.functionCall(a, d), 
            d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, c) {
            throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, c, d, e) {
            if (0 < this.tokens.length) {
                var f = this.tokens[0], g = f.text;
                if (g === a || g === c || g === d || g === e || !(a || c || d || e)) return f;
            }
            return !1;
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        },
        unaryFn: function(a, c) {
            return E(function(d, e) {
                return a(d, e, c);
            }, {
                constant: c.constant
            });
        },
        ternaryFn: function(a, c, d) {
            return E(function(e, f) {
                return a(e, f) ? c(e, f) : d(e, f);
            }, {
                constant: a.constant && c.constant && d.constant
            });
        },
        binaryFn: function(a, c, d) {
            return E(function(e, f) {
                return c(e, f, a, d);
            }, {
                constant: a.constant && d.constant
            });
        },
        statements: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                for (var e, f = 0; f < a.length; f++) {
                    var g = a[f];
                    g && (e = g(c, d));
                }
                return e;
            };
        },
        filterChain: function() {
            for (var a = this.expression(), c; ;) if (c = this.expect("|")) a = this.binaryFn(a, c.fn, this.filter()); else return a;
        },
        filter: function() {
            for (var a = this.expect(), c = this.$filter(a.text), d = []; ;) if (a = this.expect(":")) d.push(this.expression()); else {
                var e = function(a, e, h) {
                    h = [ h ];
                    for (var k = 0; k < d.length; k++) h.push(d[k](a, e));
                    return c.apply(a, h);
                };
                return function() {
                    return e;
                };
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary(), c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), 
            c = this.ternary(), function(d, f) {
                return a.assign(d, c(d, f), f);
            }) : a;
        },
        ternary: function() {
            var a = this.logicalOR(), c, d;
            if (this.expect("?")) {
                c = this.assignment();
                if (d = this.expect(":")) return this.ternaryFn(a, c, this.assignment());
                this.throwError("expected :", d);
            } else return a;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(), c; ;) if (c = this.expect("||")) a = this.binaryFn(a, c.fn, this.logicalAND()); else return a;
        },
        logicalAND: function() {
            var a = this.equality(), c;
            if (c = this.expect("&&")) a = this.binaryFn(a, c.fn, this.logicalAND());
            return a;
        },
        equality: function() {
            var a = this.relational(), c;
            if (c = this.expect("==", "!=", "===", "!==")) a = this.binaryFn(a, c.fn, this.equality());
            return a;
        },
        relational: function() {
            var a = this.additive(), c;
            if (c = this.expect("<", ">", "<=", ">=")) a = this.binaryFn(a, c.fn, this.relational());
            return a;
        },
        additive: function() {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-"); ) a = this.binaryFn(a, c.fn, this.multiplicative());
            return a;
        },
        multiplicative: function() {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%"); ) a = this.binaryFn(a, c.fn, this.unary());
            return a;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(gb.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var c = this, d = this.expect().text, e = Dc(d, this.options, this.text);
            return E(function(c, d, h) {
                return e(h || a(c, d));
            }, {
                assign: function(e, g, h) {
                    (h = a(e, h)) || a.assign(e, h = {});
                    return ub(h, d, g, c.text, c.options);
                }
            });
        },
        objectIndex: function(a) {
            var c = this, d = this.expression();
            this.consume("]");
            return E(function(e, f) {
                var g = a(e, f), h = d(e, f), k;
                ka(h, c.text);
                if (!g) return u;
                (g = ma(g[h], c.text)) && (g.then && c.options.unwrapPromises) && (k = g, "$$v" in g || (k.$$v = u, 
                k.then(function(a) {
                    k.$$v = a;
                })), g = g.$$v);
                return g;
            }, {
                assign: function(e, f, g) {
                    var h = ka(d(e, g), c.text);
                    (g = ma(a(e, g), c.text)) || a.assign(e, g = {});
                    return g[h] = f;
                }
            });
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","));
            }
            this.consume(")");
            var e = this;
            return function(f, g) {
                for (var h = [], k = c ? c(f, g) : f, m = 0; m < d.length; m++) h.push(ma(d[m](f, g), e.text));
                m = a(f, g, k) || v;
                ma(k, e.text);
                var l = e.text;
                if (m) {
                    if (m.constructor === m) throw la("isecfn", l);
                    if (m === Se || m === Te || Pc && m === Pc) throw la("isecff", l);
                }
                h = m.apply ? m.apply(k, h) : m(h[0], h[1], h[2], h[3], h[4]);
                return ma(h, e.text);
            };
        },
        arrayDeclaration: function() {
            var a = [], c = !0;
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    var d = this.expression();
                    a.push(d);
                    d.constant || (c = !1);
                } while (this.expect(","));
            }
            this.consume("]");
            return E(function(c, d) {
                for (var g = [], h = 0; h < a.length; h++) g.push(a[h](c, d));
                return g;
            }, {
                literal: !0,
                constant: c
            });
        },
        object: function() {
            var a = [], c = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.expect(), d = d.string || d.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    });
                    e.constant || (c = !1);
                } while (this.expect(","));
            }
            this.consume("}");
            return E(function(c, d) {
                for (var e = {}, k = 0; k < a.length; k++) {
                    var m = a[k];
                    e[m.key] = m.value(c, d);
                }
                return e;
            }, {
                literal: !0,
                constant: c
            });
        }
    };
    var Ce = {}, Be = {}, za = z("$sce"), fa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Y = X.createElement("a"), Gc = xa(W.location.href, !0);
    kc.$inject = [ "$provide" ];
    Hc.$inject = [ "$locale" ];
    Jc.$inject = [ "$locale" ];
    var Mc = ".", Me = {
        yyyy: Z("FullYear", 4),
        yy: Z("FullYear", 2, 0, !0),
        y: Z("FullYear", 1),
        MMMM: vb("Month"),
        MMM: vb("Month", !0),
        MM: Z("Month", 2, 1),
        M: Z("Month", 1, 1),
        dd: Z("Date", 2),
        d: Z("Date", 1),
        HH: Z("Hours", 2),
        H: Z("Hours", 1),
        hh: Z("Hours", 2, -12),
        h: Z("Hours", 1, -12),
        mm: Z("Minutes", 2),
        m: Z("Minutes", 1),
        ss: Z("Seconds", 2),
        s: Z("Seconds", 1),
        sss: Z("Milliseconds", 3),
        EEEE: vb("Day"),
        EEE: vb("Day", !0),
        a: function(a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
        },
        Z: function(a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (Vb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Vb(Math.abs(a % 60), 2));
        }
    }, Le = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Ke = /^\-?\d+$/;
    Ic.$inject = [ "$locale" ];
    var Ie = aa(x), Je = aa(La);
    Kc.$inject = [ "$parse" ];
    var cd = aa({
        restrict: "E",
        compile: function(a, c) {
            8 >= R && (c.href || c.name || c.$set("href", ""), a.append(X.createComment("IE fix")));
            if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
                var f = "[object SVGAnimatedString]" === Ba.call(c.prop("href")) ? "xlink:href" : "href";
                c.on("click", function(a) {
                    c.attr(f) || a.preventDefault();
                });
            };
        }
    }), Fb = {};
    r(rb, function(a, c) {
        if ("multiple" != a) {
            var d = qa("ng-" + c);
            Fb[d] = function() {
                return {
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d], function(a) {
                            g.$set(c, !!a);
                        });
                    }
                };
            };
        }
    });
    r([ "src", "srcset", "href" ], function(a) {
        var c = qa("ng-" + a);
        Fb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === Ba.call(e.prop("href")) && (h = "xlinkHref", 
                    f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function(c) {
                        c ? (f.$set(h, c), R && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
                    });
                }
            };
        };
    });
    var yb = {
        $addControl: v,
        $removeControl: v,
        $setValidity: v,
        $setDirty: v,
        $setPristine: v
    };
    Nc.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var Qc = function(a) {
        return [ "$timeout", function(c) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Nc,
                compile: function() {
                    return {
                        pre: function(a, e, f, g) {
                            if (!f.action) {
                                var h = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                                };
                                sb(e[0], "submit", h);
                                e.on("$destroy", function() {
                                    c(function() {
                                        bb(e[0], "submit", h);
                                    }, 0, !1);
                                });
                            }
                            var k = e.parent().controller("form"), m = f.name || f.ngForm;
                            m && ub(a, m, g, m);
                            if (k) e.on("$destroy", function() {
                                k.$removeControl(g);
                                m && ub(a, m, u, m);
                                E(g, yb);
                            });
                        }
                    };
                }
            };
        } ];
    }, dd = Qc(), qd = Qc(!0), Ve = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, We = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Xe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Rc = {
        text: Ab,
        number: function(a, c, d, e, f, g) {
            Ab(a, c, d, e, f, g);
            e.$parsers.push(function(a) {
                var c = e.$isEmpty(a);
                if (c || Xe.test(a)) return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
                e.$setValidity("number", !1);
                return u;
            });
            Ne(e, "number", Ye, null, e.$$validityState);
            e.$formatters.push(function(a) {
                return e.$isEmpty(a) ? "" : "" + a;
            });
            d.min && (a = function(a) {
                var c = parseFloat(d.min);
                return ua(e, "min", e.$isEmpty(a) || a >= c, a);
            }, e.$parsers.push(a), e.$formatters.push(a));
            d.max && (a = function(a) {
                var c = parseFloat(d.max);
                return ua(e, "max", e.$isEmpty(a) || a <= c, a);
            }, e.$parsers.push(a), e.$formatters.push(a));
            e.$formatters.push(function(a) {
                return ua(e, "number", e.$isEmpty(a) || jb(a), a);
            });
        },
        url: function(a, c, d, e, f, g) {
            Ab(a, c, d, e, f, g);
            a = function(a) {
                return ua(e, "url", e.$isEmpty(a) || Ve.test(a), a);
            };
            e.$formatters.push(a);
            e.$parsers.push(a);
        },
        email: function(a, c, d, e, f, g) {
            Ab(a, c, d, e, f, g);
            a = function(a) {
                return ua(e, "email", e.$isEmpty(a) || We.test(a), a);
            };
            e.$formatters.push(a);
            e.$parsers.push(a);
        },
        radio: function(a, c, d, e) {
            F(d.name) && c.attr("name", ib());
            c.on("click", function() {
                c[0].checked && a.$apply(function() {
                    e.$setViewValue(d.value);
                });
            });
            e.$render = function() {
                c[0].checked = d.value == e.$viewValue;
            };
            d.$observe("value", e.$render);
        },
        checkbox: function(a, c, d, e) {
            var f = d.ngTrueValue, g = d.ngFalseValue;
            G(f) || (f = !0);
            G(g) || (g = !1);
            c.on("click", function() {
                a.$apply(function() {
                    e.$setViewValue(c[0].checked);
                });
            });
            e.$render = function() {
                c[0].checked = e.$viewValue;
            };
            e.$isEmpty = function(a) {
                return a !== f;
            };
            e.$formatters.push(function(a) {
                return a === f;
            });
            e.$parsers.push(function(a) {
                return a ? f : g;
            });
        },
        hidden: v,
        button: v,
        submit: v,
        reset: v,
        file: v
    }, Ye = [ "badInput" ], hc = [ "$browser", "$sniffer", function(a, c) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(d, e, f, g) {
                g && (Rc[x(f.type)] || Rc.text)(d, e, f, g, c, a);
            }
        };
    } ], wb = "ng-valid", xb = "ng-invalid", Ra = "ng-pristine", zb = "ng-dirty", Ze = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, c, d, e, f, g) {
        function h(a, c) {
            c = c ? "-" + nb(c, "-") : "";
            g.removeClass(e, (a ? xb : wb) + c);
            g.addClass(e, (a ? wb : xb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var k = f(d.ngModel), m = k.assign;
        if (!m) throw z("ngModel")("nonassign", d.ngModel, ia(e));
        this.$render = v;
        this.$isEmpty = function(a) {
            return F(a) || "" === a || null === a || a !== a;
        };
        var l = e.inheritedData("$formController") || yb, n = 0, q = this.$error = {};
        e.addClass(Ra);
        h(!0);
        this.$setValidity = function(a, c) {
            q[a] !== !c && (c ? (q[a] && n--, n || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), 
            this.$invalid = !0, this.$valid = !1, n++), q[a] = !c, h(c, a), l.$setValidity(a, c, this));
        };
        this.$setPristine = function() {
            this.$dirty = !1;
            this.$pristine = !0;
            g.removeClass(e, zb);
            g.addClass(e, Ra);
        };
        this.$setViewValue = function(d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Ra), 
            g.addClass(e, zb), l.$setDirty());
            r(this.$parsers, function(a) {
                d = a(d);
            });
            this.$modelValue !== d && (this.$modelValue = d, m(a, d), r(this.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (d) {
                    c(d);
                }
            }));
        };
        var p = this;
        a.$watch(function() {
            var c = k(a);
            if (p.$modelValue !== c) {
                var d = p.$formatters, e = d.length;
                for (p.$modelValue = c; e--; ) c = d[e](c);
                p.$viewValue !== c && (p.$viewValue = c, p.$render());
            }
            return c;
        });
    } ], Fd = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: Ze,
            link: function(a, c, d, e) {
                var f = e[0], g = e[1] || yb;
                g.$addControl(f);
                a.$on("$destroy", function() {
                    g.$removeControl(f);
                });
            }
        };
    }, Hd = aa({
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), ic = function() {
        return {
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var f = function(a) {
                        if (d.required && e.$isEmpty(a)) e.$setValidity("required", !1); else return e.$setValidity("required", !0), 
                        a;
                    };
                    e.$formatters.push(f);
                    e.$parsers.unshift(f);
                    d.$observe("required", function() {
                        f(e.$viewValue);
                    });
                }
            }
        };
    }, Gd = function() {
        return {
            require: "ngModel",
            link: function(a, c, d, e) {
                var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    if (!F(a)) {
                        var c = [];
                        a && r(a.split(f), function(a) {
                            a && c.push($(a));
                        });
                        return c;
                    }
                });
                e.$formatters.push(function(a) {
                    return L(a) ? a.join(", ") : u;
                });
                e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, $e = /^(true|false|\d+)$/, Id = function() {
        return {
            priority: 100,
            compile: function(a, c) {
                return $e.test(c.ngValue) ? function(a, c, f) {
                    f.$set("value", a.$eval(f.ngValue));
                } : function(a, c, f) {
                    a.$watch(f.ngValue, function(a) {
                        f.$set("value", a);
                    });
                };
            }
        };
    }, id = Aa({
        compile: function(a) {
            a.addClass("ng-binding");
            return function(a, d, e) {
                d.data("$binding", e.ngBind);
                a.$watch(e.ngBind, function(a) {
                    d.text(a == u ? "" : a);
                });
            };
        }
    }), kd = [ "$interpolate", function(a) {
        return function(c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function(a) {
                d.text(a);
            });
        };
    } ], jd = [ "$sce", "$parse", function(a, c) {
        return {
            compile: function(d) {
                d.addClass("ng-binding");
                return function(d, f, g) {
                    f.data("$binding", g.ngBindHtml);
                    var h = c(g.ngBindHtml);
                    d.$watch(function() {
                        return (h(d) || "").toString();
                    }, function(c) {
                        f.html(a.getTrustedHtml(h(d)) || "");
                    });
                };
            }
        };
    } ], ld = Wb("", !0), nd = Wb("Odd", 0), md = Wb("Even", 1), od = Aa({
        compile: function(a, c) {
            c.$set("ngCloak", u);
            a.removeClass("ng-cloak");
        }
    }), pd = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], jc = {}, af = {
        blur: !0,
        focus: !0
    };
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = qa("ng-" + a);
        jc[c] = [ "$parse", "$rootScope", function(d, e) {
            return {
                compile: function(f, g) {
                    var h = d(g[c], !0);
                    return function(c, d) {
                        d.on(a, function(d) {
                            var f = function() {
                                h(c, {
                                    $event: d
                                });
                            };
                            af[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
                        });
                    };
                }
            };
        } ];
    });
    var sd = [ "$animate", function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, k, m;
                c.$watch(e.ngIf, function(f) {
                    Wa(f) ? k || (k = c.$new(), g(k, function(c) {
                        c[c.length++] = X.createComment(" end ngIf: " + e.ngIf + " ");
                        h = {
                            clone: c
                        };
                        a.enter(c, d.parent(), d);
                    })) : (m && (m.remove(), m = null), k && (k.$destroy(), k = null), h && (m = Eb(h.clone), 
                    a.leave(m, function() {
                        m = null;
                    }), h = null));
                });
            }
        };
    } ], td = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, c, d, e, f) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Xa.noop,
            compile: function(g, h) {
                var k = h.ngInclude || h.src, m = h.onload || "", l = h.autoscroll;
                return function(g, h, p, r, J) {
                    var w = 0, t, y, u, B = function() {
                        y && (y.remove(), y = null);
                        t && (t.$destroy(), t = null);
                        u && (e.leave(u, function() {
                            y = null;
                        }), y = u, u = null);
                    };
                    g.$watch(f.parseAsResourceUrl(k), function(f) {
                        var k = function() {
                            !D(l) || l && !g.$eval(l) || d();
                        }, p = ++w;
                        f ? (a.get(f, {
                            cache: c
                        }).success(function(a) {
                            if (p === w) {
                                var c = g.$new();
                                r.template = a;
                                a = J(c, function(a) {
                                    B();
                                    e.enter(a, null, h, k);
                                });
                                t = c;
                                u = a;
                                t.$emit("$includeContentLoaded");
                                g.$eval(m);
                            }
                        }).error(function() {
                            p === w && B();
                        }), g.$emit("$includeContentRequested")) : (B(), r.template = null);
                    });
                };
            }
        };
    } ], Jd = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
                d.html(f.template);
                a(d.contents())(c);
            }
        };
    } ], ud = Aa({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }), vd = Aa({
        terminal: !0,
        priority: 1e3
    }), wd = [ "$locale", "$interpolate", function(a, c) {
        var d = /{}/g;
        return {
            restrict: "EA",
            link: function(e, f, g) {
                var h = g.count, k = g.$attr.when && f.attr(g.$attr.when), m = g.offset || 0, l = e.$eval(k) || {}, n = {}, q = c.startSymbol(), p = c.endSymbol(), s = /^when(Minus)?(.+)$/;
                r(g, function(a, c) {
                    s.test(c) && (l[x(c.replace("when", "").replace("Minus", "-"))] = f.attr(g.$attr[c]));
                });
                r(l, function(a, e) {
                    n[e] = c(a.replace(d, q + h + "-" + m + p));
                });
                e.$watch(function() {
                    var c = parseFloat(e.$eval(h));
                    if (isNaN(c)) return "";
                    c in l || (c = a.pluralCat(c - m));
                    return n[c](e, f, !0);
                }, function(a) {
                    f.text(a);
                });
            }
        };
    } ], xd = [ "$parse", "$animate", function(a, c) {
        var d = z("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(e, f, g, h, k) {
                var m = g.ngRepeat, l = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, q, p, s, u, w, t = {
                    $id: Na
                };
                if (!l) throw d("iexp", m);
                g = l[1];
                h = l[2];
                (l = l[3]) ? (n = a(l), q = function(a, c, d) {
                    w && (t[w] = a);
                    t[u] = c;
                    t.$index = d;
                    return n(e, t);
                }) : (p = function(a, c) {
                    return Na(c);
                }, s = function(a) {
                    return a;
                });
                l = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!l) throw d("iidexp", g);
                u = l[3] || l[1];
                w = l[2];
                var y = {};
                e.$watchCollection(h, function(a) {
                    var g, h, l = f[0], n, t = {}, D, C, I, x, G, v, z, F = [];
                    if (Sa(a)) v = a, G = q || p; else {
                        G = q || s;
                        v = [];
                        for (I in a) a.hasOwnProperty(I) && "$" != I.charAt(0) && v.push(I);
                        v.sort();
                    }
                    D = v.length;
                    h = F.length = v.length;
                    for (g = 0; g < h; g++) if (I = a === v ? g : v[g], x = a[I], n = G(I, x, g), Ea(n, "`track by` id"), 
                    y.hasOwnProperty(n)) z = y[n], delete y[n], t[n] = z, F[g] = z; else {
                        if (t.hasOwnProperty(n)) throw r(F, function(a) {
                            a && a.scope && (y[a.id] = a);
                        }), d("dupes", m, n, oa(x));
                        F[g] = {
                            id: n
                        };
                        t[n] = !1;
                    }
                    for (I in y) y.hasOwnProperty(I) && (z = y[I], g = Eb(z.clone), c.leave(g), r(g, function(a) {
                        a.$$NG_REMOVED = !0;
                    }), z.scope.$destroy());
                    g = 0;
                    for (h = v.length; g < h; g++) {
                        I = a === v ? g : v[g];
                        x = a[I];
                        z = F[g];
                        F[g - 1] && (l = F[g - 1].clone[F[g - 1].clone.length - 1]);
                        if (z.scope) {
                            C = z.scope;
                            n = l;
                            do n = n.nextSibling; while (n && n.$$NG_REMOVED);
                            z.clone[0] != n && c.move(Eb(z.clone), null, A(l));
                            l = z.clone[z.clone.length - 1];
                        } else C = e.$new();
                        C[u] = x;
                        w && (C[w] = I);
                        C.$index = g;
                        C.$first = 0 === g;
                        C.$last = g === D - 1;
                        C.$middle = !(C.$first || C.$last);
                        C.$odd = !(C.$even = 0 === (g & 1));
                        z.scope || k(C, function(a) {
                            a[a.length++] = X.createComment(" end ngRepeat: " + m + " ");
                            c.enter(a, null, A(l));
                            l = a;
                            z.scope = C;
                            z.clone = a;
                            t[z.id] = z;
                        });
                    }
                    y = t;
                });
            }
        };
    } ], yd = [ "$animate", function(a) {
        return function(c, d, e) {
            c.$watch(e.ngShow, function(c) {
                a[Wa(c) ? "removeClass" : "addClass"](d, "ng-hide");
            });
        };
    } ], rd = [ "$animate", function(a) {
        return function(c, d, e) {
            c.$watch(e.ngHide, function(c) {
                a[Wa(c) ? "addClass" : "removeClass"](d, "ng-hide");
            });
        };
    } ], zd = Aa(function(a, c, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && r(d, function(a, d) {
                c.css(d, "");
            });
            a && c.css(a);
        }, !0);
    }), Ad = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, f) {
                var g = [], h = [], k = [], m = [];
                c.$watch(e.ngSwitch || e.on, function(d) {
                    var n, q;
                    n = 0;
                    for (q = k.length; n < q; ++n) k[n].remove();
                    n = k.length = 0;
                    for (q = m.length; n < q; ++n) {
                        var p = h[n];
                        m[n].$destroy();
                        k[n] = p;
                        a.leave(p, function() {
                            k.splice(n, 1);
                        });
                    }
                    h.length = 0;
                    m.length = 0;
                    if (g = f.cases["!" + d] || f.cases["?"]) c.$eval(e.change), r(g, function(d) {
                        var e = c.$new();
                        m.push(e);
                        d.transclude(e, function(c) {
                            var e = d.element;
                            h.push(c);
                            a.enter(c, e.parent(), e);
                        });
                    });
                });
            }
        };
    } ], Bd = Aa({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, c, d, e, f) {
            e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
            e.cases["!" + d.ngSwitchWhen].push({
                transclude: f,
                element: c
            });
        }
    }), Cd = Aa({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, c, d, e, f) {
            e.cases["?"] = e.cases["?"] || [];
            e.cases["?"].push({
                transclude: f,
                element: c
            });
        }
    }), Ed = Aa({
        link: function(a, c, d, e, f) {
            if (!f) throw z("ngTransclude")("orphan", ia(c));
            f(function(a) {
                c.empty();
                c.append(a);
            });
        }
    }), ed = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text);
            }
        };
    } ], bf = z("ngOptions"), Dd = aa({
        terminal: !0
    }), fd = [ "$compile", "$parse", function(a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {
            $setViewValue: v
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, c, d) {
                var k = this, m = {}, l = e, n;
                k.databound = d.ngModel;
                k.init = function(a, c, d) {
                    l = a;
                    n = d;
                };
                k.addOption = function(c) {
                    Ea(c, '"option value"');
                    m[c] = !0;
                    l.$viewValue == c && (a.val(c), n.parent() && n.remove());
                };
                k.removeOption = function(a) {
                    this.hasOption(a) && (delete m[a], l.$viewValue == a && this.renderUnknownOption(a));
                };
                k.renderUnknownOption = function(c) {
                    c = "? " + Na(c) + " ?";
                    n.val(c);
                    a.prepend(n);
                    a.val(c);
                    n.prop("selected", !0);
                };
                k.hasOption = function(a) {
                    return m.hasOwnProperty(a);
                };
                c.$on("$destroy", function() {
                    k.renderUnknownOption = v;
                });
            } ],
            link: function(e, g, h, k) {
                function m(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (x.parent() && x.remove(), c.val(a), "" === a && w.prop("selected", !0)) : F(a) && w ? c.val("") : e.renderUnknownOption(a);
                    };
                    c.on("change", function() {
                        a.$apply(function() {
                            x.parent() && x.remove();
                            d.$setViewValue(c.val());
                        });
                    });
                }
                function l(a, c, d) {
                    var e;
                    d.$render = function() {
                        var a = new db(d.$viewValue);
                        r(c.find("option"), function(c) {
                            c.selected = D(a.get(c.value));
                        });
                    };
                    a.$watch(function() {
                        Ca(e, d.$viewValue) || (e = ha(d.$viewValue), d.$render());
                    });
                    c.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            r(c.find("option"), function(c) {
                                c.selected && a.push(c.value);
                            });
                            d.$setViewValue(a);
                        });
                    });
                }
                function n(e, f, g) {
                    function h() {
                        var a = {
                            "": []
                        }, c = [ "" ], d, k, s, u, v;
                        s = g.$modelValue;
                        u = A(e) || [];
                        var F = n ? Xb(u) : u, G, Q, C;
                        Q = {};
                        C = !1;
                        if (p) if (k = g.$modelValue, w && L(k)) for (C = new db([]), d = {}, v = 0; v < k.length; v++) d[m] = k[v], 
                        C.put(w(e, d), k[v]); else C = new db(k);
                        v = C;
                        var E, K;
                        for (C = 0; G = F.length, C < G; C++) {
                            k = C;
                            if (n) {
                                k = F[C];
                                if ("$" === k.charAt(0)) continue;
                                Q[n] = k;
                            }
                            Q[m] = u[k];
                            d = r(e, Q) || "";
                            (k = a[d]) || (k = a[d] = [], c.push(d));
                            p ? d = D(v.remove(w ? w(e, Q) : x(e, Q))) : (w ? (d = {}, d[m] = s, d = w(e, d) === w(e, Q)) : d = s === x(e, Q), 
                            v = v || d);
                            E = l(e, Q);
                            E = D(E) ? E : "";
                            k.push({
                                id: w ? w(e, Q) : n ? F[C] : C,
                                label: E,
                                selected: d
                            });
                        }
                        p || (z || null === s ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !v
                        }) : v || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        Q = 0;
                        for (F = c.length; Q < F; Q++) {
                            d = c[Q];
                            k = a[d];
                            B.length <= Q ? (s = {
                                element: y.clone().attr("label", d),
                                label: k.label
                            }, u = [ s ], B.push(u), f.append(s.element)) : (u = B[Q], s = u[0], s.label != d && s.element.attr("label", s.label = d));
                            E = null;
                            C = 0;
                            for (G = k.length; C < G; C++) d = k[C], (v = u[C + 1]) ? (E = v.element, v.label !== d.label && (E.text(v.label = d.label), 
                            E.prop("label", v.label)), v.id !== d.id && E.val(v.id = d.id), E[0].selected !== d.selected && (E.prop("selected", v.selected = d.selected), 
                            R && E.prop("selected", v.selected))) : ("" === d.id && z ? K = z : (K = t.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), 
                            u.push({
                                element: K,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), q.addOption(d.label, K), E ? E.after(K) : s.element.append(K), E = K);
                            for (C++; u.length > C; ) d = u.pop(), q.removeOption(d.label), d.element.remove();
                        }
                        for (;B.length > Q; ) B.pop()[0].element.remove();
                    }
                    var k;
                    if (!(k = s.match(d))) throw bf("iexp", s, ia(f));
                    var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], r = c(k[3] || ""), x = c(k[2] ? k[1] : m), A = c(k[7]), w = k[8] ? c(k[8]) : null, B = [ [ {
                        element: f,
                        label: ""
                    } ] ];
                    z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                    f.empty();
                    f.on("change", function() {
                        e.$apply(function() {
                            var a, c = A(e) || [], d = {}, k, l, q, r, s, t, v;
                            if (p) for (l = [], r = 0, t = B.length; r < t; r++) for (a = B[r], q = 1, s = a.length; q < s; q++) {
                                if ((k = a[q].element)[0].selected) {
                                    k = k.val();
                                    n && (d[n] = k);
                                    if (w) for (v = 0; v < c.length && (d[m] = c[v], w(e, d) != k); v++) ; else d[m] = c[k];
                                    l.push(x(e, d));
                                }
                            } else if (k = f.val(), "?" == k) l = u; else if ("" === k) l = null; else if (w) for (v = 0; v < c.length; v++) {
                                if (d[m] = c[v], w(e, d) == k) {
                                    l = x(e, d);
                                    break;
                                }
                            } else d[m] = c[k], n && (d[n] = k), l = x(e, d);
                            g.$setViewValue(l);
                            h();
                        });
                    });
                    g.$render = h;
                    e.$watchCollection(A, h);
                    e.$watchCollection(function() {
                        var a = {}, c = A(e);
                        if (c) {
                            for (var d = Array(c.length), f = 0, g = c.length; f < g; f++) a[m] = c[f], d[f] = l(e, a);
                            return d;
                        }
                    }, h);
                    p && e.$watchCollection(function() {
                        return g.$modelValue;
                    }, h);
                }
                if (k[1]) {
                    var q = k[0];
                    k = k[1];
                    var p = h.multiple, s = h.ngOptions, z = !1, w, t = A(X.createElement("option")), y = A(X.createElement("optgroup")), x = t.clone();
                    h = 0;
                    for (var B = g.children(), v = B.length; h < v; h++) if ("" === B[h].value) {
                        w = z = B.eq(h);
                        break;
                    }
                    q.init(k, z, x);
                    p && (k.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    });
                    s ? n(e, g, k) : p ? l(e, g, k) : m(e, g, k, q);
                }
            }
        };
    } ], hd = [ "$interpolate", function(a) {
        var c = {
            addOption: v,
            removeOption: v
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (F(e.value)) {
                    var f = a(d.text(), !0);
                    f || e.$set("value", d.text());
                }
                return function(a, d, e) {
                    var m = d.parent(), l = m.data("$selectController") || m.parent().data("$selectController");
                    l && l.databound ? d.prop("selected", !1) : l = c;
                    f ? a.$watch(f, function(a, c) {
                        e.$set("value", a);
                        a !== c && l.removeOption(c);
                        l.addOption(a);
                    }) : l.addOption(e.value);
                    d.on("$destroy", function() {
                        l.removeOption(e.value);
                    });
                };
            }
        };
    } ], gd = aa({
        restrict: "E",
        terminal: !0
    });
    W.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Fa = W.jQuery) && Fa.fn.on ? (A = Fa, 
    E(Fa.fn, {
        scope: Oa.scope,
        isolateScope: Oa.isolateScope,
        controller: Oa.controller,
        injector: Oa.injector,
        inheritedData: Oa.inheritedData
    }), Gb("remove", !0, !0, !1), Gb("empty", !1, !1, !1), Gb("html", !1, !1, !0)) : A = S, 
    Xa.element = A, Zc(Xa), A(X).ready(function() {
        Wc(X, dc);
    }));
})(window, document);

!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');

"use strict";

angular.module("farmBuild.nutrientCalculator", []);

"use strict";

angular.module("farmBuild.nutrientCalculator").factory("GoogleAnalytic", function() {
    var exports = {};
    exports.username = "anonymous";
    window.farmbuild.nutrientcalculator.GoogleAnalytic = exports;
    return exports;
});

"use strict";

angular.module("farmBuild.nutrientCalculator").factory("MilkSold", function() {
    var MilkSold = {};
    MilkSold.nutrientOfMilkSoldByPercent = function(milkSoldPerYearInLitre, milkProteinPercentage, milkFatPercentage) {
        var milkProteinInKg, milkFatInKg;
        milkSoldPerYearInLitre = parseFloat(milkSoldPerYearInLitre);
        milkProteinPercentage = parseFloat(milkProteinPercentage);
        milkFatPercentage = parseFloat(milkFatPercentage);
        if (!milkSoldPerYearInLitre || !milkProteinPercentage || !milkFatPercentage) {
            return undefined;
        }
        if (!_isNumber(milkSoldPerYearInLitre) || !_isNumber(milkProteinPercentage) || !_isNumber(milkFatPercentage)) {
            return undefined;
        }
        if (milkProteinPercentage + milkFatPercentage > 100) {
            return undefined;
        }
        milkProteinInKg = _percentageToKg(milkProteinPercentage, milkSoldPerYearInLitre);
        milkFatInKg = _percentageToKg(milkFatPercentage, milkSoldPerYearInLitre);
        return _nutrientInMilkSold(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg, milkProteinPercentage, milkFatPercentage);
    };
    MilkSold.nutrientOfMilkSoldByKg = function(milkSoldPerYearInLitre, milkProteinInKg, milkFatInKg) {
        var milkProteinPercentage, milkFatPercentage;
        milkSoldPerYearInLitre = parseFloat(milkSoldPerYearInLitre);
        milkProteinInKg = parseFloat(milkProteinInKg);
        milkFatInKg = parseFloat(milkFatInKg);
        if (!milkSoldPerYearInLitre || !milkFatInKg || !milkProteinInKg) {
            return undefined;
        }
        if (!_isNumber(milkSoldPerYearInLitre) || !_isNumber(milkProteinInKg) || !_isNumber(milkFatInKg)) {
            return undefined;
        }
        if (milkFatInKg + milkProteinInKg > milkSoldPerYearInLitre) {
            return undefined;
        }
        milkFatPercentage = _kgToPercentage(milkFatInKg, milkSoldPerYearInLitre);
        milkProteinPercentage = _kgToPercentage(milkProteinInKg, milkSoldPerYearInLitre);
        return _nutrientInMilkSold(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg, milkProteinPercentage, milkFatPercentage);
    };
    function _nutrientInMilkSold(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg, milkProteinPercentage, milkFatPercentage) {
        var nitrogenPercentage = milkProteinPercentage / 6.33, phosphorusPercentage = .0111 * milkFatPercentage + .05255, potassiumPercentage = .14, sulphurPercentage = .06, nitrogenInKg = milkSoldPerYearInLitre * nitrogenPercentage / 100, potassiumInKg = milkSoldPerYearInLitre * potassiumPercentage / 100, sulphurInKg = milkSoldPerYearInLitre * sulphurPercentage / 100, phosphorusInKg = milkSoldPerYearInLitre * phosphorusPercentage / 100;
        return {
            milkSoldPerYearInLitre: milkSoldPerYearInLitre.toFixed(2),
            milkFatInKg: milkFatInKg.toFixed(2),
            milkFatPercentage: milkFatPercentage.toFixed(2),
            milkProteinInKg: milkProteinInKg.toFixed(2),
            milkProteinPercentage: milkProteinPercentage.toFixed(2),
            nitrogenInKg: nitrogenInKg.toFixed(2),
            nitrogenPercentage: nitrogenPercentage.toFixed(2),
            phosphorusInKg: phosphorusInKg.toFixed(2),
            phosphorusPercentage: phosphorusPercentage.toFixed(2),
            potassiumInKg: potassiumInKg.toFixed(2),
            potassiumPercentage: potassiumPercentage.toFixed(2),
            sulphurInKg: sulphurInKg.toFixed(2),
            sulphurPercentage: sulphurPercentage.toFixed(2)
        };
    }
    function _kgToPercentage(valueInKg, totalInLitre) {
        return valueInKg / totalInLitre * 100;
    }
    function _percentageToKg(valuePercentage, totalInLitre) {
        return valuePercentage * totalInLitre / 100;
    }
    function _isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    window.farmbuild.nutrientcalculator.MilkSold = MilkSold;
    return MilkSold;
});

"use strict";

angular.module("farmBuild.nutrientCalculator").run(function(GoogleAnalytic, MilkSold) {});

window.farmbuild = {
    nutrientcalculator: {}
};

angular.injector([ "ng", "farmBuild.nutrientCalculator" ]);