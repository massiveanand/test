var u = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function v() {
    v = function() {}, u.Symbol || (u.Symbol = A)
}
var B = 0;

function A(t) {
    return "jscomp_symbol_" + (t || "") + B++
}! function(t) {
    function i(n) {
        if (e[n]) return e[n].T;
        var s = e[n] = {
            ja: n,
            fa: !1,
            T: {}
        };
        return t[n].call(s.T, s, s.T, i), s.fa = !0, s.T
    }
    var e = {};
    i.u = t, i.h = e, i.c = function(t, e, n) {
        i.g(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        v(), v(), "undefined" != typeof Symbol && Symbol.toStringTag && (v(), Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        })), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.m = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.ba) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) i.c(n, s, function(i) {
                return t[i]
            }.bind(null, s));
        return n
    }, i.i = function(t) {
        var e = t && t.ba ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.c(e, "a", e), e
    }, i.g = function(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i)
    }, i.o = "", i(i.v = 0)
}([function(t, i, e) {
    function n(t, i) {
        if (i = void 0 === i ? {} : i, this.h = t, this.g = this.g.bind(this), !a(this.h)) throw new TypeError("`new Drift` requires a DOM element as its first argument.");
        t = i.namespace || null;
        var e = i.showWhitespaceAtEdges || !1,
            n = i.containInline || !1,
            s = i.inlineOffsetX || 0,
            o = i.inlineOffsetY || 0,
            h = i.inlineContainer || document.body,
            r = i.sourceAttribute || "data-zoom",
            d = i.zoomFactor || 3,
            u = void 0 === i.paneContainer ? document.body : i.paneContainer,
            c = i.inlinePane || 375,
            f = !("handleTouch" in i) || !!i.handleTouch,
            p = i.onShow || null,
            l = i.onHide || null,
            b = !("injectBaseStyles" in i) || !!i.injectBaseStyles,
            v = i.hoverDelay || 0,
            m = i.touchDelay || 0,
            y = i.hoverBoundingBox || !1,
            g = i.touchBoundingBox || !1;
        if (i = i.boundingBoxContainer || document.body, !0 !== c && !a(u)) throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
        if (!a(h)) throw new TypeError("`inlineContainer` must be a DOM element");
        this.a = {
            j: t,
            P: e,
            I: n,
            K: s,
            L: o,
            w: h,
            R: r,
            f: d,
            ga: u,
            ea: c,
            C: f,
            O: p,
            N: l,
            da: b,
            F: v,
            A: m,
            D: y,
            G: g,
            H: i
        }, this.a.da && !document.querySelector(".drift-base-styles") && ((i = document.createElement("style")).type = "text/css", i.classList.add("drift-base-styles"), i.appendChild(document.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")), (t = document.head).insertBefore(i, t.firstChild)), this.v(), this.u()
    }

    function s(t) {
        t = void 0 === t ? {} : t, this.h = this.h.bind(this), this.g = this.g.bind(this), this.m = this.m.bind(this), this.s = !1;
        var i = void 0 === t.J ? null : t.J,
            e = void 0 === t.f ? c() : t.f,
            n = void 0 === t.U ? c() : t.U,
            s = void 0 === t.j ? null : t.j,
            o = void 0 === t.P ? c() : t.P,
            h = void 0 === t.I ? c() : t.I;
        this.a = {
            J: i,
            f: e,
            U: n,
            j: s,
            P: o,
            I: h,
            K: void 0 === t.K ? 0 : t.K,
            L: void 0 === t.L ? 0 : t.L,
            w: void 0 === t.w ? document.body : t.w
        }, this.o = this.i("open"), this.Y = this.i("opening"), this.u = this.i("closing"), this.v = this.i("inline"), this.V = this.i("loading"), this.ha()
    }

    function o(t) {
        t = void 0 === t ? {} : t, this.m = this.m.bind(this), this.B = this.B.bind(this), this.g = this.g.bind(this), this.c = this.c.bind(this);
        var i = t;
        t = void 0 === i.b ? c() : i.b;
        var e = void 0 === i.l ? c() : i.l,
            n = void 0 === i.R ? c() : i.R,
            s = void 0 === i.C ? c() : i.C,
            o = void 0 === i.O ? null : i.O,
            a = void 0 === i.N ? null : i.N,
            r = void 0 === i.F ? 0 : i.F,
            d = void 0 === i.A ? 0 : i.A,
            u = void 0 === i.D ? c() : i.D,
            f = void 0 === i.G ? c() : i.G,
            p = void 0 === i.j ? null : i.j,
            l = void 0 === i.f ? c() : i.f;
        i = void 0 === i.H ? c() : i.H, this.a = {
            b: t,
            l: e,
            R: n,
            C: s,
            O: o,
            N: a,
            F: r,
            A: d,
            D: u,
            G: f,
            j: p,
            f: l,
            H: i
        }, (this.a.D || this.a.G) && (this.o = new h({
            j: this.a.j,
            f: this.a.f,
            S: this.a.H
        })), this.enabled = !0, this.M()
    }

    function h(t) {
        this.s = !1;
        var i = void 0 === t.j ? null : t.j,
            e = void 0 === t.f ? c() : t.f;
        t = void 0 === t.S ? c() : t.S, this.a = {
            j: i,
            f: e,
            S: t
        }, this.c = this.g("open"), this.h()
    }

    function a(t) {
        return f ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
    }

    function r(t, i) {
        i.forEach(function(i) {
            t.classList.add(i)
        })
    }

    function d(t, i) {
        i.forEach(function(i) {
            t.classList.remove(i)
        })
    }

    function c() {
        throw Error("Missing parameter")
    }
    e.r(i);
    var f = "object" == typeof HTMLElement;
    h.prototype.g = function(t) {
        var i = ["drift-" + t],
            e = this.a.j;
        return e && i.push(e + "-" + t), i
    }, h.prototype.h = function() {
        this.b = document.createElement("div"), r(this.b, this.g("bounding-box"))
    }, h.prototype.show = function(t, i) {
        this.s = !0, this.a.S.appendChild(this.b);
        var e = this.b.style;
        e.width = Math.round(t / this.a.f) + "px", e.height = Math.round(i / this.a.f) + "px", r(this.b, this.c)
    }, h.prototype.W = function() {
        this.s && this.a.S.removeChild(this.b), this.s = !1, d(this.b, this.c)
    }, h.prototype.setPosition = function(t, i, e) {
        var n = window.pageXOffset,
            s = window.pageYOffset;
        t = e.left + t * e.width - this.b.clientWidth / 2 + n, i = e.top + i * e.height - this.b.clientHeight / 2 + s, t < e.left + n ? t = e.left + n : t + this.b.clientWidth > e.left + e.width + n && (t = e.left + e.width - this.b.clientWidth + n), i < e.top + s ? i = e.top + s : i + this.b.clientHeight > e.top + e.height + s && (i = e.top + e.height - this.b.clientHeight + s), this.b.style.left = t + "px", this.b.style.top = i + "px"
    }, o.prototype.i = function(t) {
        t.preventDefault()
    }, o.prototype.u = function(t) {
        this.a.A && this.V(t) && !this.s || t.preventDefault()
    }, o.prototype.V = function(t) {
        return !!t.touches
    }, o.prototype.M = function() {
        this.a.b.addEventListener("mouseenter", this.g, !1), this.a.b.addEventListener("mouseleave", this.B, !1), this.a.b.addEventListener("mousemove", this.c, !1), this.a.C ? (this.a.b.addEventListener("touchstart", this.g, !1), this.a.b.addEventListener("touchend", this.B, !1), this.a.b.addEventListener("touchmove", this.c, !1)) : (this.a.b.addEventListener("touchstart", this.i, !1), this.a.b.addEventListener("touchend", this.i, !1), this.a.b.addEventListener("touchmove", this.i, !1))
    }, o.prototype.ca = function() {
        this.a.b.removeEventListener("mouseenter", this.g, !1), this.a.b.removeEventListener("mouseleave", this.B, !1), this.a.b.removeEventListener("mousemove", this.c, !1), this.a.C ? (this.a.b.removeEventListener("touchstart", this.g, !1), this.a.b.removeEventListener("touchend", this.B, !1), this.a.b.removeEventListener("touchmove", this.c, !1)) : (this.a.b.removeEventListener("touchstart", this.i, !1), this.a.b.removeEventListener("touchend", this.i, !1), this.a.b.removeEventListener("touchmove", this.i, !1))
    }, o.prototype.g = function(t) {
        this.u(t), this.h = t, "mouseenter" == t.type && this.a.F ? this.v = setTimeout(this.m, this.a.F) : this.a.A ? this.v = setTimeout(this.m, this.a.A) : this.m()
    }, o.prototype.m = function() {
        if (this.enabled) {
            var t = this.a.O;
            t && "function" == typeof t && t(), this.a.l.show(this.a.b.getAttribute(this.a.R), this.a.b.clientWidth, this.a.b.clientHeight), this.h && ((t = this.h.touches) && this.a.G || !t && this.a.D) && this.o.show(this.a.l.b.clientWidth, this.a.l.b.clientHeight), this.c()
        }
    }, o.prototype.B = function(t) {
        t && this.u(t), this.h = null, this.v && clearTimeout(this.v), this.o && this.o.W(), (t = this.a.N) && "function" == typeof t && t(), this.a.l.W()
    }, o.prototype.c = function(t) {
        if (t) this.u(t), this.h = t;
        else {
            if (!this.h) return;
            t = this.h
        }
        if (t.touches) var i = (t = t.touches[0]).clientX,
            e = t.clientY;
        else i = t.clientX, e = t.clientY;
        i = (i - (t = this.a.b.getBoundingClientRect()).left) / this.a.b.clientWidth, e = (e - t.top) / this.a.b.clientHeight, this.o && this.o.setPosition(i, e, t), this.a.l.setPosition(i, e, t)
    }, u.Object.defineProperties(o.prototype, {
        s: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.l.s
            }
        }
    }), t = document.createElement("div").style;
    var p = "undefined" != typeof document && ("animation" in t || "webkitAnimation" in t);
    s.prototype.i = function(t) {
        var i = ["drift-" + t],
            e = this.a.j;
        return e && i.push(e + "-" + t), i
    }, s.prototype.ha = function() {
        this.b = document.createElement("div"), r(this.b, this.i("zoom-pane"));
        var t = document.createElement("div");
        r(t, this.i("zoom-pane-loader")), this.b.appendChild(t), this.c = document.createElement("img"), this.b.appendChild(this.c)
    }, s.prototype.X = function(t) {
        this.c.setAttribute("src", t)
    }, s.prototype.Z = function(t, i) {
        this.c.style.width = ((t * this.a.f) - 400) + "px", this.c.style.height = ((i * this.a.f) - 400) + "px"
    }, s.prototype.setPosition = function(t, i, e) {
        var n = this.c.offsetWidth,
            s = this.c.offsetHeight,
            o = this.b.offsetWidth,
            h = this.b.offsetHeight,
            a = o / 2 - n * t,
            r = h / 2 - s * i,
            d = o - n,
            u = h - s,
            c = 0 < d,
            f = 0 < u;
        s = c ? d / 2 : 0, n = f ? u / 2 : 0, d = c ? d / 2 : d, u = f ? u / 2 : u, this.b.parentElement === this.a.w && (f = window.pageXOffset, c = window.pageYOffset, t = e.left + t * e.width - o / 2 + this.a.K + f, i = e.top + i * e.height - h / 2 + this.a.L + c, this.a.I && (t < e.left + f ? t = e.left + f : t + o > e.left + e.width + f && (t = e.left + e.width - o + f), i < e.top + c ? i = e.top + c : i + h > e.top + e.height + c && (i = e.top + e.height - h + c)), this.b.style.left = t + "px", this.b.style.top = i + "px"), this.a.P || (a > s ? a = s : a < d && (a = d), r > n ? r = n : r < u && (r = u)), this.c.style.transform = "translate(" + a + "px, " + r + "px)", this.c.style.webkitTransform = "translate(" + a + "px, " + r + "px)"
    }, s.prototype.M = function() {
        this.b.removeEventListener("animationend", this.h, !1), this.b.removeEventListener("animationend", this.g, !1), this.b.removeEventListener("webkitAnimationEnd", this.h, !1), this.b.removeEventListener("webkitAnimationEnd", this.g, !1), d(this.b, this.o), d(this.b, this.u)
    }, s.prototype.show = function(t, i, e) {
        this.M(), this.s = !0, r(this.b, this.o), this.c.getAttribute("src") != t && (r(this.b, this.V), this.c.addEventListener("load", this.m, !1), this.X(t)), this.Z(i, e), this.ia ? this.aa() : this.$(), p && (this.b.addEventListener("animationend", this.h, !1), this.b.addEventListener("webkitAnimationEnd", this.h, !1), r(this.b, this.Y))
    }, s.prototype.aa = function() {
        this.a.w.appendChild(this.b), r(this.b, this.v)
    }, s.prototype.$ = function() {
        this.a.J.appendChild(this.b)
    }, s.prototype.W = function() {
        this.M(), this.s = !1, p ? (this.b.addEventListener("animationend", this.g, !1), this.b.addEventListener("webkitAnimationEnd", this.g, !1), r(this.b, this.u)) : (d(this.b, this.o), d(this.b, this.v))
    }, s.prototype.h = function() {
        this.b.removeEventListener("animationend", this.h, !1), this.b.removeEventListener("webkitAnimationEnd", this.h, !1), d(this.b, this.Y)
    }, s.prototype.g = function() {
        this.b.removeEventListener("animationend", this.g, !1), this.b.removeEventListener("webkitAnimationEnd", this.g, !1), d(this.b, this.o), d(this.b, this.u), d(this.b, this.v), this.b.setAttribute("style", ""), this.b.parentElement === this.a.J ? this.a.J.removeChild(this.b) : this.b.parentElement === this.a.w && this.a.w.removeChild(this.b)
    }, s.prototype.m = function() {
        this.c.removeEventListener("load", this.m, !1), d(this.b, this.V)
    }, u.Object.defineProperties(s.prototype, {
        ia: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var t = this.a.U;
                return !0 === t || "number" == typeof t && window.innerWidth <= t
            }
        }
    }), n.prototype.v = function() {
        this.l = new s({
            J: this.a.ga,
            f: this.a.f,
            P: this.a.P,
            I: this.a.I,
            U: this.a.ea,
            j: this.a.j,
            K: this.a.K,
            L: this.a.L,
            w: this.a.w
        })
    }, n.prototype.u = function() {
        this.c = new o({
            b: this.h,
            l: this.l,
            C: this.a.C,
            O: this.a.O,
            N: this.a.N,
            R: this.a.R,
            F: this.a.F,
            A: this.a.A,
            D: this.a.D,
            G: this.a.G,
            j: this.a.j,
            f: this.a.f,
            H: this.a.H
        })
    }, n.prototype.M = function(t) {
        this.l.X(t)
    }, n.prototype.i = function() {
        this.c.enabled = !1
    }, n.prototype.m = function() {
        this.c.enabled = !0
    }, n.prototype.g = function() {
        this.c.B(), this.c.ca()
    }, u.Object.defineProperties(n.prototype, {
        s: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.s
            }
        },
        f: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.f
            },
            set: function(t) {
                this.a.f = t, this.l.a.f = t, this.c.a.f = t, this.o.a.f = t
            }
        }
    }), Object.defineProperty(n.prototype, "isShowing", {
        get: function() {
            return this.s
        }
    }), Object.defineProperty(n.prototype, "zoomFactor", {
        get: function() {
            return this.f
        },
        set: function(t) {
            this.f = t
        }
    }), n.prototype.setZoomImageURL = n.prototype.M, n.prototype.disable = n.prototype.i, n.prototype.enable = n.prototype.m, n.prototype.destroy = n.prototype.g, window.Drift = n
}]);