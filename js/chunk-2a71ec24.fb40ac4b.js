(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a71ec24"],{"1b0c":function(t,e,n){"use strict";var i=function(t,e){var n=e._c;return n("div",{staticClass:"title-text-contents"},[e.props.options.title?n("div",{staticClass:"title-block"},[n("div",{staticClass:"title"},[e.props.options.titleIcon?n("img",{attrs:{src:e.props.options.titleIcon,alt:""}}):e._e(),n("span",[e._v(e._s(e.props.options.title))])])]):e._e(),e.props.options.boldSubTitle?n("div",{staticClass:"bold-sub-title"},[e._v("\n    "+e._s(e.props.options.boldSubTitle)+"\n  ")]):e._e(),e.props.options.textContent?n("div",{staticClass:"text-content"},e._l(e.props.options.textContent,(function(t){return n("p",{key:t.key},[e._v("\n      "+e._s(t)+"\n    ")])})),0):e._e()])},s=[],o={props:{options:{type:Object,default:function(){return{}}}}},r=o,a=(n("9a5c"),n("2877")),c=Object(a["a"])(r,i,s,!0,null,"7c937913",null),u=c.exports;n.d(e,"a",(function(){return u}))},4661:function(t,e,n){},"6a87":function(t,e,n){"use strict";var i=n("4661"),s=n.n(i);s.a},"6aea":function(t,e,n){},"88e1":function(t,e,n){"use strict";var i=n("e927"),s=n.n(i);s.a},9689:function(t,e,n){},"9a5c":function(t,e,n){"use strict";var i=n("6aea"),s=n.n(i);s.a},d811:function(t,e,n){"use strict";var i=n("9689"),s=n.n(i);s.a},e927:function(t,e,n){},ea3e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"convert-units"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"page-container"},[n("div",{staticClass:"page-title"},[n("page-title",{attrs:{options:t.titleOptions}})],1),n("div",[n("unit-input",{attrs:{options:t.options}})],1),n("div",{staticClass:"ether-unit-reference-guide"},[n("div",{staticClass:"block-title"},[n("h3",[t._v(t._s(t.$t("convertUnits.title-refference")))])]),n("div",{staticClass:"unit-table"},[n("table",[n("tbody",t._l(t.etherUnitRef,(function(e){return n("tr",{key:e.key},[n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"unit-long"},[t._v(t._s(e.unit1))]),n("td",{staticClass:"unit-short"},[n("div",[t._v("\n                    "+t._s(e.unit2)),n("span",[t._v(t._s(e.unit2e))])])]),n("td",[t._v(t._s(e.desc))])])})),0)])])])])])])},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit-input"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"block-left"},[n("div",{staticClass:"select-block"},[n("dropdown-unit-selector",{attrs:{options:t.options,"current-selected":t.selectedLeft,left:!0},on:{updateSelected:t.updateCurrency}})],1),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueLeft,expression:"valueLeft"}],attrs:{type:"number",step:"any",placeholder:"Amount"},domProps:{value:t.valueLeft},on:{input:function(e){e.target.composing||(t.valueLeft=e.target.value)}}})])]),t._m(0),n("div",{staticClass:"block-right"},[n("div",{staticClass:"select-block"},[n("dropdown-unit-selector",{attrs:{options:t.options,"current-selected":t.selectedRight,left:!1},on:{updateSelected:t.updateCurrency}})],1),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueRight,expression:"valueRight"}],attrs:{type:"number",placeholder:"Amount",step:"any"},domProps:{value:t.valueRight},on:{input:function(e){e.target.composing||(t.valueRight=e.target.value)}}})])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block-center"},[i("div",{staticClass:"convert-icon"},[i("img",{attrs:{src:n("37d0"),alt:""}})])])}],a=(n("8e6e"),n("ac6a"),n("456d"),n("6b54"),n("bd86")),c=n("901e"),u=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-unit-selector"},[n("div",{staticClass:"unit-selector-click-safe-zone"},[n("div",{staticClass:"dropdown-input-box",class:t.dropdownOpen?"dropdown-open":"",on:{click:function(e){t.dropdownOpen=!t.dropdownOpen}}},[n("div",{staticClass:"selected-unit"},[t._v(t._s(t._f("capitalize")(t.currentSelected)))]),n("div",{staticClass:"dropdown-open-button"},[t.dropdownOpen?t._e():n("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t.dropdownOpen?n("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}):t._e()])]),n("div",{staticClass:"dropdown-list-box",class:t.dropdownOpen?"show-dropdown":""},[n("ul",t._l(t.options,(function(e,i){return n("li",{key:e+i,on:{click:function(n){return t.selected(e)}}},[t._v("\n          "+t._s(t._f("capitalize")(e))+"\n        ")])})),0)])])])},d=[],p={props:{options:{type:Array,default:function(){return[]}},currentSelected:{type:String,default:""},left:{type:Boolean,default:!1}},data:function(){return{dropdownOpen:!1}},beforeMount:function(){document.addEventListener("click",this.clickEvent,!1)},beforeDestroy:function(){document.removeEventListener("click",this.clickEvent,!1)},methods:{clickEvent:function(t){for(var e=t.path||t.composedPath&&t.composedPath()||this.composedPath(t.target),n=0;n<e.length;n++)if("unit-selector-click-safe-zone"===e[n].className)return;this.dropdownOpen=!1},composedPath:function(t){var e=[];while(t){if(e.push(t),"HTML"===t.tagName)return e.push(document),e.push(window),e;t=t.parentElement}},selected:function(t){this.dropdownOpen=!1,this.$emit("updateSelected",[t,this.left?"left":"right"])}}},f=p,v=(n("d811"),n("2877")),h=Object(v["a"])(f,l,d,!1,null,"044bb260",null),m=h.exports,b=n("1131"),g=n.n(b);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C={components:{"dropdown-unit-selector":m},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{selectedLeft:"wei",selectedRight:"ether",valueLeft:1e18,valueRight:1}},computed:_({},Object(u["b"])(["web3"])),watch:{valueLeft:function(t){this.valueRight=this.convertFromTo(t,this.selectedLeft,this.selectedRight)},valueRight:function(t){this.valueLeft=this.convertFromTo(t,this.selectedRight,this.selectedLeft)},selectedLeft:function(t){this.valueRight=this.convertFromTo(this.valueLeft,t,this.selectedRight)},selectedRight:function(t){this.valueLeft=this.convertFromTo(this.valueRight,t,this.selectedLeft)}},methods:{getValueOfUnit:function(t){t=t?t.toLowerCase():"ether";var e=g.a.unitMap[t];return new c["BigNumber"](e,10)},convertFromTo:function(t,e,n){return new c["BigNumber"](String(t)).times(this.getValueOfUnit(e)).div(this.getValueOfUnit(n)).toString(10)},updateCurrency:function(t){"left"===t[1]?this.selectedLeft=t[0]:this.selectedRight=t[0]}}},O=C,y=(n("88e1"),Object(v["a"])(O,o,r,!1,null,"83d33176",null)),k=y.exports,L=n("1b0c"),R={components:{"unit-input":k,"page-title":L["a"]},data:function(){return{titleOptions:{title:this.$t("convertUnits.page.title"),boldSubTitle:"",textContent:[this.$t("convertUnits.page.desc")]},etherUnitRef:[{name:"Wei",unit1:"1",unit2:"1",unit2e:"",desc:""},{name:"Kwei",unit1:"1,000",unit2:"10",unit2e:"3",desc:"ada, femtoether"},{name:"Mwei",unit1:"1,000,000",unit2:"10",unit2e:"6",desc:"babbage, picoether"},{name:"Gwei",unit1:"1,000,000,000",unit2:"10",unit2e:"9",desc:"shannon, nanoether, nano"},{name:"Szabo",unit1:"1,000,000,000,000",unit2:"10",unit2e:"12",desc:"microether, micro"},{name:"Finney",unit1:"1,000,000,000,000,000",unit2:"10",unit2e:"15",desc:"milliether, milli"},{name:"Ether",unit1:"1,000,000,000,000,000,000",unit2:"10",unit2e:"18",desc:""},{name:"Kether",unit1:"1,000,000,000,000,000,000,000",unit2:"10",unit2e:"21",desc:"grand, einstein"},{name:"Mether",unit1:"1,000,000,000,000,000,000,000,000",unit2:"10",unit2e:"24",desc:""},{name:"Gether",unit1:"1,000,000,000,000,000,000,000,000,000",unit2:"10",unit2e:"27",desc:""},{name:"Tether",unit1:"1,000,000,000,000,000,000,000,000,000,000",unit2:"10",unit2e:"30",desc:""}],options:["wei","kwei","mwei","gwei","szabo","finney","ether","kether","mether","gether","tether"]}}},j=R,P=(n("6a87"),Object(v["a"])(j,i,s,!1,null,"803182d6",null)),S=P.exports;n.d(e,"default",(function(){return S}))}}]);
//# sourceMappingURL=chunk-2a71ec24.fb40ac4b.js.map