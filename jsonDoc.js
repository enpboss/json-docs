(function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        g = e.filter,
        d = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        _ = i.bind,
        j = function(n) {
            return n instanceof j ? n : this instanceof j ? void(this._wrapped = n) : new j(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.6.0";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null == n) return n;
        if (s && n.forEach === s) n.forEach(t, e);
        else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a = j.keys(n), u = 0, i = a.length; i > u; u++)
                if (t.call(e, n[a[u]], a[u], n) === r) return; return n
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return k(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var k = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : k(n, function(n) {
            return n === t
        })
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function(n, t) {
        return j.map(n, j.property(t))
    }, j.where = function(n, t) {
        return j.filter(n, j.matches(t))
    }, j.findWhere = function(n, t) {
        return j.find(n, j.matches(t))
    }, j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        var e = -1 / 0,
            u = -1 / 0;
        return A(n, function(n, i, a) {
            var o = t ? t.call(r, n, i, a) : n;
            o > u && (e = n, u = o)
        }), e
    }, j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        var e = 1 / 0,
            u = 1 / 0;
        return A(n, function(n, i, a) {
            var o = t ? t.call(r, n, i, a) : n;
            u > o && (e = n, u = o)
        }), e
    }, j.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    }, j.sample = function(n, t, r) {
        return null == t || r ? (n.length !== +n.length && (n = j.values(n)), n[j.random(n.length - 1)]) : j.shuffle(n).slice(0, Math.max(0, t))
    };
    var E = function(n) {
        return null == n ? j.identity : j.isFunction(n) ? n : j.property(n)
    };
    j.sortBy = function(n, t, r) {
        return t = E(t), j.pluck(j.map(n, function(n, e, u) {
            return {
                value: n,
                index: e,
                criteria: t.call(r, n, e, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = E(r), A(t, function(i, a) {
                var o = r.call(e, i, a, t);
                n(u, o, i)
            }), u
        }
    };
    j.groupBy = F(function(n, t, r) {
        j.has(n, t) ? n[t].push(r) : n[t] = [r]
    }), j.indexBy = F(function(n, t, r) {
        n[t] = r
    }), j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1
    }), j.sortedIndex = function(n, t, r, e) {
        r = E(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : o.call(n, 0, t)
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function(n) {
        return j.filter(n, j.identity)
    };
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function(n, t) {
        return M(n, t, [])
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.partition = function(n, t) {
        var r = [],
            e = [];
        return A(n, function(n) {
            (t(n) ? r : e).push(n)
        }), [r, e]
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.contains(t, n)
            })
        })
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n)
        })
    }, j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, j.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
        return i
    };
    var R = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === j && (e[u] = arguments[r++]);
            for (; r < arguments.length;) e.push(arguments[r++]);
            return n.apply(this, e)
        }
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity),
            function() {
                var e = t.apply(this, arguments);
                return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
            }
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null,
            o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : j.now(), a = null, i = n.apply(e, u), e = u = null
        };
        return function() {
            var l = j.now();
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u), e = u = null) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function(n, t, r) {
        var e, u, i, a, o, c = function() {
            var l = j.now() - a;
            t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u), i = u = null))
        };
        return function() {
            i = this, u = arguments, a = j.now();
            var l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u), i = u = null), o
        }
    }, j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function(n, t) {
        return j.partial(t, n)
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = function(n) {
        if (!j.isObject(n)) return [];
        if (w) return w(n);
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t
    }, j.values = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e
    }, j.pairs = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e
    }, j.invert = function(n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t
    }, j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, j.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
            case "[object String]":
                return n == String(t);
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        var a = n.constructor,
            o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o) && "constructor" in n && "constructor" in t) return !1;
        r.push(n), e.push(t);
        var c = 0,
            f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length)
                for (; c-- && (f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n)
                if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t)
                    if (j.has(t, s) && !c--) break;
                f = !c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function(n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n)
            if (j.has(n, t)) return !1;
        return !0
    }, j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, j.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, j.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n || !j.has(n, "callee"))
    }), "function" != typeof / . / && (j.isFunction = function(n) {
        return "function" == typeof n
    }), j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n != +n
    }, j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function(n) {
        return null === n
    }, j.isUndefined = function(n) {
        return n === void 0
    }, j.has = function(n, t) {
        return f.call(n, t)
    }, j.noConflict = function() {
        return n._ = t, this
    }, j.identity = function(n) {
        return n
    }, j.constant = function(n) {
        return function() {
            return n
        }
    }, j.property = function(n) {
        return function(t) {
            return t[n]
        }
    }, j.matches = function(n) {
        return function(t) {
            if (t === n) return !0;
            for (var r in n)
                if (n[r] !== t[r]) return !1;
            return !0
        }
    }, j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    }, j.now = Date.now || function() {
        return (new Date).getTime()
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    T.unescape = j.invert(T.escape);
    var I = {
        escape: new RegExp("[" + j.keys(T.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(T.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(I[n], function(t) {
                return T[n][t]
            })
        }
    }), j.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "   ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function(n) {
        return j(n).chain()
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function() {
        return j
    })
}).call(this);
/* Riot 1.0.1, @license MIT, (c) 2014 Muut Inc + contributors */
(function(e) {
    "use strict";
    e.observable = function(e) {
        var t = {},
            n = [].slice;
        e.on = function(n, r) {
            if (typeof r === "function") {
                n.replace(/[^\s]+/g, function(e, n) {
                    (t[e] = t[e] || []).push(r);
                    r.typed = n > 0
                })
            }
            return e
        };
        e.off = function(n, r) {
            if (n == "*") t = {};
            else if (r) {
                var o = t[n];
                for (var i = 0, u; u = o && o[i]; ++i) {
                    if (u === r) o.splice(i, 1)
                }
            } else {
                n.replace(/[^\s]+/g, function(e) {
                    t[e] = []
                })
            }
            return e
        };
        e.one = function(t, n) {
            if (n) n.one = true;
            return e.on(t, n)
        };
        e.trigger = function(r) {
            var o = n.call(arguments, 1),
                i = t[r] || [];
            for (var u = 0, f; f = i[u]; ++u) {
                if (!f.busy) {
                    f.busy = true;
                    f.apply(e, f.typed ? [r].concat(o) : o);
                    if (f.one) {
                        i.splice(u, 1);
                        u--
                    }
                    f.busy = false
                }
            }
            return e
        };
        return e
    };
    var t = {},
        n = {
            "\\": "\\\\",
            "\n": "\\n",
            "\r": "\\r",
            "'": "\\'"
        },
        r = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };

    function o(e, t) {
        return e == undefined ? "" : (e + "").replace(/[&\"<>]/g, function(e) {
            return r[e]
        })
    }
    e.render = function(e, r, i) {
        if (i === true) i = o;
        e = e || "";
        return (t[e] = t[e] || new Function("_", "e", "return '" + e.replace(/[\\\n\r']/g, function(e) {
            return n[e]
        }).replace(/{\s*([\w\.]+)\s*}/g, "' + (e?e(_.$1,'$1'):_.$1||(_.$1==undefined?'':_.$1)) + '") + "'"))(r, i)
    };
    if (typeof top != "object") return;
    var i, u = e.observable({}),
        f = window.addEventListener,
        a = document;

    function c(e) {
        e = e.type ? location.hash : e;
        if (e != i) u.trigger("pop", e);
        i = e
    }
    if (f) {
        f("popstate", c, false);
        a.addEventListener("DOMContentLoaded", c, false)
    } else {
        a.attachEvent("onreadystatechange", function() {
            if (a.readyState === "complete") c("")
        })
    }
    e.route = function(e) {
        if (typeof e === "function") return u.on("pop", e);
        if (history.pushState) history.pushState(0, 0, e);
        c(e)
    }
})(typeof top == "object" ? window.riot = {} : exports);

//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//              A A L
//              T C A
//              T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


