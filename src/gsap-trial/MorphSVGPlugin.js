/*!
 * MorphSVGPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

let e = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, t = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, r = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, n = /(^[#\.][a-z]|[a-y][a-z])/i, o = Math.PI / 180, i = Math.sin, l = Math.cos, a = Math.abs, s = Math.sqrt, h = e => "string" == typeof e, p = e => "number" == typeof e, g = e => Math.round(1e5 * e) / 1e5 || 0;
function c(e) {
    let t,
        r = 0;
    for (e.reverse(); r < e.length; r += 2)
        t = e[r], e[r] = e[r + 1], e[r + 1] = t;
    e.reversed = !e.reversed
}
let d = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
};
function f(e, r) {
    let n,
        o,
        i,
        l,
        a,
        s,
        h,
        p,
        g,
        c,
        f,
        u,
        m,
        x,
        w,
        M,
        b,
        P,
        N,
        v,
        S,
        T,
        z = e.tagName.toLowerCase(),
        A = .552284749831;
    return "path" !== z && e.getBBox ? (s = ((e, t) => {
        let r,
            n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            o = [].slice.call(e.attributes),
            i = o.length;
        for (t = "," + t + ","; --i > -1;)
            r = o[i].nodeName.toLowerCase(), t.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, o[i].nodeValue);
        return n
    })(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), T = ((e, t) => {
        let r = t ? t.split(",") : [],
            n = {},
            o = r.length;
        for (; --o > -1;)
            n[r[o]] = +e.getAttribute(r[o]) || 0;
        return n
    })(e, d[z]), "rect" === z ? (l = T.rx, a = T.ry || l, o = T.x, i = T.y, c = T.width - 2 * l, f = T.height - 2 * a, l || a ? (u = o + l * (1 - A), m = o + l, x = m + c, w = x + l * A, M = x + l, b = i + a * (1 - A), P = i + a, N = P + f, v = N + a * A, S = N + a, n = "M" + M + "," + P + " V" + N + " C" + [M, v, w, S, x, S, x - (x - m) / 3, S, m + (x - m) / 3, S, m, S, u, S, o, v, o, N, o, N - (N - P) / 3, o, P + (N - P) / 3, o, P, o, b, u, i, m, i, m + (x - m) / 3, i, x - (x - m) / 3, i, x, i, w, i, M, b, M, P].join(",") + "z") : n = "M" + (o + c) + "," + i + " v" + f + " h" + -c + " v" + -f + " h" + c + "z") : "circle" === z || "ellipse" === z ? ("circle" === z ? (l = a = T.r, p = l * A) : (l = T.rx, a = T.ry, p = a * A), o = T.cx, i = T.cy, h = l * A, n = "M" + (o + l) + "," + i + " C" + [o + l, i + p, o + h, i + a, o, i + a, o - h, i + a, o - l, i + p, o - l, i, o - l, i - p, o - h, i - a, o, i - a, o + h, i - a, o + l, i - p, o + l, i].join(",") + "z") : "line" === z ? n = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2 : "polyline" !== z && "polygon" !== z || (g = (e.getAttribute("points") + "").match(t) || [], o = g.shift(), i = g.shift(), n = "M" + o + "," + i + " L" + g.join(","), "polygon" === z && (n += "," + o + "," + i + "z")), s.setAttribute("d", _(s._gsRawPath = y(n))), r && e.parentNode && (e.parentNode.insertBefore(s, e), e.parentNode.removeChild(e)), s) : e
}
function u(e, t, r, n, h, p, g, c, d) {
    if (e === c && t === d)
        return;
    r = a(r),
        n = a(n);
    let f = h % 360 * o,
        u = l(f),
        y = i(f),
        _ = Math.PI,
        m = 2 * _,
        x = (e - c) / 2,
        w = (t - d) / 2,
        M = u * x + y * w,
        b = -y * x + u * w,
        P = M * M,
        N = b * b,
        v = P / (r * r) + N / (n * n);
    v > 1 && (r = s(v) * r, n = s(v) * n);
    let S = r * r,
        T = n * n,
        z = (S * T - S * N - T * P) / (S * N + T * P);
    z < 0 && (z = 0);
    let A = (p === g ? -1 : 1) * s(z),
        C = A * (r * b / n),
        O = A * (-n * M / r),
        R = (e + c) / 2 + (u * C - y * O),
        I = (t + d) / 2 + (y * C + u * O),
        L = (M - C) / r,
        F = (b - O) / n,
        V = (-M - C) / r,
        j = (-b - O) / n,
        Y = L * L + F * F,
        G = (F < 0 ? -1 : 1) * Math.acos(L / s(Y)),
        X = (L * j - F * V < 0 ? -1 : 1) * Math.acos((L * V + F * j) / s(Y * (V * V + j * j)));
    isNaN(X) && (X = _),
        !g && X > 0 ? X -= m : g && X < 0 && (X += m),
        G %= m,
        X %= m;
    let q,
        E = Math.ceil(a(X) / (m / 4)),
        H = [],
        U = X / E,
        B = 4 / 3 * i(U / 2) / (1 + l(U / 2)),
        D = u * r,
        W = y * r,
        Q = y * -n,
        Z = u * n;
    for (q = 0; q < E; q++)
        M = l(h = G + q * U), b = i(h), L = l(h += U), F = i(h), H.push(M - B * b, b + B * M, L + B * F, F - B * L, L, F);
    for (q = 0; q < H.length; q += 2)
        M = H[q], b = H[q + 1], H[q] = M * D + b * Q + R, H[q + 1] = M * W + b * Z + I;
    return H[q - 2] = c,
        H[q - 1] = d,
        H
}
function y(t) {
    let n,
        o,
        i,
        l,
        s,
        h,
        p,
        g,
        c,
        d,
        f,
        y,
        _,
        m,
        x,
        w = (t + "").replace(r, e => {
            let t = +e;
            return t < 1e-4 && t > -1e-4 ? 0 : t
        }).match(e) || [],
        M = [],
        b = 0,
        P = 0,
        N = w.length,
        v = 0,
        S = "ERROR: malformed path: " + t,
        T = function (e, t, r, n) {
            d = (r - e) / 3,
                f = (n - t) / 3,
                p.push(e + d, t + f, r - d, n - f, r, n)
        };
    if (!t || !isNaN(w[0]) || isNaN(w[1]))
        return console.log(S), M;
    for (n = 0; n < N; n++)
        if (_ = s, isNaN(w[n]) ? (s = w[n].toUpperCase(), h = s !== w[n]) : n--, i = +w[n + 1], l = +w[n + 2], h && (i += b, l += P), n || (g = i, c = l), "M" === s)
            p && (p.length < 8 ? M.length -= 1 : v += p.length), b = g = i, P = c = l, p = [i, l], M.push(p), n += 2, s = "L";
        else if ("C" === s)
            p || (p = [0, 0]), h || (b = P = 0), p.push(i, l, b + 1 * w[n + 3], P + 1 * w[n + 4], b += 1 * w[n + 5], P += 1 * w[n + 6]), n += 6;
        else if ("S" === s)
            d = b, f = P, "C" !== _ && "S" !== _ || (d += b - p[p.length - 4], f += P - p[p.length - 3]), h || (b = P = 0), p.push(d, f, i, l, b += 1 * w[n + 3], P += 1 * w[n + 4]), n += 4;
        else if ("Q" === s)
            d = b + 2 / 3 * (i - b), f = P + 2 / 3 * (l - P), h || (b = P = 0), b += 1 * w[n + 3], P += 1 * w[n + 4], p.push(d, f, b + 2 / 3 * (i - b), P + 2 / 3 * (l - P), b, P), n += 4;
        else if ("T" === s)
            d = b - p[p.length - 4], f = P - p[p.length - 3], p.push(b + d, P + f, i + 2 / 3 * (b + 1.5 * d - i), l + 2 / 3 * (P + 1.5 * f - l), b = i, P = l), n += 2;
        else if ("H" === s)
            T(b, P, b = i, P), n += 1;
        else if ("V" === s)
            T(b, P, b, P = i + (h ? P - b : 0)), n += 1;
        else if ("L" === s || "Z" === s)
            "Z" === s && (i = g, l = c, p.closed = !0), ("L" === s || a(b - i) > .5 || a(P - l) > .5) && (T(b, P, i, l), "L" === s && (n += 2)), b = i, P = l;
        else if ("A" === s) {
            if (m = w[n + 4], x = w[n + 5], d = w[n + 6], f = w[n + 7], o = 7, m.length > 1 && (m.length < 3 ? (f = d, d = x, o--) : (f = x, d = m.substr(2), o -= 2), x = m.charAt(1), m = m.charAt(0)), y = u(b, P, +w[n + 1], +w[n + 2], +w[n + 3], +m, +x, (h ? b : 0) + 1 * d, (h ? P : 0) + 1 * f), n += o, y)
                for (o = 0; o < y.length; o++)
                    p.push(y[o]);
            b = p[p.length - 2],
                P = p[p.length - 1]
        } else
            console.log(S);
    return n = p.length,
        n < 6 ? (M.pop(), n = 0) : p[0] === p[n - 2] && p[1] === p[n - 1] && (p.closed = !0),
        M.totalPoints = v + n,
        M
}
function _(e) {
    p(e[0]) && (e = [e]);
    let t,
        r,
        n,
        o,
        i = "",
        l = e.length;
    for (r = 0; r < l; r++) {
        for (o = e[r], i += "M" + g(o[0]) + "," + g(o[1]) + " C", t = o.length, n = 2; n < t; n++)
            i += g(o[n++]) + "," + g(o[n++]) + " " + g(o[n++]) + "," + g(o[n++]) + " " + g(o[n++]) + "," + g(o[n]) + " ";
        o.closed && (i += "z")
    }
    return i
}
let m, x, w, M, b, P = () => m || "undefined" != typeof window && (m = window.gsap) && m.registerPlugin && m, N = e => "function" == typeof e, v = Math.atan2, S = Math.cos, T = Math.sin, z = Math.sqrt, A = Math.PI, C = 2 * A, O = .3 * A, R = .7 * A, I = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, L = /(^[#\.][a-z]|[a-y][a-z])/i, F = /[achlmqstvz]/i, V = e => console && console.warn(e), j = function () {
    return String.fromCharCode.apply(null, arguments)
}, Y = j(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), G = j(103, 115, 97, 112, 46, 99, 111, 109), X = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, q = function (e) {
    var t = "undefined" != typeof window,
        r = 0 === (t ? window.location.href : "").indexOf(j(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(j(108, 111, 99, 97, 108, 104, 111, 115, 116)) || X.test(e),
        n = [Y, G, j(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), j(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), j(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), j(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), j(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), j(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), j(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), j(99, 100, 112, 110, 46, 105, 111), j(112, 101, 110, 115, 46, 105, 111), j(103, 97, 110, 110, 111, 110, 46, 116, 118), j(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), j(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), j(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), j(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), j(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), j(112, 108, 110, 107, 114, 46, 99, 111), j(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), j(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), j(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), j(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), j(99, 115, 98, 46, 97, 112, 112), j(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), j(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), j(99, 111, 100, 105, 101, 114, 46, 105, 111), j(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), j(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), j(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), j(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), j(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), j(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
        o = function () {
            if (t)
                if ("loading" === document.readyState || "interactive" === document.readyState)
                    document.addEventListener("readystatechange", o);
                else {
                    document.removeEventListener("readystatechange", o);
                    var e = "object" == typeof m ? m : t && window.gsap;
                    t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && (console.log(j(37, 99, 87, 97, 114, 110, 105, 110, 103), j(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(j(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "MorphSVGPlugin" + j(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(j(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), j(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
        },
        i = n.length;
    for (setTimeout(o, 50); --i > -1;)
        if (-1 !== e.indexOf(n[i]))
            return !0;
    return true || !setTimeout((function () {
        t && (window.location.href = j(104, 116, 116, 112, 115, 58, 47, 47) + Y + j(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=MorphSVGPlugin&source=trial")
    }), 4e3)
}
    ("undefined" != typeof window ? window.location.host : ""), E = e => {
        let t,
            r = e.length,
            n = 0,
            o = 0;
        for (t = 0; t < r; t++)
            n += e[t++], o += e[t];
        return [n / (r / 2), o / (r / 2)]
    }, H = e => {
        let t,
            r,
            n,
            o = e.length,
            i = e[0],
            l = i,
            a = e[1],
            s = a;
        for (n = 6; n < o; n += 6)
            t = e[n], r = e[n + 1], t > i ? i = t : t < l && (l = t), r > a ? a = r : r < s && (s = r);
        return e.centerX = (i + l) / 2,
            e.centerY = (a + s) / 2,
            e.size = (i - l) * (a - s)
    }, U = (e, t = 3) => {
        let r,
            n,
            o,
            i,
            l,
            a,
            s,
            h,
            p,
            g,
            c,
            d,
            f,
            u,
            y,
            _,
            m = e.length,
            x = e[0][0],
            w = x,
            M = e[0][1],
            b = M,
            P = 1 / t;
        for (; --m > -1;)
            for (l = e[m], r = l.length, i = 6; i < r; i += 6)
                for (p = l[i], g = l[i + 1], c = l[i + 2] - p, u = l[i + 3] - g, d = l[i + 4] - p, y = l[i + 5] - g, f = l[i + 6] - p, _ = l[i + 7] - g, a = t; --a > -1;)
                    s = P * a, h = 1 - s, n = (s * s * f + 3 * h * (s * d + h * c)) * s + p, o = (s * s * _ + 3 * h * (s * y + h * u)) * s + g, n > x ? x = n : n < w && (w = n), o > M ? M = o : o < b && (b = o);
        return e.centerX = (x + w) / 2,
            e.centerY = (M + b) / 2,
            e.left = w,
            e.width = x - w,
            e.top = b,
            e.height = M - b,
            e.size = (x - w) * (M - b)
    }, B = (e, t) => t.length - e.length, D = (e, t) => {
        let r = e.size || H(e),
            n = t.size || H(t);
        return Math.abs(n - r) < (r + n) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : n - r
    }, W = (e, t) => {
        let r,
            n,
            o = e.slice(0),
            i = e.length,
            l = i - 2;
        for (t |= 0, r = 0; r < i; r++)
            n = (r + t) % l, e[r++] = o[n], e[r] = o[n + 1]
    }, Q = (e, t, r, n, o) => {
        let i,
            l,
            a,
            s,
            h = e.length,
            p = 0,
            g = h - 2;
        for (r *= 6, l = 0; l < h; l += 6)
            i = (l + r) % g, s = e[i] - (t[l] - n), a = e[i + 1] - (t[l + 1] - o), p += z(a * a + s * s);
        return p
    }, Z = (e, t, r) => {
        let n,
            o,
            i,
            l = e.length,
            a = E(e),
            s = E(t),
            h = s[0] - a[0],
            p = s[1] - a[1],
            g = Q(e, t, 0, h, p),
            d = 0;
        for (i = 6; i < l; i += 6)
            o = Q(e, t, i / 6, h, p), o < g && (g = o, d = i);
        if (r)
            for (n = e.slice(0), c(n), i = 6; i < l; i += 6)
                o = Q(n, t, i / 6, h, p), o < g && (g = o, d = -i);
        return d / 6
    }, k = (e, t, r) => {
        let n,
            o,
            i,
            l,
            a,
            s,
            h = e.length,
            p = 1e20,
            g = 0,
            c = 0;
        for (; --h > -1;)
            for (n = e[h], s = n.length, a = 0; a < s; a += 6)
                o = n[a] - t, i = n[a + 1] - r, l = z(o * o + i * i), l < p && (p = l, g = n[a], c = n[a + 1]);
        return [g, c]
    }, $ = (e, t, r, n, o, i) => {
        let l,
            a,
            s,
            h,
            p,
            g = t.length,
            c = 0,
            d = Math.min(e.size || H(e), t[r].size || H(t[r])) * n,
            f = 1e20,
            u = e.centerX + o,
            y = e.centerY + i;
        for (a = r; a < g && (l = t[a].size || H(t[a]), !(l < d)); a++)
            s = t[a].centerX - u, h = t[a].centerY - y, p = z(s * s + h * h), p < f && (c = a, f = p);
        return p = t[c],
            t.splice(c, 1),
            p
    }, J = (e, t) => {
        let r,
            n,
            o,
            i,
            l,
            a,
            s,
            h,
            p,
            g,
            c,
            d,
            f,
            u,
            y = 0,
            _ = e.length,
            m = t / ((_ - 2) / 6);
        for (f = 2; f < _; f += 6)
            for (y += m; y > .999999;)
                r = e[f - 2], n = e[f - 1], o = e[f], i = e[f + 1], l = e[f + 2], a = e[f + 3], s = e[f + 4], h = e[f + 5], u = 1 / ((Math.floor(y) || 1) + 1), p = r + (o - r) * u, c = o + (l - o) * u, p += (c - p) * u, c += (l + (s - l) * u - c) * u, g = n + (i - n) * u, d = i + (a - i) * u, g += (d - g) * u, d += (a + (h - a) * u - d) * u, e.splice(f, 4, r + (o - r) * u, n + (i - n) * u, p, g, p + (c - p) * u, g + (d - g) * u, c, d, l + (s - l) * u, a + (h - a) * u), f += 6, _ += 6, y--;
        return e
    }, K = (e, t, r, n, o) => {
        let i,
            l,
            a,
            s,
            h,
            p,
            g,
            d = t.length - e.length,
            f = d > 0 ? t : e,
            u = d > 0 ? e : t,
            y = 0,
            _ = "complexity" === n ? B : D,
            m = "position" === n ? 0 : "number" == typeof n ? n : .8,
            x = u.length,
            w = "object" == typeof r && r.push ? r.slice(0) : [r],
            M = "reverse" === w[0] || w[0] < 0,
            b = "log" === r;
        if (u[0]) {
            if (f.length > 1 && (e.sort(_), t.sort(_), p = f.size || U(f), p = u.size || U(u), p = f.centerX - u.centerX, g = f.centerY - u.centerY, _ === D))
                for (x = 0; x < u.length; x++)
                    f.splice(x, 0, $(u[x], f, x, m, p, g));
            if (d)
                for (d < 0 && (d = -d), f[0].length > u[0].length && J(u[0], (f[0].length - u[0].length) / 6 | 0), x = u.length; y < d;)
                    s = f[x].size || H(f[x]), a = k(u, f[x].centerX, f[x].centerY), s = a[0], h = a[1], u[x++] = [s, h, s, h, s, h, s, h], u.totalPoints += 8, y++;
            for (x = 0; x < e.length; x++)
                i = t[x], l = e[x], d = i.length - l.length, d < 0 ? J(i, -d / 6 | 0) : d > 0 && J(l, d / 6 | 0), M && !1 !== o && !l.reversed && c(l), (r = w[x] || 0 === w[x] ? w[x] : "auto") && (l.closed || Math.abs(l[0] - l[l.length - 2]) < .5 && Math.abs(l[1] - l[l.length - 1]) < .5 ? "auto" === r || "log" === r ? (w[x] = r = Z(l, i, !x || !1 === o), r < 0 && (M = !0, c(l), r = -r), W(l, 6 * r)) : "reverse" !== r && (x && r < 0 && c(l), W(l, 6 * (r < 0 ? -r : r))) : !M && ("auto" === r && Math.abs(i[0] - l[0]) + Math.abs(i[1] - l[1]) + Math.abs(i[i.length - 2] - l[l.length - 2]) + Math.abs(i[i.length - 1] - l[l.length - 1]) > Math.abs(i[0] - l[l.length - 2]) + Math.abs(i[1] - l[l.length - 1]) + Math.abs(i[i.length - 2] - l[0]) + Math.abs(i[i.length - 1] - l[1]) || r % 2) ? (c(l), w[x] = -1, M = !0) : "auto" === r ? w[x] = 0 : "reverse" === r && (w[x] = -1), l.closed !== i.closed && (l.closed = i.closed = !1));
            return b && V("shapeIndex:[" + w.join(",") + "]"),
                e.shapeIndex = w,
                w
        }
    }, ee = (e, t, r, n, o) => {
        let i = y(e[0]),
            l = y(e[1]);
        K(i, l, t || 0 === t ? t : "auto", r, o) && (e[0] = _(i), e[1] = _(l), "log" !== n && !0 !== n || V('precompile:["' + e[0] + '","' + e[1] + '"]'))
    }, te = (e, t) => {
        let r,
            n,
            o,
            i,
            l,
            a,
            s,
            h = 0,
            p = parseFloat(e[0]),
            g = parseFloat(e[1]),
            c = p + "," + g + " ";
        for (o = e.length, r = .5 * t / (.5 * o - 1), n = 0; n < o - 2; n += 2) {
            if (h += r, a = parseFloat(e[n + 2]), s = parseFloat(e[n + 3]), h > .999999)
                for (l = 1 / (Math.floor(h) + 1), i = 1; h > .999999;)
                    c += (p + (a - p) * l * i).toFixed(2) + "," + (g + (s - g) * l * i).toFixed(2) + " ", h--, i++;
            c += a + "," + s + " ",
                p = a,
                g = s
        }
        return c
    }, re = e => {
        let t = e[0].match(I) || [],
            r = e[1].match(I) || [],
            n = r.length - t.length;
        n > 0 ? e[0] = te(t, n) : e[1] = te(r, -n)
    }, ne = e => isNaN(e) ? re : t => {
        re(t),
            t[1] = ((e, t) => {
                if (!t)
                    return e;
                let r,
                    n,
                    o,
                    i = e.match(I) || [],
                    l = i.length,
                    a = "";
                for ("reverse" === t ? (n = l - 1, r = -2) : (n = (2 * (parseInt(t, 10) || 0) + 1 + 100 * l) % l, r = 2), o = 0; o < l; o += 2)
                    a += i[n - 1] + "," + i[n] + " ", n = (n + r) % l;
                return a
            })(t[1], parseInt(e, 10))
    }, oe = (e, t) => {
        let r,
            n,
            o,
            i,
            l,
            a,
            s,
            h,
            p,
            g,
            c,
            d,
            f = e.length,
            u = .2 * (t || 1);
        for (; --f > -1;) {
            for (n = e[f], c = n.isSmooth = n.isSmooth || [0, 0, 0, 0], d = n.smoothData = n.smoothData || [0, 0, 0, 0], c.length = 4, h = n.length - 2, s = 6; s < h; s += 6)
                o = n[s] - n[s - 2], i = n[s + 1] - n[s - 1], l = n[s + 2] - n[s], a = n[s + 3] - n[s + 1], p = v(i, o), g = v(a, l), r = Math.abs(p - g) < u, r && (d[s - 2] = p, d[s + 2] = g, d[s - 1] = z(o * o + i * i), d[s + 3] = z(l * l + a * a)), c.push(r, r, 0, 0, r, r);
            n[h] === n[0] && n[h + 1] === n[1] && (o = n[0] - n[h - 2], i = n[1] - n[h - 1], l = n[2] - n[0], a = n[3] - n[1], p = v(i, o), g = v(a, l), Math.abs(p - g) < u && (d[h - 2] = p, d[2] = g, d[h - 1] = z(o * o + i * i), d[3] = z(l * l + a * a), c[h - 2] = c[h - 1] = !0))
        }
        return e
    }, ie = e => {
        let t = e.trim().split(" ");
        return {
            x: (~e.indexOf("left") ? 0 : ~e.indexOf("right") ? 100 : isNaN(parseFloat(t[0])) ? 50 : parseFloat(t[0])) / 100,
            y: (~e.indexOf("top") ? 0 : ~e.indexOf("bottom") ? 100 : isNaN(parseFloat(t[1])) ? 50 : parseFloat(t[1])) / 100
        }
    }, le = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.", ae = function (e, t, r, n) {
        let o,
            i,
            l = this._origin,
            a = this._eOrigin,
            s = e[r] - l.x,
            h = e[r + 1] - l.y,
            p = z(s * s + h * h),
            g = v(h, s);
        var c;
        return s = t[r] - a.x,
            h = t[r + 1] - a.y,
            o = v(h, s) - g,
            i = (c = o) !== c % A ? c + (c < 0 ? C : -C) : c,
            !n && w && Math.abs(i + w.ca) < O && (n = w),
            this._anchorPT = w = {
                _next: this._anchorPT,
                t: e,
                sa: g,
                ca: n && i * n.ca < 0 && Math.abs(i) > R ? o : i,
                sl: p,
                cl: z(s * s + h * h) - p,
                i: r
            }
    }, se = e => {
        m = P(),
            b = b || m && m.plugins.morphSVG,
            m && b ? (x = m.utils.toArray, b.prototype._tweenRotation = ae, M = 1) : e && V("Please gsap.registerPlugin(MorphSVGPlugin)")
    };
const he = {
    version: "3.12.2",
    name: "morphSVG",
    rawVars: 1,
    register(e, t) {
        m = e,
            b = t,
            se()
    },
    init(e, t, r, n, o) {
        if (M || se(1), !t)
            return V("invalid shape"), !1;
        let i,
            l,
            a,
            s,
            h,
            p,
            g,
            c,
            d,
            u,
            m,
            b,
            P,
            v,
            S,
            T,
            z,
            A,
            C,
            O,
            R,
            j;
        if (N(t) && (t = t.call(r, n, e, o)), "string" == typeof t || t.getBBox || t[0])
            t = {
                shape: t
            };
        else if ("object" == typeof t) {
            for (l in i = {}, t)
                i[l] = N(t[l]) && "render" !== l ? t[l].call(r, n, e, o) : t[l];
            t = i
        }
        let Y = e.nodeType ? window.getComputedStyle(e) : {},
            G = Y.fill + "",
            X = !("none" === G || "0" === (G.match(I) || [])[3] || "evenodd" === Y.fillRule),
            E = (t.origin || "50 50").split(",");
        if (i = (e.nodeName + "").toUpperCase(), h = "POLYLINE" === i || "POLYGON" === i, "PATH" !== i && !h && !t.prop)
            return V("Cannot morph a <" + i + "> element. " + le), !1;
        if (l = "PATH" === i ? "d" : "points", !t.prop && !N(e.setAttribute))
            return !1;
        if (s = ((e, t, r) => {
            let n,
                o;
            return (!("string" == typeof e) || L.test(e) || (e.match(I) || []).length < 3) && (n = x(e)[0], n ? (o = (n.nodeName + "").toUpperCase(), t && "PATH" !== o && (n = f(n, !1), o = "PATH"), e = n.getAttribute("PATH" === o ? "d" : "points") || "", n === r && (e = n.getAttributeNS(null, "data-original") || e)) : (V("WARNING: invalid morph to: " + e), e = !1)),
                e
        })(t.shape || t.d || t.points || "", "d" === l, e), h && F.test(s))
            return V("A <" + i + "> cannot accept path data. " + le), !1;
        if (p = t.shapeIndex || 0 === t.shapeIndex ? t.shapeIndex : "auto", g = t.map || he.defaultMap, this._prop = t.prop, this._render = t.render || he.defaultRender, this._apply = "updateTarget" in t ? t.updateTarget : he.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision), this._tween = r, s) {
            if (this._target = e, z = "object" == typeof t.precompile, u = this._prop ? e[this._prop] : e.getAttribute(l), this._prop || e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", u), "d" === l || this._prop) {
                if (u = y(z ? t.precompile[0] : u), m = y(z ? t.precompile[1] : s), !z && !K(u, m, p, g, X))
                    return !1;
                for ("log" !== t.precompile && !0 !== t.precompile || V('precompile:["' + _(u) + '","' + _(m) + '"]'), R = "linear" !== (t.type || he.defaultType), R && (u = oe(u, t.smoothTolerance), m = oe(m, t.smoothTolerance), u.size || U(u), m.size || U(m), O = ie(E[0]), this._origin = u.origin = {
                    x: u.left + O.x * u.width,
                    y: u.top + O.y * u.height
                }, E[1] && (O = ie(E[1])), this._eOrigin = {
                    x: m.left + O.x * m.width,
                    y: m.top + O.y * m.height
                }), this._rawPath = e._gsRawPath = u, P = u.length; --P > -1;)
                    for (S = u[P], T = m[P], c = S.isSmooth || [], d = T.isSmooth || [], v = S.length, w = 0, b = 0; b < v; b += 2)
                        T[b] === S[b] && T[b + 1] === S[b + 1] || (R ? c[b] && d[b] ? (A = S.smoothData, C = T.smoothData, j = b + (b === v - 4 ? 7 - v : 5), this._controlPT = {
                            _next: this._controlPT,
                            i: b,
                            j: P,
                            l1s: A[b + 1],
                            l1c: C[b + 1] - A[b + 1],
                            l2s: A[j],
                            l2c: C[j] - A[j]
                        }, a = this._tweenRotation(S, T, b + 2), this._tweenRotation(S, T, b, a), this._tweenRotation(S, T, j - 1, a), b += 4) : this._tweenRotation(S, T, b) : (a = this.add(S, b, S[b], T[b], 0, 0, 0, 0, 0, 1), a = this.add(S, b + 1, S[b + 1], T[b + 1], 0, 0, 0, 0, 0, 1) || a))
            } else
                a = this.add(e, "setAttribute", e.getAttribute(l) + "", s + "", n, o, 0, ne(p), l);
            R && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1), a = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)),
                a && (this._props.push("morphSVG"), a.end = s, a.endProp = l)
        }
        return q
    },
    render(e, t) {
        let r,
            n,
            o,
            i,
            l,
            a,
            s,
            h,
            p,
            g,
            c,
            d,
            f,
            u = t._rawPath,
            y = t._controlPT,
            _ = t._anchorPT,
            m = t._rnd,
            x = t._target,
            w = t._pt;
        for (; w;)
            w.r(e, w.d), w = w._next;
        if (1 === e && t._apply)
            for (w = t._pt; w;)
                w.end && (t._prop ? x[t._prop] = w.end : x.setAttribute(w.endProp, w.end)), w = w._next;
        else if (u) {
            for (; _;)
                a = _.sa + e * _.ca, l = _.sl + e * _.cl, _.t[_.i] = t._origin.x + S(a) * l, _.t[_.i + 1] = t._origin.y + T(a) * l, _ = _._next;
            for (o = e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1; y;)
                s = y.i, i = u[y.j], f = s + (s === i.length - 4 ? 7 - i.length : 5), a = v(i[f] - i[s + 1], i[f - 1] - i[s]), c = T(a), d = S(a), p = i[s + 2], g = i[s + 3], l = y.l1s + o * y.l1c, i[s] = p - d * l, i[s + 1] = g - c * l, l = y.l2s + o * y.l2c, i[f - 1] = p + d * l, i[f] = g + c * l, y = y._next;
            if (x._gsRawPath = u, t._apply) {
                for (r = "", n = " ", h = 0; h < u.length; h++)
                    for (i = u[h], l = i.length, r += "M" + (i[0] * m | 0) / m + " " + (i[1] * m | 0) / m + " C", s = 2; s < l; s++)
                        r += (i[s] * m | 0) / m + " ";
                t._prop ? x[t._prop] = r : x.setAttribute("d", r)
            }
        }
        t._render && u && t._render.call(t._tween, u, x)
    },
    kill(e) {
        this._pt = this._rawPath = 0
    },
    getRawPath: function (e) {
        let t,
            r = (e = h(e) && n.test(e) && document.querySelector(e) || e).getAttribute ? e : 0;
        return r && (e = e.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), t = r._gsPath[e], t && !t._dirty ? t : r._gsPath[e] = y(e)) : e ? h(e) ? y(e) : p(e[0]) ? [e] : e : console.warn("Expecting a <path> element or an SVG path data string")
    },
    stringToRawPath: y,
    rawPathToString: _,
    normalizeStrings(e, t, {
        shapeIndex: r,
        map: n
    }) {
        let o = [e, t];
        return ee(o, r, n),
            o
    },
    pathFilter: ee,
    pointsFilter: re,
    getTotalSize: U,
    equalizeSegmentQuantity: K,
    convertToPath: (e, t) => x(e).map(e => f(e, !1 !== t)),
    defaultType: "linear",
    defaultUpdateTarget: !0,
    defaultMap: "size"
};
P() && m.registerPlugin(he);
export default he;
export {
    he as MorphSVGPlugin
};
