parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sByI":[function(require,module,exports) {
(()=>{const e={openMenuBtn:document.querySelector(".open-menu-btn"),closeMenuBtn:document.querySelector(".close-menu-btn"),closeMenuHome:document.querySelector(".close-home"),closeMenuAbout:document.querySelector(".close-about"),closeMenuHow:document.querySelector(".close-how"),closeMenuProducts:document.querySelector(".close-products"),closeMenuContact:document.querySelector(".close-contact"),menu:document.querySelector(".menu-container")};function c(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",c),e.closeMenuBtn.addEventListener("click",c),e.closeMenuHome.addEventListener("click",c),e.closeMenuAbout.addEventListener("click",c),e.closeMenuHow.addEventListener("click",c),e.closeMenuContact.addEventListener("click",c),e.closeMenuProducts.addEventListener("click",c)})();
},{}]},{},["sByI"], null)
//# sourceMappingURL=/ice-cream/mobile-menu.9150c650.js.map