(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vod-vod"],{"03fe":function(t,e,a){"use strict";a.r(e);var i=a("c395"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},2887:function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"grace-spread",style:{height:t.reHeight,width:t.width}},[a("v-uni-view",{style:{paddingBottom:!t.isBtn&&t.isShrink?"80rpx":"0rpx"}},[t._t("default")],2),t.isBtn?a("v-uni-view",{staticClass:"grace-spread-btn",style:{color:t.btnColor,fontSize:t.btnTxtSize,zIndex:t.zIndex},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.spreadContent.apply(void 0,arguments)}}},[t._v(t._s(t.btnTxt)),a("v-uni-text",{staticClass:"grace-icons",staticStyle:{"padding-left":"12rpx"},style:{color:t.btnColor}},[t._v("")])],1):t._e(),!t.isBtn&&t.isShrink?a("v-uni-view",{staticClass:"grace-spread-btn",style:{color:t.btnColor,fontSize:t.btnTxtSize,zIndex:t.zIndex},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.shrinkContent.apply(void 0,arguments)}}},[t._v(t._s(t.shrinkBtnTxt)),a("v-uni-text",{staticClass:"grace-icons",staticStyle:{"padding-left":"12rpx"},style:{color:t.btnColor}},[t._v("")])],1):t._e()],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},"45f4":function(t,e,a){var i=a("d804");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("26b238f4",i,!0,{sourceMap:!1,shadowMode:!1})},"525c":function(t,e,a){var i=a("f8dd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("5b865c33",i,!0,{sourceMap:!1,shadowMode:!1})},"5bb6":function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"grace-sbody"},[t.customHeader?a("v-uni-view",[a("v-uni-view",{staticClass:"grace-page-header",style:{"z-index":t.headerIndex,background:t.headerBG,borderBottomWidth:t.borderWidth,borderBottomColor:t.borderColor}},[a("v-uni-view",{staticClass:"grace-page-status-bar",style:{height:t.statusBarHeight+"px",background:t.statusBarBG}}),a("v-uni-view",{staticClass:"grace-page-header-nav",attrs:{id:"gracePageHeader"}},[a("v-uni-view",{staticClass:"grace-header-main"},[t._t("gHeader")],2),t.bounding?a("v-uni-view",{style:{width:t.BoundingWidth,flexShrink:"0"}}):t._e()],1)],1),a("v-uni-view",{style:{width:"100%",height:t.headerHeight+t.statusBarHeight+"px"}})],1):t._e(),a("v-uni-view",{staticClass:"grace-page-body"},[t._t("gBody")],2),t.isSwitchPage?t._e():a("v-uni-view",{style:{width:"100%",height:t.iphoneXButtomHeight+"px"}}),a("v-uni-view",{staticClass:"grace-page-footer",style:{"z-index":t.footerIndex,background:t.footerBg,bottom:t.footerBottom}},[t._t("gFooter"),t.isSwitchPage?t._e():a("v-uni-view",{style:{width:"100%",height:t.iphoneXButtomHeight+"px"}})],2),a("v-uni-view",{staticClass:"gui-page-rb-area",style:{right:t.rbRight+"rpx",bottom:t.rbBottom+"rpx",width:t.rbWidth+"rpx",zIndex:t.rbIndex}},[t._t("gRTArea")],2),t.isLoading?a("v-uni-view",{staticClass:"grace-page-loading",style:{background:t.loadingBG},on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"grace-page-loading-point"},[a("v-uni-view",{staticClass:"grace-page-loading-points animate1",style:{background:t.loadingPointBg}}),a("v-uni-view",{staticClass:"grace-page-loading-points animate2",style:{background:t.loadingPointBg}}),a("v-uni-view",{staticClass:"grace-page-loading-points animate3",style:{background:t.loadingPointBg}})],1)],1):t._e()],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},"69bc":function(t,e,a){"use strict";a.r(e);var i=a("2887"),r=a("c747");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("69ef");var s,o=a("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"66bf538e",null,!1,i["a"],s);e["default"]=c.exports},"69ef":function(t,e,a){"use strict";var i=a("818c"),r=a.n(i);r.a},7134:function(t,e,a){"use strict";var i=a("45f4"),r=a.n(i);r.a},"7e1c":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{customHeader:{type:Boolean,default:!0},headerHeight:{type:Number,default:44},headerIndex:{type:Number,default:98},headerBG:{type:String,default:"none"},statusBarBG:{type:String,default:"none"},footerIndex:{type:Number,default:98},footerBottom:{type:String,default:"0rpx"},footerBg:{type:String,default:""},isSwitchPage:{type:Boolean,default:!1},rbWidth:{type:Number,default:100},rbBottom:{type:Number,default:100},rbRight:{type:Number,default:20},rbIndex:{type:Number,default:1},borderWidth:{type:String,default:"0"},borderColor:{type:String,default:"#D1D1D1"},loadingBG:{type:String,default:"rgba(255,255,255, 0.1)"},isLoading:{type:Boolean,default:!1},loadingPointBg:{type:String,default:"#fc2067"},bounding:{type:Boolean,default:!0}},data:function(){return{statusBarHeight:44,iphoneXButtomHeight:0,BoundingWidth:"0px"}},created:function(){try{var t=uni.getSystemInfoSync();if(t.model=t.model.replace(" ",""),t.model=t.model.toLowerCase(),-1==t.model.indexOf("iphonex")&&-1==t.model.indexOf("iphone11")||(this.iphoneXButtomHeight=uni.upx2px(50)),!this.customHeader)return;this.statusBarHeight=t.statusBarHeight}catch(e){return null}},methods:{getHeaderHeight:function(){return this.headerHeight+this.statusBarHeight}}};e.default=i},"818c":function(t,e,a){var i=a("da83");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("e1e0d316",i,!0,{sourceMap:!1,shadowMode:!1})},"81a1":function(t,e,a){"use strict";var i=a("525c"),r=a.n(i);r.a},"8b3f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}}};e.default=i},"9a35":function(t,e,a){"use strict";a.r(e);var i=a("5bb6"),r=a("ba3f");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("81a1");var s,o=a("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"1b3bb086",null,!1,i["a"],s);e["default"]=c.exports},"9d08":function(t,e,a){"use strict";a.r(e);var i=a("d4d3"),r=a("a50f");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);var s,o=a("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"7df9fd1e",null,!1,i["a"],s);e["default"]=c.exports},a50f:function(t,e,a){"use strict";a.r(e);var i=a("8b3f"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},ac1f7:function(t,e,a){"use strict";a.r(e);var i=a("feb7"),r=a("03fe");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("7134");var s,o=a("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"09e2aeaa",null,!1,i["a"],s);e["default"]=c.exports},ba3f:function(t,e,a){"use strict";a.r(e);var i=a("7e1c"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},c395:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{istitle:!1}},onLoad:function(){},methods:{shrinkContent:function(){this.istitle=!1},spreadContent:function(){this.istitle=!0}},components:{}};e.default=i},c747:function(t,e,a){"use strict";a.r(e);var i=a("f5b5"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},d4d3:function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-video",{staticClass:"width-1",attrs:{poster:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png",src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",controls:!0}})},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},d804:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".grace-scroll-x-items[data-v-09e2aeaa]{width:100px;height:auto;float:left}.border-left[data-v-09e2aeaa]{border-left:6px solid #fc2067;padding-left:10px;margin-bottom:15px}.share[data-v-09e2aeaa]{padding:5px 15px 15px}.grace-card-footer-item[data-v-09e2aeaa]{line-height:0}\n\n/* h5 端需要动态增加 44px [ 避开默认的头部导航 ] */.grace-fixed-top[data-v-09e2aeaa]{top:0;line-height:50px;height:50px;text-align:center}\n\n\n\n/* .grace-fixed-top{top:44px; line-height:50px; height:50px; text-align:center;} */\n\n",""]),t.exports=e},da83:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".grace-spread[data-v-66bf538e]{overflow:hidden;position:relative}.grace-spread-btn[data-v-66bf538e]{width:100%;height:38px;line-height:38px;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.3)),color-stop(25%,hsla(0,0%,100%,.8)),color-stop(40%,#fff),to(#fff));background:-webkit-linear-gradient(top,hsla(0,0%,100%,.3),hsla(0,0%,100%,.8) 25%,#fff 40%,#fff);background:linear-gradient(180deg,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.8) 25%,#fff 40%,#fff);position:absolute;z-index:999999;left:0;bottom:0;text-align:center}",""]),t.exports=e},f5b5:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{width:{type:String,default:"700rpx"},height:{type:String,default:"600rpx"},btnTxt:{type:String,default:"展开阅读全文"},btnColor:{type:String,default:"#999999"},btnTxtSize:{type:String,default:"28rpx"},zIndex:{type:Number,default:1},isShrink:{type:Boolean,default:!1},shrinkBtnTxt:{type:String,default:"收缩展示"}},data:function(){return{reHeight:"600px",isBtn:!0}},created:function(){this.reHeight=this.height},methods:{spreadContent:function(){this.reHeight="auto",this.isBtn=!1,this.$emit("spreadContent")},shrinkContent:function(){this.reHeight=this.height,this.isBtn=!0,this.$emit("shrinkContent")}}};e.default=i},f8dd:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"\nuni-page-body[data-v-1b3bb086]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.grace-sbody[data-v-1b3bb086]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;min-height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.grace-page-header[data-v-1b3bb086]{width:100%;position:fixed;left:0;top:0;z-index:99;border-bottom:0 solid #fff}.grace-page-status-bar[data-v-1b3bb086]{width:100%;height:0}.grace-page-header-nav[data-v-1b3bb086]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grace-header-main[data-v-1b3bb086]{width:%?300?%;-webkit-box-flex:1;-webkit-flex:auto;flex:auto;overflow:hidden;min-height:44px}.grace-page-body[data-v-1b3bb086]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.grace-page-footer[data-v-1b3bb086]{width:100%;position:fixed;left:0;bottom:0;z-index:99}.gui-page-rb-area[data-v-1b3bb086]{width:%?100?%;position:fixed;right:%?20?%;bottom:%?100?%;z-index:1}.grace-page-loading[data-v-1b3bb086]{width:100%;height:100%;background:hsla(0,0%,100%,.1);position:fixed;z-index:9999;left:0;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grace-page-loading-point[data-v-1b3bb086]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-page-loading-points[data-v-1b3bb086]{width:%?20?%;height:%?20?%;background-color:#fc2067;-webkit-border-radius:%?50?%;border-radius:%?50?%;margin:%?10?%;opacity:.5}@-webkit-keyframes pageLoading1-data-v-1b3bb086{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading1-data-v-1b3bb086{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading2-data-v-1b3bb086{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading2-data-v-1b3bb086{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading3-data-v-1b3bb086{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading3-data-v-1b3bb086{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}.animate1[data-v-1b3bb086]{-webkit-animation:pageLoading1-data-v-1b3bb086 1.2s infinite linear;animation:pageLoading1-data-v-1b3bb086 1.2s infinite linear}.animate2[data-v-1b3bb086]{-webkit-animation:pageLoading2-data-v-1b3bb086 1.2s infinite linear;animation:pageLoading2-data-v-1b3bb086 1.2s infinite linear}.animate3[data-v-1b3bb086]{-webkit-animation:pageLoading3-data-v-1b3bb086 1.2s infinite linear;animation:pageLoading3-data-v-1b3bb086 1.2s infinite linear}",""]),t.exports=e},feb7:function(t,e,a){"use strict";var i={gracePage:a("9a35").default,vod:a("9d08").default,spread:a("69bc").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{customHeader:!1}},[a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"grace-fixed-top "},[a("vod"),a("v-uni-view",{staticClass:"grace-card-footer"},[a("v-uni-text",{staticClass:"grace-icons grace-card-footer-item grace-border-r"},[t._v(" 店铺")]),a("v-uni-text",{staticClass:"grace-icons grace-card-footer-item grace-border-r"},[t._v(" 设置")]),a("v-uni-text",{staticClass:"grace-icons grace-card-footer-item"},[t._v(" 链接")])],1)],1),a("v-uni-view",{staticStyle:{height:"280px"}}),a("v-uni-view",{staticClass:"grace-center grace-body",staticStyle:{height:"600px"}},[a("spread",{attrs:{height:"180rpx",zIndex:0,isShrink:!0,btnTxt:"简介",shrinkBtnTxt:"简介"},on:{shrinkContent:function(e){arguments[0]=e=t.$handleEvent(e),t.shrinkContent.apply(void 0,arguments)},spreadContent:function(e){arguments[0]=e=t.$handleEvent(e),t.spreadContent.apply(void 0,arguments)}}},[a("v-uni-view",[a("v-uni-view",{staticClass:"grace-nowrap"},[t.istitle?a("v-uni-view",{staticStyle:{width:"500rpx"}},[a("v-uni-text",{staticClass:"grace-text "},[t._v("GraceUI 是一套兼容微信小程序及uni-app的优秀前端框架，以flex布局为基础，提供了丰富的组件及界面库。大幅度提高开发速度 ^_^")])],1):a("v-uni-text",{staticClass:"grace-text grace-ellipsis",staticStyle:{width:"500rpx"}},[t._v("GraceUI是一套兼容微信小程序及uni-app的优秀前端框架，以flex布局为基础，提供了丰富的组件及界面库。大幅度提高开发速度^_^")]),a("v-uni-view",{staticClass:"share  grace-flex1"},[a("v-uni-text",{staticClass:"grace-icons icon-arrow-right"})],1),a("v-uni-view",{staticClass:"share  grace-flex1"},[a("v-uni-text",{staticClass:"grace-icons icon-arrow-right"})],1)],1),a("v-uni-text",{staticClass:"grace-desc flex info"},[t._v("2020年05月21 上架")]),a("v-uni-text",{staticClass:"grace-desc flex info"},[t._v("番号: EU_US-MyDaughtersHotFriend_20_04_24_Nikole_Nash")]),a("v-uni-text",{staticClass:"grace-desc flex info"},[t._v("类型: 歐美無碼")]),a("v-uni-text",{staticClass:"grace-desc flex info"},[t._v("标籤:")]),a("v-uni-view",{},[a("v-uni-view",{staticClass:"grace-tags-large grace-tbr-large  margin-left-sm primary-border primary grace-bg-white"},[t._v("圆角标签")]),a("v-uni-view",{staticClass:"grace-tags-large grace-tbr-large  margin-left-sm primary-border primary grace-bg-white"},[t._v("圆角标签")]),a("v-uni-view",{staticClass:"grace-tags-large grace-tbr-large  margin-left-sm primary-border primary grace-bg-white"},[t._v("圆角标签")]),a("v-uni-view",{staticClass:"grace-tags-large grace-tbr-large  margin-left-sm primary-border primary grace-bg-white"},[t._v("圆角标签")])],1)],1)],1),a("v-uni-view",{staticClass:"grace-title grace-margin-top"},[a("v-uni-text",{staticClass:"grace-title-text grace-black border-left",staticStyle:{"text-align":"left"}},[t._v("标题示例")]),a("v-uni-view",{staticClass:"grace-text-small grace-gray"},[t._v("更多")])],1),a("v-uni-scroll-view",{staticClass:"grace-scroll-x",attrs:{"show-scrollbar":!1,"scroll-x":!0}},[a("v-uni-view",{staticClass:"grace-scroll-x-items grace-columns"},[a("v-uni-image",{staticStyle:{"border-radius":"50%",height:"90px",width:"90px","margin-left":"5px"},attrs:{src:"https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png"}}),a("v-uni-text",{staticClass:"grace-grids-text"},[t._v("文字")]),a("v-uni-view",{staticClass:"grace-tags-large grace-tbr-large   primary-border primary grace-bg-white"},[t._v("圆角标签")])],1)],1),a("v-uni-view",{staticClass:"grace-title grace-margin-top"},[a("v-uni-text",{staticClass:"grace-title-text grace-black border-left",staticStyle:{"text-align":"left"}},[t._v("标题示例")])],1),a("v-uni-view",{staticClass:"grace-img-card"},[a("v-uni-view",{staticClass:"grace-img-card-item"},[a("v-uni-view",{staticClass:"grace-img-card-img"},[a("v-uni-image",{staticClass:"grace-img-card-img",attrs:{src:"https://graceui.oss-cn-beijing.aliyuncs.com/demoimgs/5.png"}}),a("v-uni-text",{staticClass:"collect  grace-absolute-rt",staticStyle:{margin:"14rpx"}},[t._v("HOT")]),a("v-uni-text",{staticClass:"grace-tagss  grace-absolute-lb",staticStyle:{margin:"14rpx"}},[t._v("2020-05-20")]),a("v-uni-text",{staticClass:"grace-tags grace-gtbg-purple grace-absolute-rb",staticStyle:{margin:"14rpx"}},[t._v("中")])],1),a("v-uni-text",{staticClass:"grace-img-card-title"},[t._v("标题文字")]),a("v-uni-text",{staticClass:" grace-desc info"},[t._v("标题文字")])],1),a("v-uni-view",{staticClass:"grace-img-card-item"},[a("v-uni-view",{staticClass:"grace-img-card-img"},[a("v-uni-image",{staticClass:"grace-img-card-img",attrs:{src:"https://graceui.oss-cn-beijing.aliyuncs.com/demoimgs/5.png"}}),a("v-uni-text",{staticClass:"collect  grace-absolute-rt",staticStyle:{margin:"14rpx"}},[t._v("HOT")]),a("v-uni-text",{staticClass:"grace-tagss  grace-absolute-lb",staticStyle:{margin:"14rpx"}},[t._v("2020-05-20")]),a("v-uni-text",{staticClass:"grace-tags grace-gtbg-purple grace-absolute-rb",staticStyle:{margin:"14rpx"}},[t._v("中")])],1),a("v-uni-text",{staticClass:"grace-img-card-title"},[t._v("标题文字")]),a("v-uni-text",{staticClass:" grace-desc info"},[t._v("标题文字")])],1),a("v-uni-view",{staticClass:"grace-img-card-item"},[a("v-uni-view",{staticClass:"grace-img-card-img"},[a("v-uni-image",{staticClass:"grace-img-card-img",attrs:{src:"https://graceui.oss-cn-beijing.aliyuncs.com/demoimgs/5.png"}}),a("v-uni-text",{staticClass:"collect  grace-absolute-rt",staticStyle:{margin:"14rpx"}},[t._v("HOT")]),a("v-uni-text",{staticClass:"grace-tagss  grace-absolute-lb",staticStyle:{margin:"14rpx"}},[t._v("2020-05-20")]),a("v-uni-text",{staticClass:"grace-tags grace-gtbg-purple grace-absolute-rb",staticStyle:{margin:"14rpx"}},[t._v("中")])],1),a("v-uni-text",{staticClass:"grace-img-card-title"},[t._v("标题文字")]),a("v-uni-text",{staticClass:" grace-desc info"},[t._v("标题文字")])],1),a("v-uni-view",{staticClass:"grace-img-card-item"},[a("v-uni-view",{staticClass:"grace-img-card-img"},[a("v-uni-image",{staticClass:"grace-img-card-img",attrs:{src:"https://graceui.oss-cn-beijing.aliyuncs.com/demoimgs/5.png"}}),a("v-uni-text",{staticClass:"collect  grace-absolute-rt",staticStyle:{margin:"14rpx"}},[t._v("HOT")]),a("v-uni-text",{staticClass:"grace-tagss  grace-absolute-lb",staticStyle:{margin:"14rpx"}},[t._v("2020-05-20")]),a("v-uni-text",{staticClass:"grace-tags grace-gtbg-purple grace-absolute-rb",staticStyle:{margin:"14rpx"}},[t._v("中")])],1),a("v-uni-text",{staticClass:"grace-img-card-title"},[t._v("标题文字")]),a("v-uni-text",{staticClass:" grace-desc info"},[t._v("标题文字")])],1)],1)],1)],1)],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))}}]);