//
// Showdown namespace
//
var Showdown = {};

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Showdown.converter = function() {

    //
    // Globals:
    //

    // Global hashes, used by various utility routines
    var g_urls;
    var g_titles;
    var g_html_blocks;

    // Used to track when we're inside an ordered or unordered list
    // (see _ProcessListItems() for details):
    var g_list_level = 0;


    this.makeHtml = function(text) {
        //
        // Main function. The order in which other subs are called here is
        // essential. Link and image substitutions need to happen before
        // _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
        // and <img> tags get encoded.
        //

        // Clear the global hashes. If we don't clear these, you get conflicts
        // from other articles when generating a page which contains more than
        // one article (e.g. an index page that shows the N most recent
        // articles):
        g_urls = new Array();
        g_titles = new Array();
        g_html_blocks = new Array();

        // attacklab: Replace ~ with ~T
        // This lets us use tilde as an escape char to avoid md5 hashes
        // The choice of character is arbitray; anything that isn't
        // magic in Markdown will work.
        text = text.replace(/~/g, "~T");

        // attacklab: Replace $ with ~D
        // RegExp interprets $ as a special character
        // when it's in a replacement string
        text = text.replace(/\$/g, "~D");

        // Standardize line endings
        text = text.replace(/\r\n/g, "\n"); // DOS to Unix
        text = text.replace(/\r/g, "\n"); // Mac to Unix

        // Make sure text begins and ends with a couple of newlines:
        text = "\n\n" + text + "\n\n";

        // Convert all tabs to spaces.
        text = _Detab(text);

        // Strip any lines consisting only of spaces and tabs.
        // This makes subsequent regexen easier to write, because we can
        // match consecutive blank lines with /\n+/ instead of something
        // contorted like /[ \t]*\n+/ .
        text = text.replace(/^[ \t]+$/mg, "");

        // Turn block-level HTML blocks into hash entries
        text = _HashHTMLBlocks(text);

        // Strip link definitions, store in hashes.
        text = _StripLinkDefinitions(text);

        text = _RunBlockGamut(text);

        text = _UnescapeSpecialChars(text);

        // attacklab: Restore dollar signs
        text = text.replace(/~D/g, "$$");

        // attacklab: Restore tildes
        text = text.replace(/~T/g, "~");

        return text;
    }


    var _StripLinkDefinitions = function(text) {
        //
        // Strips link definitions from text, stores the URLs and titles in
        // hash references.
        //

        // Link defs are in the form: ^[id]: url "optional title"

        /*
        var text = text.replace(/
                ^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
                  [ \t]*
                  \n?               // maybe *one* newline
                  [ \t]*
                <?(\S+?)>?          // url = $2
                  [ \t]*
                  \n?               // maybe one newline
                  [ \t]*
                (?:
                  (\n*)             // any lines skipped = $3 attacklab: lookbehind removed
                  ["(]
                  (.+?)             // title = $4
                  [")]
                  [ \t]*
                )?                  // title is optional
                (?:\n+|$)
              /gm,
              function(){...});
    */
        var text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|\Z)/gm,
            function(wholeMatch, m1, m2, m3, m4) {
                m1 = m1.toLowerCase();
                g_urls[m1] = _EncodeAmpsAndAngles(m2); // Link IDs are case-insensitive
                if (m3) {
                    // Oops, found blank lines, so it's not a title.
                    // Put back the parenthetical statement we stole.
                    return m3 + m4;
                } else if (m4) {
                    g_titles[m1] = m4.replace(/"/g, "&quot;");
                }

                // Completely remove the definition from the text
                return "";
            }
        );

        return text;
    }


    var _HashHTMLBlocks = function(text) {
        // attacklab: Double up blank lines to reduce lookaround
        text = text.replace(/\n/g, "\n\n");

        // Hashify HTML blocks:
        // We only want to do this for block-level HTML tags, such as headers,
        // lists, and tables. That's because we still want to wrap <p>s around
        // "paragraphs" that are wrapped in non-block-level tags, such as anchors,
        // phrase emphasis, and spans. The list of tags we're looking for is
        // hard-coded:
        var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del"
        var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math"

        // First, look for nested blocks, e.g.:
        //   <div>
        //     <div>
        //     tags for inner block must be indented.
        //     </div>
        //   </div>
        //
        // The outermost tags must start at the left margin for this to match, and
        // the inner nested divs must be indented.
        // We need to do this before the next, more liberal match, because the next
        // match will start at the first `<div>` and stop at the first `</div>`.

        // attacklab: This regex can be expensive when it fails.
        /*
        var text = text.replace(/
        (                       // save in $1
            ^                   // start of line  (with /m)
            <($block_tags_a)    // start tag = $2
            \b                  // word break
                                // attacklab: hack around khtml/pcre bug...
            [^\r]*?\n           // any number of lines, minimally matching
            </\2>               // the matching end tag
            [ \t]*              // trailing spaces/tabs
            (?=\n+)             // followed by a newline
        )                       // attacklab: there are sentinel newlines at end of document
        /gm,function(){...}};
    */
        text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, hashElement);

        //
        // Now match more liberally, simply from `\n<tag>` to `</tag>\n`
        //

        /*
        var text = text.replace(/
        (                       // save in $1
            ^                   // start of line  (with /m)
            <($block_tags_b)    // start tag = $2
            \b                  // word break
                                // attacklab: hack around khtml/pcre bug...
            [^\r]*?             // any number of lines, minimally matching
            .*</\2>             // the matching end tag
            [ \t]*              // trailing spaces/tabs
            (?=\n+)             // followed by a newline
        )                       // attacklab: there are sentinel newlines at end of document
        /gm,function(){...}};
    */
        text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, hashElement);

        // Special case just for <hr />. It was easier to make a special case than
        // to make the other regex more complicated.

        /*
        text = text.replace(/
        (                       // save in $1
            \n\n                // Starting after a blank line
            [ ]{0,3}
            (<(hr)              // start tag = $2
            \b                  // word break
            ([^<>])*?           //
            \/?>)               // the matching end tag
            [ \t]*
            (?=\n{2,})          // followed by a blank line
        )
        /g,hashElement);
    */
        text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, hashElement);

        // Special case for standalone HTML comments:

        /*
        text = text.replace(/
        (                       // save in $1
            \n\n                // Starting after a blank line
            [ ]{0,3}            // attacklab: g_tab_width - 1
            <!
            (--[^\r]*?--\s*)+
            >
            [ \t]*
            (?=\n{2,})          // followed by a blank line
        )
        /g,hashElement);
    */
        text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, hashElement);

        // PHP and ASP-style processor instructions (<?...?> and <%...%>)

        /*
        text = text.replace(/
        (?:
            \n\n                // Starting after a blank line
        )
        (                       // save in $1
            [ ]{0,3}            // attacklab: g_tab_width - 1
            (?:
                <([?%])         // $2
                [^\r]*?
                \2>
            )
            [ \t]*
            (?=\n{2,})          // followed by a blank line
        )
        /g,hashElement);
    */
        text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, hashElement);

        // attacklab: Undo double lines (see comment at top of this function)
        text = text.replace(/\n\n/g, "\n");
        return text;
    }

    var hashElement = function(wholeMatch, m1) {
        var blockText = m1;

        // Undo double lines
        blockText = blockText.replace(/\n\n/g, "\n");
        blockText = blockText.replace(/^\n/, "");

        // strip trailing blank lines
        blockText = blockText.replace(/\n+$/g, "");

        // Replace the element text with a marker ("~KxK" where x is its key)
        blockText = "\n\n~K" + (g_html_blocks.push(blockText) - 1) + "K\n\n";

        return blockText;
    };

    var _RunBlockGamut = function(text) {
        //
        // These are all the transformations that form block-level
        // tags like paragraphs, headers, and list items.
        //
        text = _DoHeaders(text);

        // Do Horizontal Rules:
        var key = hashBlock("<hr />");
        text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
        text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
        text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, key);

        text = _DoLists(text);
        text = _DoCodeBlocks(text);
        text = _DoBlockQuotes(text);

        // We already ran _HashHTMLBlocks() before, in Markdown(), but that
        // was to escape raw HTML in the original Markdown source. This time,
        // we're escaping the markup we've just created, so that we don't wrap
        // <p> tags around block-level tags.
        text = _HashHTMLBlocks(text);
        text = _FormParagraphs(text);

        return text;
    }


    var _RunSpanGamut = function(text) {
        //
        // These are all the transformations that occur *within* block-level
        // tags like paragraphs, headers, and list items.
        //

        text = _DoCodeSpans(text);
        text = _EscapeSpecialCharsWithinTagAttributes(text);
        text = _EncodeBackslashEscapes(text);

        // Process anchor and image tags. Images must come first,
        // because ![foo][f] looks like an anchor.
        text = _DoImages(text);
        text = _DoAnchors(text);

        // Make links out of things like `<http://example.com/>`
        // Must come after _DoAnchors(), because you can use < and >
        // delimiters in inline links like [this](<url>).
        text = _DoAutoLinks(text);
        text = _EncodeAmpsAndAngles(text);
        text = _DoItalicsAndBold(text);

        // Do hard breaks:
        text = text.replace(/  +\n/g, " <br />\n");

        return text;
    }

    var _EscapeSpecialCharsWithinTagAttributes = function(text) {
        //
        // Within tags -- meaning between < and > -- encode [\ ` * _] so they
        // don't conflict with their use in Markdown for code, italics and strong.
        //

        // Build a regex to find HTML tags and comments.  See Friedl's
        // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
        var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

        text = text.replace(regex, function(wholeMatch) {
            var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`");
            tag = escapeCharacters(tag, "\\`*_");
            return tag;
        });

        return text;
    }

    var _DoAnchors = function(text) {
        //
        // Turn Markdown link shortcuts into XHTML <a> tags.
        //
        //
        // First, handle reference-style links: [link text] [id]
        //

        /*
        text = text.replace(/
        (                           // wrap whole match in $1
            \[
            (
                (?:
                    \[[^\]]*\]      // allow brackets nested one level
                    |
                    [^\[]           // or anything else
                )*
            )
            \]

            [ ]?                    // one optional space
            (?:\n[ ]*)?             // one optional newline followed by spaces

            \[
            (.*?)                   // id = $3
            \]
        )()()()()                   // pad remaining backreferences
        /g,_DoAnchors_callback);
    */
        text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);

        //
        // Next, inline-style links: [link text](url "optional title")
        //

        /*
        text = text.replace(/
            (                       // wrap whole match in $1
                \[
                (
                    (?:
                        \[[^\]]*\]  // allow brackets nested one level
                    |
                    [^\[\]]         // or anything else
                )
            )
            \]
            \(                      // literal paren
            [ \t]*
            ()                      // no id, so leave $3 empty
            <?(.*?)>?               // href = $4
            [ \t]*
            (                       // $5
                (['"])              // quote char = $6
                (.*?)               // Title = $7
                \6                  // matching quote
                [ \t]*              // ignore any spaces/tabs between closing quote and )
            )?                      // title is optional
            \)
        )
        /g,writeAnchorTag);
    */
        text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);

        //
        // Last, handle reference-style shortcuts: [link text]
        // These must come last in case you've also got [link test][1]
        // or [link test](/foo)
        //

        /*
        text = text.replace(/
        (                           // wrap whole match in $1
            \[
            ([^\[\]]+)              // link text = $2; can't contain '[' or ']'
            \]
        )()()()()()                 // pad rest of backreferences
        /g, writeAnchorTag);
    */
        text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

        return text;
    }

    var writeAnchorTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
        if (m7 == undefined) m7 = "";
        var whole_match = m1;
        var link_text = m2;
        var link_id = m3.toLowerCase();
        var url = m4;
        var title = m7;

        if (url == "") {
            if (link_id == "") {
                // lower-case and turn embedded newlines into spaces
                link_id = link_text.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + link_id;

            if (g_urls[link_id] != undefined) {
                url = g_urls[link_id];
                if (g_titles[link_id] != undefined) {
                    title = g_titles[link_id];
                }
            } else {
                if (whole_match.search(/\(\s*\)$/m) > -1) {
                    // Special case for explicit empty url
                    url = "";
                } else {
                    return whole_match;
                }
            }
        }

        url = escapeCharacters(url, "*_");
        var result = "<a href=\"" + url + "\"";

        if (title != "") {
            title = title.replace(/"/g, "&quot;");
            title = escapeCharacters(title, "*_");
            result += " title=\"" + title + "\"";
        }

        result += ">" + link_text + "</a>";

        return result;
    }


    var _DoImages = function(text) {
        //
        // Turn Markdown image shortcuts into <img> tags.
        //

        //
        // First, handle reference-style labeled images: ![alt text][id]
        //

        /*
        text = text.replace(/
        (                       // wrap whole match in $1
            !\[
            (.*?)               // alt text = $2
            \]

            [ ]?                // one optional space
            (?:\n[ ]*)?         // one optional newline followed by spaces

            \[
            (.*?)               // id = $3
            \]
        )()()()()               // pad rest of backreferences
        /g,writeImageTag);
    */
        text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);

        //
        // Next, handle inline images:  ![alt text](url "optional title")
        // Don't forget: encode * and _

        /*
        text = text.replace(/
        (                       // wrap whole match in $1
            !\[
            (.*?)               // alt text = $2
            \]
            \s?                 // One optional whitespace character
            \(                  // literal paren
            [ \t]*
            ()                  // no id, so leave $3 empty
            <?(\S+?)>?          // src url = $4
            [ \t]*
            (                   // $5
                (['"])          // quote char = $6
                (.*?)           // title = $7
                \6              // matching quote
                [ \t]*
            )?                  // title is optional
        \)
        )
        /g,writeImageTag);
    */
        text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeImageTag);

        return text;
    }

    var writeImageTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
        var whole_match = m1;
        var alt_text = m2;
        var link_id = m3.toLowerCase();
        var url = m4;
        var title = m7;

        if (!title) title = "";

        if (url == "") {
            if (link_id == "") {
                // lower-case and turn embedded newlines into spaces
                link_id = alt_text.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + link_id;

            if (g_urls[link_id] != undefined) {
                url = g_urls[link_id];
                if (g_titles[link_id] != undefined) {
                    title = g_titles[link_id];
                }
            } else {
                return whole_match;
            }
        }

        alt_text = alt_text.replace(/"/g, "&quot;");
        url = escapeCharacters(url, "*_");
        var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

        // attacklab: Markdown.pl adds empty title attributes to images.
        // Replicate this bug.

        //if (title != "") {
        title = title.replace(/"/g, "&quot;");
        title = escapeCharacters(title, "*_");
        result += " title=\"" + title + "\"";
        //}

        result += " />";

        return result;
    }


    var _DoHeaders = function(text) {

        // Setext-style headers:
        //  Header 1
        //  ========
        //
        //  Header 2
        //  --------
        //
        text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            function(wholeMatch, m1) {
                return hashBlock("<h1>" + _RunSpanGamut(m1) + "</h1>");
            });

        text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
            function(matchFound, m1) {
                return hashBlock("<h2>" + _RunSpanGamut(m1) + "</h2>");
            });

        // atx-style headers:
        //  # Header 1
        //  ## Header 2
        //  ## Header 2 with closing hashes ##
        //  ...
        //  ###### Header 6
        //

        /*
        text = text.replace(/
            ^(\#{1,6})              // $1 = string of #'s
            [ \t]*
            (.+?)                   // $2 = Header text
            [ \t]*
            \#*                     // optional closing #'s (not counted)
            \n+
        /gm, function() {...});
    */

        text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
            function(wholeMatch, m1, m2) {
                var h_level = m1.length;
                return hashBlock("<h" + h_level + ">" + _RunSpanGamut(m2) + "</h" + h_level + ">");
            });

        return text;
    }

    // This declaration keeps Dojo compressor from outputting garbage:
    var _ProcessListItems;

    var _DoLists = function(text) {
        //
        // Form HTML ordered (numbered) and unordered (bulleted) lists.
        //

        // attacklab: add sentinel to hack around khtml/safari bug:
        // http://bugs.webkit.org/show_bug.cgi?id=11231
        text += "~0";

        // Re-usable pattern to match any entirel ul or ol list:

        /*
        var whole_list = /
        (                                   // $1 = whole list
            (                               // $2
                [ ]{0,3}                    // attacklab: g_tab_width - 1
                ([*+-]|\d+[.])              // $3 = first list item marker
                [ \t]+
            )
            [^\r]+?
            (                               // $4
                ~0                          // sentinel for workaround; should be $
            |
                \n{2,}
                (?=\S)
                (?!                         // Negative lookahead for another list item marker
                    [ \t]*
                    (?:[*+-]|\d+[.])[ \t]+
                )
            )
        )/g
    */
        var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

        if (g_list_level) {
            text = text.replace(whole_list, function(wholeMatch, m1, m2) {
                var list = m1;
                var list_type = (m2.search(/[*+-]/g) > -1) ? "ul" : "ol";

                // Turn double returns into triple returns, so that we can make a
                // paragraph for the last item in a list, if necessary:
                list = list.replace(/\n{2,}/g, "\n\n\n");;
                var result = _ProcessListItems(list);

                // Trim any trailing whitespace, to put the closing `</$list_type>`
                // up on the preceding line, to get it past the current stupid
                // HTML block parser. This is a hack to work around the terrible
                // hack that is the HTML block parser.
                result = result.replace(/\s+$/, "");
                result = "<" + list_type + ">" + result + "</" + list_type + ">\n";
                return result;
            });
        } else {
            whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
            text = text.replace(whole_list, function(wholeMatch, m1, m2, m3) {
                var runup = m1;
                var list = m2;

                var list_type = (m3.search(/[*+-]/g) > -1) ? "ul" : "ol";
                // Turn double returns into triple returns, so that we can make a
                // paragraph for the last item in a list, if necessary:
                var list = list.replace(/\n{2,}/g, "\n\n\n");;
                var result = _ProcessListItems(list);
                result = runup + "<" + list_type + ">\n" + result + "</" + list_type + ">\n";
                return result;
            });
        }

        // attacklab: strip sentinel
        text = text.replace(/~0/, "");

        return text;
    }

    _ProcessListItems = function(list_str) {
        //
        //  Process the contents of a single ordered or unordered list, splitting it
        //  into individual list items.
        //
        // The $g_list_level global keeps track of when we're inside a list.
        // Each time we enter a list, we increment it; when we leave a list,
        // we decrement. If it's zero, we're not in a list anymore.
        //
        // We do this because when we're not inside a list, we want to treat
        // something like this:
        //
        //    I recommend upgrading to version
        //    8. Oops, now this line is treated
        //    as a sub-list.
        //
        // As a single paragraph, despite the fact that the second line starts
        // with a digit-period-space sequence.
        //
        // Whereas when we're inside a list (or sub-list), that line will be
        // treated as the start of a sub-list. What a kludge, huh? This is
        // an aspect of Markdown's syntax that's hard to parse perfectly
        // without resorting to mind-reading. Perhaps the solution is to
        // change the syntax rules such that sub-lists must start with a
        // starting cardinal number; e.g. "1." or "a.".

        g_list_level++;

        // trim trailing blank lines:
        list_str = list_str.replace(/\n{2,}$/, "\n");

        // attacklab: add sentinel to emulate \z
        list_str += "~0";

        /*
        list_str = list_str.replace(/
            (\n)?                           // leading line = $1
            (^[ \t]*)                       // leading whitespace = $2
            ([*+-]|\d+[.]) [ \t]+           // list marker = $3
            ([^\r]+?                        // list item text   = $4
            (\n{1,2}))
            (?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
        /gm, function(){...});
    */
        list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
            function(wholeMatch, m1, m2, m3, m4) {
                var item = m4;
                var leading_line = m1;
                var leading_space = m2;

                if (leading_line || (item.search(/\n{2,}/) > -1)) {
                    item = _RunBlockGamut(_Outdent(item));
                } else {
                    // Recursion for sub-lists:
                    item = _DoLists(_Outdent(item));
                    item = item.replace(/\n$/, ""); // chomp(item)
                    item = _RunSpanGamut(item);
                }

                return "<li>" + item + "</li>\n";
            }
        );

        // attacklab: strip sentinel
        list_str = list_str.replace(/~0/g, "");

        g_list_level--;
        return list_str;
    }


    var _DoCodeBlocks = function(text) {
        //
        //  Process Markdown `<pre><code>` blocks.
        //

        /*
        text = text.replace(text,
            /(?:\n\n|^)
            (                               // $1 = the code block -- one or more lines, starting with a space/tab
                (?:
                    (?:[ ]{4}|\t)           // Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
                    .*\n+
                )+
            )
            (\n*[ ]{0,3}[^ \t\n]|(?=~0))    // attacklab: g_tab_width
        /g,function(){...});
    */

        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "~0";

        text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
            function(wholeMatch, m1, m2) {
                var codeblock = m1;
                var nextChar = m2;

                codeblock = _EncodeCode(_Outdent(codeblock));
                codeblock = _Detab(codeblock);
                codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
                codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace

                codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

                return hashBlock(codeblock) + nextChar;
            }
        );

        // attacklab: strip sentinel
        text = text.replace(/~0/, "");

        return text;
    }

    var hashBlock = function(text) {
        text = text.replace(/(^\n+|\n+$)/g, "");
        return "\n\n~K" + (g_html_blocks.push(text) - 1) + "K\n\n";
    }


    var _DoCodeSpans = function(text) {
        //
        //   *  Backtick quotes are used for <code></code> spans.
        //
        //   *  You can use multiple backticks as the delimiters if you want to
        //   include literal backticks in the code span. So, this input:
        //
        //       Just type ``foo `bar` baz`` at the prompt.
        //
        //     Will translate to:
        //
        //       <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
        //
        //  There's no arbitrary limit to the number of backticks you
        //  can use as delimters. If you need three consecutive backticks
        //  in your code, use four for delimiters, etc.
        //
        //  *  You can use spaces to get literal backticks at the edges:
        //
        //       ... type `` `bar` `` ...
        //
        //     Turns to:
        //
        //       ... type <code>`bar`</code> ...
        //

        /*
        text = text.replace(/
            (^|[^\\])                   // Character before opening ` can't be a backslash
            (`+)                        // $2 = Opening run of `
            (                           // $3 = The code block
                [^\r]*?
                [^`]                    // attacklab: work around lack of lookbehind
            )
            \2                          // Matching closer
            (?!`)
        /gm, function(){...});
    */

        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function(wholeMatch, m1, m2, m3, m4) {
                var c = m3;
                c = c.replace(/^([ \t]*)/g, ""); // leading whitespace
                c = c.replace(/[ \t]*$/g, ""); // trailing whitespace
                c = _EncodeCode(c);
                return m1 + "<code>" + c + "</code>";
            });

        return text;
    }


    var _EncodeCode = function(text) {
        //
        // Encode/escape certain characters inside Markdown code runs.
        // The point is that in code, these characters are literals,
        // and lose their special Markdown meanings.
        //
        // Encode all ampersands; HTML entities are not
        // entities within a Markdown code span.
        text = text.replace(/&/g, "&amp;");

        // Do the angle bracket song and dance:
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");

        // Now, escape characters that are magic in Markdown:
        text = escapeCharacters(text, "\*_{}[]\\", false);

        // jj the line above breaks this:
        //---

        //* Item

        //   1. Subitem

        //            special char: *
        //---

        return text;
    }


    var _DoItalicsAndBold = function(text) {

        // <strong> must go first:
        text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,
            "<strong>$2</strong>");

        text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,
            "<em>$2</em>");

        return text;
    }


    var _DoBlockQuotes = function(text) {

        /*
        text = text.replace(/
        (                               // Wrap whole match in $1
            (
                ^[ \t]*>[ \t]?          // '>' at the start of a line
                .+\n                    // rest of the first line
                (.+\n)*                 // subsequent consecutive lines
                \n*                     // blanks
            )+
        )
        /gm, function(){...});
    */

        text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
            function(wholeMatch, m1) {
                var bq = m1;

                // attacklab: hack around Konqueror 3.5.4 bug:
                // "----------bug".replace(/^-/g,"") == "bug"

                bq = bq.replace(/^[ \t]*>[ \t]?/gm, "~0"); // trim one level of quoting

                // attacklab: clean up hack
                bq = bq.replace(/~0/g, "");

                bq = bq.replace(/^[ \t]+$/gm, ""); // trim whitespace-only lines
                bq = _RunBlockGamut(bq); // recurse

                bq = bq.replace(/(^|\n)/g, "$1  ");
                // These leading spaces screw with <pre> content, so we need to fix that:
                bq = bq.replace(
                    /(\s*<pre>[^\r]+?<\/pre>)/gm,
                    function(wholeMatch, m1) {
                        var pre = m1;
                        // attacklab: hack around Konqueror 3.5.4 bug:
                        pre = pre.replace(/^  /mg, "~0");
                        pre = pre.replace(/~0/g, "");
                        return pre;
                    });

                return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
            });
        return text;
    }


    var _FormParagraphs = function(text) {
        //
        //  Params:
        //    $text - string to process with html <p> tags
        //

        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");

        var grafs = text.split(/\n{2,}/g);
        var grafsOut = new Array();

        //
        // Wrap <p> tags.
        //
        var end = grafs.length;
        for (var i = 0; i < end; i++) {
            var str = grafs[i];

            // if this is an HTML marker, copy it
            if (str.search(/~K(\d+)K/g) >= 0) {
                grafsOut.push(str);
            } else if (str.search(/\S/) >= 0) {
                str = _RunSpanGamut(str);
                str = str.replace(/^([ \t]*)/g, "<p>");
                str += "</p>"
                grafsOut.push(str);
            }

        }

        //
        // Unhashify HTML blocks
        //
        end = grafsOut.length;
        for (var i = 0; i < end; i++) {
            // if this is a marker for an html block...
            while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
                var blockText = g_html_blocks[RegExp.$1];
                blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs
                grafsOut[i] = grafsOut[i].replace(/~K\d+K/, blockText);
            }
        }

        return grafsOut.join("\n\n");
    }


    var _EncodeAmpsAndAngles = function(text) {
        // Smart processing for ampersands and angle brackets that need to be encoded.

        // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
        //   http://bumppo.net/projects/amputator/
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");

        // Encode naked <'s
        text = text.replace(/<(?![a-z\/?\$!])/gi, "&lt;");

        return text;
    }


    var _EncodeBackslashEscapes = function(text) {
        //
        //   Parameter:  String.
        //   Returns:   The string, with after processing the following backslash
        //             escape sequences.
        //

        // attacklab: The polite way to do this is with the new
        // escapeCharacters() function:
        //
        //  text = escapeCharacters(text,"\\",true);
        //  text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
        //
        // ...but we're sidestepping its use of the (slow) RegExp constructor
        // as an optimization for Firefox.  This function gets called a LOT.

        text = text.replace(/\\(\\)/g, escapeCharacters_callback);
        text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, escapeCharacters_callback);
        return text;
    }


    var _DoAutoLinks = function(text) {

        text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, "<a href=\"$1\">$1</a>");

        // Email addresses: <address@domain.foo>

        /*
        text = text.replace(/
            <
            (?:mailto:)?
            (
                [-.\w]+
                \@
                [-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
            )
            >
        /gi, _DoAutoLinks_callback());
    */
        text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            function(wholeMatch, m1) {
                return _EncodeEmailAddress(_UnescapeSpecialChars(m1));
            }
        );

        return text;
    }


    var _EncodeEmailAddress = function(addr) {
        //
        //  Input: an email address, e.g. "foo@example.com"
        //
        //  Output: the email address as a mailto link, with each character
        //  of the address encoded as either a decimal or hex entity, in
        //  the hopes of foiling most address harvesting spam bots. E.g.:
        //
        //  <a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
        //     x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
        //     &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
        //
        //  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
        //  mailing list: <http://tinyurl.com/yu7ue>
        //

        // attacklab: why can't javascript speak hex?
        function char2hex(ch) {
            var hexDigits = '0123456789ABCDEF';
            var dec = ch.charCodeAt(0);
            return (hexDigits.charAt(dec >> 4) + hexDigits.charAt(dec & 15));
        }

        var encode = [

            function(ch) {
                return "&#" + ch.charCodeAt(0) + ";";
            },
            function(ch) {
                return "&#x" + char2hex(ch) + ";";
            },
            function(ch) {
                return ch;
            }
        ];

        addr = "mailto:" + addr;

        addr = addr.replace(/./g, function(ch) {
            if (ch == "@") {
                // this *must* be encoded. I insist.
                ch = encode[Math.floor(Math.random() * 2)](ch);
            } else if (ch != ":") {
                // leave ':' alone (to spot mailto: later)
                var r = Math.random();
                // roughly 10% raw, 45% hex, 45% dec
                ch = (
                    r > .9 ? encode[2](ch) :
                    r > .45 ? encode[1](ch) :
                    encode[0](ch)
                );
            }
            return ch;
        });

        addr = "<a href=\"" + addr + "\">" + addr + "</a>";
        addr = addr.replace(/">.+:/g, "\">"); // strip the mailto: from the visible part

        return addr;
    }


    var _UnescapeSpecialChars = function(text) {
        //
        // Swap back in all the special characters we've hidden.
        //
        text = text.replace(/~E(\d+)E/g,
            function(wholeMatch, m1) {
                var charCodeToReplace = parseInt(m1);
                return String.fromCharCode(charCodeToReplace);
            }
        );
        return text;
    }


    var _Outdent = function(text) {
        //
        // Remove one level of line-leading tabs or spaces
        //

        // attacklab: hack around Konqueror 3.5.4 bug:
        // "----------bug".replace(/^-/g,"") == "bug"

        text = text.replace(/^(\t|[ ]{1,4})/gm, "~0"); // attacklab: g_tab_width

        // attacklab: clean up hack
        text = text.replace(/~0/g, "")

        return text;
    }

    var _Detab = function(text) {
        // attacklab: Detab's completely rewritten for speed.
        // In perl we could fix it by anchoring the regexp with \G.
        // In javascript we're less fortunate.

        // expand first n-1 tabs
        text = text.replace(/\t(?=\t)/g, "    "); // attacklab: g_tab_width

        // replace the nth with two sentinels
        text = text.replace(/\t/g, "~A~B");

        // use the sentinel to anchor our regex so it doesn't explode
        text = text.replace(/~B(.+?)~A/g,
            function(wholeMatch, m1, m2) {
                var leadingText = m1;
                var numSpaces = 4 - leadingText.length % 4; // attacklab: g_tab_width

                // there *must* be a better way to do this:
                for (var i = 0; i < numSpaces; i++) leadingText += " ";

                return leadingText;
            }
        );

        // clean up sentinels
        text = text.replace(/~A/g, "    "); // attacklab: g_tab_width
        text = text.replace(/~B/g, "");

        return text;
    }


    //
    //  attacklab: Utility functions
    //


    var escapeCharacters = function(text, charsToEscape, afterBackslash) {
        // First we have to escape the escape characters so that
        // we can build a character class out of them
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";

        if (afterBackslash) {
            regexString = "\\\\" + regexString;
        }

        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharacters_callback);

        return text;
    }


    var escapeCharacters_callback = function(wholeMatch, m1) {
        var charCodeToEscape = m1.charCodeAt(0);
        return "~E" + charCodeToEscape + "E";
    }

} // end of Showdown.converter

