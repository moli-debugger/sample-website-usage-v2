var churn360 = (()=>{
    var _t = Object.create;
    var Y = Object.defineProperty;
    var Ut = Object.getOwnPropertyDescriptor;
    var It = Object.getOwnPropertyNames;
    var Lt = Object.getPrototypeOf
      , Ft = Object.prototype.hasOwnProperty;
    var De = e=>Y(e, "__esModule", {
        value: !0
    });
    var Dt = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , vt = (e,t)=>{
        De(e);
        for (var r in t)
            Y(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Bt = (e,t,r)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of It(t))
                !Ft.call(e, n) && n !== "default" && Y(e, n, {
                    get: ()=>t[n],
                    enumerable: !(r = Ut(t, n)) || r.enumerable
                });
        return e
    }
      , kt = e=>Bt(De(Y(e != null ? _t(Lt(e)) : {}, "default", e && e.__esModule && "default"in e ? {
        get: ()=>e.default,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e);
    var Rt = Dt((ei,yt)=>{
        "use strict";
        var vr = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        yt.exports = e=>!vr.has(e && e.code)
    }
    );
    var Vr = {};
    vt(Vr, {
        UsageCollector: ()=>X
    });
    var Z = class {
    }
    ;
    var Q = class {
        constructor(t, r) {
            this.title = t != null ? t : document.title,
            this.path = r != null ? r : document.location.pathname
        }
    }
    ;
    var v = class {
        constructor(t) {
            this.url = t != null ? t : document.location.href,
            this.properties = new Q
        }
    }
    ;
    var T = class {
        static wrap(t, r) {
            var s, o, i, c, l, u;
            let n = new T;
            return n.version = "2.0",
            n.data = t,
            n.referrer = (s = r == null ? void 0 : r.referrer) != null ? s : document.referrer,
            n.userAgent = (o = r == null ? void 0 : r.userAgent) != null ? o : navigator.userAgent,
            n.locale = (i = r == null ? void 0 : r.locale) != null ? i : navigator.language,
            n.TimeZone = (c = r == null ? void 0 : r.TimeZone) != null ? c : Intl.DateTimeFormat().resolvedOptions().timeZone,
            n.sentAt = (l = r == null ? void 0 : r.sentAt) != null ? l : new Date(Date.now()),
            n.timestamp = (u = r == null ? void 0 : r.timestamp) != null ? u : n.sentAt,
            n.data = t,
            n
        }
    }
    ;
    "use strict";
    function B(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    "use strict";
    var {toString: ve} = Object.prototype
      , {getPrototypeOf: me} = Object
      , he = (e=>t=>{
        let r = ve.call(t);
        return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
    }
    )(Object.create(null))
      , A = e=>(e = e.toLowerCase(),
    t=>he(t) === e)
      , ee = e=>t=>typeof t === e
      , {isArray: L} = Array
      , k = ee("undefined");
    function qt(e) {
        return e !== null && !k(e) && e.constructor !== null && !k(e.constructor) && P(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    var Be = A("ArrayBuffer");
    function Mt(e) {
        let t;
        return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Be(e.buffer),
        t
    }
    var zt = ee("string")
      , P = ee("function")
      , ke = ee("number")
      , ge = e=>e !== null && typeof e == "object"
      , Jt = e=>e === !0 || e === !1
      , te = e=>{
        if (he(e) !== "object")
            return !1;
        let t = me(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }
      , Kt = A("Date")
      , Vt = A("File")
      , Gt = A("Blob")
      , Wt = A("FileList")
      , Xt = e=>ge(e) && P(e.pipe)
      , $t = e=>{
        let t = "[object FormData]";
        return e && (typeof FormData == "function" && e instanceof FormData || ve.call(e) === t || P(e.toString) && e.toString() === t)
    }
      , Yt = A("URLSearchParams")
      , Zt = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function H(e, t, {allOwnKeys: r=!1}={}) {
        if (e === null || typeof e == "undefined")
            return;
        let n, s;
        if (typeof e != "object" && (e = [e]),
        L(e))
            for (n = 0,
            s = e.length; n < s; n++)
                t.call(null, e[n], n, e);
        else {
            let o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length, c;
            for (n = 0; n < i; n++)
                c = o[n],
                t.call(null, e[c], c, e)
        }
    }
    function He(e, t) {
        t = t.toLowerCase();
        let r = Object.keys(e), n = r.length, s;
        for (; n-- > 0; )
            if (s = r[n],
            t === s.toLowerCase())
                return s;
        return null
    }
    var qe = (()=>typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global)()
      , Me = e=>!k(e) && e !== qe;
    function Ee() {
        let {caseless: e} = Me(this) && this || {}
          , t = {}
          , r = (n,s)=>{
            let o = e && He(t, s) || s;
            te(t[o]) && te(n) ? t[o] = Ee(t[o], n) : te(n) ? t[o] = Ee({}, n) : L(n) ? t[o] = n.slice() : t[o] = n
        }
        ;
        for (let n = 0, s = arguments.length; n < s; n++)
            arguments[n] && H(arguments[n], r);
        return t
    }
    var Qt = (e,t,r,{allOwnKeys: n}={})=>(H(t, (s,o)=>{
        r && P(s) ? e[o] = B(s, r) : e[o] = s
    }
    , {
        allOwnKeys: n
    }),
    e)
      , er = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
    e)
      , tr = (e,t,r,n)=>{
        e.prototype = Object.create(t.prototype, n),
        e.prototype.constructor = e,
        Object.defineProperty(e, "super", {
            value: t.prototype
        }),
        r && Object.assign(e.prototype, r)
    }
      , rr = (e,t,r,n)=>{
        let s, o, i, c = {};
        if (t = t || {},
        e == null)
            return t;
        do {
            for (s = Object.getOwnPropertyNames(e),
            o = s.length; o-- > 0; )
                i = s[o],
                (!n || n(i, e, t)) && !c[i] && (t[i] = e[i],
                c[i] = !0);
            e = r !== !1 && me(e)
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t
    }
      , nr = (e,t,r)=>{
        e = String(e),
        (r === void 0 || r > e.length) && (r = e.length),
        r -= t.length;
        let n = e.indexOf(t, r);
        return n !== -1 && n === r
    }
      , sr = e=>{
        if (!e)
            return null;
        if (L(e))
            return e;
        let t = e.length;
        if (!ke(t))
            return null;
        let r = new Array(t);
        for (; t-- > 0; )
            r[t] = e[t];
        return r
    }
      , or = (e=>t=>e && t instanceof e)(typeof Uint8Array != "undefined" && me(Uint8Array))
      , ir = (e,t)=>{
        let n = (e && e[Symbol.iterator]).call(e), s;
        for (; (s = n.next()) && !s.done; ) {
            let o = s.value;
            t.call(e, o[0], o[1])
        }
    }
      , ar = (e,t)=>{
        let r, n = [];
        for (; (r = e.exec(t)) !== null; )
            n.push(r);
        return n
    }
      , cr = A("HTMLFormElement")
      , ur = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, s) {
        return n.toUpperCase() + s
    })
      , ze = (({hasOwnProperty: e})=>(t,r)=>e.call(t, r))(Object.prototype)
      , lr = A("RegExp")
      , Je = (e,t)=>{
        let r = Object.getOwnPropertyDescriptors(e)
          , n = {};
        H(r, (s,o)=>{
            t(s, o, e) !== !1 && (n[o] = s)
        }
        ),
        Object.defineProperties(e, n)
    }
      , fr = e=>{
        Je(e, (t,r)=>{
            if (P(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
                return !1;
            let n = e[r];
            if (!!P(n)) {
                if (t.enumerable = !1,
                "writable"in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = ()=>{
                    throw Error("Can not rewrite read-only method '" + r + "'")
                }
                )
            }
        }
        )
    }
      , pr = (e,t)=>{
        let r = {}
          , n = s=>{
            s.forEach(o=>{
                r[o] = !0
            }
            )
        }
        ;
        return L(e) ? n(e) : n(String(e).split(t)),
        r
    }
      , dr = ()=>{}
      , mr = (e,t)=>(e = +e,
    Number.isFinite(e) ? e : t)
      , ye = "abcdefghijklmnopqrstuvwxyz"
      , Ke = "0123456789"
      , Ve = {
        DIGIT: Ke,
        ALPHA: ye,
        ALPHA_DIGIT: ye + ye.toUpperCase() + Ke
    }
      , hr = (e=16,t=Ve.ALPHA_DIGIT)=>{
        let r = ""
          , {length: n} = t;
        for (; e--; )
            r += t[Math.random() * n | 0];
        return r
    }
    ;
    function gr(e) {
        return !!(e && P(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
    }
    var Er = e=>{
        let t = new Array(10)
          , r = (n,s)=>{
            if (ge(n)) {
                if (t.indexOf(n) >= 0)
                    return;
                if (!("toJSON"in n)) {
                    t[s] = n;
                    let o = L(n) ? [] : {};
                    return H(n, (i,c)=>{
                        let l = r(i, s + 1);
                        !k(l) && (o[c] = l)
                    }
                    ),
                    t[s] = void 0,
                    o
                }
            }
            return n
        }
        ;
        return r(e, 0)
    }
      , a = {
        isArray: L,
        isArrayBuffer: Be,
        isBuffer: qt,
        isFormData: $t,
        isArrayBufferView: Mt,
        isString: zt,
        isNumber: ke,
        isBoolean: Jt,
        isObject: ge,
        isPlainObject: te,
        isUndefined: k,
        isDate: Kt,
        isFile: Vt,
        isBlob: Gt,
        isRegExp: lr,
        isFunction: P,
        isStream: Xt,
        isURLSearchParams: Yt,
        isTypedArray: or,
        isFileList: Wt,
        forEach: H,
        merge: Ee,
        extend: Qt,
        trim: Zt,
        stripBOM: er,
        inherits: tr,
        toFlatObject: rr,
        kindOf: he,
        kindOfTest: A,
        endsWith: nr,
        toArray: sr,
        forEachEntry: ir,
        matchAll: ar,
        isHTMLForm: cr,
        hasOwnProperty: ze,
        hasOwnProp: ze,
        reduceDescriptors: Je,
        freezeMethods: fr,
        toObjectSet: pr,
        toCamelCase: ur,
        noop: dr,
        toFiniteNumber: mr,
        findKey: He,
        global: qe,
        isContextDefined: Me,
        ALPHABET: Ve,
        generateString: hr,
        isSpecCompliantForm: gr,
        toJSONObject: Er
    };
    "use strict";
    function F(e, t, r, n, s) {
        Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
        this.message = e,
        this.name = "AxiosError",
        t && (this.code = t),
        r && (this.config = r),
        n && (this.request = n),
        s && (this.response = s)
    }
    a.inherits(F, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: a.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });
    var Ge = F.prototype
      , We = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
        We[e] = {
            value: e
        }
    }
    );
    Object.defineProperties(F, We);
    Object.defineProperty(Ge, "isAxiosError", {
        value: !0
    });
    F.from = (e,t,r,n,s,o)=>{
        let i = Object.create(Ge);
        return a.toFlatObject(e, i, function(l) {
            return l !== Error.prototype
        }, c=>c !== "isAxiosError"),
        F.call(i, e.message, t, r, n, s),
        i.cause = e,
        i.name = e.name,
        o && Object.assign(i, o),
        i
    }
    ;
    var h = F;
    var re = null;
    "use strict";
    function Re(e) {
        return a.isPlainObject(e) || a.isArray(e)
    }
    function Xe(e) {
        return a.endsWith(e, "[]") ? e.slice(0, -2) : e
    }
    function $e(e, t, r) {
        return e ? e.concat(t).map(function(s, o) {
            return s = Xe(s),
            !r && o ? "[" + s + "]" : s
        }).join(r ? "." : "") : t
    }
    function yr(e) {
        return a.isArray(e) && !e.some(Re)
    }
    var Rr = a.toFlatObject(a, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });
    function xr(e, t, r) {
        if (!a.isObject(e))
            throw new TypeError("target must be an object");
        t = t || new (re || FormData),
        r = a.toFlatObject(r, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(m, b) {
            return !a.isUndefined(b[m])
        });
        let n = r.metaTokens
          , s = r.visitor || f
          , o = r.dots
          , i = r.indexes
          , l = (r.Blob || typeof Blob != "undefined" && Blob) && a.isSpecCompliantForm(t);
        if (!a.isFunction(s))
            throw new TypeError("visitor must be a function");
        function u(p) {
            if (p === null)
                return "";
            if (a.isDate(p))
                return p.toISOString();
            if (!l && a.isBlob(p))
                throw new h("Blob is not supported. Use a Buffer instead.");
            return a.isArrayBuffer(p) || a.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
        }
        function f(p, m, b) {
            let S = p;
            if (p && !b && typeof p == "object") {
                if (a.endsWith(m, "{}"))
                    m = n ? m : m.slice(0, -2),
                    p = JSON.stringify(p);
                else if (a.isArray(p) && yr(p) || (a.isFileList(p) || a.endsWith(m, "[]")) && (S = a.toArray(p)))
                    return m = Xe(m),
                    S.forEach(function($, Nt) {
                        !(a.isUndefined($) || $ === null) && t.append(i === !0 ? $e([m], Nt, o) : i === null ? m : m + "[]", u($))
                    }),
                    !1
            }
            return Re(p) ? !0 : (t.append($e(b, m, o), u(p)),
            !1)
        }
        let d = []
          , E = Object.assign(Rr, {
            defaultVisitor: f,
            convertValue: u,
            isVisitable: Re
        });
        function g(p, m) {
            if (!a.isUndefined(p)) {
                if (d.indexOf(p) !== -1)
                    throw Error("Circular reference detected in " + m.join("."));
                d.push(p),
                a.forEach(p, function(S, I) {
                    (!(a.isUndefined(S) || S === null) && s.call(t, S, a.isString(I) ? I.trim() : I, m, E)) === !0 && g(S, m ? m.concat(I) : [I])
                }),
                d.pop()
            }
        }
        if (!a.isObject(e))
            throw new TypeError("data must be an object");
        return g(e),
        t
    }
    var j = xr;
    "use strict";
    function Ye(e) {
        let t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
            return t[n]
        })
    }
    function Ze(e, t) {
        this._pairs = [],
        e && j(e, this, t)
    }
    var Qe = Ze.prototype;
    Qe.append = function(t, r) {
        this._pairs.push([t, r])
    }
    ;
    Qe.toString = function(t) {
        let r = t ? function(n) {
            return t.call(this, n, Ye)
        }
        : Ye;
        return this._pairs.map(function(s) {
            return r(s[0]) + "=" + r(s[1])
        }, "").join("&")
    }
    ;
    var ne = Ze;
    "use strict";
    function br(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    function q(e, t, r) {
        if (!t)
            return e;
        let n = r && r.encode || br, s = r && r.serialize, o;
        if (s ? o = s(t, r) : o = a.isURLSearchParams(t) ? t.toString() : new ne(t,r).toString(n),
        o) {
            let i = e.indexOf("#");
            i !== -1 && (e = e.slice(0, i)),
            e += (e.indexOf("?") === -1 ? "?" : "&") + o
        }
        return e
    }
    "use strict";
    var et = class {
        constructor() {
            this.handlers = []
        }
        use(t, r, n) {
            return this.handlers.push({
                fulfilled: t,
                rejected: r,
                synchronous: n ? n.synchronous : !1,
                runWhen: n ? n.runWhen : null
            }),
            this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            a.forEach(this.handlers, function(n) {
                n !== null && t(n)
            })
        }
    }
      , xe = et;
    "use strict";
    var se = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    };
    "use strict";
    var tt = typeof URLSearchParams != "undefined" ? URLSearchParams : ne;
    "use strict";
    var rt = typeof FormData != "undefined" ? FormData : null;
    "use strict";
    var nt = typeof Blob != "undefined" ? Blob : null;
    var Sr = (()=>{
        let e;
        return typeof navigator != "undefined" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined"
    }
    )()
      , wr = (()=>typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
      , R = {
        isBrowser: !0,
        classes: {
            URLSearchParams: tt,
            FormData: rt,
            Blob: nt
        },
        isStandardBrowserEnv: Sr,
        isStandardBrowserWebWorkerEnv: wr,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };
    "use strict";
    function be(e, t) {
        return j(e, new R.classes.URLSearchParams, Object.assign({
            visitor: function(r, n, s, o) {
                return R.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")),
                !1) : o.defaultVisitor.apply(this, arguments)
            }
        }, t))
    }
    "use strict";
    function Ar(e) {
        return a.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
    }
    function Cr(e) {
        let t = {}, r = Object.keys(e), n, s = r.length, o;
        for (n = 0; n < s; n++)
            o = r[n],
            t[o] = e[o];
        return t
    }
    function Or(e) {
        function t(r, n, s, o) {
            let i = r[o++]
              , c = Number.isFinite(+i)
              , l = o >= r.length;
            return i = !i && a.isArray(s) ? s.length : i,
            l ? (a.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n,
            !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
            t(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = Cr(s[i])),
            !c)
        }
        if (a.isFormData(e) && a.isFunction(e.entries)) {
            let r = {};
            return a.forEachEntry(e, (n,s)=>{
                t(Ar(n), s, r, 0)
            }
            ),
            r
        }
        return null
    }
    var oe = Or;
    "use strict";
    var Tr = {
        "Content-Type": void 0
    };
    function Pr(e, t, r) {
        if (a.isString(e))
            try {
                return (t || JSON.parse)(e),
                a.trim(e)
            } catch (n) {
                if (n.name !== "SyntaxError")
                    throw n
            }
        return (r || JSON.stringify)(e)
    }
    var ie = {
        transitional: se,
        adapter: ["xhr", "http"],
        transformRequest: [function(t, r) {
            let n = r.getContentType() || ""
              , s = n.indexOf("application/json") > -1
              , o = a.isObject(t);
            if (o && a.isHTMLForm(t) && (t = new FormData(t)),
            a.isFormData(t))
                return s && s ? JSON.stringify(oe(t)) : t;
            if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
                return t;
            if (a.isArrayBufferView(t))
                return t.buffer;
            if (a.isURLSearchParams(t))
                return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                t.toString();
            let c;
            if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return be(t, this.formSerializer).toString();
                if ((c = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                    let l = this.env && this.env.FormData;
                    return j(c ? {
                        "files[]": t
                    } : t, l && new l, this.formSerializer)
                }
            }
            return o || s ? (r.setContentType("application/json", !1),
            Pr(t)) : t
        }
        ],
        transformResponse: [function(t) {
            let r = this.transitional || ie.transitional
              , n = r && r.forcedJSONParsing
              , s = this.responseType === "json";
            if (t && a.isString(t) && (n && !this.responseType || s)) {
                let i = !(r && r.silentJSONParsing) && s;
                try {
                    return JSON.parse(t)
                } catch (c) {
                    if (i)
                        throw c.name === "SyntaxError" ? h.from(c, h.ERR_BAD_RESPONSE, this, null, this.response) : c
                }
            }
            return t
        }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: R.classes.FormData,
            Blob: R.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    a.forEach(["delete", "get", "head"], function(t) {
        ie.headers[t] = {}
    });
    a.forEach(["post", "put", "patch"], function(t) {
        ie.headers[t] = a.merge(Tr)
    });
    var D = ie;
    "use strict";
    var jr = a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
      , st = e=>{
        let t = {}, r, n, s;
        return e && e.split(`
`).forEach(function(i) {
            s = i.indexOf(":"),
            r = i.substring(0, s).trim().toLowerCase(),
            n = i.substring(s + 1).trim(),
            !(!r || t[r] && jr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n)
        }),
        t
    }
    ;
    "use strict";
    var ot = Symbol("internals");
    function M(e) {
        return e && String(e).trim().toLowerCase()
    }
    function ae(e) {
        return e === !1 || e == null ? e : a.isArray(e) ? e.map(ae) : String(e)
    }
    function Nr(e) {
        let t = Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, n;
        for (; n = r.exec(e); )
            t[n[1]] = n[2];
        return t
    }
    function _r(e) {
        return /^[-_a-zA-Z]+$/.test(e.trim())
    }
    function Se(e, t, r, n, s) {
        if (a.isFunction(n))
            return n.call(this, t, r);
        if (s && (t = r),
        !!a.isString(t)) {
            if (a.isString(n))
                return t.indexOf(n) !== -1;
            if (a.isRegExp(n))
                return n.test(t)
        }
    }
    function Ur(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,r,n)=>r.toUpperCase() + n)
    }
    function Ir(e, t) {
        let r = a.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(n=>{
            Object.defineProperty(e, n + r, {
                value: function(s, o, i) {
                    return this[n].call(this, t, s, o, i)
                },
                configurable: !0
            })
        }
        )
    }
    var z = class {
        constructor(t) {
            t && this.set(t)
        }
        set(t, r, n) {
            let s = this;
            function o(c, l, u) {
                let f = M(l);
                if (!f)
                    throw new Error("header name must be a non-empty string");
                let d = a.findKey(s, f);
                (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || l] = ae(c))
            }
            let i = (c,l)=>a.forEach(c, (u,f)=>o(u, f, l));
            return a.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : a.isString(t) && (t = t.trim()) && !_r(t) ? i(st(t), r) : t != null && o(r, t, n),
            this
        }
        get(t, r) {
            if (t = M(t),
            t) {
                let n = a.findKey(this, t);
                if (n) {
                    let s = this[n];
                    if (!r)
                        return s;
                    if (r === !0)
                        return Nr(s);
                    if (a.isFunction(r))
                        return r.call(this, s, n);
                    if (a.isRegExp(r))
                        return r.exec(s);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, r) {
            if (t = M(t),
            t) {
                let n = a.findKey(this, t);
                return !!(n && this[n] !== void 0 && (!r || Se(this, this[n], n, r)))
            }
            return !1
        }
        delete(t, r) {
            let n = this
              , s = !1;
            function o(i) {
                if (i = M(i),
                i) {
                    let c = a.findKey(n, i);
                    c && (!r || Se(n, n[c], c, r)) && (delete n[c],
                    s = !0)
                }
            }
            return a.isArray(t) ? t.forEach(o) : o(t),
            s
        }
        clear(t) {
            let r = Object.keys(this)
              , n = r.length
              , s = !1;
            for (; n--; ) {
                let o = r[n];
                (!t || Se(this, this[o], o, t, !0)) && (delete this[o],
                s = !0)
            }
            return s
        }
        normalize(t) {
            let r = this
              , n = {};
            return a.forEach(this, (s,o)=>{
                let i = a.findKey(n, o);
                if (i) {
                    r[i] = ae(s),
                    delete r[o];
                    return
                }
                let c = t ? Ur(o) : String(o).trim();
                c !== o && delete r[o],
                r[c] = ae(s),
                n[c] = !0
            }
            ),
            this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            let r = Object.create(null);
            return a.forEach(this, (n,s)=>{
                n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(", ") : n)
            }
            ),
            r
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t,r])=>t + ": " + r).join(`
`)
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...r) {
            let n = new this(t);
            return r.forEach(s=>n.set(s)),
            n
        }
        static accessor(t) {
            let n = (this[ot] = this[ot] = {
                accessors: {}
            }).accessors
              , s = this.prototype;
            function o(i) {
                let c = M(i);
                n[c] || (Ir(s, i),
                n[c] = !0)
            }
            return a.isArray(t) ? t.forEach(o) : o(t),
            this
        }
    }
    ;
    z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    a.freezeMethods(z.prototype);
    a.freezeMethods(z);
    var x = z;
    "use strict";
    function J(e, t) {
        let r = this || D
          , n = t || r
          , s = x.from(n.headers)
          , o = n.data;
        return a.forEach(e, function(c) {
            o = c.call(r, o, s.normalize(), t ? t.status : void 0)
        }),
        s.normalize(),
        o
    }
    "use strict";
    function K(e) {
        return !!(e && e.__CANCEL__)
    }
    "use strict";
    function it(e, t, r) {
        h.call(this, e == null ? "canceled" : e, h.ERR_CANCELED, t, r),
        this.name = "CanceledError"
    }
    a.inherits(it, h, {
        __CANCEL__: !0
    });
    var N = it;
    "use strict";
    function we(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status) ? e(r) : t(new h("Request failed with status code " + r.status,[h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
    }
    "use strict";
    var at = R.isStandardBrowserEnv ? function() {
        return {
            write: function(r, n, s, o, i, c) {
                let l = [];
                l.push(r + "=" + encodeURIComponent(n)),
                a.isNumber(s) && l.push("expires=" + new Date(s).toGMTString()),
                a.isString(o) && l.push("path=" + o),
                a.isString(i) && l.push("domain=" + i),
                c === !0 && l.push("secure"),
                document.cookie = l.join("; ")
            },
            read: function(r) {
                let n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
                return n ? decodeURIComponent(n[3]) : null
            },
            remove: function(r) {
                this.write(r, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }();
    "use strict";
    function Ae(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }
    "use strict";
    function Ce(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
    "use strict";
    function V(e, t) {
        return e && !Ae(t) ? Ce(e, t) : t
    }
    "use strict";
    var ct = R.isStandardBrowserEnv ? function() {
        let t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), n;
        function s(o) {
            let i = o;
            return t && (r.setAttribute("href", i),
            i = r.href),
            r.setAttribute("href", i),
            {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
            }
        }
        return n = s(window.location.href),
        function(i) {
            let c = a.isString(i) ? s(i) : i;
            return c.protocol === n.protocol && c.host === n.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }();
    "use strict";
    function Oe(e) {
        let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }
    "use strict";
    function Lr(e, t) {
        e = e || 10;
        let r = new Array(e), n = new Array(e), s = 0, o = 0, i;
        return t = t !== void 0 ? t : 1e3,
        function(l) {
            let u = Date.now()
              , f = n[o];
            i || (i = u),
            r[s] = l,
            n[s] = u;
            let d = o
              , E = 0;
            for (; d !== s; )
                E += r[d++],
                d = d % e;
            if (s = (s + 1) % e,
            s === o && (o = (o + 1) % e),
            u - i < t)
                return;
            let g = f && u - f;
            return g ? Math.round(E * 1e3 / g) : void 0
        }
    }
    var ut = Lr;
    "use strict";
    function lt(e, t) {
        let r = 0
          , n = ut(50, 250);
        return s=>{
            let o = s.loaded
              , i = s.lengthComputable ? s.total : void 0
              , c = o - r
              , l = n(c)
              , u = o <= i;
            r = o;
            let f = {
                loaded: o,
                total: i,
                progress: i ? o / i : void 0,
                bytes: c,
                rate: l || void 0,
                estimated: l && i && u ? (i - o) / l : void 0,
                event: s
            };
            f[t ? "download" : "upload"] = !0,
            e(f)
        }
    }
    var Fr = typeof XMLHttpRequest != "undefined"
      , ft = Fr && function(e) {
        return new Promise(function(r, n) {
            let s = e.data, o = x.from(e.headers).normalize(), i = e.responseType, c;
            function l() {
                e.cancelToken && e.cancelToken.unsubscribe(c),
                e.signal && e.signal.removeEventListener("abort", c)
            }
            a.isFormData(s) && (R.isStandardBrowserEnv || R.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
            let u = new XMLHttpRequest;
            if (e.auth) {
                let g = e.auth.username || ""
                  , p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(g + ":" + p))
            }
            let f = V(e.baseURL, e.url);
            u.open(e.method.toUpperCase(), q(f, e.params, e.paramsSerializer), !0),
            u.timeout = e.timeout;
            function d() {
                if (!u)
                    return;
                let g = x.from("getAllResponseHeaders"in u && u.getAllResponseHeaders())
                  , m = {
                    data: !i || i === "text" || i === "json" ? u.responseText : u.response,
                    status: u.status,
                    statusText: u.statusText,
                    headers: g,
                    config: e,
                    request: u
                };
                we(function(S) {
                    r(S),
                    l()
                }, function(S) {
                    n(S),
                    l()
                }, m),
                u = null
            }
            if ("onloadend"in u ? u.onloadend = d : u.onreadystatechange = function() {
                !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d)
            }
            ,
            u.onabort = function() {
                !u || (n(new h("Request aborted",h.ECONNABORTED,e,u)),
                u = null)
            }
            ,
            u.onerror = function() {
                n(new h("Network Error",h.ERR_NETWORK,e,u)),
                u = null
            }
            ,
            u.ontimeout = function() {
                let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                  , m = e.transitional || se;
                e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
                n(new h(p,m.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,e,u)),
                u = null
            }
            ,
            R.isStandardBrowserEnv) {
                let g = (e.withCredentials || ct(f)) && e.xsrfCookieName && at.read(e.xsrfCookieName);
                g && o.set(e.xsrfHeaderName, g)
            }
            s === void 0 && o.setContentType(null),
            "setRequestHeader"in u && a.forEach(o.toJSON(), function(p, m) {
                u.setRequestHeader(m, p)
            }),
            a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
            i && i !== "json" && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == "function" && u.addEventListener("progress", lt(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", lt(e.onUploadProgress)),
            (e.cancelToken || e.signal) && (c = g=>{
                !u || (n(!g || g.type ? new N(null,e,u) : g),
                u.abort(),
                u = null)
            }
            ,
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
            let E = Oe(f);
            if (E && R.protocols.indexOf(E) === -1) {
                n(new h("Unsupported protocol " + E + ":",h.ERR_BAD_REQUEST,e));
                return
            }
            u.send(s || null)
        }
        )
    }
    ;
    var ce = {
        http: re,
        xhr: ft
    };
    a.forEach(ce, (e,t)=>{
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (r) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    }
    );
    var pt = {
        getAdapter: e=>{
            e = a.isArray(e) ? e : [e];
            let {length: t} = e, r, n;
            for (let s = 0; s < t && (r = e[s],
            !(n = a.isString(r) ? ce[r.toLowerCase()] : r)); s++)
                ;
            if (!n)
                throw n === !1 ? new h(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(a.hasOwnProp(ce, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
            if (!a.isFunction(n))
                throw new TypeError("adapter is not a function");
            return n
        }
        ,
        adapters: ce
    };
    "use strict";
    function Te(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
            throw new N(null,e)
    }
    function ue(e) {
        return Te(e),
        e.headers = x.from(e.headers),
        e.data = J.call(e, e.transformRequest),
        ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
        pt.getAdapter(e.adapter || D.adapter)(e).then(function(n) {
            return Te(e),
            n.data = J.call(e, e.transformResponse, n),
            n.headers = x.from(n.headers),
            n
        }, function(n) {
            return K(n) || (Te(e),
            n && n.response && (n.response.data = J.call(e, e.transformResponse, n.response),
            n.response.headers = x.from(n.response.headers))),
            Promise.reject(n)
        })
    }
    "use strict";
    var dt = e=>e instanceof x ? e.toJSON() : e;
    function C(e, t) {
        t = t || {};
        let r = {};
        function n(u, f, d) {
            return a.isPlainObject(u) && a.isPlainObject(f) ? a.merge.call({
                caseless: d
            }, u, f) : a.isPlainObject(f) ? a.merge({}, f) : a.isArray(f) ? f.slice() : f
        }
        function s(u, f, d) {
            if (a.isUndefined(f)) {
                if (!a.isUndefined(u))
                    return n(void 0, u, d)
            } else
                return n(u, f, d)
        }
        function o(u, f) {
            if (!a.isUndefined(f))
                return n(void 0, f)
        }
        function i(u, f) {
            if (a.isUndefined(f)) {
                if (!a.isUndefined(u))
                    return n(void 0, u)
            } else
                return n(void 0, f)
        }
        function c(u, f, d) {
            if (d in t)
                return n(u, f);
            if (d in e)
                return n(void 0, u)
        }
        let l = {
            url: o,
            method: o,
            data: o,
            baseURL: i,
            transformRequest: i,
            transformResponse: i,
            paramsSerializer: i,
            timeout: i,
            timeoutMessage: i,
            withCredentials: i,
            adapter: i,
            responseType: i,
            xsrfCookieName: i,
            xsrfHeaderName: i,
            onUploadProgress: i,
            onDownloadProgress: i,
            decompress: i,
            maxContentLength: i,
            maxBodyLength: i,
            beforeRedirect: i,
            transport: i,
            httpAgent: i,
            httpsAgent: i,
            cancelToken: i,
            socketPath: i,
            responseEncoding: i,
            validateStatus: c,
            headers: (u,f)=>s(dt(u), dt(f), !0)
        };
        return a.forEach(Object.keys(e).concat(Object.keys(t)), function(f) {
            let d = l[f] || s
              , E = d(e[f], t[f], f);
            a.isUndefined(E) && d !== c || (r[f] = E)
        }),
        r
    }
    var le = "1.3.4";
    "use strict";
    var Pe = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
        Pe[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }
    );
    var mt = {};
    Pe.transitional = function(t, r, n) {
        function s(o, i) {
            return "[Axios v" + le + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "")
        }
        return (o,i,c)=>{
            if (t === !1)
                throw new h(s(i, " has been removed" + (r ? " in " + r : "")),h.ERR_DEPRECATED);
            return r && !mt[i] && (mt[i] = !0,
            console.warn(s(i, " has been deprecated since v" + r + " and will be removed in the near future"))),
            t ? t(o, i, c) : !0
        }
    }
    ;
    function Dr(e, t, r) {
        if (typeof e != "object")
            throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);
        let n = Object.keys(e)
          , s = n.length;
        for (; s-- > 0; ) {
            let o = n[s]
              , i = t[o];
            if (i) {
                let c = e[o]
                  , l = c === void 0 || i(c, o, e);
                if (l !== !0)
                    throw new h("option " + o + " must be " + l,h.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (r !== !0)
                throw new h("Unknown option " + o,h.ERR_BAD_OPTION)
        }
    }
    var fe = {
        assertOptions: Dr,
        validators: Pe
    };
    "use strict";
    var _ = fe.validators
      , G = class {
        constructor(t) {
            this.defaults = t,
            this.interceptors = {
                request: new xe,
                response: new xe
            }
        }
        request(t, r) {
            typeof t == "string" ? (r = r || {},
            r.url = t) : r = t || {},
            r = C(this.defaults, r);
            let {transitional: n, paramsSerializer: s, headers: o} = r;
            n !== void 0 && fe.assertOptions(n, {
                silentJSONParsing: _.transitional(_.boolean),
                forcedJSONParsing: _.transitional(_.boolean),
                clarifyTimeoutError: _.transitional(_.boolean)
            }, !1),
            s !== void 0 && fe.assertOptions(s, {
                encode: _.function,
                serialize: _.function
            }, !0),
            r.method = (r.method || this.defaults.method || "get").toLowerCase();
            let i;
            i = o && a.merge(o.common, o[r.method]),
            i && a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p=>{
                delete o[p]
            }
            ),
            r.headers = x.concat(i, o);
            let c = []
              , l = !0;
            this.interceptors.request.forEach(function(m) {
                typeof m.runWhen == "function" && m.runWhen(r) === !1 || (l = l && m.synchronous,
                c.unshift(m.fulfilled, m.rejected))
            });
            let u = [];
            this.interceptors.response.forEach(function(m) {
                u.push(m.fulfilled, m.rejected)
            });
            let f, d = 0, E;
            if (!l) {
                let p = [ue.bind(this), void 0];
                for (p.unshift.apply(p, c),
                p.push.apply(p, u),
                E = p.length,
                f = Promise.resolve(r); d < E; )
                    f = f.then(p[d++], p[d++]);
                return f
            }
            E = c.length;
            let g = r;
            for (d = 0; d < E; ) {
                let p = c[d++]
                  , m = c[d++];
                try {
                    g = p(g)
                } catch (b) {
                    m.call(this, b);
                    break
                }
            }
            try {
                f = ue.call(this, g)
            } catch (p) {
                return Promise.reject(p)
            }
            for (d = 0,
            E = u.length; d < E; )
                f = f.then(u[d++], u[d++]);
            return f
        }
        getUri(t) {
            t = C(this.defaults, t);
            let r = V(t.baseURL, t.url);
            return q(r, t.params, t.paramsSerializer)
        }
    }
    ;
    a.forEach(["delete", "get", "head", "options"], function(t) {
        G.prototype[t] = function(r, n) {
            return this.request(C(n || {}, {
                method: t,
                url: r,
                data: (n || {}).data
            }))
        }
    });
    a.forEach(["post", "put", "patch"], function(t) {
        function r(n) {
            return function(o, i, c) {
                return this.request(C(c || {}, {
                    method: t,
                    headers: n ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: o,
                    data: i
                }))
            }
        }
        G.prototype[t] = r(),
        G.prototype[t + "Form"] = r(!0)
    });
    var W = G;
    "use strict";
    var pe = class {
        constructor(t) {
            if (typeof t != "function")
                throw new TypeError("executor must be a function.");
            let r;
            this.promise = new Promise(function(o) {
                r = o
            }
            );
            let n = this;
            this.promise.then(s=>{
                if (!n._listeners)
                    return;
                let o = n._listeners.length;
                for (; o-- > 0; )
                    n._listeners[o](s);
                n._listeners = null
            }
            ),
            this.promise.then = s=>{
                let o, i = new Promise(c=>{
                    n.subscribe(c),
                    o = c
                }
                ).then(s);
                return i.cancel = function() {
                    n.unsubscribe(o)
                }
                ,
                i
            }
            ,
            t(function(o, i, c) {
                n.reason || (n.reason = new N(o,i,c),
                r(n.reason))
            })
        }
        throwIfRequested() {
            if (this.reason)
                throw this.reason
        }
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners)
                return;
            let r = this._listeners.indexOf(t);
            r !== -1 && this._listeners.splice(r, 1)
        }
        static source() {
            let t;
            return {
                token: new pe(function(s) {
                    t = s
                }
                ),
                cancel: t
            }
        }
    }
      , ht = pe;
    "use strict";
    function je(e) {
        return function(r) {
            return e.apply(null, r)
        }
    }
    "use strict";
    function Ne(e) {
        return a.isObject(e) && e.isAxiosError === !0
    }
    var _e = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(_e).forEach(([e,t])=>{
        _e[t] = e
    }
    );
    var gt = _e;
    "use strict";
    function Et(e) {
        let t = new W(e)
          , r = B(W.prototype.request, t);
        return a.extend(r, W.prototype, t, {
            allOwnKeys: !0
        }),
        a.extend(r, t, null, {
            allOwnKeys: !0
        }),
        r.create = function(s) {
            return Et(C(e, s))
        }
        ,
        r
    }
    var y = Et(D);
    y.Axios = W;
    y.CanceledError = N;
    y.CancelToken = ht;
    y.isCancel = K;
    y.VERSION = le;
    y.toFormData = j;
    y.AxiosError = h;
    y.Cancel = y.CanceledError;
    y.all = function(t) {
        return Promise.all(t)
    }
    ;
    y.spread = je;
    y.isAxiosError = Ne;
    y.mergeConfig = C;
    y.AxiosHeaders = x;
    y.formToJSON = e=>oe(a.isHTMLForm(e) ? new FormData(e) : e);
    y.HttpStatusCode = gt;
    y.default = y;
    var Ue = y;
    var At = kt(Rt());
    function xt(e, t, r, n, s, o, i) {
        try {
            var c = e[o](i)
              , l = c.value
        } catch (u) {
            r(u);
            return
        }
        c.done ? t(l) : Promise.resolve(l).then(n, s)
    }
    function bt(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise(function(n, s) {
                var o = e.apply(t, r);
                function i(l) {
                    xt(o, n, s, i, c, "next", l)
                }
                function c(l) {
                    xt(o, n, s, i, c, "throw", l)
                }
                i(void 0)
            }
            )
        }
    }
    function St(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(s) {
                return Object.getOwnPropertyDescriptor(e, s).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
    }
    function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? St(Object(r), !0).forEach(function(n) {
                Br(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : St(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    function Br(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var Ie = "axios-retry";
    function Ct(e) {
        var t = ["ERR_CANCELED", "ECONNABORTED"];
        return !e.response && Boolean(e.code) && !t.includes(e.code) && (0,
        At.default)(e)
    }
    var Ot = ["get", "head", "options"]
      , kr = Ot.concat(["put", "delete"]);
    function Le(e) {
        return e.code !== "ECONNABORTED" && (!e.response || e.response.status >= 500 && e.response.status <= 599)
    }
    function Hr(e) {
        return e.config ? Le(e) && Ot.indexOf(e.config.method) !== -1 : !1
    }
    function Tt(e) {
        return e.config ? Le(e) && kr.indexOf(e.config.method) !== -1 : !1
    }
    function Pt(e) {
        return Ct(e) || Tt(e)
    }
    function qr() {
        return 0
    }
    function Mr() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0
          , t = arguments.length > 1 ? arguments[1] : void 0
          , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100
          , n = Math.pow(2, e) * r
          , s = n * .2 * Math.random();
        return n + s
    }
    function jt(e) {
        var t = e[Ie] || {};
        return t.retryCount = t.retryCount || 0,
        e[Ie] = t,
        t
    }
    function zr(e, t) {
        return wt(wt({}, t), e[Ie])
    }
    function Jr(e, t) {
        e.defaults.agent === t.agent && delete t.agent,
        e.defaults.httpAgent === t.httpAgent && delete t.httpAgent,
        e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent
    }
    function Kr(e, t, r, n) {
        return Fe.apply(this, arguments)
    }
    function Fe() {
        return Fe = bt(function*(e, t, r, n) {
            var s = r.retryCount < e && t(n);
            if (typeof s == "object")
                try {
                    var o = yield s;
                    return o !== !1
                } catch (i) {
                    return !1
                }
            return s
        }),
        Fe.apply(this, arguments)
    }
    function O(e, t) {
        var r = e.interceptors.request.use(s=>{
            var o = jt(s);
            return o.lastRequestTime = Date.now(),
            s
        }
        )
          , n = e.interceptors.response.use(null, function() {
            var s = bt(function*(o) {
                var {config: i} = o;
                if (!i)
                    return Promise.reject(o);
                var {retries: c=3, retryCondition: l=Pt, retryDelay: u=qr, shouldResetTimeout: f=!1, onRetry: d=()=>{}
                } = zr(i, t)
                  , E = jt(i);
                if (yield Kr(c, l, E, o)) {
                    E.retryCount += 1;
                    var g = u(E.retryCount, o);
                    if (Jr(e, i),
                    !f && i.timeout && E.lastRequestTime) {
                        var p = Date.now() - E.lastRequestTime
                          , m = i.timeout - p - g;
                        if (m <= 0)
                            return Promise.reject(o);
                        i.timeout = m
                    }
                    return i.transformRequest = [b=>b],
                    d(E.retryCount, o, i),
                    new Promise(b=>setTimeout(()=>b(e(i)), g))
                }
                return Promise.reject(o)
            });
            return function(o) {
                return s.apply(this, arguments)
            }
        }());
        return {
            requestInterceptorId: r,
            responseInterceptorId: n
        }
    }
    O.isNetworkError = Ct;
    O.isSafeRequestError = Hr;
    O.isIdempotentRequestError = Tt;
    O.isNetworkOrIdempotentRequestError = Pt;
    O.exponentialDelay = Mr;
    O.isRetryableError = Le;
    var U = class {
        constructor() {
            this.churn360UsageCollectorEndpoint = Ue.create({
                baseURL: U.baseUrl
            });
            this.churn360UsageCollectorEndpoint.interceptors.response.use(t=>t, t=>{
                if (!!t && !(t.config.retryIndex && t.config.retryIndex > 2 || t.response.status !== 401 || !this.createSessionCallback))
                    return !t.config.retryIndex || typeof t.config.retryIndex != "number" ? t.config.retryIndex = 1 : t.config.retryIndex++,
                    this.createSession().then(r=>(this.sessionKey = r,
                    t.config.params.sessionKey = r,
                    this.churn360UsageCollectorEndpoint.request(t.config)))
            }
            ),
            O(this.churn360UsageCollectorEndpoint, {
                retries: 3
            })
        }
        get sessionKey() {
            return this._sessionKey
        }
        set sessionKey(t) {
            this._sessionKey = t
        }
        async createSession() {
            if (!!this.createSessionCallback)
                return this.createSessionCallback()
        }
        async initialize(t, r, n, s) {
            let o = `${U.baseUrl}/initialize`
              , i = {
                customerIdentifier: r,
                userId: n
            };
            return this.createSessionCallback = ()=>new Promise((c,l)=>{
                this.callInitialize(o, t, i, s, ()=>c(this.sessionKey), l)
            }
            ),
            new Promise((c,l)=>{
                this.callInitialize(o, t, i, s, c, l)
            }
            )
        }
        async initializeWithSessionKey(t, r) {
            return this.createSessionCallback = r,
            new Promise((n,s)=>{
                this.sessionKey = t,
                n(!0)
            }
            )
        }
        callInitialize(t, r, n, s, o, i) {
            this.churn360UsageCollectorEndpoint.post(t, s, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": r
                },
                params: {
                    customerIdentifier: n.customerIdentifier,
                    userId: n.userId
                }
            }).then(c=>{
                if (!c.data.sessionkey)
                    throw "Could not initialize.";
                this.sessionKey = c.data.sessionkey,
                o(!0)
            }
            ).catch(c=>i(c))
        }
        async postIdentity(t) {
            let r = `${U.baseUrl}/identify`;
            return new Promise((n,s)=>{
                this.churn360UsageCollectorEndpoint.post(r, JSON.stringify(t), {
                    headers: this.getCommonHttpHeaders()
                }).then(o=>n(!0)).catch(o=>s(!1))
            }
            )
        }
        async postPage(t) {
            let r = `${U.baseUrl}/page`;
            return new Promise((n,s)=>{
                this.churn360UsageCollectorEndpoint.post(r, JSON.stringify(t), {
                    headers: this.getCommonHttpHeaders()
                }).then(o=>n(!0)).catch(o=>s(!1))
            }
            )
        }
        async postTrack(t) {
            let r = `${U.baseUrl}/track`;
            return new Promise((n,s)=>{
                this.churn360UsageCollectorEndpoint.post(r, JSON.stringify(t), {
                    headers: this.getCommonHttpHeaders()
                }).then(o=>n(!0)).catch(o=>s(!1))
            }
            )
        }
        async getEventConfigurations() {
            let t = `${U.baseUrl}/event-configurations`;
            return new Promise((r,n)=>{
                this.churn360UsageCollectorEndpoint.get(t, {
                    headers: this.getCommonHttpHeaders()
                }).then(s=>r(s)).catch(s=>n(s))
            }
            )
        }
        getCommonHttpHeaders() {
            return {
                "Content-Type": "application/json",
                "X-Api-Key": this.sessionKey
            }
        }
    }
      , de = U;
    de.baseUrl = "https://churn360-qa-churn360-usage-func.azurewebsites.net/api";
    var w = class {
        constructor() {
            this.usageCollectorService = new de
        }
        async initialize(t, r, n, s) {
            try {
                s || (s = new Z),
                s.customerIdentifier = r,
                await this.usageCollectorService.initialize(t, r, n, s)
            } catch (o) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not initialize usage collector.", o)
            }
        }
        async initializeWithSessionKey(t, r) {
            try {
                await this.usageCollectorService.initializeWithSessionKey(t, r),
                this.startEventListener()
            } catch (n) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not initialize usage collector.", n)
            }
        }
        async identify(t) {
            try {
                let r = {
                    traits: t
                };
                this.usageCollectorService.postIdentity(T.wrap(r))
            } catch (r) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not log page call.", r)
            }
        }
        async page(t, r, n, s, o) {
            let i = null
              , c = null;
            try {
                typeof t == "string" && (!r || typeof r == "object") && !n && !s && !o ? (i = document.title,
                c = window.location.href,
                n = document.location.pathname,
                s = t,
                o = r) : (i = t,
                c = r);
                let u = await {
                    url: c,
                    feature: s,
                    properties: {
                        title: i,
                        path: n
                    },
                    additionalFields: o
                };
                await this.usageCollectorService.postPage(T.wrap(u))
            } catch (l) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not log page call into.", l)
            }
        }
        async track(t, r, n) {
            try {
                let s = {
                    name: t,
                    feature: r,
                    additionalFields: n,
                    context: {
                        page: new v
                    }
                };
                this.usageCollectorService.postTrack(T.wrap(s))
            } catch (s) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not log track call into.", s)
            }
        }
        startEventListener() {
            try {
                this.usageCollectorService.getEventConfigurations().then(t=>{
                    this.eventConfigurations = t.data,
                    !!this.eventConfigurations && window.addEventListener("click", r=>{
                        let n = window.location.href;
                        this.eventConfigurations.forEach(s=>{
                            (n.match(new RegExp(s.urlIdentifier)) || window.location.pathname.match(new RegExp(s.urlIdentifier))) && s.cssSelectors.forEach(o=>{
                                let i = document.querySelector(o.selector);
                                i && i.isSameNode(r.target) && this.track(o.type, o.name)
                            }
                            )
                        }
                        )
                    }
                    , !0)
                }
                )
            } catch (t) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not initiate usage listener.", t)
            }
        }
        get userIp() {
            return sessionStorage.getItem(w.userIpStorageKey)
        }
        set userIp(t) {
            sessionStorage.setItem(w.userIpStorageKey, t)
        }
        async getUserIp() {
            if (this.userIp)
                return this.userIp;
            try {
                let r = await (await fetch("https://api.ipify.org/?format=json")).json();
                this.userIp = r.ip
            } catch (t) {
                if (w.logErrors === !1)
                    return;
                console.error("Churn360: Could not get IP address.", t)
            }
            return this.userIp
        }
    }
      , X = w;
    X.logErrors = !1,
    X.userIpStorageKey = "Churn360-userIp";
    return Vr;
}
)();
