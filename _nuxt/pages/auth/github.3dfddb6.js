(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1053:function(t,e,n){var content=n(1063);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("6a9b651e",content,!0,{sourceMap:!1})},1062:function(t,e,n){"use strict";var o=n(1053);n.n(o).a},1063:function(t,e,n){(e=n(33)(!1)).push([t.i,"@-webkit-keyframes blink{50%{color:transparent}}@keyframes blink{50%{color:transparent}}.loader__dot{-webkit-animation:blink 1s infinite;animation:blink 1s infinite}.loader__dot:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.loader__dot:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}",""]),t.exports=e},1083:function(t,e,n){"use strict";n.r(e);n(19);var o={layout:"auth",mounted:function(){var t=this,code=this.$route.query.code;code&&this.$axios.$post("https://octobay.uber.space/github-access-token",{code:code}).then((function(e){e.accessToken&&(localStorage.setItem("github_access_token",e.accessToken),t.$store.dispatch("github/login").finally((function(){t.$router.push("/")})))}))}},l=(n(1062),n(9)),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"loader text-white"},[e("span",{staticClass:"loader__dot"},[this._v(".")]),this._v(" "),e("span",{staticClass:"loader__dot"},[this._v(".")]),this._v(" "),e("span",{staticClass:"loader__dot"},[this._v(".")])])}],!1,null,null,null);e.default=component.exports}}]);