var template = {
    nodeProperty: '<span class="node-property {bold}">{property} {dots}</span>',
    nodeType: '<span class="node-type {type}">{type}</span>',
    nodeBracketLeft: '<span class="node-top node-bracket">{bracketLeft}</span>',
    nodeBracketRight: '<span class="node-down node-bracket">{bracketRight}</span>',
    nodeBracketClosed: '<span class="node-closed node-bracket">{bracketClosed}</span>',
    nodeComment: '<span class="node-comment">{description}</span>',
    nodeBodyComment: '<span class="comment">{comment}</span>',
    nodeLink: '<a href="{link}" target="_blank">See all types</a>',
    nodeContainer: '<span class="node-container {lvl}">' +
        '<span class="node-expand">' +
        '{type}' +
        '{property}' +
        '{bracketLeft}' +
        '{bracketClosed}' +
        '</span>' +
        '<span class="node-content-wrapper {closed}">' +
        '<ul class="node-body">{body}</ul>' +
        '</span>' +
        '{bracketRight}' +
        '</span>',
    nodeBody: '<span class="leaf-container">' +
        '<li>{comment}</li>' +
        '<li>{optional}</li>' +
        '<li>{link}</li>' +
        '<li>{default}</li>' +
        '<li>{minimum}</li>' +
        '<li>{prop}</li>' +
        '<li>{maximum}</li>' +
        '<li>{accepted}</li>' +
        '</span>',
    defaultValue: '<span>default: <span class="string">{default}</span></span>,&nbsp;',
    minimumValue: '<span>{name}: <span class="string">{value}</span></span>,&nbsp;',
    nodeProp: '<span>{prop}: <span class="string">{val}</span></span>,&nbsp;',
    maximumValue: '<span>{name}: <span class="string">{value}</span></span>,&nbsp;',
    acceptedValues: '<span>accepted values: [ <span class="string">{accepted}</span> ]</span>,&nbsp;',
    optional: '<span class="date">{optional}</span>'
}

