(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(25),i=n.n(o),c=n(12),u=n(15),s=n(16),l=n(55),d=n(27),f=n(28),p=n(30),h=n(29),m=n(31),b=n(40),v=(n(72),function(t){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-bottom",style:{background:"#313648"}},r.a.createElement("div",{className:"w-100",id:"navbarCollapse"},r.a.createElement("div",{className:"navbar-nav pt-2 pb-2",style:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement(c.b,{to:"/",className:"nav-item nav-link p-2"},"Home"),r.a.createElement(c.b,{to:"/engage",className:"nav-item nav-link p-2"},"Engage"),r.a.createElement(c.b,{to:"/my-cards",className:"nav-item nav-link p-2"},"My Cards"),r.a.createElement(c.b,{to:"/received-cards",className:"nav-item nav-link p-2"},"Received"))))}),E=n(24),g=n(32),O=n.n(g),y=n(101),k=Object(s.b)(null,function(t){return{onSetSnackbarMessage:function(e){return t(E.i(e))}}})(function(t){return Object(a.useEffect)(function(){setTimeout(function(){t.onSetSnackbarMessage(null),t.checkInternet&&t.emptySnackbar()},3e3)},[]),r.a.createElement("div",{className:t.error?[O.a.snackbar,O.a.show].join(" "):O.a.snackbar},r.a.createElement(y.a,{close:!0,style:{color:"#fff",marginLeft:"35px"},onClick:function(){t.onSetSnackbarMessage(null),t.checkInternet&&t.emptySnackbar()}}),t.error)}),S=n(52),w=function(t){var e=Object(a.useState)(null),n=Object(b.a)(e,2),o=n[0],i=n[1],c=function(){i(navigator.onLine)},u=function(){i(null)};return r.a.createElement("div",{className:"main-layout"},Object(S.b)()?r.a.createElement(r.a.Fragment,null,t.children,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),t.children),(window.addEventListener("online",function(){return c()}),window.addEventListener("offline",function(){return c()}),o?r.a.createElement(k,{error:"Back Online !",checkInternet:"true",emptySnackbar:function(){return u()}}):!1===o?r.a.createElement(k,{error:"You are Offline !",checkInternet:"true",emptySnackbar:function(){return u()}}):void 0))},T=n(13),_=n(4),C=n(33),j=n.n(C),x=n(58),I=n.n(x),A=function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={hasError:!1},n}return Object(m.a)(e,t),Object(f.a)(e,[{key:"componentDidCatch",value:function(t,e){console.log("===error===",t,"===info===",e)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:j.a["wrong-outer"]},r.a.createElement("div",{className:j.a["wrong-inner"]},r.a.createElement("img",{className:j.a["img-went-wrong"],src:I.a,alt:"KONTIKI LABS"}),r.a.createElement("h2",null,"Oops! Looks like something went wrong."),r.a.createElement("p",null,"Give us a few moments to look in to it."))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),e}(a.Component),N=n(102),D=n(103),P=(n(95),function(t){return r.a.createElement(N.a,{style:{height:"70vh",justifyContent:"center",alignItems:"center",maxWidth:"100%"}},r.a.createElement(D.a,null))}),L=(r.a.lazy(function(){return n.e(13).then(n.bind(null,536))}),r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(10)]).then(n.bind(null,554))})),R=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(11)]).then(n.bind(null,549))}),U=r.a.lazy(function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,550))}),B=[{path:"/",component:r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(9)]).then(n.bind(null,552))})},{path:"/engage",component:L},{path:"/my-cards",component:R},{path:"/received-cards",component:U}],M=(n(96),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={path:"",routes:[]},n.getRedirectPath=function(t){for(var e=!1,a=0;a<t.length;a++)t[a].path===n.props.location.pathname&&(e=!0);var r=(Object(_.b)("token"),"/");return e?n.props.location.pathname:r},n}return Object(m.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){var t=r.a.createElement(w,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(P,null)},B.map(function(t,e){var n=t.path,a=t.component;return r.a.createElement(T.b,{exact:!0,path:n,component:a,key:e})}),r.a.createElement(T.a,{to:this.getRedirectPath(B)})));return r.a.createElement(A,null,r.a.createElement(T.d,null,t))}}]),e}(a.Component)),q=Object(T.g)(Object(s.b)(function(t){return{error:t.auth.error,isAuthenticated:null!==t.auth.token,authRedirectPath:t.auth.authRedirectPath,superAdminDetails:t.auth.superAdminDetails}},function(t){return{onSetRedirectPath:function(e){return t(E.h(e))}}})(M)),J=n(2),F=n(53),W=function(t,e){return Object(F.a)({},t,e)},z={token:null,userId:null,error:null,adminDetails:{},authRedirectPath:"/admin",otp:"",isLoading:!1},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J.c:return function(t,e){return W(t,{adminDetails:e.adminDetails,token:e.adminDetails.token,userId:e.adminDetails.id,authRedirectPath:"/"})}(t,e);case J.a:return function(t,e){return W(t,{error:e.error})}(t,e);case J.b:return function(t,e){return W(t,{token:null,userId:null,adminDetails:{},authRedirectPath:"/admin",otp:""})}(t);case J.g:return function(t,e){return W(t,{authRedirectPath:e.path})}(t,e);default:return t}},H={questions:[{questionText:"hello real madrid blah blah blah blah v v blah",entryFee:6578,contestId:"J71282",options:[{id:"5746154123",optionText:"this is option1 this is testing long text option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"}]},{questionText:"hello real madrid222",entryFee:6578,contestId:"J71282",options:[{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"}]},{questionText:"hello real madrid3",entryFee:6578,contestId:"J71282",options:[{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"},{id:"5746154123",optionText:"this is option1",betCountOnOption:"50"}]}]},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J.f:return function(t,e){return W(t,{questions:e.questions})}(t,e);default:return t}},Y={leaders:[],isLeadersEmpty:!1},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J.e:return function(t,e){return W(t,{leaders:e.leaders,isLeadersEmpty:(n=e.leaders,0===n.length)});var n}(t,e);default:return t}},V={walletDetails:{},transactions:[]},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J.l:return function(t,e){return W(t,{walletDetails:e.details.wallet})}(t,e);case J.j:return function(t,e){return W(t,{transactions:e.transactions})}(t,e);default:return t}},Z={unsettledContests:[],settledContests:[]},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J.k:return function(t,e){return W(t,{unsettledContests:e.unsettledContests})}(t,e);case J.h:return function(t,e){return W(t,{settledContests:e.settledContests})}(t,e);default:return t}},tt=(n(97),n(98),n(99),Object(u.c)({auth:G,contests:K,leaders:Q,wallet:X,account:$})),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,nt=Object(u.e)(tt,et(Object(u.a)(l.a))),at=r.a.createElement(s.a,{store:nt},r.a.createElement(c.a,{basename:"/".concat("/engage".split("/").pop())},r.a.createElement(q,null)));i.a.render(at,document.getElementById("root"))},2:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"m",function(){return u}),n.d(e,"f",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"l",function(){return d}),n.d(e,"j",function(){return f}),n.d(e,"k",function(){return p}),n.d(e,"h",function(){return h}),n.d(e,"i",function(){return m});var a="AUTH_SUCCESS",r="AUTH_FAIL",o="AUTH_LOGOUT",i="SET_REDIRECT_PATH",c="EMPTY_TOKEN",u="UPDATE_LOADING_STATUS",s="SET_QUESTIONS",l="SET_LEADERS",d="SET_WALLET_DETAILS",f="SET_TRANSACTIONS",p="SET_UNSETTLED_CONTESTS",h="SET_SETTLED_CONTESTS",m="SET_SNACKBAR_MESSAGE"},24:function(t,e,n){"use strict";var a=n(2),r=n(56),o=n.n(r),i=(encodeURIComponent("http://api.league-app.com/"),n(4)),c=o.a.create({baseURL:"http://api.league-app.com/",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(t){var e=Object(i.b)("token");return e&&(t.headers={"x-access-token":"".concat(e)}),t},function(t){return t});var u=c,s=function(t){return{type:a.c,superAdminDetails:t}},l=function(t){return{type:a.a,error:t}},d=function(t){return{type:a.m,status:t}},f=function(t,e){return function(n){var a={email:t,password:e};u.post("admin/login",a).then(function(t){if(t.data.status){var e={token:t.data.entity.token,id:t.data.entity.id,role:t.data.entity.roles};Object(i.c)("meta",e),n(s(t.data.entity))}else n(l("Invalid username or password !"))}).catch(function(t){t.response&&401===t.response.status?n(l(t.response.data.message)):n(l("Something Went Wrong !!"))})}},p=function(t,e){return function(n){n(d(!0));var a={email:t,password:e};u.post("employee/login",a).then(function(t){if(n(d(!1)),t.data.status){var e={token:t.data.entity.token,id:t.data.entity.id,companyId:t.data.entity.companyId,role:t.data.entity.roles};Object(i.c)("meta",e),n(s(t.data.entity))}else n(l("Invalid username or password !"))}).catch(function(t){n(d(!1)),t.response&&401===t.response.status?n(l(t.response.data.message)):n(l("Something Went Wrong !!"))})}},h=function(t){return{type:a.g,path:t}},m=function(){return function(t){u.get("leadership").then(function(e){var n;e.data.entity&&t((n=e.data.entity,{type:a.e,leaders:n}))}).catch(function(t){})}},b=function(){return function(t){u.get("users/".concat(Object(i.b)("id"),"/wallet")).then(function(e){var n;e.data.entity&&t((n=e.data.entity,{type:a.l,details:n}))}).catch(function(t){})}},v=function(){return function(t){u.get("users/".concat(Object(i.b)("id"),"/transactions")).then(function(e){var n;e.data.entity&&t((n=e.data.entity,{type:a.j,transactions:n}))}).catch(function(t){})}},E=function(t){return{type:a.i,message:t}},g=function(){return"users/".concat(Object(i.b)("id"),"/cards")},O=function(t){return function(e){u.post(g,t).then(function(t){var n;e((n=!1,{type:a.m,status:n})),t.data.status}).catch(function(t){})}};n.d(e,"g",function(){return f}),n.d(e,"h",function(){return h}),n.d(e,"c",function(){return p}),n.d(e,"b",function(){return l}),n.d(e,"d",function(){return m}),n.d(e,"f",function(){return b}),n.d(e,"e",function(){return v}),n.d(e,"i",function(){return E}),n.d(e,"a",function(){return O})},32:function(t,e,n){t.exports={snackbar:"Snackbar_snackbar__3lYxu",show:"Snackbar_show__2VBQP",fadeout:"Snackbar_fadeout__KBZDk",fadein:"Snackbar_fadein__238iU",close_icon:"Snackbar_close_icon__1NyqO"}},33:function(t,e,n){t.exports={"wrong-outer":"ErrorBoundary_wrong-outer__3bAmd","wrong-inner":"ErrorBoundary_wrong-inner__1GDa-","img-went-wrong":"ErrorBoundary_img-went-wrong__2hIJk"}},4:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i});var a=new(n(59).a),r=function(t){var e=a.get("auth");return e&&e[t]},o=function(t,e){a.set(t,e,{path:"/"})},i=function(){var t=a.getAll();for(var e in t)a.remove(e,{path:"/"})}},52:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o});var a=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},r=function(t){return JSON.parse(JSON.stringify(t))},o=function(t){return""===t.trim()}},58:function(t,e,n){t.exports=n.p+"static/media/something-went-wrong.cca82265.gif"},63:function(t,e,n){t.exports=n(100)},72:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){},99:function(t,e,n){}},[[63,4,6]]]);
//# sourceMappingURL=main.4d339828.chunk.js.map