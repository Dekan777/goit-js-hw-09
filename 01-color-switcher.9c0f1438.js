const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),colorBody:document.body};let o,n=!1;function e(){t.colorBody.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startBtn.addEventListener("click",(function(){n||(n=!0,t.startBtn.disabled=!0,o=setInterval(e,1e3))})),t.stopBtn.addEventListener("click",(function(){n&&(n=!1,t.startBtn.disabled=!1,clearInterval(o))}));
//# sourceMappingURL=01-color-switcher.9c0f1438.js.map