var body = '';


var mkd_converter = new Showdown.converter();

var util = {
    exists: function(v) {
        if (typeof v === 'undefined') {
            return false;
        } else {
            return true;
        }
    },
    isObject: function(v) {
        return Object.prototype.toString.call(v) === '[object Object]';
    },
    isArray: function(v) {
        return Object.prototype.toString.call(v) === '[object Array]';
    },
    objectLength: function(a) {
        var count = 0;
        var i;

        for (i in a) {
            if (a.hasOwnProperty(i)) {
                count++;
            }
        }
        return count;
    },
    syntaxHighlight: function(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
};

var riotjson = $('#riot'),
    tmpl_container = template.nodeContainer,
    tmpl_property = template.nodeProperty,
    tmpl_type = template.nodeType,
    tmpl_li = template.nodeBody,
    tmpl_bracketLeft = template.nodeBracketLeft,
    tmpl_bracketClosed = template.nodeBracketClosed,
    tmpl_comment = template.nodeComment,
    tmpl_body_comment = template.nodeBodyComment,
    tmpl_bracketRight = template.nodeBracketRight,
    tmpl_default = template.defaultValue,
    tmpl_accepted = template.acceptedValues,
    tmpl_optional = template.optional,
    tmpl_minimum = template.minimumValue,
    tmpl_maximum = template.maximumValue,
    tmpl_link = template.nodeLink,
    tmpl_prop = template.nodeProp,
    r_container = function(datac) {
        var datac = datac || {
            type: null,
            property: null,
            description: null,
            body: null,
            simpledesc: null,
            lvl: '',
            bracketLeft: r_bracketLeft('{'),
            bracketRight: r_bracketRight('}'),
        };
        return riot.render(tmpl_container, datac);
    },
    r_link = function(e) {
        if (util.exists(e)) {
            return riot.render(tmpl_link, {
                link: e
            });
        } else {
            return '';
        }
    },
    r_prop = function(prop, value) {
        if (util.exists(value)) {
            return riot.render(tmpl_prop, {
                prop: prop,
                val: value
            });
        } else {
            return '';
        }
    },
    r_default = function(e) {
        if (util.exists(e)) {
            return riot.render(tmpl_default, {
                default: e
            });
        } else {
            return '';
        }
    },
    r_minimum = function(prop, e) {
        if (util.exists(e)) {
            return riot.render(tmpl_minimum, {
                name: prop,
                value: e
            });
        } else {
            return '';
        }
    },
    r_maximum = function(prop, e) {
        if (util.exists(e)) {
            return riot.render(tmpl_maximum, {
                name: prop,
                value: e
            });
        } else {
            return '';
        }
    },
    r_optional = function(e, span) {
        if (util.exists(span)) {
            span = '<span class="node-gray">//</span>';
        } else {
            span = '';
        }
        if (util.exists(e) && e) {
            return riot.render(tmpl_optional, {
                optional: span + 'optional'
            });
        } else {
            return riot.render(tmpl_optional, {
                optional: span + 'mandatory'
            });
        }
    },
    r_accepted = function(e) {
        if (util.exists(e) && e.length > 0) {
            e = e.join(', ');
            return riot.render(tmpl_accepted, {
                accepted: e
            });
        } else {
            return '';
        }
    },
    r_property = function(e, dots, bold) {
        var dots = dots || ':';
        var bold = bold || "bold";
        return riot.render(tmpl_property, {
            property: e,
            dots: dots,
            bold: bold
        });
    },
    r_description = function(e) {
        if (util.exists(e) && e.length > 0) {
            return '//' + e;
        } else {
            return '';
        }
    },
    r_comment = function(e) {
        if (util.exists(e) && e.length > 0) {
            return riot.render(tmpl_comment, {
                description: e,
            });
        } else {
            return '';
        }
    },
    r_body_comment = function(e, cmt_b) {
        var cmt_b = cmt_b || '//';
        if (util.exists(e) && e.length > 0) {
            return riot.render(tmpl_body_comment, {
                comment: cmt_b + e
            });
        } else {
            return '';
        }
    },
    r_type = function(e) {
        return riot.render(tmpl_type, {
            type: e
        });
    },
    r_li = function(datali) {
        var datali = datali || {};
        return riot.render(tmpl_li, datali);
    },
    r_bracketLeft = function(e, hasSpace) {
        var space = '&nbsp;';
        if (!hasSpace) space = '';
        return riot.render(tmpl_bracketLeft, {
            bracketLeft: space + e
        });
    },
    r_bracketClosed = function(e, hasSpace) {
        var space = '&nbsp;';
        if (!hasSpace) space = '';
        return riot.render(tmpl_bracketClosed, {
            bracketClosed: space + e,
        });
    },
    r_bracketRight = function(e, closed, comma) {
        var comma = comma || '';
        var closed = '';
        if (util.exists(closed) && closed.length > 0) {
            closed = 'closed';
        }
        return riot.render(tmpl_bracketRight, {
            bracketRight: e + comma,
            closed: closed,
        });
    };

var HashSearch = new function() {
    var params;

    this.set = function(key, value) {
        params[key] = value;
        this.push();
    };

    this.remove = function(key, value) {
        delete params[key];
        this.push();
    };


    this.get = function(key, value) {
        return params[key];
    };

    this.keyExists = function(key) {
        return params.hasOwnProperty(key);
    };

    this.push = function() {
        var hashBuilder = [],
            key, value;

        for (key in params)
            if (params.hasOwnProperty(key)) {
                key = escape(key), value = escape(params[key]); // escape(undefined) == "undefined"
                hashBuilder.push(key + ((value !== "undefined") ? '=' + value : ""));
            }

        window.location.hash = hashBuilder.join("&");
    };

    (this.load = function() {
        params = {}
        var hashStr = window.location.hash,
            hashArray, keyVal
        hashStr = hashStr.substring(1, hashStr.length);
        hashArray = hashStr.split('&');

        for (var i = 0; i < hashArray.length; i++) {
            keyVal = hashArray[i].split('=');
            params[unescape(keyVal[0])] = (typeof keyVal[1] != "undefined") ? unescape(keyVal[1]) : keyVal[1];
        }
    })();
}

function lookdeep(object) {
    var collection = [],
        index = 0,
        count = 0,
        desc = '',
        content = '',
        datac = {},
        next, item,
        _default = '',
        accepted = '',
        optional = '',
        link = '',
        url = '',
        minimum = '',
        maximum = '',
        comment = '',
        datali = [],
        cmt_b;
    for (item in object) {
        if (object.hasOwnProperty(item)) {
            next = object[item];
            if ((util.isObject(next) || util.isArray(next)) && next != null && item != 'enum') {
                var bold;

                if (item == 'properties') {
                    content = lookdeep(next).join(' ');
                } else {

                    if (item == 'items') {
                        bold = ' ';
                    }

                    var brackets = ['{', '}'];
                    if (util.isArray(next)) {
                        brackets = r_brackets("array");
                    }

                    if (util.exists(next.type)) {
                        brackets = r_brackets(next.type);
                    }

                    var cmt = r_default(next.default) + r_accepted(next.enum) + r_optional(next.optional);

                    var bcSpace = true;
                    var dots = null;
                    var bcClosed = r_bracketClosed('... ' + brackets[1] + ',', bcSpace);
                    if (_.contains(['boolean', 'string', 'number', 'integer'], next.type)) {
                        bcSpace = false;
                        dots = ' ',
                        bcClosed = r_bracketClosed(',', bcSpace); // + r_comment(cmt);
                    }

                    datac = {
                        type: r_type(next.type),
                        property: r_property(item, dots, bold),
                        description: r_description(next.title),
                        body: lookdeep(next).join(' '),
                        bracketLeft: r_bracketLeft(brackets[0], bcSpace),
                        bracketClosed: bcClosed,
                        lvl: '',
                        bracketRight: r_bracketRight(brackets[1] + ',', true, null),
                    };

                    content += '<li>' + r_container(datac) + '</li>';
                }

            } else {

                switch (item) {
                    case 'title':
                        if (next.substring(0, 5) === 'MKD::') {
                            next = next.substring(5);
                            cmt_b = " ";
                            next = mkd_converter.makeHtml(next);
                        }
                        comment = li(r_body_comment(next, cmt_b));
                        break;
                    case 'type':
                        break;
                    case 'optional':
                        optional = li(r_optional(next, true));
                        break;
                    case 'default':
                        _default = li(r_default(next));
                        break;
                    case 'enum':
                        accepted = li(r_accepted(next));
                        break;
                    case 'minimum':
                        mimum = li(r_minimum('minimum', next));
                        break;
                    case 'maximum':
                        maximum = li(r_maximum('maximum', next));
                        break;
                    case 'minLength':
                        minimum = li(r_minimum('minLength', next));
                        break;
                    case 'maxLength':
                        maximum = li(r_maximum('maxLength', next));
                        break;
                    case 'url':
                        url = next;
                        break;
                    case 'additionalProperties':
                        string = String('can have additionalProperties');
                        break;
                    default:
                        datali.push(li(r_minimum(item, next)));
                        break;
                }

            }
        }
        if (count == util.objectLength(object) - 1) {
            desc += comment + optional + _default + minimum + maximum + accepted;
            for (var i = 0; i < datali.length; i += 1) {
                desc += datali[i];
            }
            desc = li(desc);
            desc += content;
            collection[index++] = desc;
        }
        count += 1;
    }
    return collection;
}

function riotpop(data, static) {
    riotjson.html("");
    if (util.exists(static)) {
        riotjson.append('<pre>' + util.syntaxHighlight(data) + '</pre>');
    } else {

        var lookdeepSample = lookdeep(data).join(' ');

        var datac = {
            type: null,
            property: null,
            description: null,
            body: lookdeepSample,
            simpledesc: null,
            closed: '',
            lvl: 'level_0',
            bracketLeft: r_bracketLeft('{'),
            bracketClosed: r_bracketClosed('... }', true, 0),
            bracketRight: r_bracketRight('}', null, null, 0),
        };

        riotjson.append(r_container(datac));
        registerExpanders();
    }
}

function li(val) {
    return '<li>' + val + '<li>';
}

function r_brackets(type) {
    var brackets = [];
    switch (type) {
        case 'array':
            brackets = ['[', ']'];
            break;
        case 'string':
            brackets = ['', ''];
            break;
        case 'integer':
            brackets = ['', ''];
            break;
        case 'number':
            brackets = ['', ''];
            break;
        case 'boolean':
            brackets = ['', ''];
            break;
        default:
            brackets = ['{', '}'];
            break;
    }
    return brackets;
}

function collapseAll() {
    $('.node-container:not(:first)').toggleClass('closed');
}

function closeAll() {
    $('.node-container').addClass('closed');
}

function expandAll() {
    $('.node-container').removeClass('closed');
}

function collapseParents(el) {
    expandAll();
    var el = el.parent().parent();
    var sameLvl = el.parent().parent();
    sameLvl.addClass('founded');
    sameLvl.find('.node-container').each(function() {
        $(this).addClass('closed');
    });
    el.removeClass('closed');
}

function collapse(el) {
    el.parent().toggleClass('closed');
}

function removeEmptyNodes(el) {
    $(el).each(function() {
        if ($(this).html().length < 1) {
            $(this).remove();
        }
    });
}

function registerExpanders() {
    $('.node-expand').on('click', function() {
        collapse($(this));
    });
    closeAll();
    $('.level_0').removeClass('closed');
    removeEmptyNodes('.leaf-container');
    removeEmptyNodes('.node-body li');
    removeEmptyNodes('.node-body');

    $('.comment').parent().addClass('nodeDescTop');
    $('.date').each(function() {
        if ($(this).find('.node-gray').length > 0) {
            $(this).addClass('nodeDescBot');
        }
    });
    $('.nodeDescTop').find('a').on('click', function(e) {
        e.preventDefault();
        window.open(
            $(this).attr('href'),
            '_blank' // new window or tab.
        );
    });
}
var suggests, $autocomplete, $search, $searchTerm, $posnavbar, $searchnav, $searchnavPrev, $searchnavResult, $searchnavNext, $searchNoResult, indexResult, foundLi, val, pretty, doc;
var $statusLoading = $('#statusLoading');

function getJson(file, endPoint, docType, tag) {
    var endPoint = endPoint || '',
        tag = tag || '';
    $statusLoading.removeClass('display-no');
    $.getJSON(endPoint + file, function(data) {
        if (util.exists(docType) && docType === 'static') {
            riotpop(data, docType);
            suggests.getKeys(data);
            $('#searchnav').addClass('displayNo');
            $('.search-box').addClass('displayNo');
        } else {
            $('#searchnav').removeClass('displayNo');
            $('.search-box').removeClass('displayNo');
            riotpop(data.properties);
            suggests.getKeys(data.properties);
            initSearchDom();
            if (tag.length > 2) {
                goSearch(tag);
                $('#searchTerm').val(tag);
            }
        }
        $statusLoading.addClass('display-no');
    });
}

function initSearch() {
    $('.searchButton').click(function() {
        var val = $searchTerm.val();
        if (val.length > 2) {
            goSearch(val);
        } else {
            $('.node-body li span.node-property').each(function() {
                $(this).parent().parent().removeClass('selected');
            });
            $searchnav.hide();
            $searchNoResult.hide();
            //pretty.collapseAll();
        }
    });
}

function goToElement(el) {
    $('html, body').stop().animate({
        scrollTop: el.offset().top - 200
    }, 500);
}

function goSearch(val) {
    foundLi = $('.node-body span.node-property:contains("' + val + '")');
    if (foundLi.length < 1) {
        $searchNoResult.show();
        $searchnav.hide();
    } else {
        $searchnav.show();
        $('.node-body li span.node-property').each(function() {
            $(this).parent().parent().removeClass('selected');
        });

        foundLi.parent().parent().addClass('selected');
        if (foundLi.offset() != undefined) {
            $searchnavResult.html(' "' + val + '" ');
            collapseParents(foundLi);
            goToElement(foundLi.parent());
        }
    }
}

function goNextResult() {
    if (indexResult < foundLi.length) {
        indexResult += 1;
        goToElement($(foundLi[indexResult]).parent());
    }
}

function goPrevResult() {
    if (indexResult > 0) {
        indexResult -= 1;
        goToElement($(foundLi[indexResult]).parent());
    }
};

function inArray(arr, val) {
    var j = false;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == val) j = true;
    };
    return j;
}

