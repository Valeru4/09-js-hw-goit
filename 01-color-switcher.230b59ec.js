const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.start.addEventListener("click",(function(){t.start.disabled=!0,e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=e}),1e3)})),t.stop.addEventListener("click",(function(){t.start.disabled=!1,clearInterval(e)}));let e=null;
//# sourceMappingURL=01-color-switcher.230b59ec.js.map
