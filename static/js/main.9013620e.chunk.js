(this["webpackJsonpbookshop-prod-react"]=this["webpackJsonpbookshop-prod-react"]||[]).push([[0],{100:function(e,t,n){e.exports={navigation:"Navigation_navigation__11jj5"}},101:function(e,t,n){e.exports={button:"NavButton_button__1qdXz"}},110:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),a=n(39),s=n.n(a),o=(n(110),n(0)),i=n.n(o),u=n(30),l=n(1),j=n(20),d=n(15),b=n(51),m=null===localStorage.getItem("currentUser")?null:JSON.parse(localStorage.getItem("currentUser")),p=Object(b.b)({name:"auth",initialState:{currentUser:m,loginSuccess:!1,registerSuccess:!1,resetPasswordSuccess:!1},reducers:{setCurrentUser:function(e,t){e.currentUser=t.payload},setLoginSuccess:function(e,t){e.loginSuccess=t.payload},setRegisterSuccess:function(e,t){e.registerSuccess=t.payload},setResetPasswordSuccess:function(e,t){e.resetPasswordSuccess=t.payload}}}),f=p.actions,O=p,h=n(14),x=n(56),v=n.n(x),g=n(86),_=n.n(g),w=n(3),N=function(e){return Object(w.jsx)("div",{className:"".concat(e.className," ").concat(_.a.card," "),children:e.children})},k=n(47),y=n(52),S=n.n(y),C=n(70),E=n.n(C),I=n(36),P=function(e){var t=Object(r.useState)("paper"),n=Object(h.a)(t,2),c=n[0],a=n[1],s=0,o=0;return Object(w.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault(),"paper"===c?e.onAdd(c,++s):e.onAdd(c,++o)},children:[Object(w.jsxs)("select",{value:c,name:"booktype",className:E.a.select,onChange:function(e){a(e.target.value)},children:[Object(w.jsx)("option",{value:"ebook",children:"E-book"}),Object(w.jsx)("option",{value:"paper",children:"Paper"})]}),Object(w.jsx)(I.a,{type:"submit",className:E.a.item,children:"+ Add"})]})},F=n(71),B=n.n(F),A=n(61),D=function(e){return Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsxs)("div",{className:B.a.detailsmodal,children:[Object(w.jsxs)("div",{className:B.a.details,children:[Object(w.jsx)("h1",{children:e.name}),e.details]}),Object(w.jsx)(I.a,{className:B.a.btn,onClick:e.onClose,children:"OK"})]}),Object(w.jsx)(A.a,{onClick:e.onClose})]})},R=n(18),U=function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.auth.currentUser})),c=Object(r.useContext)(k.a),a=Object(r.useState)(!1),s=Object(h.a)(a,2),o=s[0],i=s[1],u=Object(r.useState)(!1),l=Object(h.a)(u,2),j=l[0],b=l[1],m="".concat(S.a.name," ").concat(o?S.a.shake:"");return Object(r.useEffect)((function(){var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}),[o]),Object(w.jsxs)("li",{className:S.a.book,children:[Object(w.jsx)("h1",{className:m,children:e.name}),Object(w.jsxs)("div",{className:S.a.price,children:["$",e.price.toFixed(2)]}),Object(w.jsx)("div",{className:S.a.moreinfo,onClick:function(){b(!0)},children:"more info"}),j&&Object(w.jsx)(D,{name:e.name,details:e.details,onClose:function(){b(!1)}}),Object(w.jsx)("div",{children:Object(w.jsx)(P,{id:e.id,onAdd:function(r,a){n?(c.addItem({id:"".concat(e.id,"_").concat(r),name:e.name,price:e.price,type:r,amount:a}),i(!0)):(t(R.b.setNotification({status:"error",message:"Please log in!"})),t(R.b.setPopup(!0)))},formStatus:o})})]})},L=n(136),H=n(25),M=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),o=Object(h.a)(s,2),j=o[0],d=o[1],b=Object(r.useState)(""),m=Object(h.a)(b,2),p=m[0],f=m[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.c.collection("books").get().then((function(e){if(e.metadata.fromCache)throw new Error;var t=e.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id})}));d(t)}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),f("Something went wrong. Please check Your internet connection or try again later.");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=j.filter((function(e){return(""===n||!!e.name.toLowerCase().includes(n.toLowerCase()))&&e})).map((function(e){return Object(w.jsx)(U,{id:e.id,name:e.name,price:e.price,details:e.details},e.id)}));return Object(w.jsxs)(N,{children:[Object(w.jsx)("div",{className:v.a.searchheader,children:Object(w.jsx)("input",{placeholder:"Search title...",type:"text",onChange:function(e){a(e.target.value)},className:v.a.titlesearchbar,maxLength:"20"})}),Object(w.jsx)("div",{className:v.a.scroll,children:j.length>0?Object(w.jsx)("ul",{children:O}):Object(w.jsxs)(c.a.Fragment,{children:[""!==p&&Object(w.jsx)("h3",{className:v.a.error,children:p}),""===p&&Object(w.jsx)("div",{style:{position:"fixed",left:"calc(50% - 2rem)",top:"calc(50% - 0.5rem)"},children:Object(w.jsx)(L.a,{size:"4rem",color:"secondary"})})]})})]})},T=function(){return Object(w.jsx)(M,{})},W=function(e){e(R.b.setPopup(!0)),e(R.b.showSpinner(!1))},J=function(e,t,n){e(R.b.setNotification({status:t,message:n}))},z=function(e,t,n){return function(){var r=Object(l.a)(i.a.mark((function r(c){var a,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(R.b.showSpinner(!0)),r.next=4,H.b.createUserWithEmailAndPassword(e,t);case 4:return a=r.sent,s=a.user,r.next=8,Object(H.d)(s,{displayName:n});case 8:c(f.setRegisterSuccess(!0)),J(c,"success","Registered!"),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0.message),J(c,"error","Failed to register!");case 16:c(f.setRegisterSuccess(!1)),W(c);case 18:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(R.b.showSpinner(!0)),r={url:"http://localhost:3000/login"},t.next=5,H.b.sendPasswordResetEmail(e,r);case 5:J(n,"success","Password reset!"),n(f.setResetPasswordSuccess(!0)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),J(n,"error","Failed to reset password!");case 13:n(f.setResetPasswordSuccess(!1)),W(n);case 15:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},V=n(72),G=n.n(V),K=n(73),Y=n.n(K),q=function(e){var t=e.hasError?"".concat(Y.a["form-control"]," ").concat(Y.a.invalid):Y.a["form-control"];return Object(w.jsx)("div",{className:"".concat(e.className," ").concat(t," "),children:e.children})},X=n(93),$=n.n(X),Z=function(e){return Object(w.jsx)("h1",{className:"".concat(e.className," ").concat($.a.caption," "),children:e.children})},ee=n.p+"static/media/background_books_image.3a124e66.jpg",te=n(94),ne=n.n(te),re=function(){return Object(w.jsx)("div",{className:ne.a["main-image"],children:Object(w.jsx)("img",{src:ee,alt:"books"})})},ce=function(){return Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(A.a,{}),Object(w.jsx)("div",{style:{position:"fixed",left:"calc(50% - 2rem)",top:"calc(50% - 2rem)"},children:Object(w.jsx)(L.a,{size:"4rem",color:"secondary"})}),Object(w.jsx)(re,{})]})},ae={value:"",isTouched:!1},se=function e(t,n){return"INPUT"===n.type?{value:n.value,isTouched:t.isTouched}:"BLUR"===n.type?{isTouched:!0,value:t.value}:"RESET"===n.type?{isTouched:!1,value:""}:e},oe=function(e){var t=Object(r.useReducer)(se,ae),n=Object(h.a)(t,2),c=n[0],a=n[1],s=e(c.value),o=!s&&c.isTouched;return{value:c.value,hasError:o,valueChangeHandler:function(e){a({type:"INPUT",value:e.target.value})},inputBlurHandler:function(e){a({type:"BLUR"})},isValid:s,reset:function(){a({type:"RESET"})}}},ie=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)},ue=Object(j.g)((function(e){var t=Object(d.c)((function(e){return e.auth.registerSuccess})),n=Object(d.c)((function(e){return e.ui.spinner})),a=Object(d.b)(),s=e.history,o=oe((function(e){return""!==e.trim()})),u=o.value,j=o.isValid,b=o.hasError,m=o.valueChangeHandler,p=o.inputBlurHandler,f=o.reset,O=oe((function(e){return ie(e)})),h=O.value,x=O.isValid,v=O.hasError,g=O.valueChangeHandler,_=O.inputBlurHandler,k=O.reset,y=oe((function(e){return function(e){return!!/(?=.*[0-9a-zA-Z]).{6,}/.test(e)}(e)})),S=y.value,C=y.isValid,E=y.hasError,P=y.valueChangeHandler,F=y.inputBlurHandler,B=y.reset,A=oe((function(e){return e===S&&""!==e})),D=A.value,R=A.isValid,U=A.hasError,L=A.valueChangeHandler,H=A.inputBlurHandler,M=A.reset,T=!1;j&&x&&C&&R&&(T=!0);var W=Object(r.useCallback)((function(){f(),k(),B(),M()}),[f,k,B,M]);Object(r.useEffect)((function(){t&&(s.push("/"),W())}),[t,W,s]);var J=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),T&&a(z(h,S,u));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(c.a.Fragment,{children:n?Object(w.jsx)(ce,{}):Object(w.jsx)(N,{className:G.a.mainwrap,children:Object(w.jsxs)("div",{className:G.a.scroll,children:[Object(w.jsx)(Z,{children:"Register"}),Object(w.jsxs)("form",{onSubmit:J,children:[Object(w.jsxs)(q,{hasError:b,children:[Object(w.jsx)("label",{htmlFor:"name",children:"Name"}),Object(w.jsx)("input",{type:"text",id:"name",value:u,onChange:m,onBlur:p}),b&&Object(w.jsx)("p",{children:"Please enter Your name"})]}),Object(w.jsxs)(q,{hasError:v,children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"email",id:"email",value:h,onChange:g,onBlur:_}),v&&Object(w.jsx)("p",{children:"Please enter valid e-mail"})]}),Object(w.jsxs)(q,{hasError:E,children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{type:"password",id:"password",value:S,onChange:P,onBlur:F}),E&&Object(w.jsx)("p",{children:"Password must have at least 6 characters"})]}),Object(w.jsxs)(q,{hasError:U,children:[Object(w.jsx)("label",{htmlFor:"confirm-password",children:"Confirm password"}),Object(w.jsx)("input",{type:"password",id:"confirm-password",value:D,onChange:L,onBlur:H}),U&&Object(w.jsx)("p",{children:"Passwords do not match"})]}),Object(w.jsx)(I.a,{className:G.a.btn,disabled:!T,type:"submit",children:"Register"})]})]})})})})),le=function(){return Object(w.jsx)(ue,{})},je=n(24),de=n(46),be=n.n(de),me=Object(j.g)((function(e){var t=Object(d.c)((function(e){return e.auth.loginSuccess})),n=Object(d.c)((function(e){return e.ui.spinner})),a=Object(d.b)(),s=Object(r.useState)(""),o=Object(h.a)(s,2),u=o[0],j=o[1],b=Object(r.useState)(""),m=Object(h.a)(b,2),p=m[0],O=m[1],x=e.history;Object(r.useEffect)((function(){t&&(x.push("/"),j(""),O(""))}),[t,x]);return Object(w.jsx)(c.a.Fragment,{children:n?Object(w.jsx)(ce,{}):Object(w.jsx)(N,{className:be.a.mainwrap,children:Object(w.jsxs)("div",{className:be.a.scroll,children:[Object(w.jsx)(Z,{children:"Login"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.length>0&&p.length>0&&a(function(e,t){return function(){var n=Object(l.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(R.b.showSpinner(!0)),n.next=4,H.b.signInWithEmailAndPassword(e,t);case 4:r(f.setLoginSuccess(!0)),J(r,"success","Logged in!"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),J(r,"error","Failed to login!");case 12:r(f.setLoginSuccess(!1)),W(r);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(u,p))},children:[Object(w.jsxs)(q,{children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"email",id:"email",value:u,onChange:function(e){j(e.target.value)}})]}),Object(w.jsxs)(q,{children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{type:"password",id:"password",value:p,onChange:function(e){O(e.target.value)}})]}),Object(w.jsx)("div",{className:be.a.resetWrap,children:Object(w.jsx)(je.b,{to:"/resetPassword",children:Object(w.jsx)("p",{className:be.a.reset,children:"Lost password?"})})}),Object(w.jsx)(I.a,{className:be.a.btn,type:"submit",children:"Login"})]}),Object(w.jsx)(I.a,{className:be.a.btnGoogle,onClick:function(){a(function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(R.b.showSpinner(!0)),e.next=4,Object(H.e)();case 4:t(f.setLoginSuccess(!0)),J(t,"success","Logged in!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),J(t,"error","Failed to login!");case 12:t(f.setLoginSuccess(!1)),W(t);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},children:"Sign in with Google"})]})})})})),pe=function(){return Object(w.jsx)(me,{})},fe=n(74),Oe=n.n(fe),he=Object(j.g)((function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.auth.resetPasswordSuccess})),a=Object(d.c)((function(e){return e.ui.spinner})),s=Object(r.useState)(""),o=Object(h.a)(s,2),u=o[0],j=o[1],b=e.history;Object(r.useEffect)((function(){n&&(b.push("/login"),j(""))}),[n,b]);var m=function(){var e=Object(l.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),ie(u)&&t(Q(u));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(c.a.Fragment,{children:a?Object(w.jsx)(ce,{}):Object(w.jsx)(N,{className:Oe.a.mainwrap,children:Object(w.jsxs)("div",{className:Oe.a.scroll,children:[Object(w.jsx)(Z,{children:"Reset password"}),Object(w.jsx)("form",{onSubmit:m,children:Object(w.jsxs)(q,{children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"email",id:"email",value:u,onChange:function(e){j(e.target.value)}}),Object(w.jsx)(I.a,{className:Oe.a.btn,type:"submit",children:"Recover"})]})})]})})})})),xe=function(){return Object(w.jsx)(he,{})},ve=n(85),ge=n.n(ve),_e=n(96),we=n.n(_e),Ne=function(e){return Object(w.jsx)("table",{className:"".concat(e.className," ").concat(we.a.table," "),children:e.children})},ke=n(97),ye=n.n(ke),Se=function(e){return Object(w.jsx)("tr",{className:"".concat(e.className," ").concat(ye.a.tableheader," "),children:e.children})},Ce=n(98),Ee=n.n(Ce),Ie=n(99),Pe=n.n(Ie),Fe=function(e){return Object(w.jsx)("tr",{className:"".concat(e.className," ").concat(Pe.a.tablerow," "),onClick:e.onClick,children:e.children})},Be=Object(j.g)((function(e){var t=new Date(+e.id),n=[t.getMonth()+1,t.getDate(),t.getFullYear()],r=n[0],c=n[1],a=n[2],s=r<10?"0"+r:""+r,o="".concat(c<10?"0"+c:""+c,"-").concat(s,"-").concat(a),i=e.history;return Object(w.jsxs)(Fe,{onClick:function(){i.push({pathname:"/orders/".concat(e.id)})},className:Ee.a.orderitem,children:[Object(w.jsx)("td",{children:o}),Object(w.jsx)("td",{children:e.orderQuantity}),Object(w.jsx)("td",{children:"$".concat(e.totalAmount.toFixed(2))})]})})),Ae=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.ui.orderListRender})),n=Object(d.c)((function(e){return e.auth.currentUser})),a=Object(r.useState)([]),s=Object(h.a)(a,2),o=s[0],u=s[1],j=Object(r.useState)(""),b=Object(h.a)(j,2),m=b[0],p=b[1],f=n.id;Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return e.prev=1,e.next=4,H.c.collection("userdata").doc(f).collection("userorders").get().then((function(e){if(e.metadata.fromCache)throw new Error("no internet");if(e.empty)throw new Error("no orders");var t=e.docs.map((function(e){return{cartData:JSON.parse(e.data().cartData),id:e.id}}));u(t)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),"no internet"===e.t0.message&&p("Something went wrong. Please check Your internet connection or try again later."),"no orders"===e.t0.message&&p("No order has been made yet!");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}})()(),e(R.b.setOrderListRender(!0))}),[e,t,f]);var O=o.map((function(e){return Object(w.jsx)(Be,{id:e.id,totalAmount:e.cartData.totalAmount,orderQuantity:e.cartData.items.length},e.id)}));return Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:ge.a.scroll,children:[Object(w.jsx)(Z,{children:"order history"}),o.length>0?Object(w.jsx)(Ne,{children:Object(w.jsxs)("tbody",{children:[Object(w.jsxs)(Se,{children:[Object(w.jsx)("th",{children:"Date"}),Object(w.jsx)("th",{children:"Amount"}),Object(w.jsx)("th",{children:"Price"})]}),O]})}):Object(w.jsxs)(c.a.Fragment,{children:[""!==m&&Object(w.jsx)("h3",{className:ge.a.error,children:m}),""===m&&Object(w.jsx)("div",{style:{position:"fixed",left:"calc(50% - 2rem)",top:"calc(50% - 0.5rem)"},children:Object(w.jsx)(L.a,{size:"4rem",color:"secondary"})})]})]})})},De=function(){return Object(w.jsx)(Ae,{})},Re=n(58),Ue=n.n(Re),Le=function(e){return Object(w.jsxs)(Fe,{children:[Object(w.jsxs)("td",{children:['"',e.name,'" - in ',e.type]}),Object(w.jsx)("td",{children:"$".concat(e.price.toFixed(2))}),Object(w.jsx)("td",{children:e.amount})]})},He=Object(j.g)((function(e){var t=Object(d.c)((function(e){return e.auth.currentUser})),n=Object(r.useState)([]),a=Object(h.a)(n,2),s=a[0],o=a[1],u=Object(r.useState)(""),j=Object(h.a)(u,2),b=j[0],m=j[1],p=t.id,f=e.location.pathname.substring(e.location.pathname.lastIndexOf("/")+1);Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.c.collection("userdata").doc(p).collection("userorders").get().then((function(e){if(e.metadata.fromCache)throw new Error("no internet");var t;if(e.docs.forEach((function(e){e.id===f&&(t=JSON.parse(e.data().cartData),o(t))})),!t)throw new Error("no orders")}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),"no internet"===e.t0.message&&m("Something went wrong. Please check Your internet connection or try again later."),"no orders"===e.t0.message&&m("No order has been made yet!");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[p,f]);var O=s.items?s.items.map((function(e){return Object(w.jsx)(Le,{name:e.name,price:e.price,type:e.type,amount:e.amount},e.id)})):[];return Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:Ue.a.scroll,children:[Object(w.jsx)(Z,{children:"order details"}),O.length>0?Object(w.jsx)(Ne,{children:Object(w.jsxs)("tbody",{children:[Object(w.jsxs)(Se,{children:[Object(w.jsx)("th",{children:"Name"}),Object(w.jsx)("th",{children:"Price"}),Object(w.jsx)("th",{children:"Amount"})]}),O,Object(w.jsxs)(Fe,{className:Ue.a.finalrow,children:[Object(w.jsx)("td",{}),Object(w.jsxs)("td",{className:Ue.a.totalAmount,children:["$",s.totalAmount.toFixed(2)]}),Object(w.jsx)("td",{})]})]})}):Object(w.jsxs)(c.a.Fragment,{children:[""!==b&&Object(w.jsx)("h3",{className:Ue.a.error,children:b}),""===b&&Object(w.jsx)("div",{style:{position:"fixed",left:"calc(50% - 2rem)",top:"calc(50% - 0.5rem)"},children:Object(w.jsx)(L.a,{size:"4rem",color:"secondary"})})]})]})})})),Me=function(){return Object(w.jsx)(He,{})},Te=n(75),We=n.n(Te),Je=n(100),ze=n.n(Je),Qe=n(101),Ve=n.n(Qe),Ge=function(e){return Object(w.jsx)("button",{type:e.type||"button",className:"".concat(e.className," ").concat(Ve.a.button," "),onClick:e.onClick,children:e.children})},Ke=n(43),Ye=n.n(Ke),qe=function(e){var t=Object(d.c)((function(e){return e.auth.currentUser})),n=Object(d.b)(),r=function(){n(R.b.setMobileNavMenu(!1))};return Object(w.jsxs)(c.a.Fragment,{children:[!t&&Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(je.c,{to:"/register",activeClassName:Ye.a.active,onClick:r,children:Object(w.jsx)(Ge,{className:Ye.a.navbtn,children:"Register"})}),Object(w.jsx)(je.c,{to:"/login",activeClassName:Ye.a.active,onClick:r,children:Object(w.jsx)(Ge,{className:Ye.a.navbtn,children:"Login"})})]}),t&&Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(Ge,{className:Ye.a.navbtn,onClick:function(){H.b.signOut(),r()},children:"Logout"}),Object(w.jsx)(je.c,{to:"/orders",activeClassName:Ye.a.active,onClick:r,children:Object(w.jsx)(Ge,{className:Ye.a.navbtn,children:"Orders"})})]})]})},Xe=function(){return Object(w.jsx)("div",{className:ze.a.navigation,children:Object(w.jsx)(qe,{})})},$e=n(59),Ze=n.n($e),et=n(102),tt=n.n(et),nt=n(103),rt=n.n(nt),ct=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.ui.mobileNavMenu}));return Object(w.jsxs)(c.a.Fragment,{children:[!t&&Object(w.jsx)("div",{className:Ze.a.menu,children:Object(w.jsx)(tt.a,{fontSize:"large",onClick:function(){e(R.b.setMobileNavMenu(!0))}})}),t&&Object(w.jsx)("div",{className:Ze.a.menu,children:Object(w.jsx)(rt.a,{fontSize:"large",onClick:function(){e(R.b.setMobileNavMenu(!1))}})}),s.a.createPortal(Object(w.jsx)("div",{className:Ze.a.mobileNav,children:t&&Object(w.jsx)("div",{className:Ze.a.popupMenu,children:Object(w.jsx)(qe,{})})}),document.getElementById("overlay"))]})},at=n(104),st=n.n(at),ot=n(137),it=n(76),ut=n.n(it),lt=function(e){var t=Object(r.useContext)(k.a),n=Object(r.useState)(!1),c=Object(h.a)(n,2),a=c[0],s=c[1],o=t.items.reduce((function(e,t){return e+t.amount}),0),i="".concat(ut.a.icon," ").concat(a?ut.a.bump:"");return Object(r.useEffect)((function(){if(0!==o){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[t.items,o]),Object(w.jsx)(ot.a,{showZero:!0,badgeContent:o,color:"primary",onClick:e.onClick,className:ut.a.cart,children:Object(w.jsx)(st.a,{fontSize:"large",className:i})})},jt=function(e){var t=Object(d.c)((function(e){return e.auth.currentUser})),n=Object(d.b)();return Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsxs)("header",{className:We.a.header,children:[Object(w.jsx)(je.b,{to:"/",style:{textDecoration:"none"},children:Object(w.jsx)("h1",{className:We.a.bookshopcaption,onClick:function(){n(R.b.setMobileNavMenu(!1))},children:"Bookshop"})}),Object(w.jsxs)("div",{className:We.a.navlinks,children:[Object(w.jsx)(Xe,{}),Object(w.jsx)(ct,{}),t&&Object(w.jsx)(lt,{onClick:e.onOpen})]})]}),Object(w.jsx)(re,{})]})},dt=n(28),bt=null===localStorage.getItem("cart")?{items:[],totalAmount:0}:JSON.parse(localStorage.getItem("cart")),mt=function(e,t){if("ADD"===t.type){var n,r=e.totalAmount+t.item.price,c=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[c];if(a){var s=Object(u.a)(Object(u.a)({},a),{},{amount:a.amount+1});(n=Object(dt.a)(e.items))[c]=s}else n=e.items.concat(t.item);return localStorage.setItem("cart",JSON.stringify({items:n,totalAmount:r})),{items:n,totalAmount:r}}if("REMOVE_WHOLE"===t.type){var o=e.items.findIndex((function(e){return e.id===t.id})),i=e.items[o],l=e.totalAmount-i.price*i.amount;l=l<0?0:l;var j=e.items.filter((function(e){return e.id!==t.id}));return localStorage.setItem("cart",JSON.stringify({items:j,totalAmount:l})),{items:j,totalAmount:l}}if("REMOVE_ONE"===t.type){var d,b=e.items.findIndex((function(e){return e.id===t.id})),m=e.items[b],p=e.totalAmount-m.price;if(p=p<0?0:p,1===m.amount)d=e.items.filter((function(e){return e.id!==t.id}));else{var f=Object(u.a)(Object(u.a)({},m),{},{amount:m.amount-1});(d=Object(dt.a)(e.items))[b]=f}return localStorage.setItem("cart",JSON.stringify({items:d,totalAmount:p})),{items:d,totalAmount:p}}return"CLEAR"===t.type?(localStorage.setItem("cart",JSON.stringify({items:[],totalAmount:0})),{items:[],totalAmount:0}):bt},pt=function(e){var t=Object(r.useReducer)(mt,bt),n=Object(h.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,clearCart:function(){a({type:"CLEAR"})},addItem:function(e){a({type:"ADD",item:e})},removeWholeItem:function(e){a({type:"REMOVE_WHOLE",id:e})},removeOneItem:function(e){a({type:"REMOVE_ONE",id:e})}};return Object(w.jsx)(k.a.Provider,{value:s,children:e.children})},ft=n(77),Ot=n.n(ft),ht=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(d.c)((function(e){return e.ui.popup})),o=Object(d.c)((function(e){return e.ui.notification})),i="".concat(Ot.a.notification," ").concat(n);return Object(r.useEffect)((function(){if(o){var e=o.status;"error"===e&&a(Ot.a.error),"success"===e&&a(Ot.a.success)}}),[o]),Object(w.jsx)(c.a.Fragment,{children:s?Object(w.jsx)("div",{className:i,children:o.message}):""})},xt=c.a.lazy((function(){return n.e(3).then(n.bind(null,144))})),vt=c.a.lazy((function(){return n.e(4).then(n.bind(null,143))})),gt=function(e){var t=Object(r.useState)(!1),n=Object(h.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(!1),o=Object(h.a)(s,2),i=o[0],l=o[1],j=Object(d.c)((function(e){return e.ui.popup})),b=Object(d.b)();return Object(r.useEffect)((function(){if(j){var e=setTimeout((function(){b(R.b.setPopup(!1))}),4e3);return function(){return clearTimeout(e)}}}),[j,b]),Object(w.jsx)(r.Suspense,{fallback:Object(w.jsx)(ce,{}),children:Object(w.jsxs)(pt,{children:[Object(w.jsx)(jt,Object(u.a)({onOpen:function(){a(!0)}},e)),Object(w.jsx)(ht,{}),e.children,c&&Object(w.jsx)(xt,{onClose:function(){a(!1)},onOrderModalToggle:function(){l(!0)}}),i&&Object(w.jsx)(vt,{onClick:function(){l(!1)}})]})})},_t=function(e){var t=e.currentUser,n=e.path,r=e.component;return Object(w.jsx)(j.b,{path:n,render:function(){return t?Object(w.jsx)(j.a,{to:"/"}):Object(w.jsx)(gt,{children:r})}})},wt=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.auth.currentUser}));return Object(r.useEffect)((function(){var t=H.b.onAuthStateChanged(function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,Object(H.d)(n);case 3:t.sent.onSnapshot((function(t){e(f.setCurrentUser(Object(u.a)({id:t.id},t.data())))})),t.next=8;break;case 7:n||e(f.setCurrentUser(null));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return function(){return t()}}),[e]),t?localStorage.setItem("currentUser",JSON.stringify({currentUser:t})):localStorage.setItem("currentUser",null),Object(w.jsx)(c.a.Fragment,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(_t,{currentUser:t,path:"/register",component:Object(w.jsx)(le,{})}),Object(w.jsx)(_t,{currentUser:t,path:"/login",component:Object(w.jsx)(pe,{})}),Object(w.jsx)(_t,{currentUser:t,path:"/resetPassword",component:Object(w.jsx)(xe,{})}),Object(w.jsx)(_t,{currentUser:!t,path:"/orders/:orderId",component:Object(w.jsx)(Me,{})}),Object(w.jsx)(_t,{currentUser:!t,path:"/orders",component:Object(w.jsx)(De,{})}),Object(w.jsx)(_t,{currentUser:!1,path:"/",component:Object(w.jsx)(T,{})})]})})},Nt=Object(b.a)({reducer:{auth:O.reducer,ui:R.a.reducer}});s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(d.a,{store:Nt,children:Object(w.jsx)(je.a,{basename:"/",children:Object(w.jsx)(wt,{})})})}),document.getElementById("root"))},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(51),c=Object(r.b)({name:"ui",initialState:{spinner:null,notification:null,popup:!1,mobileNavMenu:!1,orderListRender:!0},reducers:{showSpinner:function(e,t){e.spinner=t.payload},setNotification:function(e,t){e.notification={status:t.payload.status,message:t.payload.message}},setPopup:function(e,t){e.popup=t.payload},setMobileNavMenu:function(e,t){e.mobileNavMenu=t.payload},setOrderListRender:function(e,t){e.orderListRender=t.payload}}});t.a=c;var a=c.actions},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return b}));var r=n(0),c=n.n(r),a=n(30),s=n(1),o=n(57);n(123),n(117);o.a.initializeApp({apiKey:"AIzaSyDKWKsqJ1vgUss06Laxv8_mO414ZFSGXpk",authDomain:"react-bookshop-4ca2f.firebaseapp.com",projectId:"react-bookshop-4ca2f",storageBucket:"react-bookshop-4ca2f.appspot.com",messagingSenderId:"633472712977",appId:"1:633472712977:web:f3fa9651dac7b2142d0cb0"});var i=o.a.auth(),u=o.a.firestore(),l=new o.a.auth.GoogleAuthProvider;l.setCustomParameters({prompt:"select_account"});var j=function(){return i.signInWithPopup(l)},d=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,s,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=t.uid,s=t.displayName,o=t.email,i=u.doc("users/".concat(r)),e.next=6,i.get();case 6:if(e.sent.exists){e.next=17;break}return l=(new Date).getTime(),e.prev=9,e.next=12,i.set(Object(a.a)({displayName:s,email:o,createdDate:l},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=(new Date).getTime(),a=u.doc("userdata/".concat(t,"/userorders/").concat(r)),e.prev=4,e.next=7,a.set({cartData:JSON.stringify(n)});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n){return e.apply(this,arguments)}}()},36:function(e,t,n){"use strict";var r=n(87),c=n.n(r),a=n(3);t.a=function(e){return Object(a.jsx)("button",{type:e.type||"button",className:"".concat(e.className," ").concat(c.a.button," "),onClick:e.onClick,disabled:e.disabled||!1,children:e.children})}},43:function(e,t,n){e.exports={active:"NavLinks_active__133j8",navbtn:"NavLinks_navbtn__2x9ew"}},46:function(e,t,n){e.exports={mainwrap:"SignIn_mainwrap__2EbRg",scroll:"SignIn_scroll__38gae",btn:"SignIn_btn__I-4z1",btnGoogle:"SignIn_btnGoogle__2iKmU",resetWrap:"SignIn_resetWrap__29k2b",reset:"SignIn_reset__2Q5WU"}},47:function(e,t,n){"use strict";var r=n(5),c=n.n(r).a.createContext({items:[],totalAmount:0,clearCart:function(){},addItem:function(e){},removeWholeItem:function(e){},removeOneItem:function(e){}});t.a=c},52:function(e,t,n){e.exports={book:"BookItem_book__5vnL1",price:"BookItem_price__1jQEL",moreinfo:"BookItem_moreinfo__1pP5a",name:"BookItem_name__3W6eH",shake:"BookItem_shake__1yLAw"}},56:function(e,t,n){e.exports={scroll:"Books_scroll__24MDJ",searchheader:"Books_searchheader__2QJMd",titlesearchbar:"Books_titlesearchbar__3hQ2U",error:"Books_error__CFydQ"}},58:function(e,t,n){e.exports={totalAmount:"OrderDetails_totalAmount__6SjF8",scroll:"OrderDetails_scroll__PSQQF",finalrow:"OrderDetails_finalrow__1gSB1",error:"OrderDetails_error__2DekD"}},59:function(e,t,n){e.exports={menu:"MobileNavigation_menu__1Nr9m",mobileNav:"MobileNavigation_mobileNav__2DNHw",popupMenu:"MobileNavigation_popupMenu__1WdEH"}},61:function(e,t,n){"use strict";var r=n(88),c=n.n(r),a=n(3);t.a=function(e){return Object(a.jsx)("div",{className:c.a.backdrop,onClick:e.onClick})}},70:function(e,t,n){e.exports={form:"BookItemForm_form__Zzh86",select:"BookItemForm_select__3n7TT",item:"BookItemForm_item__2KFqX"}},71:function(e,t,n){e.exports={detailsmodal:"BookDetails_detailsmodal__2Of-5","details-appear":"BookDetails_details-appear__kIAQJ",details:"BookDetails_details__HmNdv",btn:"BookDetails_btn__1ntyc"}},72:function(e,t,n){e.exports={scroll:"SignUp_scroll__2wpKi",mainwrap:"SignUp_mainwrap__j_HHg",btn:"SignUp_btn__CwJwc"}},73:function(e,t,n){e.exports={"form-control":"InputWrap_form-control__3yjlN",invalid:"InputWrap_invalid__2tGH-"}},74:function(e,t,n){e.exports={mainwrap:"PasswordRecovery_mainwrap__3aBko",btn:"PasswordRecovery_btn__wWhOd",scroll:"PasswordRecovery_scroll__gOUFJ"}},75:function(e,t,n){e.exports={header:"Header_header__1VCKf",navlinks:"Header_navlinks__2XzKG"}},76:function(e,t,n){e.exports={cart:"HeaderBtn_cart__2SqFc",icon:"HeaderBtn_icon__3bQ4x",bump:"HeaderBtn_bump__2w7kt"}},77:function(e,t,n){e.exports={notification:"FormSubmissionPopup_notification__2BwXG",error:"FormSubmissionPopup_error__Lhi_4",success:"FormSubmissionPopup_success__1k1JD"}},85:function(e,t,n){e.exports={scroll:"Orders_scroll__1Wera",error:"Orders_error__H6CPw"}},86:function(e,t,n){e.exports={card:"Card_card__1m44e"}},87:function(e,t,n){e.exports={button:"Button_button__6-R6B"}},88:function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__1uHu4"}},93:function(e,t,n){e.exports={caption:"Caption_caption__3jnYN"}},94:function(e,t,n){e.exports={"main-image":"BackgroundImage_main-image__w64W_"}},96:function(e,t,n){e.exports={table:"Table_table__TN-qc"}},97:function(e,t,n){e.exports={tableheader:"TableHeader_tableheader__2x_CQ"}},98:function(e,t,n){e.exports={orderitem:"OrderItem_orderitem__32WQH"}},99:function(e,t,n){e.exports={tablerow:"TableRow_tablerow__37u9-"}}},[[121,1,2]]]);
//# sourceMappingURL=main.9013620e.chunk.js.map