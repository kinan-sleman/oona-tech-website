import{j as m,l as w}from"./navigation.js";function u(r){const{effect:s,swiper:e,on:a,setTranslate:i,setTransition:t,overwriteParams:l,perspective:c,recreateShadows:d,getEffectParams:p}=r;a("beforeInit",()=>{if(e.params.effect!==s)return;e.classNames.push(`${e.params.containerModifierClass}${s}`),c&&c()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const n=l?l():{};Object.assign(e.params,n),Object.assign(e.originalParams,n)}),a("setTranslate",()=>{e.params.effect===s&&i()}),a("setTransition",(n,f)=>{e.params.effect===s&&t(f)}),a("transitionEnd",()=>{if(e.params.effect===s&&d){if(!p||!p().slideShadows)return;e.slides.forEach(n=>{n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),d()}});let o;a("virtualUpdate",()=>{e.params.effect===s&&(e.slides.length||(o=!0),requestAnimationFrame(()=>{o&&e.slides&&e.slides.length&&(i(),o=!1)}))})}function b(r,s){const e=m(s);return e!==s&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function g(r,s,e){const a=`swiper-slide-shadow${e?`-${e}`:""}${r?` swiper-slide-shadow-${r}`:""}`,i=m(s);let t=i.querySelector(`.${a.split(" ").join(".")}`);return t||(t=w("div",a.split(" ")),i.append(t)),t}export{b as a,g as c,u as e};
