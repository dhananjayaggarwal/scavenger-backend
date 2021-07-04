(this["webpackJsonpscavenger-frontend"]=this["webpackJsonpscavenger-frontend"]||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),o=(a(68),a(11)),i=a.n(o),l=a(18),u=a(6),j=(a.p,a(70),a(62)),b=a.n(j),d=a(17),m=a(4),h=a(3),O=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"register";if(O(e))return"Email is required";if("register"!==t)return!1;var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!a.test(String(e).toLowerCase())},v=function(e){return O(e)?"Name is required":e.length<2&&e.length>30&&"Name must be between 2 to 30 chararters"},f=function(e){if(O(e))return"Pincode is required";return/^\d+$/.test(String(e))?6!==e.length&&"Pincode must be 6 numbers long":"Pincode must contain numbers only"},p=function(e){return!!O(e)&&"Password is required"},x=a(19),N=a.n(x),k=a(1),w=function(e){var t=e.isLoggedIn,a="email",c="phone",s="pincode",o="name",j=Object(n.useState)({value:"",error:!1}),b=Object(u.a)(j,2),d=b[0],m=b[1],O=Object(n.useState)({value:"",error:!1}),p=Object(u.a)(O,2),x=p[0],w=p[1],I=Object(n.useState)({value:"",error:!1}),S=Object(u.a)(I,2),y=S[0],C=S[1],L=Object(n.useState)({value:"",error:!1}),E=Object(u.a)(L,2),B=E[0],F=E[1],P=Object(n.useState)([]),_=Object(u.a)(P,2),A=_[0],q=_[1],z=Object(n.useState)([]),D=Object(u.a)(z,2),T=D[0],M=D[1],J=Object(n.useState)(!1),R=Object(u.a)(J,2),Z=(R[0],R[1]);Object(n.useEffect)((function(){t&&function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=8;break}return a={headers:{Authorization:"Bearer "+t}},e.next=5,N.a.get("https://dj-scavenger-hunt.herokuapp.com/api/user/pendingNotifications",a);case 5:n=e.sent,console.log("yaha agye hai hum",n),n&&n.data&&n.data.success?(console.log(n.data.pendingNotifications),q(n.data.pendingNotifications)):console.log("nahi nahi");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]);var $=function(){return!g(d.value)&&!v(x.value)&&!f(B.value)},U=function(e){var t=e.target;switch(t.name){case a:m(Object(h.a)(Object(h.a)({},d),{},{value:t.value}));break;case o:w(Object(h.a)(Object(h.a)({},x),{},{value:t.value}));break;case c:C(Object(h.a)(Object(h.a)({},y),{},{value:t.value}));break;case s:F(Object(h.a)(Object(h.a)({},B),{},{value:t.value}))}},G=function(e){switch(e.target.name){case a:m(Object(h.a)(Object(h.a)({},d),{},{error:g(d.value)}));break;case o:w(Object(h.a)(Object(h.a)({},x),{},{error:v(x.value)}));break;case c:C(Object(h.a)({},x));break;case s:F(Object(h.a)(Object(h.a)({},B),{},{error:f(B.value)}))}},H=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("entered submitContactForm",$()),t.preventDefault(),!$()){e.next=9;break}return a={name:x.value,email:d.value,phone:y.value,pincode:B.value},console.log("inside submitContactForm"),e.next=7,N.a.post("https://dj-scavenger-hunt.herokuapp.com/api/details/customerForm",a);case 7:(n=e.sent).data.message?(M(n.data.data),n.data.data.length>0?Z(!0):(Z(!1),alert("No donuts for you"))):(Z(!1),alert("No donuts"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(r.a.Fragment,{children:t?A.map((function(e,t){return Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("h3",{children:e.name}),Object(k.jsx)("small",{children:e.email}),Object(k.jsx)("p",{children:e.phone}),Object(k.jsx)("button",{onClick:function(){return function(e){console.log("noti object",e)}(e)},children:" Check "})]},t)})):Object(k.jsxs)("div",{className:"contact-form",children:[Object(k.jsx)("div",{className:"row mt-2",children:Object(k.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(k.jsx)("div",{className:"card",children:Object(k.jsx)("div",{className:"card-body",children:Object(k.jsxs)("form",{onSubmit:H,children:[Object(k.jsxs)("div",{className:"form-group mb-4",children:[Object(k.jsx)("label",{children:"Name: "}),Object(k.jsx)("input",{className:"form-control",name:o,value:x.value,onChange:U,onBlur:G}),x.error&&Object(k.jsx)("small",{className:"error-msg",children:x.error})]}),Object(k.jsxs)("div",{className:"form-group mb-4",children:[Object(k.jsx)("label",{children:"Email: "}),Object(k.jsx)("input",{className:"form-control",name:a,value:d.value,onChange:U,onBlur:G}),d.error&&Object(k.jsx)("small",{className:"error-msg",children:d.error})]}),Object(k.jsxs)("div",{className:"form-group mb-4",children:[Object(k.jsx)("label",{children:"Phone: "}),Object(k.jsx)("input",{className:"form-control",name:c,value:y.value,onChange:U,onBlur:G}),y.error&&Object(k.jsx)("small",{className:"error-msg",children:y.error})]}),Object(k.jsxs)("div",{className:"form-group mb-4",children:[Object(k.jsx)("label",{children:"Pincode: "}),Object(k.jsx)("input",{className:"form-control",name:s,value:B.value,onChange:U,onBlur:G}),B.error&&Object(k.jsx)("small",{className:"error-msg",children:B.error})]}),Object(k.jsx)("button",{className:"btn btn-success bnt-primary",children:"Submit"})]})})})})}),Object(k.jsx)("div",{className:"row mt-2",children:T.map((function(e,t){return Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("h3",{children:e.insitution_name}),Object(k.jsx)("h2",{children:e.branch_name}),Object(k.jsx)("h2",{children:e.address}),Object(k.jsx)("h2",{children:e.city}),Object(k.jsx)("h2",{children:e.contact_number}),Object(k.jsx)("h2",{children:e.incharge}),Object(k.jsx)("h2",{children:e.pincodes})]},t)}))})]})})},I=a(29),S=function(e){var t=e.isLoggedIn,a=e.setIsLoggedIn,r="username",c="password",s=Object(n.useState)({value:"",error:!1}),o=Object(u.a)(s,2),j=o[0],b=o[1],d=Object(n.useState)({value:"",error:!1}),O=Object(u.a)(d,2),g=O[0],f=O[1],x=(Object(I.b)(),Object(m.e)());Object(n.useEffect)((function(){console.log("loginFOrm check",t),t&&x.push("/")}),[t]);var w=function(e){var t=e.target;switch(t.name){case r:b(Object(h.a)(Object(h.a)({},j),{},{value:t.value}));break;case c:f(Object(h.a)(Object(h.a)({},g),{},{value:t.value}))}},S=function(e){switch(e.target.name){case r:b(Object(h.a)(Object(h.a)({},j),{},{error:v(j.value)}));break;case c:f(Object(h.a)(Object(h.a)({},g),{},{error:p(g.value,"login")}))}},y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),v(j.value)||p(g.value)){e.next=10;break}return n={username:j.value,password:g.value},e.next=5,N.a.post("https://dj-scavenger-hunt.herokuapp.com/api/user/login",n);case 5:r=e.sent,console.log("reached"),console.log(r),r.data.success?(window.localStorage.setItem("token",r.data.token),a(!0)):console.log("aree"),x.push("/");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"login-form",children:Object(k.jsxs)("form",{onSubmit:y,children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Username: "}),Object(k.jsx)("input",{className:"form-input",name:r,value:j.value,onChange:w,onBlur:S}),j.error&&Object(k.jsx)("small",{className:"error-msg",children:j.error})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Password: "}),Object(k.jsx)("input",{className:"form-input",name:c,value:g.value,onChange:w,onBlur:S}),g.error&&Object(k.jsx)("small",{className:"error-msg",children:g.error})]}),Object(k.jsx)("button",{className:"btn bnt-primary",children:"Login"})]})})};var y=function(e){var t=e.isLoggedIn,a=e.setIsLoggedIn;return Object(k.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(k.jsx)("a",{className:"navbar-brand",href:"#",children:"Scavenger"}),Object(k.jsx)("div",{className:"",id:"navbarNav",children:Object(k.jsx)("ul",{className:"navbar-nav",children:t?Object(k.jsx)(d.b,{onClick:function(){localStorage.removeItem("token"),a(!1)},children:"Logout"}):Object(k.jsx)(d.b,{to:"/login",children:"Login"})})})]})};var C=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({bid:"",role:""}),s=Object(u.a)(c,2),o=s[0],j=s[1];return Object(n.useEffect)((function(){console.log("maine toh nhi kiya login",a),function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=9;break}return a={headers:{Authorization:"Bearer "+t}},e.next=5,N.a.get("https://dj-scavenger-hunt.herokuapp.com/api/user/checkLogin",a);case 5:(n=e.sent)?(c={bid:n.data.branchId,role:n.data.role},j(c),r(!0),console.log("chal gaya")):(localStorage.removeItem("token"),console.log("ni chala")),e.next=10;break;case 9:r(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(n.useEffect)((function(){if(a){console.log("socket wala chalra hai");var e=b()("https://dj-scavenger-hunt.herokuapp.com");e.on("connection",(function(){console.log("I'm connected with the back-end"),e.emit("join",{bid:o.bid,role:o.role})})),e.on("notification",(function(t,a){console.log(t,a),e.emit("notification_received",{bid:o.bid,nid:a})})),e.on("connect_error",(function(e){console.log("connect_error due to ".concat(e.message))}))}}),[a]),Object(k.jsx)(d.a,{children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(y,{isLoggedIn:a,setIsLoggedIn:r}),Object(k.jsx)(m.a,{path:"/",exact:!0,component:function(){return Object(k.jsx)(w,{isLoggedIn:a})}}),Object(k.jsx)(m.a,{path:"/login",exact:!0,component:function(){return Object(k.jsx)(S,{isLoggedIn:a,setIsLoggedIn:r})}})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,124)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},E=a(63),B=Object(E.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}));a(122);s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(I.a,{store:B,children:Object(k.jsx)(C,{})})}),document.getElementById("root")),L()},68:function(e,t,a){},70:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.1578d0d1.chunk.js.map