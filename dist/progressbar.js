var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/shifty/dist/shifty.js
var require_shifty = __commonJS({
  "node_modules/shifty/dist/shifty.js"(exports2, module2) {
    !function(t, n) {
      "object" == typeof exports2 && "object" == typeof module2 ? module2.exports = n() : "function" == typeof define && define.amd ? define("shifty", [], n) : "object" == typeof exports2 ? exports2.shifty = n() : t.shifty = n();
    }(window, function() {
      return function(t) {
        var n = {};
        function e(r) {
          if (n[r])
            return n[r].exports;
          var i = n[r] = { i: r, l: false, exports: {} };
          return t[r].call(i.exports, i, i.exports, e), i.l = true, i.exports;
        }
        return e.m = t, e.c = n, e.d = function(t2, n2, r) {
          e.o(t2, n2) || Object.defineProperty(t2, n2, { enumerable: true, get: r });
        }, e.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, e.t = function(t2, n2) {
          if (1 & n2 && (t2 = e(t2)), 8 & n2)
            return t2;
          if (4 & n2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var r = /* @__PURE__ */ Object.create(null);
          if (e.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & n2 && "string" != typeof t2)
            for (var i in t2)
              e.d(r, i, function(n3) {
                return t2[n3];
              }.bind(null, i));
          return r;
        }, e.n = function(t2) {
          var n2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return e.d(n2, "a", n2), n2;
        }, e.o = function(t2, n2) {
          return Object.prototype.hasOwnProperty.call(t2, n2);
        }, e.p = "", e(e.s = 3);
      }([function(t, n, e) {
        "use strict";
        (function(t2) {
          e.d(n, "e", function() {
            return v;
          }), e.d(n, "c", function() {
            return _;
          }), e.d(n, "b", function() {
            return m;
          }), e.d(n, "a", function() {
            return b;
          }), e.d(n, "d", function() {
            return w;
          });
          var r = e(1);
          function i(t3, n2) {
            for (var e2 = 0; e2 < n2.length; e2++) {
              var r2 = n2[e2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
            }
          }
          function u(t3) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            })(t3);
          }
          function o(t3, n2) {
            var e2 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(t3);
              n2 && (r2 = r2.filter(function(n3) {
                return Object.getOwnPropertyDescriptor(t3, n3).enumerable;
              })), e2.push.apply(e2, r2);
            }
            return e2;
          }
          function a(t3) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var e2 = null != arguments[n2] ? arguments[n2] : {};
              n2 % 2 ? o(Object(e2), true).forEach(function(n3) {
                c(t3, n3, e2[n3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(e2)) : o(Object(e2)).forEach(function(n3) {
                Object.defineProperty(t3, n3, Object.getOwnPropertyDescriptor(e2, n3));
              });
            }
            return t3;
          }
          function c(t3, n2, e2) {
            return n2 in t3 ? Object.defineProperty(t3, n2, { value: e2, enumerable: true, configurable: true, writable: true }) : t3[n2] = e2, t3;
          }
          var f = "undefined" != typeof window ? window : t2, s = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.oRequestAnimationFrame || f.msRequestAnimationFrame || f.mozCancelRequestAnimationFrame && f.mozRequestAnimationFrame || setTimeout, l = function() {
          }, h = null, p = null, d = a({}, r), v = function(t3, n2, e2, r2, i2, u2, o2) {
            var a2 = t3 < u2 ? 0 : (t3 - u2) / i2;
            for (var c2 in n2) {
              var f2 = o2[c2], s2 = f2.call ? f2 : d[f2], l2 = e2[c2];
              n2[c2] = l2 + (r2[c2] - l2) * s2(a2);
            }
            return n2;
          }, y = function(t3, n2) {
            var e2 = t3._attachment, r2 = t3._currentState, i2 = t3._delay, u2 = t3._easing, o2 = t3._originalState, a2 = t3._duration, c2 = t3._step, f2 = t3._targetState, s2 = t3._timestamp, l2 = s2 + i2 + a2, h2 = n2 > l2 ? l2 : n2, p2 = a2 - (l2 - h2);
            h2 >= l2 ? (c2(f2, e2, p2), t3.stop(true)) : (t3._applyFilter("beforeTween"), h2 < s2 + i2 ? (h2 = 1, a2 = 1, s2 = 1) : s2 += i2, v(h2, r2, o2, f2, a2, s2, u2), t3._applyFilter("afterTween"), c2(r2, e2, p2));
          }, _ = function() {
            for (var t3 = b.now(), n2 = h; n2; ) {
              var e2 = n2._next;
              y(n2, t3), n2 = e2;
            }
          }, m = function(t3) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "linear", e2 = {}, r2 = u(n2);
            if ("string" === r2 || "function" === r2)
              for (var i2 in t3)
                e2[i2] = n2;
            else
              for (var o2 in t3)
                e2[o2] = n2[o2] || "linear";
            return e2;
          }, g = function(t3) {
            if (t3 === h)
              (h = t3._next) ? h._previous = null : p = null;
            else if (t3 === p)
              (p = t3._previous) ? p._next = null : h = null;
            else {
              var n2 = t3._previous, e2 = t3._next;
              n2._next = e2, e2._previous = n2;
            }
            t3._previous = t3._next = null;
          }, b = function() {
            function t3() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
              !function(t4, n4) {
                if (!(t4 instanceof n4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t3), this._currentState = n3, this._configured = false, this._filters = [], this._timestamp = null, this._next = null, this._previous = null, e3 && this.setConfig(e3);
            }
            var n2, e2, r2;
            return n2 = t3, (e2 = [{ key: "_applyFilter", value: function(t4) {
              var n3 = true, e3 = false, r3 = void 0;
              try {
                for (var i2, u2 = this._filters[Symbol.iterator](); !(n3 = (i2 = u2.next()).done); n3 = true) {
                  var o2 = i2.value[t4];
                  o2 && o2(this);
                }
              } catch (t5) {
                e3 = true, r3 = t5;
              } finally {
                try {
                  n3 || null == u2.return || u2.return();
                } finally {
                  if (e3)
                    throw r3;
                }
              }
            } }, { key: "tween", value: function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e3 = this._attachment, r3 = this._configured;
              return !n3 && r3 || this.setConfig(n3), this._pausedAtTime = null, this._timestamp = t3.now(), this._start(this.get(), e3), this.resume();
            } }, { key: "setConfig", value: function() {
              var n3 = this, e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r3 = e3.attachment, i2 = e3.delay, u2 = void 0 === i2 ? 0 : i2, o2 = e3.duration, c2 = void 0 === o2 ? 500 : o2, f2 = e3.easing, s2 = e3.from, h2 = e3.promise, p2 = void 0 === h2 ? Promise : h2, d2 = e3.start, v2 = void 0 === d2 ? l : d2, y2 = e3.step, _2 = void 0 === y2 ? l : y2, g2 = e3.to;
              this._configured = true, this._attachment = r3, this._isPlaying = false, this._pausedAtTime = null, this._scheduleId = null, this._delay = u2, this._start = v2, this._step = _2, this._duration = c2, this._currentState = a({}, s2 || this.get()), this._originalState = this.get(), this._targetState = a({}, g2 || this.get());
              var b2 = this._currentState;
              this._targetState = a({}, b2, {}, this._targetState), this._easing = m(b2, f2);
              var w2 = t3.filters;
              for (var O in this._filters.length = 0, w2)
                w2[O].doesApply(this) && this._filters.push(w2[O]);
              return this._applyFilter("tweenCreated"), this._promise = new p2(function(t4, e4) {
                n3._resolve = t4, n3._reject = e4;
              }), this._promise.catch(l), this;
            } }, { key: "get", value: function() {
              return a({}, this._currentState);
            } }, { key: "set", value: function(t4) {
              this._currentState = t4;
            } }, { key: "pause", value: function() {
              if (this._isPlaying)
                return this._pausedAtTime = t3.now(), this._isPlaying = false, g(this), this;
            } }, { key: "resume", value: function() {
              if (null === this._timestamp)
                return this.tween();
              if (this._isPlaying)
                return this._promise;
              var n3 = t3.now();
              return this._pausedAtTime && (this._timestamp += n3 - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = true, null === h ? (h = this, p = this, function t4() {
                h && (s.call(f, t4, 1e3 / 60), _());
              }()) : (this._previous = p, p._next = this, p = this), this._promise;
            } }, { key: "seek", value: function(n3) {
              n3 = Math.max(n3, 0);
              var e3 = t3.now();
              return this._timestamp + n3 === 0 ? this : (this._timestamp = e3 - n3, this._isPlaying || y(this, e3), this);
            } }, { key: "stop", value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n3 = this._attachment, e3 = this._currentState, r3 = this._easing, i2 = this._originalState, u2 = this._targetState;
              if (this._isPlaying)
                return this._isPlaying = false, g(this), t4 ? (this._applyFilter("beforeTween"), v(1, e3, i2, u2, 1, 0, r3), this._applyFilter("afterTween"), this._applyFilter("afterTweenEnd"), this._resolve(e3, n3)) : this._reject(e3, n3), this;
            } }, { key: "isPlaying", value: function() {
              return this._isPlaying;
            } }, { key: "setScheduleFunction", value: function(n3) {
              t3.setScheduleFunction(n3);
            } }, { key: "dispose", value: function() {
              for (var t4 in this)
                delete this[t4];
            } }]) && i(n2.prototype, e2), r2 && i(n2, r2), t3;
          }();
          function w() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = new b(), e2 = n2.tween(t3);
            return e2.tweenable = n2, e2;
          }
          b.setScheduleFunction = function(t3) {
            return s = t3;
          }, b.formulas = d, b.filters = {}, b.now = Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }).call(this, e(2));
      }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "linear", function() {
          return r;
        }), e.d(n, "easeInQuad", function() {
          return i;
        }), e.d(n, "easeOutQuad", function() {
          return u;
        }), e.d(n, "easeInOutQuad", function() {
          return o;
        }), e.d(n, "easeInCubic", function() {
          return a;
        }), e.d(n, "easeOutCubic", function() {
          return c;
        }), e.d(n, "easeInOutCubic", function() {
          return f;
        }), e.d(n, "easeInQuart", function() {
          return s;
        }), e.d(n, "easeOutQuart", function() {
          return l;
        }), e.d(n, "easeInOutQuart", function() {
          return h;
        }), e.d(n, "easeInQuint", function() {
          return p;
        }), e.d(n, "easeOutQuint", function() {
          return d;
        }), e.d(n, "easeInOutQuint", function() {
          return v;
        }), e.d(n, "easeInSine", function() {
          return y;
        }), e.d(n, "easeOutSine", function() {
          return _;
        }), e.d(n, "easeInOutSine", function() {
          return m;
        }), e.d(n, "easeInExpo", function() {
          return g;
        }), e.d(n, "easeOutExpo", function() {
          return b;
        }), e.d(n, "easeInOutExpo", function() {
          return w;
        }), e.d(n, "easeInCirc", function() {
          return O;
        }), e.d(n, "easeOutCirc", function() {
          return S;
        }), e.d(n, "easeInOutCirc", function() {
          return j;
        }), e.d(n, "easeOutBounce", function() {
          return M;
        }), e.d(n, "easeInBack", function() {
          return k;
        }), e.d(n, "easeOutBack", function() {
          return P;
        }), e.d(n, "easeInOutBack", function() {
          return x;
        }), e.d(n, "elastic", function() {
          return T;
        }), e.d(n, "swingFromTo", function() {
          return E;
        }), e.d(n, "swingFrom", function() {
          return F;
        }), e.d(n, "swingTo", function() {
          return A;
        }), e.d(n, "bounce", function() {
          return I;
        }), e.d(n, "bouncePast", function() {
          return C;
        }), e.d(n, "easeFromTo", function() {
          return D;
        }), e.d(n, "easeFrom", function() {
          return q;
        }), e.d(n, "easeTo", function() {
          return Q;
        });
        var r = function(t2) {
          return t2;
        }, i = function(t2) {
          return Math.pow(t2, 2);
        }, u = function(t2) {
          return -(Math.pow(t2 - 1, 2) - 1);
        }, o = function(t2) {
          return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 2) : -0.5 * ((t2 -= 2) * t2 - 2);
        }, a = function(t2) {
          return Math.pow(t2, 3);
        }, c = function(t2) {
          return Math.pow(t2 - 1, 3) + 1;
        }, f = function(t2) {
          return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 3) : 0.5 * (Math.pow(t2 - 2, 3) + 2);
        }, s = function(t2) {
          return Math.pow(t2, 4);
        }, l = function(t2) {
          return -(Math.pow(t2 - 1, 4) - 1);
        }, h = function(t2) {
          return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 4) : -0.5 * ((t2 -= 2) * Math.pow(t2, 3) - 2);
        }, p = function(t2) {
          return Math.pow(t2, 5);
        }, d = function(t2) {
          return Math.pow(t2 - 1, 5) + 1;
        }, v = function(t2) {
          return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 5) : 0.5 * (Math.pow(t2 - 2, 5) + 2);
        }, y = function(t2) {
          return 1 - Math.cos(t2 * (Math.PI / 2));
        }, _ = function(t2) {
          return Math.sin(t2 * (Math.PI / 2));
        }, m = function(t2) {
          return -0.5 * (Math.cos(Math.PI * t2) - 1);
        }, g = function(t2) {
          return 0 === t2 ? 0 : Math.pow(2, 10 * (t2 - 1));
        }, b = function(t2) {
          return 1 === t2 ? 1 : 1 - Math.pow(2, -10 * t2);
        }, w = function(t2) {
          return 0 === t2 ? 0 : 1 === t2 ? 1 : (t2 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t2 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t2));
        }, O = function(t2) {
          return -(Math.sqrt(1 - t2 * t2) - 1);
        }, S = function(t2) {
          return Math.sqrt(1 - Math.pow(t2 - 1, 2));
        }, j = function(t2) {
          return (t2 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1);
        }, M = function(t2) {
          return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75 : t2 < 2.5 / 2.75 ? 7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : 7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375;
        }, k = function(t2) {
          var n2 = 1.70158;
          return t2 * t2 * ((n2 + 1) * t2 - n2);
        }, P = function(t2) {
          var n2 = 1.70158;
          return (t2 -= 1) * t2 * ((n2 + 1) * t2 + n2) + 1;
        }, x = function(t2) {
          var n2 = 1.70158;
          return (t2 /= 0.5) < 1 ? t2 * t2 * ((1 + (n2 *= 1.525)) * t2 - n2) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((1 + (n2 *= 1.525)) * t2 + n2) + 2);
        }, T = function(t2) {
          return -1 * Math.pow(4, -8 * t2) * Math.sin((6 * t2 - 1) * (2 * Math.PI) / 2) + 1;
        }, E = function(t2) {
          var n2 = 1.70158;
          return (t2 /= 0.5) < 1 ? t2 * t2 * ((1 + (n2 *= 1.525)) * t2 - n2) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((1 + (n2 *= 1.525)) * t2 + n2) + 2);
        }, F = function(t2) {
          var n2 = 1.70158;
          return t2 * t2 * ((n2 + 1) * t2 - n2);
        }, A = function(t2) {
          var n2 = 1.70158;
          return (t2 -= 1) * t2 * ((n2 + 1) * t2 + n2) + 1;
        }, I = function(t2) {
          return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75 : t2 < 2.5 / 2.75 ? 7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : 7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375;
        }, C = function(t2) {
          return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 2 - (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) : t2 < 2.5 / 2.75 ? 2 - (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) : 2 - (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375);
        }, D = function(t2) {
          return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 4) : -0.5 * ((t2 -= 2) * Math.pow(t2, 3) - 2);
        }, q = function(t2) {
          return Math.pow(t2, 4);
        }, Q = function(t2) {
          return Math.pow(t2, 0.25);
        };
      }, function(t, n) {
        var e;
        e = function() {
          return this;
        }();
        try {
          e = e || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (e = window);
        }
        t.exports = e;
      }, function(t, n, e) {
        "use strict";
        e.r(n);
        var r = {};
        e.r(r), e.d(r, "doesApply", function() {
          return x;
        }), e.d(r, "tweenCreated", function() {
          return T;
        }), e.d(r, "beforeTween", function() {
          return E;
        }), e.d(r, "afterTween", function() {
          return F;
        });
        var i, u, o = e(0), a = /(\d|-|\.)/, c = /([^\-0-9.]+)/g, f = /[0-9.-]+/g, s = (i = f.source, u = /,\s*/.source, new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i, "\\)"), "g")), l = /^.*\(/, h = /#([0-9]|[a-f]){3,6}/gi, p = function(t2, n2) {
          return t2.map(function(t3, e2) {
            return "_".concat(n2, "_").concat(e2);
          });
        };
        function d(t2) {
          return parseInt(t2, 16);
        }
        var v = function(t2) {
          return "rgb(".concat((n2 = t2, 3 === (n2 = n2.replace(/#/, "")).length && (n2 = (n2 = n2.split(""))[0] + n2[0] + n2[1] + n2[1] + n2[2] + n2[2]), [d(n2.substr(0, 2)), d(n2.substr(2, 2)), d(n2.substr(4, 2))]).join(","), ")");
          var n2;
        }, y = function(t2, n2, e2) {
          var r2 = n2.match(t2), i2 = n2.replace(t2, "VAL");
          return r2 && r2.forEach(function(t3) {
            return i2 = i2.replace("VAL", e2(t3));
          }), i2;
        }, _ = function(t2) {
          for (var n2 in t2) {
            var e2 = t2[n2];
            "string" == typeof e2 && e2.match(h) && (t2[n2] = y(h, e2, v));
          }
        }, m = function(t2) {
          var n2 = t2.match(f).map(Math.floor), e2 = t2.match(l)[0];
          return "".concat(e2).concat(n2.join(","), ")");
        }, g = function(t2) {
          return t2.match(f);
        }, b = function(t2) {
          var n2, e2, r2 = {};
          for (var i2 in t2) {
            var u2 = t2[i2];
            "string" == typeof u2 && (r2[i2] = { formatString: (n2 = u2, e2 = void 0, e2 = n2.match(c), e2 ? (1 === e2.length || n2.charAt(0).match(a)) && e2.unshift("") : e2 = ["", ""], e2.join("VAL")), chunkNames: p(g(u2), i2) });
          }
          return r2;
        }, w = function(t2, n2) {
          var e2 = function(e3) {
            g(t2[e3]).forEach(function(r3, i2) {
              return t2[n2[e3].chunkNames[i2]] = +r3;
            }), delete t2[e3];
          };
          for (var r2 in n2)
            e2(r2);
        }, O = function(t2, n2) {
          var e2 = {};
          return n2.forEach(function(n3) {
            e2[n3] = t2[n3], delete t2[n3];
          }), e2;
        }, S = function(t2, n2) {
          return n2.map(function(n3) {
            return t2[n3];
          });
        }, j = function(t2, n2) {
          return n2.forEach(function(n3) {
            return t2 = t2.replace("VAL", +n3.toFixed(4));
          }), t2;
        }, M = function(t2, n2) {
          for (var e2 in n2) {
            var r2 = n2[e2], i2 = r2.chunkNames, u2 = r2.formatString, o2 = j(u2, S(O(t2, i2), i2));
            t2[e2] = y(s, o2, m);
          }
        }, k = function(t2, n2) {
          var e2 = function(e3) {
            var r3 = n2[e3].chunkNames, i2 = t2[e3];
            if ("string" == typeof i2) {
              var u2 = i2.split(" "), o2 = u2[u2.length - 1];
              r3.forEach(function(n3, e4) {
                return t2[n3] = u2[e4] || o2;
              });
            } else
              r3.forEach(function(n3) {
                return t2[n3] = i2;
              });
            delete t2[e3];
          };
          for (var r2 in n2)
            e2(r2);
        }, P = function(t2, n2) {
          for (var e2 in n2) {
            var r2 = n2[e2].chunkNames, i2 = t2[r2[0]];
            t2[e2] = "string" == typeof i2 ? r2.map(function(n3) {
              var e3 = t2[n3];
              return delete t2[n3], e3;
            }).join(" ") : i2;
          }
        }, x = function(t2) {
          var n2 = t2._currentState;
          return Object.keys(n2).some(function(t3) {
            return "string" == typeof n2[t3];
          });
        };
        function T(t2) {
          var n2 = t2._currentState;
          [n2, t2._originalState, t2._targetState].forEach(_), t2._tokenData = b(n2);
        }
        function E(t2) {
          var n2 = t2._currentState, e2 = t2._originalState, r2 = t2._targetState, i2 = t2._easing, u2 = t2._tokenData;
          k(i2, u2), [n2, e2, r2].forEach(function(t3) {
            return w(t3, u2);
          });
        }
        function F(t2) {
          var n2 = t2._currentState, e2 = t2._originalState, r2 = t2._targetState, i2 = t2._easing, u2 = t2._tokenData;
          [n2, e2, r2].forEach(function(t3) {
            return M(t3, u2);
          }), P(i2, u2);
        }
        function A(t2, n2) {
          var e2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            n2 && (r2 = r2.filter(function(n3) {
              return Object.getOwnPropertyDescriptor(t2, n3).enumerable;
            })), e2.push.apply(e2, r2);
          }
          return e2;
        }
        function I(t2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var e2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? A(Object(e2), true).forEach(function(n3) {
              C(t2, n3, e2[n3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(e2)) : A(Object(e2)).forEach(function(n3) {
              Object.defineProperty(t2, n3, Object.getOwnPropertyDescriptor(e2, n3));
            });
          }
          return t2;
        }
        function C(t2, n2, e2) {
          return n2 in t2 ? Object.defineProperty(t2, n2, { value: e2, enumerable: true, configurable: true, writable: true }) : t2[n2] = e2, t2;
        }
        var D = new o.a(), q = o.a.filters, Q = function(t2, n2, e2, r2) {
          var i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, u2 = I({}, t2), a2 = Object(o.b)(t2, r2);
          for (var c2 in D._filters.length = 0, D.set({}), D._currentState = u2, D._originalState = t2, D._targetState = n2, D._easing = a2, q)
            q[c2].doesApply(D) && D._filters.push(q[c2]);
          D._applyFilter("tweenCreated"), D._applyFilter("beforeTween");
          var f2 = Object(o.e)(e2, u2, t2, n2, 1, i2, a2);
          return D._applyFilter("afterTween"), f2;
        };
        function B(t2) {
          return function(t3) {
            if (Array.isArray(t3)) {
              for (var n2 = 0, e2 = new Array(t3.length); n2 < t3.length; n2++)
                e2[n2] = t3[n2];
              return e2;
            }
          }(t2) || function(t3) {
            if (Symbol.iterator in Object(t3) || "[object Arguments]" === Object.prototype.toString.call(t3))
              return Array.from(t3);
          }(t2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }();
        }
        function N(t2, n2) {
          for (var e2 = 0; e2 < n2.length; e2++) {
            var r2 = n2[e2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function R(t2, n2) {
          var e2 = n2.get(t2);
          if (!e2)
            throw new TypeError("attempted to get private field on non-instance");
          return e2.get ? e2.get.call(t2) : e2.value;
        }
        var z = function() {
          function t2() {
            !function(t3, n4) {
              if (!(t3 instanceof n4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), L.set(this, { writable: true, value: [] });
            for (var n3 = arguments.length, e3 = new Array(n3), r3 = 0; r3 < n3; r3++)
              e3[r3] = arguments[r3];
            e3.forEach(this.add.bind(this));
          }
          var n2, e2, r2;
          return n2 = t2, (e2 = [{ key: "add", value: function(t3) {
            return R(this, L).push(t3), t3;
          } }, { key: "remove", value: function(t3) {
            var n3 = R(this, L).indexOf(t3);
            return ~n3 && R(this, L).splice(n3, 1), t3;
          } }, { key: "empty", value: function() {
            return this.tweenables.map(this.remove.bind(this));
          } }, { key: "isPlaying", value: function() {
            return R(this, L).some(function(t3) {
              return t3.isPlaying();
            });
          } }, { key: "play", value: function() {
            return R(this, L).forEach(function(t3) {
              return t3.tween();
            }), this;
          } }, { key: "pause", value: function() {
            return R(this, L).forEach(function(t3) {
              return t3.pause();
            }), this;
          } }, { key: "resume", value: function() {
            return R(this, L).forEach(function(t3) {
              return t3.resume();
            }), this;
          } }, { key: "stop", value: function(t3) {
            return R(this, L).forEach(function(n3) {
              return n3.stop(t3);
            }), this;
          } }, { key: "tweenables", get: function() {
            return B(R(this, L));
          } }, { key: "promises", get: function() {
            return R(this, L).map(function(t3) {
              return t3._promise;
            });
          } }]) && N(n2.prototype, e2), r2 && N(n2, r2), t2;
        }(), L = /* @__PURE__ */ new WeakMap();
        function V(t2, n2, e2, r2, i2, u2) {
          var o2, a2, c2 = 0, f2 = 0, s2 = 0, l2 = 0, h2 = 0, p2 = 0, d2 = function(t3) {
            return ((c2 * t3 + f2) * t3 + s2) * t3;
          }, v2 = function(t3) {
            return (3 * c2 * t3 + 2 * f2) * t3 + s2;
          }, y2 = function(t3) {
            return t3 >= 0 ? t3 : 0 - t3;
          };
          return c2 = 1 - (s2 = 3 * n2) - (f2 = 3 * (r2 - n2) - s2), l2 = 1 - (p2 = 3 * e2) - (h2 = 3 * (i2 - e2) - p2), o2 = t2, a2 = function(t3) {
            return 1 / (200 * t3);
          }(u2), function(t3) {
            return ((l2 * t3 + h2) * t3 + p2) * t3;
          }(function(t3, n3) {
            var e3, r3, i3, u3, o3, a3;
            for (i3 = t3, a3 = 0; a3 < 8; a3++) {
              if (u3 = d2(i3) - t3, y2(u3) < n3)
                return i3;
              if (o3 = v2(i3), y2(o3) < 1e-6)
                break;
              i3 -= u3 / o3;
            }
            if ((i3 = t3) < (e3 = 0))
              return e3;
            if (i3 > (r3 = 1))
              return r3;
            for (; e3 < r3; ) {
              if (u3 = d2(i3), y2(u3 - t3) < n3)
                return i3;
              t3 > u3 ? e3 = i3 : r3 = i3, i3 = 0.5 * (r3 - e3) + e3;
            }
            return i3;
          }(o2, a2));
        }
        var W = function(t2, n2, e2, r2, i2) {
          var u2 = function(t3, n3, e3, r3) {
            return function(i3) {
              return V(i3, t3, n3, e3, r3, 1);
            };
          }(n2, e2, r2, i2);
          return u2.displayName = t2, u2.x1 = n2, u2.y1 = e2, u2.x2 = r2, u2.y2 = i2, o.a.formulas[t2] = u2;
        }, G = function(t2) {
          return delete o.a.formulas[t2];
        };
        e.d(n, "processTweens", function() {
          return o.c;
        }), e.d(n, "Tweenable", function() {
          return o.a;
        }), e.d(n, "tween", function() {
          return o.d;
        }), e.d(n, "interpolate", function() {
          return Q;
        }), e.d(n, "Scene", function() {
          return z;
        }), e.d(n, "setBezierFunction", function() {
          return W;
        }), e.d(n, "unsetBezierFunction", function() {
          return G;
        }), o.a.filters.token = r;
      }]);
    });
  }
});

// src/utils.js
var require_utils = __commonJS({
  "src/utils.js"(exports2, module2) {
    var PREFIXES = "Webkit Moz O ms".split(" ");
    var FLOAT_COMPARISON_EPSILON = 1e-3;
    function extend(destination, source, recursive) {
      destination = destination || /* @__PURE__ */ Object.create(null);
      source = source || /* @__PURE__ */ Object.create(null);
      recursive = recursive || false;
      Object.keys(source).forEach(function(key) {
        if (source.hasOwnProperty(key)) {
          var destVal = destination[key];
          var sourceVal = source[key];
          if (recursive && isObject(destVal) && isObject(sourceVal)) {
            destination[key] = extend(destVal, sourceVal, recursive);
          } else {
            destination[key] = sourceVal;
          }
        }
      });
      return destination;
    }
    function render(template, vars) {
      var rendered = template;
      for (var key in vars) {
        if (vars.hasOwnProperty(key)) {
          var val = vars[key];
          var regExpString = "\\{" + key + "\\}";
          var regExp = new RegExp(regExpString, "g");
          rendered = rendered.replace(regExp, val);
        }
      }
      return rendered;
    }
    function setStyle(element, style, value) {
      var elStyle = element.style;
      for (var i = 0; i < PREFIXES.length; ++i) {
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
      }
      elStyle[style] = value;
    }
    function setStyles(element, styles) {
      forEachObject(styles, function(styleValue, styleName) {
        if (styleValue === null || styleValue === void 0) {
          return;
        }
        if (isObject(styleValue) && styleValue.prefix === true) {
          setStyle(element, styleName, styleValue.value);
        } else {
          element.style[styleName] = styleValue;
        }
      });
    }
    function capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    function isString(obj) {
      return typeof obj === "string" || obj instanceof String;
    }
    function isFunction(obj) {
      return typeof obj === "function";
    }
    function isArray(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    }
    function isObject(obj) {
      if (isArray(obj)) {
        return false;
      }
      var type = typeof obj;
      return type === "object" && !!obj;
    }
    function forEachObject(object, callback) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          var val = object[key];
          callback(val, key);
        }
      }
    }
    function floatEquals(a, b) {
      return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
    }
    function removeChildren(el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    }
    module2.exports = {
      extend,
      render,
      setStyle,
      setStyles,
      capitalize,
      isString,
      isFunction,
      isObject,
      forEachObject,
      floatEquals,
      removeChildren
    };
  }
});

