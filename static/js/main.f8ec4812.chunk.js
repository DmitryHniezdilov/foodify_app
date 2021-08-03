(this.webpackJsonpfoodify_app=this.webpackJsonpfoodify_app||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),s=a(17),o=a(58),l=a(78),d=a(14),j=a(79),u=function(){var e=localStorage.getItem("recipeFavourList");return e?JSON.parse(e):[]},b=function(e){localStorage.setItem("recipeFavourList",JSON.stringify(e))},h="START_LOADING",O="FINISH_LOADING",m="SET_RECIPE",p="SET_FAVOUR_LIST",x="SET_CUSTOM_DISH_TO_FAVOUR_LIST",f="OPEN_MODAL",g="CLOSED_MODAL",v={recipe:{},recipeFavourList:[],isLoading:!0,isOpenModal:!1},y=a(2),L=Object(o.combineReducers)({general:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(s.a)(Object(s.a)({},e),{},{isLoading:!0});case O:return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1});case f:return Object(s.a)(Object(s.a)({},e),{},{isOpenModal:!0});case g:return Object(s.a)(Object(s.a)({},e),{},{isOpenModal:!1});case m:return Object(s.a)(Object(s.a)({},e),{},{recipe:t.recipe});case p:case x:return Object(s.a)(Object(s.a)({},e),{},{recipeFavourList:t.favourList});default:return Object(s.a)({},e)}}}),M=Object(o.createStore)(L,function(e){var t=u();return{general:Object(s.a)(Object(s.a)({},e),{},{recipeFavourList:t})}}(v),Object(l.composeWithDevTools)(Object(o.applyMiddleware)(j.a))),N=function(e){var t=e.children;return Object(y.jsx)(d.a,{store:M,children:t})},k=a(35),I=a(13),S=a(10),w=a(40),T=a(155),D=a(149),C=a(85),A=a.n(C),F=a(86),_=a.n(F),B=a(65),E=a.n(B),z=a(150),U=a(159),W=a(112),R=a(144),H=a(145),P=a(84),q=a.n(P),J=a(141),V=Object(J.a)({icon:{color:"#d1d5da"}}),G=function(){var e=V();return Object(y.jsxs)(U.a,{align:"center",component:"footer",my:2,children:[Object(y.jsx)(W.a,{color:"textSecondary",component:"span",variant:"subtitle1",children:'"Foodify Application" by\xa0Dmitry\xa0Hniezdilov:\xa0'}),Object(y.jsx)(R.a,{className:e.icon,component:H.a,href:"https://github.com/DmitryHniezdilov/",rel:"noreferrer",size:"small",target:"_blank",children:Object(y.jsx)(q.a,{})})]})},Y=a(146),K=a(147),Q=a(148),X=a(16),Z=a.n(X),$=a(25),ee=function(){return function(){var e=Object($.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h}),e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){return e.meals[0]}));case 3:a=e.sent,t({type:m,recipe:a}),t({type:O});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(e){return{type:p,favourList:e}},ae=a(21),ne=Object(J.a)((function(e){return{header:{borderBottom:"1px solid ".concat(e.palette.divider)},headerList:{minHeight:"60px","& :first-child":{justifyContent:"flex-end"}},headerItemModal:Object(ae.a)({justifyContent:"flex-end"},"@media (max-width:959px)",{justifyContent:"center"})}})),ce=function(e){var t=e.isModal,a=ne(),n=Object(d.b)();return Object(y.jsx)(U.a,{className:a.header,component:"header",children:Object(y.jsx)(U.a,{component:"nav",children:Object(y.jsxs)(Y.a,{container:!0,disablePadding:!0,className:a.headerList,component:K.a,children:[Object(y.jsx)(Y.a,{item:!0,component:Q.a,xs:6,children:Object(y.jsx)(D.a,{color:"primary",component:k.b,size:"small",to:"/",children:"Random Dish"})}),Object(y.jsx)(Y.a,{item:!0,component:Q.a,md:3,xs:6,children:Object(y.jsx)(D.a,{color:"primary",component:k.b,size:"small",to:"/favourites",children:"Favourites"})}),t&&Object(y.jsx)(Y.a,{item:!0,className:a.headerItemModal,component:Q.a,md:3,xs:12,children:Object(y.jsx)(D.a,{color:"primary",size:"small",variant:"contained",onClick:function(){n({type:f})},children:"Add custom dish"})})]})})})},ie=Object(J.a)({pageLayout:{backgroundColor:"inherit",display:"flex",flexDirection:"column",position:"relative",minHeight:"100vh"},pageLayoutBox:{flexGrow:"1",textAlign:"center"},footer:{flexShrink:"0"}}),re=function(e){var t=e.children,a=e.isModal,n=ie();return Object(y.jsxs)(z.a,{className:n.pageLayout,maxWidth:"lg",children:[Object(y.jsx)(ce,{isModal:a}),Object(y.jsx)(U.a,{className:n.pageLayoutBox,component:"main",my:2,children:t}),Object(y.jsx)(G,{className:n.footer})]})},se=a(151),oe=a(152),le=a(153),de=a(154),je=Object(J.a)({card:{display:"inline-block",textAlign:"left",maxWidth:500,width:"100%",height:"100%"},cardLink:{height:"100%"},cardMediaBox:{objectFit:"cover",height:250},cardMedia:{width:"100%",height:"100%"},cardInstructions:{display:"-webkit-box",boxOrient:"vertical",lineClamp:4,wordBreak:"break-all",overflow:"hidden"}}),ue=function(e){var t=e.imageUrl,a=e.dishName,n=e.instructions,c=e.children,i=e.id,r=je(),s=t||"foodify_placeholder.svg";return Object(y.jsxs)(se.a,{className:r.card,children:[Object(y.jsxs)(oe.a,{className:r.cardLink,component:k.b,to:"/details/".concat(i),children:[Object(y.jsx)(U.a,{className:r.cardMediaBox,children:Object(y.jsx)(le.a,{className:r.cardMedia,component:"img",image:s,title:"".concat(a," image")})}),Object(y.jsxs)(de.a,{children:[Object(y.jsx)(W.a,{gutterBottom:!0,component:"h2",variant:"h5",children:a}),Object(y.jsx)(W.a,{align:"justify",className:r.cardInstructions,color:"textSecondary",component:"p",variant:"body2",children:n})]})]}),c]})},be=Object(J.a)({cardActions:{justifyContent:"space-around"}}),he=function(){var e=be(),t=Object(d.b)(),a=Object(d.c)((function(e){return e.general})),c=a.recipe,i=a.recipeFavourList,r=c.idMeal,s=c.strMeal,o=c.strMealThumb,l=c.strInstructions,j=Object(n.useState)(!1),u=Object(w.a)(j,2),b=u[0],h=u[1];return Object(n.useEffect)((function(){i.find((function(e){return e.idMeal===r}))&&h(!0)}),[]),Object(y.jsx)(re,{children:Object(y.jsx)(ue,{dishName:s,id:r,imageUrl:o,instructions:l,children:Object(y.jsxs)(T.a,{className:e.cardActions,children:[Object(y.jsx)(D.a,{color:"primary",endIcon:Object(y.jsx)(A.a,{}),size:"small",onClick:function(){t(ee()),b&&h(!1)},children:"Skip"}),Object(y.jsx)(D.a,{color:b?"secondary":"primary",endIcon:b?Object(y.jsx)(_.a,{}):Object(y.jsx)(E.a,{}),size:"small",onClick:function(){var e=i.filter((function(e){return e.idMeal!==r}));t(te(b?e:[].concat(Object(S.a)(i),[c]))),h(!b)},children:"Like"})]})})})},Oe=function(){var e=Object(d.c)((function(e){return e.general})).recipeFavourList,t=0===e.length,a=Object(S.a)(e).reverse();return Object(y.jsx)(re,{isModal:!0,children:Object(y.jsx)(Y.a,{container:!0,justifyContent:"center",spacing:4,children:t?Object(y.jsxs)(U.a,{mt:10,children:[Object(y.jsx)(W.a,{align:"center",variant:"h5",children:"You don't have a list of your favorite foods."}),Object(y.jsx)(W.a,{align:"center",variant:"h5",children:"Dishes marked as liked will be displayed on this tab."})]}):a.map((function(e){var t=e.strMeal,a=e.strMealThumb,n=e.strInstructions,c=e.idMeal;return Object(y.jsx)(Y.a,{item:!0,md:4,sm:6,xs:12,children:Object(y.jsx)(ue,{dishName:t,id:c,imageUrl:a,instructions:n})},c)}))})})},me=function(){return Object(y.jsx)(re,{children:Object(y.jsx)(W.a,{align:"center",variant:"h5",children:"Page not found"})})},pe=Object(J.a)({cardDetails:{display:"inline-block",textAlign:"left",maxWidth:800,width:"100%",height:"100%"},cardLink:{height:"100%"},cardDetailsMediaBox:{objectFit:"cover",height:300},cardDetailsMedia:{width:"100%",height:"100%"}}),xe=function(e){var t=e.imageUrl,a=e.dishName,n=e.instructions,c=e.children,i=pe(),r=t||"../foodify_placeholder.svg";return Object(y.jsxs)(se.a,{className:i.cardDetails,children:[Object(y.jsx)(de.a,{children:Object(y.jsx)(W.a,{align:"center",component:"h2",variant:"h5",children:a})}),Object(y.jsx)(U.a,{className:i.cardDetailsMediaBox,children:Object(y.jsx)(le.a,{className:i.cardDetailsMedia,component:"img",image:r,title:"".concat(a," image")})}),Object(y.jsx)(de.a,{children:Object(y.jsx)(W.a,{align:"justify",color:"textSecondary",component:"p",variant:"body2",children:n})}),c]})},fe=a(87),ge=a.n(fe),ve=Object(J.a)({cardDetailsActions:{justifyContent:"center"}}),ye=function(){var e=ve(),t=Object(d.b)(),a=Object(d.c)((function(e){return e.general})),n=a.recipeFavourList,c=a.recipe,i=Object(I.f)(),r=Object(I.g)().params.id,s=n.find((function(e){return e.idMeal===r})),o=s||c,l=o.idMeal,j=o.strMeal,u=o.strMealThumb,b=o.strInstructions;return Object(y.jsx)(re,{children:Object(y.jsx)(xe,{dishName:j,imageUrl:u,instructions:b,children:Object(y.jsx)(T.a,{className:e.cardDetailsActions,children:Object(y.jsx)(D.a,{color:s?"secondary":"primary",endIcon:s?Object(y.jsx)(ge.a,{}):Object(y.jsx)(E.a,{}),size:"small",onClick:function(){var e=n.filter((function(e){return e.idMeal!==l}));t(te(s?e:[].concat(Object(S.a)(n),[c]))),s&&i.push("/")},children:s?"Delete":"Like"})})})})},Le=function(){return Object(y.jsx)(k.a,{basename:"/foodify_app",children:Object(y.jsxs)(I.c,{children:[Object(y.jsx)(I.a,{exact:!0,path:"/",children:Object(y.jsx)(he,{})},"/"),Object(y.jsx)(I.a,{exact:!0,path:"/favourites",children:Object(y.jsx)(Oe,{})},"chart"),Object(y.jsx)(I.a,{exact:!0,path:"/details/:id",children:Object(y.jsx)(ye,{})},"chart"),Object(y.jsx)(I.a,{path:"*",children:Object(y.jsx)(me,{})})]})})},Me=a(156),Ne=Object(J.a)((function(e){return{loading:{backgroundColor:e.palette.background.paper,display:"none",position:"fixed",zIndex:9999,top:0,left:0,width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}})),ke=function(){var e=Ne(),t=Object(d.c)((function(e){return e.general})).isLoading?"flex":"";return Object(y.jsx)(U.a,{className:e.loading,style:{display:"".concat(t)},children:Object(y.jsx)(Me.a,{})})},Ie=a(67),Se=a(160),we=a(157),Te=a(114),De=a(113),Ce=a(158),Ae=Object(J.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(0,3)},paper:{width:"100%",maxWidth:600,padding:e.spacing(3),marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},error:{marginTop:e.spacing(2)}}})),Fe=function(){var e,t,a,n,c=Ae(),i=Object(Ie.b)(),r=i.handleSubmit,s=i.errors,o=i.control,l=Object(d.b)(),j=Object(d.c)((function(e){return e.general})),u=j.isOpenModal,h=j.recipeFavourList,O=function(){l({type:g})};return Object(y.jsx)(Se.a,{closeAfterTransition:!0,BackdropComponent:we.a,BackdropProps:{timeout:500},className:c.modal,open:u,onClose:O,children:Object(y.jsx)(Te.a,{in:u,children:Object(y.jsxs)(De.a,{className:c.paper,children:[Object(y.jsx)(W.a,{component:"h1",variant:"h5",children:"Add custom dish"}),Object(y.jsxs)("form",{className:c.form,onSubmit:r((function(e){var t,a=e.title,n=e.text,c={idMeal:String(Date.now()),strMeal:a,strInstructions:n};l((t=[].concat(Object(S.a)(h),[c]),{type:x,favourList:t})),b([].concat(Object(S.a)(h),[c])),O()})),children:[Object(y.jsx)(U.a,{mb:2,children:Object(y.jsx)(Ie.a,{as:Object(y.jsx)(Ce.a,{autoFocus:!0,fullWidth:!0,error:!!(null===s||void 0===s||null===(e=s.title)||void 0===e?void 0:e.type),helperText:null===s||void 0===s||null===(t=s.title)||void 0===t?void 0:t.message,id:"title",label:"Title",type:"text",variant:"outlined"}),control:o,defaultValue:"",name:"title",rules:{required:{value:!0,message:"Title is required"},minLength:{value:5,message:"Title is too short"}}})}),Object(y.jsx)(U.a,{children:Object(y.jsx)(Ie.a,{as:Object(y.jsx)(Ce.a,{fullWidth:!0,multiline:!0,error:!!(null===s||void 0===s||null===(a=s.text)||void 0===a?void 0:a.type),helperText:null===s||void 0===s||null===(n=s.text)||void 0===n?void 0:n.message,id:"text",label:"Text",rows:4,type:"text",variant:"outlined"}),control:o,defaultValue:"",name:"text",rules:{required:{value:!0,message:"Text is required"},minLength:{value:20,message:"Text is too short"}}})}),Object(y.jsx)(D.a,{fullWidth:!0,className:c.submit,color:"primary",type:"submit",variant:"contained",children:"Add dish"})]})]})})})},_e=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.general})).recipeFavourList;return Object(n.useEffect)((function(){e(ee())}),[]),Object(n.useEffect)((function(){b(t)}),[t]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Fe,{}),Object(y.jsx)(ke,{}),Object(y.jsx)(Le,{})]})};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(N,{children:Object(y.jsx)(_e,{})})}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.f8ec4812.chunk.js.map