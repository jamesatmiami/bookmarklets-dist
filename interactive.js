! function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}([function (e, t, r) {
    "use strict";

    function n() {
        function e(e, t) {
            return new a.InfoObject(e, "INTERACTIVE INFO")
        }

        function t(e, t) {
            t.color = null === e.accName ? "maroon" : "#008080"
        }(0, l.addPolyfills)();
        var r = [{
                selector: "a",
                color: "olive",
                label: "a"
            }, {
                selector: "audio[controls]",
                color: "olive",
                label: "audio"
            }, {
                selector: "button",
                color: "olive",
                label: "button"
            }, {
                selector: "embed",
                color: "purple",
                label: "embed"
            }, {
                selector: "iframe",
                color: "teal",
                label: "iframe"
            }, {
                selector: "img[usemap]",
                color: "maroon",
                label: "img"
            }, {
                selector: "input",
                color: "navy",
                label: "input"
            }, {
                selector: "keygen",
                color: "teal",
                label: "keygen"
            }, {
                selector: "label",
                color: "purple",
                label: "label"
            }, {
                selector: "object[usemap]",
                color: "gray",
                label: "object"
            }, {
                selector: "select",
                color: "green",
                label: "select"
            }, {
                selector: "textarea",
                color: "navy",
                label: "textarea"
            }, {
                selector: "video[controls]",
                color: "navy",
                label: "video"
            }, {
                selector: "meter",
                color: "maroon",
                label: "meter"
            }, {
                selector: "output",
                color: "brown",
                label: "output"
            }, {
                selector: "progress",
                color: "gray",
                label: "progress"
            }, {
                selector: "area",
                color: "brown",
                label: "area"
            }, {
                selector: "details",
                color: "purple",
                label: "details"
            }, {
                selector: "svg",
                color: "green",
                label: "svg"
            }, {
                selector: "[tabindex]",
                color: "teal",
                label: "tabindex"
            }],
            n = r.map(function (e) {
                return e.selector
            }).join(", "),
            s = {
                appName: "Interactive",
                cssClass: (0, i.getCssClass)("Interactive"),
                msgText: "No interactive elements (" + n + ") found.",
                targetList: r,
                getInfo: e,
                evalInfo: t,
                dndFlag: !0
            };
        return new o.Bookmarklet(s)
    }
    var o = r(7),
        a = r(8),
        i = r(5),
        l = r(3);
    ! function () {
        n().run()
    }()
}, function (e, t, r) {
    "use strict";

    function n(e) {
        var t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return e.replace(t, "").replace(/\s+/g, " ")
    }

    function o(e, t) {
        var r = e.getAttribute(t);
        return null === r ? "" : n(r)
    }

    function a(e) {
        var t = e.tagName.toLowerCase();
        switch (t) {
            case "img":
            case "area":
                return !0;
            case "input":
                return e.type && "image" === e.type
        }
        return !1
    }

    function i(e) {
        var t = e.getAttribute("alt");
        return null !== t ? 0 === n(t).length : !1
    }

    function l(e) {
        var t = e.tagName.toLowerCase(),
            r = e.type;
        switch (t) {
            case "input":
                return "hidden" !== r;
            case "button":
            case "keygen":
            case "meter":
            case "output":
            case "progress":
            case "select":
            case "textarea":
                return !0;
            default:
                return !1
        }
    }

    function s(e, t) {
        var r = t,
            n = getComputedStyle(e, ":before").content,
            o = getComputedStyle(e, ":after").content;
        return "none" !== n && (r = n + r), "none" !== o && (r += o), r
    }

    function u(e, t) {
        var r = "";
        if (e === t) return "";
        switch (e.nodeType) {
            case Node.ELEMENT_NODE:
                if (a(e)) r = o(e, "alt");
                else if ((0, y.isEmbeddedControl)(e)) r = (0, y.getEmbeddedControlValue)(e);
                else if (e.hasChildNodes()) {
                    for (var i = e.childNodes, l = [], c = 0; c < i.length; c++) {
                        var m = u(i[c], t);
                        m.length && l.push(m)
                    }
                    r = l.length ? l.join(" ") : ""
                }
                r = s(e, r);
                break;
            case Node.TEXT_NODE:
                r = n(e.textContent)
        }
        return r
    }

    function c(e, t) {
        var r = "";
        if (e.hasChildNodes()) {
            for (var n = e.childNodes, o = [], a = 0; a < n.length; a++) {
                var i = u(n[a], t);
                i.length && o.push(i)
            }
            r = o.length ? o.join(" ") : ""
        }
        return s(e, r)
    }

    function m(e, t) {
        var r = [],
            o = void 0;
        return Array.prototype.forEach.call(e.childNodes, function (e) {
            switch (e.nodeType) {
                case Node.ELEMENT_NODE:
                    t(e) && (o = c(e), o.length && r.push(o));
                    break;
                case Node.TEXT_NODE:
                    o = n(e.textContent), o.length && r.push(o)
            }
        }), r.length ? r.join(" ") : ""
    }

    function d(e, t) {
        var r = void 0;
        return r = o(e, t), r.length ? {
            name: r,
            source: t
        } : null
    }

    function f(e) {
        var t = e.getAttribute("alt");
        return null !== t ? (t = n(t), t.length ? {
            name: t,
            source: "alt"
        } : {
            name: "<empty>",
            source: "alt"
        }) : null
    }

    function b(e) {
        var t = void 0;
        return t = c(e), t.length ? {
            name: t,
            source: "contents"
        } : null
    }

    function p(e) {
        return e.length ? {
            name: e,
            source: "default"
        } : null
    }

    function g(e, t) {
        var r = e.querySelector(t);
        if (r) {
            var n = c(r);
            if (n.length) return {
                name: n,
                source: t + " element"
            }
        }
        return null
    }

    function h(e) {
        var t = void 0,
            r = void 0;
        return e.id && (r = document.querySelector('[for="' + e.id + '"]'), r && (t = c(r, e), t.length)) ? {
            name: t,
            source: "label reference"
        } : "function" == typeof e.closest && (r = e.closest("label"), r && (t = c(r, e), t.length)) ? {
            name: t,
            source: "label encapsulation"
        } : null
    }

    function v(e) {
        function t(e) {
            return e.hasAttribute("open")
        }
        var r = void 0,
            n = void 0;
        if (n = e.querySelector("summary"), n && (r = c(n)), t(e)) {
            if (r += m(e, function (e) {
                    return "summary" !== e.tagName.toLowerCase()
                }), r.length) return {
                name: r,
                source: "contents"
            }
        } else if (r.length) return {
            name: r,
            source: "summary element"
        };
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.nameFromDetailsOrSummary = t.nameFromLabelElement = t.nameFromDescendant = t.nameFromDefault = t.nameFromContents = t.nameFromAltAttribute = t.nameFromAttribute = t.getElementContents = t.isLabelableElement = t.hasEmptyAltText = t.getAttributeValue = t.normalize = void 0;
    var y = r(10);
    t.normalize = n, t.getAttributeValue = o, t.hasEmptyAltText = i, t.isLabelableElement = l, t.getElementContents = c, t.nameFromAttribute = d, t.nameFromAltAttribute = f, t.nameFromContents = b, t.nameFromDefault = p, t.nameFromDescendant = g, t.nameFromLabelElement = h, t.nameFromDetailsOrSummary = v
}, function (e, t, r) {
    "use strict";

    function n(e) {
        var t = e.parentElement,
            r = t.tagName.toLowerCase(),
            n = t.parentElement.tagName.toLowerCase();
        return "select" === r ? !0 : "optgroup" === r && "select" === n ? !0 : "datalist" === r ? !0 : !1
    }

    function o(e) {
        for (var t = e.split(" "), r = function (e) {
                var r = t[e].toLowerCase(),
                    n = c.find(function (e) {
                        return e === r
                    });
                return n ? {
                    v: n
                } : void 0
            }, n = 0; n < t.length; n++) {
            var o = r(n);
            if ("object" === ("undefined" == typeof o ? "undefined" : l(o))) return o.v
        }
        return null
    }

    function a(e) {
        var t = e.tagName.toLowerCase(),
            r = e.type;
        if (e.hasAttribute("role")) return o((0, u.getAttributeValue)(e, "role"));
        switch (t) {
            case "a":
                if (e.hasAttribute("href")) return "link";
                break;
            case "area":
                if (e.hasAttribute("href")) return "link";
                break;
            case "article":
                return "article";
            case "aside":
                return "complementary";
            case "body":
                return "document";
            case "button":
                return "button";
            case "datalist":
                return "listbox";
            case "details":
                return "group";
            case "dialog":
                return "dialog";
            case "dl":
                return "list";
            case "fieldset":
                return "group";
            case "footer":
                if (!(0, s.isDescendantOf)(e, ["article", "section"])) return "contentinfo";
                break;
            case "form":
                return "form";
            case "h1":
                return "heading";
            case "h2":
                return "heading";
            case "h3":
                return "heading";
            case "h4":
                return "heading";
            case "h5":
                return "heading";
            case "h6":
                return "heading";
            case "header":
                if (!(0, s.isDescendantOf)(e, ["article", "section"])) return "banner";
                break;
            case "hr":
                return "separator";
            case "img":
                if (!(0, u.hasEmptyAltText)(e)) return "img";
                break;
            case "input":
                if ("button" === r) return "button";
                if ("checkbox" === r) return "checkbox";
                if ("email" === r) return e.hasAttribute("list") ? "combobox" : "textbox";
                if ("image" === r) return "button";
                if ("number" === r) return "spinbutton";
                if ("password" === r) return "textbox";
                if ("radio" === r) return "radio";
                if ("range" === r) return "slider";
                if ("reset" === r) return "button";
                if ("search" === r) return e.hasAttribute("list") ? "combobox" : "textbox";
                if ("submit" === r) return "button";
                if ("tel" === r) return e.hasAttribute("list") ? "combobox" : "textbox";
                if ("text" === r) return e.hasAttribute("list") ? "combobox" : "textbox";
                if ("url" === r) return e.hasAttribute("list") ? "combobox" : "textbox";
                break;
            case "li":
                if ((0, s.hasParentWithName)(e, ["ol", "ul"])) return "listitem";
                break;
            case "link":
                if (e.hasAttribute("href")) return "link";
                break;
            case "main":
                return "main";
            case "menu":
                if ("toolbar" === r) return "toolbar";
                break;
            case "menuitem":
                if ("command" === r) return "menuitem";
                if ("checkbox" === r) return "menuitemcheckbox";
                if ("radio" === r) return "menuitemradio";
                break;
            case "meter":
                return "progressbar";
            case "nav":
                return "navigation";
            case "ol":
                return "list";
            case "option":
                if (n(e)) return "option";
                break;
            case "output":
                return "status";
            case "progress":
                return "progressbar";
            case "section":
                return "region";
            case "select":
                return "listbox";
            case "summary":
                return "button";
            case "tbody":
                return "rowgroup";
            case "tfoot":
                return "rowgroup";
            case "thead":
                return "rowgroup";
            case "textarea":
                return "textbox";
            case "th":
                return "columnheader";
            case "ul":
                return "list"
        }
        return null
    }

    function i(e) {
        var t = a(e);
        if (null === t) return !1;
        var r = ["button", "cell", "checkbox", "columnheader", "directory", "gridcell", "heading", "link", "listitem", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowgroup", "rowheader", "switch", "tab", "text", "tooltip", "treeitem"],
            n = r.find(function (e) {
                return e === t
            });
        return "undefined" != typeof n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.nameFromIncludesContents = t.getAriaRole = t.getValidRole = void 0;
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        s = r(4),
        u = r(1);
    t.getValidRole = o, t.getAriaRole = a, t.nameFromIncludesContents = i;
    var c = ["application", "banner", "complementary", "contentinfo", "form", "main", "navigation", "search", "alert", "alertdialog", "button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "treeitem", "combobox", "grid", "listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid", "article", "cell", "columnheader", "definition", "directory", "document", "group", "heading", "img", "list", "listitem", "math", "none", "note", "presentation", "region", "row", "rowgroup", "rowheader", "separator", "table", "text", "toolbar"]
}, function (e, t) {
    "use strict";

    function r() {
        var e = void 0,
            t = "undefined" == typeof window.pageXOffset ? (((e = document.documentElement) || (e = document.body.parentNode)) && "number" == typeof e.ScrollLeft ? e : document.body).ScrollLeft : window.pageXOffset,
            r = "undefined" == typeof window.pageYOffset ? (((e = document.documentElement) || (e = document.body.parentNode)) && "number" == typeof e.ScrollTop ? e : document.body).ScrollTop : window.pageYOffset;
        return {
            x: t,
            y: r
        }
    }

    function n(e, t, n) {
        function o(t) {
            t || (t = window.event);
            var n = r();
            e.style.left = t.clientX + n.x - m + "px", e.style.top = t.clientY + n.y - d + "px", e.style.cursor = "move", t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }

        function a(t) {
            t || (t = window.event), e.style.cursor = "grab", e.style.cursor = "-moz-grab", e.style.cursor = "-webkit-grab", document.removeEventListener ? (document.removeEventListener("mouseup", a, !0), document.removeEventListener("mousemove", o, !0)) : document.detachEvent && (e.detachEvent("onlosecapture", a), e.detachEvent("onmouseup", a), e.detachEvent("onmousemove", o), e.releaseCapture()), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }
        var i = r(),
            l = n.clientX + i.x,
            s = n.clientY + i.y,
            u = e.offsetLeft,
            c = e.offsetTop,
            m = l - u,
            d = s - c;
        t && t(e), document.addEventListener ? (document.addEventListener("mousemove", o, !0), document.addEventListener("mouseup", a, !0)) : document.attachEvent && (e.setCapture(), e.attachEvent("onmousemove", o), e.attachEvent("onmouseup", a), e.attachEvent("onlosecapture", a)), n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0, n.preventDefault ? n.preventDefault() : n.returnValue = !1
    }

    function o() {
        Array.prototype.find || (Array.prototype.find = function (e) {
            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var t, r = Object(this), n = r.length >>> 0, o = arguments[1], a = 0; n > a; a++)
                if (t = r[a], e.call(o, t, a, r)) return t
        }), String.prototype.includes || (String.prototype.includes = function (e, t) {
            return "number" != typeof t && (t = 0), t + e.length > this.length ? !1 : -1 !== this.indexOf(e, t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getScrollOffsets = r, t.drag = n, t.addPolyfills = o
}, function (e, t, r) {
    "use strict";

    function n(e) {
        function t(e) {
            if (e.nodeType === Node.DOCUMENT_NODE) return !0;
            var r = window.getComputedStyle(e, null),
                n = r.getPropertyValue("display"),
                o = r.getPropertyValue("visibility"),
                a = e.getAttribute("hidden"),
                i = e.getAttribute("aria-hidden");
            return "none" === n || "hidden" === o || null !== a || "true" === i ? !1 : t(e.parentNode)
        }
        return t(e)
    }

    function o(e, t) {
        for (var r = 0, n = e.firstElementChild; n;) t.indexOf(n.tagName) > -1 && (r += 1), n = n.nextElementSibling;
        return r
    }

    function a(e, t) {
        return "function" == typeof e.closest ? t.some(function (t) {
            return null !== e.closest(t)
        }) : !1
    }

    function i(e, t) {
        var r = e.parentElement.tagName.toLowerCase();
        return r ? t.some(function (e) {
            return r === e
        }) : !1
    }

    function l(e) {
        var t = e.targetList,
            r = e.cssClass,
            o = e.getInfo,
            a = e.evalInfo,
            i = e.dndFlag,
            l = 0;
        return t.forEach(function (e) {
            var t = document.querySelectorAll(e.selector);
            "function" == typeof e.filter && (t = Array.prototype.filter.call(t, e.filter)), Array.prototype.forEach.call(t, function (t) {
                if (n(t)) {
                    var s = o(t, e);
                    a && a(s, e);
                    var m = t.getBoundingClientRect(),
                        d = (0, u.createOverlay)(e, m, r);
                    i && (0, u.addDragAndDrop)(d);
                    var f = d.firstChild;
                    f.title = (0, c.formatInfo)(s), document.body.appendChild(d), l += 1
                }
            })
        }), l
    }

    function s(e) {
        var t = "div." + e,
            r = document.querySelectorAll(t);
        Array.prototype.forEach.call(r, function (e) {
            document.body.removeChild(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.removeNodes = t.addNodes = t.hasParentWithName = t.isDescendantOf = t.countChildrenWithTagNames = void 0;
    var u = r(12),
        c = r(6);
    t.countChildrenWithTagNames = o, t.isDescendantOf = a, t.hasParentWithName = i, t.addNodes = l, t.removeNodes = s
}, function (e, t) {
    "use strict";

    function r(e) {
        var t = i.classPrefix;
        switch (e) {
            case "Forms":
                return t + "0";
            case "Headings":
                return t + "1";
            case "Images":
                return t + "2";
            case "Landmarks":
                return t + "3";
            case "Lists":
                return t + "4";
            case "Interactive":
                return t + "5"
        }
        return "unrecognizedName"
    }

    function n(e) {
        return i.globalPrefix + e
    }

    function o() {
        return i.title
    }

    function a() {
        return i.version
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCssClass = r, t.getGlobalName = n, t.getTitle = o, t.getVersion = a;
    var i = {};
    Object.defineProperty(i, "classPrefix", {
        value: "a11yGfdXALm"
    }), Object.defineProperty(i, "globalPrefix", {
        value: "a11y"
    }), Object.defineProperty(i, "title", {
        value: "oaa-tools/bookmarklets"
    }), Object.defineProperty(i, "version", {
        value: "0.2.2"
    })
}, function (e, t, r) {
    "use strict";

    function n(e) {
        var t = e.tagName.toLowerCase(),
            r = t;
        if ("input" === t) {
            var n = e.type;
            n && n.length && (r += ' [type="' + n + '"]')
        }
        if ("label" === t) {
            var o = (0, a.getAttributeValue)(e, "for");
            o.length && (r += ' [for="' + o + '"]')
        }
        if ((0, a.isLabelableElement)(e)) {
            var i = e.id;
            i && i.length && (r += ' [id="' + i + '"]')
        }
        if (e.hasAttribute("role")) {
            var l = (0, a.getAttributeValue)(e, "role");
            l.length && (r += ' [role="' + l + '"]')
        }
        return r
    }

    function o(e) {
        var t = "",
            r = e.title,
            n = e.element,
            o = e.grpLabels,
            a = e.accName,
            i = e.accDesc,
            l = e.role,
            s = e.props;
        if (t += "=== " + r + " ===", n && (t += "\nELEMENT: " + n), o && o.length)
            for (var u = o.length - 1; u >= 0; u--) t += "\nGRP. LABEL: " + o[u].name + "\nFROM: " + o[u].source;
        return a && (t += "\nACC. NAME: " + a.name + "\nFROM: " + a.source), i && (t += "\nACC. DESC: " + i.name + "\nFROM: " + i.source), l && (t += "\nROLE: " + l), s && (t += "\nPROPERTIES: " + s), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.formatInfo = t.getElementInfo = void 0;
    var a = r(1);
    t.getElementInfo = n, t.formatInfo = o
}, function (e, t, r) {
    "use strict";

    function n(e) {
        console.log((0, i.getTitle)() + " : v" + (0, i.getVersion)() + " : " + e)
    }

    function o(e) {
        var t = this,
            r = (0, i.getGlobalName)(e.appName);
        if ("object" === a(window[r])) return window[r];
        this.appName = e.appName, this.cssClass = e.cssClass, this.msgText = e.msgText, this.params = e, this.show = !1;
        var o = new s.MessageDialog;
        window.addEventListener("resize", function (e) {
            (0, l.removeNodes)(t.cssClass), o.resize(), t.show = !1
        }), window[r] = this, n(this.appName)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Bookmarklet = void 0;
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        i = r(5),
        l = r(4),
        s = r(9);
    t.Bookmarklet = o, o.prototype.run = function () {
        var e = new s.MessageDialog;
        e.hide(), this.show = !this.show, this.show ? 0 === (0, l.addNodes)(this.params) && (e.show(this.appName, this.msgText), this.show = !1) : (0, l.removeNodes)(this.cssClass)
    }
}, function (e, t, r) {
    "use strict";

    function n(e, t) {
        if (null === e || null === t) return !1;
        var r = e.name,
            n = t.name;
        return "string" == typeof r && "string" == typeof n ? r.toLowerCase().includes(n.toLowerCase()) : !1
    }

    function o(e, t) {
        this.title = t, this.element = (0, i.getElementInfo)(e), this.grpLabels = (0, a.getGroupingLabels)(e), this.accName = (0, a.getAccessibleName)(e), this.accDesc = (0, a.getAccessibleDesc)(e), this.role = (0, l.getAriaRole)(e), n(this.accName, this.accDesc) && (this.accDesc = null)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.InfoObject = void 0;
    var a = r(11),
        i = r(6),
        l = r(2);
    t.InfoObject = o, o.prototype.addProps = function (e) {
        this.props = e
    }
}, function (e, t, r) {
    "use strict";

    function n(e) {
        var t = window.innerWidth / 3.2,
            r = window.innerWidth / 2 - t / 2,
            n = (0, l.getScrollOffsets)();
        e.style.width = t + "px", e.style.left = n.x + r + "px", e.style.top = n.y + 30 + "px"
    }

    function o(e, t) {
        var r = document.createElement("div"),
            o = document.createElement("button");
        return r.className = e, n(r), o.onclick = t, r.appendChild(o), document.body.appendChild(r), r
    }

    function a(e) {
        e && document.body.removeChild(e)
    }

    function i() {
        this.GLOBAL_NAME = "a11yMessageDialog", this.CSS_CLASS = "oaa-message-dialog"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MessageDialog = void 0;
    var l = r(3);
    t.MessageDialog = i, i.prototype.show = function (e, t) {
        var r = this,
            n = this.GLOBAL_NAME,
            a = void 0,
            i = void 0;
        window[n] || (window[n] = o(this.CSS_CLASS, function (e) {
            return r.hide()
        })), a = document.createElement("h2"), a.innerHTML = e, window[n].appendChild(a), i = document.createElement("div"), i.innerHTML = t, window[n].appendChild(i)
    }, i.prototype.hide = function () {
        var e = this.GLOBAL_NAME;
        window[e] && (a(window[e]), delete window[e])
    }, i.prototype.resize = function () {
        var e = this.GLOBAL_NAME;
        window[e] && n(window[e])
    }
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return (0, f.normalize)(e.value)
    }

    function o(e) {
        var t = void 0;
        return t = (0, f.getAttributeValue)(e, "aria-valuetext"), t.length ? t : (t = (0, f.getAttributeValue)(e, "aria-valuenow"), t.length ? t : n(e))
    }

    function a(e) {
        var t = ["email", "password", "search", "tel", "text", "url"],
            r = e.tagName.toLowerCase(),
            o = e.type;
        return "input" === r && -1 !== t.indexOf(o) ? n(e) : "textarea" === r ? n(e) : ""
    }

    function i(e) {
        var t = ["email", "search", "tel", "text", "url"],
            r = e.tagName.toLowerCase(),
            o = e.type;
        return "input" === r && -1 !== t.indexOf(o) ? n(e) : ""
    }

    function l(e) {
        var t = e.tagName.toLowerCase(),
            r = e.type;
        return "input" === t && "range" === r ? o(e) : ""
    }

    function s(e) {
        var t = e.tagName.toLowerCase(),
            r = e.type;
        return "input" === t && "number" === r ? o(e) : ""
    }

    function u(e) {
        var t = e.tagName.toLowerCase();
        if ("select" === t) {
            for (var r = [], n = e.selectedOptions, o = 0; o < n.length; o++) {
                var a = n[o],
                    i = (0, f.normalize)(a.value);
                i.length && r.push(i)
            }
            if (r.length) return r.join(" ")
        }
        return ""
    }

    function c(e) {
        var t = ["textbox", "combobox", "listbox", "slider", "spinbutton"],
            r = (0, d.getAriaRole)(e);
        return -1 !== t.indexOf(r)
    }

    function m(e) {
        var t = (0, d.getAriaRole)(e);
        switch (t) {
            case "textbox":
                return a(e);
            case "combobox":
                return i(e);
            case "listbox":
                return u(e);
            case "slider":
                return l(e);
            case "spinbutton":
                return s(e)
        }
        return ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getEmbeddedControlValue = t.isEmbeddedControl = void 0;
    var d = r(2),
        f = r(1);
    t.isEmbeddedControl = c, t.getEmbeddedControlValue = m
}, function (e, t, r) {
    "use strict";

    function n(e) {
        function t(e, r) {
            var n = e.closest("fieldset");
            if (n) {
                var o = n.querySelector("legend");
                if (o) {
                    var a = (0, u.getElementContents)(o);
                    a.length && r.push({
                        name: a,
                        source: "fieldset/legend"
                    })
                }
                t(n.parentNode, r)
            }
        }
        var r = [];
        return "function" != typeof e.closest ? r : (t(e, r), r)
    }

    function o(e) {
        return (0, u.isLabelableElement)(e) ? n(e) : []
    }

    function a(e, t) {
        var r = e.tagName.toLowerCase(),
            n = (0, c.getAriaRole)(e),
            o = null;
        if (n && ("presentation" === n || "none" === n)) return null;
        switch (r) {
            case "input":
                switch (e.type) {
                    case "hidden":
                        t && (o = (0, u.nameFromLabelElement)(e));
                        break;
                    case "email":
                    case "password":
                    case "search":
                    case "tel":
                    case "text":
                    case "url":
                        o = (0, u.nameFromLabelElement)(e), null === o && (o = (0, u.nameFromAttribute)(e, "placeholder"));
                        break;
                    case "button":
                        o = (0, u.nameFromAttribute)(e, "value");
                        break;
                    case "reset":
                        o = (0, u.nameFromAttribute)(e, "value"), null === o && (o = (0, u.nameFromDefault)("Reset"));
                        break;
                    case "submit":
                        o = (0, u.nameFromAttribute)(e, "value"), null === o && (o = (0, u.nameFromDefault)("Submit"));
                        break;
                    case "image":
                        o = (0, u.nameFromAltAttribute)(e), null === o && (o = (0, u.nameFromAttribute)(e, "value"));
                        break;
                    default:
                        o = (0, u.nameFromLabelElement)(e)
                }
                break;
            case "button":
                o = (0, u.nameFromContents)(e);
                break;
            case "label":
                o = (0, u.nameFromContents)(e);
                break;
            case "keygen":
            case "meter":
            case "output":
            case "progress":
            case "select":
                o = (0, u.nameFromLabelElement)(e);
                break;
            case "textarea":
                o = (0, u.nameFromLabelElement)(e), null === o && (o = (0, u.nameFromAttribute)(e, "placeholder"));
                break;
            case "audio":
                o = {
                    name: "NOT YET IMPLEMENTED",
                    source: ""
                };
                break;
            case "embed":
                o = {
                    name: "NOT YET IMPLEMENTED",
                    source: ""
                };
                break;
            case "iframe":
                o = (0, u.nameFromAttribute)(e, "title");
                break;
            case "img":
            case "area":
                o = (0, u.nameFromAltAttribute)(e);
                break;
            case "object":
                o = {
                    name: "NOT YET IMPLEMENTED",
                    source: ""
                };
                break;
            case "svg":
                o = (0, u.nameFromDescendant)(e, "title");
                break;
            case "video":
                o = {
                    name: "NOT YET IMPLEMENTED",
                    source: ""
                };
                break;
            case "a":
                o = (0, u.nameFromContents)(e);
                break;
            case "details":
                o = (0, u.nameFromDetailsOrSummary)(e);
                break;
            case "figure":
                o = (0, u.nameFromDescendant)(e, "figcaption");
                break;
            case "table":
                o = (0, u.nameFromDescendant)(e, "caption");
                break;
            default:
                ((0, c.nameFromIncludesContents)(e) || t) && (o = (0, u.nameFromContents)(e))
        }
        return null === o && (o = (0, u.nameFromAttribute)(e, "title")), o
    }

    function i(e, t) {
        var r = (0, u.getAttributeValue)(e, t),
            n = void 0,
            o = void 0,
            a = void 0,
            i = void 0,
            s = [];
        if (r.length)
            for (n = r.split(" "), o = 0; o < n.length; o++) a = document.getElementById(n[o]), a && (i = l(a, !0), i && i.name.length && s.push(i.name));
        return s.length ? {
            name: s.join(" "),
            source: t
        } : null
    }

    function l(e, t) {
        var r = null;
        return t || (r = i(e, "aria-labelledby")), null === r && (r = (0, u.nameFromAttribute)(e, "aria-label")), null === r && (r = a(e, t)), r
    }

    function s(e, t) {
        var r = null;
        return t || (r = i(e, "aria-describedby")), null === r && (r = (0, u.nameFromAttribute)(e, "title")), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAccessibleDesc = t.getAccessibleName = t.nameFromNativeSemantics = t.getGroupingLabels = void 0;
    var u = r(1),
        c = r(2);
    t.getGroupingLabels = o, t.nameFromNativeSemantics = a, t.getAccessibleName = l, t.getAccessibleDesc = s
}, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
        var n = (0, a.getScrollOffsets)(),
            o = 68,
            l = 27,
            s = document.createElement("div");
        s.setAttribute("class", [r, "oaa-element-overlay"].join(" ")), s.startLeft = t.left + n.x + "px", s.startTop = t.top + n.y + "px", s.style.left = s.startLeft, s.style.top = s.startTop, s.style.width = Math.max(t.width, o) + "px", s.style.height = Math.max(t.height, l) + "px", s.style.borderColor = e.color, s.style.zIndex = i;
        var u = document.createElement("div");
        return u.setAttribute("class", "oaa-overlay-label"), u.style.backgroundColor = e.color, u.innerHTML = e.label, s.appendChild(u), s
    }

    function o(e) {
        function t(e) {
            var t = 100;
            e.style.zIndex = i += t
        }

        function r(e) {
            e.style.left = e.startLeft, e.style.top = e.startTop
        }
        var n = e.firstChild;
        n.onmousedown = function (e) {
            (0, a.drag)(this.parentNode, t, e)
        }, n.ondblclick = function (e) {
            r(this.parentNode)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addDragAndDrop = t.createOverlay = void 0;
    var a = r(3);
    t.createOverlay = n, t.addDragAndDrop = o;
    var i = 1e5
}]);