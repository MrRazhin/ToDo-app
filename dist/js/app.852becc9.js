(function(t){function e(e){for(var i,r,l=e[0],n=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,l=1;l<s.length;l++){var n=s[l];0!==a[n]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=n;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("header",{staticClass:"header"},[s("h1",{staticClass:"header__title"},[t._v(" ToDO ")]),s("ul",{staticClass:"header-nav"},[s("li",{staticClass:"header-nav__item"},[s("router-link",{staticClass:"header-nav__link",class:{active:"create"==this.$route.name},attrs:{to:{name:"create"}}},[s("img",{attrs:{src:"img/vector.svg",alt:"create"}}),t._v(" "),s("span",[t._v("Create")])])],1),s("li",{staticClass:"header-nav__item"},[s("router-link",{staticClass:"header-nav__link",class:{active:"list"==this.$route.name},attrs:{to:{name:"list"}}},[s("img",{attrs:{src:"img/list.svg",alt:"list"}}),t._v(" "),s("span",[t._v("List")])])],1)])]),s("main",{staticClass:"main"},[s("router-view")],1)])},o=[],r={},l=r,n=s("2877"),c=Object(n["a"])(l,a,o,!1,null,null,null),u=c.exports,p=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todolist"},[s("div",{staticClass:"todolist__block"},[s("div",{staticClass:"block-head"},[s("span"),s("h2",{staticClass:"block__title"},[t._v(" To Do ")]),s("div",{staticClass:"block__counter"},[t._v(" "+t._s(t.myList.length)+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.myList.length,expression:"myList.length == 0"}],staticClass:"plus-block"},[s("img",{attrs:{src:"img/plus.svg",alt:""}})]),s("draggable",{staticClass:"block-content",attrs:{draggable:".todo-item",group:"a"},model:{value:t.myList,callback:function(e){t.myList=e},expression:"myList"}},t._l(t.myList,(function(t){return s("TodoItem",{key:t.id,attrs:{todo:t,list:1}})})),1)],1),s("div",{staticClass:"todolist__block"},[s("div",{staticClass:"block-head"},[s("span"),s("h2",{staticClass:"block__title"},[t._v(" In progress ")]),s("div",{staticClass:"block__counter"},[t._v(" "+t._s(t.progressList.length)+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.progressList.length,expression:"progressList.length == 0"}],staticClass:"plus-block"},[s("img",{attrs:{src:"img/plus.svg",alt:""}})]),s("draggable",{staticClass:"block-content",attrs:{draggable:".todo-item",group:"a"},model:{value:t.progressList,callback:function(e){t.progressList=e},expression:"progressList"}},t._l(t.progressList,(function(t){return s("TodoItem",{key:t.id,attrs:{todo:t,list:2}})})),1)],1),s("div",{staticClass:"todolist__block"},[s("div",{staticClass:"block-head"},[s("span"),s("h2",{staticClass:"block__title"},[t._v(" Completed ")]),s("div",{staticClass:"block__counter"},[t._v(" "+t._s(t.completeList.length)+" ")])]),s("div",{staticClass:"cover-block"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.completeList.length,expression:"completeList.length == 0"}],staticClass:"plus-block"},[s("img",{attrs:{src:"img/plus.svg",alt:""}})])]),s("draggable",{staticClass:"block-content",attrs:{draggable:".todo-item",group:"a"},model:{value:t.completeList,callback:function(e){t.completeList=e},expression:"completeList"}},t._l(t.completeList,(function(t){return s("TodoItem",{key:t.id,attrs:{todo:t,list:3}})})),1)],1)])},m=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo-item"},[s("div",{staticClass:"todo-item__top"},[s("h3",{staticClass:"todo-item__title"},[t._v(" "+t._s(t.todo.title)+" ")]),s("a",{staticClass:"trash",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.deleteTask.apply(null,arguments)}}},[s("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M5 0.666656C4.26362 0.666656 3.66666 1.26361 3.66666 1.99999V2.66666H2.33333H0.999995C0.631805 2.66666 0.333328 2.96513 0.333328 3.33332C0.333328 3.70151 0.631805 3.99999 0.999995 3.99999H1.66666V13.3333C1.66666 14.4379 2.56209 15.3333 3.66666 15.3333H10.3333C11.4379 15.3333 12.3333 14.4379 12.3333 13.3333V3.99999H13C13.3682 3.99999 13.6667 3.70151 13.6667 3.33332C13.6667 2.96513 13.3682 2.66666 13 2.66666H11.6667H10.3333V1.99999C10.3333 1.26361 9.73637 0.666656 9 0.666656H5ZM9 2.66666H5V1.99999H9V2.66666ZM4.33333 3.99999H9.66666H11V13.3333C11 13.7015 10.7015 14 10.3333 14H3.66666C3.29847 14 2.99999 13.7015 2.99999 13.3333V3.99999H4.33333ZM6.33333 7.33332C6.33333 6.96513 6.03485 6.66666 5.66666 6.66666C5.29847 6.66666 5 6.96513 5 7.33332V10.6667C5 11.0348 5.29847 11.3333 5.66666 11.3333C6.03485 11.3333 6.33333 11.0348 6.33333 10.6667V7.33332ZM8.33333 6.66666C8.70152 6.66666 9 6.96513 9 7.33332V10.6667C9 11.0348 8.70152 11.3333 8.33333 11.3333C7.96514 11.3333 7.66666 11.0348 7.66666 10.6667V7.33332C7.66666 6.96513 7.96514 6.66666 8.33333 6.66666Z",fill:"black"}})])])]),s("div",{staticClass:"todo-item__content"},[s("p",{staticClass:"todo-item__description"},[t._v(" "+t._s(t.todo.description)+" ")]),s("ul",{staticClass:"tag-list"},t._l(t.todo.chips,(function(e){return s("li",{key:e.tag,staticClass:"tag-list__item"},[t._v(" "+t._s(e.tag)+" ")])})),0)])])},v=[],h={components:{},props:["todo","list"],methods:{deleteTask:function(){this.$store.dispatch("deleteTask",{id:this.todo.id,list:this.list})}}},f=h,_=Object(n["a"])(f,g,v,!1,null,null,null),C=_.exports,k=s("b76a"),b=s.n(k),y={components:{TodoItem:C,draggable:b.a},data:function(){return{todoList:this.$store.getters.todoList}},computed:{myList:{get:function(){return this.$store.getters.todoList},set:function(t){this.$store.dispatch("updateList",{value:t,list:"tasks"}),console.log("tasks")}},progressList:{get:function(){return this.$store.getters.progressList},set:function(t){this.$store.dispatch("updateList",{value:t,list:"progress"}),console.log("progress")}},completeList:{get:function(){return this.$store.getters.completeList},set:function(t){this.$store.dispatch("updateList",{value:t,list:"complete"}),console.log("complete")}}}},L=y,w=Object(n["a"])(L,d,m,!1,null,null,null),O=w.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"create-form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[s("h2",{staticClass:"form__title"},[t._v(" Create task ")]),s("div",{staticClass:"form-content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("div",{ref:"chips",staticClass:"chips"}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v(" CREATE TASK ")])])])},x=[],T=(s("a4d3"),s("e01a"),s("4d5c")),$=s.n(T),H={data:function(){return{title:"",description:"",chips:null}},mounted:function(){this.chips=$.a.Chips.init(this.$refs.chips,{placeholder:"Task tags",secondaryPlaceholder:"+Tag"})},methods:{submitHandler:function(){var t={id:Date.now(),title:this.title,description:this.description,chips:this.chips.chipsData};this.$store.dispatch("createTask",t),this.$router.push("/list")}},destroyed:function(){this.chips&&this.chips.destroy&&this.chips.destroy()}},I=H,N=Object(n["a"])(I,S,x,!1,null,null,null),j=N.exports;i["a"].use(p["a"]);var J=[{path:"/list",name:"list",component:O},{path:"/create",name:"create",component:j}],V=new p["a"]({routes:J}),P=V,M=(s("e9c4"),s("c740"),s("a434"),s("2f62"));i["a"].use(M["a"]);var D=new M["a"].Store({state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]"),progress:JSON.parse(localStorage.getItem("progress")||"[]"),complete:JSON.parse(localStorage.getItem("complete")||"[]")},mutations:{createTask:function(t,e){t.tasks.unshift(e),localStorage.setItem("tasks",JSON.stringify(t.tasks))},deleteTask:function(t,e){var s;console.log(e.list),1==e.list?s=t.tasks:2==e.list?s=t.progress:3==e.list&&(s=t.complete),console.log(s);var i=s.findIndex((function(t){return t.id==e.id})),a=s.indexOf(s[i]);-1!==a&&s.splice(a,1),localStorage.setItem("tasks",JSON.stringify(t.tasks)),localStorage.setItem("progress",JSON.stringify(t.progress)),localStorage.setItem("complete",JSON.stringify(t.complete))},updateList:function(t,e){console.log(e),"tasks"==e.list?t.tasks=e.value:"progress"==e.list?t.progress=e.value:"complete"==e.list&&(t.complete=e.value),localStorage.setItem("tasks",JSON.stringify(t.tasks)),localStorage.setItem("progress",JSON.stringify(t.progress)),localStorage.setItem("complete",JSON.stringify(t.complete))}},actions:{createTask:function(t,e){var s=t.commit;s("createTask",e)},deleteTask:function(t,e){var s=t.commit;s("deleteTask",e)},updateList:function(t,e){var s=t.commit;s("updateList",e)}},getters:{todoList:function(t){return t.tasks},progressList:function(t){return t.progress},completeList:function(t){return t.complete}},modules:{}});s("6885");i["a"].config.productionTip=!1,new i["a"]({router:P,store:D,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.852becc9.js.map