suggests = {
    isObject: function(v) {
        return Object.prototype.toString.call(v) === '[object Object]';
    },
    words: [],
    add: function(val) {
        if (!inArray(this.words, val)) {
            this.words.push(val);
        }
    },
    type: function(v) {
        this.result(v.toLowerCase());
    },
    result: function(v) {
        var r = [];
        $autocomplete.val('');
        if (v.length > 0) {
            var i = 0;
            _.each(this.words, function(val, key) {
                var c = val.toLowerCase();
                var ind = c.indexOf(v);
                if (ind == 0) {
                    var searchLength = v.length;
                    var stringLength = val.length;
                    var begin = val.substring(0, searchLength),
                        end = val.substring(searchLength, stringLength);
                    c = '<li rel="' + val + '"><span class="string">' + begin + '</span><span class="title">' + end + '</span></li>';
                    if (i != 0) {
                        r.push([c, val]);
                    } else {
                        r.push([val, val]);
                    }
                    i += 1;
                }
            });
            $searchTyping.html('');
            $autocomplete.val('');
            var i = 0;
            _.each(r, function(val, key) {
                if (i != 0) {
                    $searchTyping.append(val[0]);
                } else {
                    $autocomplete.val(val[0]);
                }
                i++;
            });
            $searchTyping.find('li').on('click', function(e) {
                var val = $(this).attr('rel');
                $autocomplete.val('');
                $searchTerm.val(val);
                $searchTyping.html('');
                goSearch(val);
                indexResult = -1;
                goNextResult();
            });
        }
    },
    getKeys: function(data) {
        _.each(data, function(val, key) {
            this.add(key);
            if (this.isObject(val)) {
                this.getKeys(val);
            }
        }, this);
    }
};

