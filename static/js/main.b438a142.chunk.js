(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),i=c.n(n),a=c(17),l=c.n(a),r=(c(24),c(4)),j=(c(25),c(2)),o=c(11),d=c(3);var b=function(e){var t=e.insertTask,c=Object(n.useState)(!1),i=Object(r.a)(c,2),a=i[0],l=i[1],o=Object(n.useState)(0),d=Object(r.a)(o,2),b=d[0],O=d[1],u=Object(n.useState)(""),h=Object(r.a)(u,2),x=h[0],f=h[1],p=Object(n.useState)(""),g=Object(r.a)(p,2),m=g[0],k=g[1],v=Object(n.useState)(""),C=Object(r.a)(v,2),S=C[0],y=C[1],T=Object(n.useState)(""),w=Object(r.a)(T,2),N=w[0],D=w[1],z=Object(n.useState)(""),M=Object(r.a)(z,2),J=M[0],F=M[1],H=function(){f(""),k(""),O(0),D(""),y(""),F("")};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j.c,{size:12,lg:6,className:"p-5",children:Object(s.jsxs)(j.d,{isOpen:a,children:[Object(s.jsx)(j.f,{onClick:function(e){l(!a),e.preventDefault()},children:"Create Task"}),Object(s.jsx)(j.e,{children:Object(s.jsxs)(j.j,{onSubmit:function(e){e.preventDefault()},children:[Object(s.jsx)(j.k,{children:Object(s.jsx)(j.m,{type:"text",placeholder:"Title",value:x,onChange:function(e){f(e.target.value)}})}),Object(s.jsx)(j.k,{children:Object(s.jsx)(j.w,{placeholder:"Description about the task",value:m,onChange:function(e){k(e.target.value)}})}),Object(s.jsxs)(j.k,{children:[Object(s.jsx)("label",{children:"Should be done by"}),Object(s.jsxs)(j.r,{className:"m-5",children:[Object(s.jsx)(j.c,{onClick:function(){O(0)},className:"deadline-option ".concat(0===b?"deadline-option-selected":""),children:"Today"}),Object(s.jsx)(j.c,{onClick:function(){O(1)},className:"deadline-option ".concat(1===b?"deadline-option-selected":""),children:"24 Hrs"}),Object(s.jsx)(j.c,{onClick:function(){O(2)},className:"deadline-option ".concat(2===b?"deadline-option-selected":""),children:"Time"}),Object(s.jsx)(j.c,{onClick:function(){O(3)},className:"deadline-option ".concat(3===b?"deadline-option-selected":""),children:"Date"})]}),Object(s.jsxs)(j.r,{className:"m-5",children:[3===b?Object(s.jsx)(j.c,{className:"mr-5",children:Object(s.jsx)(j.m,{type:"date",value:S,onChange:function(e){y(e.target.value)}})}):"",2===b||3===b?Object(s.jsx)(j.c,{children:Object(s.jsx)(j.m,{type:"time",value:N,onChange:function(e){D(e.target.value)}})}):""]}),Object(s.jsx)(j.l,{children:J})]}),Object(s.jsxs)(j.k,{className:"d-flex justify-content-end",children:[Object(s.jsx)(j.b,{onClick:H,className:"m-5",color:"danger",children:"Reset"}),Object(s.jsx)(j.b,{onClick:function(){if(F(""),""!==x||""!==m){var e=new Date;if(0===b)e.setHours(23,59,59,999);else if(1===b)e.setHours(e.getHours()+24);else if(2===b){if(""===N)return void F("Must provide a time.");var c=N.split(":"),s=Object(r.a)(c,2),n=s[0],i=s[1];e.setHours(n,i,0,0)}else{if(""===S)return void F("Must provide a date.");if(""===N)return void F("Must provide a time.");var a=S.split("-"),j=Object(r.a)(a,3),o=j[0],d=j[1],O=j[2],u=N.split(":"),h=Object(r.a)(u,2),f=h[0],p=h[1];e.setFullYear(o,d,O),e.setHours(f,p,0,0)}var g={title:x,desc:m,deadline:e.toJSON(),isDue:!0,doneAt:null};t(g),H(),l(!1)}else F("Must provide a title or a description")},className:"m-5",color:"primary",children:"Submit"})]})]})})]})}),Object(s.jsx)(j.c,{size:12,lg:6,className:"p-5",children:a?Object(s.jsxs)(j.a,{children:[Object(s.jsx)("strong",{style:{fontSize:"1.2em"},children:x}),Object(s.jsx)("div",{children:m})]}):""})]})};function O(e){var t=e.task,c=e.i,i=e.deleteTask,a=e.completeTask,l=Object(n.useState)(!1),o=Object(r.a)(l,2),d=o[0],b=o[1];if(!t.isDue)return Object(s.jsx)(s.Fragment,{});var O=new Date(t.deadline),u=O.toDateString(),h=O.toLocaleTimeString(),x="primary",f=new Date;return f>O?x="danger":f<O&&(f.setHours(f.getHours()+1),f>=O&&(x="secondary")),Object(s.jsx)(j.c,{size:12,lg:6,className:"p-5",children:Object(s.jsxs)(j.a,{color:x,children:[Object(s.jsx)("span",{style:{position:"absolute",right:"10px"},onClick:function(){b(!d)},children:Object(s.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z",fill:"black"}),Object(s.jsx)("path",{d:"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",fill:"black"}),Object(s.jsx)("path",{d:"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z",fill:"black"})]})}),Object(s.jsx)("strong",{style:{fontSize:"1.2em"},children:t.title}),Object(s.jsx)("div",{style:{color:"gray",fontSize:"0.9em"},children:u+", "+h}),t.desc,Object(s.jsxs)("div",{style:d?{}:{display:"none"},children:[Object(s.jsx)(j.b,{size:"sm",color:"success",onClick:function(){a(c)},children:"Done"})," ",Object(s.jsx)(j.b,{size:"sm",color:"danger",onClick:function(){i(c)},children:"Delete"})]})]})},t.deadline+c)}var u=function(e){var t=e.tasks,c=e.deleteTask,n=e.completeTask;return t.map((function(e,t){return Object(s.jsx)(O,{task:e,i:t,deleteTask:c,completeTask:n},e.deadline+t)}))};function h(e){var t=e.task,c=e.i,i=e.deleteTask,a=Object(n.useState)(!1),l=Object(r.a)(a,2),o=l[0],d=l[1];if(t.isDue)return Object(s.jsx)(s.Fragment,{});var b=new Date(t.deadline),O=b.toDateString(),u=b.toLocaleTimeString(),h=new Date(t.doneAt),x=h.toDateString(),f=h.toLocaleTimeString(),p=b>h?"success":"danger";return Object(s.jsx)(j.c,{size:12,lg:6,className:"p-5",children:Object(s.jsxs)(j.a,{filled:!0,color:p,children:[Object(s.jsx)("span",{style:{position:"absolute",right:"10px"},onClick:function(){d(!o)},children:Object(s.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z",fill:"black"}),Object(s.jsx)("path",{d:"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",fill:"black"}),Object(s.jsx)("path",{d:"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z",fill:"black"})]})}),Object(s.jsx)("strong",{style:{fontSize:"1.2em"},children:t.title}),Object(s.jsxs)("div",{style:{color:"black",opacity:"0.5",fontSize:"0.9em"},children:[O+", "+u," | ",x+", "+f]}),t.desc,Object(s.jsx)("div",{style:o?{}:{display:"none"},children:Object(s.jsx)(j.b,{size:"sm",color:"danger",onClick:function(){i(c)},children:"Delete"})})]})},t.deadline+c)}var x=function(e){var t=e.tasks,c=e.deleteTask;return t.map((function(e,t){return Object(s.jsx)(h,{task:e,i:t,deleteTask:c},e.deadline+t)}))};var f=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],a=function(e){var t=c.filter((function(t,c){return e!==c}));i(t),localStorage.setItem("tasks",JSON.stringify(t))};return Object(n.useEffect)((function(){if(localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));i(e)}else localStorage.setItem("tasks",JSON.stringify([]))}),[]),Object(s.jsx)(j.g,{breakpoint:"fluid",children:Object(s.jsx)(j.h,{children:Object(s.jsxs)(d.c,{children:[Object(s.jsxs)(d.a,{exact:!0,path:"/",children:[Object(s.jsx)(j.r,{children:Object(s.jsx)(b,{insertTask:function(e){var t=c.slice();t.push(e),i(t),localStorage.setItem("tasks",JSON.stringify(t))}})}),Object(s.jsx)(j.r,{children:Object(s.jsx)(u,{tasks:c,deleteTask:a,completeTask:function(e){var t=c.slice();t[e].isDue=!1,t[e].doneAt=(new Date).toJSON(),i(t),localStorage.setItem("tasks",JSON.stringify(t))}})})]}),Object(s.jsx)(d.a,{path:"/done",children:Object(s.jsx)(j.r,{children:Object(s.jsx)(x,{tasks:c,deleteTask:a})})})]})})})};var p=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(s.jsx)(j.q,{withNavbar:!0,withSidebar:!0,sidebarType:"overlayed-sm-and-down",isSidebarOpen:c,toggle:function(){i(!c)},withTransitions:!0,children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)("div",{className:"sidebar-overlay",onClick:function(){i(!c)}}),Object(s.jsx)(j.n,{children:Object(s.jsxs)(j.p,{children:[Object(s.jsx)(j.b,{onClick:function(){i(!c)},children:"Menu"}),Object(s.jsx)(j.o,{children:"Better To-dos"})]})}),Object(s.jsxs)(j.s,{children:[Object(s.jsx)(j.v,{children:Object(s.jsx)(j.t,{})}),Object(s.jsx)(j.u,{children:Object(s.jsx)(o.b,{to:"/",children:"Due Tasks"})}),Object(s.jsx)(j.u,{children:Object(s.jsx)(o.b,{to:"/done",children:"Completed Tasks"})})]}),Object(s.jsx)(j.i,{children:Object(s.jsx)(f,{})})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.b438a142.chunk.js.map