(this.webpackJsonpcocos_website=this.webpackJsonpcocos_website||[]).push([[0],{32:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(11),a=n.n(i),c=(n(32),n(4)),s=n.n(c),d=n(6),l=n(2),u=n(13),h=n.n(u),g="/api/location";function b(){return(b=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(g+"?zipcode="+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(s.a.mark((function e(){var t,n,o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}));case 2:return t=e.sent,n=t.coords.latitude,o=t.coords.longitude,e.next=7,h.a.get(g+"?lat="+n+"&lng="+o);case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p={get:function(){return f.apply(this,arguments)},getbyzipcode:function(e){return b.apply(this,arguments)}},j=n(5),m=n.n(j),w=n(0);m.a.setAppElement("#root");var O=function(e){var t=e.show,n=e.setShow,r=e.prevZipCode,i=e.handleNewZipCode,a=(e.handleBadZipCode,e.isBadZipCode),c=Object(o.useState)(r),s=Object(l.a)(c,2),d=s[0],u=s[1];return Object(w.jsxs)(m.a,{id:"changeLocationModal",isOpen:t,onAfterOpen:function(){},onRequestClose:function(){},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",backgroundColor:"lightcoral"}},children:[Object(w.jsx)("h2",{style:{color:"white",fontFamily:"Patrick Hand",fontSize:"4em",marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:!0===a?"Unknown ZipCode - Try Again":"Type in a ZipCode!"}),Object(w.jsx)("form",{id:"changeLocationForm",onSubmit:function(e){e.preventDefault(),i(d)},children:Object(w.jsx)("input",{autoFocus:!0,id:"newZipCode",onChange:function(e){u(e.target.value)},onBlur:function(e){n(!1)},value:d,style:{fontFamily:"Patrick Hand",fontSize:"4em",width:"100%",marginLeft:"auto",marginRight:"auto",textAlign:"center"}})})]})},v=function(e){var t=e.title;return Object(w.jsx)("div",{style:{backgroundColor:"pink",borderBottom:"solid 1vw lightcoral",paddingTop:"1vw",height:"fit-content"},children:Object(w.jsx)("h1",{style:{backgroundColor:"lightcoral",borderRadius:"3vw",width:"fit-content",height:"fit-content",paddingLeft:"2%",paddingRight:"2%",color:"white",fontFamily:"Patrick Hand",fontSize:"10vw",marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:t})})},x=n(14),y=function(e){var t=e.temperature,n=e.time,o=e.weatherCode,r="warm",i="clear";if(n&&n.length>1){var a=Number(n.match(/^\d\d?/)[0]),c=n.match(/PM|AM/)[0];if(r=a>=8&&a<12&&"PM"===c||(a<6||12===a)&&"AM"===c?t<=60?"late_cold":"late_warm":t<=30?"snow":t<=60?"cold":t<=80?"medium":"warm",a>=8&&"PM"===c||a<6&&"AM"===c)i="late";else for(var s=0,d=Object.entries({clear:[113],partly_cloudy:[116,119],cloudy:[122,143,176,179,200,248,260,263,266,281,293,296],rain:[296,299,302,205,208,356,359,362,377,386,389,392],snow:[227,230,281,284,311,314,317,320,323,326,329,335,338,350,365,368,374,395]});s<d.length;s++){var u=Object(l.a)(d[s],2),h=u[0];if(u[1].includes(o)){i=h;break}}}return Object(w.jsxs)("div",{style:{border:"solid lightcoral",borderRadius:"2vw",borderWidth:"1vw",maxHeight:"100vh",height:"80vw",width:"80vw",maxWidth:"100vh",marginLeft:"auto",marginRight:"auto",backgroundImage:"url(./scenes/".concat(r,".png)"),backgroundSize:"100% 100%",backgroundPosition:"center"},children:[Object(w.jsx)(x.Textfit,{mode:"single",forceSingleModeWidth:!1,max:1e3,style:{backgroundColor:"yellow",backgroundImage:"url(./icons/".concat(i,".png)"),backgroundPosition:"center",backgroundSize:"cover",width:"25%",height:"25%",marginLeft:"auto",marginRight:"2%",marginTop:"2%",border:"solid lightcoral",color:"white",textShadow:"-.015em -.015em 0 #000, .015em -.015em 0 #000, -.015em .015em 0 #000, .015em .015em 0 #000",borderRadius:"10%",fontWeight:"bold"},children:"".concat(t,"\xb0")}),Object(w.jsx)(x.Textfit,{mode:"single",max:1e3,style:{backgroundColor:"pink",backgroundPosition:"center",backgroundSize:"cover",width:"25%",height:"8%",marginLeft:"auto",marginRight:"2%",marginTop:"2%",border:"solid lightcoral",color:"white",borderRadius:"10%",textAlign:"center",fontWeight:"bold",paddingLeft:"1%",paddingRight:"1%",paddingBottom:"9%"},children:"".concat(n)})]})},k=function(){return Object(w.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%",backgroundColor:"lightcoral",borderRadius:"2vw",border:"pink"},children:[Object(w.jsx)("h2",{style:{color:"white",fontSize:"5vw",fontFamily:"Patrick Hand",paddingLeft:"2%",marginTop:"1%"},children:"What is this?"}),Object(w.jsx)("h2",{style:{color:"white",fontSize:"4vw",fontFamily:"Patrick Hand",paddingLeft:"2vw",paddingRight:"2vw"},children:" coco's weather app presents the solution for when you just don't know what to wear outside! Come night, rain, snow, or sunshine this app will make sure you're appropriately dressed for the occasion...."})]})},C=function(e){var t=e.listOfCredits;return Object(w.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%",minWidth:"80%",backgroundColor:"lightcoral",borderRadius:"2vw",border:"pink"},children:[Object(w.jsx)("h2",{style:{color:"white",fontSize:"5vw",fontFamily:"Patrick Hand",paddingLeft:"2%",marginTop:"1%"},children:"Who Made This?"}),t.map((function(e){return Object(w.jsxs)("h2",{style:{color:"white",fontSize:"4vw",fontFamily:"Patrick Hand",paddingLeft:"2%"},children:["> ",e]},e)}))]})},S=function(e){var t=e.handleClick,n=e.location;return Object(w.jsx)("button",{onClick:function(){return t()},style:{width:"50%",marginLeft:"auto",marginRight:"auto",backgroundColor:"lightcoral",border:"none",fontFamily:"Patrick Hand",fontSize:"6vw",outline:"none",color:"white"},children:"Change Location (".concat(n,")")})},L=n(27),R=n.n(L),P=function(){return Object(w.jsx)("div",{className:"sweet-loading",style:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, 50%)"},children:Object(w.jsx)(R.a,{color:"#FFB7FE"})})};m.a.setAppElement("#root");var z=function(e){var t=e.errorMessage;return Object(w.jsx)(m.a,{isOpen:t,children:Object(w.jsx)("h2",{children:t})})};var F=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(0),a=Object(l.a)(i,2),c=a[0],u=a[1],h=Object(o.useState)(""),g=Object(l.a)(h,2),b=g[0],f=g[1],j=Object(o.useState)(!1),m=Object(l.a)(j,2),x=m[0],L=m[1],R=Object(o.useState)(null),F=Object(l.a)(R,2),M=F[0],A=F[1],B=Object(o.useState)(null),T=Object(l.a)(B,2),H=T[0],Z=T[1],W=Object(o.useState)(!1),E=Object(l.a)(W,2),N=E[0],_=E[1],I=Object(o.useState)(!1),J=Object(l.a)(I,2),D=J[0],G=J[1],q=Object(o.useState)(null),U=Object(l.a)(q,2),K=U[0],Q=U[1],V=Object(o.useState)(null),X=Object(l.a)(V,2),Y=X[0],$=X[1];return Object(o.useEffect)((function(){Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!1),G(!1),e.prev=2,!H){e.next=9;break}return e.next=6,p.getbyzipcode(H);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,p.get();case 11:e.t0=e.sent;case 12:t=e.t0,f(t.time),r(t.temperature),A(t.zipcode),u(t.weatherCode),G(!1),L(!1),_(!0),Z(t.zipcode),Q(t.name),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(2),e.t1.response&&(400===e.t1.response.status?(G(!0),_(!0),L(!0)):$(e.t1.response.data));case 27:case"end":return e.stop()}}),e,null,[[2,24]])})))()}),[H]),Y?Object(w.jsx)(z,{errorMessage:Y}):N&&n&&c&&b&&M?Object(w.jsxs)("div",{style:{backgroundColor:"deepskyblue"},children:[Object(w.jsx)(O,{show:x||D,setShow:function(e){return L(e)},zipcode:M,isBadZipCode:D,handleNewZipCode:function(e){e?(A(e),Z(e),L(!1)):(L(!1),G(!1))},handleBadZipCode:function(e){L(!0),G(!0)}}),Object(w.jsxs)("div",{className:"flex",style:{display:"flex",flexDirection:"column",minHeight:"100vh",gap:"1vw"},children:[Object(w.jsx)(v,{title:"Coco's Weather App!"}),Object(w.jsx)(y,{temperature:n,time:b,weatherCode:c}),Object(w.jsx)(S,{handleClick:function(){L(!0)},location:K}),Object(w.jsx)("div",{style:{flexGrow:1}}),Object(w.jsx)(k,{}),Object(w.jsx)(C,{listOfCredits:["inventor Coco Moore","developer Jesse Bergerstock","artist Jasmine Sutton"],style:{marginBottom:"auto"}}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{style:{flexGrow:1}})]})]}):Object(w.jsx)(P,{})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))};a.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(F,{})}),document.getElementById("root")),M()}},[[79,1,2]]]);
//# sourceMappingURL=main.83f8c42e.chunk.js.map