// src/path.js
var require_path = __commonJS({
  "src/path.js"(exports2, module2) {
    var shifty = require_shifty();
    var utils = require_utils();
    var Tweenable = shifty.Tweenable;
    var EASING_ALIASES = {
      easeIn: "easeInCubic",
      easeOut: "easeOutCubic",
      easeInOut: "easeInOutCubic"
    };
    var Path = function Path2(path, opts) {
      if (!(this instanceof Path2)) {
        throw new Error("Constructor was called without new keyword");
      }
      opts = utils.extend(
        {
          delay: 0,
          duration: 800,
          easing: "linear",
          from: /* @__PURE__ */ Object.create(null),
          to: /* @__PURE__ */ Object.create(null),
          step: function() {
          }
        },
        opts
      );
      var element;
      if (utils.isString(path)) {
        element = document.querySelector(path);
      } else {
        element = path;
      }
      this.path = element;
      this._opts = opts;
      this._tweenable = null;
      var length = this.path.getTotalLength();
      this.path.style.strokeDasharray = length + " " + length;
      this.set(0);
    };
    Path.prototype.value = function value() {
      var offset = this._getComputedDashOffset();
      var length = this.path.getTotalLength();
      var progress = 1 - offset / length;
      return parseFloat(progress.toFixed(6), 10);
    };
    Path.prototype.set = function set(progress) {
      this.stop();
      this.path.style.strokeDashoffset = this._progressToOffset(progress);
      var step = this._opts.step;
      if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
      }
    };
    Path.prototype.stop = function stop() {
      this._stopTween();
      this.path.style.strokeDashoffset = this._getComputedDashOffset();
    };
    Path.prototype.animate = function animate(progress, opts, cb) {
      opts = opts || /* @__PURE__ */ Object.create(null);
      if (utils.isFunction(opts)) {
        cb = opts;
        opts = /* @__PURE__ */ Object.create(null);
      }
      var passedOpts = utils.extend(/* @__PURE__ */ Object.create(null), opts);
      var defaultOpts = utils.extend(/* @__PURE__ */ Object.create(null), this._opts);
      opts = utils.extend(defaultOpts, opts);
      var shiftyEasing = this._easing(opts.easing);
      var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);
      this.stop();
      this.path.getBoundingClientRect();
      var offset = this._getComputedDashOffset();
      var newOffset = this._progressToOffset(progress);
      var self = this;
      this._tweenable = new Tweenable();
      this._tweenable.tween({
        from: utils.extend({ offset }, values.from),
        to: utils.extend({ offset: newOffset }, values.to),
        duration: opts.duration,
        delay: opts.delay,
        easing: shiftyEasing,
        step: function(state) {
          self.path.style.strokeDashoffset = state.offset;
          var reference = opts.shape || self;
          opts.step(state, reference, opts.attachment);
        }
      }).then(function(state) {
        if (utils.isFunction(cb)) {
          cb();
        }
      }).catch(function(err) {
        console.error("Error in tweening:", err);
        throw err;
      });
    };
    Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
      var computedStyle = window.getComputedStyle(this.path, null);
      return parseFloat(computedStyle.getPropertyValue("stroke-dashoffset"), 10);
    };
    Path.prototype._progressToOffset = function _progressToOffset(progress) {
      var length = this.path.getTotalLength();
      return length - progress * length;
    };
    Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
      if (opts.from && opts.to) {
        return {
          from: opts.from,
          to: opts.to
        };
      }
      return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
      };
    };
    Path.prototype._calculateFrom = function _calculateFrom(easing) {
      return shifty.interpolate(
        this._opts.from,
        this._opts.to,
        this.value(),
        easing
      );
    };
    Path.prototype._calculateTo = function _calculateTo(progress, easing) {
      return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
    };
    Path.prototype._stopTween = function _stopTween() {
      if (this._tweenable !== null) {
        this._tweenable.stop(true);
        this._tweenable = null;
      }
    };
    Path.prototype._easing = function _easing(easing) {
      if (EASING_ALIASES.hasOwnProperty(easing)) {
        return EASING_ALIASES[easing];
      }
      return easing;
    };
    module2.exports = Path;
  }
});

