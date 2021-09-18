(this["webpackJsonpsyntax-client"]=this["webpackJsonpsyntax-client"]||[]).push([[0],{67:function(e,t,n){},77:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(31),o=n.n(s),i=(n(67),n(62)),c=n(10),l=n(11),d=n(13),u=n(12),h=n(8),j=n(101),g=n(32),m=n(56),b=n(1),p=["user","component","render"],x=function(e){var t=e.user,n=e.component,a=e.render,r=Object(m.a)(e,p);return t&&a?Object(b.jsx)(h.b,Object(g.a)(Object(g.a)({},r),{},{render:a})):Object(b.jsx)(h.b,Object(g.a)(Object(g.a)({},r),{},{render:function(e){return t?Object(b.jsx)(n,Object(g.a)({},e)):Object(b.jsx)(h.a,{to:"/"})}}))},O=n(47),f=(n(77),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(b.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O.a.Heading,{children:n}),Object(b.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),v=n(61),y=n(34),w=n(15),C={marginLeft:"17px",textDecoration:"none",color:"#F78536"},S=Object(b.jsx)(a.Fragment,{children:Object(b.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:Object(b.jsx)(w.c,{to:"/sign-out",className:"nav-link",style:{justifySelf:"flex-end"},children:"Sign Out"})})}),T=Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(w.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(b.jsx)(w.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),A=function(e){var t=e.user;return Object(b.jsxs)(y.a,{fixed:"bottom",bg:"dark",variant:"dark",expand:"md",children:[Object(b.jsx)(y.a.Brand,{children:Object(b.jsx)(w.b,{to:"/dashboard",style:C,children:"< SYNTAX />"})}),Object(b.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsx)(v.a,{className:"ml-auto",style:{width:"100%",display:"flex"},children:t?S:T})})]})},k={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"700px"},I={fontSize:"72px",color:"rgba(247, 133, 54, 1)"},F={fontSize:"24px",color:"#FFFFFF"},P=function(e){e.user;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{style:k,children:[Object(b.jsx)("h1",{style:I,children:"< SYNTAX />"}),Object(b.jsx)("p",{style:F,children:"Always missing a semicolon or curly brace in JavaScript? Can't ever get the indentation right in Python? Tired of having to pause to look down to find the carrot to open a tag instead of the carrot to close it? It's all about muscle memory baby! Syntax is here to help you set the goals, do the work and build that muscle memory you need to be a syntactically correct, code typing master."})]})})},q=n(24),G="https://syntax-typing-practice.herokuapp.com",U="http://localhost:8000",N="localhost"===window.location.hostname?U:G,E=n(21),D=n.n(E),L=function(e){return D()({url:N+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},z=n(5),B=n(102),H=n(60),K={position:"absolute",bottom:"50px",left:"2%",minWidth:"450px",minHeight:"500px",backgroundColor:"rgba(73, 114, 133, .7)",color:"#FFFFFF",borderRadius:"25px"},R={color:"#F78536",textAlign:"center"},W={position:"absolute",bottom:"50px",left:"2%",minWidth:"450px",minHeight:"500px",backgroundColor:"rgba(73, 114, 133, .7)",color:"#FFFFFF",borderRadius:"25px"},J={color:"#F78536",textAlign:"center"},M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault(),console.log("wtf is going on",e,a.state);var t,n=a.props,r=n.msgAlert,s=n.history,o=n.setUser;(t=a.state,D()({method:"POST",url:N+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(a.state)})).then((function(e){return o(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:"",password_confirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(b.jsx)(B.a,{style:K,children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{style:R,children:"Sign Up"}),Object(b.jsxs)(z.a,{onSubmit:this.onSignUp,children:[Object(b.jsxs)(z.a.Group,{controlId:"email",children:[Object(b.jsx)(z.a.Label,{children:"Email address"}),Object(b.jsx)(z.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"password",children:[Object(b.jsx)(z.a.Label,{children:"Password"}),Object(b.jsx)(z.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"passwordConfirmation",children:[Object(b.jsx)(z.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(z.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(b.jsx)(H.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),n}(a.Component),Y=Object(h.f)(M),X=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser;L(a.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/dashboard")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(b.jsx)(B.a,{style:W,children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{style:J,children:"Sign In"}),Object(b.jsxs)(z.a,{onSubmit:this.onSignIn,children:[Object(b.jsxs)(z.a.Group,{controlId:"email",children:[Object(b.jsx)(z.a.Label,{children:"Email address"}),Object(b.jsx)(z.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"password",children:[Object(b.jsx)(z.a.Label,{children:"Password"}),Object(b.jsx)(z.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)(H.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),n}(a.Component),_=Object(h.f)(X),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return D()({url:N+"/sign-out/",method:"DELETE",headers:{Authorization:"TOKEN ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a()})).finally((function(){return n.push("/")}))}},{key:"render",value:function(){return""}}]),n}(a.Component),V=Object(h.f)(Q),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return D()({url:N+"/change-pw/",method:"PATCH",headers:{Authorization:"TOKEN ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Change Password"}),Object(b.jsxs)(z.a,{onSubmit:this.onChangePassword,children:[Object(b.jsxs)(z.a.Group,{controlId:"oldPassword",children:[Object(b.jsx)(z.a.Label,{children:"Old password"}),Object(b.jsx)(z.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"newPassword",children:[Object(b.jsx)(z.a.Label,{children:"New Password"}),Object(b.jsx)(z.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(b.jsx)(H.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),$=Object(h.f)(Z),ee=function(e){return D()({method:"GET",url:N+"/goals/",headers:{Authorization:"TOKEN ".concat(e.token)}})},te=n(46),ne=n.n(te),ae=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).show=function(e){var t=a.props,n=t.user,r=t.msgAlert;(function(e,t){return D()({method:"GET",url:N+"/goals/".concat(t,"/"),headers:{Authorization:"TOKEN ".concat(e.token)}})})(n,e.id).then((function(){a.setState({goalToUpdate:e})})).catch((function(e){return r({heading:"Show failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.handleChange=function(e){var t=e.target.name,n=e.target.value,r=Object.assign({},a.state.goalToUpdate);r[t]=n,a.setState({goalToUpdate:r})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.goalToUpdate,n=a.props,r=n.user,s=n.msgAlert;(function(e,t,n){return D()({method:"PATCH",url:N+"/goals/".concat(t,"/"),headers:{Authorization:"TOKEN ".concat(e.token)},data:{goal:{name:n.name,characters:n.characters,language:n.language,date:n.date,time:n.time,measurement:n.measurement,frequency:n.frequency}}})})(r,t.id,t).then((function(){ee(r).then((function(e){return a.setState({goals:e.data.goals,goalToUpdate:null})})).then((function(){return s({heading:"Success",message:"Here are your goals",variant:"success"})})).catch((function(e){return s({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))})).catch((function(e){s({heading:"Goal update failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.delete=function(e){var t=a.props,n=t.user,r=t.msgAlert;(function(e,t){return D()({method:"DELETE",url:N+"/goals/"+t,headers:{Authorization:"TOKEN ".concat(e.token)}})})(n,e).then((function(){var t=Object.assign({},a.state);t.goals=t.goals.filter((function(t){return t.id!==e})),a.setState({goals:t.goals,goalToUpdate:null})})).then((function(){return r({heading:"Delete success",message:"Chord deleted",variant:"success"})})).catch((function(e){return r({heading:"Delete failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.daysRemaining=function(e){var t=ne()(e.date);return ne()(t).endOf("day").fromNow()},a.state={goals:null,goalToUpdate:null,languages:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;null!==n&&ee(n).then((function(t){return e.setState({goals:t.data.goals})})).then((function(){return a({heading:"Success",message:"Here are your goals",variant:"success"})})).catch((function(e){return a({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t,n=this,a=this.state.goals;if(null===this.state.goals)return Object(b.jsx)("p",{children:"Loading..."});var r=[];return 0===a.length?e=Object(b.jsx)("p",{children:" No Goals Set"}):(a.forEach((function(e){if(r.push(e),null!==n.state.goalToUpdate&&e.id===n.state.goalToUpdate.id){r.pop(e);var a=n.state.goalToUpdate,s=a.name,o=a.characters,i=a.language,c=a.date,l=a.time,d=a.measurement,u=a.frequency;t=Object(b.jsx)(B.a,{children:Object(b.jsxs)(z.a,{onSubmit:n.handleSubmit,children:[Object(b.jsx)(z.a.Group,{controlId:"name",style:{marginTop:"9px"},children:Object(b.jsx)(z.a.Control,{required:!0,name:"name",value:s,onChange:n.handleChange})}),Object(b.jsxs)(z.a.Group,{controlId:"characters",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:"I want to type "}),Object(b.jsx)(z.a.Control,{required:!0,name:"characters",value:o,onChange:n.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"language",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:" words per minute in"}),Object(b.jsx)(z.a.Control,{required:!0,name:"language",value:i,onChange:n.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"date",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:", by"}),Object(b.jsx)(z.a.Control,{required:!0,name:"date",value:c,onChange:n.handleChange}),Object(b.jsx)("p",{children:"."})]}),Object(b.jsxs)(z.a.Group,{controlId:"time",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:"I will achieve this goal by practicing"}),Object(b.jsx)(z.a.Control,{required:!0,name:"time",value:l,onChange:n.handleChange})]}),Object(b.jsx)(z.a.Group,{controlId:"measurement",style:{marginTop:"6px",marginBottom:"5px"},children:Object(b.jsx)(z.a.Control,{required:!0,name:"measurement",value:d,onChange:n.handleChange})}),Object(b.jsxs)(z.a.Group,{controlId:"frequency",style:{marginTop:"6px",marginBottom:"5px"},children:[Object(b.jsx)("p",{children:"every"}),Object(b.jsx)(z.a.Control,{required:!0,name:"frequency",value:u,onChange:n.handleChange}),Object(b.jsx)("p",{children:"."})]}),Object(b.jsxs)("div",{style:{marginLeft:"12px"},children:[Object(b.jsx)(H.a,{type:"submit",style:{marginTop:"11px"},children:"Submit"}),Object(b.jsx)(H.a,{onClick:function(){return n.delete(e.id)},style:{marginRight:"6px"},children:"Delete"})]})]})})}})),e=r.map((function(e){return Object(b.jsx)(B.a,{onClick:function(){return n.show(e)},children:Object(b.jsx)(B.a.Body,{children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)(B.a.Title,{children:[e.name,": ",e.language]}),Object(b.jsxs)(B.a.Title,{children:["Due ",n.daysRemaining(e),"."]})]})})},e.id)}))),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B.a,{children:Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},children:[Object(b.jsx)(H.a,{style:{margin:"5px"},onClick:function(){return n.props.history.push("/create-goal/")},children:"Set Goal"}),Object(b.jsx)(H.a,{style:{margin:"5px"},onClick:function(){return n.props.history.push("/change-pw/")},children:"Change Password"}),Object(b.jsx)(H.a,{style:{margin:"5px"},onClick:function(){return n.props.history.push("/sign-out/")},children:"Sign Out"})]})}),Object(b.jsxs)("div",{children:[t,e]})]})}}]),n}(r.a.Component),re=Object(h.f)(ae),se=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.name,n=e.target.value,r=Object.assign({},a.state.goal);r[t]=n,a.setState({goal:r})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history;(function(e,t){return D()({method:"POST",url:N+"/goals",headers:{Authorization:"TOKEN ".concat(e.token)},data:{goal:{name:t.name,characters:t.characters,language:t.language,date:t.date,time:t.time,measurement:t.measurement,frequency:t.frequency}}})})(n,a.state.goal).then((function(e){return s.push("/")})).catch((function(e){r({heading:"Goal creation failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={goal:{name:"Goal 1",characters:"60",language:"JavaScript",date:"2022-05-05",time:"60",measurement:"min",frequency:"day"}},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.goal,t=e.name,n=e.characters,a=e.language,r=e.date,s=e.time,o=e.measurement,i=e.frequency;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{style:{margin:"0 auto"},children:"Set a SMART goal to track your growth!"})}),Object(b.jsx)(B.a,{children:Object(b.jsxs)(z.a,{onSubmit:this.handleSubmit,children:[Object(b.jsx)(z.a.Group,{controlId:"name",style:{marginTop:"9px"},children:Object(b.jsx)(z.a.Control,{required:!0,name:"name",value:t,onChange:this.handleChange})}),Object(b.jsxs)(z.a.Group,{controlId:"characters",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:"I want to type "}),Object(b.jsx)(z.a.Control,{required:!0,name:"characters",value:n,onChange:this.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"language",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:" words per minute in"}),Object(b.jsx)(z.a.Control,{required:!0,name:"language",value:a,onChange:this.handleChange})]}),Object(b.jsxs)(z.a.Group,{controlId:"date",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:", by"}),Object(b.jsx)(z.a.Control,{required:!0,name:"date",value:r,onChange:this.handleChange}),Object(b.jsx)("p",{children:"."})]}),Object(b.jsxs)(z.a.Group,{controlId:"time",style:{marginTop:"9px"},children:[Object(b.jsx)("p",{children:"I will achieve this goal by practicing"}),Object(b.jsx)(z.a.Control,{required:!0,name:"time",value:s,onChange:this.handleChange})]}),Object(b.jsx)(z.a.Group,{controlId:"measurement",style:{marginTop:"6px",marginBottom:"5px"},children:Object(b.jsx)(z.a.Control,{required:!0,name:"measurement",value:o,onChange:this.handleChange})}),Object(b.jsxs)(z.a.Group,{controlId:"frequency",style:{marginTop:"6px",marginBottom:"5px"},children:[Object(b.jsx)("p",{children:"every"}),Object(b.jsx)(z.a.Control,{required:!0,name:"frequency",value:i,onChange:this.handleChange}),Object(b.jsx)("p",{children:"."})]}),Object(b.jsx)("div",{style:{marginLeft:"12px"},children:Object(b.jsx)(H.a,{type:"submit",style:{marginTop:"11px"},children:"Submit"})})]})})]})}}]),n}(r.a.Component),oe=Object(h.f)(se),ie=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(A,{user:r}),n.map((function(t){return Object(b.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(b.jsxs)("main",{className:"container",children:[Object(b.jsx)(h.b,{path:"/sign-up",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Y,{msgAlert:e.msgAlert,setUser:e.setUser}),Object(b.jsx)(P,{})]})}}),Object(b.jsx)(h.b,{path:"/sign-in",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser}),Object(b.jsx)(P,{})]})}}),Object(b.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(P,{})}}),Object(b.jsx)(x,{user:r,path:"/sign-out",render:function(){return Object(b.jsx)(V,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(b.jsx)(x,{user:r,path:"/change-pw",render:function(){return Object(b.jsx)($,{msgAlert:e.msgAlert,user:r})}}),Object(b.jsx)(x,{user:r,path:"/dashboard",render:function(){return Object(b.jsx)(re,{msgAlert:e.msgAlert,user:r})}}),Object(b.jsx)(x,{user:r,path:"/create-goal",render:function(){return Object(b.jsx)(oe,{msgAlert:e.msgAlert,user:r})}})]})]})}}]),n}(a.Component),ce=Object(b.jsx)(w.a,{basename:"/Syntax-Client",children:Object(b.jsx)(ie,{})});o.a.render(ce,document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.544cd7a8.chunk.js.map