!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.start.addEventListener("click",(function(){t.start.disabled=!0,a=setInterval((function(){var a="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.body.style.backgroundColor=a}),1e3)})),t.stop.addEventListener("click",(function(){t.start.disabled=!1,clearInterval(a)}));var a=null}();
//# sourceMappingURL=01-color-switcher.cb043b1e.js.map