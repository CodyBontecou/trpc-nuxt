import{b as m,o as t,f as o,h as r,k as l,j as a,F as p,c,w as y,i as f,t as i,p as g,m as h}from"./entry.5c8819da.js";import x from"./ButtonLink.2f82fed5.js";import{_ as k}from"./Terminal.vue_vue_type_script_setup_true_lang.d64be369.js";import"./index.cb3c216d.js";const _={class:"py-20 sm:py-24 lg:py-32"},$={class:"grid gap-8 lg:grid-cols-3"},w={class:"lg:col-span-2"},v={key:0,class:"mb-2 text-center lg:text-left"},B={key:1,class:"text-4xl font-extrabold tracking-tight text-center u-text-gray-900 sm:text-5xl lg:text-left lg:text-6xl"},b={key:2,class:"max-w-3xl mt-4 text-lg text-center u-text-gray-500 lg:text-left"},q={key:3,class:"mt-6"},C={class:"flex flex-col items-center justify-center gap-4 mt-6 sm:mt-10 sm:flex-row sm:gap-6 lg:justify-start"},N=["href"],T=m({__name:"BlockHero",props:{cta:{type:Array,required:!1},secondary:{type:Array,required:!1},snippet:{type:String,required:!1},video:{type:Array,required:!1}},setup(s){return(e,S)=>{const n=h,u=x,d=k;return t(),o("section",_,[r("div",$,[r("div",w,[e.$slots.top?(t(),o("p",v,[l(n,{use:e.$slots.top,unwrap:"p"},null,8,["use"])])):a("",!0),e.$slots.title?(t(),o("h1",B,[l(n,{use:e.$slots.title,unwrap:"p"},null,8,["use"])])):a("",!0),e.$slots.description?(t(),o("p",b,[l(n,{use:e.$slots.description,unwrap:"p"},null,8,["use"])])):a("",!0),e.$slots.extra?(t(),o("div",q,[l(n,{use:e.$slots.extra,unwrap:"p"},null,8,["use"])])):a("",!0),r("div",C,[e.$slots.actions?(t(),c(n,{key:1,use:e.$slots.actions,unwrap:"p"},null,8,["use"])):(t(),o(p,{key:0},[s.cta?(t(),c(u,{key:0,class:"!mb-0",bold:"",size:"large",href:s.cta[1]},{default:y(()=>[f(i(s.cta[0]),1)]),_:1},8,["href"])):a("",!0),s.secondary?(t(),o("a",{key:1,href:s.secondary[1],class:"py-px font-medium u-text-gray-500 hover:u-text-gray-700"},i(s.secondary[0]),9,N)):a("",!0)],64))])]),g(e.$slots,"right",{},()=>[s.snippet?(t(),c(d,{key:0,content:s.snippet},null,8,["content"])):a("",!0)])])])}}});export{T as default};