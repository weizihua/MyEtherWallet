(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a41246fa"],{1960:function(t,e,s){"use strict";var n=s("b3bd"),a=s.n(n);a.a},"21ed":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ambrpay-container"},[s("back-button",{attrs:{title:t.$t("dappsAmbrpay.exit-dapp")}}),s("b-container",{staticClass:"pl-5 pr-5"},[s("div",{staticClass:"ambrpay-header mt-5"},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"page-title"},[t._v(t._s(t.$t("dappsAmbrpay.title")))]),s("popover",{staticClass:"dapp-popover",attrs:{popcontent:t.$t("dappsAmbrpay.ambrpay-popover")}})],1),s("div",{staticClass:"btns-container"},[s("b-button",{staticClass:"withdraw-btn",on:{click:function(e){return t.openManageFundsModal("Withdraw")}}},[t._v(t._s(t.$t("dappsAmbrpay.withdraw-funds")))]),s("b-button",{staticClass:"add-btn",on:{click:function(e){return t.openManageFundsModal("Add")}}},[t._v(t._s(t.$t("dappsAmbrpay.add-funds")))])],1)]),s("div",{staticClass:"funds-container"},[s("span",{staticClass:"fund-text"},[t._v(t._s(t.$t("dappsAmbrpay.balance")))]),s("div",{staticClass:"balance-container"},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.loadingBalance,expression:"loadingBalance"}],staticClass:"fa fa-spinner fa-spin"}),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loadingBalance,expression:"!loadingBalance"}],staticClass:"fund-text"},[t._v(t._s(t.availableBalanceEth)+" "+t._s(t.$t("dappsAmbrpay.eth"))+"\n        ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loadingBalance,expression:"!loadingBalance"}],staticClass:"usd-text"},[t._v(t._s(t.availableBalanceUSD)+" "+t._s(t.$t("dappsAmbrpay.usd")))])])]),s("subscription-form",{on:{startSubscription:t.startSubscription}}),s("div",{staticClass:"mb-4"},[s("b-button",{staticClass:"mx-auto active-sub-btn my-subscriptions-container",on:{click:function(e){return t.openManageSubModal()}}},[t._v(t._s(t.$t("dappsAmbrpay.my-subscriptions"))+"\n        "),t.subscriptions.length>0?s("span",{staticClass:"subscriptions-number"},[t._v(t._s(t.subscriptions.length))]):t._e()])],1)],1),s("manage-funds-modal",{ref:"manageFunds",attrs:{"manage-funds-text":t.manageFundsText,"available-balance-eth":t.availableBalanceEth,"available-balance-usd":t.availableBalanceUSD},on:{addFunds:t.addFunds,withdrawFunds:t.withdrawFunds}}),s("manage-subscriptions-modal",{ref:"manageSubs",attrs:{subscriptions:t.subscriptions},on:{unsubscribeSub:t.unsubscribeSub}})],1)},a=[],r=(s("8e6e"),s("ac6a"),s("456d"),s("7618")),i=(s("96cf"),s("3b8d")),o=(s("6b54"),s("bd86")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subscription-container"},[n("div",{staticClass:"subscription-content"},[n("div",{staticClass:"subscription-form-container"},[n("b-container",[n("b-row",[n("span",{staticClass:"label-text"},[t._v(t._s(t.$t("dappsAmbrpay.to-address")))]),n("p",{staticClass:"action-text prevent-user-select copy-text",on:{click:t.copyToClipboard}},[t._v("\n            "+t._s(t.$t("common.copy"))+"\n          ")])]),n("b-row",{staticClass:"address-block"},[n("span",{staticClass:"row-style"},[n("blockie",{directives:[{name:"show",rawName:"v-show",value:t.isValidAddress,expression:"isValidAddress"}],staticClass:"blockie-image",attrs:{address:t.hexAddress,size:6,scale:16,width:"32px",height:"32px"}}),n("input",{directives:[{name:"ens-resolver",rawName:"v-ens-resolver",value:"address",expression:"'address'"},{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"address",class:t.isValidAddress?"input-address":"",attrs:{name:"name",autocomplete:"off",type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),n("i",{class:[t.isValidAddress&&0!==t.hexAddress.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})],1)]),n("b-row",[n("b-col",{staticClass:"mt-3",attrs:{cols:"12",md:"5"}},[n("span",{staticClass:"label-text"},[t._v(t._s(t.$t("dappsAmbrpay.type")))]),n("div",{staticClass:"fake-input"},[n("p",[n("img",{staticClass:"currency-icon",attrs:{src:s("9165")}}),n("span",{staticClass:"token-txt"},[t._v(t._s(t.$t("dappsAmbrpay.eth")))]),t._v("-"+t._s(t.$t("dappsAmbrpay.ethereum"))+"\n              ")])])]),n("b-col",{staticClass:"amount-container mt-3",attrs:{cols:"12",md:"7"}},[n("div",{staticClass:"amount-text"},[n("span",{staticClass:"label-text"},[t._v(t._s(t.$t("dappsAmbrpay.amount")))]),n("span",{staticClass:"action-text entire-balance",on:{click:t.sendEntireBalance}},[t._v(t._s(t.$t("dappsAmbrpay.entire-balance")))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sendAmount,expression:"sendAmount"}],attrs:{type:"number",placeholder:"0.01",min:"0.01"},domProps:{value:t.sendAmount},on:{input:function(e){e.target.composing||(t.sendAmount=e.target.value)}}}),n("p",{staticClass:"sub-text"},[t._v(t._s(t.$t("dappsAmbrpay.automation-fee")))]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.amountErrMsg,expression:"amountErrMsg"}],staticClass:"sub-text err-msg"},[t._v("\n              "+t._s(t.amountErrMsg)+"\n            ")])])],1),n("b-row",{staticClass:"row-style mt-1 interval-container"},[n("span",{staticClass:"label-text"},[t._v(t._s(t.$t("dappsAmbrpay.interval-in-every")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.intervalDays,expression:"intervalDays"}],staticClass:"days-text"},[t._v(t._s(t.$t("dappsAmbrpay.days")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.intervalDays,expression:"intervalDays"}],attrs:{placeholder:t.$t("dappsAmbrpay.enter-days"),type:"number",min:"1",max:"365"},domProps:{value:t.intervalDays},on:{input:function(e){e.target.composing||(t.intervalDays=e.target.value)}}}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.intervalErrMsg,expression:"intervalErrMsg"}],staticClass:"sub-text err-msg"},[t._v("\n            "+t._s(t.intervalErrMsg)+"\n          ")])]),n("b-row",{staticClass:"mt-4"},[n("b-button",{class:[t.isValidInput?"":"disabled","mx-auto mew-btn"],on:{click:t.startSubscription}},[t._v(t._s(t.$t("dappsAmbrpay.start-recurring")))])],1)],1)],1)])])},u=[],d=(s("f559"),s("c8e5")),l=s("2f62"),p=s("ce96"),m=s("901e"),b=s.n(m);function h(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?h(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):h(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={components:{blockie:d["a"]},data:function(){return{address:"",isValidAddress:!1,hexAddress:"",intervalDays:"",sendAmount:"",amountErrMsg:"",intervalErrMsg:""}},computed:f({},Object(l["b"])(["web3","network","account"]),{isValidInput:function(){return this.isValidAddress&&!this.amountErrMsg&&this.sendAmount&&this.address&&!this.intervalErrMsg}}),watch:{sendAmount:function(t){var e=new b.a(t),s=this.web3.utils.fromWei(new b.a(this.account.balance).toFixed(),"ether"),n=new b.a(e.times(.1)),a=e.plus(n);if(!t)return this.amountErrMsg="";e.lt(.01)?this.amountErrMsg="The minimum amount is 0.01 or greater":a.gt(s)?this.amountErrMsg="Amount higher than balance (including 1% automation fee)":this.amountErrMsg=""},intervalDays:function(t){t.startsWith("0")&&t.length>1?this.intervalErrMsg="Please enter a correct number":this.intervalErrMsg=t>365?"Number cannot exceed 365 days":""}},methods:{copyToClipboard:function(){this.$refs.address.select(),document.execCommand("copy"),p["e"].responseHandler(this.$t("common.copied"),p["e"].INFO)},sendEntireBalance:function(){this.account&&(this.sendAmount=this.web3.utils.fromWei(new b.a(this.account.balance).toFixed(),"ether"))},startSubscription:function(){var t=this,e={subscriptionPlan:"sp_f06PoxHvvutJZd",amount:new b.a(this.sendAmount).toNumber(),receiverWallet:this.address,interval:new b.a(this.intervalDays).toNumber(),transferOut:!0,network:"auto"};this.$emit("startSubscription",e),this.$nextTick((function(){t.sendAmount="",t.address="",t.intervalDays=""}))}}},w=v,g=(s("d8f4"),s("2877")),y=Object(g["a"])(w,c,u,!1,null,"f222a534",null),A=y.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-container"},[s("b-modal",{ref:"manageFundsModal",attrs:{title:t.manageFundsText+" "+t.$t("dappsAmbrpay.manage-funds.funds"),centered:"","hide-footer":"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",{staticClass:"balance-container"},[s("span",{staticClass:"funds-txt"},[t._v(t._s(t.$t("dappsAmbrpay.manage-funds.avail-balance")))]),s("div",[s("p",{staticClass:"funds-txt"},[t._v("\n            "+t._s(t.availableBalanceEth)+" "+t._s(t.$t("dappsAmbrpay.eth"))+"\n          ")]),s("p",{staticClass:"text-right"},[t._v("$"+t._s(t.availableBalanceUsd))])])]),s("hr"),t.actionStep?s("div",{staticClass:"action-container"},[s("p",{staticClass:"funds-txt"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.how-much-eth"))+"\n          "),s("span",{staticClass:"action-txt"},[t._v(" "+t._s(t.manageFundsText)+"? ")])]),s("span",{staticClass:"eth-text"},[t._v(t._s(t.$t("dappsAmbrpay.eth")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ethAmount,expression:"ethAmount"}],staticClass:"mt-3",attrs:{type:"number"},domProps:{value:t.ethAmount},on:{input:function(e){e.target.composing||(t.ethAmount=e.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.errMsg,expression:"errMsg"}],staticClass:"err-msg pl-2"},[t._v(t._s(t.errMsg))])]):t._e(),t.actionStep?t._e():s("div",{staticClass:"confirmation-container"},[s("i",{staticClass:"check-icon fa fa-check",attrs:{"aria-hidden":"true"}}),"Add"===t.manageFundsText?s("p",{staticClass:"mr-5 ml-5 mt-3 mb-1"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.subscription-fund"))+"\n          "),s("span",{staticClass:"mew-txt"},[t._v(t._s(t.ethAmount))]),t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.should-update"))+"\n        ")]):t._e(),"Withdraw"===t.manageFundsText?s("p",{staticClass:"mr-5 ml-5 mt-2"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.withdraw-fund"))+"\n          "),s("span",{staticClass:"mew-txt"},[t._v(t._s(t.ethAmount))]),t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-funds.should-update"))+"\n        ")]):t._e()]),s("div",{staticClass:"btn-container"},[s("button",{staticClass:"mew-btn mt-4 mb-4",class:t.errMsg||!t.ethAmount?"disabled":"",on:{click:function(e){return t.onClick()}}},[t._v("\n          "+t._s(t.actionStep?t.manageFundsText:t.$t("dappsAmbrpay.manage-funds.ok"))+"\n        ")])])])])],1)},C=[];function x(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):x(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var O={props:{manageFundsText:{type:String,default:""},availableBalanceEth:{type:String,default:""},availableBalanceUsd:{type:String,default:""}},data:function(){return{actionStep:!0,ethAmount:0,errMsg:""}},computed:S({},Object(l["b"])(["web3","account"])),watch:{manageFundsText:function(t,e){t!==e&&(this.ethAmount=0,this.errMsg="")},ethAmount:function(t){var e=new b.a(t),s=this.web3.utils.fromWei(new b.a(this.account.balance).toFixed(),"ether"),n=new b.a(this.availableBalanceEth);t<=0?this.errMsg="Amount must be higher than 0":"Add"===this.manageFundsText&&e.gt(s)?this.errMsg="Amount higher than balance":"Withdraw"===this.manageFundsText&&e.gt(n)?this.errMsg="Amount higher than subscription balance":this.errMsg=""}},methods:{onClick:function(){"Add"===this.manageFundsText&&!0===this.actionStep?(this.$emit("addFunds",this.ethAmount),this.actionStep=!1):"Withdraw"===this.manageFundsText&&!0===this.actionStep?(this.$emit("withdrawFunds",this.ethAmount),this.actionStep=!1):(this.$refs["manageFundsModal"].hide(),this.actionStep=!0,this.ethAmount="")}}},k=O,M=(s("c600"),s("8ca3"),Object(g["a"])(k,_,C,!1,null,"8f4f0fbe",null)),$=M.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-container"},[s("b-modal",{ref:"manageSubscriptionsModal",attrs:{title:t.$t("dappsAmbrpay.my-subscriptions"),centered:"","hide-footer":"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.subscriptions.length,expression:"subscriptions.length === 0"}],staticClass:"no-sub-container"},[s("p",{staticClass:"mx-auto pl-3"},[t._v("\n          "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.no-active"))+"\n        ")])]),t._l(t.subscriptions,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.subscriptions.length>0,expression:"subscriptions.length > 0"}],key:e.key,staticClass:"subscription-container"},[s("div",{staticClass:"info-container"},[s("div",{staticClass:"header-txt"},[s("span",[s("i",{staticClass:"check-icon fa fa-check",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"active-txt"},[t._v("\n                "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.active"))+"\n              ")]),s("span",{staticClass:"next-pay-txt"},[t._v("("+t._s(t.$t("dappsAmbrpay.manage-subscriptions.next-payment"))+"\n                "+t._s(t.formatDate(e.cycleEnd))+")")])]),s("span",[s("i",{directives:[{name:"show",rawName:"v-show",value:t.moreInfo,expression:"moreInfo"}],staticClass:"fa fa-angle-up",attrs:{"aria-hidden":"true"},on:{click:t.toggleMoreInfo}}),s("i",{directives:[{name:"show",rawName:"v-show",value:!t.moreInfo,expression:"!moreInfo"}],staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"},on:{click:t.toggleMoreInfo}})])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.receiver-wallet")))]),s("a",{staticClass:"address-txt prevent-user-select",attrs:{title:e.receiverWallet,href:"https://etherscan.io/address/"+e.receiverWallet,rel:"noopener noreferrer"}},[t._v("\n              "+t._s(e.receiverWallet)+"\n            ")])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.amount")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.price)+" "+t._s(t.$t("dappsAmbrpay.eth")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.moreInfo,expression:"moreInfo"}],staticClass:"more-info-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionInterval,expression:"sub.subscriptionInterval"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.current-cycle")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(t.formatDate(e.cycleStart))+"-"+t._s(t.formatDate(e.cycleEnd)))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionInterval,expression:"sub.subscriptionInterval"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.interval")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(t.$t("dappsAmbrpay.in-every"))+"\n                "+t._s(e.subscriptionInterval)+"\n                "+t._s(t.$t("dappsAmbrpay.days-lowercase")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionPlan,expression:"sub.subscriptionPlan"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-plan")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionPlan))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionCurrencyCode,expression:"sub.subscriptionCurrencyCode"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-currency")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionCurrencyCode))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionStatus,expression:"sub.subscriptionStatus"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-status")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionStatus))])])])]),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.moreInfo,expression:"moreInfo"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.moreInfo,expression:"moreInfo"}],staticClass:"btn-container mb-2"},[s("button",{on:{click:function(s){return t.unsubscribe(e.storagePos,e.smartContractAddress)}}},[t._v("\n            "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.unsubscribe"))+"\n          ")])])])}))],2)])],1)},E=[],F={props:{subscriptions:{type:Array,default:function(){return[]}}},data:function(){return{moreInfo:!1}},methods:{formatDate:function(t){return t?t.substr(3,2)+"/"+t.substr(0,2)+"/"+t.substr(6,4):""},toggleMoreInfo:function(){this.moreInfo=!this.moreInfo},unsubscribe:function(t,e){var s=this;this.$emit("unsubscribeSub",{pos:t,addr:e}),this.$nextTick((function(){s.$refs["manageSubscriptionsModal"].hide()}))}}},I=F,j=(s("2232"),Object(g["a"])(I,P,E,!1,null,"11c3c8ac",null)),B=j.exports;s("c5f6");
/*!
 * ambrpay JavaScript Library v0.2.2
 * https://ambrpay.io/
 */
