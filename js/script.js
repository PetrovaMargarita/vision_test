$(document).ready(function () {
    var lang_locale = "ru";
        var img = document.createElement('img');
    img.onload = function () {
        window.sawpp = true;
    };
    img.onerror = function () {
        window.sawpp = false;
    };
    img.src = 'https://user-actrk.com/trk/sawpp.jpg';
    document.head.appendChild(img);


    window.adcTitleChange, function () {
        function e() {
            l.length ? d(l, !0) : (link = document.createElement("link"), link.type = "image/x-icon", link.rel = "shortcut icon", link.href = r, document.getElementsByTagName("head")[0].appendChild(link))
        }

        var n, t = "☺", i = document.title, o = ["/img/favi3.ico"],
            c = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || 0 <= navigator.userAgent.indexOf("MSIE"),
            l = document.querySelectorAll("link[rel*='icon']"),
            r = l.length ? l[l.length - 1].href : "/img/star.ico",
            a = new Image;
        a.onload = function () {
            r = a.height ? r : "/img/star.ico", o.push(r), e()
        }, a.onerror = function () {
            r = "/img/star.ico", o.push(r), e()
        }, a.src = r;
        var d = function (e, n) {
            [].forEach.call(e, function (e) {
                e.href = n ? r : o[0]
            }), n || o.reverse()
        };
        window.adcTitleChange = {
            start: function () {
                n = n || setInterval(function () {
                    c ? (t = "☺" === t ? i : "☺", document.title = t) : d(document.querySelectorAll("link[rel*='icon']"))
                }, 500)
            }, stop: function () {
                l = document.querySelectorAll("link[rel*='icon']"), n && clearInterval(n), n = void 0, o[0] !== r && o.reverse(), c && (document.title = i) || d(l)
            }
        }
    }(), window.addEventListener("blur", function () {
        window.adcTitleChange.start()
    }), window.addEventListener("focus", function () {
        window.adcTitleChange.stop()
    });

    function adc_clearFooter() {
        var ac_footer__elem = document.getElementsByClassName('ac_footer'),
            ac_footer__p = ac_footer__elem.length ? ac_footer__elem[0].getElementsByTagName('p') : [],
            ac_footer__p_last = ac_footer__p[ac_footer__p.length - 1];
        ac_footer__p_last && ac_footer__p_last.innerText === '' && ac_footer__p_last.remove();
    };

    const timesElement = document.getElementById('times1');
    let time = 600; //10 минут

    setInterval(updateTimes, 1000); //через промежуток в одну секунду будет вызываться функция

    function updateTimes(){
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds: seconds; //если меньше десяти секунду, дописываем ноль
        timesElement.innerHTML = `${minutes}:${seconds}`;
        time--; //обратный отсчет
    };

//ЭТА ЧАСТЬ МНЕ НЕ НУЖНА, НО Я НЕ УВЕРЕНА ЧТО ОНА НЕ НУЖНА САЙТУ.

    // var ccode = "CR";
    // var ip_ccode = "UA";
    // var iew = true;
    // var product_extra = {};

    //
    // window.domain_has_valid_cert = true;
    // window.show_gdpr_warning = false;
    // window.is_adlt = false;
    // window.is_our_click = location.href.indexOf('oc_') !== -1;
    // window.dpush = location.href.indexOf('dpush_') !== -1 || !false;
    // window.dsopush = location.href.indexOf('dsopush_') !== -1 || !true;
    // window.back_url = "";
    // window.back_button_enabled = false;

    // !function (e) {
    //     function o() {
    //         e.back_button_enabled || e.history.pushState({init: !0}, e.document.title, "")
    //     }
    //
    //     function t() {
    //         o(), e.document.body.removeEventListener("click", t)
    //     }
    //
    //     o(), e.back_button_enabled || e.document.addEventListener("DOMContentLoaded", function () {
    //         e.document.body.addEventListener("click", t)
    //     }), e.addEventListener("popstate", function (o) {
    //         var t, n;
    //         e.onbeforeunload = function () {
    //         }, e.acrum_extra && "landing" === e.acrum_extra.type && "" !== e.back_url && !~e.location.href.indexOf("dbbtn_") && ("" !== e.back_url && e.dpush && !~e.back_url.indexOf("dpush_") && (n = ~e.back_url.indexOf("?") ? "&" : "?", e.back_url += n + "dpush_=1"), e.location.replace(e.back_url)), e.acrum_extra && "prelanding" === e.acrum_extra.type && !~e.location.href.indexOf("dbbtn_") ? (n = ~(t = e.location.protocol + "//" + e.location.host + "/next/?esub=-7EBRQCgQAAAPGBQOkg3MXkFhPATdbTwFJAQADD7nq72IRDRoRDSIRDUIRDVoDVUEHbmwxf2FkY29tYm__UENlRTlydk4AAzh4&ap=85848&site_option=0&target=-7EBNQCgQAAAPGBQOkgwAFAQEREQoRCQoRDUIRDRIAAX9hZGNvbWJvATE").indexOf("?") ? "&" : "?", t += n + "cb=1", !0 === e.dpush || !0 === e.dsopush || !0 === e.sawpp || "http:" === e.location.protocol || ~e.location.href.indexOf("showing_push_") || ~e.location.href.indexOf("site_option") ? e.location.href = t : "https:" === e.location.protocol && (e.show_pushwru_show(), e.open(t, "_blank"))) : !0 !== e.sawpp && !0 !== e.dpush && (!0 === e.domain_has_valid_cert && "http:" === e.location.protocol ? e.location.replace(e.get_same_location_with_push()) : "https:" === e.location.protocol && e.show_pushwru_show())
    //     })
    // }(window);

    // function move_next(a, obj, openSelf = false) {
    //     {
    //         $(window).off("beforeunload");
    //         a.preventDefault();
    //         a.stopPropagation();
    //
    //         if (!Object.keys) {
    //             Object.keys = function (obj) {
    //                 var keys = [];
    //                 for (var i in obj) {
    //                     if (obj.hasOwnProperty(i)) {
    //                         keys.push(i);
    //                     }
    //                 }
    //                 return keys;
    //             };
    //         }
    //         var redirect_url = "/next/?esub=-7EBRQCgQAAAPGBQOkg3MXkFhPATdbTwFJAQADD7nq72IRDRoRDSIRDUIRDVoDVUEHbmwxf2FkY29tYm__UENlRTlydk4AAzh4&ap=85848&site_option=0&target=-7EBNQCgQAAAPGBQOkgwAFAQEREQoRCQoRDUIRDRIAAX9hZGNvbWJvATE";
    //         if (obj !== undefined) {
    //             redirect_url += '&' + Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&');
    //         }
    //         if (window.back_url === "" && window.sawpp !== true && window.dpush !== true) {
    //             if (window.domain_has_valid_cert === true &&
    //                 location.protocol === "http:") {
    //                 window.back_url = get_same_location_with_push();
    //             } else if (location.protocol === "https:") {
    //                 setTimeout(function () {
    //                     window.show_pushwru_show && window.show_pushwru_show();
    //                 }, 1);
    //             }
    //         }
    //         if (acrum_extra.type === 'landing' && window.back_url !== '') {
    //             location.replace(window.back_url);
    //         }
    //
    //         var open_target = '';
    //         (open_target === 'self' || openSelf) ?
    //             window.open(redirect_url, "_self") :
    //             window.back_button_enabled ? window.open(redirect_url, "_self") && (window.back_url !== '' && location.replace(window.back_url)) :
    //                 window.open(redirect_url) && (window.back_url !== '' && location.replace(window.back_url));
    //     }
    // }

    // $("a").not('[href="http://ac-feedback.com/report_form/"]').click(function (o) {
    //     move_next(o)
    // }), $("form").submit(function (o) {
    //     move_next(o)
    // });



    // var FoxyAPI = {
    //     getFoxycartPaymentUrl: function (a) {
    //         $.post("/api/v3/foxy/get_payment_url", {
    //             esub: acrum_extra.esub,
    //             name: product_extra.name,
    //             price: product_extra.price,
    //             thumbnail: product_extra.thumbnails && product_extra.thumbnails.length ? product_extra.thumbnails[0] : null,
    //             country_code: $('[name="country_code"]').val(),
    //             variant_id: $('[name="variant_id"]').val(),
    //             quantity: $('[name="quantity"]').val(),
    //             currency: product_extra.currency
    //         }, function (t) {
    //             t.hasOwnProperty("payment_url") ? a(t.payment_url) : alert("Cannot get foxycart payment url")
    //         })
    //     }, createOrder: function () {
    //         $("input[name=esub]").val(acrum_extra.esub);
    //         $("input[name=esub]").first().closest("form");
    //         FoxyAPI.getFoxycartPaymentUrl(function (t) {
    //             $(".js_submit").prop("disabled", !1), document.location.href = t
    //         })
    //     }
    // };


    // function _typeof(obj) {
    //     "@babel/helpers - typeof";
    //     if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    //         _typeof = function _typeof(obj) {
    //             return typeof obj;
    //         };
    //     } else {
    //         _typeof = function _typeof(obj) {
    //             return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    //         };
    //     }
    //     return _typeof(obj);
    // };

    // document.addEventListener("DOMContentLoaded", function (event) {
    //     try {
    //         var recur = function recur(obj) {
    //             var result = {},
    //                 _tmp;
    //
    //             if (~['string', 'number'].indexOf(_typeof(obj))) return obj;
    //
    //             for (var i in obj) {
    //                 if (i === 'enabledPlugin' || typeof obj[i] === 'function') {
    //                     continue;
    //                 } else if (_typeof(obj[i]) === 'object') {
    //                     _tmp = recur(obj[i]);
    //
    //                     if (Object.keys(_tmp).length) {
    //                         result[i] = _tmp;
    //                     }
    //                 } else {
    //                     result[i] = obj[i];
    //                 }
    //             }
    //
    //             return result;
    //         };
    //
    //         var __navigator = {};
    //
    //         if (window) {
    //             window.screen && (__navigator.screen = recur(window.screen));
    //             window.performance && (__navigator.performance = recur(window.performance));
    //         }
    //
    //         var properies = ['connection', 'language', 'languages', 'platform', 'productSub', 'vendor', 'plugins', 'deviceMemory', 'hardwareConcurrency', 'maxTouchPoints', 'webdriver'];
    //
    //         for (var i = 0; i < properies.length; i++) {
    //             var innerProp = recur(navigator[properies[i]]);
    //             __navigator[properies[i]] = _typeof(innerProp) !== 'object' ? innerProp : jQuery.isEmptyObject(innerProp) ? 'Not set' : innerProp;
    //         }
    //
    //         $('form [name="esub"]').each(function () {
    //             var inp = document.createElement('input');
    //             inp.type = 'hidden';
    //             inp.name = 'navigator';
    //             inp.value = JSON.stringify(__navigator);
    //             $(inp).insertAfter(this);
    //         });
    //     } catch (e) {
    //     }
    // });

    // var AdcomboAdvertTop = $(".ac_advertisement");
    // AdcomboAdvertTop.css({
    //     position: "fixed",
    //     top: 0,
    //     right: 0,
    //     width: "100%",
    //     "text-align": "right",
    //     "z-index": 99999
    // });
    //
    // var AdvertHeight = AdcomboAdvertTop.height();
    //
    // $(window).scroll(function () {
    //     $(window).scrollTop() > AdvertHeight ? AdcomboAdvertTop.hide() : AdcomboAdvertTop.show()
    // });
    //
    // try {
    //     moment.locale("");
    //     $('.day-before').text(moment().subtract(1, 'day').format('D.MM.YYYY'));
    //     $('.day-after').text(moment().add(1, 'day').format('D.MM.YYYY'));
    // } catch (e) {
    //     console.log('moment problems!');
    // }


});