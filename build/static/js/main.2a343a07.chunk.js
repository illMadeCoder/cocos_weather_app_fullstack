(this.webpackJsonpcocos_website=this.webpackJsonpcocos_website||[]).push([[0],{27:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),r=n(7),a=n.n(r),c=(n(27),n(3)),d=n(8),l=n.n(d),s="/api/location";var u={get:function(){return new Promise((function(t,e){return navigator.geolocation.getCurrentPosition(t,e)})).then((function(t){var e=t.coords.latitude,n=t.coords.longitude;return l.a.get(s+"?lat="+e+"&lng="+n)})).then((function(t){return t.data}))},getbyzipcode:function(t){return l.a.get(s+"?zipcode="+t).then((function(t){return t.data}))}},h=n(9),g=n(10),b=n.n(g),f=n(0);b.a.setAppElement("#root");var j=function(t){var e=t.title;return Object(f.jsx)("div",{style:{backgroundColor:"pink",borderBottom:"solid 1vw lightcoral",paddingTop:"1vw",height:"fit-content"},children:Object(f.jsx)("h1",{style:{backgroundColor:"lightcoral",borderRadius:"3vw",width:"fit-content",height:"fit-content",paddingLeft:"2%",paddingRight:"2%",color:"white",fontFamily:"Patrick Hand",fontSize:"10vw",marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:e})})},m=function(t){var e=t.temperature,n=t.time,o=t.weatherCode,i="warm",r="clear";if(n&&n.length>1){var a=Number(n.match(/^\d\d?/)[0]),d=n.match(/PM|AM/)[0];if(i=a>=8&&"PM"===d||a<6&&"AM"===d?"late":e<=30?"snow":e<=60?"cold":e<=80?"medium":"warm",a>=8&&"PM"===d||a<6&&"AM"===d)r="late";else for(var l=0,s=Object.entries({clear:[113],partly_cloudy:[116,119],cloudy:[122,143,176,179,200,248,260,263,266,281,293,296],rain:[296,299,302,205,208,356,359,362,377,386,389,392],snow:[227,230,281,284,311,314,317,320,323,326,329,335,338,350,365,368,374,395]});l<s.length;l++){var u=Object(c.a)(s[l],2),g=u[0];if(u[1].includes(o)){r=g;break}}}return Object(f.jsxs)("div",{style:{border:"solid lightcoral",borderRadius:"2vw",borderWidth:"1vw",maxHeight:"100vh",height:"80vw",width:"80vw",maxWidth:"100vh",marginLeft:"auto",marginRight:"auto",backgroundImage:"url(./scenes/".concat(i,".png)"),backgroundSize:"100% 100%",backgroundPosition:"center"},children:[Object(f.jsx)(h.Textfit,{mode:"single",forceSingleModeWidth:!1,max:1e3,style:{backgroundColor:"yellow",backgroundImage:"url(./icons/".concat(r,".png)"),backgroundPosition:"center",backgroundSize:"cover",width:"25%",height:"25%",marginLeft:"auto",marginRight:"2%",marginTop:"2%",border:"solid lightcoral",color:"white",textShadow:"-.015em -.015em 0 #000, .015em -.015em 0 #000, -.015em .015em 0 #000, .015em .015em 0 #000",borderRadius:"10%",fontWeight:"bold"},children:"".concat(e,"\xb0")}),Object(f.jsx)(h.Textfit,{mode:"single",max:1e3,style:{backgroundColor:"pink",backgroundPosition:"center",backgroundSize:"cover",width:"25%",height:"8%",marginLeft:"auto",marginRight:"2%",marginTop:"2%",border:"solid lightcoral",color:"white",borderRadius:"10%",textAlign:"center",fontWeight:"bold",paddingLeft:"1%",paddingRight:"1%",paddingBottom:"9%"},children:"".concat(n)})]})},p=function(){return Object(f.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%",backgroundColor:"lightcoral",borderRadius:"2vw",border:"pink"},children:[Object(f.jsx)("h2",{style:{color:"white",fontSize:"5vw",fontFamily:"Patrick Hand",paddingLeft:"2%",marginTop:"1%"},children:"What is this?"}),Object(f.jsx)("h2",{style:{color:"white",fontSize:"4vw",fontFamily:"Patrick Hand",paddingLeft:"2vw",paddingRight:"2vw"},children:" coco's weather app presents the solution for when you just don't know what to wear outside! Come night, rain, snow, or sunshine this app will make sure you're appropriately dressed for the occasion...."})]})},w=function(t){var e=t.listOfCredits;return Object(f.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%",minWidth:"80%",backgroundColor:"lightcoral",borderRadius:"2vw",border:"pink"},children:[Object(f.jsx)("h2",{style:{color:"white",fontSize:"5vw",fontFamily:"Patrick Hand",paddingLeft:"2%",marginTop:"1%"},children:"Who Made This?"}),e.map((function(t){return Object(f.jsxs)("h2",{style:{color:"white",fontSize:"4vw",fontFamily:"Patrick Hand",paddingLeft:"2%"},children:["> ",t]},t)}))]})},v=function(t){var e=t.handleClick,n=t.zipcode;return Object(f.jsx)("button",{onClick:function(){return e()},style:{width:"50%",marginLeft:"auto",marginRight:"auto",backgroundColor:"lightcoral",border:"none",fontFamily:"Patrick Hand",fontSize:"6vw",outline:"none",color:"white"},children:"Change Zip Code (".concat(n,")")})},O=function(t){var e=t.show,n=t.prevZipCode,i=t.handleNewZipCode,r=t.handleBadZipCode,a=Object(o.useState)(n),d=Object(c.a)(a,2),l=d[0],s=d[1];return Object(f.jsxs)(b.a,{isOpen:e,onAfterOpen:function(){},onRequestClose:function(){},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"lightcoral"}},children:[Object(f.jsx)("h2",{style:{color:"white",fontFamily:"Patrick Hand"},children:"Type in a ZipCode!"}),Object(f.jsx)("form",{onSubmit:function(t){t.preventDefault(),/^\d{5}$/.test(l)?i(l):r(l)},children:Object(f.jsx)("input",{autoFocus:!0,onChange:function(t){return s(t.target.value)}})})]})};var x=function(){var t=Object(o.useState)(0),e=Object(c.a)(t,2),n=e[0],i=e[1],r=Object(o.useState)(0),a=Object(c.a)(r,2),d=a[0],l=a[1],s=Object(o.useState)(""),h=Object(c.a)(s,2),g=h[0],b=h[1],x=Object(o.useState)(!1),k=Object(c.a)(x,2),y=k[0],C=k[1],S=Object(o.useState)(null),R=Object(c.a)(S,2),z=R[0],P=R[1],L=Object(o.useState)(null),F=Object(c.a)(L,2),T=F[0],M=F[1];return Object(o.useEffect)((function(){T?u.getbyzipcode(T).then((function(t){b(t.time),i(t.temperature),P(t.zipcode),l(t.weatherCode)})):u.get().then((function(t){b(t.time),i(t.temperature),P(t.zipcode),l(t.weatherCode)}))}),[z,T]),0!==n?y?Object(f.jsx)("div",{onClick:function(){return C(!1)},style:{backgroundColor:"pink"},children:Object(f.jsx)(O,{show:y,zipcode:z,handleNewZipCode:function(t){P(t),M(t),C(!1)},handleBadZipCode:function(t){C(!1)}})}):Object(f.jsxs)("div",{className:"flex",style:{display:"flex",flexDirection:"column",backgroundColor:"deepskyblue",minHeight:"100vh",gap:"1vw"},children:[Object(f.jsx)(j,{title:"Coco's Weather App!"}),Object(f.jsx)(m,{temperature:n,time:g,weatherCode:d}),Object(f.jsx)(v,{handleClick:function(){C(!0)},zipcode:z}),Object(f.jsx)("div",{style:{flexGrow:1}}),Object(f.jsx)(p,{}),Object(f.jsx)(w,{listOfCredits:["inventor Coco Moore","developer Jesse Bergerstock","artist Jasmine Sutton"],style:{marginBottom:"auto"}}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{style:{flexGrow:1}})]}):Object(f.jsx)("div",{})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),i(t),r(t),a(t)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.2a343a07.chunk.js.map