// src/shape.js
var require_shape = __commonJS({
  "src/shape.js"(exports2, module2) {
    var Path = require_path();
    var utils = require_utils();
    var DESTROYED_ERROR = "Object is destroyed";
    var Shape = function Shape2(container, opts) {
      if (!(this instanceof Shape2)) {
        throw new Error("Constructor was called without new keyword");
      }
      if (arguments.length === 0) {
        return;
      }
      this._opts = utils.extend(
        {
          color: "#555",
          strokeWidth: 1,
          trailColor: null,
          trailWidth: null,
          fill: null,
          text: {
            style: {
              color: null,
              position: "absolute",
              left: "50%",
              top: "50%",
              padding: 0,
              margin: 0,
              transform: {
                prefix: true,
                value: "translate(-50%, -50%)"
              }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: "progressbar-text"
          },
          svgStyle: {
            display: "block",
            width: "100%"
          },
          warnings: false
        },
        opts,
        true
      );
      if (utils.isObject(opts) && opts.svgStyle !== void 0) {
        this._opts.svgStyle = opts.svgStyle;
      }
      if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== void 0) {
        this._opts.text.style = opts.text.style;
      }
      var svgView = this._createSvgView(this._opts);
      var element;
      if (utils.isString(container)) {
        element = document.querySelector(container);
      } else {
        element = container;
      }
      if (!element) {
        throw new Error("Container does not exist: " + container);
      }
      this._container = element;
      this._container.appendChild(svgView.svg);
      if (this._opts.warnings) {
        this._warnContainerAspectRatio(this._container);
      }
      if (this._opts.svgStyle) {
        utils.setStyles(svgView.svg, this._opts.svgStyle);
      }
      this.svg = svgView.svg;
      this.path = svgView.path;
      this.trail = svgView.trail;
      this.text = null;
      var newOpts = utils.extend(
        {
          attachment: void 0,
          shape: this
        },
        this._opts
      );
      this._progressPath = new Path(svgView.path, newOpts);
      if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
        this.setText(this._opts.text.value);
      }
    };
    Shape.prototype.animate = function animate(progress, opts, cb) {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      this._progressPath.animate(progress, opts, cb);
    };
    Shape.prototype.stop = function stop() {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      if (this._progressPath === void 0) {
        return;
      }
      this._progressPath.stop();
    };
    Shape.prototype.pause = function pause() {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      if (this._progressPath === void 0) {
        return;
      }
      if (!this._progressPath._tweenable) {
        return;
      }
      this._progressPath._tweenable.pause();
    };
    Shape.prototype.resume = function resume() {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      if (this._progressPath === void 0) {
        return;
      }
      if (!this._progressPath._tweenable) {
        return;
      }
      this._progressPath._tweenable.resume();
    };
    Shape.prototype.destroy = function destroy() {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      this.stop();
      this.svg.parentNode.removeChild(this.svg);
      this.svg = null;
      this.path = null;
      this.trail = null;
      this._progressPath = null;
      if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
      }
    };
    Shape.prototype.set = function set(progress) {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      this._progressPath.set(progress);
    };
    Shape.prototype.value = function value() {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      if (this._progressPath === void 0) {
        return 0;
      }
      return this._progressPath.value();
    };
    Shape.prototype.setText = function setText(newText) {
      if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
      }
      if (this.text === null) {
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
      }
      if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
      } else {
        this.text.innerHTML = newText;
      }
    };
    Shape.prototype._createSvgView = function _createSvgView(opts) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this._initializeSvg(svg, opts);
      var trailPath = null;
      if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
      }
      var path = this._createPath(opts);
      svg.appendChild(path);
      return {
        svg,
        path,
        trail: trailPath
      };
    };
    Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
      svg.setAttribute("viewBox", "0 0 100 100");
    };
    Shape.prototype._createPath = function _createPath(opts) {
      var pathString = this._pathString(opts);
      return this._createPathElement(pathString, opts);
    };
    Shape.prototype._createTrail = function _createTrail(opts) {
      var pathString = this._trailString(opts);
      var newOpts = utils.extend(/* @__PURE__ */ Object.create(null), opts);
      if (!newOpts.trailColor) {
        newOpts.trailColor = "#eee";
      }
      if (!newOpts.trailWidth) {
        newOpts.trailWidth = newOpts.strokeWidth;
      }
      newOpts.color = newOpts.trailColor;
      newOpts.strokeWidth = newOpts.trailWidth;
      newOpts.fill = null;
      return this._createPathElement(pathString, newOpts);
    };
    Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathString);
      path.setAttribute("stroke", opts.color);
      path.setAttribute("stroke-width", opts.strokeWidth);
      if (opts.fill) {
        path.setAttribute("fill", opts.fill);
      } else {
        path.setAttribute("fill-opacity", "0");
      }
      return path;
    };
    Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
      var textContainer = document.createElement("div");
      textContainer.className = opts.text.className;
      var textStyle = opts.text.style;
      if (textStyle) {
        if (opts.text.autoStyleContainer) {
          container.style.position = "relative";
        }
        utils.setStyles(textContainer, textStyle);
        if (!textStyle.color) {
          textContainer.style.color = opts.color;
        }
      }
      this._initializeTextContainer(opts, container, textContainer);
      return textContainer;
    };
    Shape.prototype._initializeTextContainer = function(opts, container, element) {
    };
    Shape.prototype._pathString = function _pathString(opts) {
      throw new Error("Override this function for each progress bar");
    };
    Shape.prototype._trailString = function _trailString(opts) {
      throw new Error("Override this function for each progress bar");
    };
    Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
      if (!this.containerAspectRatio) {
        return;
      }
      var computedStyle = window.getComputedStyle(container, null);
      var width = parseFloat(computedStyle.getPropertyValue("width"), 10);
      var height = parseFloat(computedStyle.getPropertyValue("height"), 10);
      if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn(
          "Incorrect aspect ratio of container",
          "#" + container.id,
          "detected:",
          computedStyle.getPropertyValue("width") + "(width)",
          "/",
          computedStyle.getPropertyValue("height") + "(height)",
          "=",
          width / height
        );
        console.warn("Aspect ratio of should be", this.containerAspectRatio);
      }
    };
    module2.exports = Shape;
  }
});

