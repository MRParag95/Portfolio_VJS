/*!
 * Physics2DPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

let e, t, i, s, n, o = Math.PI / 180, a = () => e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e, r = e => Math.round(1e4 * e) / 1e4, l = function () {
    return String.fromCharCode.apply(null, arguments)
}, c = l(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), p = l(103, 115, 97, 112, 46, 99, 111, 109), h = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, d = (function (t) {
    var i = "undefined" != typeof window,
        s = 0 === (i ? window.location.href : "").indexOf(l(102, 105, 108, 101, 58, 47, 47)) || -1 !== t.indexOf(l(108, 111, 99, 97, 108, 104, 111, 115, 116)) || h.test(t),
        n = [c, p, l(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), l(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), l(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), l(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), l(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), l(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), l(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(99, 100, 112, 110, 46, 105, 111), l(112, 101, 110, 115, 46, 105, 111), l(103, 97, 110, 110, 111, 110, 46, 116, 118), l(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), l(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), l(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), l(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), l(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), l(112, 108, 110, 107, 114, 46, 99, 111), l(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), l(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), l(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), l(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), l(99, 115, 98, 46, 97, 112, 112), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), l(99, 111, 100, 105, 101, 114, 46, 105, 111), l(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), l(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), l(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), l(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
        o = function () {
            if (i)
                if ("loading" === document.readyState || "interactive" === document.readyState)
                    document.addEventListener("readystatechange", o);
                else {
                    document.removeEventListener("readystatechange", o);
                    var t = "object" == typeof e ? e : i && window.gsap;
                    i && window.console && !window._gsapWarned && "object" == typeof t && !1 !== t.config().trialWarn && (console.log(l(37, 99, 87, 97, 114, 110, 105, 110, 103), l(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(l(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "Physics2DPlugin" + l(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(l(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), l(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
        },
        a = n.length;
    for (setTimeout(o, 50); --a > -1;)
        if (-1 !== t.indexOf(n[a]))
            return !0;
    true || setTimeout((function () {
        i && (window.location.href = l(104, 116, 116, 112, 115, 58, 47, 47) + c + l(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=Physics2DPlugin&source=trial")
    }), 4e3)
}
    ("undefined" != typeof window ? window.location.host : ""), o => {
        e = o || a(),
            t || (i = e.utils.getUnit, s = e.core.getStyleSaver, n = e.core.reverting || function () { }, t = 1)
    });
class v {
    constructor(e, t, s, n, o) {
        let a = e._gsap,
            r = a.get(e, t);
        this.p = t,
            this.set = a.set(e, t),
            this.s = this.val = parseFloat(r),
            this.u = i(r) || 0,
            this.vel = s || 0,
            this.v = this.vel / o,
            n || 0 === n ? (this.acc = n, this.a = this.acc / (o * o)) : this.acc = this.a = 0
    }
}
const g = {
    version: "3.12.2",
    name: "physics2D",
    register: d,
    init(e, i, n) {
        t || d();
        let a = +i.angle || 0,
            r = +i.velocity || 0,
            l = +i.acceleration || 0,
            c = i.xProp || "x",
            p = i.yProp || "y",
            h = i.accelerationAngle || 0 === i.accelerationAngle ? +i.accelerationAngle : a;
        this.styles = s && s(e, i.xProp && "x" !== i.xProp ? i.xProp + "," + i.yProp : "transform"),
            this.target = e,
            this.tween = n,
            this.step = 0,
            this.sps = 30,
            i.gravity && (l = +i.gravity, h = 90),
            a *= o,
            h *= o,
            this.fr = 1 - (+i.friction || 0),
            this._props.push(c, p),
            this.xp = new v(e, c, Math.cos(a) * r, Math.cos(h) * l, this.sps),
            this.yp = new v(e, p, Math.sin(a) * r, Math.sin(h) * l, this.sps),
            this.skipX = this.skipY = 0
    },
    render(e, t) {
        let i,
            s,
            o,
            a,
            l,
            c, {
                xp: p,
                yp: h,
                tween: d,
                target: v,
                step: g,
                sps: f,
                fr: u,
                skipX: w,
                skipY: y
            } = t,
            m = d._from ? d._dur - d._time : d._time;
        if (d._time || !n()) {
            if (1 === u)
                o = m * m * .5, i = p.s + p.vel * m + p.acc * o, s = h.s + h.vel * m + h.acc * o;
            else {
                for (m *= f, a = c = (0 | m) - g, c < 0 && (p.v = p.vel / f, h.v = h.vel / f, p.val = p.s, h.val = h.s, t.step = 0, a = c = 0 | m), l = m % 1 * u; c--;)
                    p.v += p.a, h.v += h.a, p.v *= u, h.v *= u, p.val += p.v, h.val += h.v;
                i = p.val + p.v * l,
                    s = h.val + h.v * l,
                    t.step += a
            }
            w || p.set(v, p.p, r(i) + p.u),
                y || h.set(v, h.p, r(s) + h.u)
        } else
            t.styles.revert()
    },
    kill(e) {
        this.xp.p === e && (this.skipX = 1),
            this.yp.p === e && (this.skipY = 1)
    }
};
a() && e.registerPlugin(g);
export default g;
export {
    g as Physics2DPlugin
};
