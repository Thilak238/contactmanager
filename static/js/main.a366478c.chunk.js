(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{36:function(e,a,t){e.exports=t(66)},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),l=t(3),s=t(4),i=t(6),m=t(5),u=t(13),p=t(1),h=t(11),d=t.n(h),b=t(14),f=t(35),v=t(16),E=t(12),y=t.n(E),N=r.a.createContext(),g=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},C=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[],dispatch:function(a){e.setState((function(e){return g(e,a)}))}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),j=N.Consumer,O=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(a){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(){var e=Object(b.a)(d.a.mark((function e(a,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(j,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,"Name: ",n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,t,s),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(u.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Phone: ",o),r.a.createElement("li",{className:"list-group-item"},"Email: ",c)):null)}))}}]),t}(n.Component),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),t}(n.Component),w=t(17),S=t(34),x=t.n(S),A=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:x()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};A.defaultProps={type:"text"};var T=A,D=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(a){e.setState(Object(w.a)({},a.target.name,a.target.value))},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.name,c=n.email,o=n.phone;if(""!==r)if(""!==c)if(""!==o){var l={name:r,email:c,phone:o};a({type:"ADD_CONTACT",payload:y.a.post("https://jsonplaceholder.typicode.com/users",l).data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/")}else e.setState({errors:{phone:"Email is Required"}});else e.setState({errors:{email:"Email is Required"}});else e.setState({errors:{name:"Name is Required"}})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(T,{label:"Name",name:"name",placeholder:"Enter Your Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(T,{label:"Email",name:"email",type:"email",placeholder:"Enter Your Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(T,{label:"Phone",name:"phone",placeholder:"Enter Your Phone Number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block"}))))}))}}]),t}(n.Component),P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(a){e.setState(Object(w.a)({},a.target.name,a.target.value))},e.onSubmit=function(){var a=Object(b.a)(d.a.mark((function a(t,n){var r,c,o,l,s,i,m;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){a.next=5;break}return e.setState({errors:{name:"Name is Required"}}),a.abrupt("return");case 5:if(""!==o){a.next=8;break}return e.setState({errors:{email:"Email is Required"}}),a.abrupt("return");case 8:if(""!==l){a.next=11;break}return e.setState({errors:{phone:"Email is Required"}}),a.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=e.props.match.params.id,a.next=15,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=a.sent,t({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var a,t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(T,{label:"Name",name:"name",placeholder:"Enter Your Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(T,{label:"Email",name:"email",type:"email",placeholder:"Enter Your Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(T,{label:"Phone",name:"phone",placeholder:"Enter Your Phone Number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block"}))))}))}}]),t}(n.Component),M=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm \r navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};M.defaultProps={branding:"My App"};var q=M,R=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to Manage"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},_=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},Y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={title:"",body:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(a){return e.setState({title:a.title,body:a.body})}))}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,t))}}]),t}(n.Component),I=(t(64),t(65),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(u.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(q,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/contact/add",component:D}),r.a.createElement(p.a,{exact:!0,path:"/contact/edit/:id",component:P}),r.a.createElement(p.a,{exact:!0,path:"/about",component:R}),r.a.createElement(p.a,{exact:!0,path:"/test",component:Y}),r.a.createElement(p.a,{component:_}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a366478c.chunk.js.map