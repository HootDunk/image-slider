(()=>{"use strict";function e(e,t){this.id=e,this.path=t,this.active=!1}const t=[new e(1,"assets/img1.jpg"),new e(2,"assets/img2.jpg"),new e(3,"assets/img3.jpg"),new e(4,"assets/img4.jpg"),new e(5,"assets/img5.jpg")],a=e=>{t.forEach((t=>{t.id==e?t.active=!0:t.active=!1}))},i=()=>{for(let e=0;e<t.length;e++)if(1==t[e].active)return void(e==t.length-1?(t[e].active=!1,t[0].active=!0):(t[e+1].active=!0,t[e].active=!1))},c=document.getElementById("image-container"),n=document.querySelector(".dots-container"),s=()=>{for(let e=0;e<t.length;e++)if(!0===t[e].active)return void(c.innerHTML=`<img class="animated fadeIn" src='${t[e].path}' alt=''>`)},r=()=>{const e=document.querySelectorAll(".dot");for(let a=0;a<t.length;a++)1==t[a].active?e[a].classList.toggle("active"):e[a].className="dot"};a(1),s(),(()=>{n.innerHTML="";let e="";t.forEach((t=>{1==t.active?e+=`<span data-id="${t.id}" class="dot active"></span>`:e+=`<span data-id="${t.id}" class="dot"></span>`})),n.innerHTML=e})(),document.querySelector(".next").addEventListener("click",(()=>{i(),s(),r()})),document.querySelector(".prev").addEventListener("click",(()=>{(()=>{for(let e=0;e<t.length;e++)if(1==t[e].active)return void(0==e?(t[e].active=!1,t[t.length-1].active=!0):(t[e-1].active=!0,t[e].active=!1))})(),s(),r()})),Array.from(document.querySelectorAll(".dot")).forEach((e=>{e.addEventListener("click",(e=>{a(e.target.dataset.id),s(),r()}))})),setInterval((()=>{i(),s(),r()}),5e3)})();