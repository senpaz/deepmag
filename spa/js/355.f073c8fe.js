"use strict";(self["webpackChunkdeepmag"]=self["webpackChunkdeepmag"]||[]).push([[355],{4477:(e,i,s)=>{s.r(i),s.d(i,{default:()=>A});var a=s(3673),r=s(2323);const l=e=>((0,a.dD)("data-v-f591c112"),e=e(),(0,a.Cn)(),e),o={class:"favorites-wrapper container"},t={class:"breadcrumbs"},c={class:"favorites"},d={class:"favorites__header"},n=l((()=>(0,a._)("h2",null,"Избранное",-1))),p={class:"favorites__body"},_={class:"favorites__list"},u={class:"favorites__size-wrapper"},v={class:"favorites__size"},m=["onClick"],C=["onClick"],g=["onClick"],k=["onClick"],z=["onClick"],f=["onClick"];function b(e,i,s,l,b,w){const h=(0,a.up)("q-icon"),T=(0,a.up)("q-breadcrumbs-el"),L=(0,a.up)("q-breadcrumbs"),M=(0,a.up)("product-card"),S=(0,a.up)("catalog-accordion");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",t,[(0,a.Wm)(L,{gutter:"none"},{separator:(0,a.w5)((()=>[(0,a.Wm)(h,{size:"1.5em",name:"chevron_right",color:"primary",dense:""})])),default:(0,a.w5)((()=>[(0,a.Wm)(T,{to:"/",label:"Главная"}),(0,a.Wm)(T,{label:"Избранное"})])),_:1})]),(0,a._)("section",c,[(0,a._)("div",d,[n,(0,a._)("button",{onClick:i[0]||(i[0]=e=>w.goTo("/catalog"))},"Продолжить покупки")]),(0,a._)("div",p,[(0,a._)("ul",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.favoritesList,((e,i)=>((0,a.wg)(),(0,a.iD)("li",{key:i},[(0,a.Wm)(M,{imgageUrl:e.imgageUrl,prodTitle:e.prodTitle,prodMark:e.prodMark,isFavorite:e.isFavorite,isSale:e.sale,isNew:e.new},null,8,["imgageUrl","prodTitle","prodMark","isFavorite","isSale","isNew"]),(0,a._)("div",u,[(0,a.Wm)(S,{title:b.mapSizes[e.size],sizes:!0,class:"mt-27"},{default:(0,a.w5)((()=>[(0,a._)("ul",v,[(0,a._)("li",{class:(0,r.C_)({active:1===e.size}),onClick:i=>e.size=1},"XS",10,m),(0,a._)("li",{class:(0,r.C_)({active:2===e.size}),onClick:i=>e.size=2},"S",10,C),(0,a._)("li",{class:(0,r.C_)({active:3===e.size}),onClick:i=>e.size=3},"M",10,g),(0,a._)("li",{class:(0,r.C_)({active:4===e.size}),onClick:i=>e.size=4},"L",10,k),(0,a._)("li",{class:(0,r.C_)({active:5===e.size}),onClick:i=>e.size=5},"XL",10,z)])])),_:2},1032,["title"])]),(0,a._)("button",{class:(0,r.C_)({disabled:0===e.size}),onClick:i=>w.handleAddToCart(e)},"В корзину",10,f)])))),128))])])])])}var w=s(605),h=s(3581);const T={components:{ProductCard:w.Z,CatalogAccordion:h.Z},data(){return{active:null,favoritesList:[{imgageUrl:s(3518),prodTitle:"Юбка миди",prodMark:"LOVE REPUBLIC",sale:!0,size:0},{imgageUrl:s(3518),prodTitle:"Юбка миди",prodMark:"GANT",isFavorite:!0,new:!0,size:0},{imgageUrl:s(3518),prodTitle:"Юбка миди",prodMark:"CALVIN KLEIN",sale:!0,size:0},{imgageUrl:s(3518),prodTitle:"Юбка миди",prodMark:"HIM",new:!0,size:0}],mapSizes:["Выбрать размер","XS","S","M","L","XL"]}},methods:{goTo(e){this.$router.push(e)},handleAddToCart(e){0!==e.size&&this.$router.push("/cart")}}};var L=s(4260),M=s(1481),S=s(4554),U=s(5926),I=s(7518),W=s.n(I);const Z=(0,L.Z)(T,[["render",b],["__scopeId","data-v-f591c112"]]),A=Z;W()(T,"components",{QBreadcrumbs:M.Z,QIcon:S.Z,QBreadcrumbsEl:U.Z})}}]);