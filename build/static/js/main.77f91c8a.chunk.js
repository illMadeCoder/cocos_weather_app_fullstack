(this.webpackJsonpcocos_website=this.webpackJsonpcocos_website||[]).push([[0],{32:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),r=n(10),a=n.n(r),c=(n(32),n(4)),s=n.n(c),l=n(5),d=n(2),u=n(12),h=n.n(u),g="/api/location";function b(){return(b=Object(l.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(g+"?zipcode="+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(l.a)(s.a.mark((function t(){var e,n,o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,e){return navigator.geolocation.getCurrentPosition(t,e)}));case 2:return e=t.sent,n=e.coords.latitude,o=e.coords.longitude,t.next=7,h.a.get(g+"?lat="+n+"&lng="+o);case 7:return i=t.sent,t.abrupt("return",i.data);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var p={get:function(){return f.apply(this,arguments)},getbyzipcode:function(t){return b.apply(this,arguments)}},m=n(13),j=n.n(m),w=n(0);j.a.setAppElement("#root");var v=function(t){var e=t.show,n=t.prevZipCode,i=t.handleNewZipCode,r=t.handleBadZipCode,a=t.isBadZipCode,c=Object(o.useState)(n),s=Object(d.a)(c,2),l=s[0],u=s[1];return Object(w.jsxs)(j.a,{isOpen:e,onAfterOpen:function(){},onRequestClose:function(){},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",backgroundColor:"lightcoral"}},children:[Object(w.jsx)("h2",{style:{color:"white",fontFamily:"Patrick Hand",fontSize:"4em",marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:!0===a?"We Don't know that Zip Code Try Again":"Type in a ZipCode!"}),Object(w.jsx)("form",{onSubmit:function(t){t.preventDefault(),/^\d{5}$/.test(l)?i(l):r(l)},children:Object(w.jsx)("input",{autoFocus:!0,onChange:function(t){/^\d{0,5}$/.test(t.target.value)&&u(t.target.value)},value:l,style:{fontFamily:"Patrick Hand",fontSize:"4em",width:"100%",marginLeft:"auto",marginRight:"auto",textAlign:"center"}})})]})},x=function(t){var e=t.title;return Object(w.jsx)("div",{style:{backgroundColor:"pink",borderBottom:"solid 1vw lightcoral",paddingTop:"1vw",height:"fit-content"},children:Object(w.jsx)("h1",{style:{backgroundColor:"lightcoral",borderRadius:"3vw",width:"fit-content",height:"fit-content",paddingLeft:"2%",paddingRight:"2%",color:"white",fontFamily:"Patrick Hand",fontSize:"10vw",marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:e})})},O=n(14),y=function(t){var e=t.temperature,n=t.time,o=t.weatherCode,i="warm",r="clear";if(n&&n.length>1){var a=Number(n.match(/^\d\d?/)[0]),c=n.match(/PM|AM/)[0];if(i=a>=8&&a<12&&"PM"===c||(a<6||12===a)&&"AM"===c?"late":e<=30?"snow":e<=60?"cold":e<=80?"medium":"warm",a>=8&&"PM"===c||a<6&&"AM"===c)r=e<=40?"late_cold":"late_warm";else for(var s=0,l=Object.entries({clear:[113],partly_cloudy:[116,119],cloudy:[122,143,176,179,200,248,260,263,266,281,293,296],rain:[296,299,302,205,208,356,359,362,377,386,389,392],snow:[227,230,281,284,311,314,317,320,323,326,329,335,338,350,365,368,374,395]});s<l.length;s++){var u=Object(d.a)(l[s],2),h=u[0];if(u[1].includes(o)){r=h;break}}}return Object(w.jsxs)("div",{style:{border:"solid lightcoral",borderRadius:"2vw",borderWidth:"1vw",maxHeight:"100vh",height:"80vw",width:"80vw",maxWidth:"100vh",marginLeft:"auto",marginRight:"auto",backgroundImage:"url(./scenes/".concat(i,".png)"),backgroundSize:"100% 100%",backgroundPosition:"center"},children:[Object(w.jsx)(O.Textfit,{mode:"single",forceSingleModeWidth:!1,max:1e3,style:{backgroundColor:"yellow",backgroundImage:"url(./icons/".concat(r,".png)"),backgroundPosition:"center",backgroundSize:"cover",width:"25%",height:"25%",marginLeft:"auto",marginRight:"2%",marginTop:"2%",border:"solid lightcoral",color:"white",textShadow:"-.015em -.015em 0 #000, .015em -.015em 0 #000, -.015em .015em 0 #000, .015em .015em 0 #000",borderRadius:"10%",fontWeight:"bold"},children:"".concat(e,"\xb0")}),Object(w.jsx)(O.Textfit,{mode:"single",max:1e3,style:{backgroundColor:"pink",backgroundPosition:"center",backgroundSize:"cover",width:"25%",height:"8%",marginLeft:"auto",marginRight:"2%",marginTop:"2%",border:"solid lightcoral",color:"white",borderRadius:"10%",textAlign:"center",fontWeight:"bold",paddingLeft:"1%",paddingRight:"1%",paddingBottom:"9%"},children:"".concat(n)})]})},C=function(){return Object(w.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%",backgroundColor:"lightcoral",borderRadius:"2vw",border:"pink"},children:[Object(w.jsx)("h2",{style:{color:"white",fontSize:"5vw",fontFamily:"Patrick Hand",paddingLeft:"2%",marginTop:"1%"},children:"What is this?"}),Object(w.jsx)("h2",{style:{color:"white",fontSize:"4vw",fontFamily:"Patrick Hand",paddingLeft:"2vw",paddingRight:"2vw"},children:" coco's weather app presents the solution for when you just don't know what to wear outside! Come night, rain, snow, or sunshine this app will make sure you're appropriately dressed for the occasion...."})]})},k=function(t){var e=t.listOfCredits;return Object(w.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%",minWidth:"80%",backgroundColor:"lightcoral",borderRadius:"2vw",border:"pink"},children:[Object(w.jsx)("h2",{style:{color:"white",fontSize:"5vw",fontFamily:"Patrick Hand",paddingLeft:"2%",marginTop:"1%"},children:"Who Made This?"}),e.map((function(t){return Object(w.jsxs)("h2",{style:{color:"white",fontSize:"4vw",fontFamily:"Patrick Hand",paddingLeft:"2%"},children:["> ",t]},t)}))]})},S=function(t){var e=t.handleClick,n=t.location;return Object(w.jsx)("button",{onClick:function(){return e()},style:{width:"50%",marginLeft:"auto",marginRight:"auto",backgroundColor:"lightcoral",border:"none",fontFamily:"Patrick Hand",fontSize:"6vw",outline:"none",color:"white"},children:"Change Location (".concat(n,")")})},F=n(27),R=n.n(F),L=function(){return Object(w.jsx)("div",{className:"sweet-loading",style:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, 50%)"},children:Object(w.jsx)(R.a,{color:"#FFB7FE"})})};var P=function(){var t=Object(o.useState)(0),e=Object(d.a)(t,2),n=e[0],i=e[1],r=Object(o.useState)(0),a=Object(d.a)(r,2),c=a[0],u=a[1],h=Object(o.useState)(""),g=Object(d.a)(h,2),b=g[0],f=g[1],m=Object(o.useState)(!1),j=Object(d.a)(m,2),O=j[0],F=j[1],R=Object(o.useState)(null),P=Object(d.a)(R,2),z=P[0],E=P[1],T=Object(o.useState)(null),A=Object(d.a)(T,2),B=A[0],H=A[1],M=Object(o.useState)(!1),W=Object(d.a)(M,2),Z=W[0],D=W[1],I=Object(o.useState)(!1),N=Object(d.a)(I,2),_=N[0],G=N[1],J=Object(o.useState)(null),U=Object(d.a)(J,2),$=U[0],q=U[1];return Object(o.useEffect)((function(){Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(D(!1),G(!1),t.prev=2,!B){t.next=9;break}return t.next=6,p.getbyzipcode(B);case 6:t.t0=t.sent,t.next=12;break;case 9:return t.next=11,p.get();case 11:t.t0=t.sent;case 12:e=t.t0,f(e.time),i(e.temperature),E(e.zipcode),u(e.weatherCode),G(!1),F(!1),D(!0),H(e.zipcode),q(e.name),t.next=30;break;case 24:t.prev=24,t.t1=t.catch(2),G(!0),D(!0),F(!0),console.log(t.t1);case 30:case"end":return t.stop()}}),t,null,[[2,24]])})))()}),[B]),Z&&n&&c&&b&&z?Object(w.jsxs)("div",{style:{backgroundColor:"#D011FF",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF77CF'/%3E%3Cstop offset='1' stop-color='%23F3FF78'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='12' height='12' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23D011FF' cx='6' cy='6' r='6'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.08'/%3E%3C/svg%3E\")",backgroundAttachment:"fixed"},children:[Object(w.jsx)(v,{show:O||_,zipcode:z,isBadZipCode:_,handleNewZipCode:function(t){E(t),H(t),F(!1)},handleBadZipCode:function(t){F(!0),G(!0)}}),Object(w.jsxs)("div",{className:"flex",style:{display:"flex",flexDirection:"column",minHeight:"100vh",gap:"1vw"},children:[Object(w.jsx)(x,{title:"Coco's Weather App!"}),Object(w.jsx)(y,{temperature:n,time:b,weatherCode:c}),Object(w.jsx)(S,{handleClick:function(){F(!0)},location:$}),Object(w.jsx)("div",{style:{flexGrow:1}}),Object(w.jsx)(C,{}),Object(w.jsx)(k,{listOfCredits:["inventor Coco Moore","developer Jesse Bergerstock","artist Jasmine Sutton"],style:{marginBottom:"auto"}}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{style:{flexGrow:1}})]})]}):Object(w.jsx)(L,{})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),i(t),r(t),a(t)}))};a.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root")),z()}},[[79,1,2]]]);
//# sourceMappingURL=main.77f91c8a.chunk.js.map