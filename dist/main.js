(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var c=a.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"fc6380d88b355659ac6ae7023ab3b79c.jpg",a=e.p+"c8f8c359aa4b93a31ee849b6fc023706.jpg",c=e.p+"ef77188a4c722d261a63eeda65d39d1a.jpg",i=e.p+"468e69a1d8a2b9077c4e328cbfb78556.jpg",r=e.p+"aaa5a87fc234f79334ad9c8959c342d9.jpg";function n(e,t){this.id=e,this.path=t,this.active=!1}const o=[new n(1,t),new n(2,a),new n(3,c),new n(4,i),new n(5,r)],d=e=>{o.forEach((t=>{t.id==e?t.active=!0:t.active=!1}))},l=()=>{for(let e=0;e<o.length;e++)if(1==o[e].active)return void(e==o.length-1?(o[e].active=!1,o[0].active=!0):(o[e+1].active=!0,o[e].active=!1))},s=document.getElementById("image-container"),p=document.querySelector(".dots-container"),v=()=>{for(let e=0;e<o.length;e++)if(!0===o[e].active)return void(s.innerHTML=`<img class="animated fadeIn" src='${o[e].path}' alt=''>`)},u=()=>{const e=document.querySelectorAll(".dot");for(let t=0;t<o.length;t++)1==o[t].active?e[t].classList.toggle("active"):e[t].className="dot"};d(1),v(),(()=>{p.innerHTML="";let e="";o.forEach((t=>{1==t.active?e+=`<span data-id="${t.id}" class="dot active"></span>`:e+=`<span data-id="${t.id}" class="dot"></span>`})),p.innerHTML=e})(),document.querySelector(".next").addEventListener("click",(()=>{l(),v(),u()})),document.querySelector(".prev").addEventListener("click",(()=>{(()=>{for(let e=0;e<o.length;e++)if(1==o[e].active)return void(0==e?(o[e].active=!1,o[o.length-1].active=!0):(o[e-1].active=!0,o[e].active=!1))})(),v(),u()})),Array.from(document.querySelectorAll(".dot")).forEach((e=>{e.addEventListener("click",(e=>{d(e.target.dataset.id),v(),u()}))})),setInterval((()=>{l(),v(),u()}),5e3)})();