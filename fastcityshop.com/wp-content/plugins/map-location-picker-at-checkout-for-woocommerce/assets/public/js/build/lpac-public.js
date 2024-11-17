! function(e) {
    function o() {
        var o = e("#lpac-store-selector-shortcode");
        !o.length > 0 || o.change((function(o) {
            var t, r = e(this).find("option:selected").val();
            t = r, !0 === e("body").hasClass("logged-in") ? wp.ajax.post("lpac_save_selected_store_location", {
                store_location_id: t
            }).done().fail((function(e) {
                console.log(e)
            })) : localStorage.setItem("lpac_user_preferred_store_location_id", t)
        }))
    }

    function t() {
        if (storeSelectorShortcodeConfig.enableSearch) {
            var o = document.querySelector(".lpac-store-selector-locations");
            ! function(e, o) {
                Array.isArray(o) || (o = [o]);
                var t = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var c, l = o[Symbol.iterator](); !(t = (c = l.next()).done); t = !0) {
                        var n = c.value;
                        "string" == typeof n ? e("#".concat(n)).selectWoo() : e(n).selectWoo()
                    }
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        t || null == l.return || l.return()
                    } finally {
                        if (r) throw a
                    }
                }
            }(e, o)
        }
    }
    e(document).ready((function() {
        t(), o(),
            function() {
                if (!0 !== e("body").hasClass("logged-in")) {
                    var o = localStorage.getItem("lpac_user_preferred_store_location_id");
                    o && e("#lpac-store-selector-shortcode select").val(o).change()
                }
            }()
    }))
}(jQuery);