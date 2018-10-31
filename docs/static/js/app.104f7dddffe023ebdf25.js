webpackJsonp([1],{"4kWz":function(e,t){},B9Xs:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n=a("kxiW"),i=a.n(n),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){i.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=i.a.auth().currentUser.email)},methods:{logout:function(){var e=this;i.a.auth().signOut().then(function(){e.$router.go({path:e.$router.path})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"navbar"}},[a("nav",[a("div",{staticClass:"nav-wrapper blue darker-1"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("\n        Boardgame Manager\n        ")]),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down"},[e.isLoggedIn?a("li",{staticClass:"black-text"},[e._v(e._s(e.currentUser))]):e._e(),e._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("New Account")])],1):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e(),e._v(" "),e._m(0)])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{staticClass:"white-text",attrs:{href:"https://github.com/msrks/boardgame-manager"}},[t("i",{staticClass:"fab fa-github"})])])}]};var l={name:"App",components:{Navbar:a("VU/8")(s,o,!1,function(e){a("4kWz")},"data-v-ae75d492",null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,u,!1,function(e){a("B9Xs")},null,null).exports,m=a("/ocq"),d=a("yviF"),v=a.n(d),p=(a("881v"),v.a.initializeApp({apiKey:"AIzaSyCo2a7N4eWt4i0QadbEhhnxbOfwL1DogyE",authDomain:"boardgame-manager-2018.firebaseapp.com",databaseURL:"https://boardgame-manager-2018.firebaseio.com",projectId:"boardgame-manager-2018",storageBucket:"boardgame-manager-2018.appspot.com",messagingSenderId:"473964914862"}),v.a.firestore());p.settings({timestampsInSnapshots:!0});var g=p,_={name:"dashboard",data:function(){return{boardgames:[]}},created:function(){var e=this;g.collection("games").orderBy("name").get().then(function(t){t.forEach(function(t){var a={id:t.id,name:t.data().name,pub_year:t.data().pub_year,url:t.data().url,url_image:t.data().url_image};e.boardgames.push(a)})})}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.boardgames,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.pub_year))]),e._v("\n      "+e._s(t.name)+"\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-boardgame",params:{boardgame_name:t.name}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Your Collections")])])}]};var h=a("VU/8")(_,f,!1,function(e){a("xZy8")},"data-v-659f1b5a",null).exports,b={name:"new-boardgame",data:function(){return{name:null,pub_year:null,url:null,url_image:null}},methods:{saveBoardgame:function(){var e=this;g.collection("games").add({name:this.name,pub_year:this.pub_year,url:this.url,url_image:this.url_image}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-boardgame"}},[a("h3",[e._v("New Boardgame")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveBoardgame(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Title")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pub_year,expression:"pub_year"}],attrs:{type:"text",required:""},domProps:{value:e.pub_year},on:{input:function(t){t.target.composing||(e.pub_year=t.target.value)}}}),e._v(" "),a("label",[e._v("Published Year")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"text",required:""},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),e._v(" "),a("label",[e._v("BGG URL")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.url_image,expression:"url_image"}],attrs:{type:"text"},domProps:{value:e.url_image},on:{input:function(t){t.target.composing||(e.url_image=t.target.value)}}}),e._v(" "),a("label",[e._v("IMAGE URL")])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},staticRenderFns:[]},w=a("VU/8")(b,C,!1,null,null,null).exports,y=(a("mtWM"),{name:"view-boardgame",data:function(){return{isLoggedIn:!1,name:null,pub_year:null,url:null,url_image:null,image:null}},created:function(){i.a.auth().currentUser&&(this.isLoggedIn=!0)},beforeRouteEnter:function(e,t,a){g.collection("games").where("name","==",e.params.boardgame_name).get().then(function(e){e.forEach(function(e){a(function(t){t.name=e.data().name,t.pub_year=e.data().pub_year,t.url=e.data().url,t.url_image=e.data().url_image})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;g.collection("games").where("name","==",this.$route.params.boardgame_name).get().then(function(t){t.forEach(function(t){e.name=t.data().name,e.pub_year=t.data().pub_year,e.url=t.data().url,e.url_image=t.data().url_image})})},deleteBoardgame:function(){var e=this;confirm("Are you sure?")&&g.collection("games").where("name","==",this.$route.params.boardgame_name).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}}),x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-boardgame"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m9"},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Published Year: "+e._s(e.pub_year))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("URL: "),a("a",{attrs:{href:e.url}},[e._v("Board Game Geek")])])])]),e._v(" "),a("div",{staticClass:"col s12 m3 center"},[a("img",{attrs:{src:e.url_image,height:"150"}})])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),e.isLoggedIn?a("button",{staticClass:"btn red",on:{click:e.deleteBoardgame}},[e._v("Delete")]):e._e(),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-boardgame",params:{boardgame_name:e.name}}}},[a("i",{staticClass:"fa fa-pencil-alt"})])],1)],1)},staticRenderFns:[]};var k=a("VU/8")(y,x,!1,function(e){a("v4Cs")},null,null).exports,E={name:"edit-boardgame",data:function(){return{name:null,pub_year:null,url:null,url_image:null}},beforeRouteEnter:function(e,t,a){g.collection("games").where("name","==",e.params.boardgame_name).get().then(function(e){e.forEach(function(e){a(function(t){t.name=e.data().name,t.pub_year=e.data().pub_year,t.url=e.data().url,t.url_image=e.data().url_image})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;g.collection("games").where("name","==",this.$route.params.boardgame_name).get().then(function(t){t.forEach(function(t){e.name=t.data().name,e.pub_year=t.data().pub_year,e.url=t.data().url,e.url_image=t.data().url_image})})},updateBoardgame:function(){var e=this;g.collection("games").where("name","==",this.$route.params.boardgame_name).get().then(function(t){t.forEach(function(t){t.ref.update({name:e.name,pub_year:e.pub_year,url:e.url,url_image:e.url_image}).then(function(){e.$router.push({name:"view-boardgame",params:{boardgame_name:e.name}})})})})}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-boardgame"}},[a("h3",[e._v("Edit Boardgame")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateBoardgame(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pub_year,expression:"pub_year"}],attrs:{type:"text",required:""},domProps:{value:e.pub_year},on:{input:function(t){t.target.composing||(e.pub_year=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"text",required:""},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.url_image,expression:"url_image"}],attrs:{type:"text",required:""},domProps:{value:e.url_image},on:{input:function(t){t.target.composing||(e.url_image=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},staticRenderFns:[]},P=a("VU/8")(E,$,!1,null,null,null).exports,U={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("You are logged in as "+t.email),t.$router.go({path:t.$router.path})},function(e){return alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel blue darker-1 white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]},L=a("VU/8")(U,N,!1,null,null,null).exports,A={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;i.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Acount created for "+t.email),t.$router.go({path:t.$router.path})},function(e){return alert(e.message)}),e.preventDefault()}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("New Account")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"black-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"black-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]},B=a("VU/8")(A,q,!1,null,null,null).exports;r.a.use(m.a);var I=new m.a({routes:[{path:"/",name:"Dashboard",component:h},{path:"/login",name:"login",component:L,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:B,meta:{requiresAuth:!0}},{path:"/new",name:"new-boardgame",component:w,meta:{requiresAuth:!0}},{path:"/edit/:boardgame_name",name:"edit-boardgame",component:P,meta:{requiresAuth:!0}},{path:"/:boardgame_name",name:"view-boardgame",component:k}]});I.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?i.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&i.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var R=I;r.a.config.productionTip=!1;var D=void 0;i.a.auth().onAuthStateChanged(function(e){D||(D=new r.a({el:"#app",router:R,components:{App:c},template:"<App/>"}))})},v4Cs:function(e,t){},xZy8:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.104f7dddffe023ebdf25.js.map