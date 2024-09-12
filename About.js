import{r as p,j as t,A as n}from"./index.js";import{C as h}from"./ContactUs.js";import{H as b,F as j}from"./Footer.js";import{f}from"./functions.js";import{s as c}from"./service1.js";import{T as w}from"./TeamMembers.js";import"./navigation.js";const v="data:image/svg+xml,%3csvg%20width='4'%20height='33'%20viewBox='0%200%204%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%201.5V31'%20stroke='%2300A7E1'%20stroke-width='3'%20stroke-linecap='round'%20/%3e%3c/svg%3e",N="/Oona-Website/assets/aboutImg.jpg";function _({setUsedLang:e,useLang:r,direction:s}){var o,d,a;const[i,l]=p.useState(!1);return p.useEffect(()=>{const x=new Image;x.src="/assets/about_us_bg.jpg",x.onload=()=>{l(!0)}},[]),t.jsxs("section",{className:"relative",children:[t.jsx(h,{top:"top-[44%]",useLang:r}),t.jsxs("section",{className:`h-[70vh] md:h-[50vh] landing_about_section md:pb-0 pb-12 !text-white ${i?"loaded !bg-inherit !opacity-100 !filter-none":""}`,style:{backgroundImage:"url(/assets/about_us_bg.jpg"},children:[t.jsx(b,{light:!0,direction:s,setUsedLang:e,useLang:r}),t.jsx("div",{className:`flex${s?" px-16 md:px-[78px] lg:px-[166px]":" px-14 md:px-[107px] lg:px-[200px]"} lg:pt-5 flex-col items-center justify-center h-full md:flex-row md:justify-start md:items-start`,children:t.jsxs("div",{className:"min-w-[50%] lg:w-[50%] flex flex-col gap-5",children:[t.jsx("h1",{className:"text-4xl font-bold",children:(o=r==null?void 0:r.about)==null?void 0:o.title}),t.jsx("p",{className:"inline-block word-wrap text-white",children:f((d=r==null?void 0:r.about)==null?void 0:d.description)})]})})]}),t.jsxs("section",{className:"!mt-5 md:h-[100vh] custom_container sm:custom_container 2xl:large_container flex flex-col md:flex-row justify-center items-center gap-7",children:[t.jsx("div",{className:"!mt-4 md:!mt-[160px] md:w-[50%] flex items-center justify-center self-center",children:t.jsx("img",{src:N,alt:""})}),t.jsx("div",{className:"md:w-[50%] flex items-center justify-center self-start",children:t.jsx("div",{className:"rounded-[15px] shadow-lg px-3 py-10 bg-white",children:f((a=r==null?void 0:r.about)==null?void 0:a.paragraph)})})]})]})}function m({title:e,description:r,borderColor:s,isColorAboveIcon:i=!1,colorAboveIcon:l="",direction:o}){return t.jsxs("div",{className:`service_card relative px-5 pt-4 pb-8 bg-white ${o?"text-left":"text-right"} border ${s} md:w-[326px] 2xl:w-full`,children:[t.jsx("img",{className:`absolute top-4 ${o?"left-[-1px]":"right-[-1px]"} `,src:v,alt:""}),i?t.jsx("span",{className:`absolute top-0 right-[40%] h-[3px] w-[70px] bg-[${l}]`}):"",t.jsx("h3",{className:"text-base text-[#333232] font-bold mb-2",children:e}),t.jsx("p",{className:"text-[#787878] font-normal text-sm leading-[22px]",children:r})]})}function y({useLang:e,direction:r}){var s,i,l,o,d,a;return t.jsxs("div",{className:"my-5 md:!mb-20 md:!mt-20 flex flex-col gap-5 md:flex-row md:justify-between md:items-center custom_container sm:custom_container 2xl:large_container",children:[t.jsx(m,{borderColor:"border-[]",img:c,title:(s=e==null?void 0:e.about)==null?void 0:s.cards[0].title,description:(i=e==null?void 0:e.about)==null?void 0:i.cards[0].description,direction:r}),t.jsx(m,{borderColor:"border-[]",img:c,title:(l=e==null?void 0:e.about)==null?void 0:l.cards[1].title,description:(o=e==null?void 0:e.about)==null?void 0:o.cards[1].description,direction:r}),t.jsx(m,{borderColor:"border-[]",img:c,title:(d=e==null?void 0:e.about)==null?void 0:d.cards[2].title,description:(a=e==null?void 0:e.about)==null?void 0:a.cards[2].description,direction:r})]})}function T({useLang:e,setUsedLang:r,direction:s}){return t.jsx(n,{children:t.jsxs("section",{className:" overflow-hidden",dir:`${s?"ltr":"rtl"}`,children:[t.jsx("div",{children:t.jsx(_,{setUsedLang:r,useLang:e,direction:s})}),t.jsx("div",{"data-aos":"fade-up","data-aos-duration":"1500",children:t.jsx(y,{useLang:e,direction:s})}),t.jsx("div",{"data-aos":"fade-up","data-aos-duration":"1500",id:"team",children:t.jsx(w,{direction:s,useLang:e})}),t.jsx("div",{"data-aos":"fade-up","data-aos-duration":"1500",children:t.jsx(j,{useLang:e,direction:s})})]})})}export{T as default};
