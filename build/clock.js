"use strict";var clock=document.getElementsByClassName("MobileClockTimer");function Clock(){var t=new Date,e=t.getHours().toString(),n=t.getMinutes().toString(),o=t.getSeconds().toString();e.length<2&&(e="0"+e),n.length<2&&(n="0"+n),o.length<2&&(o="0"+o);for(var l=e+":"+n+":"+o,c=0;c<clock.length;c++)clock[c].textContent=l}Clock(),setInterval(Clock,1e3);