var chosen = -2;

var $autocomplete = $('#autocomplete'),
    $search = $('.search'),
    $searchTerm = $('#searchTerm'),
    $searchnav = $('#searchnav .yesresult'),
    $searchnavResult = $('#searchnav .result'),
    $searchnavPrev = $('#searchnav .prev'),
    $searchnavNext = $('#searchnav .next'),
    $searchNoResult = $('#searchnav .noresult'),
    $searchTyping = $('#s_typing'),
    $searchTypingLi = $('#s_typing li');
$searchNoResult.hide();
$searchnav.hide();

function initSearchDom() {

    $('#searchD').removeClass('displayNo');

    $autocomplete = $('#autocomplete');
    $search = $('.search');
    $searchTerm = $('#searchTerm');
    $searchnav = $('#searchnav .yesresult');
    $searchnavResult = $('#searchnav .result');
    $searchnavPrev = $('#searchnav .prev');
    $searchnavNext = $('#searchnav .next');
    $searchNoResult = $('#searchnav .noresult');
    $searchNoResult.hide();
    $searchnav.hide();
    $searchTyping = $('#s_typing');
    $searchTypingLi = $('#s_typing li');
    var val = '';


    $('.search-btn').on('click', function(e) {
        e.preventDefault(e);
        var val = $searchTerm.val();
        if (val.length > 0)
            goSearch(val);
        $searchTyping.html('');
    });

    $searchTerm.on('keyup', function(e) {
        var val = $(this).val();
        if ($.inArray(e.which, [16, 17, 27, 33, 34, 35, 36, 37, 38, 39, 40, 9]) == -1) {
            suggests.type(val);
            if (e.which == 13) {
                e.preventDefault();

                if (chosen > -1) {
                    val = $searchTerm.val();
                    goSearch(val);
                    chosen = -2;
                }

                if (foundLi !== undefined) {
                    if (indexResult == foundLi.length - 1) indexResult = -1;
                } else {
                    indexResult = -1;
                }
                goNextResult();
                $searchTyping.html('');
                $autocomplete.val('');
            } else {
                indexResult = 0;
                if (val.length > 2) {
                    goSearch(val);
                } else {
                    $('.node-body li span.node-property').each(function() {
                        $(this).parent().parent().removeClass('selected');
                    });
                    $searchnav.hide();
                    $searchNoResult.hide();
                }
            }
        } else {
            $searchTypingLi = $('#s_typing li');
            if (e.which == 40) {
                if (chosen === -2) {
                    chosen = -1;
                }
                if ((chosen + 1) < $searchTypingLi.length) {
                    chosen++;
                }
                $searchTypingLi.removeClass('selectedLi');
                $searchTypingLi.eq(chosen).addClass('selectedLi');
                $autocomplete.val('');
                $searchTerm.val($searchTypingLi.eq(chosen).attr('rel'));
                return false;
            }
            if (e.which == 38) {
                if (chosen === -2) {
                    chosen = 0;
                }
                if (chosen > 0) {
                    chosen--;
                }
                $searchTypingLi.removeClass('selectedLi');
                $searchTypingLi.eq(chosen).addClass('selectedLi');
                $autocomplete.val('');
                $searchTerm.val($searchTypingLi.eq(chosen).attr('rel'));
                return false;
            }
        }
        if (val.length === 0) {
            $('.node-body li span.node-property').each(function() {
                $(this).parent().parent().removeClass('selected');
            });
            $searchnav.hide();
            $searchTyping.html('');
            $searchNoResult.hide();
            chosen = -2;
        }
    });


    initSearch();
    var $searchNavWrap;

    $(function() {
        // Check the initial Poistion of the Sticky Header
        $searchNavWrap = $('#searchNavWrap');
        var stickyHeaderTop = $searchNavWrap.offset().top;
        $(window).scroll(function() {
            sticky($searchNavWrap, stickyHeaderTop);
        });
    });

    $searchnavNext.on('click', function(e) {
        e.preventDefault();
        goNextResult();
    });

    $searchnavPrev.on('click', function(e) {
        e.preventDefault();
        goPrevResult();
    });
}


