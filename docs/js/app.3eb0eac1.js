(function(e){function t(t){for(var s,o,r=t[0],n=t[1],m=t[2],u=0,c=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&c.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);d&&d(t);while(c.length)c.shift()();return l.push.apply(l,m||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],s=!0,r=1;r<a.length;r++){var n=a[r];0!==i[n]&&(s=!1)}s&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},l=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var d=n;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},1355:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HelloWorld")],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout main"},[e._m(0),a("div",{staticClass:"md-layout-item md-layout md-size-100  white second"},[a("div",{staticClass:"md-layout-item md-layout md-size-50 md-medium-size-100 md-small-size-100 md-xsmall-size-100 bigBlock"},[e._m(1),a("div",{staticClass:"md-layout-item md-size-100"},[a("md-tabs",{staticClass:"md-primary",on:{"md-changed":e.selectTab}},[a("md-tab",{attrs:{id:"tab-home","md-label":"Kyiv",exact:""}},[a("div",{staticClass:"md-layout white"},[a("span",{staticClass:" md-layout-item md-size-100 preTitle"},[e._v(" Global Message Services Ukraine LLC ")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("Kyiv, Stepan Bandera, 33")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("020066")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v(" Ukraine")])])]),a("md-tab",{attrs:{id:"tab-pages","md-label":"New York"}},[a("div",{staticClass:"md-layout white"},[a("span",{staticClass:" md-layout-item md-size-100 preTitle"},[e._v(" New York ")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("New York, Stepan Bandera, 33")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("020066")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v(" New York")])])]),a("md-tab",{attrs:{id:"tab-posts","md-label":"GuangZhou"}},[a("div",{staticClass:"md-layout white"},[a("span",{staticClass:" md-layout-item md-size-100 preTitle"},[e._v(" GuangZhou ")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("GuangZhou, Stepan Bandera, 33")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("020066")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v(" Ukraine")])])]),a("md-tab",{attrs:{id:"tab-favorites","md-label":"Barcelona"}},[a("div",{staticClass:"md-layout white"},[a("span",{staticClass:" md-layout-item md-size-100 preTitle"},[e._v(" Barcelona ")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("Barcelona, Stepan Bandera, 33")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v("020066")]),a("p",{staticClass:" md-layout-item md-size-100 "},[e._v(" Ukraine")])])])],1)],1)]),a("div",{staticClass:"md-layout-item  md-size-50 md-medium-hide "},[a("GmapMap",{staticStyle:{width:"100%",height:"100%"},attrs:{center:e.currentPoint.position,zoom:10,options:e.mapStyle,"map-type-id":"terrain"}},[a("GmapMarker",{staticStyle:{"z-index":"1000"},attrs:{position:e.currentPoint.position,clickable:!0,draggable:!0}})],1)],1)]),a("div",{staticClass:"md-layout-item md-layout md-size-100 bigBlock white third"},[a("span",{staticClass:" md-layout-item md-size-100 title"},[e._v(" Contact Us ")]),a("div",{staticClass:"md-layout-item md-layout md-size-50 "},[a("div",{staticClass:"md-layout-item md-size-80"},[a("md-field",{staticClass:"form-group formInput",class:{"form-group--error":e.$v.name.$error}},[a("label",[e._v("Name")]),a("md-input",{on:{input:e.updateName},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e.$v.name.mustBeGreat?e._e():a("span",[e._v("Only latters and spaces.")]),e.$v.name.required?e.$v.name.maxLength?e._e():a("span",[e._v("Max number is 30 letters.")]):a("span",[e._v("Name is required")])],1),a("div",{staticClass:"md-layout-item md-size-80"},[a("md-field",{staticClass:"form-group formInput",class:{"form-group--error":e.$v.phone.$error}},[a("label",[e._v("Phone")]),a("md-input",{on:{input:e.updatePhone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e.$v.phone.required?e.$v.phone.mustBeCool?e.$v.phone.minLength?e._e():a("span",[e._v("Name must have at least "+e._s(e.$v.phone.$params.minLength.min)+" numbers.")]):a("span",[e._v("Phone must be start from +380")]):a("span",[e._v("Phone is required")])],1),a("div",{staticClass:"md-layout-item md-size-80"},[a("md-field",{staticClass:"form-group formInput",class:{"form-group--error":e.$v.email.$error}},[a("label",[e._v("E-mail")]),a("md-input",{on:{input:e.updateEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e.$v.email.required?e.$v.email.email?e._e():a("span",[e._v("That's not email")]):a("span",[e._v("Email is required")]),a("md-checkbox",{staticClass:"md-layout-item md-size-100 ",model:{value:e.boolean,callback:function(t){e.boolean=t},expression:"boolean"}},[e._v("I agree the processing of personal data ")]),a("md-button",{staticClass:"md-raised md-primary md-layout-item submitButton ",attrs:{disabled:e.isDisabled},on:{click:e.postForm}},[e._v("get in touch ")])],1)]),e._m(2)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout-item md-gutter md-layout md-size-100 first bigBlock  "},[a("span",{staticClass:" md-layout-item md-size-100  title"},[e._v(" Contacts ")]),a("span",{staticClass:" md-layout-item md-size-50 md-medium-size-100 md-small-size-100 md-xsmall-size-100 preTitle"},[a("strong",{staticClass:"greened"},[e._v("GSM")]),e._v(" Headquarters")]),a("span",{staticClass:"  md-layout-item md-size-50  md-medium-size-100 md-small-size-100 md-xsmall-size-100 preTitle"},[e._v(" Technical support "),a("strong",{staticClass:"greened"},[e._v("24/7")])]),a("div",{staticClass:"md-layout-item md-size-25 md-medium-size-50  md-small-size-100 md-xsmall-size-100 md-layout"},[a("span",{staticClass:"md-layout-item md-size-100"},[e._v(" Global Message Services Ukraine LCC ")]),a("span",{staticClass:"md-layout-item md-size-100"},[e._v(" Bundesstrasse 5 | 3rd Floor ")]),a("span",{staticClass:"md-layout-item md-size-100"},[e._v(" 6300 Zug ")]),a("span",{staticClass:"md-layout-item md-size-100"},[e._v(" Switzerland ")]),a("span",{staticClass:"greened md-layout-item md-size-100 phone lastDiv"},[e._v(" +41 41 544 62 00 ")])]),a("div",{staticClass:"md-layout-item md-size-25 "},[a("div",[e._v(" Email ")]),a("a",{staticClass:"greened"},[e._v(" INFO@GMS-WORLDWIDE ")]),a("div",[e._v(" Send Message ")]),a("a",{staticClass:"greened"},[e._v(" VIBER US ")]),a("div",[e._v(" Send form ")]),a("a",{staticClass:"lastDiv greened"},[e._v(" CONTACT US ")])]),a("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100  md-xsmall-size-100 md-small-size-100 md-layout"},[a("div",{staticClass:"md-layout-item md-size-100"},[e._v(" GSM understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator's business earn more and better though our best practice. ")]),a("div",{staticClass:"greened md-layout-item phone lastDiv md-medium-hide"},[e._v(" +41 41 544 62 00 ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:" md-layout-item md-size-100"},[a("div",{staticClass:"title"},[e._v(" Our Offices ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout-item  md-layout md-size-50 bigBlock "},[a("span",{staticClass:"md-layout-item last",staticStyle:{"line-height":"36px"}},[e._v(" Please tell us more about your request and give us info about your company and country ")])])}],r=a("1dce"),n=a("7cec"),m=a("2f62"),d=a("5db3"),u=a.n(d),c=a("d4f4"),p=a.n(c),y=a("5d75"),v=a.n(y),f=a("2a12"),h=a.n(f),b=a("bc3a"),g=a.n(b);const _=e=>0===e.indexOf("+380"),C=e=>{if(e){let t=e.match(/^[a-z][a-z\s]*$/);return null!==t}return!0};var z={name:"HelloWorld",mixins:[r["validationMixin"]],validations:{name:{mustBeGreat:C,required:p.a,maxLength:h()(30)},phone:{required:p.a,mustBeCool:_,minLength:u()(10)},email:{email:v.a,required:p.a,minLength:u()(4)}},props:{},data:()=>({isLoading:!1,submitStatus:null,boolean:!1,currentTab:"tab-home",tabs:[{name:"tab-home",position:{lat:50.505313,lng:30.377481}},{name:"tab-pages",position:{lat:50.505313,lng:14.377481}},{name:"tab-posts",position:{lat:50.505313,lng:2.377481}},{name:"tab-favorites",position:{lat:50.505313,lng:80.377481}}],mapStyle:{styles:n}}),computed:{currentPoint(){return this.tabs.find(e=>e.name===this.currentTab)},isDisabled(){return!(this.$v.email.required&&this.$v.email.email&&this.$v.phone.required&&this.$v.phone.minLength&&this.$v.name.required&&this.$v.name.maxLength&&this.$v.phone.mustBeCool&&!this.isLoading)},...Object(m["b"])({name:e=>e.form.name,phone:e=>e.form.phone,email:e=>e.form.email})},methods:{selectTab(e){this.currentTab=e},postForm(){this.isLoading=!0;const e=this;g.a.post("https://httpbin.org/post",this.$store.state.form).then((function(t){console.log(t),e.isLoading=!1,alert("Send!")})).catch((function(t){console.log(t),e.isLoading=!1,alert("Error!")}))},updateName(e){console.log(e),this.$store.commit("updateName",e)},updatePhone(e){this.$store.commit("updatePhone",e)},updateEmail(e){this.$store.commit("updateEmail",e)}}},T=z,x=(a("7d5b"),a("2877")),$=Object(x["a"])(T,l,o,!1,null,null,null),k=$.exports,w={name:"app",components:{HelloWorld:k}},S=w,O=(a("034f"),Object(x["a"])(S,s,i,!1,null,null,null)),P=O.exports,B=a("2b0e"),L=a("43f9"),E=a.n(L),M=(a("51de"),a("755e"));a("e094"),a("e512");B["default"].use(m["a"]);const q=new m["a"].Store({state:{form:{name:"",phone:"",email:""},count:0},mutations:{updateName(e,t){e.form.name=t,console.log(e.form.name)},updatePhone(e,t){e.form.phone=t,console.log(e.form.phone,"   ",t.indexOf("+380"))},updateEmail(e,t){e.form.email=t,console.log(e.form.email)}}});B["default"].use(m["a"]),B["default"].use(M,{load:{key:"AIzaSyA4hncSOPzMycRh-e-nzybR0XP52-kZYWY"}}),B["default"].use(E.a),B["default"].config.productionTip=!1,new B["default"]({store:q,render:e=>e(P)}).$mount("#app")},"7cec":function(e){e.exports=JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]')},"7d5b":function(e,t,a){"use strict";var s=a("1355"),i=a.n(s);i.a},"85ec":function(e,t,a){},e512:function(e,t,a){}});
//# sourceMappingURL=app.3eb0eac1.js.map