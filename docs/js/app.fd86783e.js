(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/spotifix-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"380e":function(t,e,r){"use strict";var n=r("ed14"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"default",(function(){return ve}));var a={};r.r(a),r.d(a,"default",(function(){return he}));r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("sideBar"),r("v-content",[r("router-view")],1),r("player"),r("v-snackbar",{staticClass:"sp-snackbar",attrs:{value:t.showAlert,"multi-line":!0,timeout:t.timeout},on:{input:t.hideAlert}},[r("div",{class:[t.alertType+"--text"],staticStyle:{display:"flex","align-items":"center",margin:"auto"}},[r("v-icon",{class:[t.alertType+"--text"],staticStyle:{"margin-right":"20px"},attrs:{color:"white"}},[t._v(t._s(t.alertIcon))]),t._v("\n      "+t._s(t.message)+"\n    ")],1),r("v-btn",{staticStyle:{"margin-top":"-25px",", font-size":"12px"},attrs:{icon:"",text:""},on:{click:t.hideAlert}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-close")])],1)],1)],1)},i=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),u=r("2f62"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.userInfo?r("v-navigation-drawer",{attrs:{color:t.color,"expand-on-hover":t.expandOnHover,right:t.right,absolute:"",dark:"",app:""}},[r("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[r("v-list-item-avatar",[r("img",{attrs:{src:t.userInfo.images[0].url}})]),r("v-list-item",{class:"px-0",attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.userInfo.display_name))]),r("v-list-item-subtitle",[t._v(t._s(t.userInfo.email))])],1)],1),r("v-divider"),t._l(t.items,(function(e,n){return r("v-list-item",{key:e.title,attrs:{link:"",to:e.url,href:0===n?t.userProfile:"",target:e.tg}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2),r("v-switch",{staticClass:"ma-2",attrs:{outlined:""},model:{value:t.expandOnHover,callback:function(e){t.expandOnHover=e},expression:"expandOnHover"}})],1):t._e()},p=[];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={data:function(){return{drawer:!0,items:[{title:"MyAccount",icon:"mdi-view-dashboard",account:!0,tg:"_blank"},{title:"Home",icon:"mdi-home-outline",url:"/"},{title:"Albums",icon:"mdi-image",url:"/albums"},{title:"Liked songs",icon:"mdi-heart",url:"/saved"},{title:"Browse",icon:"mdi-animation-outline",url:"/browse"}],color:"teal",right:!1,expandOnHover:!1}},computed:d({},Object(u["c"])("user",["userInfo","loggedIn","userProfile"]),{label:function(){return this.expandOnHover?"pokaż":"ukryj"}}),created:function(){}},b=m,g=r("2877"),y=r("6544"),v=r.n(y),h=r("ce7e6"),O=r("132d"),j=r("8860"),k=r("da13"),w=r("8270"),_=r("5d23"),P=r("34c3"),S=r("f774"),T=r("b73d"),x=Object(g["a"])(b,l,p,!1,null,null,null),I=x.exports;v()(x,{VDivider:h["a"],VIcon:O["a"],VList:j["a"],VListItem:k["a"],VListItemAvatar:w["a"],VListItemContent:_["a"],VListItemIcon:P["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:S["a"],VSwitch:T["a"]});var V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-bottom-navigation",{attrs:{dark:"",height:"120px"}},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}}),r("v-col",{attrs:{cols:"2"}},[t.currentTrack.name?r("v-card",{attrs:{color:"#2E2E2E"}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-title",{staticClass:"headline",staticStyle:{"font-size":"12px !important","line-height":"12px"},domProps:{textContent:t._s(t.currentTrack.name)}}),r("v-card-subtitle",{staticStyle:{"font-size":"10px"}},t._l(t.currentTrack.artists,(function(e){return r("span",{key:e.id,domProps:{innerHTML:t._s(e.name+" ")}})})),0)],1),t.currentTrack.album?r("v-avatar",{staticClass:"ma-3",attrs:{size:"50",tile:""}},[r("v-img",{attrs:{src:t.currentTrack.album.images[1].url}})],1):t._e()],1)]):t._e()],1),r("v-col",{attrs:{cols:"3"}},[r("v-btn",{on:{click:t.prev}},[r("v-icon",[t._v("mdi-skip-previous-circle-outline")])],1),t.playing?t._e():r("v-btn",{on:{click:function(e){return t.resumed()}}},[r("v-icon",{staticStyle:{"font-size":"35px"}},[t._v("mdi-play-circle-outline")])],1),t.playing?r("v-btn",{on:{click:function(e){return t.paused()}}},[r("v-icon",{staticStyle:{"font-size":"35px"}},[t._v("mdi-pause-circle-outline")])],1):t._e(),r("v-btn",{on:{click:t.next}},[r("v-icon",[t._v("mdi-skip-next-circle-outline")])],1)],1),r("v-col",{attrs:{cols:"3"}},[r("v-slider",{attrs:{label:parseInt(t.maxSec/60).toString()+":"+(parseInt(t.maxSec%60)<10?"0"+parseInt(t.maxSec%60).toString():parseInt(t.maxSec%60).toString()),min:"0",step:"1000",max:t.songDuration},on:{change:t.seek},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)],1)],1)},C=[];function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var A={data:function(){return{play:!1}},computed:E({},Object(u["c"])("player",["currentSec","maxSec","playing","currentTrack","songCurrentMilisec","songDuration"]),{slider:{get:function(){return this.songCurrentMilisec},set:function(t){this.updateSongTime(t)}}}),methods:E({},Object(u["b"])("player",["pause","resume","next","prev","seek","updateSongTime"]),{resumed:function(){this.playing||this.resume()},paused:function(){this.playing&&this.pause()}})},$=A,M=(r("9bb8"),r("8212")),L=r("b81c"),R=r("8336"),N=r("b0af"),U=r("99d9"),z=r("62ad"),H=r("adda"),B=r("0fd9"),F=r("ba0d"),K=Object(g["a"])($,V,C,!1,null,"6ef68759",null),G=K.exports;function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}v()(K,{VAvatar:M["a"],VBottomNavigation:L["a"],VBtn:R["a"],VCard:N["a"],VCardSubtitle:U["b"],VCardTitle:U["d"],VCol:z["a"],VIcon:O["a"],VImg:H["a"],VRow:B["a"],VSlider:F["a"]});var W={name:"App",components:{sideBar:I,player:G},computed:J({},Object(u["c"])("toastMessage",["timeout","alertType","alertIcon","message","showAlert"]),{},Object(u["c"])("user",["userInfo","loggedIn","noTokenProvided"])),methods:J({},Object(u["b"])("toastMessage",["hideAlert"])),beforeCreate:function(){this.$store.dispatch("user/getUserInfo")},beforeMount:function(){this.$store.dispatch("user/getToken")}},q=W,Q=(r("5c0b"),r("7496")),X=r("a75b"),Z=r("2db4"),tt=Object(g["a"])(q,s,i,!1,null,null,null),et=tt.exports;v()(tt,{VApp:Q["a"],VBtn:R["a"],VContent:X["a"],VIcon:O["a"],VSnackbar:Z["a"]});var rt=r("8c4f"),nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("songsList",{attrs:{songs:t.recomendations,objTrack:!0,title:"My TOP songs"}})},at=[],ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.songs?r("v-container",{staticStyle:{"overflow-y":"scroll",width:"100%",height:"80vh",padding:"0 34px 0 0","box-sizing":"content-box"},attrs:{fluid:""}},[r("v-tabs",{attrs:{"background-color":"white",color:"teal accent-4",left:""}},[r("v-tab",[t._v(t._s(t.title))])],1),r("v-row",{attrs:{justify:"center"}},t._l(t.songs.items,(function(e,n){return r("v-col",{key:n,attrs:{cols:"8"}},[t.objTrack||e.track?r("v-card",{class:{"grey lighten-5":n%2==0},attrs:{flat:""},on:{click:function(e){t.objTrack,t.playSong({uris:t.uris,position:n})}}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-title",{staticClass:"headline",attrs:{"font-size":"16px"},domProps:{textContent:t._s(t.objTrack?e.name:e.track.name)}}),r("v-card-subtitle",{attrs:{"font-size":"12px"}},t._l(t.objTrack?e.artists:e.track.artists,(function(e){return r("span",{key:e.id,domProps:{innerHTML:t._s(e.name+" ")}})})),0)],1),(t.objTrack?e.album:e.track.album)?r("v-avatar",{staticClass:"ma-3",attrs:{size:"50",tile:""}},[r("v-img",{attrs:{src:t.objTrack?e.album.images[1].url:e.track.album.images[1].url}})],1):t._e()],1)]):t._e()],1)})),1)],1):t._e()},st=[];r("2ef0");function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ut={props:{songs:Object,objTrack:!1,title:"",listType:""},computed:ct({},Object(u["c"])("spotify",["image","type","uris"])),methods:ct({},Object(u["b"])("player",["playSong"]))},lt=ut,pt=(r("380e"),r("a523")),ft=r("71a3"),dt=r("fe57"),mt=Object(g["a"])(lt,ot,st,!1,null,"4ab6cb2e",null),bt=mt.exports;function gt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}v()(mt,{VAvatar:M["a"],VCard:N["a"],VCardSubtitle:U["b"],VCardTitle:U["d"],VCol:z["a"],VContainer:pt["a"],VImg:H["a"],VRow:B["a"],VTab:ft["a"],VTabs:dt["a"]});var vt={name:"Home",components:{songsList:bt},computed:yt({},Object(u["c"])("spotify",["recomendations"])),methods:yt({},Object(u["b"])("user",["login","getUserInfo"])),created:function(){this.$store.dispatch("spotify/getRecomendedTracks")}},ht=vt,Ot=Object(g["a"])(ht,nt,at,!1,null,null,null),jt=Ot.exports,kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.albumsInfo?r("playlistList",{attrs:{actions:"true",playlists:t.albumsInfo}}):t._e()},wt=[],_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{"overflow-y":"scroll",width:"100%",height:"74vh",padding:"0 34px 0 0","box-sizing":"content-box"},attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.playlists.items,(function(e){return r("v-col",{key:e.id,attrs:{cols:"5"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.hover;return[r("v-img",{staticClass:"white--text align-end sp-album",attrs:{elevation:a?16:2,height:"200px",src:e.images[0].url},on:{click:function(r){return t.playPlaylist(e.uri)}}},[r("v-expand-transition",[a?r("div",{staticClass:"d-flex justify-center align-center transition-fast-in-fast-out  darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"200px"}},[r("v-btn",{staticClass:"mx-2",staticStyle:{"margin-top":"60px"},attrs:{icon:"",color:"white",fab:"",dark:"",small:""}},[r("v-icon",{staticStyle:{"font-size":"40px"}},[t._v("mdi-play-circle-outline")])],1),r("v-card-title",{attrs:{"font-size":"25px",align:"center",justify:"center"}},[t._v(t._s(e.name))])],1):t._e()])],1)]}}],null,!0)}),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Number of songs: "+t._s(t.releases?e.total_tracks:e.tracks.total))]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.description))]),t.artists?r("div",{attrs:{"font-size":"12px"}},t._l(e.artists,(function(e){return r("span",{key:e.id,domProps:{innerHTML:t._s(e.name+" ")}})})),0):t._e()]),t.actions?r("v-card-actions",[r("v-btn",{attrs:{color:"teal",text:""},on:{click:function(r){return t.goto(e)}}},[r("v-icon",[t._v("mdi-music-box-multiple-outline")]),t._v("\n      Songs\n    ")],1)],1):t._e()],1)],1)})),1)],1)},Pt=[];r("7f7f");function St(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Tt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?St(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var xt={props:{playlists:{},releases:!1,trackObj:!1,actions:!1,artists:!1},methods:Tt({goto:function(t){this.$store.dispatch("spotify/saveAlbumName",{name:t.name,type:t.type,trackObj:this.trackObj}),this.$router.push("albums/"+t.id)}},Object(u["b"])("player",["playPlaylist"]))},It=xt,Vt=(r("cf4f"),r("0789")),Ct=r("ce87"),Dt=Object(g["a"])(It,_t,Pt,!1,null,"6fa7e819",null),Et=Dt.exports;function At(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $t(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?At(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):At(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}v()(Dt,{VBtn:R["a"],VCard:N["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardText:U["c"],VCardTitle:U["d"],VCol:z["a"],VContainer:pt["a"],VExpandTransition:Vt["a"],VHover:Ct["a"],VIcon:O["a"],VImg:H["a"],VRow:B["a"]});var Mt={components:{playlistList:Et},computed:$t({},Object(u["c"])("spotify",["albumsInfo"]))},Lt=Mt,Rt=Object(g["a"])(Lt,kt,wt,!1,null,null,null),Nt=Rt.exports,Ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{overflow:"hidden",width:"100%",height:"100%"},attrs:{fluid:""}},[r("songsList",{attrs:{songs:t.saved,title:"My ❤️ songs"}})],1)},zt=[];function Ht(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Ht(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ht(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ft={components:{songsList:bt},computed:Bt({},Object(u["c"])("spotify",["saved"])),created:function(){this.$store.dispatch("spotify/getUserTracks")}},Kt=Ft,Gt=Object(g["a"])(Kt,Ut,zt,!1,null,null,null),Yt=Gt.exports;v()(Gt,{VContainer:pt["a"]});var Jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.songs?r("songsList",{attrs:{songs:t.songs,objTrack:t.trackObj,title:t.albumName}}):t._e()},Wt=[];function qt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Qt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?qt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):qt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Xt={components:{songsList:bt},computed:Qt({},Object(u["c"])("spotify",["songs","albumName","trackObj","uris"])),beforeCreate:function(){this.$store.dispatch("spotify/getUserPlaylistSongs")},created:function(){}},Zt=Xt,te=Object(g["a"])(Zt,Jt,Wt,!1,null,null,null),ee=te.exports,re=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-tabs",{attrs:{"background-color":"white",color:"teal accent-4",left:""}},[r("v-tab",[t._v("Featured playlists")]),r("v-tab",[t._v("New releases")]),r("v-tab-item",[r("v-container",{attrs:{fluid:""}},[t.featured?r("playlistList",{attrs:{actions:"true",trackObj:!1,playlists:t.featured}}):t._e()],1)],1),r("v-tab-item",[r("v-container",{attrs:{fluid:""}},[t.releases?r("playlistList",{attrs:{artists:"true",trackObj:!0,releases:!0,playlists:t.releases.albums}}):t._e()],1)],1)],1)},ne=[];function ae(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function oe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ae(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var se={components:{playlistList:Et},computed:oe({},Object(u["c"])("spotify",["featured","releases"]))},ie=se,ce=r("c671"),ue=Object(g["a"])(ie,re,ne,!1,null,null,null),le=ue.exports;v()(ue,{VContainer:pt["a"],VTab:ft["a"],VTabItem:ce["a"],VTabs:dt["a"]});var pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-img",{staticStyle:{margin:"auto"},attrs:{width:"400px",height:"100%",src:r("72dd")}})],1)},fe=[],de={},me=de,be=Object(g["a"])(me,pe,fe,!1,null,null,null),ge=be.exports;v()(be,{VContainer:pt["a"],VImg:H["a"]}),o["a"].use(rt["a"]);var ye=new rt["a"]({mode:"history",base:"/spotifix-vue/",routes:[{path:"/",name:"home",component:jt},{path:"/albums/:id",name:"albumSongs",component:ee},{path:"/albums",name:"albums",component:Nt},{path:"/saved",name:"saved",component:Yt},{path:"/browse",name:"browse",component:le},{path:"*",name:"notfound",component:ge}]}),ve=function(){},he=function(){},Oe={REDIRECT_URI:"https://magda98.github.io/spotify-vue/",API_BASE_PATH:"https://api.spotify.com/v1/"},je=r("62c3"),ke=r.n(je);ke.a.defaults.baseURL=Oe.API_BASE_PATH,ke.a.defaults.headers.post["Content-Type"]="application/json";var we,_e={getUserInfo:function(t){ke.a.get("me").then((function(e){t(e.data)})).catch((function(e){t(e.response.data.error)}))},getAlbums:function(t){ke.a.get("me/playlists").then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},getPlaylistSongs:function(t,e){ke.a.get(e+"s/"+ye.apps[0].$route.params.id+"/tracks").then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},playSong:function(t,e){ke.a.put("me/player/play?device_id=".concat(e.id),void 0!=e.track.position?{uris:e.track.uris,offset:{position:e.track.position}}:{uris:[e.track.uri]}).then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},playPlaylist:function(t,e){ke.a.put("me/player/play?device_id=".concat(e.id),{context_uri:e.uri}).then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},getSavedTracks:function(t){ke.a.get("me/tracks",{limit:50}).then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},getRecomendations:function(t){ke.a.get("me/top/tracks").then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},getFeaturedPlaylists:function(t){ke.a.get("browse/featured-playlists").then((function(e){t(e.data)})).catch((function(e){return t(e.response.data.error)}))},getNewReleases:function(t){ke.a.get("browse/new-releases").then((function(e){t(e.data)})).catch((function(e){return t(response.data.error)}))}},Pe="LOGIN_USER",Se="LOGOUT_USER",Te="GET_TOKEN",xe="SAVE_TOKEN",Ie="GET_TOKEN_AF",Ve=r("72bf"),Ce=r.n(Ve),De={id:"",logged_in:!1,getToken:!1,token:String,userInfo:!1},Ee={userId:function(t){return t.id},noTokenProvided:function(t){return t.noTokenProvided},getToken:function(t){t.getToken},userInfo:function(t){return t.userInfo},userProfile:function(t){return t.userInfo.external_urls.spotify},loggedIn:function(t){return t.logged_in},isExpired:function(t){return new Date(t.expiryDate)<new Date}},Ae={login:function(t){var e=t.commit,r=(t.state,"https://accounts.spotify.com/authorize"),n="9e71951e46e74a79ac078ac56f76ba69",a="https://magda98.github.io/spotifix-vue/",o=new Array("user-read-private","user-read-email","user-read-currently-playing","user-read-recently-played","user-modify-playback-state","streaming","user-read-birthdate","user-library-read","user-top-read"),s=o.join("%20"),i="token";e(Te,{}),window.location.href="".concat(r,"?client_id=").concat(n,"&scope=").concat(s,"&redirect_uri=").concat(a,"&response_type=").concat(i)},getToken:function(t){var e=t.commit,r=t.state;if(r.getToken){e(Ie);var n=Ce.a.parse(location.hash).access_token;Ce.a.parse(location.hash).expires_in;e(xe,{token:n}),ye.push("/")}},getUserInfo:function(t){var e=this,r=t.commit;t.state;_e.getUserInfo((function(t){401===t.status?e.dispatch("user/login"):r("saveUserInfo",{userInfo:t})}))}},$e=(we={noToken:function(t){t.noTokenProvided=!0},saveUserInfo:function(t,e){var r=e.userInfo;t.userInfo=r,t.logged_in=!0}},Object(c["a"])(we,Pe,(function(t){t.logged_in=!0})),Object(c["a"])(we,Se,(function(t){t.logged_in=!1})),Object(c["a"])(we,Te,(function(t){t.getToken=!0})),Object(c["a"])(we,Ie,(function(t){t.getToken=!1})),Object(c["a"])(we,xe,(function(t,e){var r=e.token;t.token=r})),we),Me={namespaced:!0,state:De,getters:Ee,actions:Ae,mutations:$e},Le={albums:!1,currentAlbumName:"",albumSongs:!1,savedTracks:{},recomendedTracks:{},featuredPlaylists:!1,newReleases:!1,type:"",trackObj:!1,image:!1},Re={releases:function(t){return t.newReleases},featured:function(t){return t.featuredPlaylists},albumsInfo:function(t){return t.albums},songs:function(t){return t.albumSongs},uris:function(t){return t.albumSongs.items.map((function(t){return t.track?t.track.uri:t.uri}))},urisRecomendations:function(t){return t.recomendations.items.map((function(t){return t.track?t.track.uri:t.uri}))},urisSaved:function(t){return t.saved.items.map((function(t){return t.track?t.track.uri:t.uri}))},saved:function(t){return t.savedTracks},recomendations:function(t){return t.recomendedTracks},albumName:function(t){return t.currentAlbumName},trackObj:function(t){return t.trackObj},type:function(t){return t.type},image:function(t){return t.image}},Ne={getUserAlbums:function(t){var e=this,r=t.commit;t.state;_e.getAlbums((function(t){401===t.status?e.dispatch("user/login"):r("saveAlbums",{albums:t})}))},getUserPlaylistSongs:function(t){var e=this,r=t.commit,n=t.state;_e.getPlaylistSongs((function(t){401===t.status?e.dispatch("user/login"):r("saveSongs",{songs:t})}),n.type)},getUserTracks:function(t){var e=this,r=t.commit;_e.getSavedTracks((function(t){401===t.status?e.dispatch("user/login"):r("saveTracks",{tracks:t})}))},getRecomendedTracks:function(t){var e=this,r=t.commit;_e.getRecomendations((function(t){401===t.status?e.dispatch("user/login"):r("recomendations",{tracks:t})}))},saveAlbumName:function(t,e){var r=t.commit;r("currentAlbumName",{data:e})},getFeaturedPlaylists:function(t){var e=this,r=t.commit;_e.getFeaturedPlaylists((function(t){401===t.status?e.dispatch("user/login"):r("saveFeatured",t)}))},getNewReleases:function(t){var e=this,r=t.commit;_e.getNewReleases((function(t){401===t.status?e.dispatch("user/login"):r("saveNewReleases",t)}))}},Ue={saveNewReleases:function(t,e){t.newReleases=e},saveFeatured:function(t,e){var r=e.playlists;t.featuredPlaylists=r},currentAlbumName:function(t,e){var r=e.data;t.currentAlbumName=r.name,t.type=r.type,t.trackObj=r.trackObj,t.image=r.image},recomendations:function(t,e){var r=e.tracks;t.recomendedTracks=r,t.albumSongs=r},saveTracks:function(t,e){var r=e.tracks;t.savedTracks=r,t.albumSongs=r},saveAlbums:function(t,e){var r=e.albums;t.albums=r},saveSongs:function(t,e){var r=e.songs;t.albumSongs=r,t.fetched=!0}},ze={namespaced:!0,state:Le,getters:Re,actions:Ne,mutations:Ue},He={DevId:1,songCurrentSec:0,maxSongSec:0,playing:!1,interval:!1,currentTrack:!1,songDuration:100,songCurrentMilisec:0},Be={songDuration:function(t){return t.songDuration},songCurrentMilisec:function(t){return t.songCurrentMilisec},currentSec:function(t){return t.songCurrentSec},maxSec:function(t){return t.maxSongSec},playing:function(t){return t.playing},currentTrack:function(t){return t.currentTrack}},Fe={spotifyPlayer:function(t){var e=this,r=t.commit,n=t.rootState,a=t.state;window.onSpotifyWebPlaybackSDKReady=function(){var t=n.user.token,s=new Spotify.Player({name:"Spotifix",getOAuthToken:function(e){e(t)}});s.addListener("initialization_error",(function(t){var e=t.message;console.error(e)})),s.addListener("authentication_error",(function(t){var e=t.message;console.error(e)})),s.addListener("account_error",(function(t){t.message;e.dispatch("toastMessage/alert",{message:"Sorry, You have no premium account. 😔",type:"warning"})})),s.addListener("playback_error",(function(t){t.message;a.currentTrack.uri?e.dispatch("player/playSong",{uri:a.currentTrack.uri}):e.dispatch("toastMessage/alert",{message:"No song was loaded",type:"error"})})),s.addListener("player_state_changed",(function(t){r("saveCurrentTrack",t.track_window.current_track),t.paused?(r("pause"),a.interval&&r("setInt",!1)):(r("playingSong",t),a.interval||r("setInt",setInterval((function(){r("updateTime")}),1e3)))})),s.addListener("ready",(function(t){var n=t.device_id;r("saveId",n),e.dispatch("toastMessage/alert",{message:"Player is ready",type:"success"}),r("setInt",!1)})),s.addListener("not_ready",(function(t){t.device_id})),s.connect(),o["a"].prototype.$player=s}},playSong:function(t,e){var r=this,n=t.state;t.commit;_e.playSong((function(t){401===t.status?r.dispatch("user/login"):403===t.status?r.dispatch("toastMessage/alert",{message:"Sorry, You have no premium account. 😔",type:"warning"}):404===t.status&&r.dispatch("toastMessage/alert",{message:"Sorry, player is not ready yet.",type:"error"})}),{track:e,id:n.DevId})},playPlaylist:function(t,e){var r=this,n=t.state;t.commit;_e.playPlaylist((function(t){401===t.status?r.dispatch("user/login"):403===t.status?r.dispatch("toastMessage/alert",{message:"Sorry, You have no premium account. 😔",type:"warning"}):404===t.status&&r.dispatch("toastMessage/alert",{message:"Sorry, player is not ready yet.",type:"error"})}),{uri:e,id:n.DevId})},updateSec:function(t){var e=t.commit,r=t.state;r.playing?e("setInt",!1):e("setInt",setInterval((function(){e("updateTime")}),1e3))},updateSongTime:function(t,e){var r=t.commit;r("seekTime",e)},pause:function(){o["a"].prototype.$player.pause()},resume:function(){o["a"].prototype.$player.resume()},prev:function(){o["a"].prototype.$player.previousTrack()},next:function(){o["a"].prototype.$player.nextTrack()},seek:function(t){var e=t.state;o["a"].prototype.$player.seek(e.songCurrentMilisec)}},Ke={seekTime:function(t,e){t.songCurrentMilisec=e,t.songCurrentSec=e/1e3},saveCurrentTrack:function(t,e){t.currentTrack=e},setInt:function(t,e){t.interval?(t.interval=clearInterval(t.interval),t.interval=!1,t.playing=!1):(t.interval=clearInterval(t.interval),t.interval=e)},updateTime:function(t){t.songCurrentMilisec+=1e3,t.songCurrentSec+=1},saveId:function(t,e){t.DevId=e},playingSong:function(t,e){t.maxSongSec=e.duration/1e3,t.songCurrentSec=e.position/1e3,t.songDuration=e.duration,t.songCurrentMilisec=e.position,t.playing=!0},pause:function(t){t.playing=!1}},Ge={namespaced:!0,state:He,getters:Be,actions:Fe,mutations:Ke},Ye={alertType:"success",alertIcon:"mdi-checkbox-marked-circle-outline",message:"",timeout:2e3,showAlert:!1},Je={timeout:function(t){return t.timeout},alertType:function(t){return t.alertType},alertIcon:function(t){return t.alertIcon},message:function(t){return t.message},showAlert:function(t){return t.showAlert}},We={alert:function(t,e){var r=t.commit;r("showAlert",e)},hideAlert:function(t){var e=t.commit;e("hideAlert")}},qe={hideAlert:function(t){t.showAlert=!1},showAlert:function(t,e){switch(t.alertType=e.type,t.message=e.message,t.showAlert=!0,t.timeout=e.timeout,e.type||"success"){case"success":t.alertIcon="mdi-checkbox-marked-circle-outline";break;case"error":case"warning":t.alertIcon="mdi-minus-circle-outline";break;case"info":t.alertIcon="mdi-alert-circle-outline";break}}},Qe={namespaced:!0,state:Ye,getters:Je,actions:We,mutations:qe},Xe=r("bfa9");o["a"].use(u["a"]);var Ze=new Xe["a"]({storage:window.localStorage,key:"spotifix",strictMode:!0}),tr=new u["a"].Store({actions:n,getters:a,modules:{user:Me,toastMessage:Qe,spotify:ze,player:Ge},mutations:{RESTORE_MUTATION:Ze.RESTORE_MUTATION},strict:!0,plugins:[Ze.plugin]}),er=r("f309");o["a"].use(er["a"]);var rr=new er["a"]({});o["a"].config.productionTip=!1,window.root=new o["a"]({router:ye,api:_e,store:tr,vuetify:rr,created:function(){this.$store.subscribe((function(t,e){"user/SAVE_TOKEN"===t.type&&(ke.a.defaults.headers.common["Authorization"]="Bearer ".concat(e.user.token))})),this.$store.state.user.token&&(ke.a.defaults.headers.common["Authorization"]="Bearer ".concat(this.$store.state.user.token),this.$store.dispatch("player/spotifyPlayer"),this.$store.dispatch("spotify/getUserTracks"),this.$store.dispatch("spotify/getFeaturedPlaylists"),this.$store.dispatch("spotify/getUserAlbums"),this.$store.dispatch("spotify/getNewReleases"),this.$store.dispatch("spotify/getRecomendedTracks")),this.$store.commit("player/pause")},render:function(t){return t(et)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("b263"),a=r.n(n);a.a},"72dd":function(t,e,r){t.exports=r.p+"img/not-found.9040012b.png"},"9bb8":function(t,e,r){"use strict";var n=r("f968"),a=r.n(n);a.a},b263:function(t,e,r){},cf4f:function(t,e,r){"use strict";var n=r("dcfe"),a=r.n(n);a.a},dcfe:function(t,e,r){},ed14:function(t,e,r){},f968:function(t,e,r){}});
//# sourceMappingURL=app.fd86783e.js.map