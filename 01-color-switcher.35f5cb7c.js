const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;function n(t){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=true,t.btnStop.disabled=!1,n(t.body),e=setInterval((()=>{n(t.body)}),1e3)})),t.btnStop.addEventListener("click",(function(n){t.btnStart.disabled=!1,t.btnStop.disabled=true,clearInterval(e)})),t.btnStop.disabled=true;
//# sourceMappingURL=01-color-switcher.35f5cb7c.js.map
