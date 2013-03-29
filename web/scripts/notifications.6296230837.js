(function(a, b) {
	function c(a) {
		return K.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	function d(a) {
		if (!cp[a]) {
			var b = H.body,
				c = K("<" + a + ">").appendTo(b),
				d = c.css("display");
			c.remove();
			if (d === "none" || d === "") {
				cq || (cq = H.createElement("iframe"), cq.frameBorder = cq.width = cq.height = 0), b.appendChild(cq);
				if (!cr || !cq.createElement) cr = (cq.contentWindow || cq.contentDocument).document, cr.write((H.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cr.close();
				c = cr.createElement(a), cr.body.appendChild(c), d = K.css(c, "display"), b.removeChild(cq)
			}
			cp[a] = d
		}
		return cp[a]
	}
	function e(a, b) {
		var c = {};
		return K.each(cv.concat.apply([], cv.slice(0, b)), function() {
			c[this] = a
		}), c
	}
	function f() {
		cw = b
	}
	function g() {
		return setTimeout(f, 0), cw = K.now()
	}
	function h() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	function i() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}
	function j(a, c) {
		a.dataFilter && (c = a.dataFilter(c, a.dataType));
		var d = a.dataTypes,
			e = {}, f, g, h = d.length,
			i, j = d[0],
			k, l, m, n, o;
		for (f = 1; f < h; f++) {
			if (f === 1) for (g in a.converters) typeof g == "string" && (e[g.toLowerCase()] = a.converters[g]);
			k = j, j = d[f];
			if (j === "*") j = k;
			else if (k !== "*" && k !== j) {
				l = k + " " + j, m = e[l] || e["* " + j];
				if (!m) {
					o = b;
					for (n in e) {
						i = n.split(" ");
						if (i[0] === k || i[0] === "*") {
							o = e[i[1] + " " + j];
							if (o) {
								n = e[n], n === !0 ? m = o : o === !0 && (m = n);
								break
							}
						}
					}
				}!m && !o && K.error("No conversion from " + l.replace(" ", " to ")), m !== !0 && (c = m ? m(c) : o(n(c)))
			}
		}
		return c
	}
	function k(a, c, d) {
		var e = a.contents,
			f = a.dataTypes,
			g = a.responseFields,
			h, i, j, k;
		for (i in g) i in d && (c[g[i]] = d[i]);
		while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
		if (h) for (i in e) if (e[i] && e[i].test(h)) {
			f.unshift(i);
			break
		}
		if (f[0] in d) j = f[0];
		else {
			for (i in d) {
				if (!f[0] || a.converters[i + " " + f[0]]) {
					j = i;
					break
				}
				k || (k = i)
			}
			j = j || k
		}
		if (j) return j !== f[0] && f.unshift(j), d[j]
	}
	function l(a, b, c, d) {
		if (K.isArray(b)) K.each(b, function(b, e) {
			c || bR.test(a) ? d(a, e) : l(a + "[" + (typeof e == "object" || K.isArray(e) ? b : "") + "]", e, c, d)
		});
		else if (!c && b != null && typeof b == "object") for (var e in b) l(a + "[" + e + "]", b[e], c, d);
		else d(a, b)
	}
	function m(a, c) {
		var d, e, f = K.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
		e && K.extend(!0, a, e)
	}
	function n(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		var h = a[f],
			i = 0,
			j = h ? h.length : 0,
			k = a === ce,
			l;
		for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = n(a, c, d, e, l, g)));
		return (k || !l) && !g["*"] && (l = n(a, c, d, e, "*", g)), l
	}
	function o(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			if (K.isFunction(c)) {
				var d = b.toLowerCase().split(ca),
					e = 0,
					f = d.length,
					g, h, i;
				for (; e < f; e++) g = d[e], i = /^\+/.test(g), i && (g = g.substr(1) || "*"), h = a[g] = a[g] || [], h[i ? "unshift" : "push"](c)
			}
		}
	}
	function p(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			e = b === "width" ? bL : bM,
			f = 0,
			g = e.length;
		if (d > 0) {
			if (c !== "border") for (; f < g; f++) c || (d -= parseFloat(K.css(a, "padding" + e[f])) || 0), c === "margin" ? d += parseFloat(K.css(a, c + e[f])) || 0 : d -= parseFloat(K.css(a, "border" + e[f] + "Width")) || 0;
			return d + "px"
		}
		d = bN(a, b, b);
		if (d < 0 || d == null) d = a.style[b] || 0;
		d = parseFloat(d) || 0;
		if (c) for (; f < g; f++) d += parseFloat(K.css(a, "padding" + e[f])) || 0, c !== "padding" && (d += parseFloat(K.css(a, "border" + e[f] + "Width")) || 0), c === "margin" && (d += parseFloat(K.css(a, c + e[f])) || 0);
		return d + "px"
	}
	function q(a, b) {
		b.src ? K.ajax({
			url: b.src,
			async: !1,
			dataType: "script"
		}) : K.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bB, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
	}
	function r(a) {
		var b = H.createElement("div");
		return bD.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
	}
	function s(a) {
		var b = (a.nodeName || "").toLowerCase();
		b === "input" ? t(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && K.grep(a.getElementsByTagName("input"), t)
	}
	function t(a) {
		if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
	}
	function u(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}
	function v(a, b) {
		var c;
		if (b.nodeType === 1) {
			b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
			if (c === "object") b.outerHTML = a.outerHTML;
			else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
				if (c === "option") b.selected = a.defaultSelected;
				else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
			} else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
			b.removeAttribute(K.expando)
		}
	}
	function w(a, b) {
		if (b.nodeType === 1 && !! K.hasData(a)) {
			var c, d, e, f = K._data(a),
				g = K._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h) for (d = 0, e = h[c].length; d < e; d++) K.event.add(b, c + (h[c][d].namespace ? "." : "") + h[c][d].namespace, h[c][d], h[c][d].data)
			}
			g.data && (g.data = K.extend({}, g.data))
		}
	}
	function x(a, b) {
		return K.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function y(a) {
		var b = bp.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement) while (b.length) c.createElement(b.pop());
		return c
	}
	function z(a, b, c) {
		b = b || 0;
		if (K.isFunction(b)) return K.grep(a, function(a, d) {
			var e = !! b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return K.grep(a, function(a, d) {
			return a === b === c
		});
		if (typeof b == "string") {
			var d = K.grep(a, function(a) {
				return a.nodeType === 1
			});
			if (bl.test(b)) return K.filter(b, d, !c);
			b = K.filter(b, d)
		}
		return K.grep(a, function(a, d) {
			return K.inArray(a, b) >= 0 === c
		})
	}
	function A(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}
	function B() {
		return !0
	}
	function C() {
		return !1
	}
	function D(a, b, c) {
		var d = b + "defer",
			e = b + "queue",
			f = b + "mark",
			g = K._data(a, d);
		g && (c === "queue" || !K._data(a, e)) && (c === "mark" || !K._data(a, f)) && setTimeout(function() {
			!K._data(a, e) && !K._data(a, f) && (K.removeData(a, d, !0), g.fire())
		}, 0)
	}
	function E(a) {
		for (var b in a) {
			if (b === "data" && K.isEmptyObject(a[b])) continue;
			if (b !== "toJSON") return !1
		}
		return !0
	}
	function F(a, c, d) {
		if (d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(O, "-$1").toLowerCase();
			d = a.getAttribute(e);
			if (typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : K.isNumeric(d) ? parseFloat(d) : N.test(d) ? K.parseJSON(d) : d
				} catch (f) {}
				K.data(a, c, d)
			} else d = b
		}
		return d
	}
	function G(a) {
		var b = L[a] = {}, c, d;
		a = a.split(/\s+/);
		for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
		return b
	}
	var H = a.document,
		I = a.navigator,
		J = a.location,
		K = function() {
			function c() {
				if (!d.isReady) {
					try {
						H.documentElement.doScroll("left")
					} catch (a) {
						setTimeout(c, 1);
						return
					}
					d.ready()
				}
			}
			var d = function(a, b) {
				return new d.fn.init(a, b, g)
			}, e = a.jQuery,
				f = a.$,
				g, h = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				i = /\S/,
				j = /^\s+/,
				k = /\s+$/,
				l = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				m = /^[\],:{}\s]*$/,
				n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				p = /(?:^|:|,)(?:\s*\[)+/g,
				q = /(webkit)[ \/]([\w.]+)/,
				r = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				s = /(msie) ([\w.]+)/,
				t = /(mozilla)(?:.*? rv:([\w.]+))?/,
				u = /-([a-z]|[0-9])/ig,
				v = /^-ms-/,
				w = function(a, b) {
					return (b + "").toUpperCase()
				}, x = I.userAgent,
				y, z, A, B = Object.prototype.toString,
				C = Object.prototype.hasOwnProperty,
				D = Array.prototype.push,
				E = Array.prototype.slice,
				F = String.prototype.trim,
				G = Array.prototype.indexOf,
				J = {};
			return d.fn = d.prototype = {
				constructor: d,
				init: function(a, c, e) {
					var f, g, i, j;
					if (!a) return this;
					if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
					if (a === "body" && !c && H.body) return this.context = H, this[0] = H.body, this.selector = a, this.length = 1, this;
					if (typeof a == "string") {
						a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? f = h.exec(a) : f = [null, a, null];
						if (f && (f[1] || !c)) {
							if (f[1]) return c = c instanceof d ? c[0] : c, j = c ? c.ownerDocument || c : H, i = l.exec(a), i ? d.isPlainObject(c) ? (a = [H.createElement(i[1])], d.fn.attr.call(a, c, !0)) : a = [j.createElement(i[1])] : (i = d.buildFragment([f[1]], [j]), a = (i.cacheable ? d.clone(i.fragment) : i.fragment).childNodes), d.merge(this, a);
							g = H.getElementById(f[2]);
							if (g && g.parentNode) {
								if (g.id !== f[2]) return e.find(a);
								this.length = 1, this[0] = g
							}
							return this.context = H, this.selector = a, this
						}
						return !c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a)
					}
					return d.isFunction(a) ? e.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
				},
				selector: "",
				jquery: "1.7.1",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return E.call(this, 0)
				},
				get: function(a) {
					return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
				},
				pushStack: function(a, b, c) {
					var e = this.constructor();
					return d.isArray(a) ? D.apply(e, a) : d.merge(e, a), e.prevObject = this, e.context = this.context, b === "find" ? e.selector = this.selector + (this.selector ? " " : "") + c : b && (e.selector = this.selector + "." + b + "(" + c + ")"), e
				},
				each: function(a, b) {
					return d.each(this, a, b)
				},
				ready: function(a) {
					return d.bindReady(), z.add(a), this
				},
				eq: function(a) {
					return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
				},
				map: function(a) {
					return this.pushStack(d.map(this, function(b, c) {
						return a.call(b, c, b)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: D,
				sort: [].sort,
				splice: [].splice
			}, d.fn.init.prototype = d.fn, d.extend = d.fn.extend = function() {
				var a, c, e, f, g, h, i = arguments[0] || {}, j = 1,
					k = arguments.length,
					l = !1;
				typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !d.isFunction(i) && (i = {}), k === j && (i = this, --j);
				for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
					e = i[c], f = a[c];
					if (i === f) continue;
					l && f && (d.isPlainObject(f) || (g = d.isArray(f))) ? (g ? (g = !1, h = e && d.isArray(e) ? e : []) : h = e && d.isPlainObject(e) ? e : {}, i[c] = d.extend(l, h, f)) : f !== b && (i[c] = f)
				}
				return i
			}, d.extend({
				noConflict: function(b) {
					return a.$ === d && (a.$ = f), b && a.jQuery === d && (a.jQuery = e), d
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(a) {
					a ? d.readyWait++ : d.ready(!0)
				},
				ready: function(a) {
					if (a === !0 && !--d.readyWait || a !== !0 && !d.isReady) {
						if (!H.body) return setTimeout(d.ready, 1);
						d.isReady = !0;
						if (a !== !0 && --d.readyWait > 0) return;
						z.fireWith(H, [d]), d.fn.trigger && d(H).trigger("ready").off("ready")
					}
				},
				bindReady: function() {
					if (!z) {
						z = d.Callbacks("once memory");
						if (H.readyState === "complete") return setTimeout(d.ready, 1);
						if (H.addEventListener) H.addEventListener("DOMContentLoaded", A, !1), a.addEventListener("load", d.ready, !1);
						else if (H.attachEvent) {
							H.attachEvent("onreadystatechange", A), a.attachEvent("onload", d.ready);
							var b = !1;
							try {
								b = a.frameElement == null
							} catch (e) {}
							H.documentElement.doScroll && b && c()
						}
					}
				},
				isFunction: function(a) {
					return d.type(a) === "function"
				},
				isArray: Array.isArray || function(a) {
					return d.type(a) === "array"
				},
				isWindow: function(a) {
					return a && typeof a == "object" && "setInterval" in a
				},
				isNumeric: function(a) {
					return !isNaN(parseFloat(a)) && isFinite(a)
				},
				type: function(a) {
					return a == null ? String(a) : J[B.call(a)] || "object"
				},
				isPlainObject: function(a) {
					if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return !1;
					try {
						if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1
					} catch (c) {
						return !1
					}
					var e;
					for (e in a);
					return e === b || C.call(a, e)
				},
				isEmptyObject: function(a) {
					for (var b in a) return !1;
					return !0
				},
				error: function(a) {
					throw new Error(a)
				},
				parseJSON: function(b) {
					if (typeof b != "string" || !b) return null;
					b = d.trim(b);
					if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
					if (m.test(b.replace(n, "@").replace(o, "]").replace(p, ""))) return (new Function("return " + b))();
					d.error("Invalid JSON: " + b)
				},
				parseXML: function(c) {
					var e, f;
					try {
						a.DOMParser ? (f = new DOMParser, e = f.parseFromString(c, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(c))
					} catch (g) {
						e = b
					}
					return (!e || !e.documentElement || e.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + c), e
				},
				noop: function() {},
				globalEval: function(b) {
					b && i.test(b) && (a.execScript || function(b) {
						a.eval.call(a, b)
					})(b)
				},
				camelCase: function(a) {
					return a.replace(v, "ms-").replace(u, w)
				},
				nodeName: function(a, b) {
					return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
				},
				each: function(a, c, e) {
					var f, g = 0,
						h = a.length,
						i = h === b || d.isFunction(a);
					if (e) {
						if (i) {
							for (f in a) if (c.apply(a[f], e) === !1) break
						} else for (; g < h;) if (c.apply(a[g++], e) === !1) break
					} else if (i) {
						for (f in a) if (c.call(a[f], f, a[f]) === !1) break
					} else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
					return a
				},
				trim: F ? function(a) {
					return a == null ? "" : F.call(a)
				} : function(a) {
					return a == null ? "" : (a + "").replace(j, "").replace(k, "")
				},
				makeArray: function(a, b) {
					var c = b || [];
					if (a != null) {
						var e = d.type(a);
						a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? D.call(c, a) : d.merge(c, a)
					}
					return c
				},
				inArray: function(a, b, c) {
					var d;
					if (b) {
						if (G) return G.call(b, a, c);
						d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
						for (; c < d; c++) if (c in b && b[c] === a) return c
					}
					return -1
				},
				merge: function(a, c) {
					var d = a.length,
						e = 0;
					if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
					else while (c[e] !== b) a[d++] = c[e++];
					return a.length = d, a
				},
				grep: function(a, b, c) {
					var d = [],
						e;
					c = !! c;
					for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
					return d
				},
				map: function(a, c, e) {
					var f, g, h = [],
						i = 0,
						j = a.length,
						k = a instanceof d || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || d.isArray(a));
					if (k) for (; i < j; i++) f = c(a[i], i, e), f != null && (h[h.length] = f);
					else for (g in a) f = c(a[g], g, e), f != null && (h[h.length] = f);
					return h.concat.apply([], h)
				},
				guid: 1,
				proxy: function(a, c) {
					if (typeof c == "string") {
						var e = a[c];
						c = a, a = e
					}
					if (!d.isFunction(a)) return b;
					var f = E.call(arguments, 2),
						g = function() {
							return a.apply(c, f.concat(E.call(arguments)))
						};
					return g.guid = a.guid = a.guid || g.guid || d.guid++, g
				},
				access: function(a, c, e, f, g, h) {
					var i = a.length;
					if (typeof c == "object") {
						for (var j in c) d.access(a, j, c[j], f, g, e);
						return a
					}
					if (e !== b) {
						f = !h && f && d.isFunction(e);
						for (var k = 0; k < i; k++) g(a[k], c, f ? e.call(a[k], k, g(a[k], c)) : e, h);
						return a
					}
					return i ? g(a[0], c) : b
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(a) {
					a = a.toLowerCase();
					var b = q.exec(a) || r.exec(a) || s.exec(a) || a.indexOf("compatible") < 0 && t.exec(a) || [];
					return {
						browser: b[1] || "",
						version: b[2] || "0"
					}
				},
				sub: function() {
					function a(b, c) {
						return new a.fn.init(b, c)
					}
					d.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, e) {
						return e && e instanceof d && !(e instanceof a) && (e = a(e)), d.fn.init.call(this, c, e, b)
					}, a.fn.init.prototype = a.fn;
					var b = a(H);
					return a
				},
				browser: {}
			}), d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
				J["[object " + b + "]"] = b.toLowerCase()
			}), y = d.uaMatch(x), y.browser && (d.browser[y.browser] = !0, d.browser.version = y.version), d.browser.webkit && (d.browser.safari = !0), i.test(" ") && (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/), g = d(H), H.addEventListener ? A = function() {
				H.removeEventListener("DOMContentLoaded", A, !1), d.ready()
			} : H.attachEvent && (A = function() {
				H.readyState === "complete" && (H.detachEvent("onreadystatechange", A), d.ready())
			}), d
		}(),
		L = {};
	K.Callbacks = function(a) {
		a = a ? L[a] || G(a) : {};
		var c = [],
			d = [],
			e, f, g, h, i, j = function(b) {
				var d, e, f, g, h;
				for (d = 0, e = b.length; d < e; d++) f = b[d], g = K.type(f), g === "array" ? j(f) : g === "function" && (!a.unique || !l.has(f)) && c.push(f)
			}, k = function(b, j) {
				j = j || [], e = !a.memory || [b, j], f = !0, i = g || 0, g = 0, h = c.length;
				for (; c && i < h; i++) if (c[i].apply(b, j) === !1 && a.stopOnFalse) {
					e = !0;
					break
				}
				f = !1, c && (a.once ? e === !0 ? l.disable() : c = [] : d && d.length && (e = d.shift(), l.fireWith(e[0], e[1])))
			}, l = {
				add: function() {
					if (c) {
						var a = c.length;
						j(arguments), f ? h = c.length : e && e !== !0 && (g = a, k(e[0], e[1]))
					}
					return this
				},
				remove: function() {
					if (c) {
						var b = arguments,
							d = 0,
							e = b.length;
						for (; d < e; d++) for (var g = 0; g < c.length; g++) if (b[d] === c[g]) {
							f && g <= h && (h--, g <= i && i--), c.splice(g--, 1);
							if (a.unique) break
						}
					}
					return this
				},
				has: function(a) {
					if (c) {
						var b = 0,
							d = c.length;
						for (; b < d; b++) if (a === c[b]) return !0
					}
					return !1
				},
				empty: function() {
					return c = [], this
				},
				disable: function() {
					return c = d = e = b, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return d = b, (!e || e === !0) && l.disable(), this
				},
				locked: function() {
					return !d
				},
				fireWith: function(b, c) {
					return d && (f ? a.once || d.push([b, c]) : (!a.once || !e) && k(b, c)), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!e
				}
			};
		return l
	};
	var M = [].slice;
	K.extend({
		Deferred: function(a) {
			var b = K.Callbacks("once memory"),
				c = K.Callbacks("once memory"),
				d = K.Callbacks("memory"),
				e = "pending",
				f = {
					resolve: b,
					reject: c,
					notify: d
				}, g = {
					done: b.add,
					fail: c.add,
					progress: d.add,
					state: function() {
						return e
					},
					isResolved: b.fired,
					isRejected: c.fired,
					then: function(a, b, c) {
						return h.done(a).fail(b).progress(c), this
					},
					always: function() {
						return h.done.apply(h, arguments).fail.apply(h, arguments), this
					},
					pipe: function(a, b, c) {
						return K.Deferred(function(d) {
							K.each({
								done: [a, "resolve"],
								fail: [b, "reject"],
								progress: [c, "notify"]
							}, function(a, b) {
								var c = b[0],
									e = b[1],
									f;
								K.isFunction(c) ? h[a](function() {
									f = c.apply(this, arguments), f && K.isFunction(f.promise) ? f.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === h ? d : this, [f])
								}) : h[a](d[e])
							})
						}).promise()
					},
					promise: function(a) {
						if (a == null) a = g;
						else for (var b in g) a[b] = g[b];
						return a
					}
				}, h = g.promise({}),
				i;
			for (i in f) h[i] = f[i].fire, h[i + "With"] = f[i].fireWith;
			return h.done(function() {
				e = "resolved"
			}, c.disable, d.lock).fail(function() {
				e = "rejected"
			}, b.disable, d.lock), a && a.call(h, h), h
		},
		when: function(a) {
			function b(a) {
				return function(b) {
					g[a] = arguments.length > 1 ? M.call(arguments, 0) : b, j.notifyWith(k, g)
				}
			}
			function c(a) {
				return function(b) {
					d[a] = arguments.length > 1 ? M.call(arguments, 0) : b, --h || j.resolveWith(j, d)
				}
			}
			var d = M.call(arguments, 0),
				e = 0,
				f = d.length,
				g = Array(f),
				h = f,
				i = f,
				j = f <= 1 && a && K.isFunction(a.promise) ? a : K.Deferred(),
				k = j.promise();
			if (f > 1) {
				for (; e < f; e++) d[e] && d[e].promise && K.isFunction(d[e].promise) ? d[e].promise().then(c(e), j.reject, b(e)) : --h;
				h || j.resolveWith(j, d)
			} else j !== a && j.resolveWith(j, f ? [a] : []);
			return k
		}
	}), K.support = function() {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o = H.createElement("div"),
			p = H.documentElement;
		o.setAttribute("className", "t"), o.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = o.getElementsByTagName("*"), d = o.getElementsByTagName("a")[0];
		if (!c || !c.length || !d) return {};
		e = H.createElement("select"), f = e.appendChild(H.createElement("option")), g = o.getElementsByTagName("input")[0], b = {
			leadingWhitespace: o.firstChild.nodeType === 3,
			tbody: !o.getElementsByTagName("tbody").length,
			htmlSerialize: !! o.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")),
			hrefNormalized: d.getAttribute("href") === "/a",
			opacity: /^0.55/.test(d.style.opacity),
			cssFloat: !! d.style.cssFloat,
			checkOn: g.value === "on",
			optSelected: f.selected,
			getSetAttribute: o.className !== "t",
			enctype: !! H.createElement("form").enctype,
			html5Clone: H.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		}, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
		try {
			delete o.test
		} catch (q) {
			b.deleteExpando = !1
		}!o.addEventListener && o.attachEvent && o.fireEvent && (o.attachEvent("onclick", function() {
			b.noCloneEvent = !1
		}), o.cloneNode(!0).fireEvent("onclick")), g = H.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = g.value === "t", g.setAttribute("checked", "checked"), o.appendChild(g), i = H.createDocumentFragment(), i.appendChild(o.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, i.removeChild(g), i.appendChild(o), o.innerHTML = "", a.getComputedStyle && (h = H.createElement("div"), h.style.width = "0", h.style.marginRight = "0", o.style.width = "2px", o.appendChild(h), b.reliableMarginRight = (parseInt((a.getComputedStyle(h, null) || {
			marginRight: 0
		}).marginRight, 10) || 0) === 0);
		if (o.attachEvent) for (m in {
			submit: 1,
			change: 1,
			focusin: 1
		}) l = "on" + m, n = l in o, n || (o.setAttribute(l, "return;"), n = typeof o[l] == "function"), b[m + "Bubbles"] = n;
		return i.removeChild(o), i = e = f = h = o = g = null, K(function() {
			var a, c, d, e, f, g, h, i, k, l, m, p = H.getElementsByTagName("body")[0];
			!p || (h = 1, i = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", k = "visibility:hidden;border:0;", l = "style='" + i + "border:5px solid #000;padding:0;'", m = "<div " + l + "><div></div></div>" + "<table " + l + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = H.createElement("div"), a.style.cssText = k + "width:0;height:0;position:static;top:0;margin-top:" + h + "px", p.insertBefore(a, p.firstChild), o = H.createElement("div"), a.appendChild(o), o.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", j = o.getElementsByTagName("td"), n = j[0].offsetHeight === 0, j[0].style.display = "", j[1].style.display = "none", b.reliableHiddenOffsets = n && j[0].offsetHeight === 0, o.innerHTML = "", o.style.width = o.style.paddingLeft = "1px", K.boxModel = b.boxModel = o.offsetWidth === 2, typeof o.style.zoom != "undefined" && (o.style.display = "inline", o.style.zoom = 1, b.inlineBlockNeedsLayout = o.offsetWidth === 2, o.style.display = "", o.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = o.offsetWidth !== 2), o.style.cssText = i + k, o.innerHTML = m, c = o.firstChild, d = c.firstChild, f = c.nextSibling.firstChild.firstChild, g = {
				doesNotAddBorder: d.offsetTop !== 5,
				doesAddBorderForTableAndCells: f.offsetTop === 5
			}, d.style.position = "fixed", d.style.top = "20px", g.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", g.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, g.doesNotIncludeMarginInBodyOffset = p.offsetTop !== h, p.removeChild(a), o = a = null, K.extend(b, g))
		}), b
	}();
	var N = /^(?:\{.*\}|\[.*\])$/,
		O = /([A-Z])/g;
	K.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			return a = a.nodeType ? K.cache[a[K.expando]] : a[K.expando], !! a && !E(a)
		},
		data: function(a, c, d, e) {
			if ( !! K.acceptData(a)) {
				var f, g, h, i = K.expando,
					j = typeof c == "string",
					k = a.nodeType,
					l = k ? K.cache : a,
					m = k ? a[i] : a[i] && i,
					n = c === "events";
				if ((!m || !l[m] || !n && !e && !l[m].data) && j && d === b) return;
				m || (k ? a[i] = m = ++K.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = K.noop));
				if (typeof c == "object" || typeof c == "function") e ? l[m] = K.extend(l[m], c) : l[m].data = K.extend(l[m].data, c);
				return f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[K.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], h == null && (h = g[K.camelCase(c)])) : h = g, h)
			}
		},
		removeData: function(a, b, c) {
			if ( !! K.acceptData(a)) {
				var d, e, f, g = K.expando,
					h = a.nodeType,
					i = h ? K.cache : a,
					j = h ? a[g] : g;
				if (!i[j]) return;
				if (b) {
					d = c ? i[j] : i[j].data;
					if (d) {
						K.isArray(b) || (b in d ? b = [b] : (b = K.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
						for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
						if (!(c ? E : K.isEmptyObject)(d)) return
					}
				}
				if (!c) {
					delete i[j].data;
					if (!E(i[j])) return
				}
				K.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null, h && (K.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null)
			}
		},
		_data: function(a, b, c) {
			return K.data(a, b, c, !0)
		},
		acceptData: function(a) {
			if (a.nodeName) {
				var b = K.noData[a.nodeName.toLowerCase()];
				if (b) return b !== !0 && a.getAttribute("classid") === b
			}
			return !0
		}
	}), K.fn.extend({
		data: function(a, c) {
			var d, e, f, g = null;
			if (typeof a == "undefined") {
				if (this.length) {
					g = K.data(this[0]);
					if (this[0].nodeType === 1 && !K._data(this[0], "parsedAttrs")) {
						e = this[0].attributes;
						for (var h = 0, i = e.length; h < i; h++) f = e[h].name, f.indexOf("data-") === 0 && (f = K.camelCase(f.substring(5)), F(this[0], f, g[f]));
						K._data(this[0], "parsedAttrs", !0)
					}
				}
				return g
			}
			return typeof a == "object" ? this.each(function() {
				K.data(this, a)
			}) : (d = a.split("."), d[1] = d[1] ? "." + d[1] : "", c === b ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === b && this.length && (g = K.data(this[0], a), g = F(this[0], a, g)), g === b && d[1] ? this.data(d[0]) : g) : this.each(function() {
				var b = K(this),
					e = [d[0], c];
				b.triggerHandler("setData" + d[1] + "!", e), K.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
			}))
		},
		removeData: function(a) {
			return this.each(function() {
				K.removeData(this, a)
			})
		}
	}), K.extend({
		_mark: function(a, b) {
			a && (b = (b || "fx") + "mark", K._data(a, b, (K._data(a, b) || 0) + 1))
		},
		_unmark: function(a, b, c) {
			a !== !0 && (c = b, b = a, a = !1);
			if (b) {
				c = c || "fx";
				var d = c + "mark",
					e = a ? 0 : (K._data(b, d) || 1) - 1;
				e ? K._data(b, d, e) : (K.removeData(b, d, !0), D(b, c, "mark"))
			}
		},
		queue: function(a, b, c) {
			var d;
			if (a) return b = (b || "fx") + "queue", d = K._data(a, b), c && (!d || K.isArray(c) ? d = K._data(a, b, K.makeArray(c)) : d.push(c)), d || []
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = K.queue(a, b),
				d = c.shift(),
				e = {};
			d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), K._data(a, b + ".run", e), d.call(a, function() {
				K.dequeue(a, b)
			}, e)), c.length || (K.removeData(a, b + "queue " + b + ".run", !0), D(a, b, "queue"))
		}
	}), K.fn.extend({
		queue: function(a, c) {
			return typeof a != "string" && (c = a, a = "fx"), c === b ? K.queue(this[0], a) : this.each(function() {
				var b = K.queue(this, a, c);
				a === "fx" && b[0] !== "inprogress" && K.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				K.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = K.fx ? K.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			function d() {
				--h || e.resolveWith(f, [f])
			}
			typeof a != "string" && (c = a, a = b), a = a || "fx";
			var e = K.Deferred(),
				f = this,
				g = f.length,
				h = 1,
				i = a + "defer",
				j = a + "queue",
				k = a + "mark",
				l;
			while (g--) if (l = K.data(f[g], i, b, !0) || (K.data(f[g], j, b, !0) || K.data(f[g], k, b, !0)) && K.data(f[g], i, K.Callbacks("once memory"), !0)) h++, l.add(d);
			return d(), e.promise()
		}
	});
	var P = /[\n\t\r]/g,
		Q = /\s+/,
		R = /\r/g,
		S = /^(?:button|input)$/i,
		T = /^(?:button|input|object|select|textarea)$/i,
		U = /^a(?:rea)?$/i,
		V = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		W = K.support.getSetAttribute,
		X, Y, Z;
	K.fn.extend({
		attr: function(a, b) {
			return K.access(this, a, b, !0, K.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				K.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return K.access(this, a, b, !0, K.prop)
		},
		removeProp: function(a) {
			return a = K.propFix[a] || a, this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch (c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g, h;
			if (K.isFunction(a)) return this.each(function(b) {
				K(this).addClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string") {
				b = a.split(Q);
				for (c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
					else {
						f = " " + e.className + " ";
						for (g = 0, h = b.length; g < h; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
						e.className = K.trim(f)
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, f, g, h, i;
			if (K.isFunction(a)) return this.each(function(b) {
				K(this).removeClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string" || a === b) {
				c = (a || "").split(Q);
				for (d = 0, e = this.length; d < e; d++) {
					f = this[d];
					if (f.nodeType === 1 && f.className) if (a) {
						g = (" " + f.className + " ").replace(P, " ");
						for (h = 0, i = c.length; h < i; h++) g = g.replace(" " + c[h] + " ", " ");
						f.className = K.trim(g)
					} else f.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			return K.isFunction(a) ? this.each(function(c) {
				K(this).toggleClass(a.call(this, c, this.className, b), b)
			}) : this.each(function() {
				if (c === "string") {
					var e, f = 0,
						g = K(this),
						h = b,
						i = a.split(Q);
					while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
				} else if (c === "undefined" || c === "boolean") this.className && K._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : K._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
				c = 0,
				d = this.length;
			for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(P, " ").indexOf(b) > -1) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, f = this[0];
			if ( !! arguments.length) return e = K.isFunction(a), this.each(function(d) {
				var f = K(this),
					g;
				if (this.nodeType === 1) {
					e ? g = a.call(this, d, f.val()) : g = a, g == null ? g = "" : typeof g == "number" ? g += "" : K.isArray(g) && (g = K.map(g, function(a) {
						return a == null ? "" : a + ""
					})), c = K.valHooks[this.nodeName.toLowerCase()] || K.valHooks[this.type];
					if (!c || !("set" in c) || c.set(this, g, "value") === b) this.value = g
				}
			});
			if (f) return c = K.valHooks[f.nodeName.toLowerCase()] || K.valHooks[f.type], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(R, "") : d == null ? "" : d)
		}
	}), K.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, c, d, e, f = a.selectedIndex,
						g = [],
						h = a.options,
						i = a.type === "select-one";
					if (f < 0) return null;
					c = i ? f : 0, d = i ? f + 1 : h.length;
					for (; c < d; c++) {
						e = h[c];
						if (e.selected && (K.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !K.nodeName(e.parentNode, "optgroup"))) {
							b = K(e).val();
							if (i) return b;
							g.push(b)
						}
					}
					return i && !g.length && h.length ? K(h[f]).val() : g
				},
				set: function(a, b) {
					var c = K.makeArray(b);
					return K(a).find("option").each(function() {
						this.selected = K.inArray(K(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1), c
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, c, d, e) {
			var f, g, h, i = a.nodeType;
			if ( !! a && i !== 3 && i !== 8 && i !== 2) {
				if (e && c in K.attrFn) return K(a)[c](d);
				if (typeof a.getAttribute == "undefined") return K.prop(a, c, d);
				h = i !== 1 || !K.isXMLDoc(a), h && (c = c.toLowerCase(), g = K.attrHooks[c] || (V.test(c) ? Y : X));
				if (d !== b) {
					if (d === null) {
						K.removeAttr(a, c);
						return
					}
					return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d)
				}
				return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
			}
		},
		removeAttr: function(a, b) {
			var c, d, e, f, g = 0;
			if (b && a.nodeType === 1) {
				d = b.toLowerCase().split(Q), f = d.length;
				for (; g < f; g++) e = d[g], e && (c = K.propFix[e] || e, K.attr(a, e, ""), a.removeAttribute(W ? e : c), V.test(e) && c in a && (a[c] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (S.test(a.nodeName) && a.parentNode) K.error("type property can't be changed");
					else if (!K.support.radioValue && b === "radio" && K.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			},
			value: {
				get: function(a, b) {
					return X && K.nodeName(a, "button") ? X.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, c) {
					if (X && K.nodeName(a, "button")) return X.set(a, b, c);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			if ( !! a && h !== 3 && h !== 8 && h !== 2) return g = h !== 1 || !K.isXMLDoc(a), g && (c = K.propFix[c] || c, f = K.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : T.test(a.nodeName) || U.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}), K.attrHooks.tabindex = K.propHooks.tabIndex, Y = {
		get: function(a, c) {
			var d, e = K.prop(a, c);
			return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			return b === !1 ? K.removeAttr(a, c) : (d = K.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
		}
	}, W || (Z = {
		name: !0,
		id: !0
	}, X = K.valHooks.button = {
		get: function(a, c) {
			var d;
			return d = a.getAttributeNode(c), d && (Z[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
		},
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || (d = H.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ""
		}
	}, K.attrHooks.tabindex.set = X.set, K.each(["width", "height"], function(a, b) {
		K.attrHooks[b] = K.extend(K.attrHooks[b], {
			set: function(a, c) {
				if (c === "") return a.setAttribute(b, "auto"), c
			}
		})
	}), K.attrHooks.contenteditable = {
		get: X.get,
		set: function(a, b, c) {
			b === "" && (b = "false"), X.set(a, b, c)
		}
	}), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(a, c) {
		K.attrHooks[c] = K.extend(K.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return d === null ? b : d
			}
		})
	}), K.support.style || (K.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	}), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	})), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
		K.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}), K.each(["radio", "checkbox"], function() {
		K.valHooks[this] = K.extend(K.valHooks[this], {
			set: function(a, b) {
				if (K.isArray(b)) return a.checked = K.inArray(K(a).val(), b) >= 0
			}
		})
	});
	var $ = /^(?:textarea|input|select)$/i,
		_ = /^([^\.]*)?(?:\.(.+))?$/,
		ba = /\bhover(\.\S+)?\b/,
		bb = /^key/,
		bc = /^(?:mouse|contextmenu)|click/,
		bd = /^(?:focusinfocus|focusoutblur)$/,
		be = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		bf = function(a) {
			var b = be.exec(a);
			return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
		}, bg = function(a, b) {
			var c = a.attributes || {};
			return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
		}, bh = function(a) {
			return K.event.special.hover ? a : a.replace(ba, "mouseenter$1 mouseleave$1")
		};
	K.event = {
		add: function(a, c, d, e, f) {
			var g, h, i, j, k, l, m, n, o, p, q, r;
			if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = K._data(a)))) {
				d.handler && (o = d, d = o.handler), d.guid || (d.guid = K.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
					return typeof K != "undefined" && (!a || K.event.triggered !== a.type) ? K.event.dispatch.apply(h.elem, arguments) : b
				}, h.elem = a), c = K.trim(bh(c)).split(" ");
				for (j = 0; j < c.length; j++) {
					k = _.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = K.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = K.event.special[l] || {}, n = K.extend({
						type: l,
						origType: k[1],
						data: e,
						handler: d,
						guid: d.guid,
						selector: f,
						quick: bf(f),
						namespace: m.join(".")
					}, o), q = i[l];
					if (!q) {
						q = i[l] = [], q.delegateCount = 0;
						if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
					}
					r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), K.event.global[l] = !0
				}
				a = null
			}
		},
		global: {},
		remove: function(a, b, c, d, e) {
			var f = K.hasData(a) && K._data(a),
				g, h, i, j, k, l, m, n, o, p, q, r;
			if ( !! f && !! (n = f.events)) {
				b = K.trim(bh(b || "")).split(" ");
				for (g = 0; g < b.length; g++) {
					h = _.exec(b[g]) || [], i = j = h[1], k = h[2];
					if (!i) {
						for (i in n) K.event.remove(a, i + b[g], c, d, !0);
						continue
					}
					o = K.event.special[i] || {}, i = (d ? o.delegateType : o.bindType) || i, q = n[i] || [], l = q.length, k = k ? new RegExp("(^|\\.)" + k.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
					for (m = 0; m < q.length; m++) r = q[m], (e || j === r.origType) && (!c || c.guid === r.guid) && (!k || k.test(r.namespace)) && (!d || d === r.selector || d === "**" && r.selector) && (q.splice(m--, 1), r.selector && q.delegateCount--, o.remove && o.remove.call(a, r));
					q.length === 0 && l !== q.length && ((!o.teardown || o.teardown.call(a, k) === !1) && K.removeEvent(a, i, f.handle), delete n[i])
				}
				K.isEmptyObject(n) && (p = f.handle, p && (p.elem = null), K.removeData(a, ["events", "handle"], !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(c, d, e, f) {
			if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
				var g = c.type || c,
					h = [],
					i, j, k, l, m, n, o, p, q, r;
				if (bd.test(g + K.event.triggered)) return;
				g.indexOf("!") >= 0 && (g = g.slice(0, -1), j = !0), g.indexOf(".") >= 0 && (h = g.split("."), g = h.shift(), h.sort());
				if ((!e || K.event.customEvent[g]) && !K.event.global[g]) return;
				c = typeof c == "object" ? c[K.expando] ? c : new K.Event(g, c) : new K.Event(g), c.type = g, c.isTrigger = !0, c.exclusive = j, c.namespace = h.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n = g.indexOf(":") < 0 ? "on" + g : "";
				if (!e) {
					i = K.cache;
					for (k in i) i[k].events && i[k].events[g] && K.event.trigger(c, d, i[k].handle.elem, !0);
					return
				}
				c.result = b, c.target || (c.target = e), d = d != null ? K.makeArray(d) : [], d.unshift(c), o = K.event.special[g] || {};
				if (o.trigger && o.trigger.apply(e, d) === !1) return;
				q = [
					[e, o.bindType || g]
				];
				if (!f && !o.noBubble && !K.isWindow(e)) {
					r = o.delegateType || g, l = bd.test(r + g) ? e : e.parentNode, m = null;
					for (; l; l = l.parentNode) q.push([l, r]), m = l;
					m && m === e.ownerDocument && q.push([m.defaultView || m.parentWindow || a, r])
				}
				for (k = 0; k < q.length && !c.isPropagationStopped(); k++) l = q[k][0], c.type = q[k][1], p = (K._data(l, "events") || {})[c.type] && K._data(l, "handle"), p && p.apply(l, d), p = n && l[n], p && K.acceptData(l) && p.apply(l, d) === !1 && c.preventDefault();
				return c.type = g, !f && !c.isDefaultPrevented() && (!o._default || o._default.apply(e.ownerDocument, d) === !1) && (g !== "click" || !K.nodeName(e, "a")) && K.acceptData(e) && n && e[g] && (g !== "focus" && g !== "blur" || c.target.offsetWidth !== 0) && !K.isWindow(e) && (m = e[n], m && (e[n] = null), K.event.triggered = g, e[g](), K.event.triggered = b, m && (e[n] = m)), c.result
			}
		},
		dispatch: function(c) {
			c = K.event.fix(c || a.event);
			var d = (K._data(this, "events") || {})[c.type] || [],
				e = d.delegateCount,
				f = [].slice.call(arguments, 0),
				g = !c.exclusive && !c.namespace,
				h = [],
				i, j, k, l, m, n, o, p, q, r, s;
			f[0] = c, c.delegateTarget = this;
			if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
				l = K(this), l.context = this.ownerDocument || this;
				for (k = c.target; k != this; k = k.parentNode || this) {
					n = {}, p = [], l[0] = k;
					for (i = 0; i < e; i++) q = d[i], r = q.selector, n[r] === b && (n[r] = q.quick ? bg(k, q.quick) : l.is(r)), n[r] && p.push(q);
					p.length && h.push({
						elem: k,
						matches: p
					})
				}
			}
			d.length > e && h.push({
				elem: this,
				matches: d.slice(e)
			});
			for (i = 0; i < h.length && !c.isPropagationStopped(); i++) {
				o = h[i], c.currentTarget = o.elem;
				for (j = 0; j < o.matches.length && !c.isImmediatePropagationStopped(); j++) {
					q = o.matches[j];
					if (g || !c.namespace && !q.namespace || c.namespace_re && c.namespace_re.test(q.namespace)) c.data = q.data, c.handleObj = q, m = ((K.event.special[q.origType] || {}).handle || q.handler).apply(o.elem, f), m !== b && (c.result = m, m === !1 && (c.preventDefault(), c.stopPropagation()))
				}
			}
			return c.result
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, c) {
				var d, e, f, g = c.button,
					h = c.fromElement;
				return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || H, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), a
			}
		},
		fix: function(a) {
			if (a[K.expando]) return a;
			var c, d, e = a,
				f = K.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
			a = K.Event(e);
			for (c = g.length; c;) d = g[--c], a[d] = e[d];
			return a.target || (a.target = e.srcElement || H), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
		},
		special: {
			ready: {
				setup: K.bindReady
			},
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(a, b, c) {
					K.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = K.extend(new K.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? K.event.trigger(e, null, b) : K.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, K.event.handle = K.event.dispatch, K.removeEvent = H.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	}, K.Event = function(a, b) {
		if (this instanceof K.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? B : C) : this.type = a, b && K.extend(this, b), this.timeStamp = a && a.timeStamp || K.now(), this[K.expando] = !0;
		else return new K.Event(a, b)
	}, K.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = B;
			var a = this.originalEvent;
			!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = B;
			var a = this.originalEvent;
			!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = B, this.stopPropagation()
		},
		isDefaultPrevented: C,
		isPropagationStopped: C,
		isImmediatePropagationStopped: C
	}, K.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		K.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c = this,
					d = a.relatedTarget,
					e = a.handleObj,
					f = e.selector,
					g;
				if (!d || d !== c && !K.contains(c, d)) a.type = e.origType, g = e.handler.apply(this, arguments), a.type = b;
				return g
			}
		}
	}), K.support.submitBubbles || (K.event.special.submit = {
		setup: function() {
			if (K.nodeName(this, "form")) return !1;
			K.event.add(this, "click._submit keypress._submit", function(a) {
				var c = a.target,
					d = K.nodeName(c, "input") || K.nodeName(c, "button") ? c.form : b;
				d && !d._submit_attached && (K.event.add(d, "submit._submit", function(a) {
					this.parentNode && !a.isTrigger && K.event.simulate("submit", this.parentNode, a, !0)
				}), d._submit_attached = !0)
			})
		},
		teardown: function() {
			if (K.nodeName(this, "form")) return !1;
			K.event.remove(this, "._submit")
		}
	}), K.support.changeBubbles || (K.event.special.change = {
		setup: function() {
			if ($.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") K.event.add(this, "propertychange._change", function(a) {
					a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}), K.event.add(this, "click._change", function(a) {
					this._just_changed && !a.isTrigger && (this._just_changed = !1, K.event.simulate("change", this, a, !0))
				});
				return !1
			}
			K.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				$.test(b.nodeName) && !b._change_attached && (K.event.add(b, "change._change", function(a) {
					this.parentNode && !a.isSimulated && !a.isTrigger && K.event.simulate("change", this.parentNode, a, !0)
				}), b._change_attached = !0)
			})
		},
		handle: function(a) {
			var b = a.target;
			if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return K.event.remove(this, "._change"), $.test(this.nodeName)
		}
	}), K.support.focusinBubbles || K.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = 0,
			d = function(a) {
				K.event.simulate(b, a.target, K.event.fix(a), !0)
			};
		K.event.special[b] = {
			setup: function() {
				c++ === 0 && H.addEventListener(a, d, !0)
			},
			teardown: function() {
				--c === 0 && H.removeEventListener(a, d, !0)
			}
		}
	}), K.fn.extend({
		on: function(a, c, d, e, f) {
			var g, h;
			if (typeof a == "object") {
				typeof c != "string" && (d = c, c = b);
				for (h in a) this.on(h, c, d, a[h], f);
				return this
			}
			d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
			if (e === !1) e = C;
			else if (!e) return this;
			return f === 1 && (g = e, e = function(a) {
				return K().off(a), g.apply(this, arguments)
			}, e.guid = g.guid || (g.guid = K.guid++)), this.each(function() {
				K.event.add(this, a, e, d, c)
			})
		},
		one: function(a, b, c, d) {
			return this.on.call(this, a, b, c, d, 1)
		},
		off: function(a, c, d) {
			if (a && a.preventDefault && a.handleObj) {
				var e = a.handleObj;
				return K(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler), this
			}
			if (typeof a == "object") {
				for (var f in a) this.off(f, c, a[f]);
				return this
			}
			if (c === !1 || typeof c == "function") d = c, c = b;
			return d === !1 && (d = C), this.each(function() {
				K.event.remove(this, a, d, c)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		live: function(a, b, c) {
			return K(this.context).on(a, this.selector, b, c), this
		},
		die: function(a, b) {
			return K(this.context).off(a, this.selector || "**", b), this
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
		},
		trigger: function(a, b) {
			return this.each(function() {
				K.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) return K.event.trigger(a, b, this[0], !0)
		},
		toggle: function(a) {
			var b = arguments,
				c = a.guid || K.guid++,
				d = 0,
				e = function(c) {
					var e = (K._data(this, "lastToggle" + a.guid) || 0) % d;
					return K._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
				};
			e.guid = c;
			while (d < b.length) b[d++].guid = c;
			return this.click(e)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		K.fn[b] = function(a, c) {
			return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}, K.attrFn && (K.attrFn[b] = !0), bb.test(b) && (K.event.fixHooks[b] = K.event.keyHooks), bc.test(b) && (K.event.fixHooks[b] = K.event.mouseHooks)
	}),
	function() {
		function a(a, b, c, d, f, g) {
			for (var h = 0, i = d.length; h < i; h++) {
				var j = d[h];
				if (j) {
					var k = !1;
					j = j[a];
					while (j) {
						if (j[e] === c) {
							k = d[j.sizset];
							break
						}
						if (j.nodeType === 1) {
							g || (j[e] = c, j.sizset = h);
							if (typeof b != "string") {
								if (j === b) {
									k = !0;
									break
								}
							} else if (m.filter(b, [j]).length > 0) {
								k = j;
								break
							}
						}
						j = j[a]
					}
					d[h] = k
				}
			}
		}
		function c(a, b, c, d, f, g) {
			for (var h = 0, i = d.length; h < i; h++) {
				var j = d[h];
				if (j) {
					var k = !1;
					j = j[a];
					while (j) {
						if (j[e] === c) {
							k = d[j.sizset];
							break
						}
						j.nodeType === 1 && !g && (j[e] = c, j.sizset = h);
						if (j.nodeName.toLowerCase() === b) {
							k = j;
							break
						}
						j = j[a]
					}
					d[h] = k
				}
			}
		}
		var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			e = "sizcache" + (Math.random() + "").replace(".", ""),
			f = 0,
			g = Object.prototype.toString,
			h = !1,
			i = !0,
			j = /\\/g,
			k = /\r\n/g,
			l = /\W/;
		[0, 0].sort(function() {
			return i = !1, 0
		});
		var m = function(a, b, c, e) {
			c = c || [], b = b || H;
			var f = b;
			if (b.nodeType !== 1 && b.nodeType !== 9) return [];
			if (!a || typeof a != "string") return c;
			var h, i, j, k, l, n, q, r, t = !0,
				u = m.isXML(b),
				v = [],
				x = a;
			do {
				d.exec(""), h = d.exec(x);
				if (h) {
					x = h[3], v.push(h[1]);
					if (h[2]) {
						k = h[3];
						break
					}
				}
			} while (h);
			if (v.length > 1 && p.exec(a)) if (v.length === 2 && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
			else {
				i = o.relative[v[0]] ? [b] : m(v.shift(), b);
				while (v.length) a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e)
			} else {
				!e && v.length > 1 && b.nodeType === 9 && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]);
				if (b) {
					l = e ? {
						expr: v.pop(),
						set: s(e)
					} : m.find(v.pop(), v.length === 1 && (v[0] === "~" || v[0] === "+") && b.parentNode ? b.parentNode : b, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1;
					while (v.length) n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", q == null && (q = b), o.relative[n](j, q, u)
				} else j = v = []
			}
			j || (j = i), j || m.error(n || a);
			if (g.call(j) === "[object Array]") if (!t) c.push.apply(c, j);
			else if (b && b.nodeType === 1) for (r = 0; j[r] != null; r++) j[r] && (j[r] === !0 || j[r].nodeType === 1 && m.contains(b, j[r])) && c.push(i[r]);
			else for (r = 0; j[r] != null; r++) j[r] && j[r].nodeType === 1 && c.push(i[r]);
			else s(j, c);
			return k && (m(k, f, c, e), m.uniqueSort(c)), c
		};
		m.uniqueSort = function(a) {
			if (u) {
				h = i, a.sort(u);
				if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
			}
			return a
		}, m.matches = function(a, b) {
			return m(a, null, null, b)
		}, m.matchesSelector = function(a, b) {
			return m(b, null, null, [a]).length > 0
		}, m.find = function(a, b, c) {
			var d, e, f, g, h, i;
			if (!a) return [];
			for (e = 0, f = o.order.length; e < f; e++) {
				h = o.order[e];
				if (g = o.leftMatch[h].exec(a)) {
					i = g[1], g.splice(1, 1);
					if (i.substr(i.length - 1) !== "\\") {
						g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
						if (d != null) {
							a = a.replace(o.match[h], "");
							break
						}
					}
				}
			}
			return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []), {
				set: d,
				expr: a
			}
		}, m.filter = function(a, c, d, e) {
			var f, g, h, i, j, k, l, n, p, q = a,
				r = [],
				s = c,
				t = c && c[0] && m.isXML(c[0]);
			while (a && c.length) {
				for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
					k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
					if (l.substr(l.length - 1) === "\\") continue;
					s === r && (r = []);
					if (o.preFilter[h]) {
						f = o.preFilter[h](f, s, d, r, e, t);
						if (!f) g = i = !0;
						else if (f === !0) continue
					}
					if (f) for (n = 0;
					(j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
					if (i !== b) {
						d || (s = r), a = a.replace(o.match[h], "");
						if (!g) return [];
						break
					}
				}
				if (a === q) if (g == null) m.error(a);
				else break;
				q = a
			}
			return s
		}, m.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		};
		var n = m.getText = function(a) {
			var b, c, d = a.nodeType,
				e = "";
			if (d) {
				if (d === 1 || d === 9) {
					if (typeof a.textContent == "string") return a.textContent;
					if (typeof a.innerText == "string") return a.innerText.replace(k, "");
					for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
				} else if (d === 3 || d === 4) return a.nodeValue
			} else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
			return e
		}, o = m.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function(a) {
					return a.getAttribute("href")
				},
				type: function(a) {
					return a.getAttribute("type")
				}
			},
			relative: {
				"+": function(a, b) {
					var c = typeof b == "string",
						d = c && !l.test(b),
						e = c && !d;
					d && (b = b.toLowerCase());
					for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
						while ((h = h.previousSibling) && h.nodeType !== 1);
						a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
					}
					e && m.filter(b, a, !0)
				},
				">": function(a, b) {
					var c, d = typeof b == "string",
						e = 0,
						f = a.length;
					if (d && !l.test(b)) {
						b = b.toLowerCase();
						for (; e < f; e++) {
							c = a[e];
							if (c) {
								var g = c.parentNode;
								a[e] = g.nodeName.toLowerCase() === b ? g : !1
							}
						}
					} else {
						for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
						d && m.filter(b, a, !0)
					}
				},
				"": function(b, d, e) {
					var g, h = f++,
						i = a;
					typeof d == "string" && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, e)
				},
				"~": function(b, d, e) {
					var g, h = f++,
						i = a;
					typeof d == "string" && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, e)
				}
			},
			find: {
				ID: function(a, b, c) {
					if (typeof b.getElementById != "undefined" && !c) {
						var d = b.getElementById(a[1]);
						return d && d.parentNode ? [d] : []
					}
				},
				NAME: function(a, b) {
					if (typeof b.getElementsByName != "undefined") {
						var c = [],
							d = b.getElementsByName(a[1]);
						for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
						return c.length === 0 ? null : c
					}
				},
				TAG: function(a, b) {
					if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
				}
			},
			preFilter: {
				CLASS: function(a, b, c, d, e, f) {
					a = " " + a[1].replace(j, "") + " ";
					if (f) return a;
					for (var g = 0, h;
					(h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
					return !1
				},
				ID: function(a) {
					return a[1].replace(j, "")
				},
				TAG: function(a, b) {
					return a[1].replace(j, "").toLowerCase()
				},
				CHILD: function(a) {
					if (a[1] === "nth") {
						a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
						var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
					} else a[2] && m.error(a[0]);
					return a[0] = f++, a
				},
				ATTR: function(a, b, c, d, e, f) {
					var g = a[1] = a[1].replace(j, "");
					return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
				},
				PSEUDO: function(a, b, c, e, f) {
					if (a[1] === "not") if ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = m(a[3], null, null, b);
					else {
						var g = m.filter(a[3], b, c, !0 ^ f);
						return c || e.push.apply(e, g), !1
					} else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
					return a
				},
				POS: function(a) {
					return a.unshift(!0), a
				}
			},
			filters: {
				enabled: function(a) {
					return a.disabled === !1 && a.type !== "hidden"
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					return a.checked === !0
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				parent: function(a) {
					return !!a.firstChild
				},
				empty: function(a) {
					return !a.firstChild
				},
				has: function(a, b, c) {
					return !!m(c[3], a).length
				},
				header: function(a) {
					return /h\d/i.test(a.nodeName)
				},
				text: function(a) {
					var b = a.getAttribute("type"),
						c = a.type;
					return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
				},
				radio: function(a) {
					return a.nodeName.toLowerCase() === "input" && "radio" === a.type
				},
				checkbox: function(a) {
					return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
				},
				file: function(a) {
					return a.nodeName.toLowerCase() === "input" && "file" === a.type
				},
				password: function(a) {
					return a.nodeName.toLowerCase() === "input" && "password" === a.type
				},
				submit: function(a) {
					var b = a.nodeName.toLowerCase();
					return (b === "input" || b === "button") && "submit" === a.type
				},
				image: function(a) {
					return a.nodeName.toLowerCase() === "input" && "image" === a.type
				},
				reset: function(a) {
					var b = a.nodeName.toLowerCase();
					return (b === "input" || b === "button") && "reset" === a.type
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return b === "input" && "button" === a.type || b === "button"
				},
				input: function(a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				},
				focus: function(a) {
					return a === a.ownerDocument.activeElement
				}
			},
			setFilters: {
				first: function(a, b) {
					return b === 0
				},
				last: function(a, b, c, d) {
					return b === d.length - 1
				},
				even: function(a, b) {
					return b % 2 === 0
				},
				odd: function(a, b) {
					return b % 2 === 1
				},
				lt: function(a, b, c) {
					return b < c[3] - 0
				},
				gt: function(a, b, c) {
					return b > c[3] - 0
				},
				nth: function(a, b, c) {
					return c[3] - 0 === b
				},
				eq: function(a, b, c) {
					return c[3] - 0 === b
				}
			},
			filter: {
				PSEUDO: function(a, b, c, d) {
					var e = b[1],
						f = o.filters[e];
					if (f) return f(a, c, b, d);
					if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
					if (e === "not") {
						var g = b[3];
						for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
						return !0
					}
					m.error(e)
				},
				CHILD: function(a, b) {
					var c, d, f, g, h, i, j, k = b[1],
						l = a;
					switch (k) {
						case "only":
						case "first":
							while (l = l.previousSibling) if (l.nodeType === 1) return !1;
							if (k === "first") return !0;
							l = a;
						case "last":
							while (l = l.nextSibling) if (l.nodeType === 1) return !1;
							return !0;
						case "nth":
							c = b[2], d = b[3];
							if (c === 1 && d === 0) return !0;
							f = b[0], g = a.parentNode;
							if (g && (g[e] !== f || !a.nodeIndex)) {
								i = 0;
								for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
								g[e] = f
							}
							return j = a.nodeIndex - d, c === 0 ? j === 0 : j % c === 0 && j / c >= 0
					}
				},
				ID: function(a, b) {
					return a.nodeType === 1 && a.getAttribute("id") === b
				},
				TAG: function(a, b) {
					return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
				},
				CLASS: function(a, b) {
					return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
				},
				ATTR: function(a, b) {
					var c = b[1],
						d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
						e = d + "",
						f = b[2],
						g = b[4];
					return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
				},
				POS: function(a, b, c, d) {
					var e = b[2],
						f = o.setFilters[e];
					if (f) return f(a, c, b, d)
				}
			}
		}, p = o.match.POS,
			q = function(a, b) {
				return "\\" + (b - 0 + 1)
			};
		for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
		var s = function(a, b) {
			return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
		};
		try {
			Array.prototype.slice.call(H.documentElement.childNodes, 0)[0].nodeType
		} catch (t) {
			s = function(a, b) {
				var c = 0,
					d = b || [];
				if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
				else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
				else for (; a[c]; c++) d.push(a[c]);
				return d
			}
		}
		var u, v;
		H.documentElement.compareDocumentPosition ? u = function(a, b) {
			return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
		} : (u = function(a, b) {
			if (a === b) return h = !0, 0;
			if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
			var c, d, e = [],
				f = [],
				g = a.parentNode,
				i = b.parentNode,
				j = g;
			if (g === i) return v(a, b);
			if (!g) return -1;
			if (!i) return 1;
			while (j) e.unshift(j), j = j.parentNode;
			j = i;
			while (j) f.unshift(j), j = j.parentNode;
			c = e.length, d = f.length;
			for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
			return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
		}, v = function(a, b, c) {
			if (a === b) return c;
			var d = a.nextSibling;
			while (d) {
				if (d === b) return -1;
				d = d.nextSibling
			}
			return 1
		}),
		function() {
			var a = H.createElement("div"),
				c = "script" + (new Date).getTime(),
				d = H.documentElement;
			a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), H.getElementById(c) && (o.find.ID = function(a, c, d) {
				if (typeof c.getElementById != "undefined" && !d) {
					var e = c.getElementById(a[1]);
					return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
				}
			}, o.filter.ID = function(a, b) {
				var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			}), d.removeChild(a), d = a = null
		}(),
		function() {
			var a = H.createElement("div");
			a.appendChild(H.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
				var c = b.getElementsByTagName(a[1]);
				if (a[1] === "*") {
					var d = [];
					for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
					c = d
				}
				return c
			}), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
				return a.getAttribute("href", 2)
			}), a = null
		}(), H.querySelectorAll && function() {
			var a = m,
				b = H.createElement("div"),
				c = "__sizzle__";
			b.innerHTML = "<p class='TEST'></p>";
			if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
				m = function(b, d, e, f) {
					d = d || H;
					if (!f && !m.isXML(d)) {
						var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (g && (d.nodeType === 1 || d.nodeType === 9)) {
							if (g[1]) return s(d.getElementsByTagName(b), e);
							if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
						}
						if (d.nodeType === 9) {
							if (b === "body" && d.body) return s([d.body], e);
							if (g && g[3]) {
								var h = d.getElementById(g[3]);
								if (!h || !h.parentNode) return s([], e);
								if (h.id === g[3]) return s([h], e)
							}
							try {
								return s(d.querySelectorAll(b), e)
							} catch (i) {}
						} else if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
							var j = d,
								k = d.getAttribute("id"),
								l = k || c,
								n = d.parentNode,
								p = /^\s*[+~]/.test(b);
							k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
							try {
								if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
							} catch (q) {} finally {
								k || j.removeAttribute("id")
							}
						}
					}
					return a(b, d, e, f)
				};
				for (var d in a) m[d] = a[d];
				b = null
			}
		}(),
		function() {
			var a = H.documentElement,
				b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b) {
				var c = !b.call(H.createElement("div"), "div"),
					d = !1;
				try {
					b.call(H.documentElement, "[test!='']:sizzle")
				} catch (e) {
					d = !0
				}
				m.matchesSelector = function(a, e) {
					e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!m.isXML(a)) try {
						if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
							var f = b.call(a, e);
							if (f || !c || a.document && a.document.nodeType !== 11) return f
						}
					} catch (g) {}
					return m(e, null, null, [a]).length > 0
				}
			}
		}(),
		function() {
			var a = H.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
				a.lastChild.className = "e";
				if (a.getElementsByClassName("e").length === 1) return;
				o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
					if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
				}, a = null
			}
		}(), H.documentElement.contains ? m.contains = function(a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		} : H.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		} : m.contains = function() {
			return !1
		}, m.isXML = function(a) {
			var b = (a ? a.ownerDocument || a : 0).documentElement;
			return b ? b.nodeName !== "HTML" : !1
		};
		var w = function(a, b, c) {
			var d, e = [],
				f = "",
				g = b.nodeType ? [b] : b;
			while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
			a = o.relative[a] ? a + "*" : a;
			for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
			return m.filter(f, e)
		};
		m.attr = K.attr, m.selectors.attrMap = {}, K.find = m, K.expr = m.selectors, K.expr[":"] = K.expr.filters, K.unique = m.uniqueSort, K.text = m.getText, K.isXMLDoc = m.isXML, K.contains = m.contains
	}();
	var bi = /Until$/,
		bj = /^(?:parents|prevUntil|prevAll)/,
		bk = /,/,
		bl = /^.[^:#\[\.,]*$/,
		bm = Array.prototype.slice,
		bn = K.expr.match.POS,
		bo = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	K.fn.extend({
		find: function(a) {
			var b = this,
				c, d;
			if (typeof a != "string") return K(a).filter(function() {
				for (c = 0, d = b.length; c < d; c++) if (K.contains(b[c], this)) return !0
			});
			var e = this.pushStack("", "find", a),
				f, g, h;
			for (c = 0, d = this.length; c < d; c++) {
				f = e.length, K.find(a, this[c], e);
				if (c > 0) for (g = f; g < e.length; g++) for (h = 0; h < f; h++) if (e[h] === e[g]) {
					e.splice(g--, 1);
					break
				}
			}
			return e
		},
		has: function(a) {
			var b = K(a);
			return this.filter(function() {
				for (var a = 0, c = b.length; a < c; a++) if (K.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(z(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(z(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a == "string" ? bn.test(a) ? K(a, this.context).index(this[0]) >= 0 : K.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c = [],
				d, e, f = this[0];
			if (K.isArray(a)) {
				var g = 1;
				while (f && f.ownerDocument && f !== b) {
					for (d = 0; d < a.length; d++) K(f).is(a[d]) && c.push({
						selector: a[d],
						elem: f,
						level: g
					});
					f = f.parentNode, g++
				}
				return c
			}
			var h = bn.test(a) || typeof a != "string" ? K(a, b || this.context) : 0;
			for (d = 0, e = this.length; d < e; d++) {
				f = this[d];
				while (f) {
					if (h ? h.index(f) > -1 : K.find.matchesSelector(f, a)) {
						c.push(f);
						break
					}
					f = f.parentNode;
					if (!f || !f.ownerDocument || f === b || f.nodeType === 11) break
				}
			}
			return c = c.length > 1 ? K.unique(c) : c, this.pushStack(c, "closest", a)
		},
		index: function(a) {
			return a ? typeof a == "string" ? K.inArray(this[0], K(a)) : K.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(a, b) {
			var c = typeof a == "string" ? K(a, b) : K.makeArray(a && a.nodeType ? [a] : a),
				d = K.merge(this.get(), c);
			return this.pushStack(A(c[0]) || A(d[0]) ? d : K.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), K.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents: function(a) {
			return K.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return K.dir(a, "parentNode", c)
		},
		next: function(a) {
			return K.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return K.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return K.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return K.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return K.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return K.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return K.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return K.sibling(a.firstChild)
		},
		contents: function(a) {
			return K.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : K.makeArray(a.childNodes)
		}
	}, function(a, b) {
		K.fn[a] = function(c, d) {
			var e = K.map(this, b, c);
			return bi.test(a) || (d = c), d && typeof d == "string" && (e = K.filter(d, e)), e = this.length > 1 && !bo[a] ? K.unique(e) : e, (this.length > 1 || bk.test(d)) && bj.test(a) && (e = e.reverse()), this.pushStack(e, a, bm.call(arguments).join(","))
		}
	}), K.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"), b.length === 1 ? K.find.matchesSelector(b[0], a) ? [b[0]] : [] : K.find.matches(a, b)
		},
		dir: function(a, c, d) {
			var e = [],
				f = a[c];
			while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !K(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
			return e
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			var e = 0;
			for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
			return a
		},
		sibling: function(a, b) {
			var c = [];
			for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var bp = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		bq = / jQuery\d+="(?:\d+|null)"/g,
		br = /^\s+/,
		bs = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		bt = /<([\w:]+)/,
		bu = /<tbody/i,
		bv = /<|&#?\w+;/,
		bw = /<(?:script|style)/i,
		bx = /<(?:script|object|embed|option|style)/i,
		by = new RegExp("<(?:" + bp + ")", "i"),
		bz = /checked\s*(?:[^=]|=\s*.checked.)/i,
		bA = /\/(java|ecma)script/i,
		bB = /^\s*<!(?:\[CDATA\[|\-\-)/,
		bC = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		}, bD = y(H);
	bC.optgroup = bC.option, bC.tbody = bC.tfoot = bC.colgroup = bC.caption = bC.thead, bC.th = bC.td, K.support.htmlSerialize || (bC._default = [1, "div<div>", "</div>"]), K.fn.extend({
		text: function(a) {
			return K.isFunction(a) ? this.each(function(b) {
				var c = K(this);
				c.text(a.call(this, b, c.text()))
			}) : typeof a != "object" && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a)) : K.text(this)
		},
		wrapAll: function(a) {
			if (K.isFunction(a)) return this.each(function(b) {
				K(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = K(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return K.isFunction(a) ? this.each(function(b) {
				K(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = K(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = K.isFunction(a);
			return this.each(function(c) {
				K(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length) {
				var a = K.clean(arguments);
				return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				return a.push.apply(a, K.clean(arguments)), a
			}
		},
		remove: function(a, b) {
			for (var c = 0, d;
			(d = this[c]) != null; c++) if (!a || K.filter(a, [d]).length)!b && d.nodeType === 1 && (K.cleanData(d.getElementsByTagName("*")), K.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for (var a = 0, b;
			(b = this[a]) != null; a++) {
				b.nodeType === 1 && K.cleanData(b.getElementsByTagName("*"));
				while (b.firstChild) b.removeChild(b.firstChild)
			}
			return this
		},
		clone: function(a, b) {
			return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
				return K.clone(this, a, b)
			})
		},
		html: function(a) {
			if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(bq, "") : null;
			if (typeof a == "string" && !bw.test(a) && (K.support.leadingWhitespace || !br.test(a)) && !bC[(bt.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace(bs, "<$1></$2>");
				try {
					for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (K.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
				} catch (e) {
					this.empty().append(a)
				}
			} else K.isFunction(a) ? this.each(function(b) {
				var c = K(this);
				c.html(a.call(this, b, c.html()))
			}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a) {
			return this[0] && this[0].parentNode ? K.isFunction(a) ? this.each(function(b) {
				var c = K(this),
					d = c.html();
				c.replaceWith(a.call(this, b, d))
			}) : (typeof a != "string" && (a = K(a).detach()), this.each(function() {
				var b = this.nextSibling,
					c = this.parentNode;
				K(this).remove(), b ? K(b).before(a) : K(c).append(a)
			})) : this.length ? this.pushStack(K(K.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, d) {
			var e, f, g, h, i = a[0],
				j = [];
			if (!K.support.checkClone && arguments.length === 3 && typeof i == "string" && bz.test(i)) return this.each(function() {
				K(this).domManip(a, c, d, !0)
			});
			if (K.isFunction(i)) return this.each(function(e) {
				var f = K(this);
				a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
			});
			if (this[0]) {
				h = i && i.parentNode, K.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? e = {
					fragment: h
				} : e = K.buildFragment(a, this, j), g = e.fragment, g.childNodes.length === 1 ? f = g = g.firstChild : f = g.firstChild;
				if (f) {
					c = c && K.nodeName(f, "tr");
					for (var k = 0, l = this.length, m = l - 1; k < l; k++) d.call(c ? x(this[k], f) : this[k], e.cacheable || l > 1 && k < m ? K.clone(g, !0, !0) : g)
				}
				j.length && K.each(j, q)
			}
			return this
		}
	}), K.buildFragment = function(a, b, c) {
		var d, e, f, g, h = a[0];
		return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = H), a.length === 1 && typeof h == "string" && h.length < 512 && g === H && h.charAt(0) === "<" && !bx.test(h) && (K.support.checkClone || !bz.test(h)) && (K.support.html5Clone || !by.test(h)) && (e = !0, f = K.fragments[h], f && f !== 1 && (d = f)), d || (d = g.createDocumentFragment(), K.clean(a, g, d, c)), e && (K.fragments[h] = f ? d : 1), {
			fragment: d,
			cacheable: e
		}
	}, K.fragments = {}, K.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		K.fn[a] = function(c) {
			var d = [],
				e = K(c),
				f = this.length === 1 && this[0].parentNode;
			if (f && f.nodeType === 11 && f.childNodes.length === 1 && e.length === 1) return e[b](this[0]), this;
			for (var g = 0, h = e.length; g < h; g++) {
				var i = (g > 0 ? this.clone(!0) : this).get();
				K(e[g])[b](i), d = d.concat(i)
			}
			return this.pushStack(d, a, e.selector)
		}
	}), K.extend({
		clone: function(a, b, c) {
			var d, e, f, g = K.support.html5Clone || !by.test("<" + a.nodeName) ? a.cloneNode(!0) : r(a);
			if ((!K.support.noCloneEvent || !K.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !K.isXMLDoc(a)) {
				v(a, g), d = u(a), e = u(g);
				for (f = 0; d[f]; ++f) e[f] && v(d[f], e[f])
			}
			if (b) {
				w(a, g);
				if (c) {
					d = u(a), e = u(g);
					for (f = 0; d[f]; ++f) w(d[f], e[f])
				}
			}
			return d = e = null, g
		},
		clean: function(a, b, c, d) {
			var e;
			b = b || H, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || H);
			var f = [],
				g;
			for (var h = 0, i;
			(i = a[h]) != null; h++) {
				typeof i == "number" && (i += "");
				if (!i) continue;
				if (typeof i == "string") if (!bv.test(i)) i = b.createTextNode(i);
				else {
					i = i.replace(bs, "<$1></$2>");
					var j = (bt.exec(i) || ["", ""])[1].toLowerCase(),
						k = bC[j] || bC._default,
						l = k[0],
						m = b.createElement("div");
					b === H ? bD.appendChild(m) : y(b).appendChild(m), m.innerHTML = k[1] + i + k[2];
					while (l--) m = m.lastChild;
					if (!K.support.tbody) {
						var n = bu.test(i),
							o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes : k[1] === "<table>" && !n ? m.childNodes : [];
						for (g = o.length - 1; g >= 0; --g) K.nodeName(o[g], "tbody") && !o[g].childNodes.length && o[g].parentNode.removeChild(o[g])
					}!K.support.leadingWhitespace && br.test(i) && m.insertBefore(b.createTextNode(br.exec(i)[0]), m.firstChild), i = m.childNodes
				}
				var p;
				if (!K.support.appendChecked) if (i[0] && typeof(p = i.length) == "number") for (g = 0; g < p; g++) s(i[g]);
				else s(i);
				i.nodeType ? f.push(i) : f = K.merge(f, i)
			}
			if (c) {
				e = function(a) {
					return !a.type || bA.test(a.type)
				};
				for (h = 0; f[h]; h++) if (d && K.nodeName(f[h], "script") && (!f[h].type || f[h].type.toLowerCase() === "text/javascript")) d.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
				else {
					if (f[h].nodeType === 1) {
						var q = K.grep(f[h].getElementsByTagName("script"), e);
						f.splice.apply(f, [h + 1, 0].concat(q))
					}
					c.appendChild(f[h])
				}
			}
			return f
		},
		cleanData: function(a) {
			var b, c, d = K.cache,
				e = K.event.special,
				f = K.support.deleteExpando;
			for (var g = 0, h;
			(h = a[g]) != null; g++) {
				if (h.nodeName && K.noData[h.nodeName.toLowerCase()]) continue;
				c = h[K.expando];
				if (c) {
					b = d[c];
					if (b && b.events) {
						for (var i in b.events) e[i] ? K.event.remove(h, i) : K.removeEvent(h, i, b.handle);
						b.handle && (b.handle.elem = null)
					}
					f ? delete h[K.expando] : h.removeAttribute && h.removeAttribute(K.expando), delete d[c]
				}
			}
		}
	});
	var bE = /alpha\([^)]*\)/i,
		bF = /opacity=([^)]*)/,
		bG = /([A-Z]|^ms)/g,
		bH = /^-?\d+(?:px)?$/i,
		bI = /^-?\d/,
		bJ = /^([\-+])=([\-+.\de]+)/,
		bK = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, bL = ["Left", "Right"],
		bM = ["Top", "Bottom"],
		bN, bO, bP;
	K.fn.css = function(a, c) {
		return arguments.length === 2 && c === b ? this : K.access(this, a, c, !0, function(a, c, d) {
			return d !== b ? K.style(a, c, d) : K.css(a, c)
		})
	}, K.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = bN(a, "opacity", "opacity");
						return c === "" ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": K.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
				var f, g, h = K.camelCase(c),
					i = a.style,
					j = K.cssHooks[h];
				c = K.cssProps[h] || h;
				if (d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
				g = typeof d, g === "string" && (f = bJ.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(K.css(a, c)), g = "number");
				if (d == null || g === "number" && isNaN(d)) return;
				g === "number" && !K.cssNumber[h] && (d += "px");
				if (!j || !("set" in j) || (d = j.set(a, d)) !== b) try {
					i[c] = d
				} catch (k) {}
			}
		},
		css: function(a, c, d) {
			var e, f;
			c = K.camelCase(c), f = K.cssHooks[c], c = K.cssProps[c] || c, c === "cssFloat" && (c = "float");
			if (f && "get" in f && (e = f.get(a, !0, d)) !== b) return e;
			if (bN) return bN(a, c)
		},
		swap: function(a, b, c) {
			var d = {};
			for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
			c.call(a);
			for (e in b) a.style[e] = d[e]
		}
	}), K.curCSS = K.css, K.each(["height", "width"], function(a, b) {
		K.cssHooks[b] = {
			get: function(a, c, d) {
				var e;
				if (c) return a.offsetWidth !== 0 ? p(a, b, d) : (K.swap(a, bK, function() {
					e = p(a, b, d)
				}), e)
			},
			set: function(a, b) {
				if (!bH.test(b)) return b;
				b = parseFloat(b);
				if (b >= 0) return b + "px"
			}
		}
	}), K.support.opacity || (K.cssHooks.opacity = {
		get: function(a, b) {
			return bF.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = K.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1;
			if (b >= 1 && K.trim(f.replace(bE, "")) === "") {
				c.removeAttribute("filter");
				if (d && !d.filter) return
			}
			c.filter = bE.test(f) ? f.replace(bE, e) : f + " " + e
		}
	}), K(function() {
		K.support.reliableMarginRight || (K.cssHooks.marginRight = {
			get: function(a, b) {
				var c;
				return K.swap(a, {
					display: "inline-block"
				}, function() {
					b ? c = bN(a, "margin-right", "marginRight") : c = a.style.marginRight
				}), c
			}
		})
	}), H.defaultView && H.defaultView.getComputedStyle && (bO = function(a, b) {
		var c, d, e;
		return b = b.replace(bG, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !K.contains(a.ownerDocument.documentElement, a) && (c = K.style(a, b))), c
	}), H.documentElement.currentStyle && (bP = function(a, b) {
		var c, d, e, f = a.currentStyle && a.currentStyle[b],
			g = a.style;
		return f === null && g && (e = g[b]) && (f = e), !bH.test(f) && bI.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), f === "" ? "auto" : f
	}), bN = bO || bP, K.expr && K.expr.filters && (K.expr.filters.hidden = function(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight;
		return b === 0 && c === 0 || !K.support.reliableHiddenOffsets && (a.style && a.style.display || K.css(a, "display")) === "none"
	}, K.expr.filters.visible = function(a) {
		return !K.expr.filters.hidden(a)
	});
	var bQ = /%20/g,
		bR = /\[\]$/,
		bS = /\r?\n/g,
		bT = /#.*$/,
		bU = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		bV = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		bW = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		bX = /^(?:GET|HEAD)$/,
		bY = /^\/\//,
		bZ = /\?/,
		b$ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		b_ = /^(?:select|textarea)/i,
		ca = /\s+/,
		cb = /([?&])_=[^&]*/,
		cc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		cd = K.fn.load,
		ce = {}, cf = {}, cg, ch, ci = ["*/"] + ["*"];
	try {
		cg = J.href
	} catch (cj) {
		cg = H.createElement("a"), cg.href = "", cg = cg.href
	}
	ch = cc.exec(cg.toLowerCase()) || [], K.fn.extend({
		load: function(a, c, d) {
			if (typeof a != "string" && cd) return cd.apply(this, arguments);
			if (!this.length) return this;
			var e = a.indexOf(" ");
			if (e >= 0) {
				var f = a.slice(e, a.length);
				a = a.slice(0, e)
			}
			var g = "GET";
			c && (K.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = K.param(c, K.ajaxSettings.traditional), g = "POST"));
			var h = this;
			return K.ajax({
				url: a,
				type: g,
				dataType: "html",
				data: c,
				complete: function(a, b, c) {
					c = a.responseText, a.isResolved() && (a.done(function(a) {
						c = a
					}), h.html(f ? K("<div>").append(c.replace(b$, "")).find(f) : c)), d && h.each(d, [c, b, a])
				}
			}), this
		},
		serialize: function() {
			return K.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? K.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || b_.test(this.nodeName) || bV.test(this.type))
			}).map(function(a, b) {
				var c = K(this).val();
				return c == null ? null : K.isArray(c) ? K.map(c, function(a, c) {
					return {
						name: b.name,
						value: a.replace(bS, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(bS, "\r\n")
				}
			}).get()
		}
	}), K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		K.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), K.each(["get", "post"], function(a, c) {
		K[c] = function(a, d, e, f) {
			return K.isFunction(d) && (f = f || e, e = d, d = b), K.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: f
			})
		}
	}), K.extend({
		getScript: function(a, c) {
			return K.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return K.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			return b ? m(a, K.ajaxSettings) : (b = a, a = K.ajaxSettings), m(a, b), a
		},
		ajaxSettings: {
			url: cg,
			isLocal: bW.test(ch[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": ci
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": K.parseJSON,
				"text xml": K.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: o(ce),
		ajaxTransport: o(cf),
		ajax: function(a, c) {
			function d(a, c, d, n) {
				if (v !== 2) {
					v = 2, t && clearTimeout(t), s = b, q = n || "", y.readyState = a > 0 ? 4 : 0;
					var o, p, r, u = c,
						x = d ? k(e, y, d) : b,
						z, A;
					if (a >= 200 && a < 300 || a === 304) {
						if (e.ifModified) {
							if (z = y.getResponseHeader("Last-Modified")) K.lastModified[m] = z;
							if (A = y.getResponseHeader("Etag")) K.etag[m] = A
						}
						if (a === 304) u = "notmodified", o = !0;
						else try {
							p = j(e, x), u = "success", o = !0
						} catch (B) {
							u = "parsererror", r = B
						}
					} else {
						r = u;
						if (!u || a) u = "error", a < 0 && (a = 0)
					}
					y.status = a, y.statusText = "" + (c || u), o ? h.resolveWith(f, [p, u, y]) : h.rejectWith(f, [y, u, r]), y.statusCode(l), l = b, w && g.trigger("ajax" + (o ? "Success" : "Error"), [y, e, o ? p : r]), i.fireWith(f, [y, u]), w && (g.trigger("ajaxComplete", [y, e]), --K.active || K.event.trigger("ajaxStop"))
				}
			}
			typeof a == "object" && (c = a, a = b), c = c || {};
			var e = K.ajaxSetup({}, c),
				f = e.context || e,
				g = f !== e && (f.nodeType || f instanceof K) ? K(f) : K.event,
				h = K.Deferred(),
				i = K.Callbacks("once memory"),
				l = e.statusCode || {}, m, o = {}, p = {}, q, r, s, t, u, v = 0,
				w, x, y = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if (!v) {
							var c = a.toLowerCase();
							a = p[c] = p[c] || a, o[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return v === 2 ? q : null
					},
					getResponseHeader: function(a) {
						var c;
						if (v === 2) {
							if (!r) {
								r = {};
								while (c = bU.exec(q)) r[c[1].toLowerCase()] = c[2]
							}
							c = r[a.toLowerCase()]
						}
						return c === b ? null : c
					},
					overrideMimeType: function(a) {
						return v || (e.mimeType = a), this
					},
					abort: function(a) {
						return a = a || "abort", s && s.abort(a), d(0, a), this
					}
				};
			h.promise(y), y.success = y.done, y.error = y.fail, y.complete = i.add, y.statusCode = function(a) {
				if (a) {
					var b;
					if (v < 2) for (b in a) l[b] = [l[b], a[b]];
					else b = a[y.status], y.then(b, b)
				}
				return this
			}, e.url = ((a || e.url) + "").replace(bT, "").replace(bY, ch[1] + "//"), e.dataTypes = K.trim(e.dataType || "*").toLowerCase().split(ca), e.crossDomain == null && (u = cc.exec(e.url.toLowerCase()), e.crossDomain = !(!u || u[1] == ch[1] && u[2] == ch[2] && (u[3] || (u[1] === "http:" ? 80 : 443)) == (ch[3] || (ch[1] === "http:" ? 80 : 443)))), e.data && e.processData && typeof e.data != "string" && (e.data = K.param(e.data, e.traditional)), n(ce, e, c, y);
			if (v === 2) return !1;
			w = e.global, e.type = e.type.toUpperCase(), e.hasContent = !bX.test(e.type), w && K.active++ === 0 && K.event.trigger("ajaxStart");
			if (!e.hasContent) {
				e.data && (e.url += (bZ.test(e.url) ? "&" : "?") + e.data, delete e.data), m = e.url;
				if (e.cache === !1) {
					var z = K.now(),
						A = e.url.replace(cb, "$1_=" + z);
					e.url = A + (A === e.url ? (bZ.test(e.url) ? "&" : "?") + "_=" + z : "")
				}
			}(e.data && e.hasContent && e.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", e.contentType), e.ifModified && (m = m || e.url, K.lastModified[m] && y.setRequestHeader("If-Modified-Since", K.lastModified[m]), K.etag[m] && y.setRequestHeader("If-None-Match", K.etag[m])), y.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", " + ci + "; q=0.01" : "") : e.accepts["*"]);
			for (x in e.headers) y.setRequestHeader(x, e.headers[x]);
			if (!e.beforeSend || e.beforeSend.call(f, y, e) !== !1 && v !== 2) {
				for (x in {
					success: 1,
					error: 1,
					complete: 1
				}) y[x](e[x]);
				s = n(cf, e, c, y);
				if (!s) d(-1, "No Transport");
				else {
					y.readyState = 1, w && g.trigger("ajaxSend", [y, e]), e.async && e.timeout > 0 && (t = setTimeout(function() {
						y.abort("timeout")
					}, e.timeout));
					try {
						v = 1, s.send(o, d)
					} catch (B) {
						if (v < 2) d(-1, B);
						else throw B
					}
				}
				return y
			}
			return y.abort(), !1
		},
		param: function(a, c) {
			var d = [],
				e = function(a, b) {
					b = K.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			c === b && (c = K.ajaxSettings.traditional);
			if (K.isArray(a) || a.jquery && !K.isPlainObject(a)) K.each(a, function() {
				e(this.name, this.value)
			});
			else for (var f in a) l(f, a[f], c, e);
			return d.join("&").replace(bQ, "+")
		}
	}), K.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var ck = K.now(),
		cl = /(\=)\?(&|$)|\?\?/i;
	K.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return K.expando + "_" + ck++
		}
	}), K.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
		if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cl.test(b.url) || e && cl.test(b.data))) {
			var f, g = b.jsonpCallback = K.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
				h = a[g],
				i = b.url,
				j = b.data,
				k = "$1" + g + "$2";
			return b.jsonp !== !1 && (i = i.replace(cl, k), b.url === i && (e && (j = j.replace(cl, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) {
				f = [a]
			}, d.always(function() {
				a[g] = h, f && K.isFunction(h) && a[g](f[0])
			}), b.converters["script json"] = function() {
				return f || K.error(g + " was not called"), f[0]
			}, b.dataTypes[0] = "json", "script"
		}
	}), K.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				return K.globalEval(a), a
			}
		}
	}), K.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), K.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var c, d = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
			return {
				send: function(e, f) {
					c = H.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
						if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success")
					}, d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(0, 1)
				}
			}
		}
	});
	var cm = a.ActiveXObject ? function() {
			for (var a in co) co[a](0, 1)
		} : !1,
		cn = 0,
		co;
	K.ajaxSettings.xhr = a.ActiveXObject ? function() {
		return !this.isLocal && i() || h()
	} : i,
	function(a) {
		K.extend(K.support, {
			ajax: !! a,
			cors: !! a && "withCredentials" in a
		})
	}(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(c) {
		if (!c.crossDomain || K.support.cors) {
			var d;
			return {
				send: function(e, f) {
					var g = c.xhr(),
						h, i;
					c.username ? g.open(c.type, c.url, c.async, c.username, c.password) : g.open(c.type, c.url, c.async);
					if (c.xhrFields) for (i in c.xhrFields) g[i] = c.xhrFields[i];
					c.mimeType && g.overrideMimeType && g.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (i in e) g.setRequestHeader(i, e[i])
					} catch (j) {}
					g.send(c.hasContent && c.data || null), d = function(a, e) {
						var i, j, k, l, m;
						try {
							if (d && (e || g.readyState === 4)) {
								d = b, h && (g.onreadystatechange = K.noop, cm && delete co[h]);
								if (e) g.readyState !== 4 && g.abort();
								else {
									i = g.status, k = g.getAllResponseHeaders(), l = {}, m = g.responseXML, m && m.documentElement && (l.xml = m), l.text = g.responseText;
									try {
										j = g.statusText
									} catch (n) {
										j = ""
									}!i && c.isLocal && !c.crossDomain ? i = l.text ? 200 : 404 : i === 1223 && (i = 204)
								}
							}
						} catch (o) {
							e || f(-1, o)
						}
						l && f(i, j, l, k)
					}, !c.async || g.readyState === 4 ? d() : (h = ++cn, cm && (co || (co = {}, K(a).unload(cm)), co[h] = d), g.onreadystatechange = d)
				},
				abort: function() {
					d && d(0, 1)
				}
			}
		}
	});
	var cp = {}, cq, cr, cs = /^(?:toggle|show|hide)$/,
		ct = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		cu, cv = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		cw;
	K.fn.extend({
		show: function(a, b, c) {
			var f, g;
			if (a || a === 0) return this.animate(e("show", 3), a, b, c);
			for (var h = 0, i = this.length; h < i; h++) f = this[h], f.style && (g = f.style.display, !K._data(f, "olddisplay") && g === "none" && (g = f.style.display = ""), g === "" && K.css(f, "display") === "none" && K._data(f, "olddisplay", d(f.nodeName)));
			for (h = 0; h < i; h++) {
				f = this[h];
				if (f.style) {
					g = f.style.display;
					if (g === "" || g === "none") f.style.display = K._data(f, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(a, b, c) {
			if (a || a === 0) return this.animate(e("hide", 3), a, b, c);
			var d, f, g = 0,
				h = this.length;
			for (; g < h; g++) d = this[g], d.style && (f = K.css(d, "display"), f !== "none" && !K._data(d, "olddisplay") && K._data(d, "olddisplay", f));
			for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
			return this
		},
		_toggle: K.fn.toggle,
		toggle: function(a, b, c) {
			var d = typeof a == "boolean";
			return K.isFunction(a) && K.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
				var b = d ? a : K(this).is(":hidden");
				K(this)[b ? "show" : "hide"]()
			}) : this.animate(e("toggle", 3), a, b, c), this
		},
		fadeTo: function(a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, e) {
			function f() {
				g.queue === !1 && K._mark(this);
				var b = K.extend({}, g),
					c = this.nodeType === 1,
					e = c && K(this).is(":hidden"),
					f, h, i, j, k, l, m, n, o;
				b.animatedProperties = {};
				for (i in a) {
					f = K.camelCase(i), i !== f && (a[f] = a[i], delete a[i]), h = a[f], K.isArray(h) ? (b.animatedProperties[f] = h[1], h = a[f] = h[0]) : b.animatedProperties[f] = b.specialEasing && b.specialEasing[f] || b.easing || "swing";
					if (h === "hide" && e || h === "show" && !e) return b.complete.call(this);
					c && (f === "height" || f === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], K.css(this, "display") === "inline" && K.css(this, "float") === "none" && (!K.support.inlineBlockNeedsLayout || d(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for (i in a) j = new K.fx(this, b, i), h = a[i], cs.test(h) ? (o = K._data(this, "toggle" + i) || (h === "toggle" ? e ? "show" : "hide" : 0), o ? (K._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = ct.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (K.cssNumber[i] ? "" : "px"), n !== "px" && (K.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, K.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
				return !0
			}
			var g = K.speed(b, c, e);
			return K.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = K.extend({}, a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
		},
		stop: function(a, c, d) {
			return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				function b(a, b, c) {
					var e = b[c];
					K.removeData(a, c, !0), e.stop(d)
				}
				var c, e = !1,
					f = K.timers,
					g = K._data(this);
				d || K._unmark(!0, this);
				if (a == null) for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
				else g[c = a + ".run"] && g[c].stop && b(this, g, c);
				for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
				(!d || !e) && K.dequeue(this, a)
			})
		}
	}), K.each({
		slideDown: e("show", 1),
		slideUp: e("hide", 1),
		slideToggle: e("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		K.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), K.extend({
		speed: function(a, b, c) {
			var d = a && typeof a == "object" ? K.extend({}, a) : {
				complete: c || !c && b || K.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !K.isFunction(b) && b
			};
			d.duration = K.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in K.fx.speeds ? K.fx.speeds[d.duration] : K.fx.speeds._default;
			if (d.queue == null || d.queue === !0) d.queue = "fx";
			return d.old = d.complete, d.complete = function(a) {
				K.isFunction(d.old) && d.old.call(this), d.queue ? K.dequeue(this, d.queue) : a !== !1 && K._unmark(this)
			}, d
		},
		easing: {
			linear: function(a, b, c, d) {
				return c + d * a
			},
			swing: function(a, b, c, d) {
				return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
		}
	}), K.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (K.fx.step[this.prop] || K.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
				var a, b = K.css(this.elem, this.prop);
				return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
			}
			return this.elem[this.prop]
		},
		custom: function(a, c, d) {
			function e(a) {
				return f.step(a)
			}
			var f = this,
				h = K.fx;
			this.startTime = cw || g(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (K.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() {
				f.options.hide && K._data(f.elem, "fxshow" + f.prop) === b && K._data(f.elem, "fxshow" + f.prop, f.start)
			}, e() && K.timers.push(e) && !cu && (cu = setInterval(h.tick, h.interval))
		},
		show: function() {
			var a = K._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || K.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), K(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = K._data(this.elem, "fxshow" + this.prop) || K.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b, c, d, e = cw || g(),
				f = !0,
				h = this.elem,
				i = this.options;
			if (a || e >= i.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
				for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
				if (f) {
					i.overflow != null && !K.support.shrinkWrapBlocks && K.each(["", "X", "Y"], function(a, b) {
						h.style["overflow" + b] = i.overflow[a]
					}), i.hide && K(h).hide();
					if (i.hide || i.show) for (b in i.animatedProperties) K.style(h, b, i.orig[b]), K.removeData(h, "fxshow" + b, !0), K.removeData(h, "toggle" + b, !0);
					d = i.complete, d && (i.complete = !1, d.call(h))
				}
				return !1
			}
			return i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = K.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
		}
	}, K.extend(K.fx, {
		tick: function() {
			var a, b = K.timers,
				c = 0;
			for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
			b.length || K.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(cu), cu = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				K.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
			}
		}
	}), K.each(["width", "height"], function(a, b) {
		K.fx.step[b] = function(a) {
			K.style(a.elem, b, Math.max(0, a.now) + a.unit)
		}
	}), K.expr && K.expr.filters && (K.expr.filters.animated = function(a) {
		return K.grep(K.timers, function(b) {
			return a === b.elem
		}).length
	});
	var cx = /^t(?:able|d|h)$/i,
		cy = /^(?:body|html)$/i;
	"getBoundingClientRect" in H.documentElement ? K.fn.offset = function(a) {
		var b = this[0],
			d;
		if (a) return this.each(function(b) {
			K.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return K.offset.bodyOffset(b);
		try {
			d = b.getBoundingClientRect()
		} catch (e) {}
		var f = b.ownerDocument,
			g = f.documentElement;
		if (!d || !K.contains(g, b)) return d ? {
			top: d.top,
			left: d.left
		} : {
			top: 0,
			left: 0
		};
		var h = f.body,
			i = c(f),
			j = g.clientTop || h.clientTop || 0,
			k = g.clientLeft || h.clientLeft || 0,
			l = i.pageYOffset || K.support.boxModel && g.scrollTop || h.scrollTop,
			m = i.pageXOffset || K.support.boxModel && g.scrollLeft || h.scrollLeft,
			n = d.top + l - j,
			o = d.left + m - k;
		return {
			top: n,
			left: o
		}
	} : K.fn.offset = function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			K.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return K.offset.bodyOffset(b);
		var c, d = b.offsetParent,
			e = b,
			f = b.ownerDocument,
			g = f.documentElement,
			h = f.body,
			i = f.defaultView,
			j = i ? i.getComputedStyle(b, null) : b.currentStyle,
			k = b.offsetTop,
			l = b.offsetLeft;
		while ((b = b.parentNode) && b !== h && b !== g) {
			if (K.support.fixedPosition && j.position === "fixed") break;
			c = i ? i.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, K.support.doesNotAddBorder && (!K.support.doesAddBorderForTableAndCells || !cx.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), K.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), j = c
		}
		if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
		return K.support.fixedPosition && j.position === "fixed" && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)), {
			top: k,
			left: l
		}
	}, K.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			return K.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(K.css(a, "marginTop")) || 0, c += parseFloat(K.css(a, "marginLeft")) || 0), {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = K.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = K(a),
				f = e.offset(),
				g = K.css(a, "top"),
				h = K.css(a, "left"),
				i = (d === "absolute" || d === "fixed") && K.inArray("auto", [g, h]) > -1,
				j = {}, k = {}, l, m;
			i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), K.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
		}
	}, K.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = cy.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			return c.top -= parseFloat(K.css(a, "marginTop")) || 0, c.left -= parseFloat(K.css(a, "marginLeft")) || 0, d.top += parseFloat(K.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(K.css(b[0], "borderLeftWidth")) || 0, {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || H.body;
				while (a && !cy.test(a.nodeName) && K.css(a, "position") === "static") a = a.offsetParent;
				return a
			})
		}
	}), K.each(["Left", "Top"], function(a, d) {
		var e = "scroll" + d;
		K.fn[e] = function(d) {
			var f, g;
			return d === b ? (f = this[0], f ? (g = c(f), g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : K.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null) : this.each(function() {
				g = c(this), g ? g.scrollTo(a ? K(g).scrollLeft() : d, a ? d : K(g).scrollTop()) : this[e] = d
			})
		}
	}), K.each(["Height", "Width"], function(a, c) {
		var d = c.toLowerCase();
		K.fn["inner" + c] = function() {
			var a = this[0];
			return a ? a.style ? parseFloat(K.css(a, d, "padding")) : this[d]() : null
		}, K.fn["outer" + c] = function(a) {
			var b = this[0];
			return b ? b.style ? parseFloat(K.css(b, d, a ? "margin" : "border")) : this[d]() : null
		}, K.fn[d] = function(a) {
			var e = this[0];
			if (!e) return a == null ? null : this;
			if (K.isFunction(a)) return this.each(function(b) {
				var c = K(this);
				c[d](a.call(this, b, c[d]()))
			});
			if (K.isWindow(e)) {
				var f = e.document.documentElement["client" + c],
					g = e.document.body;
				return e.document.compatMode === "CSS1Compat" && f || g && g["client" + c] || f
			}
			if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
			if (a === b) {
				var h = K.css(e, d),
					i = parseFloat(h);
				return K.isNumeric(i) ? i : h
			}
			return this.css(d, typeof a == "string" ? a : a + "px")
		}
	}), a.jQuery = a.$ = K, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return K
	})
})(window);
var closeTimer, CLOSE_TIMEOUT = 5e3,
	worker, currentIndex = 0,
	updateQueue = [],
	isMouseOver = !1,
	init = function() {
		worker = new SharedWorker("/web/scripts/unbundled/nfn_worker.js"), worker.port.addEventListener("message", acceptAction), worker.port.start(), postReadyMessage(), document.body.addEventListener("mouseover", handleMouseOver), document.body.addEventListener("mouseout", handleMouseOut), document.getElementById("pagePrev").addEventListener("click", function() {
			cycle(-1)
		}), document.getElementById("pageNext").addEventListener("click", function() {
			cycle(1)
		}), $("body").on("click", "a", handleMessageClick).on("click", "#chirp", handleMessageClick)
	}, postReadyMessage = function() {
		worker.port.postMessage("ready")
	}, closeWindow = function() {
		closeTimer && (clearTimeout(closeTimer), closeTimer = null), currentIndex = 0, updateQueue = [], isMouseOver = !1, window.close()
	}, updatePreview = function() {
		var a = document.getElementById("pageNext"),
			b = document.getElementById("pagePrev"),
			c = "notification-multiple";
		document.getElementById("chirp").innerHTML = updateQueue[currentIndex].html, document.getElementById("columnTitle").innerHTML = updateQueue[currentIndex].columnTitle, document.getElementById("pageValTxt").innerHTML = updateQueue.length - (currentIndex + 1), currentIndex > 0 ? b.className = c : b.className = "", currentIndex < updateQueue.length - 1 ? a.className = c : a.className = ""
	}, cycle = function(a) {
		currentIndex = currentIndex + a, currentIndex = Math.min(currentIndex, updateQueue.length - 1), currentIndex = Math.max(currentIndex, 0), updatePreview()
	}, acceptAction = function(a) {
		if (a.data === "closeNotification") {
			closeWindow();
			return
		}
		if (a.data === "ready" || a.data.action) return;
		a.data.updates ? (updateQueue = updateQueue.concat(a.data.updates), updatePreview(), closeTimer && (clearTimeout(closeTimer), closeTimer = null), isMouseOver || (closeTimer = setTimeout(closeWindow, CLOSE_TIMEOUT))) : a.data.replaceID && replace(a.data)
	}, replace = function(a) {
		var b, c;
		for (b = 0; b < updateQueue.length; b++) {
			c = updateQueue[b];
			if (c.chirpID == a.replaceID && c.accountKey == a.accountKey) {
				c.html = a.html, b === currentIndex && updatePreview();
				break
			}
		}
	}, handleMouseOver = function(a) {
		clearTimeout(closeTimer), isMouseOver = !0
	}, handleMouseOut = function(a) {
		closeTimer && (clearTimeout(closeTimer), closeTimer = null), closeTimer = setTimeout(closeWindow, CLOSE_TIMEOUT), isMouseOver = !1
	}, handleMessageClick = function(a) {
		var b = $(a.currentTarget),
			c = b.attr("rel"),
			d = {};
		if (!c) return;
		return d = {
			action: c,
			info: updateQueue[currentIndex],
			text: b.text(),
			href: b.attr("href")
		}, worker.port.postMessage(d), !1
	};
init();