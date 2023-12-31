/*!
 * SplitText 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

const D = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
let u, e, t, F, C, i, n = /(?:\r|\n|\t\t)/g, s = /(?:\s\s+)/g, E = D => {
    u = document,
        e = window,
        F = F || D || e.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
        F && (i = F.utils.toArray, C = F.core.context || function () { }, t = 1)
}, l = function () {
    return String.fromCharCode.apply(null, arguments)
}, r = l(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), o = l(103, 115, 97, 112, 46, 99, 111, 109), d = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, a = function (D) {
    var u = "undefined" != typeof window,
        e = 0 === (u ? window.location.href : "").indexOf(l(102, 105, 108, 101, 58, 47, 47)) || -1 !== D.indexOf(l(108, 111, 99, 97, 108, 104, 111, 115, 116)) || d.test(D),
        t = [r, o, l(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), l(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), l(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), l(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), l(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), l(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), l(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(99, 100, 112, 110, 46, 105, 111), l(112, 101, 110, 115, 46, 105, 111), l(103, 97, 110, 110, 111, 110, 46, 116, 118), l(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), l(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), l(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), l(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), l(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), l(112, 108, 110, 107, 114, 46, 99, 111), l(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), l(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), l(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), l(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), l(99, 115, 98, 46, 97, 112, 112), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), l(99, 111, 100, 105, 101, 114, 46, 105, 111), l(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), l(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), l(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), l(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), l(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
        C = function () {
            if (u)
                if ("loading" === document.readyState || "interactive" === document.readyState)
                    document.addEventListener("readystatechange", C);
                else {
                    document.removeEventListener("readystatechange", C);
                    var D = "object" == typeof F ? F : u && window.gsap;
                    u && window.console && !window._gsapWarned && "object" == typeof D && !1 !== D.config().trialWarn && (console.log(l(37, 99, 87, 97, 114, 110, 105, 110, 103), l(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(l(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "SplitText" + l(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(l(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), l(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
        },
        i = t.length;
    for (setTimeout(C, 50); --i > -1;)
        if (-1 !== D.indexOf(t[i]))
            return !0;
    return true || !setTimeout((function () {
        u && (window.location.href = l(104, 116, 116, 112, 115, 58, 47, 47) + r + l(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=SplitText&source=trial")
    }), 4e3)
}
    ("undefined" != typeof window ? window.location.host : ""), p = D => e.getComputedStyle(D), h = D => "absolute" === D.position || !0 === D.absolute, B = (D, u) => {
        let e,
            t = u.length;
        for (; --t > -1;)
            if (e = u[t], D.substr(0, e.length) === e)
                return e.length
    }, f = (D = "", u) => {
        let e = ~D.indexOf("++"),
            t = 1;
        return e && (D = D.split("++").join("")),
            () => "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
    }, A = (D, u, e) => {
        let t = D.nodeType;
        if (1 === t || 9 === t || 11 === t)
            for (D = D.firstChild; D; D = D.nextSibling)
                A(D, u, e);
        else
            3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
    }, c = (D, u) => {
        let e = u.length;
        for (; --e > -1;)
            D.push(u[e])
    }, g = (D, u, e) => {
        let t;
        for (; D && D !== u;) {
            if (t = D._next || D.nextSibling, t)
                return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent
        }
    }, x = D => {
        let u,
            e,
            t = i(D.childNodes),
            F = t.length;
        for (u = 0; u < F; u++)
            e = t[u], e._isSplit ? x(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e))
    }, y = (D, u) => parseFloat(u[D]) || 0, _ = (D, e, t, F, C, i, n) => {
        let s,
            E,
            l,
            r,
            o,
            d,
            a,
            B,
            f,
            _,
            b,
            S,
            w = p(D),
            m = y("paddingLeft", w),
            v = -999,
            T = y("borderBottomWidth", w) + y("borderTopWidth", w),
            N = y("borderLeftWidth", w) + y("borderRightWidth", w),
            L = y("paddingTop", w) + y("paddingBottom", w),
            W = y("paddingLeft", w) + y("paddingRight", w),
            O = y("fontSize", w) * (e.lineThreshold || .2),
            H = w.textAlign,
            V = [],
            R = [],
            j = [],
            M = e.wordDelimiter || " ",
            k = e.tag ? e.tag : e.span ? "span" : "div",
            P = e.type || e.split || "chars,words,lines",
            z = C && ~P.indexOf("lines") ? [] : null,
            $ = ~P.indexOf("words"),
            q = ~P.indexOf("chars"),
            G = h(e),
            I = e.linesClass,
            J = ~(I || "").indexOf("++"),
            K = [],
            Q = "flex" === w.display,
            U = D.style.display;
        for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), E = D.getElementsByTagName("*"), l = E.length, o = [], s = 0; s < l; s++)
            o[s] = E[s];
        if (z || G)
            for (s = 0; s < l; s++)
                r = o[s], d = r.parentNode === D, (d || G || q && !$) && (S = r.offsetTop, z && d && Math.abs(S - v) > O && ("BR" !== r.nodeName || 0 === s) && (a = [], z.push(a), v = S), G && (r._x = r.offsetLeft, r._y = S, r._w = r.offsetWidth, r._h = r.offsetHeight), z && ((r._isSplit && d || !q && d || $ && d || !$ && r.parentNode.parentNode === D && !r.parentNode._isSplit) && (a.push(r), r._x -= m, g(r, D, M) && (r._wordEnd = !0)), "BR" === r.nodeName && (r.nextSibling && "BR" === r.nextSibling.nodeName || 0 === s) && z.push([])));
        for (s = 0; s < l; s++)
            if (r = o[s], d = r.parentNode === D, "BR" !== r.nodeName)
                if (G && (f = r.style, $ || d || (r._x += r.parentNode._x, r._y += r.parentNode._y), f.left = r._x + "px", f.top = r._y + "px", f.position = "absolute", f.display = "block", f.width = r._w + 1 + "px", f.height = r._h + "px"), !$ && q)
                    if (r._isSplit)
                        for (r._next = E = r.nextSibling, r.parentNode.appendChild(r); E && 3 === E.nodeType && " " === E.textContent;)
                            r._next = E.nextSibling, r.parentNode.appendChild(E), E = E.nextSibling;
                    else
                        r.parentNode._isSplit ? (r._parent = r.parentNode, !r.previousSibling && r.firstChild && (r.firstChild._isFirst = !0), r.nextSibling && " " === r.nextSibling.textContent && !r.nextSibling.nextSibling && K.push(r.nextSibling), r._next = r.nextSibling && r.nextSibling._isFirst ? null : r.nextSibling, r.parentNode.removeChild(r), o.splice(s--, 1), l--) : d || (S = !r.nextSibling && g(r.parentNode, D, M), r.parentNode._parent && r.parentNode._parent.appendChild(r), S && r.parentNode.appendChild(u.createTextNode(" ")), "span" === k && (r.style.display = "inline"), V.push(r));
                else
                    r.parentNode._isSplit && !r._isSplit && "" !== r.innerHTML ? R.push(r) : q && !r._isSplit && ("span" === k && (r.style.display = "inline"), V.push(r));
            else
                z || G ? (r.parentNode && r.parentNode.removeChild(r), o.splice(s--, 1), l--) : $ || D.appendChild(r);
        for (s = K.length; --s > -1;)
            K[s].parentNode.removeChild(K[s]);
        if (z) {
            for (G && (_ = u.createElement(k), D.appendChild(_), b = _.offsetWidth + "px", S = _.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(_)), f = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;)
                D.removeChild(D.firstChild);
            for (B = " " === M && (!G || !$ && !q), s = 0; s < z.length; s++) {
                for (a = z[s], _ = u.createElement(k), _.style.cssText = "display:block;text-align:" + H + ";position:" + (G ? "absolute;" : "relative;"), I && (_.className = I + (J ? s + 1 : "")), j.push(_), l = a.length, E = 0; E < l; E++)
                    "BR" !== a[E].nodeName && (r = a[E], _.appendChild(r), B && r._wordEnd && _.appendChild(u.createTextNode(" ")), G && (0 === E && (_.style.top = r._y + "px", _.style.left = m + S + "px"), r.style.top = "0px", S && (r.style.left = r._x - S + "px")));
                0 === l ? _.innerHTML = "&nbsp;" : $ || q || (x(_), A(_, String.fromCharCode(160), " ")),
                    G && (_.style.width = b, _.style.height = r._h + "px"),
                    D.appendChild(_)
            }
            D.style.cssText = f
        }
        G && (n > D.clientHeight && (D.style.height = n - L + "px", D.clientHeight < n && (D.style.height = n + T + "px")), i > D.clientWidth && (D.style.width = i - W + "px", D.clientWidth < i && (D.style.width = i + N + "px"))),
            Q && (U ? D.style.display = U : D.style.removeProperty("display")),
            c(t, V),
            $ && c(F, R),
            c(C, j)
    }, b = (e, t, F, C) => {
        let i,
            E,
            l,
            r,
            o,
            d,
            a,
            p,
            f = t.tag ? t.tag : t.span ? "span" : "div",
            c = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
            g = h(t),
            x = t.wordDelimiter || " ",
            y = " " !== x ? "" : g ? "&#173; " : " ",
            _ = "</" + f + ">",
            b = 1,
            S = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : B : null,
            w = u.createElement("div"),
            m = e.parentNode;
        for (m.insertBefore(w, e), w.textContent = e.nodeValue, m.removeChild(e), i = function D(u) {
            let e = u.nodeType,
                t = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof u.textContent)
                    return u.textContent;
                for (u = u.firstChild; u; u = u.nextSibling)
                    t += D(u)
            } else if (3 === e || 4 === e)
                return u.nodeValue;
            return t
        }
            (e = w), a = -1 !== i.indexOf("<"), !1 !== t.reduceWhiteSpace && (i = i.replace(s, " ").replace(n, "")), a && (i = i.split("<").join("{{LT}}")), o = i.length, E = (" " === i.charAt(0) ? y : "") + F(), l = 0; l < o; l++)if (d = i.charAt(l), S && (p = S(i.substr(l), t.specialChars)))
                d = i.substr(l, p || 1), E += c && " " !== d ? C() + d + "</" + f + ">" : d, l += p - 1;
            else if (d === x && i.charAt(l - 1) !== x && l) {
                for (E += b ? _ : "", b = 0; i.charAt(l + 1) === x;)
                    E += y, l++;
                l === o - 1 ? E += y : ")" !== i.charAt(l + 1) && (E += y + F(), b = 1)
            } else
                "{" === d && "{{LT}}" === i.substr(l, 6) ? (E += c ? C() + "{{LT}}</" + f + ">" : "{{LT}}", l += 5) : d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || i.charCodeAt(l + 1) >= 65024 && i.charCodeAt(l + 1) <= 65039 ? (r = ((i.substr(l, 12).split(D) || [])[1] || "").length || 2, E += c && " " !== d ? C() + i.substr(l, r) + "</" + f + ">" : i.substr(l, r), l += r - 1) : E += c && " " !== d ? C() + d + "</" + f + ">" : d;
        e.outerHTML = E + (b ? _ : ""),
            a && A(m, "{{LT}}", "<")
    }, S = (D, u, e, t) => {
        let F,
            C,
            n = i(D.childNodes),
            s = n.length,
            E = h(u);
        if (3 !== D.nodeType || s > 1) {
            for (u.absolute = !1, F = 0; F < s; F++)
                C = n[F], C._next = C._isFirst = C._parent = C._wordEnd = null, (3 !== C.nodeType || /\S+/.test(C.nodeValue)) && (E && 3 !== C.nodeType && "inline" === p(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, S(C, u, e, t));
            return u.absolute = E,
                void (D._isSplit = !0)
        }
        b(D, u, e, t)
    };
class w {
    constructor(D, u) {
        t || E(),
            this.elements = i(D),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = u || {},
            C(this),
            a && this.split(u)
    }
    split(D) {
        this.isSplit && this.revert(),
            this.vars = D = D || this.vars,
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        let u,
            e,
            t,
            F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = f(D.wordsClass, C),
            n = f(D.charsClass, C);
        for (; --F > -1;)
            t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, S(t, D, i, n), _(t, D, this.chars, this.words, this.lines, e, u);
        return this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            this.isSplit = !0,
            this
    }
    revert() {
        let D = this._originals;
        if (!D)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach((u, e) => u.innerHTML = D[e]),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this.isSplit = !1,
            this
    }
    static create(D, u) {
        return new w(D, u)
    }
}
w.version = "3.12.2", w.register = E;
export default w;
export {
    w as SplitText
};
