import{f as i,i as d}from"./vendor-ff3e2015.js";const o=document.querySelector("button[data-start]"),m=document.querySelector("span[data-days"),l=document.querySelector("span[data-hours"),h=document.querySelector("span[data-minutes"),f=document.querySelector("span[data-seconds"),y=document.querySelectorAll(".value"),n=new Date;let s=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t=t[0],n.getTime()<t.getTime()?(s=t.getTime()-n.getTime(),o.disabled=!1):(o.disabled=!0,d.show({message:"Please choose a date in the future",messageColor:"white",backgroundColor:"#e34234",position:"topRight"}))}};i("#datetime-picker",C);function p(t){const a=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:u,seconds:c}}setTimeout(()=>{const t=p(s);m.textContent=t.days,l.textContent=t.hours,h.textContent=t.minutes,f.textContent=t.seconds,y.forEach(e=>{e.textContent=e.textContent.length<2?"0"+e.textContent:e.textContent})},8e3);
//# sourceMappingURL=1-timer-e37c70f4.js.map