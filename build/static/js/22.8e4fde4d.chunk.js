(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{506:function(e,t,n){"use strict";var r={baseUrl:"http://localhost:3308",cryptr:new(n(534))("restopos@36547858")};t.a=r},508:function(e,t,n){"use strict";var r,a=n(514),c=n(517),o=n.n(c),i=n(518),u=n(507),s=n.n(u),l=n(523),f=n.n(l),p=n(506),h=(r={getSubscription:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/stripe/listOfPlans",data:{}}).then((function(e){return t(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userLogin:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/login",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),userLogout:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/logout",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),userRegister:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/register",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),resetPassword:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/forgetPassword",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),submitPassword:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/submitPassword",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),createCustomer:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/createcustomer",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addCard:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/addcard",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getLeads:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/leads",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addNewCounty:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/addNewCounty",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getCountyName:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/getAllCounty",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),checkCoupon:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/retrivecoupon",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getCustomers:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/getallcustomers"}).then((function(e){return t(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllSubscribedUsers:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"GET",url:p.a.baseUrl+"/subscription/getallsubscriptions"}).then((function(e){return t(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getTileData:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/getTileData",data:t}).then((function(e){return console.log(e),n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),downloadLeads:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/login/leadsDownload",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),cancelSubscription:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/stripe/cancelSubscription/"+t,data:{}}).then((function(e){return n(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addMailchimpIdFun:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/mailchimp/addAudience",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addTemplateFun:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/mailchimp/addTemplate",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addContactFun:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/mailchimp/addContact",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},Object(a.a)(r,"cancelSubscription",function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/subscription/stripe/cancelSubscription",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(a.a)(r,"createTem",function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f()({method:"POST",url:p.a.baseUrl+"/mailchimp/addTemplatenew",data:t}).then((function(e){return n(e)})).catch((function(e){console.log(e),s()("Please check internet connection or try again",{icon:"error"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),r);t.a=h},535:function(e,t){},536:function(e,t){},537:function(e,t){},538:function(e,t){},539:function(e,t){},540:function(e,t){},541:function(e,t){},542:function(e,t){},543:function(e,t){},544:function(e,t){},545:function(e,t){},546:function(e,t){},547:function(e,t){},548:function(e,t){},966:function(e,t,n){"use strict";n.r(t);var r=n(525),a=n(1),c=n.n(a),o=n(18),i=n(641),u=n(564),s=n(565),l=n(757),f=n(758),p=n(759),h=n(612),m=n(613),d=n(614),g=n(554),y=n(593),b=n(507),w=n.n(b),P=n(594),k=n(508);t.default=function(){var e=Object(o.k)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),b=n[0],v=n[1],E=localStorage.getItem("MailchimpApiKey");return c.a.createElement("div",{className:" ",style:{fontFamily:"Poppins"}},"null"===E||"(NULL)"===E||""===E?c.a.createElement(i.a,null,c.a.createElement("h2",{style:{color:"#0d3559",fontFamily:"Poppins",fontSize:35,margin:30,textAlign:"center",fontWeight:"bold"}},"Automate Solicitations with MailChimp\xae"),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(s.a,{md:"8",sm:"12"},c.a.createElement(l.a,null,c.a.createElement(f.a,{className:"pt-4"},c.a.createElement(p.a,null,c.a.createElement(h.a,null,c.a.createElement("p",{className:"text-muted pb-2",style:{textAlign:"center",fontSize:20}},"Enter your ",c.a.createElement("a",{href:"https://us7.admin.mailchimp.com/account/api/",target:"blank"},"Mailchimp API Key")),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(m.a,{className:"col-12"},c.a.createElement(d.a,{addonType:"prepend"},c.a.createElement(g.a,null,c.a.createElement("i",{className:"icon-key"}))),c.a.createElement(y.a,{type:"text",name:"mailchimpKey",value:b,onChange:function(e){v(e.target.value)},placeholder:" API Key"}))),c.a.createElement(u.a,{className:"pl-4 ml-4 mt-2"},c.a.createElement("p",{style:{fontSize:13}},"Don\u2019t have a MailChimp account? Create one for free",c.a.createElement("a",{href:"https://login.mailchimp.com/signup/",target:"blank"}," here"),".")),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(P.a,{type:"button",style:{backgroundColor:"#0d3559",color:"white",marginTop:20,marginBottom:20},variant:"contained",onClick:function(){var t=localStorage.getItem("userId");if(""===b)return w()({title:"Error!",text:" Please enter your Mailchimp API Key",icon:"error"}),!1;var n={mailchimpId:b,userId:t};k.a.addMailchimpIdFun(n,(function(t){!0===t.data.status?(localStorage.setItem("MailchimpApiKey",b),w()({title:"Congratulations!",text:"You are successfully connected to Mailchimp",icon:"success"}),e.push("/home/user/mailchampEdit")):"API KEY Inserted but audience creation failed. Please check your API KEY"===t.data.msg?w()({title:"Error!",text:"Please check your API KEY.",icon:"error"}):"User not found"===t.data.msg?w()({title:"Error!",text:"User not found",icon:"error"}):"Error"===t.data.msg&&w()({title:"Error!",text:"Error in connecting with server",icon:"error"})}))},className:"px-4"},"Submit")),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement("p",{style:{fontSize:13,padding:0,margin:0,alignItems:"center"}},"Once you\u2019ve shared your API key with us,")),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement("p",{style:{fontSize:13,padding:0,margin:0}},"check out our guide on",c.a.createElement("a",{href:"https://www.clientconnect.ai/automation/",target:"blank"}," setting up your first automation"),"."))))))))):c.a.createElement(i.a,null,c.a.createElement("h2",{style:{color:"#0d3559",fontFamily:"Poppins",fontSize:35,margin:40,textAlign:"center",fontWeight:"bold"}},"Automate Solicitations with MailChimp\xae"),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(s.a,{md:"8",sm:"12"},c.a.createElement(l.a,null,c.a.createElement(f.a,{className:"p-4"},c.a.createElement(p.a,null,c.a.createElement(h.a,null,c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement("p",{style:{fontSize:17,margin:10,fontFamily:"Poppins"}}," Please Check out our guide on",c.a.createElement("a",{href:"https://www.clientconnect.ai/automation/",target:"blank"}," setting up your first automation"),"."))))))))))}}}]);
//# sourceMappingURL=22.8e4fde4d.chunk.js.map