(this["webpackJsonpleague-tracker"]=this["webpackJsonpleague-tracker"]||[]).push([[0],{40:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(17),n=a.n(c),l=(a(40),a(2)),r=a(5),i=a(7),o=a(35),d=Object(s.createContext)(null);function j(){return Object(s.useContext)(d)}var m,b=a(0),u=["component"],h=function(e){var t=e.component,a=Object(o.a)(e,u),s=j().isAuthenticated;return Object(b.jsx)(r.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return s?Object(b.jsx)(t,Object(i.a)(Object(i.a)({},a),e)):Object(b.jsx)(r.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},O=a(4),p=a(6),x=a.n(p),g=(m={getLeagues:function(e){return x.a.get("/api/leagues/all")},getLeaguesByStr:function(e){return x.a.get("/api/leagues/search/".concat(e))},getLeagueById:function(e){return x.a.get("/api/leagues/".concat(e))}},Object(O.a)(m,"getLeagues",(function(){return x.a.get("/api/leagues/allLeagues")})),Object(O.a)(m,"getTeams",(function(){return x.a.get("/api/teams/allTeams")})),Object(O.a)(m,"getTeamsByLeague",(function(e){return x.a.get("/api/teams/byteam/"+e)})),Object(O.a)(m,"getTeamsByStr",(function(e){return x.a.get("/api/teams/search/".concat(e))})),Object(O.a)(m,"getTeamById",(function(e){return x.a.get("/api/teams/".concat(e))})),Object(O.a)(m,"getTeamByLeague",(function(e){return x.a.get("/api/teams/byteam/".concat(e))})),Object(O.a)(m,"getSingleUserData",(function(e){return x.a.get("/api/players/user/profile/".concat(e))})),Object(O.a)(m,"searchForUsers",(function(e){return x.a.get("/api/players/"+e)})),Object(O.a)(m,"searchUsersByTeam",(function(e){return x.a.get("/api/players/byteam/"+e)})),Object(O.a)(m,"getLoggedInUser",(function(e){return x.a.get("/api/players/user/profile/".concat(e))})),Object(O.a)(m,"updatePlayerImage",(function(e,t){return console.log(t),x.a.put("/api/players/user/profile/change/image/".concat(e),t)})),Object(O.a)(m,"updatePlayerPassword",(function(e,t){return x.a.put("/api/players/user/profile/change/password/".concat(e),t)})),Object(O.a)(m,"updatePlayer",(function(e,t){return x.a.put("/api/players/user/profile/update/".concat(e),t)})),Object(O.a)(m,"adminAddLeague",(function(e){return x.a.post("/api/leagues/add",e)})),Object(O.a)(m,"adminAddTeam",(function(e){return x.a.post("/api/teams/add",e)})),Object(O.a)(m,"adminUpdatePlayer",(function(e,t){return x.a.put("/api/players/update/".concat(e),t)})),Object(O.a)(m,"adminUpdatePlayerTeam",(function(e,t){return x.a.put("/api/players/update/player/team/".concat(e),t)})),Object(O.a)(m,"adminUpdatePlayerStats",(function(e,t){return x.a.put("/api/players/update/player/stats/".concat(e),t)})),Object(O.a)(m,"loginPlayer",(function(e){return x.a.post("/api/user/login",e)})),Object(O.a)(m,"logoutPlayer",(function(){return x.a.post("/api/user/logout")})),Object(O.a)(m,"signupPlayer",(function(e){return console.log(e),x.a.post("/api/user/create",e)})),m),f=a(10),N=a(14),y=a(15),v=(a(68),function(e){var t=e.showModal,a=e.toggle,s=e.query,c=e.results;console.log(c);var n=function(){a()};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal fade ".concat(t?"show":""),id:"passwordModal",style:{display:"".concat(t?"block":"none")},tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",role:"document",children:Object(b.jsxs)("div",{className:"modal-content modalCustom",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsxs)("h5",{className:"modal-title",id:"exampleModalLabel",children:[c.length,' result(s) found for "',s,'"']}),Object(b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:n,children:"X"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)("ul",{children:c&&c.map((function(e){return Object(b.jsx)("li",{className:"searchResult",children:Object(b.jsx)(f.b,{style:{textDecoration:"none"},onClick:n,to:"/player/".concat(e._id),children:Object(b.jsx)("span",{className:"resultText",children:"".concat(e.first_name," ").concat(e.last_name," (").concat(e.position,")")})})},e._id)}))})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("span",{style:{margin:"auto"},children:"Click a link above to go to that player's page!"})})]})})})})}),w=Object(r.h)((function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],m=Object(s.useState)(""),u=Object(l.a)(m,2),h=u[0],O=u[1],p=Object(s.useState)(!1),x=Object(l.a)(p,2),w=x[0],S=x[1],k=j().isAuthenticated,C=j().userHasAuthenticated,P=j(),T=P.sessionUN,L=P.setSessionUN,_=j().setSessionID,I=Object(b.jsx)(N.a,{style:{color:"#264653",fontSize:"2.5rem",paddingLeft:"5px",paddingTop:"5px"},icon:y.a}),F=Object(b.jsx)(N.a,{icon:y.c}),E=Object(b.jsx)(N.a,{icon:y.d}),U=k?Object(b.jsx)(f.c,{className:"nav-link",to:"#",onClick:function(){g.logoutPlayer().then((function(){C(!1),_(""),L(""),e.history.push("/")})).catch((function(e){return console.log(e.message)}))},children:Object(b.jsxs)("span",{className:"linkText",children:[E," Logout"]})}):Object(b.jsx)(f.c,{className:"nav-link",to:"/login",children:Object(b.jsxs)("span",{className:"linkText",children:[F," Login/Sign-Up"]})}),M=Object(b.jsx)(N.a,{icon:y.e}),A=k?Object(b.jsx)(f.c,{className:"nav-link",to:"/user",children:Object(b.jsxs)("span",{className:"linkText",children:[M," ",T]})}):"";Object(s.useEffect)((function(){n("")}),[w]);var B=function(){S(!w)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{toggle:B,showModal:w,results:h,query:o}),Object(b.jsx)("nav",{className:"navbar navbar-expand-md sticky-top navCustom",style:{backgroundColor:"#F75C03",borderBottom:"5px solid #2a9d8f",height:"4rem"},children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(f.b,{className:"navbar-brand",to:"/",children:Object(b.jsxs)("span",{className:"brandText",children:["League Tracker ",I]})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse justify-content-end px-4",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item"}),Object(b.jsxs)("form",{className:"d-flex justify-content-end",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search for a player...","aria-label":"Search",value:c,onChange:function(e){return function(e){n(e.target.value)}(e)}}),Object(b.jsx)("button",{className:"btn buttonCustom",style:{backgroundColor:"#264653",color:"#fff"},type:"submit",onClick:function(e){return function(e){e.preventDefault(),d(c),console.log(""),g.searchForUsers(c).then((function(e){return O(e.data)})).catch((function(e){return console.log(e)})),B()}(e)},children:"Search"})]}),Object(b.jsx)("li",{className:"nav-item px-2",children:A}),Object(b.jsx)("li",{className:"nav-item px-2",children:U})]})})]})})]})})),S=(a(69),function(e){var t=e.name,a=e.stat;return Object(b.jsxs)("li",{className:"list-group-item",children:[t,": ",a]})}),k=Object(r.h)((function(e){var t=Object(s.useState)({}),a=Object(l.a)(t,2),c=a[0],n=a[1],i=Object(r.g)().id,o=[],d=c.stats;console.log(d),Object(s.useEffect)((function(){console.log(i),g.getSingleUserData(i).then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e.message)}))}),[]);var j="https://picsum.photos/200"===c.image?"https://picsum.photos/200":null;if(d){for(var m in d)o.push(Object(b.jsx)(S,{name:m,stat:d[m]},c._id));console.log(o)}return Object(b.jsxs)("div",{className:"card align-items-center playerCard",style:{width:"25rem"},children:[Object(b.jsx)("img",{src:j||"data:image/png;base64,".concat(c.image),className:"card-img-top",alt:"..."}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("h5",{className:"card-title",children:"".concat(c.first_name," ").concat(c.last_name)})}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsx)("li",{className:"card-text jersey",children:"# ".concat(c.jersey)}),Object(b.jsxs)("li",{className:"card-text",children:[Object(b.jsx)("span",{className:"statHeader",children:"Position: "}),"".concat(c.position)]}),o]}),Object(b.jsx)("div",{className:"card-body"})]})})),C=function(e){var t=e.showModal,a=e.toggle,c=e.onSubmit,n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],d=Object(s.useState)(""),j=Object(l.a)(d,2),m=j[0],u=j[1],h=Object(s.useState)(!1),O=Object(l.a)(h,2),p=O[0],x=O[1],g=Object(s.useState)(""),f=Object(l.a)(g,2),N=f[0],y=f[1],v=Object(s.useState)(""),w=Object(l.a)(v,2),S=w[0],k=w[1],C=function(){a()};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal fade ".concat(t?"show":""),id:"passwordModal",style:{display:"".concat(t?"block":"none")},tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",role:"document",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Change Password"}),Object(b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:C,children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"newPassword-1",className:"col-form-label",children:"Enter new password:"}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"newPassword-1",value:N,onChange:function(e){return function(e){y(e),o(e)}(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"newPassword-2",className:"col-form-label",children:"Re-enter new password:"}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"newPassword-2",value:S,onChange:function(e){return function(e){k(e),u(e),x(!0),e===i&&x(!1)}(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"newPassword-2",className:"col-form-label",children:Object(b.jsx)("span",{className:"error ".concat(p?"":"hidden"),children:"Passwords must match."})})]})})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary ".concat(p?"disabled":"","  "),onClick:function(){y(""),k(""),C(),c(m)},children:"Submit new password"})})]})})})})},P=function(e){var t=e.showModal,a=e.toggle,c=e.onEdit,n=e.field,r=Object(s.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],j=Object(s.useState)(""),m=Object(l.a)(j,2),u=m[0],h=m[1],O=function(){a()};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal fade ".concat(t?"show":""),id:"editModal",style:{display:"".concat(t?"block":"none")},tabIndex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",role:"document",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsxs)("h5",{className:"modal-title",id:"modalLabel",children:["Change ",n]}),Object(b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:O,children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("label",{htmlFor:"editForm",className:"col-form-label",children:["Enter a new value for ",n,":"]}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"editForm",value:u,onChange:function(e){return function(e){h(e),d(e)}(e.target.value)}})]})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){h(""),O(),c(n,o)},children:"Submit"})})]})})})})},T=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)({name:"",image:"https://picsum.photos/200",stats:{championships:0,madePlayoffs:!1,rank:0,wins:0,losses:0,draws:0,gamesPlayed:0,goalsScored:0,goalsAgainst:0},league_key:0,key:Math.floor(100*Math.random())}),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("li",{className:"input-group mb-3",children:[Object(b.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Create League"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"League Name","aria-label":"League Name","aria-describedby":"basic-addon1",onChange:function(e){return function(e){n(e)}(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){g.adminAddLeague({name:c,key:Math.floor(100*Math.random()),image:"https://picsum.photos/200"}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},children:"Submit"})]}),Object(b.jsxs)("li",{className:"input-group mb-3",children:[Object(b.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Create Team"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Team Name","aria-label":"Team Name","aria-describedby":"basic-addon1",onChange:function(e){return function(e){console.log(e),j(Object(i.a)(Object(i.a)({},d),{},{name:e})),console.log(d)}(e.target.value)}}),Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"Team",className:"form-label",children:"Select Your League"}),e.leagues.length?Object(b.jsx)("select",{value:d.name,onChange:function(e){return function(e){console.log(e.target.value),j(Object(i.a)(Object(i.a)({},d),{},{league_key:e.target.value}))}(e)},className:"form-select","aria-label":"Default select example",name:"league",children:e.leagues.map((function(e){return Object(b.jsx)("option",{value:e.key,children:e.name},e._id)}))}):Object(b.jsx)("h4",{children:"No teams to display yet."})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){g.adminAddTeam({name:d.name,image:"https://picsum.photos/200",stats:{championships:0,madePlayoffs:!1,rank:0,wins:0,losses:0,draws:0,gamesPlayed:0,goalsScored:0,goalsAgainst:0},league_key:d.league_key,key:Math.floor(100*Math.random())}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},children:"Submit"})]})]})};var L=a(34),_=a.n(L);a(73);var I=function(e){var t=Object(s.useState)({}),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)({}),o=Object(l.a)(r,2),d=o[0],m=o[1],u=Object(s.useState)(!1),h=Object(l.a)(u,2),p=h[0],x=h[1],f=Object(s.useState)(!1),v=Object(l.a)(f,2),w=v[0],S=v[1],k=Object(s.useState)(""),L=Object(l.a)(k,2),I=L[0],F=L[1],E=Object(b.jsx)(N.a,{icon:y.b}),U=j().sessionID,M=j().isAdmin;Object(s.useEffect)((function(){g.getSingleUserData(U).then((function(e){return n(e.data)})).catch((function(e){return console.log(e.message)})),g.getLeagues().then((function(e){return m(e.data)})).catch((function(e){return console.log(e.message)})),console.log(d)}),[I]);var A,B=function(){x(!p)},D=function(e){F(e),S(!w)},R=Object(b.jsx)(T,{leagues:d}),W="https://picsum.photos/200"===c.image?"https://picsum.photos/200":null;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{toggle:B,showModal:p,prevPassword:c.password,onSubmit:function(e){g.updatePlayerPassword(c._id,{password:e}).then((function(e){return e.json(e.data)})).catch((function(e){return console.log(e.message)}))}}),Object(b.jsx)(P,{toggle:D,showModal:w,onEdit:function(e,t){g.updatePlayer(c._id,Object(O.a)({},e,t)).then((function(e){e.json(e.data)})).catch((function(e){return console.log(e.message)}))},field:I}),Object(b.jsxs)("div",{className:"card align-items-center playerCard",children:[Object(b.jsx)("h1",{id:"userName",children:c.username}),Object(b.jsx)("img",{src:W||"data:image/png;base64,".concat(c.image),className:"card-img-top",alt:"..."}),Object(b.jsx)("div",{className:"imageUploader",children:Object(b.jsx)(_.a,{buttonClassName:"uploadButton",withLabel:!1,withIcon:!1,withPreview:!1,singleImage:!0,buttonText:"Upload image",onChange:function(e,t){console.log(t);var a=t[0].split(";base64,").pop();g.updatePlayerImage(c._id,{imageURL:a}).then((function(e){n(Object(i.a)(Object(i.a)({},c),{},{image:e.data.image}))})).catch((function(e){return console.log(e.message)}))},imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880,fileSizeError:"File size is too big. Max size is 5mb."})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:Object(b.jsxs)("span",{className:"nameText",children:[c.first_name," ",c.last_name]})}),Object(b.jsxs)("ul",{className:"card-text",children:[Object(b.jsxs)("li",{className:"infoElement",children:[Object(b.jsxs)("span",{style:{fontWeight:"bolder"},children:["Birthdate:"," "]}),c.date_of_birth&&(A=c.date_of_birth,console.log(A),"".concat(A.slice(5,7),"/").concat(A.slice(8,10),"/").concat(A.slice(0,4)))," ",Object(b.jsxs)("sup",{children:[" ",Object(b.jsx)(N.a,{icon:y.b,className:"editIcon",onClick:function(){return D("date_of_birth")}})]})]}),Object(b.jsxs)("li",{className:"infoElement",children:[Object(b.jsxs)("span",{style:{fontWeight:"bolder"},children:["Email:"," "]}),c.email," ",Object(b.jsxs)("sup",{children:[" ",Object(b.jsx)(N.a,{icon:y.b,className:"editIcon",onClick:function(){return D("email")}})]})]}),Object(b.jsxs)("li",{className:"infoElement",children:[Object(b.jsxs)("span",{style:{fontWeight:"bolder"},children:["Phone:"," "]}),c.phone," ",Object(b.jsxs)("sup",{children:[" ",Object(b.jsx)(N.a,{icon:y.b,className:"editIcon",onClick:function(){return D("phone")}})]})]}),Object(b.jsxs)("li",{className:"infoElement",children:[Object(b.jsxs)("span",{style:{fontWeight:"bolder"},children:["Password:"," "]}),"**********"," ",Object(b.jsx)("sup",{children:Object(b.jsx)("button",{className:"editIcon",onClick:B,children:E})})]})]})]}),Object(b.jsx)("p",{children:"Admin Menu:"}),Object(b.jsx)("ul",{className:"list-group list-group-flush",children:M&&R}),Object(b.jsx)("div",{className:"card-body"})]})]})};var F=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({}),r=Object(l.a)(n,2),o=r[0],d=r[1];function j(){g.getTeams().then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}function m(e){var t=e.target,a=t.id,s=t.value;console.log(e.target),d(Object(i.a)(Object(i.a)({},o),{},Object(O.a)({},a,s)))}return Object(s.useEffect)((function(){j()}),[]),Object(b.jsx)("div",{className:"card w-75 mx-auto mt-5 mb-5",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("div",{className:"jumbotron mx-auto",children:Object(b.jsx)("h2",{className:"display-4 text-center",children:"Register as a Player."})}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"FirstName",className:"form-label",children:"First Name"}),Object(b.jsx)("input",{onChange:m,type:"text",className:"form-control",id:"FirstName",value:o.firstName,name:"first_name"})]}),Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"LastName",className:"form-label",children:"Last Name"}),Object(b.jsx)("input",{onChange:m,type:"text",className:"form-control",id:"LastName",value:o.lastName,name:"last_name"})]}),Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"UserName",className:"form-label",children:"User Name"}),Object(b.jsx)("input",{onChange:m,type:"text",className:"form-control",id:"UserName",value:o.username,name:"username"})]}),Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"InputEmail",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{onChange:m,type:"email",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",value:o.email,name:"email"})]}),Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"InputPassword",className:"form-label",children:"Password"}),Object(b.jsx)("input",{onChange:m,type:"password",className:"form-control",id:"InputPassword",value:o.password,name:"password"})]}),Object(b.jsxs)("div",{className:"mb-3 w-30",children:[Object(b.jsx)("label",{htmlFor:"Team",className:"form-label",children:"Select Your Team"}),a.length?Object(b.jsx)("select",{value:o.team_key,onChange:m,className:"form-select w-30 mb-3","aria-label":"Default select example",name:"team",children:a.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e._id)}))}):Object(b.jsx)("h4",{children:"No teams to display yet."})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),o.firstName&&o.lastName&&o.password&&g.signupPlayer({first_name:o.firstName,last_name:o.lastName,username:o.username,email:o.email,password:o.password,team_key:o.team_key}).then((function(){return d({firstName:"",lastName:"",username:"",email:"",password:"",team:""})})).then((function(){return j()})).catch((function(e){return console.log(e)}))},children:"Register"})]})]})})},E=function(e){var t=Object(s.useState)([]),a=Object(l.a)(t,2),c=a[0],n=a[1],r=e.match.params.id;return Object(s.useEffect)((function(){g.getTeamByLeague(r).then((function(e){return n(e.data)})).catch((function(e){return console.log(e.message)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"jumbotron jumbotron-fluid text-white bg-dark text-center",children:Object(b.jsx)("h1",{children:"Teams List"})}),c.length?Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"row teamCard",children:c.map((function(e){return Object(b.jsx)("div",{className:"col-sm-3",children:Object(b.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:e.image,alt:"Team"}),Object(b.jsx)("div",{className:"card-text",style:{color:"black"},children:Object(b.jsx)("h5",{className:"card-title",children:e.name})}),Object(b.jsxs)("a",{href:"/team/"+e.name,className:"btn btn-primary",children:[e.name," Info"]})]})})}))})}):Object(b.jsx)("h3",{children:"No teams to display"})]})};var U=function(e){var t=Object(s.useState)({}),a=Object(l.a)(t,2),c=a[0],n=a[1],r=j().userHasAuthenticated,o=j().setSessionID,d=j().setSessionUN,m=j().setAdminStatus;function u(e){var t=e.target,a=t.name,s=t.value;n(Object(i.a)(Object(i.a)({},c),{},Object(O.a)({},a,s)))}return Object(b.jsx)("div",{className:"card align-items-center playerCard my-8 pb-5",style:{width:"35rem"},children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"jumbotron",children:Object(b.jsx)("h2",{className:"display-4 text-center mb-5",style:{fontWeight:600},children:"Sign In"})}),Object(b.jsxs)("form",{style:{width:"25rem"},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"InputEmail",className:"form-label",children:"Email Address"}),Object(b.jsx)("input",{onChange:u,value:c.email,type:"email",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",name:"email"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"InputPassword",className:"form-label",children:"Password"}),Object(b.jsx)("input",{onChange:u,value:c.password,type:"password",className:"form-control",id:"InputPassword",name:"password"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault(),c.email&&c.password&&g.loginPlayer({email:c.email,password:c.password}).then((function(t){r(!0),o(t.data._id),d(t.data.username),m(t.data.isAdmin),e.history.push("/")})).then((function(){return n({email:"",password:""})})).catch((function(e){console.log(e),alert("Login failed, please try agian.")}))},children:"Login"})]}),Object(b.jsx)("a",{href:"/register",children:"signup"})]})})})};a(74);var M=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){g.getLeagues().then((function(e){return c(e.data)})).catch((function(e){return console.log(e.message)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"jumbotron jumbotron-fluid text-white text-center",children:[Object(b.jsx)("h1",{className:"welcome",children:"Welcome to the League Tracker!"}),Object(b.jsx)("h2",{className:"explore",children:"Explore all current in-session leagues:"})]}),c.length?Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"row pb-15 text-center",children:a.map((function(e){return Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"card mx-auto",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:e.image,alt:"Team"}),Object(b.jsx)("div",{className:"card-body",style:{color:"black"},children:Object(b.jsx)("h5",{className:"card-title",children:e.name})}),Object(b.jsxs)("a",{href:"/teamsPage/"+e.key,className:"btn btn-primary",children:[e.name," Info"]})]})})}))})}):Object(b.jsx)("h3",{children:"No leagues to display"})]})},A=(a(75),function(){return Object(b.jsx)("footer",{style:{backgroundColor:"#F75C03",borderTop:"5px solid #2a9d8f",height:"4rem"},className:"footer mt-auto py-3 footerCustom",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-10"}),Object(b.jsx)("div",{className:"col-sm-2",children:Object(b.jsx)("span",{className:"footerBrand",children:"League Tracker"})})]})})})}),B=function(e){var t=e.match.params.name;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("a",{href:"/teamstats/"+t,className:"card-link",children:"Team Stats"})})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("a",{href:"/roster/"+t,className:"card-link",children:"Roster"})})})]})},D=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(r.g)().name;Object(s.useEffect)((function(){console.log(n),i()}),[]);var i=function(){g.getTeamsByStr(n).then((function(e){return c(e.data)})).catch((function(e){return console.log(e.message)}))};return Object(b.jsx)(b.Fragment,{children:a.length?Object(b.jsx)("div",{className:"col-sm-3",children:Object(b.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:a[0].image,alt:"Team"}),Object(b.jsx)("div",{className:"card-body",style:{color:"black"},children:Object(b.jsx)("h5",{className:"card-title",children:a[0].name})}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:["Championship: ",a[0].stats[0].championships]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Made Playoffs: ",a[0].stats[0].madePlayoffs]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Rank: ",a[0].stats[0].rank]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Wins: ",a[0].stats[0].wins]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Losses: ",a[0].stats[0].losses]})]})]})}):Object(b.jsx)("p",{children:"Nothing to display"})})};var R=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),i=Object(l.a)(n,2),o=(i[0],i[1],Object(r.g)().name);Object(s.useEffect)((function(){d()}),[]);var d=function(){g.getTeamsByStr(o).then((function(e){g.searchUsersByTeam(e.data[0].key).then((function(e){return c(e.data)})).catch((function(e){return console.log(e.message)}))}))};return Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Image"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Position"}),Object(b.jsx)("th",{scope:"col",children:"Jersey"})]})}),a.map((function(e){return Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.image,className:"img-responsive",style:{width:"2.5rem"},alt:"Player Image"})}),Object(b.jsx)("td",{children:e.first_name+" "+e.last_name}),Object(b.jsx)("td",{children:e.position}),Object(b.jsx)("td",{children:e.jersey})]})})}))]})};a(76);var W=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),i=Object(l.a)(n,2),o=i[0],j=i[1],m=Object(s.useState)(""),u=Object(l.a)(m,2),O=u[0],p=u[1],x=Object(s.useState)(""),g=Object(l.a)(x,2),f=g[0],N=g[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(d.Provider,{value:{isAuthenticated:a,userHasAuthenticated:c,sessionID:O,setSessionID:p,sessionUN:f,setSessionUN:N,isAdmin:o,setAdminStatus:j},children:[Object(b.jsx)(w,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{exact:!0,path:"/",component:M}),Object(b.jsx)(h,{exact:!0,path:"/user",component:I}),Object(b.jsx)(r.b,{path:"/player/:id",component:k}),Object(b.jsx)(r.b,{exact:!0,path:"/register",component:F}),Object(b.jsx)(r.b,{path:"/teamsPage/:id",component:E}),Object(b.jsx)(r.b,{path:"/team/:name",component:B}),Object(b.jsx)(r.b,{exact:!0,path:"/login",component:U}),Object(b.jsx)(r.b,{path:"/teamstats/:name",component:D}),Object(b.jsx)(r.b,{path:"/roster/:name",component:R})]})})]}),Object(b.jsx)(A,{})]})};a(77),a(78);n.a.render(Object(b.jsx)(f.a,{children:Object(b.jsx)(W,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.91c9bfd0.chunk.js.map