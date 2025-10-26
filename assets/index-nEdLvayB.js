import {
  a as Re,
  b as _e,
  c as Me,
  d as tr,
  e as cr,
} from "./index-DVJv-V4L.js";
var Be = {},
  Ne = {},
  je = {},
  Ke;
function We() {
  if (Ke) return je;
  ((Ke = 1),
    Object.defineProperty(je, "__esModule", { value: !0 }),
    (je.Ok = je.Err = void 0));
  function i(R) {
    "@babel/helpers - typeof";
    return (
      (i =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (C) {
              return typeof C;
            }
          : function (C) {
              return C &&
                typeof Symbol == "function" &&
                C.constructor === Symbol &&
                C !== Symbol.prototype
                ? "symbol"
                : typeof C;
            }),
      i(R)
    );
  }
  function ie(R, C) {
    if (!(R instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function L(R, C) {
    for (var y = 0; y < C.length; y++) {
      var F = C[y];
      ((F.enumerable = F.enumerable || !1),
        (F.configurable = !0),
        "value" in F && (F.writable = !0),
        Object.defineProperty(R, z(F.key), F));
    }
  }
  function J(R, C, y) {
    return (
      C && L(R.prototype, C),
      Object.defineProperty(R, "prototype", { writable: !1 }),
      R
    );
  }
  function z(R) {
    var C = K(R, "string");
    return i(C) == "symbol" ? C : C + "";
  }
  function K(R, C) {
    if (i(R) != "object" || !R) return R;
    var y = R[Symbol.toPrimitive];
    if (y !== void 0) {
      var F = y.call(R, C);
      if (i(F) != "object") return F;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(R);
  }
  return (
    (je.Ok = (function () {
      function R(C) {
        (ie(this, R), (this.value = C));
      }
      return J(R, [
        {
          key: "unwrapErr",
          value: function () {
            throw new Error("No error");
          },
        },
        {
          key: "unwrap",
          value: function () {
            return this.value;
          },
        },
        {
          key: "isOk",
          value: function () {
            return !0;
          },
        },
        {
          key: "isErr",
          value: function () {
            return !1;
          },
        },
      ]);
    })()),
    (je.Err = (function () {
      function R(C) {
        (ie(this, R), (this.error = C));
      }
      return J(R, [
        {
          key: "unwrapErr",
          value: function () {
            return this.error;
          },
        },
        {
          key: "unwrap",
          value: function () {
            throw new Error(this.error.message);
          },
        },
        {
          key: "isOk",
          value: function () {
            return !1;
          },
        },
        {
          key: "isErr",
          value: function () {
            return !0;
          },
        },
      ]);
    })()),
    je
  );
}
var Ee = {},
  Pe = {},
  $e;
function Fe() {
  return (
    $e ||
      (($e = 1),
      Object.defineProperty(Pe, "__esModule", { value: !0 }),
      (Pe.NULL_ACCOUNT = Pe.DEFAULT_TIMEOUT = void 0),
      Re(),
      (Pe.DEFAULT_TIMEOUT = 300),
      (Pe.NULL_ACCOUNT =
        "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF")),
    Pe
  );
}
var Je;
function Xe() {
  if (Je) return Ee;
  ((Je = 1),
    Object.defineProperty(Ee, "__esModule", { value: !0 }),
    (Ee.contractErrorPattern = void 0),
    (Ee.getAccount = le),
    (Ee.implementsToString = fe),
    (Ee.processSpecEntryStream = ve),
    (Ee.specFromWasm = Q),
    (Ee.withExponentialBackoff = Y));
  var i = Re(),
    ie = Fe();
  function L() {
    var U,
      V,
      h = typeof Symbol == "function" ? Symbol : {},
      d = h.iterator || "@@iterator",
      O = h.toStringTag || "@@toStringTag";
    function c(u, e, a, p) {
      var S = e && e.prototype instanceof f ? e : f,
        m = Object.create(S.prototype);
      return (
        J(
          m,
          "_invoke",
          (function (I, G, M) {
            var o,
              r,
              n,
              l = 0,
              j = M || [],
              A = !1,
              b = {
                p: 0,
                n: 0,
                v: U,
                a: E,
                f: E.bind(U, 4),
                d: function (w, k) {
                  return ((o = w), (r = 0), (n = U), (b.n = k), t);
                },
              };
            function E(g, w) {
              for (r = g, n = w, V = 0; !A && l && !k && V < j.length; V++) {
                var k,
                  x = j[V],
                  B = b.p,
                  P = x[2];
                g > 3
                  ? (k = P === w) &&
                    ((n = x[(r = x[4]) ? 5 : ((r = 3), 3)]), (x[4] = x[5] = U))
                  : x[0] <= B &&
                    ((k = g < 2 && B < x[1])
                      ? ((r = 0), (b.v = w), (b.n = x[1]))
                      : B < P &&
                        (k = g < 3 || x[0] > w || w > P) &&
                        ((x[4] = g), (x[5] = w), (b.n = P), (r = 0)));
              }
              if (k || g > 1) return t;
              throw ((A = !0), w);
            }
            return function (g, w, k) {
              if (l > 1) throw TypeError("Generator is already running");
              for (
                A && w === 1 && E(w, k), r = w, n = k;
                (V = r < 2 ? U : n) || !A;

              ) {
                o ||
                  (r
                    ? r < 3
                      ? (r > 1 && (b.n = -1), E(r, n))
                      : (b.n = n)
                    : (b.v = n));
                try {
                  if (((l = 2), o)) {
                    if ((r || (g = "next"), (V = o[g]))) {
                      if (!(V = V.call(o, n)))
                        throw TypeError("iterator result is not an object");
                      if (!V.done) return V;
                      ((n = V.value), r < 2 && (r = 0));
                    } else
                      (r === 1 && (V = o.return) && V.call(o),
                        r < 2 &&
                          ((n = TypeError(
                            "The iterator does not provide a '" +
                              g +
                              "' method",
                          )),
                          (r = 1)));
                    o = U;
                  } else if ((V = (A = b.n < 0) ? n : I.call(G, b)) !== t)
                    break;
                } catch (x) {
                  ((o = U), (r = 1), (n = x));
                } finally {
                  l = 1;
                }
              }
              return { value: V, done: A };
            };
          })(u, a, p),
          !0,
        ),
        m
      );
    }
    var t = {};
    function f() {}
    function v() {}
    function T() {}
    V = Object.getPrototypeOf;
    var N = [][d]
        ? V(V([][d]()))
        : (J((V = {}), d, function () {
            return this;
          }),
          V),
      _ = (T.prototype = f.prototype = Object.create(N));
    function s(u) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(u, T)
          : ((u.__proto__ = T), J(u, O, "GeneratorFunction")),
        (u.prototype = Object.create(_)),
        u
      );
    }
    return (
      (v.prototype = T),
      J(_, "constructor", T),
      J(T, "constructor", v),
      (v.displayName = "GeneratorFunction"),
      J(T, O, "GeneratorFunction"),
      J(_),
      J(_, O, "Generator"),
      J(_, d, function () {
        return this;
      }),
      J(_, "toString", function () {
        return "[object Generator]";
      }),
      (L = function () {
        return { w: c, m: s };
      })()
    );
  }
  function J(U, V, h, d) {
    var O = Object.defineProperty;
    try {
      O({}, "", {});
    } catch {
      O = 0;
    }
    ((J = function (t, f, v, T) {
      function N(_, s) {
        J(t, _, function (u) {
          return this._invoke(_, s, u);
        });
      }
      f
        ? O
          ? O(t, f, {
              value: v,
              enumerable: !T,
              configurable: !T,
              writable: !T,
            })
          : (t[f] = v)
        : (N("next", 0), N("throw", 1), N("return", 2));
    }),
      J(U, V, h, d));
  }
  function z(U) {
    return y(U) || C(U) || R(U) || K();
  }
  function K() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function R(U, V) {
    if (U) {
      if (typeof U == "string") return F(U, V);
      var h = {}.toString.call(U).slice(8, -1);
      return (
        h === "Object" && U.constructor && (h = U.constructor.name),
        h === "Map" || h === "Set"
          ? Array.from(U)
          : h === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)
            ? F(U, V)
            : void 0
      );
    }
  }
  function C(U) {
    if (
      (typeof Symbol < "u" && U[Symbol.iterator] != null) ||
      U["@@iterator"] != null
    )
      return Array.from(U);
  }
  function y(U) {
    if (Array.isArray(U)) return F(U);
  }
  function F(U, V) {
    (V == null || V > U.length) && (V = U.length);
    for (var h = 0, d = Array(V); h < V; h++) d[h] = U[h];
    return d;
  }
  function $(U) {
    "@babel/helpers - typeof";
    return (
      ($ =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (V) {
              return typeof V;
            }
          : function (V) {
              return V &&
                typeof Symbol == "function" &&
                V.constructor === Symbol &&
                V !== Symbol.prototype
                ? "symbol"
                : typeof V;
            }),
      $(U)
    );
  }
  function q(U, V, h, d, O, c, t) {
    try {
      var f = U[c](t),
        v = f.value;
    } catch (T) {
      return void h(T);
    }
    f.done ? V(v) : Promise.resolve(v).then(d, O);
  }
  function X(U) {
    return function () {
      var V = this,
        h = arguments;
      return new Promise(function (d, O) {
        var c = U.apply(V, h);
        function t(v) {
          q(c, d, O, t, f, "next", v);
        }
        function f(v) {
          q(c, d, O, t, f, "throw", v);
        }
        t(void 0);
      });
    };
  }
  function Y(U, V, h) {
    return Z.apply(this, arguments);
  }
  function Z() {
    return (
      (Z = X(
        L().m(function U(V, h, d) {
          var O,
            c,
            t,
            f,
            v,
            T,
            N,
            _ = arguments,
            s,
            u;
          return L().w(function (e) {
            for (;;)
              switch (e.n) {
                case 0:
                  return (
                    (O = _.length > 3 && _[3] !== void 0 ? _[3] : 1.5),
                    (c = _.length > 4 && _[4] !== void 0 ? _[4] : !1),
                    (t = []),
                    (f = 0),
                    (s = t),
                    (e.n = 1),
                    V()
                  );
                case 1:
                  if ((s.push.call(s, e.v), h(t[t.length - 1]))) {
                    e.n = 2;
                    break;
                  }
                  return e.a(2, t);
                case 2:
                  ((v = new Date(Date.now() + d * 1e3).valueOf()),
                    (T = 1e3),
                    (N = T));
                case 3:
                  if (!(Date.now() < v && h(t[t.length - 1]))) {
                    e.n = 6;
                    break;
                  }
                  return (
                    (f += 1),
                    c &&
                      console.info(
                        "Waiting "
                          .concat(
                            T,
                            "ms before trying again (bringing the total wait time to ",
                          )
                          .concat(N, "ms so far, of total ")
                          .concat(d * 1e3, "ms)"),
                      ),
                    (e.n = 4),
                    new Promise(function (a) {
                      return setTimeout(a, T);
                    })
                  );
                case 4:
                  return (
                    (T *= O),
                    new Date(Date.now() + T).valueOf() > v &&
                      ((T = v - Date.now()),
                      c &&
                        console.info(
                          "was gonna wait too long; new waitTime: ".concat(
                            T,
                            "ms",
                          ),
                        )),
                    (N = T + N),
                    (u = t),
                    (e.n = 5),
                    V(t[t.length - 1])
                  );
                case 5:
                  (u.push.call(u, e.v),
                    c &&
                      h(t[t.length - 1]) &&
                      console.info(
                        ""
                          .concat(f, ". Called ")
                          .concat(V, "; ")
                          .concat(t.length, " prev attempts. Most recent: ")
                          .concat(JSON.stringify(t[t.length - 1], null, 2)),
                      ),
                    (e.n = 3));
                  break;
                case 6:
                  return e.a(2, t);
              }
          }, U);
        }),
      )),
      Z.apply(this, arguments)
    );
  }
  Ee.contractErrorPattern = /Error\(Contract, #(\d+)\)/;
  function fe(U) {
    return $(U) === "object" && U !== null && "toString" in U;
  }
  function Q(U) {
    return ee.apply(this, arguments);
  }
  function ee() {
    return (
      (ee = X(
        L().m(function U(V) {
          var h, d, O;
          return L().w(
            function (c) {
              for (;;)
                switch ((c.p = c.n)) {
                  case 0:
                    return ((c.p = 0), (c.n = 1), WebAssembly.compile(V));
                  case 1:
                    ((d = c.v),
                      (h = WebAssembly.Module.customSections(
                        d,
                        "contractspecv0",
                      )),
                      (c.n = 3));
                    break;
                  case 2:
                    ((c.p = 2),
                      c.v,
                      (O = ae(V)),
                      (h = O.get("contractspecv0")));
                  case 3:
                    if (!(!h || h.length === 0)) {
                      c.n = 4;
                      break;
                    }
                    throw new Error("Could not obtain contract spec from wasm");
                  case 4:
                    return c.a(2, _e.from(h[0]));
                }
            },
            U,
            null,
            [[0, 2]],
          );
        }),
      )),
      ee.apply(this, arguments)
    );
  }
  function ae(U) {
    var V = new Map(),
      h = U.buffer.slice(U.byteOffset, U.byteOffset + U.byteLength),
      d = 0,
      O = function (e) {
        if (d + e > U.byteLength) throw new Error("Buffer overflow");
        var a = new Uint8Array(h, d, e);
        return ((d += e), a);
      };
    if (z(O(4)).join() !== "0,97,115,109")
      throw new Error("Invalid WASM magic");
    if (z(O(4)).join() !== "1,0,0,0") throw new Error("Invalid WASM version");
    for (; d < U.byteLength; ) {
      var c = O(1)[0],
        t = s(),
        f = d;
      if (c === 0) {
        var v = s();
        if (v === 0 || d + v > f + t) continue;
        var T = O(v),
          N = O(t - (d - f));
        try {
          var _ = new TextDecoder("utf-8", { fatal: !0 }).decode(T);
          N.length > 0 && V.set(_, (V.get(_) || []).concat(N));
        } catch {}
      } else d += t;
    }
    function s() {
      for (var u = 0, e = 0; ; ) {
        var a = O(1)[0];
        if (((u |= (a & 127) << e), (a & 128) === 0)) break;
        if ((e += 7) >= 32) throw new Error("Invalid WASM value");
      }
      return u >>> 0;
    }
    return V;
  }
  function ve(U) {
    for (var V = new i.cereal.XdrReader(U), h = []; !V.eof; )
      h.push(i.xdr.ScSpecEntry.read(V));
    return h;
  }
  function le(U, V) {
    return Se.apply(this, arguments);
  }
  function Se() {
    return (
      (Se = X(
        L().m(function U(V, h) {
          return L().w(function (d) {
            for (;;)
              switch (d.n) {
                case 0:
                  return d.a(
                    2,
                    V.publicKey
                      ? h.getAccount(V.publicKey)
                      : new i.Account(ie.NULL_ACCOUNT, "0"),
                  );
              }
          }, U);
        }),
      )),
      Se.apply(this, arguments)
    );
  }
  return Ee;
}
var Ve = {},
  ze;
function nr() {
  if (ze) return Ve;
  ((ze = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.Watcher = Ve.SentTransaction = void 0));
  var i = Me(),
    ie = tr(),
    L = Xe(),
    J = Fe(),
    z;
  function K(c, t, f) {
    return (
      (t = Z(t)),
      R(
        c,
        q() ? Reflect.construct(t, f || [], Z(c).constructor) : t.apply(c, f),
      )
    );
  }
  function R(c, t) {
    if (t && (fe(t) == "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return C(c);
  }
  function C(c) {
    if (c === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return c;
  }
  function y(c, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    ((c.prototype = Object.create(t && t.prototype, {
      constructor: { value: c, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(c, "prototype", { writable: !1 }),
      t && Y(c, t));
  }
  function F(c) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (F = function (v) {
        if (v === null || !X(v)) return v;
        if (typeof v != "function")
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (t !== void 0) {
          if (t.has(v)) return t.get(v);
          t.set(v, T);
        }
        function T() {
          return $(v, arguments, Z(this).constructor);
        }
        return (
          (T.prototype = Object.create(v.prototype, {
            constructor: {
              value: T,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Y(T, v)
        );
      }),
      F(c)
    );
  }
  function $(c, t, f) {
    if (q()) return Reflect.construct.apply(null, arguments);
    var v = [null];
    v.push.apply(v, t);
    var T = new (c.bind.apply(c, v))();
    return (f && Y(T, f.prototype), T);
  }
  function q() {
    try {
      var c = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch {}
    return (q = function () {
      return !!c;
    })();
  }
  function X(c) {
    try {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    } catch {
      return typeof c == "function";
    }
  }
  function Y(c, t) {
    return (
      (Y = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (f, v) {
            return ((f.__proto__ = v), f);
          }),
      Y(c, t)
    );
  }
  function Z(c) {
    return (
      (Z = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      Z(c)
    );
  }
  function fe(c) {
    "@babel/helpers - typeof";
    return (
      (fe =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      fe(c)
    );
  }
  function Q() {
    var c,
      t,
      f = typeof Symbol == "function" ? Symbol : {},
      v = f.iterator || "@@iterator",
      T = f.toStringTag || "@@toStringTag";
    function N(m, I, G, M) {
      var o = I && I.prototype instanceof s ? I : s,
        r = Object.create(o.prototype);
      return (
        ee(
          r,
          "_invoke",
          (function (n, l, j) {
            var A,
              b,
              E,
              g = 0,
              w = j || [],
              k = !1,
              x = {
                p: 0,
                n: 0,
                v: c,
                a: B,
                f: B.bind(c, 4),
                d: function (D, W) {
                  return ((A = D), (b = 0), (E = c), (x.n = W), _);
                },
              };
            function B(P, D) {
              for (b = P, E = D, t = 0; !k && g && !W && t < w.length; t++) {
                var W,
                  oe = w[t],
                  pe = x.p,
                  ne = oe[2];
                P > 3
                  ? (W = ne === D) &&
                    ((E = oe[(b = oe[4]) ? 5 : ((b = 3), 3)]),
                    (oe[4] = oe[5] = c))
                  : oe[0] <= pe &&
                    ((W = P < 2 && pe < oe[1])
                      ? ((b = 0), (x.v = D), (x.n = oe[1]))
                      : pe < ne &&
                        (W = P < 3 || oe[0] > D || D > ne) &&
                        ((oe[4] = P), (oe[5] = D), (x.n = ne), (b = 0)));
              }
              if (W || P > 1) return _;
              throw ((k = !0), D);
            }
            return function (P, D, W) {
              if (g > 1) throw TypeError("Generator is already running");
              for (
                k && D === 1 && B(D, W), b = D, E = W;
                (t = b < 2 ? c : E) || !k;

              ) {
                A ||
                  (b
                    ? b < 3
                      ? (b > 1 && (x.n = -1), B(b, E))
                      : (x.n = E)
                    : (x.v = E));
                try {
                  if (((g = 2), A)) {
                    if ((b || (P = "next"), (t = A[P]))) {
                      if (!(t = t.call(A, E)))
                        throw TypeError("iterator result is not an object");
                      if (!t.done) return t;
                      ((E = t.value), b < 2 && (b = 0));
                    } else
                      (b === 1 && (t = A.return) && t.call(A),
                        b < 2 &&
                          ((E = TypeError(
                            "The iterator does not provide a '" +
                              P +
                              "' method",
                          )),
                          (b = 1)));
                    A = c;
                  } else if ((t = (k = x.n < 0) ? E : n.call(l, x)) !== _)
                    break;
                } catch (oe) {
                  ((A = c), (b = 1), (E = oe));
                } finally {
                  g = 1;
                }
              }
              return { value: t, done: k };
            };
          })(m, G, M),
          !0,
        ),
        r
      );
    }
    var _ = {};
    function s() {}
    function u() {}
    function e() {}
    t = Object.getPrototypeOf;
    var a = [][v]
        ? t(t([][v]()))
        : (ee((t = {}), v, function () {
            return this;
          }),
          t),
      p = (e.prototype = s.prototype = Object.create(a));
    function S(m) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(m, e)
          : ((m.__proto__ = e), ee(m, T, "GeneratorFunction")),
        (m.prototype = Object.create(p)),
        m
      );
    }
    return (
      (u.prototype = e),
      ee(p, "constructor", e),
      ee(e, "constructor", u),
      (u.displayName = "GeneratorFunction"),
      ee(e, T, "GeneratorFunction"),
      ee(p),
      ee(p, T, "Generator"),
      ee(p, v, function () {
        return this;
      }),
      ee(p, "toString", function () {
        return "[object Generator]";
      }),
      (Q = function () {
        return { w: N, m: S };
      })()
    );
  }
  function ee(c, t, f, v) {
    var T = Object.defineProperty;
    try {
      T({}, "", {});
    } catch {
      T = 0;
    }
    ((ee = function (_, s, u, e) {
      function a(p, S) {
        ee(_, p, function (m) {
          return this._invoke(p, S, m);
        });
      }
      s
        ? T
          ? T(_, s, {
              value: u,
              enumerable: !e,
              configurable: !e,
              writable: !e,
            })
          : (_[s] = u)
        : (a("next", 0), a("throw", 1), a("return", 2));
    }),
      ee(c, t, f, v));
  }
  function ae(c, t, f, v, T, N, _) {
    try {
      var s = c[N](_),
        u = s.value;
    } catch (e) {
      return void f(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(v, T);
  }
  function ve(c) {
    return function () {
      var t = this,
        f = arguments;
      return new Promise(function (v, T) {
        var N = c.apply(t, f);
        function _(u) {
          ae(N, v, T, _, s, "next", u);
        }
        function s(u) {
          ae(N, v, T, _, s, "throw", u);
        }
        _(void 0);
      });
    };
  }
  function le(c, t) {
    if (!(c instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Se(c, t) {
    for (var f = 0; f < t.length; f++) {
      var v = t[f];
      ((v.enumerable = v.enumerable || !1),
        (v.configurable = !0),
        "value" in v && (v.writable = !0),
        Object.defineProperty(c, h(v.key), v));
    }
  }
  function U(c, t, f) {
    return (
      t && Se(c.prototype, t),
      Object.defineProperty(c, "prototype", { writable: !1 }),
      c
    );
  }
  function V(c, t, f) {
    return (
      (t = h(t)) in c
        ? Object.defineProperty(c, t, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (c[t] = f),
      c
    );
  }
  function h(c) {
    var t = d(c, "string");
    return fe(t) == "symbol" ? t : t + "";
  }
  function d(c, t) {
    if (fe(c) != "object" || !c) return c;
    var f = c[Symbol.toPrimitive];
    if (f !== void 0) {
      var v = f.call(c, t);
      if (fe(v) != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(c);
  }
  var O = (Ve.SentTransaction = (function () {
    function c(t) {
      var f = this,
        v;
      (le(this, c),
        V(
          this,
          "send",
          (function () {
            var T = ve(
              Q().m(function N(_) {
                var s, u, e;
                return Q().w(function (a) {
                  for (;;)
                    switch (a.n) {
                      case 0:
                        return (
                          (a.n = 1),
                          f.server.sendTransaction(f.assembled.signed)
                        );
                      case 1:
                        if (
                          ((f.sendTransactionResponse = a.v),
                          f.sendTransactionResponse.status === "PENDING")
                        ) {
                          a.n = 2;
                          break;
                        }
                        throw new c.Errors.SendFailed(
                          `Sending the transaction to the network failed!
`.concat(JSON.stringify(f.sendTransactionResponse, null, 2)),
                        );
                      case 2:
                        return (
                          _ != null &&
                            _.onSubmitted &&
                            _.onSubmitted(f.sendTransactionResponse),
                          (u = f.sendTransactionResponse.hash),
                          (e =
                            (s = f.assembled.options.timeoutInSeconds) !==
                              null && s !== void 0
                              ? s
                              : J.DEFAULT_TIMEOUT),
                          (a.n = 3),
                          (0, L.withExponentialBackoff)(
                            ve(
                              Q().m(function p() {
                                var S;
                                return Q().w(function (m) {
                                  for (;;)
                                    switch (m.n) {
                                      case 0:
                                        return (
                                          (m.n = 1),
                                          f.server.getTransaction(u)
                                        );
                                      case 1:
                                        return (
                                          (S = m.v),
                                          _ != null &&
                                            _.onProgress &&
                                            _.onProgress(S),
                                          m.a(2, S)
                                        );
                                    }
                                }, p);
                              }),
                            ),
                            function (p) {
                              return (
                                p.status ===
                                ie.Api.GetTransactionStatus.NOT_FOUND
                              );
                            },
                            e,
                          )
                        );
                      case 3:
                        if (
                          ((f.getTransactionResponseAll = a.v),
                          (f.getTransactionResponse =
                            f.getTransactionResponseAll[
                              f.getTransactionResponseAll.length - 1
                            ]),
                          f.getTransactionResponse.status !==
                            ie.Api.GetTransactionStatus.NOT_FOUND)
                        ) {
                          a.n = 4;
                          break;
                        }
                        throw new c.Errors.TransactionStillPending(
                          "Waited ".concat(
                            e,
                            " seconds for transaction to complete, but it did not. ",
                          ) +
                            "Returning anyway. Check the transaction status manually. " +
                            "Sent transaction: ".concat(
                              JSON.stringify(
                                f.sendTransactionResponse,
                                null,
                                2,
                              ),
                              `
`,
                            ) +
                            "All attempts to get the result: ".concat(
                              JSON.stringify(
                                f.getTransactionResponseAll,
                                null,
                                2,
                              ),
                            ),
                        );
                      case 4:
                        return a.a(2, f);
                    }
                }, N);
              }),
            );
            return function (N) {
              return T.apply(this, arguments);
            };
          })(),
        ),
        (this.assembled = t),
        (this.server = new i.Server(this.assembled.options.rpcUrl, {
          allowHttp:
            (v = this.assembled.options.allowHttp) !== null && v !== void 0
              ? v
              : !1,
        })));
    }
    return U(c, [
      {
        key: "result",
        get: function () {
          if ("getTransactionResponse" in this && this.getTransactionResponse) {
            if ("returnValue" in this.getTransactionResponse)
              return this.assembled.options.parseResultXdr(
                this.getTransactionResponse.returnValue,
              );
            throw new Error("Transaction failed! Cannot parse result.");
          }
          if (this.sendTransactionResponse) {
            var f,
              v =
                (f = this.sendTransactionResponse.errorResult) === null ||
                f === void 0
                  ? void 0
                  : f.result();
            throw v
              ? new c.Errors.SendFailed(
                  "Transaction simulation looked correct, but attempting to send the transaction failed. Check `simulation` and `sendTransactionResponseAll` to troubleshoot. Decoded `sendTransactionResponse.errorResultXdr`: ".concat(
                    v,
                  ),
                )
              : new c.Errors.SendResultOnly(
                  "Transaction was sent to the network, but not yet awaited. No result to show. Await transaction completion with `getTransaction(sendTransactionResponse.hash)`",
                );
          }
          throw new Error(
            "Sending transaction failed: ".concat(
              JSON.stringify(this.assembled.signed),
            ),
          );
        },
      },
    ]);
  })());
  return (
    (z = O),
    V(O, "Errors", {
      SendFailed: (function (c) {
        function t() {
          return (le(this, t), K(this, t, arguments));
        }
        return (y(t, c), U(t));
      })(F(Error)),
      SendResultOnly: (function (c) {
        function t() {
          return (le(this, t), K(this, t, arguments));
        }
        return (y(t, c), U(t));
      })(F(Error)),
      TransactionStillPending: (function (c) {
        function t() {
          return (le(this, t), K(this, t, arguments));
        }
        return (y(t, c), U(t));
      })(F(Error)),
    }),
    V(
      O,
      "init",
      (function () {
        var c = ve(
          Q().m(function t(f, v) {
            var T, N;
            return Q().w(function (_) {
              for (;;)
                switch (_.n) {
                  case 0:
                    return ((T = new z(f)), (_.n = 1), T.send(v));
                  case 1:
                    return ((N = _.v), _.a(2, N));
                }
            }, t);
          }),
        );
        return function (t, f) {
          return c.apply(this, arguments);
        };
      })(),
    ),
    (Ve.Watcher = U(function c() {
      le(this, c);
    })),
    Ve
  );
}
var Ye;
function ar() {
  if (Ye) return Ne;
  ((Ye = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.AssembledTransaction = void 0));
  var i = Re(),
    ie = Me(),
    L = tr(),
    J = cr(),
    z = We(),
    K = Xe(),
    R = Fe(),
    C = nr();
  function y(o, r, n) {
    return (
      (r = ee(r)),
      F(
        o,
        Z() ? Reflect.construct(r, n || [], ee(o).constructor) : r.apply(o, n),
      )
    );
  }
  function F(o, r) {
    if (r && (ae(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return $(o);
  }
  function $(o) {
    if (o === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return o;
  }
  function q(o, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(r && r.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(o, "prototype", { writable: !1 }),
      r && Q(o, r));
  }
  function X(o) {
    var r = typeof Map == "function" ? new Map() : void 0;
    return (
      (X = function (l) {
        if (l === null || !fe(l)) return l;
        if (typeof l != "function")
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (r !== void 0) {
          if (r.has(l)) return r.get(l);
          r.set(l, j);
        }
        function j() {
          return Y(l, arguments, ee(this).constructor);
        }
        return (
          (j.prototype = Object.create(l.prototype, {
            constructor: {
              value: j,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Q(j, l)
        );
      }),
      X(o)
    );
  }
  function Y(o, r, n) {
    if (Z()) return Reflect.construct.apply(null, arguments);
    var l = [null];
    l.push.apply(l, r);
    var j = new (o.bind.apply(o, l))();
    return (n && Q(j, n.prototype), j);
  }
  function Z() {
    try {
      var o = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch {}
    return (Z = function () {
      return !!o;
    })();
  }
  function fe(o) {
    try {
      return Function.toString.call(o).indexOf("[native code]") !== -1;
    } catch {
      return typeof o == "function";
    }
  }
  function Q(o, r) {
    return (
      (Q = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, l) {
            return ((n.__proto__ = l), n);
          }),
      Q(o, r)
    );
  }
  function ee(o) {
    return (
      (ee = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      ee(o)
    );
  }
  function ae(o) {
    "@babel/helpers - typeof";
    return (
      (ae =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (r) {
              return typeof r;
            }
          : function (r) {
              return r &&
                typeof Symbol == "function" &&
                r.constructor === Symbol &&
                r !== Symbol.prototype
                ? "symbol"
                : typeof r;
            }),
      ae(o)
    );
  }
  function ve(o, r) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(o);
      (r &&
        (l = l.filter(function (j) {
          return Object.getOwnPropertyDescriptor(o, j).enumerable;
        })),
        n.push.apply(n, l));
    }
    return n;
  }
  function le(o) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r] != null ? arguments[r] : {};
      r % 2
        ? ve(Object(n), !0).forEach(function (l) {
            m(o, l, n[l]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n))
          : ve(Object(n)).forEach(function (l) {
              Object.defineProperty(
                o,
                l,
                Object.getOwnPropertyDescriptor(n, l),
              );
            });
    }
    return o;
  }
  function Se(o) {
    if (o != null) {
      var r =
          o[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
        n = 0;
      if (r) return r.call(o);
      if (typeof o.next == "function") return o;
      if (!isNaN(o.length))
        return {
          next: function () {
            return (
              o && n >= o.length && (o = void 0),
              { value: o && o[n++], done: !o }
            );
          },
        };
    }
    throw new TypeError(ae(o) + " is not iterable");
  }
  function U(o, r) {
    return d(o) || h(o, r) || T(o, r) || V();
  }
  function V() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function h(o, r) {
    var n =
      o == null
        ? null
        : (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
    if (n != null) {
      var l,
        j,
        A,
        b,
        E = [],
        g = !0,
        w = !1;
      try {
        if (((A = (n = n.call(o)).next), r !== 0))
          for (
            ;
            !(g = (l = A.call(n)).done) && (E.push(l.value), E.length !== r);
            g = !0
          );
      } catch (k) {
        ((w = !0), (j = k));
      } finally {
        try {
          if (!g && n.return != null && ((b = n.return()), Object(b) !== b))
            return;
        } finally {
          if (w) throw j;
        }
      }
      return E;
    }
  }
  function d(o) {
    if (Array.isArray(o)) return o;
  }
  function O(o, r) {
    var n = (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
    if (!n) {
      if (Array.isArray(o) || (n = T(o)) || r) {
        n && (o = n);
        var l = 0,
          j = function () {};
        return {
          s: j,
          n: function () {
            return l >= o.length ? { done: !0 } : { done: !1, value: o[l++] };
          },
          e: function (w) {
            throw w;
          },
          f: j,
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var A,
      b = !0,
      E = !1;
    return {
      s: function () {
        n = n.call(o);
      },
      n: function () {
        var w = n.next();
        return ((b = w.done), w);
      },
      e: function (w) {
        ((E = !0), (A = w));
      },
      f: function () {
        try {
          b || n.return == null || n.return();
        } finally {
          if (E) throw A;
        }
      },
    };
  }
  function c() {
    var o,
      r,
      n = typeof Symbol == "function" ? Symbol : {},
      l = n.iterator || "@@iterator",
      j = n.toStringTag || "@@toStringTag";
    function A(P, D, W, oe) {
      var pe = D && D.prototype instanceof E ? D : E,
        ne = Object.create(pe.prototype);
      return (
        t(
          ne,
          "_invoke",
          (function (ue, ce, de) {
            var re,
              H,
              se,
              te = 0,
              ke = de || [],
              ge = !1,
              ye = {
                p: 0,
                n: 0,
                v: o,
                a: Oe,
                f: Oe.bind(o, 4),
                d: function (he, we) {
                  return ((re = he), (H = 0), (se = o), (ye.n = we), b);
                },
              };
            function Oe(be, he) {
              for (
                H = be, se = he, r = 0;
                !ge && te && !we && r < ke.length;
                r++
              ) {
                var we,
                  me = ke[r],
                  Ue = ye.p,
                  Ae = me[2];
                be > 3
                  ? (we = Ae === he) &&
                    ((se = me[(H = me[4]) ? 5 : ((H = 3), 3)]),
                    (me[4] = me[5] = o))
                  : me[0] <= Ue &&
                    ((we = be < 2 && Ue < me[1])
                      ? ((H = 0), (ye.v = he), (ye.n = me[1]))
                      : Ue < Ae &&
                        (we = be < 3 || me[0] > he || he > Ae) &&
                        ((me[4] = be), (me[5] = he), (ye.n = Ae), (H = 0)));
              }
              if (we || be > 1) return b;
              throw ((ge = !0), he);
            }
            return function (be, he, we) {
              if (te > 1) throw TypeError("Generator is already running");
              for (
                ge && he === 1 && Oe(he, we), H = he, se = we;
                (r = H < 2 ? o : se) || !ge;

              ) {
                re ||
                  (H
                    ? H < 3
                      ? (H > 1 && (ye.n = -1), Oe(H, se))
                      : (ye.n = se)
                    : (ye.v = se));
                try {
                  if (((te = 2), re)) {
                    if ((H || (be = "next"), (r = re[be]))) {
                      if (!(r = r.call(re, se)))
                        throw TypeError("iterator result is not an object");
                      if (!r.done) return r;
                      ((se = r.value), H < 2 && (H = 0));
                    } else
                      (H === 1 && (r = re.return) && r.call(re),
                        H < 2 &&
                          ((se = TypeError(
                            "The iterator does not provide a '" +
                              be +
                              "' method",
                          )),
                          (H = 1)));
                    re = o;
                  } else if ((r = (ge = ye.n < 0) ? se : ue.call(ce, ye)) !== b)
                    break;
                } catch (me) {
                  ((re = o), (H = 1), (se = me));
                } finally {
                  te = 1;
                }
              }
              return { value: r, done: ge };
            };
          })(P, W, oe),
          !0,
        ),
        ne
      );
    }
    var b = {};
    function E() {}
    function g() {}
    function w() {}
    r = Object.getPrototypeOf;
    var k = [][l]
        ? r(r([][l]()))
        : (t((r = {}), l, function () {
            return this;
          }),
          r),
      x = (w.prototype = E.prototype = Object.create(k));
    function B(P) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(P, w)
          : ((P.__proto__ = w), t(P, j, "GeneratorFunction")),
        (P.prototype = Object.create(x)),
        P
      );
    }
    return (
      (g.prototype = w),
      t(x, "constructor", w),
      t(w, "constructor", g),
      (g.displayName = "GeneratorFunction"),
      t(w, j, "GeneratorFunction"),
      t(x),
      t(x, j, "Generator"),
      t(x, l, function () {
        return this;
      }),
      t(x, "toString", function () {
        return "[object Generator]";
      }),
      (c = function () {
        return { w: A, m: B };
      })()
    );
  }
  function t(o, r, n, l) {
    var j = Object.defineProperty;
    try {
      j({}, "", {});
    } catch {
      j = 0;
    }
    ((t = function (b, E, g, w) {
      function k(x, B) {
        t(b, x, function (P) {
          return this._invoke(x, B, P);
        });
      }
      E
        ? j
          ? j(b, E, {
              value: g,
              enumerable: !w,
              configurable: !w,
              writable: !w,
            })
          : (b[E] = g)
        : (k("next", 0), k("throw", 1), k("return", 2));
    }),
      t(o, r, n, l));
  }
  function f(o) {
    return _(o) || N(o) || T(o) || v();
  }
  function v() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function T(o, r) {
    if (o) {
      if (typeof o == "string") return s(o, r);
      var n = {}.toString.call(o).slice(8, -1);
      return (
        n === "Object" && o.constructor && (n = o.constructor.name),
        n === "Map" || n === "Set"
          ? Array.from(o)
          : n === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? s(o, r)
            : void 0
      );
    }
  }
  function N(o) {
    if (
      (typeof Symbol < "u" && o[Symbol.iterator] != null) ||
      o["@@iterator"] != null
    )
      return Array.from(o);
  }
  function _(o) {
    if (Array.isArray(o)) return s(o);
  }
  function s(o, r) {
    (r == null || r > o.length) && (r = o.length);
    for (var n = 0, l = Array(r); n < r; n++) l[n] = o[n];
    return l;
  }
  function u(o, r, n, l, j, A, b) {
    try {
      var E = o[A](b),
        g = E.value;
    } catch (w) {
      return void n(w);
    }
    E.done ? r(g) : Promise.resolve(g).then(l, j);
  }
  function e(o) {
    return function () {
      var r = this,
        n = arguments;
      return new Promise(function (l, j) {
        var A = o.apply(r, n);
        function b(g) {
          u(A, l, j, b, E, "next", g);
        }
        function E(g) {
          u(A, l, j, b, E, "throw", g);
        }
        b(void 0);
      });
    };
  }
  function a(o, r) {
    if (!(o instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(o, r) {
    for (var n = 0; n < r.length; n++) {
      var l = r[n];
      ((l.enumerable = l.enumerable || !1),
        (l.configurable = !0),
        "value" in l && (l.writable = !0),
        Object.defineProperty(o, I(l.key), l));
    }
  }
  function S(o, r, n) {
    return (
      r && p(o.prototype, r),
      n && p(o, n),
      Object.defineProperty(o, "prototype", { writable: !1 }),
      o
    );
  }
  function m(o, r, n) {
    return (
      (r = I(r)) in o
        ? Object.defineProperty(o, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (o[r] = n),
      o
    );
  }
  function I(o) {
    var r = G(o, "string");
    return ae(r) == "symbol" ? r : r + "";
  }
  function G(o, r) {
    if (ae(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var l = n.call(o, r);
      if (ae(l) != "object") return l;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(o);
  }
  var M = (Ne.AssembledTransaction = (function () {
    function o(r) {
      var n = this,
        l,
        j;
      (a(this, o),
        m(
          this,
          "simulate",
          e(
            c().m(function A() {
              var b,
                E,
                g,
                w,
                k,
                x,
                B,
                P,
                D = arguments;
              return c().w(function (W) {
                for (;;)
                  switch (W.n) {
                    case 0:
                      if (
                        ((b = D.length > 0 && D[0] !== void 0 ? D[0] : {}),
                        (E = b.restore),
                        n.built)
                      ) {
                        W.n = 2;
                        break;
                      }
                      if (n.raw) {
                        W.n = 1;
                        break;
                      }
                      throw new Error(
                        "Transaction has not yet been assembled; call `AssembledTransaction.build` first.",
                      );
                    case 1:
                      n.built = n.raw.build();
                    case 2:
                      return (
                        (E = E ?? n.options.restore),
                        delete n.simulationResult,
                        delete n.simulationTransactionData,
                        (W.n = 3),
                        n.server.simulateTransaction(n.built)
                      );
                    case 3:
                      if (
                        ((n.simulation = W.v),
                        !(E && L.Api.isSimulationRestore(n.simulation)))
                      ) {
                        W.n = 8;
                        break;
                      }
                      return (
                        (W.n = 4),
                        (0, K.getAccount)(n.options, n.server)
                      );
                    case 4:
                      return (
                        (g = W.v),
                        (W.n = 5),
                        n.restoreFootprint(n.simulation.restorePreamble, g)
                      );
                    case 5:
                      if (
                        ((w = W.v),
                        w.status !== L.Api.GetTransactionStatus.SUCCESS)
                      ) {
                        W.n = 7;
                        break;
                      }
                      return (
                        (P = new i.Contract(n.options.contractId)),
                        (n.raw = new i.TransactionBuilder(g, {
                          fee:
                            (k = n.options.fee) !== null && k !== void 0
                              ? k
                              : i.BASE_FEE,
                          networkPassphrase: n.options.networkPassphrase,
                        })
                          .addOperation(
                            P.call.apply(
                              P,
                              [n.options.method].concat(
                                f(
                                  (x = n.options.args) !== null && x !== void 0
                                    ? x
                                    : [],
                                ),
                              ),
                            ),
                          )
                          .setTimeout(
                            (B = n.options.timeoutInSeconds) !== null &&
                              B !== void 0
                              ? B
                              : R.DEFAULT_TIMEOUT,
                          )),
                        (W.n = 6),
                        n.simulate()
                      );
                    case 6:
                      return W.a(2, n);
                    case 7:
                      throw new o.Errors.RestorationFailure(
                        `Automatic restore failed! You set 'restore: true' but the attempted restore did not work. Result:
`.concat(JSON.stringify(w)),
                      );
                    case 8:
                      return (
                        L.Api.isSimulationSuccess(n.simulation) &&
                          (n.built = (0, J.assembleTransaction)(
                            n.built,
                            n.simulation,
                          ).build()),
                        W.a(2, n)
                      );
                  }
              }, A);
            }),
          ),
        ),
        m(
          this,
          "sign",
          e(
            c().m(function A() {
              var b,
                E,
                g,
                w,
                k,
                x,
                B,
                P,
                D,
                W,
                oe,
                pe,
                ne = arguments;
              return c().w(function (ue) {
                for (;;)
                  switch (ue.n) {
                    case 0:
                      if (
                        ((E = ne.length > 0 && ne[0] !== void 0 ? ne[0] : {}),
                        (g = E.force),
                        (w = g === void 0 ? !1 : g),
                        (k = E.signTransaction),
                        (x = k === void 0 ? n.options.signTransaction : k),
                        n.built)
                      ) {
                        ue.n = 1;
                        break;
                      }
                      throw new Error("Transaction has not yet been simulated");
                    case 1:
                      if (!(!w && n.isReadCall)) {
                        ue.n = 2;
                        break;
                      }
                      throw new o.Errors.NoSignatureNeeded(
                        "This is a read call. It requires no signature or sending. Use `force: true` to sign and send anyway.",
                      );
                    case 2:
                      if (x) {
                        ue.n = 3;
                        break;
                      }
                      throw new o.Errors.NoSigner(
                        "You must provide a signTransaction function, either when calling `signAndSend` or when initializing your Client",
                      );
                    case 3:
                      if (
                        ((B = n
                          .needsNonInvokerSigningBy()
                          .filter(function (ce) {
                            return !ce.startsWith("C");
                          })),
                        !B.length)
                      ) {
                        ue.n = 4;
                        break;
                      }
                      throw new o.Errors.NeedsMoreSignatures(
                        "Transaction requires signatures from ".concat(
                          B,
                          ". ",
                        ) + "See `needsNonInvokerSigningBy` for details.",
                      );
                    case 4:
                      return (
                        (P =
                          (b = n.options.timeoutInSeconds) !== null &&
                          b !== void 0
                            ? b
                            : R.DEFAULT_TIMEOUT),
                        (n.built = i.TransactionBuilder.cloneFrom(n.built, {
                          fee: n.built.fee,
                          timebounds: void 0,
                          sorobanData: n.simulationData.transactionData,
                        })
                          .setTimeout(P)
                          .build()),
                        (D = {
                          networkPassphrase: n.options.networkPassphrase,
                        }),
                        n.options.address && (D.address = n.options.address),
                        n.options.submit !== void 0 &&
                          (D.submit = n.options.submit),
                        n.options.submitUrl &&
                          (D.submitUrl = n.options.submitUrl),
                        (ue.n = 5),
                        x(n.built.toXDR(), D)
                      );
                    case 5:
                      ((W = ue.v),
                        (oe = W.signedTxXdr),
                        (pe = W.error),
                        n.handleWalletError(pe),
                        (n.signed = i.TransactionBuilder.fromXDR(
                          oe,
                          n.options.networkPassphrase,
                        )));
                    case 6:
                      return ue.a(2);
                  }
              }, A);
            }),
          ),
        ),
        m(
          this,
          "signAndSend",
          e(
            c().m(function A() {
              var b,
                E,
                g,
                w,
                k,
                x,
                B,
                P = arguments;
              return c().w(
                function (D) {
                  for (;;)
                    switch ((D.p = D.n)) {
                      case 0:
                        if (
                          ((b = P.length > 0 && P[0] !== void 0 ? P[0] : {}),
                          (E = b.force),
                          (g = E === void 0 ? !1 : E),
                          (w = b.signTransaction),
                          (k = w === void 0 ? n.options.signTransaction : w),
                          (x = b.watcher),
                          n.signed)
                        ) {
                          D.n = 3;
                          break;
                        }
                        return (
                          (B = n.options.submit),
                          n.options.submit && (n.options.submit = !1),
                          (D.p = 1),
                          (D.n = 2),
                          n.sign({ force: g, signTransaction: k })
                        );
                      case 2:
                        return ((D.p = 2), (n.options.submit = B), D.f(2));
                      case 3:
                        return D.a(2, n.send(x));
                    }
                },
                A,
                null,
                [[1, , 2, 3]],
              );
            }),
          ),
        ),
        m(this, "needsNonInvokerSigningBy", function () {
          var A,
            b =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            E = b.includeAlreadySigned,
            g = E === void 0 ? !1 : E;
          if (!n.built)
            throw new Error("Transaction has not yet been simulated");
          if (!("operations" in n.built))
            throw new Error(
              "Unexpected Transaction type; no operations: ".concat(
                JSON.stringify(n.built),
              ),
            );
          var w = n.built.operations[0];
          return f(
            new Set(
              ((A = w.auth) !== null && A !== void 0 ? A : [])
                .filter(function (k) {
                  return (
                    k.credentials().switch() ===
                      i.xdr.SorobanCredentialsType.sorobanCredentialsAddress() &&
                    (g ||
                      k.credentials().address().signature().switch().name ===
                        "scvVoid")
                  );
                })
                .map(function (k) {
                  return i.Address.fromScAddress(
                    k.credentials().address().address(),
                  ).toString();
                }),
            ),
          );
        }),
        m(
          this,
          "signAuthEntries",
          e(
            c().m(function A() {
              var b,
                E,
                g,
                w,
                k,
                x,
                B,
                P,
                D,
                W,
                oe,
                pe,
                ne,
                ue,
                ce,
                de,
                re,
                H = arguments,
                se;
              return c().w(
                function (te) {
                  for (;;)
                    switch ((te.p = te.n)) {
                      case 0:
                        if (
                          ((E = H.length > 0 && H[0] !== void 0 ? H[0] : {}),
                          (g = E.expiration),
                          (w =
                            g === void 0
                              ? e(
                                  c().m(function ke() {
                                    var ge;
                                    return c().w(function (ye) {
                                      for (;;)
                                        switch (ye.n) {
                                          case 0:
                                            return (
                                              (ye.n = 1),
                                              n.server.getLatestLedger()
                                            );
                                          case 1:
                                            return (
                                              (ge = ye.v.sequence),
                                              ye.a(2, ge + 100)
                                            );
                                        }
                                    }, ke);
                                  }),
                                )()
                              : g),
                          (k = E.signAuthEntry),
                          (x = k === void 0 ? n.options.signAuthEntry : k),
                          (B = E.address),
                          (P = B === void 0 ? n.options.publicKey : B),
                          (D = E.authorizeEntry),
                          (W = D === void 0 ? i.authorizeEntry : D),
                          n.built)
                        ) {
                          te.n = 1;
                          break;
                        }
                        throw new Error(
                          "Transaction has not yet been assembled or simulated",
                        );
                      case 1:
                        if (W !== i.authorizeEntry) {
                          te.n = 4;
                          break;
                        }
                        if (
                          ((oe = n.needsNonInvokerSigningBy()), oe.length !== 0)
                        ) {
                          te.n = 2;
                          break;
                        }
                        throw new o.Errors.NoUnsignedNonInvokerAuthEntries(
                          "No unsigned non-invoker auth entries; maybe you already signed?",
                        );
                      case 2:
                        if (oe.indexOf(P ?? "") !== -1) {
                          te.n = 3;
                          break;
                        }
                        throw new o.Errors.NoSignatureNeeded(
                          'No auth entries for public key "'.concat(P, '"'),
                        );
                      case 3:
                        if (x) {
                          te.n = 4;
                          break;
                        }
                        throw new o.Errors.NoSigner(
                          "You must provide `signAuthEntry` or a custom `authorizeEntry`",
                        );
                      case 4:
                        ((pe = n.built.operations[0]),
                          (ne =
                            (b = pe.auth) !== null && b !== void 0 ? b : []),
                          (ue = O(ne.entries())),
                          (te.p = 5),
                          (de = c().m(function ke() {
                            var ge, ye, Oe, be, he, we, me, Ue, Ae;
                            return c().w(function (Te) {
                              for (;;)
                                switch (Te.n) {
                                  case 0:
                                    if (
                                      ((ge = U(ce.value, 2)),
                                      (ye = ge[0]),
                                      (Oe = ge[1]),
                                      (be = i.xdr.SorobanCredentials.fromXDR(
                                        Oe.credentials().toXDR(),
                                      )),
                                      be.switch() ===
                                        i.xdr.SorobanCredentialsType.sorobanCredentialsAddress())
                                    ) {
                                      Te.n = 1;
                                      break;
                                    }
                                    return Te.a(2, 0);
                                  case 1:
                                    if (
                                      ((he = i.Address.fromScAddress(
                                        be.address().address(),
                                      ).toString()),
                                      he === P)
                                    ) {
                                      Te.n = 2;
                                      break;
                                    }
                                    return Te.a(2, 0);
                                  case 2:
                                    return (
                                      (we = x ?? Promise.resolve),
                                      (me = W),
                                      (Ue = Oe),
                                      (Ae = (function () {
                                        var ir = e(
                                          c().m(function qe(ur) {
                                            var Ge, Le, He;
                                            return c().w(function (De) {
                                              for (;;)
                                                switch (De.n) {
                                                  case 0:
                                                    return (
                                                      (De.n = 1),
                                                      we(ur.toXDR("base64"), {
                                                        address: P,
                                                      })
                                                    );
                                                  case 1:
                                                    return (
                                                      (Ge = De.v),
                                                      (Le = Ge.signedAuthEntry),
                                                      (He = Ge.error),
                                                      n.handleWalletError(He),
                                                      De.a(
                                                        2,
                                                        _e.from(Le, "base64"),
                                                      )
                                                    );
                                                }
                                            }, qe);
                                          }),
                                        );
                                        return function (qe) {
                                          return ir.apply(this, arguments);
                                        };
                                      })()),
                                      (Te.n = 3),
                                      w
                                    );
                                  case 3:
                                    return (
                                      (Te.n = 4),
                                      me(
                                        Ue,
                                        Ae,
                                        Te.v,
                                        n.options.networkPassphrase,
                                      )
                                    );
                                  case 4:
                                    ne[ye] = Te.v;
                                  case 5:
                                    return Te.a(2);
                                }
                            }, ke);
                          })),
                          ue.s());
                      case 6:
                        if ((ce = ue.n()).done) {
                          te.n = 9;
                          break;
                        }
                        return te.d(Se(de()), 7);
                      case 7:
                        if (((re = te.v), re !== 0)) {
                          te.n = 8;
                          break;
                        }
                        return te.a(3, 8);
                      case 8:
                        te.n = 6;
                        break;
                      case 9:
                        te.n = 11;
                        break;
                      case 10:
                        ((te.p = 10), (se = te.v), ue.e(se));
                      case 11:
                        return ((te.p = 11), ue.f(), te.f(11));
                      case 12:
                        return te.a(2);
                    }
                },
                A,
                null,
                [[5, 10, 11, 12]],
              );
            }),
          ),
        ),
        (this.options = r),
        (this.options.simulate =
          (l = this.options.simulate) !== null && l !== void 0 ? l : !0),
        (this.server = new ie.Server(this.options.rpcUrl, {
          allowHttp:
            (j = this.options.allowHttp) !== null && j !== void 0 ? j : !1,
        })));
    }
    return S(
      o,
      [
        {
          key: "toJSON",
          value: function () {
            var n;
            return JSON.stringify({
              method: this.options.method,
              tx:
                (n = this.built) === null || n === void 0 ? void 0 : n.toXDR(),
              simulationResult: {
                auth: this.simulationData.result.auth.map(function (l) {
                  return l.toXDR("base64");
                }),
                retval: this.simulationData.result.retval.toXDR("base64"),
              },
              simulationTransactionData:
                this.simulationData.transactionData.toXDR("base64"),
            });
          },
        },
        {
          key: "toXDR",
          value: function () {
            var n;
            if (!this.built)
              throw new Error(
                "Transaction has not yet been simulated; call `AssembledTransaction.simulate` first.",
              );
            return (n = this.built) === null || n === void 0
              ? void 0
              : n.toEnvelope().toXDR("base64");
          },
        },
        {
          key: "handleWalletError",
          value: function (n) {
            if (n) {
              var l = n.message,
                j = n.code,
                A = ""
                  .concat(l)
                  .concat(n.ext ? " (".concat(n.ext.join(", "), ")") : "");
              switch (j) {
                case -1:
                  throw new o.Errors.InternalWalletError(A);
                case -2:
                  throw new o.Errors.ExternalServiceError(A);
                case -3:
                  throw new o.Errors.InvalidClientRequest(A);
                case -4:
                  throw new o.Errors.UserRejected(A);
                default:
                  throw new Error("Unhandled error: ".concat(A));
              }
            }
          },
        },
        {
          key: "simulationData",
          get: function () {
            var n;
            if (this.simulationResult && this.simulationTransactionData)
              return {
                result: this.simulationResult,
                transactionData: this.simulationTransactionData,
              };
            var l = this.simulation;
            if (!l)
              throw new o.Errors.NotYetSimulated(
                "Transaction has not yet been simulated",
              );
            if (L.Api.isSimulationError(l))
              throw new o.Errors.SimulationFailed(
                'Transaction simulation failed: "'.concat(l.error, '"'),
              );
            if (L.Api.isSimulationRestore(l))
              throw new o.Errors.ExpiredState(
                "You need to restore some contract state before you can invoke this method.\nYou can set `restore` to true in the method options in order to automatically restore the contract state when needed.",
              );
            return (
              (this.simulationResult =
                (n = l.result) !== null && n !== void 0
                  ? n
                  : { auth: [], retval: i.xdr.ScVal.scvVoid() }),
              (this.simulationTransactionData = l.transactionData.build()),
              {
                result: this.simulationResult,
                transactionData: this.simulationTransactionData,
              }
            );
          },
        },
        {
          key: "result",
          get: function () {
            try {
              if (!this.simulationData.result)
                throw new Error("No simulation result!");
              return this.options.parseResultXdr(
                this.simulationData.result.retval,
              );
            } catch (l) {
              if (!(0, K.implementsToString)(l)) throw l;
              var n = this.parseError(l.toString());
              if (n) return n;
              throw l;
            }
          },
        },
        {
          key: "parseError",
          value: function (n) {
            if (this.options.errorTypes) {
              var l = n.match(K.contractErrorPattern);
              if (l) {
                var j = parseInt(l[1], 10),
                  A = this.options.errorTypes[j];
                if (A) return new z.Err(A);
              }
            }
          },
        },
        {
          key: "send",
          value: (function () {
            var r = e(
              c().m(function l(j) {
                var A;
                return c().w(
                  function (b) {
                    for (;;)
                      switch (b.n) {
                        case 0:
                          if (this.signed) {
                            b.n = 1;
                            break;
                          }
                          throw new Error(
                            "The transaction has not yet been signed. Run `sign` first, or use `signAndSend` instead.",
                          );
                        case 1:
                          return ((b.n = 2), C.SentTransaction.init(this, j));
                        case 2:
                          return ((A = b.v), b.a(2, A));
                      }
                  },
                  l,
                  this,
                );
              }),
            );
            function n(l) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "isReadCall",
          get: function () {
            var n = this.simulationData.result.auth.length,
              l = this.simulationData.transactionData
                .resources()
                .footprint()
                .readWrite().length;
            return n === 0 && l === 0;
          },
        },
        {
          key: "restoreFootprint",
          value: (function () {
            var r = e(
              c().m(function l(j, A) {
                var b, E, g;
                return c().w(
                  function (w) {
                    for (;;)
                      switch (w.n) {
                        case 0:
                          if (this.options.signTransaction) {
                            w.n = 1;
                            break;
                          }
                          throw new Error(
                            "For automatic restore to work you must provide a signTransaction function when initializing your Client",
                          );
                        case 1:
                          if (A == null) {
                            w.n = 2;
                            break;
                          }
                          ((g = A), (w.n = 4));
                          break;
                        case 2:
                          return (
                            (w.n = 3),
                            (0, K.getAccount)(this.options, this.server)
                          );
                        case 3:
                          g = w.v;
                        case 4:
                          return (
                            (A = g),
                            (w.n = 5),
                            o.buildFootprintRestoreTransaction(
                              le({}, this.options),
                              j.transactionData,
                              A,
                              j.minResourceFee,
                            )
                          );
                        case 5:
                          return ((b = w.v), (w.n = 6), b.signAndSend());
                        case 6:
                          if (((E = w.v), E.getTransactionResponse)) {
                            w.n = 7;
                            break;
                          }
                          throw new o.Errors.RestorationFailure(
                            `The attempt at automatic restore failed. 
`.concat(JSON.stringify(E)),
                          );
                        case 7:
                          return w.a(2, E.getTransactionResponse);
                      }
                  },
                  l,
                  this,
                );
              }),
            );
            function n(l, j) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
      ],
      [
        {
          key: "fromJSON",
          value: function (n, l) {
            var j = l.tx,
              A = l.simulationResult,
              b = l.simulationTransactionData,
              E = new o(n);
            return (
              (E.built = i.TransactionBuilder.fromXDR(j, n.networkPassphrase)),
              (E.simulationResult = {
                auth: A.auth.map(function (g) {
                  return i.xdr.SorobanAuthorizationEntry.fromXDR(g, "base64");
                }),
                retval: i.xdr.ScVal.fromXDR(A.retval, "base64"),
              }),
              (E.simulationTransactionData =
                i.xdr.SorobanTransactionData.fromXDR(b, "base64")),
              E
            );
          },
        },
        {
          key: "fromXDR",
          value: function (n, l, j) {
            var A,
              b = i.xdr.TransactionEnvelope.fromXDR(l, "base64"),
              E = i.TransactionBuilder.fromXDR(b, n.networkPassphrase),
              g = E.operations[0];
            if (
              !(
                g != null &&
                (A = g.func) !== null &&
                A !== void 0 &&
                A.value
              ) ||
              typeof g.func.value != "function"
            )
              throw new Error(
                "Could not extract the method from the transaction envelope.",
              );
            var w = g.func.value();
            if (!(w != null && w.functionName))
              throw new Error(
                "Could not extract the method name from the transaction envelope.",
              );
            var k = w.functionName().toString("utf-8"),
              x = new o(
                le(
                  le({}, n),
                  {},
                  {
                    method: k,
                    parseResultXdr: function (P) {
                      return j.funcResToNative(k, P);
                    },
                  },
                ),
              );
            return ((x.built = E), x);
          },
        },
        {
          key: "build",
          value: function (n) {
            var l,
              j = new i.Contract(n.contractId);
            return o.buildWithOp(
              j.call.apply(
                j,
                [n.method].concat(
                  f((l = n.args) !== null && l !== void 0 ? l : []),
                ),
              ),
              n,
            );
          },
        },
        {
          key: "buildWithOp",
          value: (function () {
            var r = e(
              c().m(function l(j, A) {
                var b, E, g, w;
                return c().w(function (k) {
                  for (;;)
                    switch (k.n) {
                      case 0:
                        return (
                          (g = new o(A)),
                          (k.n = 1),
                          (0, K.getAccount)(A, g.server)
                        );
                      case 1:
                        if (
                          ((w = k.v),
                          (g.raw = new i.TransactionBuilder(w, {
                            fee:
                              (b = A.fee) !== null && b !== void 0
                                ? b
                                : i.BASE_FEE,
                            networkPassphrase: A.networkPassphrase,
                          })
                            .setTimeout(
                              (E = A.timeoutInSeconds) !== null && E !== void 0
                                ? E
                                : R.DEFAULT_TIMEOUT,
                            )
                            .addOperation(j)),
                          !A.simulate)
                        ) {
                          k.n = 2;
                          break;
                        }
                        return ((k.n = 2), g.simulate());
                      case 2:
                        return k.a(2, g);
                    }
                }, l);
              }),
            );
            function n(l, j) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "buildFootprintRestoreTransaction",
          value: (function () {
            var r = e(
              c().m(function l(j, A, b, E) {
                var g, w;
                return c().w(function (k) {
                  for (;;)
                    switch (k.n) {
                      case 0:
                        return (
                          (w = new o(j)),
                          (w.raw = new i.TransactionBuilder(b, {
                            fee: E,
                            networkPassphrase: j.networkPassphrase,
                          })
                            .setSorobanData(
                              A instanceof i.SorobanDataBuilder ? A.build() : A,
                            )
                            .addOperation(i.Operation.restoreFootprint({}))
                            .setTimeout(
                              (g = j.timeoutInSeconds) !== null && g !== void 0
                                ? g
                                : R.DEFAULT_TIMEOUT,
                            )),
                          (k.n = 1),
                          w.simulate({ restore: !1 })
                        );
                      case 1:
                        return k.a(2, w);
                    }
                }, l);
              }),
            );
            function n(l, j, A, b) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
      ],
    );
  })());
  return (
    m(M, "Errors", {
      ExpiredState: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      RestorationFailure: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      NeedsMoreSignatures: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      NoSignatureNeeded: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      NoUnsignedNonInvokerAuthEntries: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      NoSigner: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      NotYetSimulated: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      FakeAccount: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      SimulationFailed: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      InternalWalletError: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      ExternalServiceError: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      InvalidClientRequest: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
      UserRejected: (function (o) {
        function r() {
          return (a(this, r), y(this, r, arguments));
        }
        return (q(r, o), S(r));
      })(X(Error)),
    }),
    Ne
  );
}
var xe = {},
  Ze;
function sr() {
  if (Ze) return xe;
  ((Ze = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.basicNodeSigner = void 0));
  var i = Re();
  function ie() {
    var K,
      R,
      C = typeof Symbol == "function" ? Symbol : {},
      y = C.iterator || "@@iterator",
      F = C.toStringTag || "@@toStringTag";
    function $(ae, ve, le, Se) {
      var U = ve && ve.prototype instanceof X ? ve : X,
        V = Object.create(U.prototype);
      return (
        L(
          V,
          "_invoke",
          (function (h, d, O) {
            var c,
              t,
              f,
              v = 0,
              T = O || [],
              N = !1,
              _ = {
                p: 0,
                n: 0,
                v: K,
                a: s,
                f: s.bind(K, 4),
                d: function (e, a) {
                  return ((c = e), (t = 0), (f = K), (_.n = a), q);
                },
              };
            function s(u, e) {
              for (t = u, f = e, R = 0; !N && v && !a && R < T.length; R++) {
                var a,
                  p = T[R],
                  S = _.p,
                  m = p[2];
                u > 3
                  ? (a = m === e) &&
                    ((f = p[(t = p[4]) ? 5 : ((t = 3), 3)]), (p[4] = p[5] = K))
                  : p[0] <= S &&
                    ((a = u < 2 && S < p[1])
                      ? ((t = 0), (_.v = e), (_.n = p[1]))
                      : S < m &&
                        (a = u < 3 || p[0] > e || e > m) &&
                        ((p[4] = u), (p[5] = e), (_.n = m), (t = 0)));
              }
              if (a || u > 1) return q;
              throw ((N = !0), e);
            }
            return function (u, e, a) {
              if (v > 1) throw TypeError("Generator is already running");
              for (
                N && e === 1 && s(e, a), t = e, f = a;
                (R = t < 2 ? K : f) || !N;

              ) {
                c ||
                  (t
                    ? t < 3
                      ? (t > 1 && (_.n = -1), s(t, f))
                      : (_.n = f)
                    : (_.v = f));
                try {
                  if (((v = 2), c)) {
                    if ((t || (u = "next"), (R = c[u]))) {
                      if (!(R = R.call(c, f)))
                        throw TypeError("iterator result is not an object");
                      if (!R.done) return R;
                      ((f = R.value), t < 2 && (t = 0));
                    } else
                      (t === 1 && (R = c.return) && R.call(c),
                        t < 2 &&
                          ((f = TypeError(
                            "The iterator does not provide a '" +
                              u +
                              "' method",
                          )),
                          (t = 1)));
                    c = K;
                  } else if ((R = (N = _.n < 0) ? f : h.call(d, _)) !== q)
                    break;
                } catch (p) {
                  ((c = K), (t = 1), (f = p));
                } finally {
                  v = 1;
                }
              }
              return { value: R, done: N };
            };
          })(ae, le, Se),
          !0,
        ),
        V
      );
    }
    var q = {};
    function X() {}
    function Y() {}
    function Z() {}
    R = Object.getPrototypeOf;
    var fe = [][y]
        ? R(R([][y]()))
        : (L((R = {}), y, function () {
            return this;
          }),
          R),
      Q = (Z.prototype = X.prototype = Object.create(fe));
    function ee(ae) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(ae, Z)
          : ((ae.__proto__ = Z), L(ae, F, "GeneratorFunction")),
        (ae.prototype = Object.create(Q)),
        ae
      );
    }
    return (
      (Y.prototype = Z),
      L(Q, "constructor", Z),
      L(Z, "constructor", Y),
      (Y.displayName = "GeneratorFunction"),
      L(Z, F, "GeneratorFunction"),
      L(Q),
      L(Q, F, "Generator"),
      L(Q, y, function () {
        return this;
      }),
      L(Q, "toString", function () {
        return "[object Generator]";
      }),
      (ie = function () {
        return { w: $, m: ee };
      })()
    );
  }
  function L(K, R, C, y) {
    var F = Object.defineProperty;
    try {
      F({}, "", {});
    } catch {
      F = 0;
    }
    ((L = function (q, X, Y, Z) {
      function fe(Q, ee) {
        L(q, Q, function (ae) {
          return this._invoke(Q, ee, ae);
        });
      }
      X
        ? F
          ? F(q, X, {
              value: Y,
              enumerable: !Z,
              configurable: !Z,
              writable: !Z,
            })
          : (q[X] = Y)
        : (fe("next", 0), fe("throw", 1), fe("return", 2));
    }),
      L(K, R, C, y));
  }
  function J(K, R, C, y, F, $, q) {
    try {
      var X = K[$](q),
        Y = X.value;
    } catch (Z) {
      return void C(Z);
    }
    X.done ? R(Y) : Promise.resolve(Y).then(y, F);
  }
  function z(K) {
    return function () {
      var R = this,
        C = arguments;
      return new Promise(function (y, F) {
        var $ = K.apply(R, C);
        function q(Y) {
          J($, y, F, q, X, "next", Y);
        }
        function X(Y) {
          J($, y, F, q, X, "throw", Y);
        }
        q(void 0);
      });
    };
  }
  return (
    (xe.basicNodeSigner = function (R, C) {
      return {
        signTransaction: (function () {
          var y = z(
            ie().m(function $(q, X) {
              var Y;
              return ie().w(function (Z) {
                for (;;)
                  switch (Z.n) {
                    case 0:
                      return (
                        (Y = i.TransactionBuilder.fromXDR(
                          q,
                          X?.networkPassphrase || C,
                        )),
                        Y.sign(R),
                        Z.a(2, {
                          signedTxXdr: Y.toXDR(),
                          signerAddress: R.publicKey(),
                        })
                      );
                  }
              }, $);
            }),
          );
          function F($, q) {
            return y.apply(this, arguments);
          }
          return F;
        })(),
        signAuthEntry: (function () {
          var y = z(
            ie().m(function $(q) {
              var X;
              return ie().w(function (Y) {
                for (;;)
                  switch (Y.n) {
                    case 0:
                      return (
                        (X = R.sign((0, i.hash)(_e.from(q, "base64"))).toString(
                          "base64",
                        )),
                        Y.a(2, {
                          signedAuthEntry: X,
                          signerAddress: R.publicKey(),
                        })
                      );
                  }
              }, $);
            }),
          );
          function F($) {
            return y.apply(this, arguments);
          }
          return F;
        })(),
      };
    }),
    xe
  );
}
var Ie = {},
  Ce = {},
  Qe;
function or() {
  if (Qe) return Ce;
  ((Qe = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce.Spec = void 0));
  var i = Re(),
    ie = We(),
    L = Xe();
  function J() {
    var s,
      u,
      e = typeof Symbol == "function" ? Symbol : {},
      a = e.iterator || "@@iterator",
      p = e.toStringTag || "@@toStringTag";
    function S(l, j, A, b) {
      var E = j && j.prototype instanceof I ? j : I,
        g = Object.create(E.prototype);
      return (
        z(
          g,
          "_invoke",
          (function (w, k, x) {
            var B,
              P,
              D,
              W = 0,
              oe = x || [],
              pe = !1,
              ne = {
                p: 0,
                n: 0,
                v: s,
                a: ue,
                f: ue.bind(s, 4),
                d: function (de, re) {
                  return ((B = de), (P = 0), (D = s), (ne.n = re), m);
                },
              };
            function ue(ce, de) {
              for (
                P = ce, D = de, u = 0;
                !pe && W && !re && u < oe.length;
                u++
              ) {
                var re,
                  H = oe[u],
                  se = ne.p,
                  te = H[2];
                ce > 3
                  ? (re = te === de) &&
                    ((D = H[(P = H[4]) ? 5 : ((P = 3), 3)]), (H[4] = H[5] = s))
                  : H[0] <= se &&
                    ((re = ce < 2 && se < H[1])
                      ? ((P = 0), (ne.v = de), (ne.n = H[1]))
                      : se < te &&
                        (re = ce < 3 || H[0] > de || de > te) &&
                        ((H[4] = ce), (H[5] = de), (ne.n = te), (P = 0)));
              }
              if (re || ce > 1) return m;
              throw ((pe = !0), de);
            }
            return function (ce, de, re) {
              if (W > 1) throw TypeError("Generator is already running");
              for (
                pe && de === 1 && ue(de, re), P = de, D = re;
                (u = P < 2 ? s : D) || !pe;

              ) {
                B ||
                  (P
                    ? P < 3
                      ? (P > 1 && (ne.n = -1), ue(P, D))
                      : (ne.n = D)
                    : (ne.v = D));
                try {
                  if (((W = 2), B)) {
                    if ((P || (ce = "next"), (u = B[ce]))) {
                      if (!(u = u.call(B, D)))
                        throw TypeError("iterator result is not an object");
                      if (!u.done) return u;
                      ((D = u.value), P < 2 && (P = 0));
                    } else
                      (P === 1 && (u = B.return) && u.call(B),
                        P < 2 &&
                          ((D = TypeError(
                            "The iterator does not provide a '" +
                              ce +
                              "' method",
                          )),
                          (P = 1)));
                    B = s;
                  } else if ((u = (pe = ne.n < 0) ? D : w.call(k, ne)) !== m)
                    break;
                } catch (H) {
                  ((B = s), (P = 1), (D = H));
                } finally {
                  W = 1;
                }
              }
              return { value: u, done: pe };
            };
          })(l, A, b),
          !0,
        ),
        g
      );
    }
    var m = {};
    function I() {}
    function G() {}
    function M() {}
    u = Object.getPrototypeOf;
    var o = [][a]
        ? u(u([][a]()))
        : (z((u = {}), a, function () {
            return this;
          }),
          u),
      r = (M.prototype = I.prototype = Object.create(o));
    function n(l) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(l, M)
          : ((l.__proto__ = M), z(l, p, "GeneratorFunction")),
        (l.prototype = Object.create(r)),
        l
      );
    }
    return (
      (G.prototype = M),
      z(r, "constructor", M),
      z(M, "constructor", G),
      (G.displayName = "GeneratorFunction"),
      z(M, p, "GeneratorFunction"),
      z(r),
      z(r, p, "Generator"),
      z(r, a, function () {
        return this;
      }),
      z(r, "toString", function () {
        return "[object Generator]";
      }),
      (J = function () {
        return { w: S, m: n };
      })()
    );
  }
  function z(s, u, e, a) {
    var p = Object.defineProperty;
    try {
      p({}, "", {});
    } catch {
      p = 0;
    }
    ((z = function (m, I, G, M) {
      function o(r, n) {
        z(m, r, function (l) {
          return this._invoke(r, n, l);
        });
      }
      I
        ? p
          ? p(m, I, {
              value: G,
              enumerable: !M,
              configurable: !M,
              writable: !M,
            })
          : (m[I] = G)
        : (o("next", 0), o("throw", 1), o("return", 2));
    }),
      z(s, u, e, a));
  }
  function K(s, u, e, a, p, S, m) {
    try {
      var I = s[S](m),
        G = I.value;
    } catch (M) {
      return void e(M);
    }
    I.done ? u(G) : Promise.resolve(G).then(a, p);
  }
  function R(s) {
    return function () {
      var u = this,
        e = arguments;
      return new Promise(function (a, p) {
        var S = s.apply(u, e);
        function m(G) {
          K(S, a, p, m, I, "next", G);
        }
        function I(G) {
          K(S, a, p, m, I, "throw", G);
        }
        m(void 0);
      });
    };
  }
  function C(s, u) {
    var e = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(s);
      (u &&
        (a = a.filter(function (p) {
          return Object.getOwnPropertyDescriptor(s, p).enumerable;
        })),
        e.push.apply(e, a));
    }
    return e;
  }
  function y(s) {
    for (var u = 1; u < arguments.length; u++) {
      var e = arguments[u] != null ? arguments[u] : {};
      u % 2
        ? C(Object(e), !0).forEach(function (a) {
            Y(s, a, e[a]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e))
          : C(Object(e)).forEach(function (a) {
              Object.defineProperty(
                s,
                a,
                Object.getOwnPropertyDescriptor(e, a),
              );
            });
    }
    return s;
  }
  function F(s) {
    "@babel/helpers - typeof";
    return (
      (F =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (u) {
              return typeof u;
            }
          : function (u) {
              return u &&
                typeof Symbol == "function" &&
                u.constructor === Symbol &&
                u !== Symbol.prototype
                ? "symbol"
                : typeof u;
            }),
      F(s)
    );
  }
  function $(s, u) {
    if (!(s instanceof u))
      throw new TypeError("Cannot call a class as a function");
  }
  function q(s, u) {
    for (var e = 0; e < u.length; e++) {
      var a = u[e];
      ((a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(s, Z(a.key), a));
    }
  }
  function X(s, u, e) {
    return (
      u && q(s.prototype, u),
      e && q(s, e),
      Object.defineProperty(s, "prototype", { writable: !1 }),
      s
    );
  }
  function Y(s, u, e) {
    return (
      (u = Z(u)) in s
        ? Object.defineProperty(s, u, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (s[u] = e),
      s
    );
  }
  function Z(s) {
    var u = fe(s, "string");
    return F(u) == "symbol" ? u : u + "";
  }
  function fe(s, u) {
    if (F(s) != "object" || !s) return s;
    var e = s[Symbol.toPrimitive];
    if (e !== void 0) {
      var a = e.call(s, u);
      if (F(a) != "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(s);
  }
  function Q(s, u) {
    return Se(s) || le(s, u) || ae(s, u) || ee();
  }
  function ee() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ae(s, u) {
    if (s) {
      if (typeof s == "string") return ve(s, u);
      var e = {}.toString.call(s).slice(8, -1);
      return (
        e === "Object" && s.constructor && (e = s.constructor.name),
        e === "Map" || e === "Set"
          ? Array.from(s)
          : e === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            ? ve(s, u)
            : void 0
      );
    }
  }
  function ve(s, u) {
    (u == null || u > s.length) && (u = s.length);
    for (var e = 0, a = Array(u); e < u; e++) a[e] = s[e];
    return a;
  }
  function le(s, u) {
    var e =
      s == null
        ? null
        : (typeof Symbol < "u" && s[Symbol.iterator]) || s["@@iterator"];
    if (e != null) {
      var a,
        p,
        S,
        m,
        I = [],
        G = !0,
        M = !1;
      try {
        if (((S = (e = e.call(s)).next), u === 0)) {
          if (Object(e) !== e) return;
          G = !1;
        } else
          for (
            ;
            !(G = (a = S.call(e)).done) && (I.push(a.value), I.length !== u);
            G = !0
          );
      } catch (o) {
        ((M = !0), (p = o));
      } finally {
        try {
          if (!G && e.return != null && ((m = e.return()), Object(m) !== m))
            return;
        } finally {
          if (M) throw p;
        }
      }
      return I;
    }
  }
  function Se(s) {
    if (Array.isArray(s)) return s;
  }
  function U(s) {
    var u = s.doc().toString(),
      e = s.cases(),
      a = [];
    e.forEach(function (S) {
      var m = S.name().toString(),
        I = S.doc().toString();
      a.push({ description: I, title: m, enum: [S.value()], type: "number" });
    });
    var p = { oneOf: a };
    return (u.length > 0 && (p.description = u), p);
  }
  function V(s) {
    return /^\d+$/.test(s.name().toString());
  }
  function h(s, u) {
    var e = u.name().toString(),
      a = Object.entries(s).find(function (p) {
        var S = Q(p, 1),
          m = S[0];
        return m === e;
      });
    if (!a) throw new Error("Missing field ".concat(e));
    return a[1];
  }
  function d(s) {
    return function (e) {
      switch (e.switch().value) {
        case i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value: {
          var a = e.tupleCase();
          return a.name().toString() === s;
        }
        case i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value: {
          var p = e.voidCase();
          return p.name().toString() === s;
        }
        default:
          return !1;
      }
    };
  }
  function O(s, u) {
    switch (u.value) {
      case i.xdr.ScSpecType.scSpecTypeString().value:
        return i.xdr.ScVal.scvString(s);
      case i.xdr.ScSpecType.scSpecTypeSymbol().value:
        return i.xdr.ScVal.scvSymbol(s);
      case i.xdr.ScSpecType.scSpecTypeAddress().value:
        return i.Address.fromString(s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeU64().value:
        return new i.XdrLargeInt("u64", s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeI64().value:
        return new i.XdrLargeInt("i64", s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeU128().value:
        return new i.XdrLargeInt("u128", s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeI128().value:
        return new i.XdrLargeInt("i128", s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeU256().value:
        return new i.XdrLargeInt("u256", s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeI256().value:
        return new i.XdrLargeInt("i256", s).toScVal();
      case i.xdr.ScSpecType.scSpecTypeBytes().value:
      case i.xdr.ScSpecType.scSpecTypeBytesN().value:
        return i.xdr.ScVal.scvBytes(_e.from(s, "base64"));
      default:
        throw new TypeError(
          "invalid type ".concat(u.name, " specified for string value"),
        );
    }
  }
  var c = {
    U32: { type: "integer", minimum: 0, maximum: 4294967295 },
    I32: { type: "integer", minimum: -2147483648, maximum: 2147483647 },
    U64: {
      type: "string",
      pattern: "^([1-9][0-9]*|0)$",
      minLength: 1,
      maxLength: 20,
    },
    I64: {
      type: "string",
      pattern: "^(-?[1-9][0-9]*|0)$",
      minLength: 1,
      maxLength: 21,
    },
    U128: {
      type: "string",
      pattern: "^([1-9][0-9]*|0)$",
      minLength: 1,
      maxLength: 39,
    },
    I128: {
      type: "string",
      pattern: "^(-?[1-9][0-9]*|0)$",
      minLength: 1,
      maxLength: 40,
    },
    U256: {
      type: "string",
      pattern: "^([1-9][0-9]*|0)$",
      minLength: 1,
      maxLength: 78,
    },
    I256: {
      type: "string",
      pattern: "^(-?[1-9][0-9]*|0)$",
      minLength: 1,
      maxLength: 79,
    },
    Address: {
      type: "string",
      format: "address",
      description: "Address can be a public key or contract id",
    },
    ScString: { type: "string", description: "ScString is a string" },
    ScSymbol: { type: "string", description: "ScSymbol is a string" },
    DataUrl: {
      type: "string",
      pattern:
        "^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$",
    },
  };
  function t(s) {
    var u = s.switch(),
      e = u.value,
      a;
    switch (e) {
      case i.xdr.ScSpecType.scSpecTypeVal().value: {
        a = "Val";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeBool().value:
        return { type: "boolean" };
      case i.xdr.ScSpecType.scSpecTypeVoid().value:
        return { type: "null" };
      case i.xdr.ScSpecType.scSpecTypeError().value: {
        a = "Error";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeU32().value: {
        a = "U32";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeI32().value: {
        a = "I32";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeU64().value: {
        a = "U64";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeI64().value: {
        a = "I64";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeTimepoint().value:
        throw new Error("Timepoint type not supported");
      case i.xdr.ScSpecType.scSpecTypeDuration().value:
        throw new Error("Duration not supported");
      case i.xdr.ScSpecType.scSpecTypeU128().value: {
        a = "U128";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeI128().value: {
        a = "I128";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeU256().value: {
        a = "U256";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeI256().value: {
        a = "I256";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeBytes().value: {
        a = "DataUrl";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeString().value: {
        a = "ScString";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeSymbol().value: {
        a = "ScSymbol";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeAddress().value: {
        a = "Address";
        break;
      }
      case i.xdr.ScSpecType.scSpecTypeOption().value: {
        var p = s.option();
        return t(p.valueType());
      }
      case i.xdr.ScSpecType.scSpecTypeResult().value:
        break;
      case i.xdr.ScSpecType.scSpecTypeVec().value: {
        var S = s.vec(),
          m = t(S.elementType());
        return { type: "array", items: m };
      }
      case i.xdr.ScSpecType.scSpecTypeMap().value: {
        var I = s.map(),
          G = [t(I.keyType()), t(I.valueType())];
        return {
          type: "array",
          items: { type: "array", items: G, minItems: 2, maxItems: 2 },
        };
      }
      case i.xdr.ScSpecType.scSpecTypeTuple().value: {
        var M = s.tuple(),
          o = M.valueTypes().length,
          r = o,
          n = M.valueTypes().map(t);
        return { type: "array", items: n, minItems: o, maxItems: r };
      }
      case i.xdr.ScSpecType.scSpecTypeBytesN().value: {
        var l = s.bytesN();
        return { $ref: "#/definitions/DataUrl", maxLength: l.n() };
      }
      case i.xdr.ScSpecType.scSpecTypeUdt().value: {
        var j = s.udt();
        a = j.name().toString();
        break;
      }
    }
    return { $ref: "#/definitions/".concat(a) };
  }
  function f(s) {
    return s.switch().value !== i.xdr.ScSpecType.scSpecTypeOption().value;
  }
  function v(s) {
    var u = {},
      e = [];
    s.forEach(function (p) {
      var S = p.type(),
        m = p.name().toString();
      ((u[m] = t(S)), f(S) && e.push(m));
    });
    var a = { properties: u };
    return (e.length > 0 && (a.required = e), a);
  }
  function T(s) {
    var u = s.fields();
    if (u.some(V)) {
      if (!u.every(V))
        throw new Error(
          "mixed numeric and non-numeric field names are not allowed",
        );
      var e = u.map(function (I, G) {
        return t(u[G].type());
      });
      return {
        type: "array",
        items: e,
        minItems: u.length,
        maxItems: u.length,
      };
    }
    var a = s.doc().toString(),
      p = v(u),
      S = p.properties,
      m = p.required;
    return (
      (S.additionalProperties = !1),
      { description: a, properties: S, required: m, type: "object" }
    );
  }
  function N(s) {
    var u = v(s.inputs()),
      e = u.properties,
      a = u.required,
      p = { additionalProperties: !1, properties: e, type: "object" };
    a?.length > 0 && (p.required = a);
    var S = { properties: { args: p } },
      m = s.outputs(),
      I = m.length > 0 ? t(m[0]) : t(i.xdr.ScSpecTypeDef.scSpecTypeVoid()),
      G = s.doc().toString();
    return (
      G.length > 0 && (S.description = G),
      (S.additionalProperties = !1),
      (I.additionalProperties = !1),
      { input: S, output: I }
    );
  }
  function _(s) {
    var u = s.doc().toString(),
      e = s.cases(),
      a = [];
    e.forEach(function (S) {
      switch (S.switch().value) {
        case i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value: {
          var m = S.voidCase(),
            I = m.name().toString();
          a.push({
            type: "object",
            title: I,
            properties: { tag: I },
            additionalProperties: !1,
            required: ["tag"],
          });
          break;
        }
        case i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value: {
          var G = S.tupleCase(),
            M = G.name().toString();
          a.push({
            type: "object",
            title: M,
            properties: {
              tag: M,
              values: { type: "array", items: G.type().map(t) },
            },
            required: ["tag", "values"],
            additionalProperties: !1,
          });
        }
      }
    });
    var p = { oneOf: a };
    return (u.length > 0 && (p.description = u), p);
  }
  return (
    (Ce.Spec = (function () {
      function s(u) {
        if (($(this, s), Y(this, "entries", []), _e.isBuffer(u)))
          this.entries = (0, L.processSpecEntryStream)(u);
        else if (typeof u == "string")
          this.entries = (0, L.processSpecEntryStream)(_e.from(u, "base64"));
        else {
          if (u.length === 0)
            throw new Error("Contract spec must have at least one entry");
          var e = u[0];
          typeof e == "string"
            ? (this.entries = u.map(function (a) {
                return i.xdr.ScSpecEntry.fromXDR(a, "base64");
              }))
            : (this.entries = u);
        }
      }
      return X(
        s,
        [
          {
            key: "funcs",
            value: function () {
              return this.entries
                .filter(function (e) {
                  return (
                    e.switch().value ===
                    i.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value
                  );
                })
                .map(function (e) {
                  return e.functionV0();
                });
            },
          },
          {
            key: "getFunc",
            value: function (e) {
              var a = this.findEntry(e);
              if (
                a.switch().value !==
                i.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value
              )
                throw new Error("".concat(e, " is not a function"));
              return a.functionV0();
            },
          },
          {
            key: "funcArgsToScVals",
            value: function (e, a) {
              var p = this,
                S = this.getFunc(e);
              return S.inputs().map(function (m) {
                return p.nativeToScVal(h(a, m), m.type());
              });
            },
          },
          {
            key: "funcResToNative",
            value: function (e, a) {
              var p =
                  typeof a == "string" ? i.xdr.ScVal.fromXDR(a, "base64") : a,
                S = this.getFunc(e),
                m = S.outputs();
              if (m.length === 0) {
                var I = p.switch();
                if (I.value !== i.xdr.ScValType.scvVoid().value)
                  throw new Error("Expected void, got ".concat(I.name));
                return null;
              }
              if (m.length > 1)
                throw new Error("Multiple outputs not supported");
              var G = m[0];
              return G.switch().value ===
                i.xdr.ScSpecType.scSpecTypeResult().value
                ? new ie.Ok(this.scValToNative(p, G.result().okType()))
                : this.scValToNative(p, G);
            },
          },
          {
            key: "findEntry",
            value: function (e) {
              var a = this.entries.find(function (p) {
                return p.value().name().toString() === e;
              });
              if (!a) throw new Error("no such entry: ".concat(e));
              return a;
            },
          },
          {
            key: "nativeToScVal",
            value: function (e, a) {
              var p = this,
                S = a.switch(),
                m = S.value;
              if (S.value === i.xdr.ScSpecType.scSpecTypeUdt().value) {
                var I = a.udt();
                return this.nativeToUdt(e, I.name().toString());
              }
              if (m === i.xdr.ScSpecType.scSpecTypeOption().value) {
                var G = a.option();
                return e === void 0
                  ? i.xdr.ScVal.scvVoid()
                  : this.nativeToScVal(e, G.valueType());
              }
              switch (F(e)) {
                case "object": {
                  var M, o;
                  if (e === null)
                    switch (m) {
                      case i.xdr.ScSpecType.scSpecTypeVoid().value:
                        return i.xdr.ScVal.scvVoid();
                      default:
                        throw new TypeError(
                          "Type ".concat(
                            a,
                            " was not void, but value was null",
                          ),
                        );
                    }
                  if (e instanceof i.xdr.ScVal) return e;
                  if (e instanceof i.Address) {
                    if (
                      a.switch().value !==
                      i.xdr.ScSpecType.scSpecTypeAddress().value
                    )
                      throw new TypeError(
                        "Type ".concat(
                          a,
                          " was not address, but value was Address",
                        ),
                      );
                    return e.toScVal();
                  }
                  if (e instanceof i.Contract) {
                    if (
                      a.switch().value !==
                      i.xdr.ScSpecType.scSpecTypeAddress().value
                    )
                      throw new TypeError(
                        "Type ".concat(
                          a,
                          " was not address, but value was Address",
                        ),
                      );
                    return e.address().toScVal();
                  }
                  if (e instanceof Uint8Array || _e.isBuffer(e)) {
                    var r = Uint8Array.from(e);
                    switch (m) {
                      case i.xdr.ScSpecType.scSpecTypeBytesN().value: {
                        var n = a.bytesN();
                        if (r.length !== n.n())
                          throw new TypeError(
                            "expected "
                              .concat(n.n(), " bytes, but got ")
                              .concat(r.length),
                          );
                        return i.xdr.ScVal.scvBytes(r);
                      }
                      case i.xdr.ScSpecType.scSpecTypeBytes().value:
                        return i.xdr.ScVal.scvBytes(r);
                      default:
                        throw new TypeError(
                          "invalid type (".concat(
                            a,
                            ") specified for Bytes and BytesN",
                          ),
                        );
                    }
                  }
                  if (Array.isArray(e))
                    switch (m) {
                      case i.xdr.ScSpecType.scSpecTypeVec().value: {
                        var l = a.vec(),
                          j = l.elementType();
                        return i.xdr.ScVal.scvVec(
                          e.map(function (re) {
                            return p.nativeToScVal(re, j);
                          }),
                        );
                      }
                      case i.xdr.ScSpecType.scSpecTypeTuple().value: {
                        var A = a.tuple(),
                          b = A.valueTypes();
                        if (e.length !== b.length)
                          throw new TypeError(
                            "Tuple expects "
                              .concat(b.length, " values, but ")
                              .concat(e.length, " were provided"),
                          );
                        return i.xdr.ScVal.scvVec(
                          e.map(function (re, H) {
                            return p.nativeToScVal(re, b[H]);
                          }),
                        );
                      }
                      case i.xdr.ScSpecType.scSpecTypeMap().value: {
                        var E = a.map(),
                          g = E.keyType(),
                          w = E.valueType();
                        return i.xdr.ScVal.scvMap(
                          e.map(function (re) {
                            var H = p.nativeToScVal(re[0], g),
                              se = p.nativeToScVal(re[1], w);
                            return new i.xdr.ScMapEntry({ key: H, val: se });
                          }),
                        );
                      }
                      default:
                        throw new TypeError(
                          "Type ".concat(
                            a,
                            " was not vec, but value was Array",
                          ),
                        );
                    }
                  if (e.constructor === Map) {
                    if (m !== i.xdr.ScSpecType.scSpecTypeMap().value)
                      throw new TypeError(
                        "Type ".concat(a, " was not map, but value was Map"),
                      );
                    for (
                      var k = a.map(),
                        x = e,
                        B = [],
                        P = x.entries(),
                        D = P.next();
                      !D.done;

                    ) {
                      var W = Q(D.value, 2),
                        oe = W[0],
                        pe = W[1],
                        ne = this.nativeToScVal(oe, k.keyType()),
                        ue = this.nativeToScVal(pe, k.valueType());
                      (B.push(new i.xdr.ScMapEntry({ key: ne, val: ue })),
                        (D = P.next()));
                    }
                    return i.xdr.ScVal.scvMap(B);
                  }
                  if (
                    ((M =
                      (o = e.constructor) === null || o === void 0
                        ? void 0
                        : o.name) !== null && M !== void 0
                      ? M
                      : "") !== "Object"
                  ) {
                    var ce;
                    throw new TypeError(
                      "cannot interpret "
                        .concat(
                          (ce = e.constructor) === null || ce === void 0
                            ? void 0
                            : ce.name,
                          " value as ScVal (",
                        )
                        .concat(JSON.stringify(e), ")"),
                    );
                  }
                  throw new TypeError(
                    "Received object "
                      .concat(e, "  did not match the provided type ")
                      .concat(a),
                  );
                }
                case "number":
                case "bigint":
                  switch (m) {
                    case i.xdr.ScSpecType.scSpecTypeU32().value:
                      return i.xdr.ScVal.scvU32(e);
                    case i.xdr.ScSpecType.scSpecTypeI32().value:
                      return i.xdr.ScVal.scvI32(e);
                    case i.xdr.ScSpecType.scSpecTypeU64().value:
                    case i.xdr.ScSpecType.scSpecTypeI64().value:
                    case i.xdr.ScSpecType.scSpecTypeU128().value:
                    case i.xdr.ScSpecType.scSpecTypeI128().value:
                    case i.xdr.ScSpecType.scSpecTypeU256().value:
                    case i.xdr.ScSpecType.scSpecTypeI256().value: {
                      var de = S.name.substring(10).toLowerCase();
                      return new i.XdrLargeInt(de, e).toScVal();
                    }
                    default:
                      throw new TypeError(
                        "invalid type (".concat(a, ") specified for integer"),
                      );
                  }
                case "string":
                  return O(e, S);
                case "boolean": {
                  if (m !== i.xdr.ScSpecType.scSpecTypeBool().value)
                    throw TypeError(
                      "Type ".concat(a, " was not bool, but value was bool"),
                    );
                  return i.xdr.ScVal.scvBool(e);
                }
                case "undefined": {
                  if (!a) return i.xdr.ScVal.scvVoid();
                  switch (m) {
                    case i.xdr.ScSpecType.scSpecTypeVoid().value:
                    case i.xdr.ScSpecType.scSpecTypeOption().value:
                      return i.xdr.ScVal.scvVoid();
                    default:
                      throw new TypeError(
                        "Type ".concat(
                          a,
                          " was not void, but value was undefined",
                        ),
                      );
                  }
                }
                case "function":
                  return this.nativeToScVal(e(), a);
                default:
                  throw new TypeError(
                    "failed to convert typeof "
                      .concat(F(e), " (")
                      .concat(e, ")"),
                  );
              }
            },
          },
          {
            key: "nativeToUdt",
            value: function (e, a) {
              var p = this.findEntry(a);
              switch (p.switch()) {
                case i.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
                  if (typeof e != "number")
                    throw new TypeError(
                      "expected number for enum "
                        .concat(a, ", but got ")
                        .concat(F(e)),
                    );
                  return this.nativeToEnum(e, p.udtEnumV0());
                case i.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
                  return this.nativeToStruct(e, p.udtStructV0());
                case i.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
                  return this.nativeToUnion(e, p.udtUnionV0());
                default:
                  throw new Error("failed to parse udt ".concat(a));
              }
            },
          },
          {
            key: "nativeToUnion",
            value: function (e, a) {
              var p = this,
                S = e.tag,
                m = a.cases().find(function (o) {
                  var r = o.value().name().toString();
                  return r === S;
                });
              if (!m)
                throw new TypeError(
                  "no such enum entry: ".concat(S, " in ").concat(a),
                );
              var I = i.xdr.ScVal.scvSymbol(S);
              switch (m.switch()) {
                case i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0():
                  return i.xdr.ScVal.scvVec([I]);
                case i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0(): {
                  var G = m.tupleCase().type();
                  if (Array.isArray(e.values)) {
                    if (e.values.length !== G.length)
                      throw new TypeError(
                        "union "
                          .concat(a, " expects ")
                          .concat(G.length, " values, but got ")
                          .concat(e.values.length),
                      );
                    var M = e.values.map(function (o, r) {
                      return p.nativeToScVal(o, G[r]);
                    });
                    return (M.unshift(I), i.xdr.ScVal.scvVec(M));
                  }
                  throw new Error(
                    "failed to parse union case ".concat(m, " with ").concat(e),
                  );
                }
                default:
                  throw new Error(
                    "failed to parse union ".concat(a, " with ").concat(e),
                  );
              }
            },
          },
          {
            key: "nativeToStruct",
            value: function (e, a) {
              var p = this,
                S = a.fields();
              if (S.some(V)) {
                if (!S.every(V))
                  throw new Error(
                    "mixed numeric and non-numeric field names are not allowed",
                  );
                return i.xdr.ScVal.scvVec(
                  S.map(function (m, I) {
                    return p.nativeToScVal(e[I], S[I].type());
                  }),
                );
              }
              return i.xdr.ScVal.scvMap(
                S.map(function (m) {
                  var I = m.name().toString();
                  return new i.xdr.ScMapEntry({
                    key: p.nativeToScVal(
                      I,
                      i.xdr.ScSpecTypeDef.scSpecTypeSymbol(),
                    ),
                    val: p.nativeToScVal(e[I], m.type()),
                  });
                }),
              );
            },
          },
          {
            key: "nativeToEnum",
            value: function (e, a) {
              if (
                a.cases().some(function (p) {
                  return p.value() === e;
                })
              )
                return i.xdr.ScVal.scvU32(e);
              throw new TypeError(
                "no such enum entry: ".concat(e, " in ").concat(a),
              );
            },
          },
          {
            key: "scValStrToNative",
            value: function (e, a) {
              return this.scValToNative(i.xdr.ScVal.fromXDR(e, "base64"), a);
            },
          },
          {
            key: "scValToNative",
            value: function (e, a) {
              var p = this,
                S = a.switch(),
                m = S.value;
              if (m === i.xdr.ScSpecType.scSpecTypeUdt().value)
                return this.scValUdtToNative(e, a.udt());
              switch (e.switch().value) {
                case i.xdr.ScValType.scvVoid().value:
                  return;
                case i.xdr.ScValType.scvU64().value:
                case i.xdr.ScValType.scvI64().value:
                case i.xdr.ScValType.scvU128().value:
                case i.xdr.ScValType.scvI128().value:
                case i.xdr.ScValType.scvU256().value:
                case i.xdr.ScValType.scvI256().value:
                  return (0, i.scValToBigInt)(e);
                case i.xdr.ScValType.scvVec().value: {
                  if (m === i.xdr.ScSpecType.scSpecTypeVec().value) {
                    var I,
                      G = a.vec();
                    return (
                      (I = e.vec()) !== null && I !== void 0 ? I : []
                    ).map(function (w) {
                      return p.scValToNative(w, G.elementType());
                    });
                  }
                  if (m === i.xdr.ScSpecType.scSpecTypeTuple().value) {
                    var M,
                      o = a.tuple(),
                      r = o.valueTypes();
                    return (
                      (M = e.vec()) !== null && M !== void 0 ? M : []
                    ).map(function (w, k) {
                      return p.scValToNative(w, r[k]);
                    });
                  }
                  throw new TypeError(
                    "Type ".concat(a, " was not vec, but ").concat(e, " is"),
                  );
                }
                case i.xdr.ScValType.scvAddress().value:
                  return i.Address.fromScVal(e).toString();
                case i.xdr.ScValType.scvMap().value: {
                  var n,
                    l = (n = e.map()) !== null && n !== void 0 ? n : [];
                  if (m === i.xdr.ScSpecType.scSpecTypeMap().value) {
                    var j = a.map(),
                      A = j.keyType(),
                      b = j.valueType(),
                      E = l.map(function (w) {
                        return [
                          p.scValToNative(w.key(), A),
                          p.scValToNative(w.val(), b),
                        ];
                      });
                    return E;
                  }
                  throw new TypeError(
                    "ScSpecType "
                      .concat(S.name, " was not map, but ")
                      .concat(JSON.stringify(e, null, 2), " is"),
                  );
                }
                case i.xdr.ScValType.scvBool().value:
                case i.xdr.ScValType.scvU32().value:
                case i.xdr.ScValType.scvI32().value:
                case i.xdr.ScValType.scvBytes().value:
                  return e.value();
                case i.xdr.ScValType.scvString().value:
                case i.xdr.ScValType.scvSymbol().value: {
                  var g;
                  if (
                    m !== i.xdr.ScSpecType.scSpecTypeString().value &&
                    m !== i.xdr.ScSpecType.scSpecTypeSymbol().value
                  )
                    throw new Error(
                      "ScSpecType "
                        .concat(S.name, " was not string or symbol, but ")
                        .concat(JSON.stringify(e, null, 2), " is"),
                    );
                  return (g = e.value()) === null || g === void 0
                    ? void 0
                    : g.toString();
                }
                case i.xdr.ScValType.scvTimepoint().value:
                case i.xdr.ScValType.scvDuration().value:
                  return (0, i.scValToBigInt)(i.xdr.ScVal.scvU64(e.u64()));
                default:
                  throw new TypeError(
                    "failed to convert "
                      .concat(
                        JSON.stringify(e, null, 2),
                        " to native type from type ",
                      )
                      .concat(S.name),
                  );
              }
            },
          },
          {
            key: "scValUdtToNative",
            value: function (e, a) {
              var p = this.findEntry(a.name().toString());
              switch (p.switch()) {
                case i.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
                  return this.enumToNative(e);
                case i.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
                  return this.structToNative(e, p.udtStructV0());
                case i.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
                  return this.unionToNative(e, p.udtUnionV0());
                default:
                  throw new Error(
                    "failed to parse udt "
                      .concat(a.name().toString(), ": ")
                      .concat(p),
                  );
              }
            },
          },
          {
            key: "unionToNative",
            value: function (e, a) {
              var p = this,
                S = e.vec();
              if (!S)
                throw new Error(
                  "".concat(JSON.stringify(e, null, 2), " is not a vec"),
                );
              if (S.length === 0 && a.cases.length !== 0)
                throw new Error(
                  "".concat(
                    e,
                    " has length 0, but the there are at least one case in the union",
                  ),
                );
              var m = S[0].sym().toString();
              if (S[0].switch().value !== i.xdr.ScValType.scvSymbol().value)
                throw new Error("{vec[0]} is not a symbol");
              var I = a.cases().find(d(m));
              if (!I)
                throw new Error(
                  "failed to find entry ".concat(
                    m,
                    " in union {udt.name().toString()}",
                  ),
                );
              var G = { tag: m };
              if (
                I.switch().value ===
                i.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value
              ) {
                var M = I.tupleCase(),
                  o = M.type(),
                  r = o.map(function (n, l) {
                    return p.scValToNative(S[l + 1], n);
                  });
                G.values = r;
              }
              return G;
            },
          },
          {
            key: "structToNative",
            value: function (e, a) {
              var p = this,
                S,
                m = {},
                I = a.fields();
              if (I.some(V)) {
                var G,
                  M =
                    (G = e.vec()) === null || G === void 0
                      ? void 0
                      : G.map(function (o, r) {
                          return p.scValToNative(o, I[r].type());
                        });
                return M;
              }
              return (
                (S = e.map()) === null ||
                  S === void 0 ||
                  S.forEach(function (o, r) {
                    var n = I[r];
                    m[n.name().toString()] = p.scValToNative(o.val(), n.type());
                  }),
                m
              );
            },
          },
          {
            key: "enumToNative",
            value: function (e) {
              if (e.switch().value !== i.xdr.ScValType.scvU32().value)
                throw new Error("Enum must have a u32 value");
              var a = e.u32();
              return a;
            },
          },
          {
            key: "errorCases",
            value: function () {
              return this.entries
                .filter(function (e) {
                  return (
                    e.switch().value ===
                    i.xdr.ScSpecEntryKind.scSpecEntryUdtErrorEnumV0().value
                  );
                })
                .flatMap(function (e) {
                  return e.value().cases();
                });
            },
          },
          {
            key: "jsonSchema",
            value: function (e) {
              var a = {};
              this.entries.forEach(function (S) {
                switch (S.switch().value) {
                  case i.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0().value: {
                    var m = S.udtEnumV0();
                    a[m.name().toString()] = U(m);
                    break;
                  }
                  case i.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0().value: {
                    var I = S.udtStructV0();
                    a[I.name().toString()] = T(I);
                    break;
                  }
                  case i.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0().value: {
                    var G = S.udtUnionV0();
                    a[G.name().toString()] = _(G);
                    break;
                  }
                  case i.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value: {
                    var M = S.functionV0(),
                      o = M.name().toString(),
                      r = N(M),
                      n = r.input;
                    a[o] = n;
                    break;
                  }
                  case i.xdr.ScSpecEntryKind.scSpecEntryUdtErrorEnumV0().value:
                }
              });
              var p = {
                $schema: "http://json-schema.org/draft-07/schema#",
                definitions: y(y({}, c), a),
              };
              return (e && (p.$ref = "#/definitions/".concat(e)), p);
            },
          },
        ],
        [
          {
            key: "fromWasm",
            value: (function () {
              var u = R(
                J().m(function a(p) {
                  var S;
                  return J().w(function (m) {
                    for (;;)
                      switch (m.n) {
                        case 0:
                          return ((m.n = 1), (0, L.specFromWasm)(p));
                        case 1:
                          return ((S = m.v), m.a(2, new s(S)));
                      }
                  }, a);
                }),
              );
              function e(a) {
                return u.apply(this, arguments);
              }
              return e;
            })(),
          },
        ],
      );
    })()),
    Ce
  );
}
var er;
function lr() {
  if (er) return Ie;
  er = 1;
  function i(h) {
    "@babel/helpers - typeof";
    return (
      (i =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (d) {
              return typeof d;
            }
          : function (d) {
              return d &&
                typeof Symbol == "function" &&
                d.constructor === Symbol &&
                d !== Symbol.prototype
                ? "symbol"
                : typeof d;
            }),
      i(h)
    );
  }
  (Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.Client = void 0));
  var ie = Re(),
    L = or(),
    J = Me(),
    z = ar(),
    K = ["method"],
    R = ["wasmHash", "salt", "format", "fee", "timeoutInSeconds", "simulate"];
  function C() {
    var h,
      d,
      O = typeof Symbol == "function" ? Symbol : {},
      c = O.iterator || "@@iterator",
      t = O.toStringTag || "@@toStringTag";
    function f(a, p, S, m) {
      var I = p && p.prototype instanceof T ? p : T,
        G = Object.create(I.prototype);
      return (
        y(
          G,
          "_invoke",
          (function (M, o, r) {
            var n,
              l,
              j,
              A = 0,
              b = r || [],
              E = !1,
              g = {
                p: 0,
                n: 0,
                v: h,
                a: w,
                f: w.bind(h, 4),
                d: function (x, B) {
                  return ((n = x), (l = 0), (j = h), (g.n = B), v);
                },
              };
            function w(k, x) {
              for (l = k, j = x, d = 0; !E && A && !B && d < b.length; d++) {
                var B,
                  P = b[d],
                  D = g.p,
                  W = P[2];
                k > 3
                  ? (B = W === x) &&
                    ((j = P[(l = P[4]) ? 5 : ((l = 3), 3)]), (P[4] = P[5] = h))
                  : P[0] <= D &&
                    ((B = k < 2 && D < P[1])
                      ? ((l = 0), (g.v = x), (g.n = P[1]))
                      : D < W &&
                        (B = k < 3 || P[0] > x || x > W) &&
                        ((P[4] = k), (P[5] = x), (g.n = W), (l = 0)));
              }
              if (B || k > 1) return v;
              throw ((E = !0), x);
            }
            return function (k, x, B) {
              if (A > 1) throw TypeError("Generator is already running");
              for (
                E && x === 1 && w(x, B), l = x, j = B;
                (d = l < 2 ? h : j) || !E;

              ) {
                n ||
                  (l
                    ? l < 3
                      ? (l > 1 && (g.n = -1), w(l, j))
                      : (g.n = j)
                    : (g.v = j));
                try {
                  if (((A = 2), n)) {
                    if ((l || (k = "next"), (d = n[k]))) {
                      if (!(d = d.call(n, j)))
                        throw TypeError("iterator result is not an object");
                      if (!d.done) return d;
                      ((j = d.value), l < 2 && (l = 0));
                    } else
                      (l === 1 && (d = n.return) && d.call(n),
                        l < 2 &&
                          ((j = TypeError(
                            "The iterator does not provide a '" +
                              k +
                              "' method",
                          )),
                          (l = 1)));
                    n = h;
                  } else if ((d = (E = g.n < 0) ? j : M.call(o, g)) !== v)
                    break;
                } catch (P) {
                  ((n = h), (l = 1), (j = P));
                } finally {
                  A = 1;
                }
              }
              return { value: d, done: E };
            };
          })(a, S, m),
          !0,
        ),
        G
      );
    }
    var v = {};
    function T() {}
    function N() {}
    function _() {}
    d = Object.getPrototypeOf;
    var s = [][c]
        ? d(d([][c]()))
        : (y((d = {}), c, function () {
            return this;
          }),
          d),
      u = (_.prototype = T.prototype = Object.create(s));
    function e(a) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(a, _)
          : ((a.__proto__ = _), y(a, t, "GeneratorFunction")),
        (a.prototype = Object.create(u)),
        a
      );
    }
    return (
      (N.prototype = _),
      y(u, "constructor", _),
      y(_, "constructor", N),
      (N.displayName = "GeneratorFunction"),
      y(_, t, "GeneratorFunction"),
      y(u),
      y(u, t, "Generator"),
      y(u, c, function () {
        return this;
      }),
      y(u, "toString", function () {
        return "[object Generator]";
      }),
      (C = function () {
        return { w: f, m: e };
      })()
    );
  }
  function y(h, d, O, c) {
    var t = Object.defineProperty;
    try {
      t({}, "", {});
    } catch {
      t = 0;
    }
    ((y = function (v, T, N, _) {
      function s(u, e) {
        y(v, u, function (a) {
          return this._invoke(u, e, a);
        });
      }
      T
        ? t
          ? t(v, T, {
              value: N,
              enumerable: !_,
              configurable: !_,
              writable: !_,
            })
          : (v[T] = N)
        : (s("next", 0), s("throw", 1), s("return", 2));
    }),
      y(h, d, O, c));
  }
  function F(h, d) {
    var O = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(h);
      (d &&
        (c = c.filter(function (t) {
          return Object.getOwnPropertyDescriptor(h, t).enumerable;
        })),
        O.push.apply(O, c));
    }
    return O;
  }
  function $(h) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2
        ? F(Object(O), !0).forEach(function (c) {
            Q(h, c, O[c]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(O))
          : F(Object(O)).forEach(function (c) {
              Object.defineProperty(
                h,
                c,
                Object.getOwnPropertyDescriptor(O, c),
              );
            });
    }
    return h;
  }
  function q(h, d) {
    if (h == null) return {};
    var O,
      c,
      t = X(h, d);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(h);
      for (c = 0; c < f.length; c++)
        ((O = f[c]),
          d.indexOf(O) === -1 &&
            {}.propertyIsEnumerable.call(h, O) &&
            (t[O] = h[O]));
    }
    return t;
  }
  function X(h, d) {
    if (h == null) return {};
    var O = {};
    for (var c in h)
      if ({}.hasOwnProperty.call(h, c)) {
        if (d.indexOf(c) !== -1) continue;
        O[c] = h[c];
      }
    return O;
  }
  function Y(h, d) {
    if (!(h instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  function Z(h, d) {
    for (var O = 0; O < d.length; O++) {
      var c = d[O];
      ((c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        "value" in c && (c.writable = !0),
        Object.defineProperty(h, ee(c.key), c));
    }
  }
  function fe(h, d, O) {
    return (
      O && Z(h, O),
      Object.defineProperty(h, "prototype", { writable: !1 }),
      h
    );
  }
  function Q(h, d, O) {
    return (
      (d = ee(d)) in h
        ? Object.defineProperty(h, d, {
            value: O,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (h[d] = O),
      h
    );
  }
  function ee(h) {
    var d = ae(h, "string");
    return i(d) == "symbol" ? d : d + "";
  }
  function ae(h, d) {
    if (i(h) != "object" || !h) return h;
    var O = h[Symbol.toPrimitive];
    if (O !== void 0) {
      var c = O.call(h, d);
      if (i(c) != "object") return c;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(h);
  }
  function ve(h, d, O, c, t, f, v) {
    try {
      var T = h[f](v),
        N = T.value;
    } catch (_) {
      return void O(_);
    }
    T.done ? d(N) : Promise.resolve(N).then(c, t);
  }
  function le(h) {
    return function () {
      var d = this,
        O = arguments;
      return new Promise(function (c, t) {
        var f = h.apply(d, O);
        function v(N) {
          ve(f, c, t, v, T, "next", N);
        }
        function T(N) {
          ve(f, c, t, v, T, "throw", N);
        }
        v(void 0);
      });
    };
  }
  var Se = "__constructor";
  function U(h, d) {
    return V.apply(this, arguments);
  }
  function V() {
    return (
      (V = le(
        C().m(function h(d, O) {
          var c,
            t,
            f,
            v,
            T,
            N,
            _ = arguments;
          return C().w(function (s) {
            for (;;)
              switch (s.n) {
                case 0:
                  if (
                    ((c = _.length > 2 && _[2] !== void 0 ? _[2] : "hex"),
                    !(!O || !O.rpcUrl))
                  ) {
                    s.n = 1;
                    break;
                  }
                  throw new TypeError("options must contain rpcUrl");
                case 1:
                  return (
                    (t = O.rpcUrl),
                    (f = O.allowHttp),
                    (v = { allowHttp: f }),
                    (T = new J.Server(t, v)),
                    (s.n = 2),
                    T.getContractWasmByHash(d, c)
                  );
                case 2:
                  return ((N = s.v), s.a(2, L.Spec.fromWasm(N)));
              }
          }, h);
        }),
      )),
      V.apply(this, arguments)
    );
  }
  return (
    (Ie.Client = (function () {
      function h(d, O) {
        var c = this;
        (Y(this, h),
          Q(this, "txFromJSON", function (t) {
            var f = JSON.parse(t),
              v = f.method,
              T = q(f, K);
            return z.AssembledTransaction.fromJSON(
              $(
                $({}, c.options),
                {},
                {
                  method: v,
                  parseResultXdr: function (_) {
                    return c.spec.funcResToNative(v, _);
                  },
                },
              ),
              T,
            );
          }),
          Q(this, "txFromXDR", function (t) {
            return z.AssembledTransaction.fromXDR(c.options, t, c.spec);
          }),
          (this.spec = d),
          (this.options = O),
          this.spec.funcs().forEach(function (t) {
            var f = t.name().toString();
            if (f !== Se) {
              var v = function (N, _) {
                return z.AssembledTransaction.build(
                  $(
                    $(
                      $({ method: f, args: N && d.funcArgsToScVals(f, N) }, O),
                      _,
                    ),
                    {},
                    {
                      errorTypes: d.errorCases().reduce(function (s, u) {
                        return $(
                          $({}, s),
                          {},
                          Q({}, u.value(), { message: u.doc().toString() }),
                        );
                      }, {}),
                      parseResultXdr: function (u) {
                        return d.funcResToNative(f, u);
                      },
                    },
                  ),
                );
              };
              c[f] =
                d.getFunc(f).inputs().length === 0
                  ? function (T) {
                      return v(void 0, T);
                    }
                  : v;
            }
          }));
      }
      return fe(h, null, [
        {
          key: "deploy",
          value: (function () {
            var d = le(
              C().m(function c(t, f) {
                var v, T, N, _, s, u, e, a, p;
                return C().w(function (S) {
                  for (;;)
                    switch (S.n) {
                      case 0:
                        return (
                          (v = f.wasmHash),
                          (T = f.salt),
                          (N = f.format),
                          (_ = f.fee),
                          (s = f.timeoutInSeconds),
                          (u = f.simulate),
                          (e = q(f, R)),
                          (S.n = 1),
                          U(v, e, N)
                        );
                      case 1:
                        return (
                          (a = S.v),
                          (p = ie.Operation.createCustomContract({
                            address: new ie.Address(f.address || f.publicKey),
                            wasmHash:
                              typeof v == "string" ? _e.from(v, N ?? "hex") : v,
                            salt: T,
                            constructorArgs: t ? a.funcArgsToScVals(Se, t) : [],
                          })),
                          S.a(
                            2,
                            z.AssembledTransaction.buildWithOp(
                              p,
                              $(
                                $(
                                  { fee: _, timeoutInSeconds: s, simulate: u },
                                  e,
                                ),
                                {},
                                {
                                  contractId: "ignored",
                                  method: Se,
                                  parseResultXdr: function (I) {
                                    return new h(
                                      a,
                                      $(
                                        $({}, e),
                                        {},
                                        {
                                          contractId:
                                            ie.Address.fromScVal(I).toString(),
                                        },
                                      ),
                                    );
                                  },
                                },
                              ),
                            ),
                          )
                        );
                    }
                }, c);
              }),
            );
            function O(c, t) {
              return d.apply(this, arguments);
            }
            return O;
          })(),
        },
        {
          key: "fromWasmHash",
          value: (function () {
            var d = le(
              C().m(function c(t, f) {
                var v,
                  T,
                  N,
                  _,
                  s,
                  u,
                  e = arguments;
                return C().w(function (a) {
                  for (;;)
                    switch (a.n) {
                      case 0:
                        if (
                          ((v = e.length > 2 && e[2] !== void 0 ? e[2] : "hex"),
                          !(!f || !f.rpcUrl))
                        ) {
                          a.n = 1;
                          break;
                        }
                        throw new TypeError("options must contain rpcUrl");
                      case 1:
                        return (
                          (T = f.rpcUrl),
                          (N = f.allowHttp),
                          (_ = { allowHttp: N }),
                          (s = new J.Server(T, _)),
                          (a.n = 2),
                          s.getContractWasmByHash(t, v)
                        );
                      case 2:
                        return ((u = a.v), a.a(2, h.fromWasm(u, f)));
                    }
                }, c);
              }),
            );
            function O(c, t) {
              return d.apply(this, arguments);
            }
            return O;
          })(),
        },
        {
          key: "fromWasm",
          value: (function () {
            var d = le(
              C().m(function c(t, f) {
                var v;
                return C().w(function (T) {
                  for (;;)
                    switch (T.n) {
                      case 0:
                        return ((T.n = 1), L.Spec.fromWasm(t));
                      case 1:
                        return ((v = T.v), T.a(2, new h(v, f)));
                    }
                }, c);
              }),
            );
            function O(c, t) {
              return d.apply(this, arguments);
            }
            return O;
          })(),
        },
        {
          key: "from",
          value: (function () {
            var d = le(
              C().m(function c(t) {
                var f, v, T, N, _, s;
                return C().w(function (u) {
                  for (;;)
                    switch (u.n) {
                      case 0:
                        if (!(!t || !t.rpcUrl || !t.contractId)) {
                          u.n = 1;
                          break;
                        }
                        throw new TypeError(
                          "options must contain rpcUrl and contractId",
                        );
                      case 1:
                        return (
                          (f = t.rpcUrl),
                          (v = t.contractId),
                          (T = t.allowHttp),
                          (N = { allowHttp: T }),
                          (_ = new J.Server(f, N)),
                          (u.n = 2),
                          _.getContractWasmByContractId(v)
                        );
                      case 2:
                        return ((s = u.v), u.a(2, h.fromWasm(s, t)));
                    }
                }, c);
              }),
            );
            function O(c) {
              return d.apply(this, arguments);
            }
            return O;
          })(),
        },
      ]);
    })()),
    Ie
  );
}
var rr;
function fr() {
  return (
    rr ||
      ((rr = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var ie = ar();
        Object.keys(ie).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === ie[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return ie[y];
              },
            });
        });
        var L = sr();
        Object.keys(L).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === L[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return L[y];
              },
            });
        });
        var J = lr();
        Object.keys(J).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === J[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return J[y];
              },
            });
        });
        var z = We();
        Object.keys(z).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === z[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return z[y];
              },
            });
        });
        var K = nr();
        Object.keys(K).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === K[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return K[y];
              },
            });
        });
        var R = or();
        Object.keys(R).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === R[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return R[y];
              },
            });
        });
        var C = Fe();
        Object.keys(C).forEach(function (y) {
          y === "default" ||
            y === "__esModule" ||
            (y in i && i[y] === C[y]) ||
            Object.defineProperty(i, y, {
              enumerable: !0,
              get: function () {
                return C[y];
              },
            });
        });
      })(Be)),
    Be
  );
}
var dr = fr();
export { dr as c };
