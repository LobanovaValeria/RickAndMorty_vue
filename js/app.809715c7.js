(function(){"use strict";var e={9408:function(e,t,a){var n=a(5130),r=a(6768);const o={class:"container"};function s(e,t,a,n,s,c){const i=(0,r.g2)("sub-header"),u=(0,r.g2)("content"),l=(0,r.g2)("pagination");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(i),(0,r.bF)(u,{characters:s.characters,totalPage:s.totalPage,onQueryParameters:c.onFilter,isLoading:s.isLoading},null,8,["characters","totalPage","onQueryParameters","isLoading"]),s.totalPage>1?((0,r.uX)(),(0,r.Wv)(l,{key:0,totalPage:s.totalPage,onChangePageNumber:c.onChangePage,currentPage:s.currentPage},null,8,["totalPage","onChangePageNumber","currentPage"])):(0,r.Q3)("",!0)])}var c=a(4232);const i={class:"pagination"},u=["disabled"],l=["disabled"],h=["onClick"],g=["disabled"],d=["disabled"];function p(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=e=>s.changePage(1)),disabled:1===a.currentPage},"First",8,u),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.goToPrevPage&&s.goToPrevPage(...e)),disabled:1===a.currentPage},"←",8,l),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.displayedPageNumbers,(e=>((0,r.uX)(),(0,r.CE)("button",{key:e},[(0,r.Lk)("button",{onClick:t=>s.changePage(e),class:(0,c.C4)({active:e===a.currentPage})},(0,c.v_)(e),11,h)])))),128)),(0,r.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>s.goToNextPage&&s.goToNextPage(...e)),disabled:a.currentPage===a.totalPage},"→",8,g),(0,r.Lk)("button",{onClick:t[3]||(t[3]=e=>s.changePage(a.totalPage)),disabled:a.currentPage===a.totalPage},"Last",8,d)])}var m={data(){return{maxDisplayedPages:5,page:1}},props:{totalPage:Number,currentPage:Number},watch:{currentPage(e){this.$emit("ChangePage",this.currentPage)}},computed:{displayedPageNumbers(){const e=this.totalPage,t=this.currentPage,a=this.maxDisplayedPages;let n=Math.max(1,t-Math.floor(a/2)),r=Math.min(e,n+a-1);return r-n+1<a&&(n=Math.max(1,r-a+1)),Array.from({length:r-n+1},((e,t)=>t+n))}},methods:{goToPrevPage(){this.currentPage>1&&(this.page=this.currentPage-1,this.$emit("changePageNumber",this.page))},goToNextPage(){this.currentPage<this.totalPage&&(this.page=this.currentPage+1,this.$emit("changePageNumber",this.page))},changePage(e){e>=1&&e<=this.totalPage&&(this.page=+e,this.$emit("changePageNumber",this.page))}}},v=a(1241);const P=(0,v.A)(m,[["render",p]]);var f=P;const b={class:"subheader"},y=(0,r.Lk)("h1",{class:"subheader__title"},"Rick and Morty",-1),k=[y];function C(e,t){return(0,r.uX)(),(0,r.CE)("section",b,k)}const L={},S=(0,v.A)(L,[["render",C]]);var _=S;const N={class:"content"},O={key:1},X={key:1};function A(e,t,a,n,o,s){const c=(0,r.g2)("search-form"),i=(0,r.g2)("loading"),u=(0,r.g2)("characters-list");return(0,r.uX)(),(0,r.CE)("section",N,[(0,r.bF)(c,{onQueryParameters:s.nameAndStatus},null,8,["onQueryParameters"]),a.isLoading?((0,r.uX)(),(0,r.Wv)(i,{key:0})):((0,r.uX)(),(0,r.CE)("div",O,[a.characters.length>0?((0,r.uX)(),(0,r.Wv)(u,{key:0,characters:a.characters},null,8,["characters"])):((0,r.uX)(),(0,r.CE)("h3",X,"Not found"))]))])}const E={class:"cards"};function q(e,t,a,n,o,s){const c=(0,r.g2)("character-item");return(0,r.uX)(),(0,r.CE)("div",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.characters,(e=>((0,r.uX)(),(0,r.Wv)(c,{character:e,key:e.id},null,8,["character"])))),128))])}const x={class:"card"},w={class:"card__image"},F=["src"],T={class:"card__about"},$={class:"card__about-name"},j={class:"section"},M=(0,r.Lk)("p",null,"Последнее известное местоположение:",-1),I={class:"section"},Q=(0,r.Lk)("p",null,"Впервые замечен в:",-1);function D(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("article",x,[(0,r.Lk)("div",w,[(0,r.Lk)("img",{src:a.character.image,alt:"Злой Морти"},null,8,F)]),(0,r.Lk)("div",T,[(0,r.Lk)("div",$,[(0,r.Lk)("h2",null,(0,c.v_)(a.character.name),1),(0,r.Lk)("span",null,[(0,r.Lk)("span",null,(0,c.v_)(a.character.status)+" - "+(0,c.v_)(a.character.species),1)])]),(0,r.Lk)("div",j,[M,(0,r.Lk)("span",null,(0,c.v_)(a.character.location.name),1)]),(0,r.Lk)("div",I,[Q,(0,r.Lk)("span",null,(0,c.v_)(a.character.origin.name),1)])])])}var W={props:{character:{type:Object}}};const K=(0,v.A)(W,[["render",D]]);var U=K,B={components:{CharacterItem:U},props:{characters:{type:Array,required:!0}}};const H=(0,v.A)(B,[["render",q]]);var R=H;const V=(0,r.Lk)("h2",null,"Search",-1),z=["value"],G=(0,r.Lk)("option",{disabled:"",value:""},"Select Status",-1),J=["value"];function Y(e,t,a,o,s,i){return(0,r.uX)(),(0,r.CE)("form",{onSubmit:t[3]||(t[3]=(0,n.D$)((()=>{}),["prevent"]))},[V,(0,r.Lk)("input",{value:s.nameCharacter,onInput:t[0]||(t[0]=e=>s.nameCharacter=e.target.value),type:"text",placeholder:"Name",id:"inputName"},null,40,z),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.selectOption=e)},[G,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.options,(e=>((0,r.uX)(),(0,r.CE)("option",{value:e.value},(0,c.v_)(e.label),9,J)))),256))],512),[[n.u1,s.selectOption]]),(0,r.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>i.nameAndStatus&&i.nameAndStatus(...e))},"Применить")],32)}var Z={data(){return{nameCharacter:"",selectOption:"",options:[{value:"",label:"Status not selected"},{value:"alive",label:"Alive"},{value:"dead",label:"Dead"},{value:"unknown",label:"Unknown"}]}},methods:{nameAndStatus(){this.$emit("queryParameters",this.nameCharacter,this.selectOption)}}};const ee=(0,v.A)(Z,[["render",Y]]);var te=ee;const ae={class:"loading"},ne=(0,r.Lk)("h2",null,"Идет загрузка...",-1),re=[ne];function oe(e,t){return(0,r.uX)(),(0,r.CE)("div",ae,re)}const se={},ce=(0,v.A)(se,[["render",oe]]);var ie=ce,ue={components:{CharactersList:R,SearchForm:te,Loading:ie},props:{characters:{type:Array,required:!0},isLoading:Boolean},methods:{nameAndStatus(e,t){this.$emit("queryParameters",e,t)}}};const le=(0,v.A)(ue,[["render",A]]);var he=le,ge=a(4373),de={components:{Content:he,SubHeader:_,Pagination:f},data(){return{characters:[],isLoading:!1,totalPage:1,currentPage:1,queryName:"",queryStatus:""}},methods:{onChangePage(e){this.currentPage=e,this.fetchCharacters(e)},onFilter(e,t){this.queryName=e,this.queryStatus=t,this.fetchCharacters(1,this.queryName,this.queryStatus)},async fetchCharacters(e,t,a){let n=void 0===e?this.changePage:e;try{this.isLoading=!0;const e=await(0,ge.A)({method:"POST",url:"https://rickandmortyapi.com/graphql",data:{query:`{\n              characters (page:${n}, filter: {name: "${this.queryName}", status: "${this.queryStatus}"})  {\n                info {\n                pages\n                }\n                results {\n                id\n                name\n                status\n                species\n                origin {\n                name\n                }\n                location {\n                name\n                }\n                image\n                }\n              }\n            }`}});this.characters=e.data.data.characters.results,this.totalPage=e.data.data.characters.info.pages}catch(r){console.log(r)}finally{this.isLoading=!1}}},mounted(){this.fetchCharacters(this.currentPage)}};const pe=(0,v.A)(de,[["render",s]]);var me=pe;(0,n.Ef)(me).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(c=!1,o<s&&(s=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],c=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(i)var l=i(a)}for(t&&t(n);u<s.length;u++)o=s[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self["webpackChunkvue_progect"]=self["webpackChunkvue_progect"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(9408)}));n=a.O(n)})();
//# sourceMappingURL=app.809715c7.js.map