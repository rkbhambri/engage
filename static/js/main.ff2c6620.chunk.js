(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"m",function(){return u}),n.d(e,"f",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"l",function(){return d}),n.d(e,"j",function(){return p}),n.d(e,"k",function(){return f}),n.d(e,"h",function(){return h}),n.d(e,"i",function(){return m});var a="AUTH_SUCCESS",r="AUTH_FAIL",o="AUTH_LOGOUT",i="SET_REDIRECT_PATH",c="EMPTY_TOKEN",u="UPDATE_LOADING_STATUS",s="SET_QUESTIONS",l="SET_LEADERS",d="SET_WALLET_DETAILS",p="SET_TRANSACTIONS",f="SET_UNSETTLED_CONTESTS",h="SET_SETTLED_CONTESTS",m="SET_SNACKBAR_MESSAGE"},25:function(t,e,n){"use strict";var a=n(2),r=n(54),o=n.n(r),i=(encodeURIComponent("http://api.league-app.com/"),n(4)),c=o.a.create({baseURL:"http://api.league-app.com/",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(t){var e=Object(i.b)("token");return e&&(t.headers={"x-access-token":"".concat(e)}),t},function(t){return t});var u=c,s=function(t){return{type:a.c,superAdminDetails:t}},l=function(t){return{type:a.a,error:t}},d=function(t){return{type:a.m,status:t}},p=function(t,e){return function(n){var a={email:t,password:e};u.post("admin/login",a).then(function(t){if(t.data.status){var e={token:t.data.entity.token,id:t.data.entity.id,role:t.data.entity.roles};Object(i.c)("meta",e),n(s(t.data.entity))}else n(l("Invalid username or password !"))}).catch(function(t){t.response&&401===t.response.status?n(l(t.response.data.message)):n(l("Something Went Wrong !!"))})}},f=function(t,e){return function(n){n(d(!0));var a={email:t,password:e};u.post("employee/login",a).then(function(t){if(n(d(!1)),t.data.status){var e={token:t.data.entity.token,id:t.data.entity.id,companyId:t.data.entity.companyId,role:t.data.entity.roles};Object(i.c)("meta",e),n(s(t.data.entity))}else n(l("Invalid username or password !"))}).catch(function(t){n(d(!1)),t.response&&401===t.response.status?n(l(t.response.data.message)):n(l("Something Went Wrong !!"))})}},h=function(t){return{type:a.g,path:t}},m=function(){return function(t){u.get("leadership").then(function(e){var n;e.data.entity&&t((n=e.data.entity,{type:a.e,leaders:n}))}).catch(function(t){})}},b=function(){return function(t){u.get("users/".concat(Object(i.b)("id"),"/wallet")).then(function(e){var n;e.data.entity&&t((n=e.data.entity,{type:a.l,details:n}))}).catch(function(t){})}},E=function(){return function(t){u.get("users/".concat(Object(i.b)("id"),"/transactions")).then(function(e){var n;e.data.entity&&t((n=e.data.entity,{type:a.j,transactions:n}))}).catch(function(t){})}},v=function(t){return{type:a.i,message:t}};n.d(e,"f",function(){return p}),n.d(e,"g",function(){return h}),n.d(e,"b",function(){return f}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return m}),n.d(e,"e",function(){return b}),n.d(e,"d",function(){return E}),n.d(e,"h",function(){return v})},32:function(t,e,n){t.exports={snackbar:"Snackbar_snackbar__1wLCb",show:"Snackbar_show__kHPfT",fadeout:"Snackbar_fadeout__2hltt",fadein:"Snackbar_fadein__8JNMU",close_icon:"Snackbar_close_icon__3lO49"}},33:function(t,e,n){t.exports={"wrong-outer":"ErrorBoundary_wrong-outer__3kmxG","wrong-inner":"ErrorBoundary_wrong-inner__2y1TU","img-went-wrong":"ErrorBoundary_img-went-wrong__3DKEa"}},4:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i});var a=new(n(57).a),r=function(t){var e=a.get("auth");return e&&e[t]},o=function(t,e){a.set(t,e,{path:"/"})},i=function(){var t=a.getAll();for(var e in t)a.remove(e,{path:"/"})}},56:function(t,e,n){t.exports=n.p+"static/media/something-went-wrong.cca82265.gif"},62:function(t,e,n){t.exports=n(99)},71:function(t,e,n){},94:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){},99:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=n(12),u=n(15),s=n(16),l=n(53),d=n(27),p=n(28),f=n(30),h=n(29),m=n(31),b=n(40),E=(n(71),function(t){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-bottom",style:{background:"#313648"}},r.a.createElement("div",{className:"w-100",id:"navbarCollapse"},r.a.createElement("div",{className:"navbar-nav pt-2 pb-2",style:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement(c.b,{to:"/",className:"nav-item nav-link p-2"},"Home"),r.a.createElement(c.b,{to:"/engage",className:"nav-item nav-link p-2"},"Engage"),r.a.createElement(c.b,{to:"/my-cards",className:"nav-item nav-link p-2"},"My Cards"),r.a.createElement(c.b,{to:"/received-cards",className:"nav-item nav-link p-2"},"Received"))))}),v=n(25),g=n(32),y=n.n(g),O=n(100),k=Object(s.b)(null,function(t){return{onSetSnackbarMessage:function(e){return t(v.h(e))}}})(function(t){return Object(a.useEffect)(function(){setTimeout(function(){t.onSetSnackbarMessage(null),t.checkInternet&&t.emptySnackbar()},3e3)},[]),r.a.createElement("div",{className:t.error?[y.a.snackbar,y.a.show].join(" "):y.a.snackbar},r.a.createElement(O.a,{close:!0,style:{color:"#fff",marginLeft:"35px"},onClick:function(){t.onSetSnackbarMessage(null),t.checkInternet&&t.emptySnackbar()}}),t.error)}),w=function(t){var e=Object(a.useState)(null),n=Object(b.a)(e,2),o=n[0],i=n[1],c=function(){i(navigator.onLine)},u=function(){i(null)};return r.a.createElement("div",{className:"main-layout"},/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?r.a.createElement(r.a.Fragment,null,t.children,r.a.createElement(E,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),t.children),"''            ",(window.addEventListener("online",function(){return c()}),window.addEventListener("offline",function(){return c()}),o?r.a.createElement(k,{error:"Back Online !",checkInternet:"true",emptySnackbar:function(){return u()}}):!1===o?r.a.createElement(k,{error:"You are Offline !",checkInternet:"true",emptySnackbar:function(){return u()}}):void 0))},S=n(13),T=n(4),_=n(33),C=n.n(_),j=n(56),x=n.n(j),I=function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={hasError:!1},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidCatch",value:function(t,e){console.log("===error===",t,"===info===",e)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:C.a["wrong-outer"]},r.a.createElement("div",{className:C.a["wrong-inner"]},r.a.createElement("img",{className:C.a["img-went-wrong"],src:x.a,alt:"KONTIKI LABS"}),r.a.createElement("h2",null,"Oops! Looks like something went wrong."),r.a.createElement("p",null,"Give us a few moments to look in to it."))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),e}(a.Component),A=n(101),N=n(102),D=(n(94),function(t){return r.a.createElement(A.a,{style:{height:"70vh",justifyContent:"center",alignItems:"center",maxWidth:"100%"}},r.a.createElement(N.a,null))}),L=(r.a.lazy(function(){return n.e(11).then(n.bind(null,410))}),r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12),n.e(8)]).then(n.bind(null,421))})),P=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9)]).then(n.bind(null,420))}),R=r.a.lazy(function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,417))}),U=[{path:"/",component:r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(7)]).then(n.bind(null,419))})},{path:"/engage",component:L},{path:"/my-cards",component:P},{path:"/received-cards",component:R}],M=(n(95),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={path:"",routes:[]},n.getRedirectPath=function(t){for(var e=!1,a=0;a<t.length;a++)t[a].path===n.props.location.pathname&&(e=!0);var r=(Object(T.b)("token"),"/");return e?n.props.location.pathname:r},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=r.a.createElement(w,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(D,null)},U.map(function(t,e){var n=t.path,a=t.component;return r.a.createElement(S.b,{exact:!0,path:n,component:a,key:e})}),r.a.createElement(S.a,{to:this.getRedirectPath(U)})));return r.a.createElement(I,null,r.a.createElement(S.d,null,t))}}]),e}(a.Component)),B=Object(S.g)(Object(s.b)(function(t){return{error:t.auth.error,isAuthenticated:null!==t.auth.token,authRedirectPath:t.auth.authRedirectPath,superAdminDetails:t.auth.superAdminDetails}},function(t){return{onSetRedirectPath:function(e){return t(v.g(e))}}})(M)),q=n(2),F=n(58),W=function(t,e){return Object(F.a)({},t,e)},H={token:null,userId:null,error:null,adminDetails:{},authRedirectPath:"/admin",otp:"",isLoading:!1},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.c:return function(t,e){return W(t,{adminDetails:e.adminDetails,token:e.adminDetails.token,userId:e.adminDetails.id,authRedirectPath:"/"})}(t,e);case q.a:return function(t,e){return W(t,{error:e.error})}(t,e);case q.b:return function(t,e){return W(t,{token:null,userId:null,adminDetails:{},authRedirectPath:"/admin",otp:""})}(t);case q.g:return function(t,e){return W(t,{authRedirectPath:e.path})}(t,e);default:return t}},z={questions:[{questionText:"hello real madrid blah blah blah blah v v blah",entryFee:6578,contestId:"J71282",options:[{id:"5746154123",optionText:"this is option1 this is testing long text option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"}]},{questionText:"hello real madrid222",entryFee:6578,contestId:"J71282",options:[{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"}]},{questionText:"hello real madrid3",entryFee:6578,contestId:"J71282",options:[{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"}]}]},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.f:return function(t,e){return W(t,{questions:e.questions})}(t,e);default:return t}},K={leaders:[],isLeadersEmpty:!1},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.e:return function(t,e){return W(t,{leaders:e.leaders,isLeadersEmpty:(n=e.leaders,0===n.length)});var n}(t,e);default:return t}},Y={walletDetails:{},transactions:[]},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.l:return function(t,e){return W(t,{walletDetails:e.details.wallet})}(t,e);case q.j:return function(t,e){return W(t,{transactions:e.transactions})}(t,e);default:return t}},V={unsettledContests:[],settledContests:[]},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.k:return function(t,e){return W(t,{unsettledContests:e.unsettledContests})}(t,e);case q.h:return function(t,e){return W(t,{settledContests:e.settledContests})}(t,e);default:return t}},$=(n(96),n(97),n(98),Object(u.c)({auth:J,contests:G,leaders:X,wallet:Q,account:Z})),tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,et=Object(u.e)($,tt(Object(u.a)(l.a))),nt=r.a.createElement(s.a,{store:et},r.a.createElement(c.a,{basename:"/".concat("/virtual-card".split("/").pop())},r.a.createElement(B,null)));i.a.render(nt,document.getElementById("root"))}},[[62,4,5]]]);
//# sourceMappingURL=main.ff2c6620.chunk.js.map