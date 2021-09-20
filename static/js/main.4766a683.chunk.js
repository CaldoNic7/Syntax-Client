(this["webpackJsonpsyntax-client"]=this["webpackJsonpsyntax-client"]||[]).push([[0],{66:function(e,t,n){},76:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(31),o=n.n(s),i=(n(66),n(61)),c=n(10),l=n(11),d=n(13),u=n(12),h=n(8),j=n(101),g=n(32),m=n(56),p=n(1),b=["user","component","render"],x=function(e){var t=e.user,n=e.component,a=e.render,r=Object(m.a)(e,b);return t&&a?Object(p.jsx)(h.b,Object(g.a)(Object(g.a)({},r),{},{render:a})):Object(p.jsx)(h.b,Object(g.a)(Object(g.a)({},r),{},{render:function(e){return t?Object(p.jsx)(n,Object(g.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))},O=n(47),f=(n(76),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(p.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(O.a.Heading,{children:n}),Object(p.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),y=n(60),v=n(34),C=n(15),w={fontSize:"32px",marginLeft:"17px",textDecoration:"none",color:"#F78536",fontWeight:"bold",padding:"1px"},S=Object(p.jsx)(a.Fragment,{children:Object(p.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",style:{fontSize:"17px",marginRight:"17px",justifySelf:"flex-end",color:"#F78536"},children:"Sign Out"})})}),F=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/sign-up",className:"nav-link",style:{fontSize:"17px",color:"#DFEBED"},children:"Sign Up"}),Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",style:{fontSize:"17px",color:"#DFEBED"},children:"Sign In"})]}),k=function(e){var t=e.user;return Object(p.jsxs)(v.a,{fixed:"bottom",bg:"dark",variant:"dark",expand:"md",children:[Object(p.jsx)(v.a.Brand,{children:Object(p.jsx)(C.b,{to:"/dashboard",style:w,children:"< SYNTAX />"})}),Object(p.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsx)(y.a,{className:"ml-auto",style:{width:"100%",display:"flex"},children:t?S:F})})]})},A={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"800px"},T={fontSize:"110px",color:"rgba(247, 133, 54, 1)",fontWeight:"bold"},I={fontSize:"32px",color:"#FFFFFF"},P=function(e){e.user;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:A,children:[Object(p.jsx)("h1",{style:T,children:"< SYNTAX />"}),Object(p.jsx)("p",{style:I,children:"Always missing a semicolon or curly brace in JavaScript? Can't ever get the indentation right in Python? Tired of having to pause to look down to find the carrot to open a tag instead of the carrot to close it? It's all about muscle memory baby! Syntax is here to help you set the goals, do the work and build that muscle memory you need to be a syntactically correct, code typing master."})]})})},N=n(24),U="https://syntax-typing-practice.herokuapp.com",G="http://localhost:8000",q="localhost"===window.location.hostname?G:U,D=n(21),E=n.n(D),L=function(e){return E()({url:q+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},H=n(5),W=n(102),B=n(100),z={position:"absolute",bottom:"75px",left:"2%",minWidth:"450px",minHeight:"500px",backgroundColor:"rgba(73, 114, 133, .7)",color:"#FFFFFF",borderRadius:"25px"},R={color:"#F78536",textAlign:"center"},M={position:"absolute",bottom:"75px",left:"2%",minWidth:"450px",minHeight:"500px",backgroundColor:"rgba(73, 114, 133, .7)",color:"#FFFFFF",borderRadius:"25px"},J={color:"#F78536",textAlign:"center"},K={position:"fixed",top:"40px",minWidth:"20%",minHeight:"35%",textAlign:"center",color:"#FFFFFF",borderRadius:"25px",margin:"25px auto",display:"flex",flexWrap:"wrap",alignContent:"center",backgroundColor:"rgba(73, 114, 133, .7)"},V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",minWidth:"90%",minHeight:"75%",margin:"0 auto",padding:"15px",backgroundColor:"#FFFFFF"},X={color:"#F78536",textAlign:"center"},Y={width:"100%",color:"black",textAlign:"justify"},_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(N.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,r=n.msgAlert,s=n.history,o=n.setUser;(t=a.state,E()({url:q+"/sign-up/",method:"POST",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(a.state)})).then((function(e){return o(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/dashboard")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(p.jsx)(W.a,{style:z,children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{style:R,children:"Sign Up"}),Object(p.jsxs)(H.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(H.a.Group,{controlId:"email",children:[Object(p.jsx)(H.a.Label,{children:"Email address"}),Object(p.jsx)(H.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(H.a.Group,{controlId:"password",children:[Object(p.jsx)(H.a.Label,{children:"Password"}),Object(p.jsx)(H.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(H.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(H.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(H.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(B.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),n}(a.Component),Q=Object(h.f)(_),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(N.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser;L(a.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/dashboard")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(p.jsx)(W.a,{style:M,children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{style:J,children:"Sign In"}),Object(p.jsxs)(H.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(H.a.Group,{controlId:"email",children:[Object(p.jsx)(H.a.Label,{children:"Email address"}),Object(p.jsx)(H.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(H.a.Group,{controlId:"password",children:[Object(p.jsx)(H.a.Label,{children:"Password"}),Object(p.jsx)(H.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(B.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),n}(a.Component),$=Object(h.f)(Z),ee=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return E()({url:q+"/sign-out/",method:"DELETE",headers:{Authorization:"TOKEN ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a()})).finally((function(){return n.push("/")}))}},{key:"render",value:function(){return""}}]),n}(a.Component),te=Object(h.f)(ee),ne={position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",display:"flex",justifyContent:"center",textAlign:"center",height:"125px",width:"50%px",backgroundColor:"rgba(255, 255, 255,.7)",color:"rgba(247, 133, 54, 1)"},ae={position:"relative",top:"-225px",display:"flex",flexDirection:"column",justifyContent:"center"},re={position:"absolute",right:"14.7%",width:"50%px"},se={marginBottom:"25px",display:"flex",flexWrap:"wrap",alignContent:"center",minHeight:"450px",backgroundColor:"rgba(73, 114, 133, .7)"},oe={position:"relative",top:"175px",left:"-15%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",justifyContent:"center",width:"300px",height:" 400px"},ie={width:"200px",margin:"5px 50px"},ce={marginBottom:"10px",height:"100px",minWidth:"1000px"},le=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(N.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return E()({url:q+"/change-pw/",method:"PATCH",headers:{Authorization:"TOKEN ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.oldPassword,a=t.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)(W.a,{style:oe,children:Object(p.jsxs)("div",{children:[Object(p.jsx)(B.a,{style:ie,onClick:function(){return e.props.history.push("/dashboard")},children:"Dashboard"}),Object(p.jsx)(B.a,{style:ie,onClick:function(){return e.props.history.push("/sign-out/")},children:"Sign Out"})]})}),Object(p.jsxs)(W.a,{style:K,children:[Object(p.jsx)("h3",{style:X,children:"Change Password"}),Object(p.jsxs)(H.a,{style:V,onSubmit:this.onChangePassword,children:[Object(p.jsxs)(H.a.Group,{controlId:"oldPassword",style:Y,children:[Object(p.jsx)(H.a.Label,{children:"Old password"}),Object(p.jsx)(H.a.Control,{required:!0,name:"oldPassword",value:n,type:"password",onChange:this.handleChange})]}),Object(p.jsxs)(H.a.Group,{controlId:"newPassword",style:Y,children:[Object(p.jsx)(H.a.Label,{children:"New Password"}),Object(p.jsx)(H.a.Control,{required:!0,name:"newPassword",value:a,type:"password",onChange:this.handleChange})]}),Object(p.jsx)(B.a,{variant:"primary",type:"submit",children:"Submit"})]})]})]})})}}]),n}(a.Component),de=Object(h.f)(le),ue=function(e){return E()({method:"GET",url:q+"/goals/",headers:{Authorization:"TOKEN ".concat(e.token)}})},he=n(46),je=n.n(he),ge={textAlign:"center",margin:"0 auto",marginTop:"50px",color:"#F78536"},me={margin:"25px auto",display:"flex",flexWrap:"wrap",alignContent:"center",minHeight:"450px",backgroundColor:"rgba(73, 114, 133, .7)"},pe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",minWidth:"90%",minHeight:"75%",margin:"0 auto",border:"1px solid black",padding:"15px",backgroundColor:"#FFFFFF"},be={width:"400px",margin:"17px auto"},xe={marginBottom:"17px",marginTop:"-7px",marginLeft:"7px",marginRight:"7px"},Oe={marginBottom:"17px",marginTop:"-7px",marginLeft:"7px",marginRight:"7px"},fe={marginBottom:"17px",marginTop:"-7px",marginLeft:"7px"},ye={marginBottom:"17px",marginTop:"-7px",marginLeft:"7px",marginRight:"7px"},ve={marginBottom:"17px",marginTop:"-7px",marginLeft:"7px",marginRight:"7px"},Ce={marginBottom:"17px",marginTop:"-7px",marginLeft:"7px",marginRight:"7px"},we={display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"center",marginBottom:"-2px",paddingLeft:"55px"},Se={textAlign:"center"},Fe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).show=function(e){var t=a.props,n=t.user,r=t.msgAlert;(function(e,t){return E()({method:"GET",url:q+"/goals/".concat(t,"/"),headers:{Authorization:"TOKEN ".concat(e.token)}})})(n,e.id).then((function(){a.setState({goalToUpdate:e})})).catch((function(e){return r({heading:"Show failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.handleChange=function(e){var t=e.target.name,n=e.target.value,r=Object.assign({},a.state.goalToUpdate);r[t]=n,a.setState({goalToUpdate:r})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.goalToUpdate,n=a.props,r=n.user,s=n.msgAlert;(function(e,t,n){return E()({method:"PATCH",url:q+"/goals/".concat(t,"/"),headers:{Authorization:"TOKEN ".concat(e.token)},data:{goal:{name:n.name,characters:n.characters,language:n.language,date:n.date,time:n.time,measurement:n.measurement,frequency:n.frequency}}})})(r,t.id,t).then((function(){ue(r).then((function(e){return a.setState({goals:e.data.goals,goalToUpdate:null})})).then((function(){return s({heading:"Success",message:"Here are your goals",variant:"success"})})).catch((function(e){return s({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))})).catch((function(e){s({heading:"Goal update failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.delete=function(e){var t=a.props,n=t.user,r=t.msgAlert;(function(e,t){return E()({method:"DELETE",url:q+"/goals/"+t,headers:{Authorization:"TOKEN ".concat(e.token)}})})(n,e).then((function(){var t=Object.assign({},a.state);t.goals=t.goals.filter((function(t){return t.id!==e})),a.setState({goals:t.goals,goalToUpdate:null})})).then((function(){return r({heading:"Delete success",message:"Chord deleted",variant:"success"})})).catch((function(e){return r({heading:"Delete failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.daysRemaining=function(e){var t=je()(e.date);return je()(t).endOf("day").fromNow()},a.state={goals:null,goalToUpdate:null,javaScript:!1,python:!1,css:!1,html:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;null!==n&&ue(n).then((function(t){return e.setState({goals:t.data.goals})})).then((function(){return a({heading:"Success",message:"Here are your goals",variant:"success"})})).catch((function(e){return a({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.goals,a=t.goalToUpdate;if(null===n)return Object(p.jsx)("p",{children:"Loading..."});console.log(n);var r,s,o=[];return 0===n.length?this.props.history.push("/create-goal"):(n.forEach((function(t){if(o.push(t),null!==a&&t.id===a.id){o.pop(t);var n=e.state.goalToUpdate,r=n.name,i=n.characters,c=n.date,l=n.time;s=Object(p.jsx)(W.a,{style:se,children:Object(p.jsxs)(H.a,{style:pe,onSubmit:e.handleSubmit,children:[Object(p.jsxs)("h4",{children:[" ",Object(p.jsx)(H.a.Group,{controlId:"name",style:be,children:Object(p.jsx)(H.a.Control,{style:Se,required:!0,name:"name",value:r,onChange:e.handleChange})})," "]}),Object(p.jsxs)("p",{style:we,children:[" I want to type",Object(p.jsx)(H.a.Group,{controlId:"characters",style:xe,children:Object(p.jsx)(H.a.Control,{style:Se,type:"number",className:"form-control",name:"characters",defaultValue:i,min:0,max:200,step:1,precision:0,onChange:e.handleChange})})," characters per minute in ",Object(p.jsx)(H.a.Group,{controlId:"language",style:Oe,children:Object(p.jsxs)(H.a.Control,{as:"select",required:!0,name:"language",onChange:e.handleChange,style:Se,children:[Object(p.jsx)("option",{children:"Select Coding Language"}),Object(p.jsx)("option",{value:"JavaScript",children:"JavaScript"}),Object(p.jsx)("option",{value:"Python",children:"Python"}),Object(p.jsx)("option",{value:"HTML",children:"HTML"}),Object(p.jsx)("option",{value:"CSS",children:"CSS"})]})})," by ",Object(p.jsx)(H.a.Group,{controlId:"date",style:fe,children:Object(p.jsx)(H.a.Control,{style:Se,type:"date",name:"date",defaultValue:c,onChange:e.handleChange})})," I will achieve this goal by practicing ",Object(p.jsx)(H.a.Group,{controlId:"time",style:ye,children:Object(p.jsx)(H.a.Control,{style:Se,type:"number",className:"form-control",name:"time",defaultValue:l,min:10,max:120,step:1,precision:0,onChange:e.handleChange})})," ",Object(p.jsx)(H.a.Group,{controlId:"measurement",style:ve,children:Object(p.jsxs)(H.a.Control,{style:Se,as:"select",required:!0,name:"measurement",onChange:e.handleChange,children:[Object(p.jsx)("option",{children:"Select Unit of Measure"}),Object(p.jsx)("option",{value:"minute(s)",children:"minute(s)"}),Object(p.jsx)("option",{value:"hour(s)",children:"hours(s)"}),Object(p.jsx)("option",{value:"day(s)",children:"days(s)"})]})})," every ",Object(p.jsx)(H.a.Group,{controlId:"frequency",style:Ce,children:Object(p.jsxs)(H.a.Control,{style:Se,as:"select",required:!0,name:"frequency",onChange:e.handleChange,children:[Object(p.jsx)("option",{children:"Select Frequency"}),Object(p.jsx)("option",{value:"day",children:"day"}),Object(p.jsx)("option",{value:"week",children:"week"}),Object(p.jsx)("option",{value:"month",children:"month"})]})})," "]}),Object(p.jsxs)("div",{style:{marginLeft:"12px"},children:[Object(p.jsx)(B.a,{type:"submit",style:{margin:"11px"},children:"Submit"}),Object(p.jsx)(B.a,{onClick:function(){return e.delete(t.id)},style:{margin:"11px"},children:"Delete"})]})]})})}})),r=o.map((function(t){return Object(p.jsx)(W.a,{style:ce,className:"goalStatCard",onClick:function(){return e.show(t)},children:Object(p.jsx)(W.a.Body,{children:Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsxs)(W.a.Title,{children:[t.name,": ",t.language]}),Object(p.jsxs)(W.a.Title,{children:["Due ",e.daysRemaining(t),"."]})]})})},t.id)}))),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W.a,{style:ne,children:Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:['Press the "set goal" button']})})}),Object(p.jsx)(W.a,{style:oe,children:Object(p.jsxs)("div",{children:[Object(p.jsx)(B.a,{style:ie,onClick:function(){return e.props.history.push("/create-goal/")},children:"Set Goal"}),Object(p.jsx)(B.a,{style:ie,onClick:function(){return e.props.history.push("/change-pw/")},children:"Profile"})]})}),Object(p.jsx)("div",{style:re}),Object(p.jsxs)("div",{style:ae,children:[Object(p.jsx)("div",{children:s}),Object(p.jsx)("div",{children:r})]})]})}}]),n}(r.a.Component),ke=Object(h.f)(Fe),Ae=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.name,n=e.target.value,r=Object.assign({},a.state.goal);r[t]=n,a.setState({goal:r})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.goal);var t=a.props,n=t.user,r=t.msgAlert,s=t.history;(function(e,t){return E()({method:"POST",url:q+"/goals/",headers:{Authorization:"TOKEN ".concat(e.token)},data:{goal:{name:t.name,characters:t.characters,language:t.language,date:t.date,time:t.time,measurement:t.measurement,frequency:t.frequency}}})})(n,a.state.goal).then((function(e){return s.push("/dashboard")})).catch((function(e){r({heading:"Goal creation failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={goal:{name:"Goal 1",characters:"77",language:"Clingon",date:"2022-05-05",time:"30",measurement:"min",frequency:"day"}},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.goal,t=e.name,n=e.characters,a=e.date,r=e.time;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{style:ge,children:"Set a goal to track your growth!"}),Object(p.jsx)(W.a,{style:me,children:Object(p.jsxs)(H.a,{style:pe,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("h4",{children:[" ",Object(p.jsx)(H.a.Group,{controlId:"name",style:be,children:Object(p.jsx)(H.a.Control,{style:Se,required:!0,name:"name",value:t,onChange:this.handleChange})})," "]}),Object(p.jsxs)("p",{style:we,children:[" I want to type",Object(p.jsx)(H.a.Group,{controlId:"characters",style:xe,children:Object(p.jsx)(H.a.Control,{style:Se,type:"number",className:"form-control",name:"characters",defaultValue:n,min:0,max:200,step:1,precision:0,onChange:this.handleChange})})," characters per minute in ",Object(p.jsx)(H.a.Group,{controlId:"language",style:Oe,children:Object(p.jsxs)(H.a.Control,{style:Se,as:"select",required:!0,name:"language",onChange:this.handleChange,children:[Object(p.jsx)("option",{children:"Select Coding Language"}),Object(p.jsx)("option",{value:"JavaScript",children:"JavaScript"}),Object(p.jsx)("option",{value:"Python",children:"Python"}),Object(p.jsx)("option",{value:"HTML",children:"HTML"}),Object(p.jsx)("option",{value:"CSS",children:"CSS"})]})})," by ",Object(p.jsx)(H.a.Group,{controlId:"date",style:fe,children:Object(p.jsx)(H.a.Control,{style:Se,type:"date",name:"date",defaultValue:a,onChange:this.handleChange})})," I will achieve this goal by practicing ",Object(p.jsx)(H.a.Group,{controlId:"time",style:ye,children:Object(p.jsx)(H.a.Control,{style:Se,type:"number",className:"form-control",name:"time",defaultValue:r,min:10,max:120,step:1,precision:0,onChange:this.handleChange})})," ",Object(p.jsx)(H.a.Group,{controlId:"measurement",style:ve,children:Object(p.jsxs)(H.a.Control,{style:Se,as:"select",required:!0,name:"measurement",onChange:this.handleChange,children:[Object(p.jsx)("option",{children:"Select Unit of Measure"}),Object(p.jsx)("option",{value:"minute(s)",children:"minute(s)"}),Object(p.jsx)("option",{value:"hour(s)",children:"hours(s)"}),Object(p.jsx)("option",{value:"day(s)",children:"days(s)"})]})})," every ",Object(p.jsx)(H.a.Group,{controlId:"frequency",style:Ce,children:Object(p.jsxs)(H.a.Control,{style:Se,as:"select",required:!0,name:"frequency",onChange:this.handleChange,children:[Object(p.jsx)("option",{children:"Select Frequency"}),Object(p.jsx)("option",{value:"day",children:"day"}),Object(p.jsx)("option",{value:"week",children:"week"}),Object(p.jsx)("option",{value:"month",children:"month"})]})})," "]}),Object(p.jsx)("div",{style:{marginLeft:"12px"},children:Object(p.jsx)(B.a,{type:"submit",style:{marginTop:"11px"},children:"Submit"})})]})})]})}}]),n}(r.a.Component),Te=Object(h.f)(Ae),Ie=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(k,{user:r}),n.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(h.b,{path:"/sign-up",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Q,{msgAlert:e.msgAlert,setUser:e.setUser}),Object(p.jsx)(P,{})]})}}),Object(p.jsx)(h.b,{path:"/sign-in",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)($,{msgAlert:e.msgAlert,setUser:e.setUser}),Object(p.jsx)(P,{})]})}}),Object(p.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(P,{})}}),Object(p.jsx)(x,{user:r,path:"/sign-out",render:function(){return Object(p.jsx)(te,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(p.jsx)(x,{user:r,path:"/change-pw",render:function(){return Object(p.jsx)(de,{msgAlert:e.msgAlert,user:r})}}),Object(p.jsx)(x,{user:r,path:"/dashboard",render:function(){return Object(p.jsx)(ke,{msgAlert:e.msgAlert,user:r})}}),Object(p.jsx)(x,{user:r,path:"/create-goal",render:function(){return Object(p.jsx)(Te,{msgAlert:e.msgAlert,user:r})}})]})]})}}]),n}(a.Component),Pe=Object(p.jsx)(C.a,{basename:"/Syntax-Client",children:Object(p.jsx)(Ie,{})});o.a.render(Pe,document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.4766a683.chunk.js.map