import{f as m,i as f}from"./vendor-ff3e2015.js";const s=document.querySelector("button[data-start]"),u=document.querySelector("#datetime-picker"),h=document.querySelector("span[data-days"),y=document.querySelector("span[data-hours"),C=document.querySelector("span[data-minutes"),p=document.querySelector("span[data-seconds"),g=document.querySelectorAll(".value"),a=1e3;let c=null,S=new Date;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t=t[0],c=t,S.getTime()<t.getTime()?s.disabled=!1:(s.disabled=!0,f.show({message:"Please choose a date in the future",messageColor:"white",backgroundColor:"#e34234",position:"topRight"}))}};m("#datetime-picker",x);s.addEventListener("click",t=>{T(),s.disabled=!0,s.style.cursor="not-allowed",u.disabled=!0,u.style.cursor="not-allowed"});function T(){const t=setInterval(()=>{let r=new Date,o=c.getTime()-r.getTime(),e=b(o);h.textContent=e.days,y.textContent=e.hours,C.textContent=e.minutes,p.textContent=e.seconds,g.forEach(n=>{n.textContent=n.textContent.length<2?"0"+n.textContent:n.textContent}),o<=1e3&&clearInterval(t)},a)}function b(t){const r=a*60,o=r*60,e=o*24,n=Math.floor(t/e),i=Math.floor(t%e/o),l=Math.floor(t%e%o/r),d=Math.floor(t%e%o%r/a);return{days:n,hours:i,minutes:l,seconds:d}}
//# sourceMappingURL=1-timer-91834f94.js.map