function D(t,e){if(!s)var s="https://ambrpay.io/api";var n=e,a=t.address,r={apiKey:!1,testMode:!1,contractAddress:!1,contractAddresses:!1,network:"auto",setApiKey:function(t){if(r.apiKey=t,-1!=r.apiKey.indexOf("test_public"))r.testMode=!0;else{if(-1==r.apiKey.indexOf("api_public"))throw"invalid public api key";r.testMode=!1}},getContractAddresses:function(){return new Promise((function(t,e){if(r.contractAddress)return t(r.contractAddress);if(n||e("MetaMask is not installed. Download it at https://metamask.io/"),r.contractAddresses)return t(r.contractAddresses);var a=s+"/smartContractAddresses";return r.getRequest(a,r.apiKey).then((function(e){return r.contractAddresses=JSON.parse(e),t(r.contractAddresses)}))})).then((function(){switch(t.netId){case"1":if("mainnet"!=r.network&&"auto"!=r.network)throw"your wallets network (mainnet) does not match the selected network for the transaction ("+r.network+")";"Mainnet",r.contractAddress=r.contractAddresses.mainnet.smartContractAddress,r.ABI={abi:JSON.parse(r.contractAddresses.mainnet.abi)};break;case"2":throw"Morden testnet is not available. Try ropsten testnet.";case"3":if("ropsten"!=r.network&&"auto"!=r.network)throw"your wallets network (ropsten) does not match the selected network for the transaction ("+r.network+")";"Ropsten Testnet",r.contractAddress=r.contractAddresses.ropsten.smartContractAddress,r.ABI={abi:JSON.parse(r.contractAddresses.ropsten.abi)};break;case"4":throw"Rinkeby testnet is not available. Try ropsten testnet.";case"42":throw"Kovan testnet is not available. Try ropsten testnet.";default:throw"Uknown testnet. Try ropsten testnet."}return r.contractAddress}))},getSubscriptionPlan:function(t){var e=s+"/plan/"+t;return r.getRequest(e).then((function(t){return JSON.parse(t)}))},subscribe:function(t){var e,s,a,i,o,c,u=!1;return t.network&&(r.network=t.network),r.getContractAddresses().then((function(){return r.metaMaskLoaded()})).then((function(){return r.getMetaMaskAccount()})).then((function(s){return e=s,r.getSubscriptionPlan(t.subscriptionPlan)})).then((function(e){if(a=e,!a.wallet&&!t.receiverWallet)throw"Subscription plan has no wallet assigned to it, therefore param 'receiverWallet' is required when calling ambrpay.subscribe()";if(s=a.wallet?a.wallet:t.receiverWallet,!n.utils.isAddress(s))throw"receiverAddress is not a valid address";if(-1==a.daysInterval&&!t.interval)throw"Subscription plan has interval set to custom, therefore param 'interval' is required when calling ambrpay.subscribe()";if(-1==a.daysInterval&&!r.isInt(t.interval))throw"interval must be an integer";if(-1==a.daysInterval&&t.interval&&parseInt(t.interval)>=1&&parseInt(t.interval)<=365)a.daysInterval=parseInt(t.interval);else if(-1==a.daysInterval&&t.interval)throw"interval must be between 1 and 365";if("undefined"!==typeof t.transferOut&&"boolean"!==typeof t.transferOut)throw"transferOut must be a boolean";if(u=!(!t.transferOut||1!=a.transferOut),a.acceptedCryptoCurrencies.Ethereum.price>0)return a.acceptedCryptoCurrencies.Ethereum.price;if(t.amount){if(!r.isInt(t.amount)&&!r.isFloat(t.amount))throw"amount must be an integer or a float";if(o=t.amount,"ETH"!=a.currencyCode){if(o<1)throw"the minimum amount is "+a.currencyCode+" 1.00 ";return r.getExchangePrice(a.currencyCode,"ETH",o).then((function(t){return t}))}if(t.amount<.01)throw"the minimum amount is 0.01 ETH";return t.amount}})).then((function(t){if(i=t,c=t/100*a.fee,c=1e18*c/1e18,n.utils.isAddress(a.wallet))var o=parseFloat(i);else o=parseFloat(i)+parseFloat(c);var d=o*(1+a.priceLimitPercentage/100);return new Promise((function(t,i){var l=new n.eth.Contract(r.ABI.abi,r.contractAddress);return l.methods.createSubscriptionWithTransfer(s,a.daysInterval,n.utils.toWei(d.toString(),"ether"),u,n.utils.toWei(c.toString(),"ether")).send({value:n.utils.toWei(o.toString(),"ether"),gas:5e5,from:e}).then((function(e){return t(e)})).catch((function(t){return i(t)}))}))})).then((function(n){var c={subscriptionPlanId:a.id,senderWallet:e,receiverWallet:s,customerId:t.customerId,customerEmail:t.customerEmail,customerDescription:t.customerDescription,transactionHash:n.transactionHash,subscriptionCurrency:"ETH",subscriptionPrice:i,customPrice:o,interval:t.interval,transferOut:u,smartContractAddress:r.contractAddress};return r.createSubscription(c).then((function(){return n.transactionHash}))}))},createSubscription:function(t){var e=s+"/subscription";return r.postRequest(e,t).then((function(t){return JSON.parse(t)}))},getExchangePrice:function(t,e,n){var a=s+"/price/"+t+"/"+e+"/"+n;return r.getRequest(a)},getRequest:function(t){if(!r.apiKey)throw"ambrpay api key not set";return new Promise((function(e,s){var n=new XMLHttpRequest;n.open("GET",t,!0),n.setRequestHeader("Authorization","Bearer "+r.apiKey),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status)return e(n.responseText);4==n.readyState&&200!=n.status&&s(n.responseText)},n.send()}))},postRequest:function(t,e){if(!r.apiKey)throw"ambrpay api key not set";return new Promise((function(s,n){var a=new XMLHttpRequest;a.open("POST",t,!0),a.setRequestHeader("Authorization","Bearer "+r.apiKey),a.onreadystatechange=function(){4==a.readyState&&200==a.status?s(a.responseText):4==a.readyState&&200!=a.status&&n(a.responseText)},a.send(JSON.stringify(e))}))},metaMaskLoaded:function(){return new Promise((function(t,e){return"undefined"==n&&e("MetaMask is missing. Please download the MetaMask browser extension."),t(!0)}))},getMetaMaskAccount:function(){return new Promise((function(t,e){return t(a)}))},getSubscriptionFunds:function(){return r.getContractAddresses().then((function(){return r.getMetaMaskAccount()})).then((function(t){if(!t)throw"Error retrieving your metamask wallet address. Make sure metamask is unlocked";return new Promise((function(e,s){var a=new n.eth.Contract(r.ABI.abi,r.contractAddress),i=a.methods.getBalances(t).call();return e(i)}))}))},getSubscriptions:function(t){return new Promise((function(e,n){if(t){var a=s+"/subscriptions/"+t;return r.getRequest(a,r.apiKey).then((function(t){return r.subscriptions=JSON.parse(t),e(r.subscriptions)}))}return r.getMetaMaskAccount().then((function(t){var n=s+"/subscriptions/"+t;return r.getRequest(n,r.apiKey).then((function(t){return r.subscriptions=JSON.parse(t),e(r.subscriptions)}))}))}))},getMetaMaskBalance:function(){return new Promise((function(t,s){return r.getMetaMaskAccount().then((function(a){return n.eth.getBalance(a,(function(a,r){if(a)return s(a);var i=n.utils.fromWei(r,"ether");return i=e.utils.toDecimal(i),t(i)}))}))}))},unsubscribe:function(t,e){return new Promise((function(s,a){var i=new n.eth.Contract(r.ABI.abi,e);return r.getMetaMaskAccount().then((function(e){return i.methods.deactivateSubscription(t).send({gas:5e5,from:e}).then((function(t){s(t)})).catch((function(t){a(t)}))}))}))},addFunds:function(t){return new Promise((function(e,s){return r.getMetaMaskAccount().then((function(a){var i=new n.eth.Contract(r.ABI.abi,r.contractAddress);return i.methods.addFunds(a).send({value:n.utils.toWei(t),gas:5e5,from:a}).then((function(t){return e(t)})).catch((function(t){return s(t)}))}))}))},withdrawFunds:function(t){return new Promise((function(e,s){return r.getMetaMaskAccount().then((function(a){var i=new n.eth.Contract(r.ABI.abi,r.contractAddress);return i.methods.withdrawFunds(n.utils.toWei(t)).send({gas:5e5,from:a}).then((function(t){return e(t)})).catch((function(t){return s(t)}))}))}))},isInt:function(t){return Number(t)===t&&t%1===0},isFloat:function(t){return Number(t)===t&&t%1!==0}};return r.setApiKey(t.publicApiKey),r}var N=s("572c");function T(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function R(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?T(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):T(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var W={components:{"subscription-form":A,"back-button":N["a"],"manage-funds-modal":$,"manage-subscriptions-modal":B},data:function(){return{availableBalanceEth:"",availableBalanceUSD:"",manageFundsText:"",ethPrice:0,loadingBalance:!0,ambrpay:"",subscriptions:[]}},computed:R({},Object(l["b"])(["web3","account","network","online"])),mounted:function(){var t=this;this.init(),this.getSubscriptions(),this.$refs.manageSubs.$refs.manageSubscriptionsModal.$on("show",(function(){t.getSubscriptions()})),this.online&&this.getEthPrice()},methods:{init:function(){var t={publicApiKey:"api_public_DXfGdjBB4eIVgbURCCCAIQ2S",address:this.account.address,netId:this.network.type.chainID.toString()};this.ambrpay=new D(t,this.web3),this.getSubscriptionFunds()},getSubscriptionFunds:function(){var t=this;this.ambrpay.getSubscriptionFunds().then((function(e){t.availableBalanceEth=new b.a(t.web3.utils.fromWei(e,"ether")).toFixed(),t.convertToUSD(),t.loadingBalance=!1})).catch((function(e){t.loadingBalance=!1,p["e"].responseHandler(e,p["e"].ERROR)}))},convertToUSD:function(){this.availableBalanceUSD="--",this.availableBalanceEth&&(this.availableBalanceUSD=new b.a(new b.a(this.availableBalanceEth).times(new b.a(this.ethPrice))).toFixed(2))},openManageFundsModal:function(t){this.manageFundsText=t,this.$refs.manageFunds.$refs.manageFundsModal.show()},openManageSubModal:function(){this.$refs.manageSubs.$refs.manageSubscriptionsModal.show()},getEthPrice:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)}));case 2:e=t.sent,this.ethPrice="object"===Object(r["a"])(e)?e.data.ETH.quotes.USD.price:0;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),startSubscription:function(t){this.ambrpay.subscribe(t).then(this.getSubscriptions).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)}))},addFunds:function(t){this.ambrpay.addFunds(t).then(this.getSubscriptionFunds).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)}))},withdrawFunds:function(t){this.ambrpay.withdrawFunds(t).then(this.getSubscriptionFunds).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)}))},unsubscribeSub:function(t){this.ambrpay.unsubscribe(t.pos,t.addr).then(this.getSubscriptions).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)}))},getSubscriptions:function(){var t=this;this.ambrpay.getSubscriptions().then((function(e){t.subscriptions=e})).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)}))}}},H=W,K=(s("1960"),Object(g["a"])(H,n,a,!1,null,"33253b16",null));e["default"]=K.exports},2232:function(t,e,s){"use strict";var n=s("33f6"),a=s.n(n);a.a},"33f6":function(t,e,s){},3999:function(t,e,s){},6591:function(t,e,s){},"8ca3":function(t,e,s){"use strict";var n=s("f010"),a=s.n(n);a.a},b3bd:function(t,e,s){},c600:function(t,e,s){"use strict";var n=s("3999"),a=s.n(n);a.a},d8f4:function(t,e,s){"use strict";var n=s("6591"),a=s.n(n);a.a},f010:function(t,e,s){},f559:function(t,e,s){"use strict";var n=s("5ca1"),a=s("9def"),r=s("d2c8"),i="startsWith",o=""[i];n(n.P+n.F*s("5147")(i),"String",{startsWith:function(t){var e=r(this,t,i),s=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return o?o.call(e,n,s):e.slice(s,s+n.length)===n}})}}]);
//# sourceMappingURL=chunk-a41246fa.5a547711.js.map