// src/line.js
var require_line = __commonJS({
  "src/line.js"(exports2, module2) {
    var Shape = require_shape();
    var utils = require_utils();
    var Line = function Line2(container, options) {
      this._pathTemplate = options.vertical ? "M {center},100 L {center},0" : "M 0,{center} L 100,{center}";
      Shape.apply(this, arguments);
    };
    Line.prototype = new Shape();
    Line.prototype.constructor = Line;
    Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
      var viewBoxStr = opts.vertical ? "0 0 " + opts.strokeWidth + " 100" : "0 0 100 " + opts.strokeWidth;
      svg.setAttribute("viewBox", viewBoxStr);
      svg.setAttribute("preserveAspectRatio", "none");
    };
    Line.prototype._pathString = function _pathString(opts) {
      return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
      });
    };
    Line.prototype._trailString = function _trailString(opts) {
      return this._pathString(opts);
    };
    module2.exports = Line;
  }
});

// src/circle.js
var require_circle = __commonJS({
  "src/circle.js"(exports2, module2) {
    var Shape = require_shape();
    var utils = require_utils();
    var Circle = function Circle2(container, options) {
      this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}";
      this.containerAspectRatio = 1;
      Shape.apply(this, arguments);
    };
    Circle.prototype = new Shape();
    Circle.prototype.constructor = Circle;
    Circle.prototype._pathString = function _pathString(opts) {
      var widthOfWider = opts.strokeWidth;
      if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
        widthOfWider = opts.trailWidth;
      }
      var r = 50 - widthOfWider / 2;
      return utils.render(this._pathTemplate, {
        radius: r,
        "2radius": r * 2
      });
    };
    Circle.prototype._trailString = function _trailString(opts) {
      return this._pathString(opts);
    };
    module2.exports = Circle;
  }
});

