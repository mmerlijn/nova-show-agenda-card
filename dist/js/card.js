(()=>{"use strict";var e,t={543:()=>{const e=Vue;var t={class:"block font-medium text-sm text-gray-700"},n={key:0},r={key:1};const o={__name:"InputLabel",props:{value:String},setup:function(o){return function(l,a){return(0,e.openBlock)(),(0,e.createElementBlock)("label",t,[o.value?((0,e.openBlock)(),(0,e.createElementBlock)("span",n,(0,e.toDisplayString)(o.value),1)):((0,e.openBlock)(),(0,e.createElementBlock)("span",r,[(0,e.renderSlot)(l.$slots,"default")]))])}}};var l={key:0,class:"flex justify-between w-full font-semibold"},a={class:"bg-gray-300 w-full flex justify-between"},c={key:0},u={key:1},i={class:"bg-gray-100 w-full flex justify-between"},s={key:0},m={key:1},d={key:1,class:"flex justify-between w-full font-semibold"},v={class:"bg-gray-300 w-full flex justify-start"},f={key:0},p={key:1,class:"text-gray-300"},k={class:"bg-gray-100 w-full flex justify-end"},B={key:0},g={key:1,class:"text-gray-100"};const y={__name:"Timebar",props:{min:{type:Number,default:480},max:{type:Number,default:1020}},setup:function(t){var n=t,r=(0,e.ref)({start_hour:7,end_hour:17,number_of_hours:10,bar_width:1e3}),o=(0,e.ref)(null),y=function(){r.value.start_hour=Math.floor(n.min/60),r.value.end_hour=Math.ceil(n.max/60),r.value.number_of_hours=r.value.end_hour-r.value.start_hour,r.value.show_halfs=o.value.clientWidth/r.value.number_of_hours>100},E=function(){y()};return(0,e.onMounted)((function(){y(),window.addEventListener("resize",E)})),(0,e.onBeforeUnmount)((function(){window.removeEventListener("resize",E)})),function(t,n){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",{ref_key:"daddy",ref:o},null,512),r.value.show_halfs?((0,e.openBlock)(),(0,e.createElementBlock)("div",l,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.value.number_of_hours,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",a,[t>1?((0,e.openBlock)(),(0,e.createElementBlock)("span",c,"00")):((0,e.openBlock)(),(0,e.createElementBlock)("span",u," ")),(0,e.createElementVNode)("span",null,(0,e.toDisplayString)(t+r.value.start_hour-1)+":",1)]),(0,e.createElementVNode)("div",i,[n[0]||(n[0]=(0,e.createElementVNode)("span",null,"30",-1)),t<r.value.number_of_hours?((0,e.openBlock)(),(0,e.createElementBlock)("span",s,(0,e.toDisplayString)(t+r.value.start_hour)+":",1)):((0,e.openBlock)(),(0,e.createElementBlock)("span",m," "))])],64)})),256))])):((0,e.openBlock)(),(0,e.createElementBlock)("div",d,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.value.number_of_hours,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",v,[t>1?((0,e.openBlock)(),(0,e.createElementBlock)("span",f,"00")):((0,e.openBlock)(),(0,e.createElementBlock)("span",p,"00"))]),(0,e.createElementVNode)("div",k,[t<r.value.number_of_hours?((0,e.openBlock)(),(0,e.createElementBlock)("span",B,(0,e.toDisplayString)(t+r.value.start_hour)+":",1)):((0,e.openBlock)(),(0,e.createElementBlock)("span",g,"1"))])],64)})),256))]))],64)}}};var E={class:"md:flex"},_=["title"],h={class:"md:flex"},b={class:"w-24"},w={class:"relative h-3 z-0 w-full mt-1 bg-blue-50"},x=["title"],N=["title"];const V={__name:"ViewBar",props:{min:{type:Number,default:480},max:{type:Number,default:1020},activities:{type:Object,required:!0},date:{type:String,required:!0},room:{type:Object}},setup:function(t){var n=t,r=(0,e.ref)({start_time:7,end_time:17,factor:1}),o=(0,e.ref)(null),l=function(){r.value.start_time=60*Math.floor(n.min/60),r.value.end_time=60*Math.ceil(n.max/60),r.value.factor=o.value.clientWidth/(r.value.end_time-r.value.start_time)},a=function(){l()};(0,e.watch)(o,(function(){l()}),{deep:!0}),(0,e.onMounted)((function(){l(),window.addEventListener("resize",a)})),(0,e.onBeforeUnmount)((function(){window.removeEventListener("resize",a)}));var c=function(e){var t=Math.floor(e/60),n=e-60*t;return t+":"+(n<10?"0"+n:n)},u=function(e){return(e-r.value.start_time)*r.value.factor+"px"},i=function(e){return(e[1]-e[0])*r.value.factor+"px"},s=function(e){return c(e[0])+"-"+c(e[1])+" "};return function(n,r){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",E,[r[0]||(r[0]=(0,e.createElementVNode)("div",{class:"w-24 font-semibold"},"Afspraken",-1)),(0,e.createElementVNode)("div",{class:"relative h-6 z-0 w-full mt-1 bg-indigo-50",ref_key:"daddy",ref:o},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.activities,(function(n,r){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n,(function(n,r){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.times,(function(r,o){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{key:"t"+o+"_"+r[0],style:(0,e.normalizeStyle)({marginLeft:u(r[0]),width:i(r),backgroundColor:n.color}),title:"Ingepland\n"+s(r)+n.name+"\nKamer: "+t.room.name,class:"absolute z-20 rounded h-5"},"  ",12,_)})),128))],64)})),256))],64)})),256))],512)]),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.activities,(function(n,r){return(0,e.openBlock)(),(0,e.createElementBlock)("div",h,[(0,e.createElementVNode)("div",b,(0,e.toDisplayString)(n.activity.name),1),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n,(function(n,r){return(0,e.openBlock)(),(0,e.createElementBlock)("div",w,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.clickTimes,(function(o,l){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{key:"c"+l+"_"+r+"_"+o[0],style:(0,e.normalizeStyle)({marginLeft:u(o[0]),width:i(o),backgroundColor:n.color}),title:s(o)+n.name+"\nKamer: "+t.room.name,class:"absolute z-10 rounded h-3"},"   ",12,x)})),128)),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.walkInTimes,(function(o,l){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{key:"w"+l+"_"+r+"_"+o[0],style:(0,e.normalizeStyle)({marginLeft:u(o[0]),width:i(o)}),title:s(o)+n.name+"\nKamer: "+t.room.name+"\nInloop geen afspraak voor nodig",class:"absolute z-10 bg-yellow-200 rounded h-3"},"  ",12,N)})),128))])})),256))])})),256))],64)}}};var L={class:"p-2"},j={class:"my-2 max-h-80 overflow-auto px-2"},F={class:"border border-gray-300 rounded p-2 my-4 shadow-lg"},O={class:"md:flex"},S={class:"w-24 text-sm font-bold"},z={class:"grow"};const C={__name:"Card",props:{card:Object,resource:Object,resourceId:Number,resourceName:String},setup:function(t){var n=(0,e.ref)(0),r=(0,e.ref)({}),l=(0,e.ref)({}),a=t;(0,e.onMounted)((function(){c()}));var c=function(){Nova.request().get("/nova-vendor/nova-show-agenda-card/show-planning/"+a.resourceId+"/"+n.value).then((function(e){r.value=e.data.agenda,l.value=e.data.room}))};return function(t,a){var u=(0,e.resolveComponent)("Card",!0);return(0,e.openBlock)(),(0,e.createBlock)(u,null,{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",L,[(0,e.createVNode)(o,{for:"period_"},{default:(0,e.withCtx)((function(){return a[1]||(a[1]=[(0,e.createTextVNode)("Andere periode")])})),_:1}),(0,e.withDirectives)((0,e.createElementVNode)("select",{id:"period_",class:"rounded py-1 text-sm px-2 border border-gray-400 bg-gray-50","onUpdate:modelValue":a[0]||(a[0]=function(e){return n.value=e}),onChange:c},a[2]||(a[2]=[(0,e.createElementVNode)("option",{value:"0"},"Deze week",-1),(0,e.createElementVNode)("option",{value:"1"},"Volgende week",-1),(0,e.createElementVNode)("option",{value:"2"},"Twee weken verder",-1),(0,e.createElementVNode)("option",{value:"3"},"Drie weken verder",-1),(0,e.createElementVNode)("option",{value:"4"},"Vier weken verder",-1),(0,e.createElementVNode)("option",{value:"5"},"Vijf weken verder",-1)]),544),[[e.vModelSelect,n.value]])]),(0,e.createElementVNode)("div",j,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.value,(function(t,n){return(0,e.openBlock)(),(0,e.createElementBlock)("div",F,[(0,e.createElementVNode)("div",O,[(0,e.createElementVNode)("div",S,(0,e.toDisplayString)(t.day_text.substring(0,2)+" "+n.substring(6,8)+"-"+n.substring(4,6)),1),(0,e.createElementVNode)("div",z,[(0,e.createVNode)(y,{min:l.value.from,max:l.value.to},null,8,["min","max"])])]),(0,e.createVNode)(V,{date:n,activities:t.activities,min:l.value.from,max:l.value.to,room:l.value},null,8,["date","activities","min","max","room"])])})),256))])]})),_:1})}}};Nova.booting((function(e,t){e.component("nova-show-agenda-card",C)}))},947:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,l]=e[s],c=!0,u=0;u<n.length;u++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,l<a&&(a=l));if(c){e.splice(s--,1);var i=o();void 0!==i&&(t=i)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,o,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={172:0,405:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,c,u]=n,i=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var s=u(r)}for(t&&t(n);i<a.length;i++)l=a[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},n=self.webpackChunkmmerlijn_nova_show_agenda_card=self.webpackChunkmmerlijn_nova_show_agenda_card||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[405],(()=>r(543)));var o=r.O(void 0,[405],(()=>r(947)));o=r.O(o)})();