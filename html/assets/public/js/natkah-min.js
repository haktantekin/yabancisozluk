!function(){function e(t,n,i){return t.call.apply(t.bind,arguments)}function o(n,i,t){if(!n)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,e),n.apply(i,t)}}return function(){return n.apply(i,arguments)}}function p(t,n,i){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function n(t,n){this.a=t,this.m=n||t,this.c=this.m.document}var c=!!window.FontFace;function h(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function f(t,n,i){(t=(t=t.c.getElementsByTagName(n)[0])||document.documentElement).insertBefore(i,t.lastChild)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function a(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function l(t){if("string"==typeof t.f)return t.f;var n=t.m.location.protocol;return"about:"==n&&(n=t.a.location.protocol),"https:"==n?"https:":"http:"}function u(t,n,i){function e(){s&&o&&(s(a),s=null)}n=h(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=null,s=i||null;c?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),f(t,"head",n)}function g(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=h(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,i&&i(Error("Script load timeout")))},e||5e3),a}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,s(t)}}function w(t,n){t.c=n,s(t)}function s(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function b(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function j(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function _(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function k(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new y("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function T(t){var n,i,e;t.g&&(n=a(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")],n||i.push(t.a.c("wf","inactive")),d(t.f,i,e)),S(t,"inactive")}function S(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function C(){this.c={}}function N(t,n){this.c=t,this.f=n,this.a=h(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){f(t.c,"body",t.a)}function E(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+_(t)+";font-weight:"+t.f+"00;"}function W(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function F(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.o=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.o=new N(this.c,this.s),t=E(t=new b(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=E(t=new b(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=E(t=new b("serif",x(this.a))),this.j.a.style.cssText=t,t=E(t=new b("sans-serif",x(this.a))),this.o.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.o)}y.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},W.prototype.start=function(){var o=this.c.m.document,a=this,s=r(),t=new Promise(function(i,e){!function n(){var t;r()-s>=a.f?e():o.fonts.load(_(t=a.a)+" "+t.f+"00 300px "+j(t.c),a.h).then(function(t){1<=t.length?i():setTimeout(n,25)},function(){e()})}()}),n=new Promise(function(t,n){setTimeout(n,a.f)});Promise.race([n,t]).then(function(){a.g(a.a)},function(){a.j(a.a)})};var I={D:"serif",C:"sans-serif"},P=null;function B(){var t;return null===P&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),P=!!t&&(parseInt(t[1],10)<536||536===parseInt(t[1],10)&&parseInt(t[2],10)<=11)),P}function O(t,n,i){for(var e in I)if(I.hasOwnProperty(e)&&n===t.f[I[e]]&&i===t.f[I[e]])return!0;return!1}function L(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=B()&&O(t,i,e)),n?r()-t.A>=t.w?B()&&O(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):setTimeout(p(function(){L(this)},t),50):D(t,t.v)}function D(t,n){setTimeout(p(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.o.a),n(this.a)},t),0)}function $(t,n,i){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=i}F.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=r(),L(this)};var q=null;function H(t){0==--t.f&&t.j&&(t.o?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),S(t,"active")):T(t.a))}function t(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function M(t,n){this.c=t,this.a=n}function z(t,n){this.c=t,this.a=n}function G(t,n,i){this.c=t||n+"//fonts.googleapis.com/css",this.a=[],this.f=[],this.g=i||""}$.prototype.g=function(t){var n=this.a;n.g&&d(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),S(n,"fontactive",t),this.o=!0,H(this)},$.prototype.h=function(t){var n,i,e,o=this.a;o.g&&(n=a(o.f,o.a.c("wf",t.c,x(t).toString(),"active")),i=[],e=[o.a.c("wf",t.c,x(t).toString(),"loading")],n||i.push(o.a.c("wf",t.c,x(t).toString(),"inactive")),d(o.f,i,e)),S(o,"fontinactive",t),H(this)},t.prototype.load=function(t){this.c=new n(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(o,t,n){var i=[],e=n.timeout;!function(t){t.g&&d(t.f,[t.a.c("wf","loading")]),S(t,"loading")}(t);var i=function(t,n,i){var e,o,a=[];for(e in n){!n.hasOwnProperty(e)||(o=t.c[e])&&a.push(o(n[e],i))}return a}(o.a,n,o.c),a=new $(o.c,t,e);for(o.h=i.length,t=0,n=i.length;t<n;t++)i[t].load(function(t,n,i){var e,c,h,f,l,u;c=a,h=t,f=n,l=i,u=0==--(e=o).h,(e.f||e.g)&&setTimeout(function(){var t=l||null,n=f||{};if(0===h.length&&u)T(c.a);else{c.f+=h.length,u&&(c.j=u);for(var i=[],e=0;e<h.length;e++){var o=h[e],a=n[o.c],s=c.a,r=o;s.g&&d(s.f,[s.a.c("wf",r.c,x(r).toString(),"loading")]),S(s,"fontloading",r),(s=null)===q&&(q=!!window.FontFace&&(!(r=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(r[1],10))),s=q?new W(p(c.g,c),p(c.h,c),c.c,o,c.s,a):new F(p(c.g,c),p(c.h,c),c.c,o,c.s,t,a),i.push(s)}for(e=0;e<i.length;e++)i[e].start()}},0)})}(this,new k(this.c,t),t)},M.prototype.load=function(s){var r,t,n,i,e=this,c=e.a.projectId,o=e.a.version;c?(r=e.c.m,g(this.c,(n=c,i=o,l((t=e).c)+"//"+(t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""))+"/"+n+".js"+(i?"?v="+i:"")),function(t){t?s([]):(r["__MonotypeConfiguration__"+c]=function(){return e.a},function t(){if(r["__mti_fntLst"+c]){var n,i=r["__mti_fntLst"+c](),e=[];if(i)for(var o=0;o<i.length;o++){var a=i[o].fontfamily;null!=i[o].fontStyle&&null!=i[o].fontWeight?(n=i[o].fontStyle+i[o].fontWeight,e.push(new b(a,n))):e.push(new b(a))}s(e)}else setTimeout(function(){t()},50)}())}).id="__MonotypeAPIScript__"+c):s([])},z.prototype.load=function(t){for(var n=this.a.urls||[],i=this.a.families||[],e=this.a.testStrings||{},o=new v,a=0,s=n.length;a<s;a++)u(this.c,n[a],m(o));var r=[];for(a=0,s=i.length;a<s;a++)if((n=i[a].split(":"))[1])for(var c=n[1].split(","),h=0;h<c.length;h+=1)r.push(new b(n[0],c[h]));else r.push(new b(n[0]));w(o,function(){t(r,e)})};function K(t){this.f=t,this.a=[],this.c={}}var R={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},U={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},J={i:"i",italic:"i",n:"n",normal:"n"},Q=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function V(t,n){this.c=t,this.a=n}var X={Arimo:!0,Cousine:!0,Tinos:!0};function Y(t,n){this.c=t,this.a=n}function Z(t,n){this.c=t,this.f=n,this.a=[]}V.prototype.load=function(t){var n=new v,i=this.c,e=new G(this.a.api,l(i),this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(e,o);var a=new K(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s,r,c=e[1],h=[];if(c)for(var f=(c=c.split(",")).length,l=0;l<f;l++){(r=!(r=c[l]).match(/^[\w-]+$/)||null==(s=Q.exec(r.toLowerCase()))?"":[r=null==(r=s[2])||""==r?"n":J[r],s=null==(s=s[1])||""==s?"4":U[s]||(isNaN(s)?"4":s.substr(0,1))].join(""))&&h.push(r)}0<h.length&&(a=h),3==e.length&&(h=[],0<(e=(e=e[2])?e.split(","):h).length&&(e=R[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=R[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new b(o,a[e]))}}(a),u(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),m(n)),w(n,function(){t(a.a,a.c,X)})},Y.prototype.load=function(s){var t=this.a.id,r=this.c.m;t?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",function(t){if(t)s([]);else if(r.Typekit&&r.Typekit.config&&r.Typekit.config.fn){t=r.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var e=t[i],o=t[i+1],a=0;a<o.length;a++)n.push(new b(e,o[a]));try{r.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}s(n)}},2e3):s([])},Z.prototype.load=function(h){var t,n=this.f.id,i=this.c.m,f=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(t,n){for(var i,e,o,a,s=0,r=n.fonts.length;s<r;++s){var c=n.fonts[s];f.a.push(new b(c.name,(i="font-weight:"+c.weight+";font-style:"+c.style,a=o=e=void 0,e=4,o="n",a=null,i&&((a=i.match(/(normal|oblique|italic)/i))&&a[1]&&(o=a[1].substr(0,1).toLowerCase()),(a=i.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?e=7:/[1-9]00/.test(a[1])&&(e=parseInt(a[1].substr(0,1),10)))),o+e)))}h(f.a)},g(this.c,l(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+((t=this.c).m.location.hostname||t.a.location.hostname)+"/"+n+".js",function(t){t&&h([])})):h([])};var tt=new t(window);tt.a.c.custom=function(t,n){return new z(n,t)},tt.a.c.fontdeck=function(t,n){return new Z(n,t)},tt.a.c.monotype=function(t,n){return new M(n,t)},tt.a.c.typekit=function(t,n){return new Y(n,t)},tt.a.c.google=function(t,n){return new V(n,t)};var nt={load:p(tt.load,tt)};"function"==typeof define&&define.amd?define(function(){return nt}):"undefined"!=typeof module&&module.exports?module.exports=nt:(window.WebFont=nt,window.WebFontConfig&&tt.load(window.WebFontConfig))}();
function gtag(){dataLayer.push(arguments)}WebFont.load({google:{families:["https://fonts.googleapis.com/css2?family=Passion+One&family=Poppins:wght@300;400;500&display=swap&subset=latin-ext"]}}),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-67DGC1MGCF");