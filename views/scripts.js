//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// function disable() {
//     document.getElementById("maintain").disabled = true;
//   }

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

//   const c = document.documentElement.scrollTop || document.body.scrollTop;
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     window.scrollTo(0, c - c / 8);
//   }
}


function znReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
window.znStorage = {
    _storage: new WeakMap,
    put: function(e, t, n) {
        this._storage.has(e) || this._storage.set(e, new Map), this._storage.get(e).set(t, n)
    },
    get: function(e, t) {
        return this._storage.get(e).get(t)
    },
    has: function(e, t) {
        return this._storage.has(e) && this._storage.get(e).has(t)
    },
    remove: function(e, t) {
        var n = this._storage.get(e).delete(t);
        return 0 === !this._storage.get(e).size && this._storage.delete(e), n
    }
};
(function(e, t) {
    e.znAnimate = t(e)
})(window, (function(e) {
    var t, n = {},
        i = function(e) {},
        a = function(e) {
            return null === e.offsetParent
        },
        o = function(e, t) {
            if (a(e)) return !1;
            var n = e.getBoundingClientRect();
            return n.bottom >= t.t && n.top <= t.b
        };
    return n.init = function(a) {
        a = a || {};
        var o = a.offset || 0,
            r = function(e, t) {
                return parseInt(e || t, 10)
            };
        t = {
            t: r(a.offsetTop, o),
            b: r(a.offsetBottom, o)
        }, i = a.callback || i, n.update(), document.addEventListener ? (e.addEventListener("scroll", n.update, !1), e.addEventListener("load", n.update, !1)) : (e.attachEvent("onscroll", n.update), e.attachEvent("onload", n.update))
    }, n.update = function() {
        for (var n, a = document.querySelectorAll('[data-scroll-animation]:not([data-scroll-animation=""]):not(.zn-animate)'), r = a.length, s = {
                t: 0 - t.t,
                b: (e.innerHeight || document.documentElement.clientHeight) + t.b
            }, l = 0; l < r; l++) n = a[l], o(n, s) && (n.classList.add("zn-animate"), i(n))
    }, n.detach = function() {
        document.removeEventListener ? e.removeEventListener("scroll", n.update) : e.detachEvent("onscroll", n.update)
    }, n
}));
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
});
window.znRespondToVisibility = function(e, t) {
    var n = {
            root: null,
            threshold: .01
        },
        i = new IntersectionObserver((function(e, n) {
            var i = e.map((function(e) {
                    return e.isIntersecting
                })),
                a = i.includes(!0);
            t(a)
        }), n);
    i.observe(e)
};
znReady(function() {
    window.znAnimate.init({
        offset: 0
    });
    (function() {
        var e = document.getElementById("znid-931885793482"),
            t = e.querySelector(":scope > .zn-element > .zn-banner"),
            n = "",
            i = null != document.querySelector(".zn-container.editing");
        !i && n && (t.style.cursor = "pointer", t.addEventListener("click", (function() {
            window.location.href = n
        })))
    })(); 
    (function() {
        (function() {
            (function() {
                for (var e = document.getElementById("znid-057626834208"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "multiple", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                    var e = this.nextElementSibling;
                    if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                    else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                        for (var i = 0; i < t.length; i++)
                            if (t[i] != this) {
                                e = t[i].nextElementSibling;
                                t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                            }
                }))
            })();
        })();
        (function() {
            (function() {
                for (var e = document.getElementById("znid-533399632975"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "multiple", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                    var e = this.nextElementSibling;
                    if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                    else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                        for (var i = 0; i < t.length; i++)
                            if (t[i] != this) {
                                e = t[i].nextElementSibling;
                                t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                            }
                }))
            })();
        })();
        (function() {
            (function() {
                for (var e = document.getElementById("znid-815464860615"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "multiple", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                    var e = this.nextElementSibling;
                    if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                    else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                        for (var i = 0; i < t.length; i++)
                            if (t[i] != this) {
                                e = t[i].nextElementSibling;
                                t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                            }
                }))
            })();
        })();
        (function() {
            (function() {
                for (var e = document.getElementById("znid-963229468485"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "multiple", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                    var e = this.nextElementSibling;
                    if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                    else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                        for (var i = 0; i < t.length; i++)
                            if (t[i] != this) {
                                e = t[i].nextElementSibling;
                                t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                            }
                }))
            })();
        })();
    })();
    (function() {
        var e = "",
            t = null != document.querySelector(".zn-container.editing");
        e && !t && (window.fbAsyncInit = function() {
            FB.init({
                appId: "912333495590130",
                autoLogAppEvents: !0,
                xfbml: !0,
                version: "v2.11"
            })
        }, function(e, t, n) {
            var i, a = e.getElementsByTagName(t)[0];
            e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "https://connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(i, a))
        }(document, "script", "facebook-jssdk"))
    })();
    (function() {
        var e = null != document.querySelector(".zn-container.editing"),
            t = document.body;
        p();
        var n = "false",
            i = "true",
            a = "false",
            o = "true",
            r = "false",
            s = "true" == n && (e || "true" != r || !localStorage.znHideAnnouncementBar);
        if (s) {
            var l = document.createElement("div");
            if (l.classList.add("zn-announcement-bar"), "true" == o && l.classList.add("pad-right"), l.innerHTML = '\n        <div class="zn-announcement-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n        '.concat("true" == i ? '\n          <a class="zn-announcement-button" href="" target="'.concat("true" == a ? "_blank" : "", '">\n            <button>Click me</button>\n          </a>\n        ') : "", "\n        ").concat("true" == o ? '<i class="material-icons-outlined zn-annoucement-close">close</i>' : "", "\n      "), t.prepend(l), !e && "true" == o) {
                var c = l.querySelector(".zn-annoucement-close");
                c.addEventListener("click", (function() {
                    p(), "true" == r && (localStorage.znHideAnnouncementBar = !0)
                }))
            }
        }
        function p() {
            var e = t.querySelector(".zn-announcement-bar");
            e && e.parentNode.removeChild(e)
        }
    })();
});