// src/semicircle.js
var require_semicircle = __commonJS({
  "src/semicircle.js"(exports2, module2) {
    var Shape = require_shape();
    var Circle = require_circle();
    var utils = require_utils();
    var SemiCircle = function SemiCircle2(container, options) {
      this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0";
      this.containerAspectRatio = 2;
      Shape.apply(this, arguments);
    };
    SemiCircle.prototype = new Shape();
    SemiCircle.prototype.constructor = SemiCircle;
    SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
      svg.setAttribute("viewBox", "0 0 100 50");
    };
    SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
      if (opts.text.style) {
        textContainer.style.top = "auto";
        textContainer.style.bottom = "0";
        if (opts.text.alignToBottom) {
          utils.setStyle(textContainer, "transform", "translate(-50%, 0)");
        } else {
          utils.setStyle(textContainer, "transform", "translate(-50%, 50%)");
        }
      }
    };
    SemiCircle.prototype._pathString = Circle.prototype._pathString;
    SemiCircle.prototype._trailString = Circle.prototype._trailString;
    module2.exports = SemiCircle;
  }
});

// src/square.js
var require_square = __commonJS({
  "src/square.js"(exports2, module2) {
    var Shape = require_shape();
    var utils = require_utils();
    var Square = function Square2(container, options) {
      this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}";
      this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}";
      Shape.apply(this, arguments);
    };
    Square.prototype = new Shape();
    Square.prototype.constructor = Square;
    Square.prototype._pathString = function _pathString(opts) {
      var w = 100 - opts.strokeWidth / 2;
      return utils.render(this._pathTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2
      });
    };
    Square.prototype._trailString = function _trailString(opts) {
      var w = 100 - opts.strokeWidth / 2;
      return utils.render(this._trailTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2,
        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
      });
    };
    module2.exports = Square;
  }
});

// src/main.js
module.exports = {
  // Higher level API, different shaped progress bars
  Line: require_line(),
  Circle: require_circle(),
  SemiCircle: require_semicircle(),
  Square: require_square(),
  // Lower level API to use any SVG path
  Path: require_path(),
  // Base-class for creating new custom shapes
  // to be in line with the API of built-in shapes
  // Undocumented.
  Shape: require_shape(),
  // Internal utils, undocumented.
  utils: require_utils()
};
/*! Bundled license information:

shifty/dist/shifty.js:
  (*! Shifty 2.8.3 - https://github.com/jeremyckahn/shifty *)
  (*!
   * All equations are adapted from Thomas Fuchs'
   * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
   *
   * Based on Easing Equations (c) 2003 [Robert
   * Penner](http://www.robertpenner.com/), all rights reserved. This work is
   * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
   *)
  (*!
   *  TERMS OF USE - EASING EQUATIONS
   *  Open source under the BSD License.
   *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
   *)
*/
