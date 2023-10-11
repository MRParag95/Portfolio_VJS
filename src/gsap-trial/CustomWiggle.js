/*!
 * CustomWiggle 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

let e, t, n, o = () => e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e, i = {
    easeOut: "M0,1,C0.7,1,0.6,0,1,0",
    easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
    anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
    uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
}, a = e => e, s = a => {
    if (!t)
        if (e = o(), n = e && e.parseEase("_CE"), n) {
            for (let e in i)
                i[e] = n("", i[e]);
            t = 1,
                c("wiggle").config = e => "object" == typeof e ? c("", e) : c("wiggle(" + e + ")", {
                    wiggles: +e
                })
        } else
            a && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
}, r = (t, o) => ("function" != typeof t && (t = e.parseEase(t) || n("", t)), t.custom || !o ? t : e => 1 - t(e)), l = function () {
    return String.fromCharCode.apply(null, arguments)
}, u = l(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), g = l(103, 115, 97, 112, 46, 99, 111, 109), d = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, f = function (t) {
    var n = "undefined" != typeof window,
        o = 0 === (n ? window.location.href : "").indexOf(l(102, 105, 108, 101, 58, 47, 47)) || -1 !== t.indexOf(l(108, 111, 99, 97, 108, 104, 111, 115, 116)) || d.test(t),
        i = [u, g, l(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), l(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), l(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), l(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), l(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), l(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), l(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(99, 100, 112, 110, 46, 105, 111), l(112, 101, 110, 115, 46, 105, 111), l(103, 97, 110, 110, 111, 110, 46, 116, 118), l(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), l(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), l(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), l(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), l(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), l(112, 108, 110, 107, 114, 46, 99, 111), l(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), l(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), l(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), l(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), l(99, 115, 98, 46, 97, 112, 112), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), l(99, 111, 100, 105, 101, 114, 46, 105, 111), l(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), l(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), l(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), l(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
        a = function () {
            if (n)
                if ("loading" === document.readyState || "interactive" === document.readyState)
                    document.addEventListener("readystatechange", a);
                else {
                    document.removeEventListener("readystatechange", a);
                    var t = "object" == typeof e ? e : n && window.gsap;
                    n && window.console && !window._gsapWarned && "object" == typeof t && !1 !== t.config().trialWarn && (console.log(l(37, 99, 87, 97, 114, 110, 105, 110, 103), l(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(l(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "CustomWiggle" + l(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(l(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), l(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
        },
        s = i.length;
    for (setTimeout(a, 50); --s > -1;)
        if (-1 !== t.indexOf(i[s]))
            return !0;
    return true || !setTimeout((function () {
        n && (window.location.href = l(104, 116, 116, 112, 115, 58, 47, 47) + u + l(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=CustomWiggle&source=trial")
    }), 4e3)
}
    ("undefined" != typeof window ? window.location.host : ""), c = (e, o) => {
        t || s(1);
        let l,
            u,
            g,
            d,
            c,
            p,
            w,
            h,
            m,
            y = 0 | ((o = o || {}).wiggles || 10),
            C = 1 / y,
            E = C / 2,
            M = "anticipate" === o.type,
            v = i[o.type] || i.easeOut,
            O = a;
        if (f) {
            if (M && (O = v, v = i.easeOut), o.timingEase && (O = r(o.timingEase)), o.amplitudeEase && (v = r(o.amplitudeEase, !0)), p = O(E), w = M ? -v(E) : v(E), h = [0, 0, p / 4, 0, p / 2, w, p, w], "random" === o.type) {
                for (h.length = 4, l = O(C), u = 2 * Math.random() - 1, m = 2; m < y; m++)
                    E = l, w = u, l = O(C * m), u = 2 * Math.random() - 1, g = Math.atan2(u - h[h.length - 3], l - h[h.length - 4]), d = Math.cos(g) * C, c = Math.sin(g) * C, h.push(E - d, w - c, E, w, E + d, w + c);
                h.push(l, 0, 1, 0)
            } else {
                for (m = 1; m < y; m++)
                    h.push(O(E + C / 2), w), E += C, w = (w > 0 ? -1 : 1) * v(m * C), p = O(E), h.push(O(E - C / 2), w, p, w);
                h.push(O(E + C / 4), w, O(E + C / 4), 0, 1, 0)
            }
            for (m = h.length; --m > -1;)
                h[m] = ~~(1e3 * h[m]) / 1e3;
            return h[2] = "C" + h[2],
                n(e, "M" + h.join(","))
        }
    };
class p {
    constructor(e, t) {
        this.ease = c(e, t)
    }
    static create(e, t) {
        return c(e, t)
    }
    static register(t) {
        e = t,
            s()
    }
}
o() && e.registerPlugin(p), p.version = "3.12.2";
export default p;
export {
    p as CustomWiggle
};