function sticky($el, stickyHeaderTop, offset) {
    var offset = offset || 0;
    if ($(window).scrollTop() > stickyHeaderTop) {
        $el.css({
            position: 'fixed',
            top: offset + 'px',
            padding: '0px',
            '-webkit-box-shadow': '0 2px 4px 0 rgba(0,0,0,.15)',
            'box-shadow': '0 2px 4px 0 rgba(0,0,0,.15)',
            'border-bottom': 'none'
        });
        // $searchnav.css('display', 'block');
    } else {
        $el.css({
            position: 'absolute',
            top: '0px',
            '-webkit-box-shadow': 'none',
            'box-shadow': 'none',
            'border-bottom': '1px solid #e7e7e7'
        });
        // $searchnav.css('display', 'none');
    }
}

function goToTop() {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
}

$(document).ready(function() {

    $('#searchD').addClass('displayNo');
    $('#searchnav .yesresult').hide();

    $('#collapseAll').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('color999');
        $(this).find('.glyphicon').toggleClass('glyphicon-fullscreen').toggleClass('glyphicon-resize-small');
        if ($(this).hasClass('color999')) {
            expandAll();
        } else {
            collapseAll();
        }
    });

    $("#top").on("click", function(e) {
        e.preventDefault();
        goToTop();
    });

    $('.loadJS').on('click', function(e) {
        e.preventDefault();
        goToTop();
        initJSONdoc($(this));
    });

    function initJSONdoc($el) {
        el = $el || $('#riot');
        var jsonFile = el.attr('rel'),
            endPoint = el.attr('endPoint'),
            docType = el.attr('docType'),
            title = el.attr('title');


        riot.route(function(path) {
            if (HashSearch.keyExists("schema")) {
                jsonFile = HashSearch.get('schema');
            }
            if (HashSearch.keyExists("title")) {
                title = HashSearch.get('title');
            }
            if (HashSearch.keyExists("docType")) {
                docType = HashSearch.get('docType');
            }
            var tag;

            if (HashSearch.keyExists("tag")) {
                tag = HashSearch.get('tag');
            }

            $('#subtitle').html(title);
            getJson(jsonFile, endPoint, docType, tag);

        });

        $('#subtitle').html(title);
        getJson(jsonFile, endPoint, docType);
    }

    if ($('#riot').length > 0) {
        initJSONdoc();
    }

});
