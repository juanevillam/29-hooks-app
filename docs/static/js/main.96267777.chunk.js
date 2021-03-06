(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),o=a.n(c),r=a(4),m=a(2),u=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello World, I'm Juan Villa"))},i=(a(18),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-info bg-info"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("img",{src:"favicon.ico",className:"d-inline-block align-top",width:"30",height:"24"}),l.a.createElement("a",{className:"navbar-brand ml-1"},"Hooks App"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Examples"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/multiple-custom-hooks",className:"dropdown-item nav-link"},"MultipleCustomHooks")))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Memos"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/father",className:"dropdown-item nav-link"},"Father")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/memorize",className:"dropdown-item nav-link"},"Memorize")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/memo-hook",className:"dropdown-item nav-link"},"MemoHook")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/callback-hook",className:"dropdown-item nav-link"},"CallbackHook")))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"useEffect"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/message",className:"dropdown-item nav-link"},"Message")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/simple-form",className:"dropdown-item nav-link"},"SimpleForm")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/form-with-custom-hook",className:"dropdown-item nav-link"},"FormWithCustomHook")))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"useLayoutEffect"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/layout",className:"dropdown-item nav-link"},"Layout")))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"useReducer"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/to-do-app",className:"dropdown-item nav-link"},"To-do App")))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"useRef"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/focus-screen",className:"dropdown-item nav-link"},"FocusScreen")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/ref-example",className:"dropdown-item nav-link"},"RefExample")))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"useState"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/counter-app",className:"dropdown-item nav-link"},"CounterApp"))))))))}),s=a(1),d=function(e){var t=Object(n.useRef)(!0),a=Object(n.useState)({data:null,loading:!0,error:null}),l=Object(s.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){return function(){return t.current=!1}}),[]),Object(n.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&o({loading:!1,error:null,data:e})}))}),[e]),c},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(n.useState)(e),a=Object(s.a)(t,2),l=a[0],c=a[1],o=function(){return c(e)},r=function(){return c(l+1)},m=function(){return c(l-1)};return{counter:l,increment:r,decrement:m,reset:o}},p=function(){var e=b(1),t=e.counter,a=e.increment,n=d("https://www.breakingbadapi.com/api/quotes/".concat(t)),c=n.loading,o=n.data,r=!!o&&o[0],m=r.author,u=r.quote;return l.a.createElement("div",null,l.a.createElement("h1",null,"Breaking Bad Quotes"),l.a.createElement("hr",null),c?l.a.createElement("div",{className:"alert alert-info text-center"},"Loading..."):l.a.createElement("blockquote",{className:"blockquote text-right"},l.a.createElement("p",{className:"mt-1"}," ",u," "),l.a.createElement("footer",{className:"blockquote-footer"}," ",m," ")),l.a.createElement("button",{className:"btn btn-info",onClick:a},"Next quote"))},E=function(){var e=Object(n.useState)({x:0,y:0}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=a.x,r=a.y;return Object(n.useEffect)((function(){var e=function(e){var t={x:e.x,y:e.y};c(t)};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Here are the coordinates of your mouse pointer:"),l.a.createElement("h4",null,"x:",o," ------ y: ",r))},f=a(10),v=a(5),h=function(){var e=Object(n.useState)({name:"",email:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=a.name,r=a.email;Object(n.useEffect)((function(){return console.log("hey!")}),[]),Object(n.useEffect)((function(){return console.log("The formState has been changed")}),[a]),Object(n.useEffect)((function(){return console.log("The email has been changed")}),[r]);var m=function(e){var t=e.target;c(Object(v.a)(Object(v.a)({},a),{},Object(f.a)({},t.name,t.value)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"useEffect"),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name or Type Juan and a secret message will appear!",autoComplete:"off",value:o,onChange:m})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"email@gmail.com",autoComplete:"off",value:r,onChange:m})),"Juan"===o&&l.a.createElement(E,null))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),l=a[0],c=a[1],o=function(){return c(e)},r=function(e){var t=e.target;c(Object(v.a)(Object(v.a)({},l),{},Object(f.a)({},t.name,t.value)))};return[l,r,o]},g=function(){var e=N({name:"",email:"",password:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=a.name,r=a.email,m=a.password;Object(n.useEffect)((function(){return console.log("Email has changed.")}),[r]);return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a)}},l.a.createElement("h1",null,"FormWithCustomHook"),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name",autoComplete:"off",value:o,onChange:c})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"email@gmail.com",autoComplete:"off",value:r,onChange:c})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"*****",value:m,onChange:c})),l.a.createElement("button",{type:"submit",className:"btn btn-info"},"Guardar"))},k=l.a.memo((function(e){var t=e.number,a=e.increment;return l.a.createElement("button",{className:"btn btn-info mr-3",onClick:function(){return a(t)}},t)})),w=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useCallback)((function(e){c((function(t){return t+e}))}),[c]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Father"),l.a.createElement("p",null," Total: ",a," "),l.a.createElement("hr",null),l.a.createElement("h1",null,"Son"),[2,4,6,8,10].map((function(e){return l.a.createElement(k,{key:e,number:e,increment:o})})))},O=l.a.memo((function(e){var t=e.increment;return l.a.createElement("button",{className:"btn btn-info",onClick:function(){return t(5)}},"Increment")})),x=function(){var e=Object(n.useState)(10),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useCallback)((function(e){c((function(t){return t+e}))}),[c]);return Object(n.useEffect)((function(){}),[o]),l.a.createElement("div",null,l.a.createElement("h1",null,"useCallback Hook:  ",a,"  "),l.a.createElement("hr",null),l.a.createElement(O,{increment:o}))},j=function(){var e=b(15),t=e.counter,a=e.increment,c=Object(n.useState)(!0),o=Object(s.a)(c,2),r=o[0],m=o[1],u=Object(n.useMemo)((function(){return function(e){for(var t=0;t<e;t++)console.log("There we go...");return"".concat(e," iterations performed.")}(t)}),[t]);return l.a.createElement("div",null,l.a.createElement("h1",null,"MemoHook"),l.a.createElement("h3",null,"Counter: ",l.a.createElement("small",null,t),"  "),l.a.createElement("hr",null),l.a.createElement("p",null," ",u," "),l.a.createElement("button",{className:"btn btn-info",onClick:a},"+1"),l.a.createElement("button",{className:"btn btn-outline-info ml-3",onClick:function(){return m(!r)}},"Show/Hide ",JSON.stringify(r)))},C=l.a.memo((function(e){var t=e.value;return l.a.createElement("small",null,t)})),y=function(){var e=b(10),t=e.counter,a=e.increment,c=Object(n.useState)(!0),o=Object(s.a)(c,2),r=o[0],m=o[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Counter: ",l.a.createElement(C,{value:t}),"  "),l.a.createElement("hr",null),l.a.createElement("button",{className:"btn btn-info",onClick:a},"+1"),l.a.createElement("button",{className:"btn btn-outline-info ml-3",onClick:function(){return m(!r)}},"Show/Hide ",JSON.stringify(r)))},S=function(){var e=b(1),t=e.counter,a=e.increment,c=d("https://www.breakingbadapi.com/api/quotes/".concat(t)).data,o=(!!c&&c[0]).quote,r=Object(n.useRef)(),m=Object(n.useState)({}),u=Object(s.a)(m,2),i=u[0],p=u[1];return Object(n.useLayoutEffect)((function(){return p(r.current.getBoundingClientRect())}),[o]),l.a.createElement("div",null,l.a.createElement("h1",null,"LayoutEffect"),l.a.createElement("hr",null),l.a.createElement("blockquote",{className:"blockquote text-right"},l.a.createElement("p",{className:"mb-0",ref:r},o)),l.a.createElement("h1",null,"Quote Box Size"),l.a.createElement("pre",null,JSON.stringify(i,null,3)),l.a.createElement("button",{className:"btn btn-info",onClick:a},"Next quote"))},T=a(22),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(T.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(v.a)(Object(v.a)({},e),{},{done:!e.done}):e}));default:return e}},H=function(e){var t=e.todo,a=e.index,n=e.handleDelete,c=e.handleToggle;return l.a.createElement("li",{key:t.id,className:"list-group-item"},l.a.createElement("p",{className:"".concat(t.done&&"complete"," "),onClick:function(){return c(t.id)}},a+1,". ",t.desc),l.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){return n(t.id)}},"Delete"))},q=function(e){var t=e.todos,a=e.handleDelete,n=e.handleToggle;return l.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(e,t){return l.a.createElement(H,{key:e.id,todo:e,index:t,handleDelete:a,handleToggle:n})})))},F=function(e){var t=e.handleAddTodo,a=N({description:""}),n=Object(s.a)(a,3),c=n[0].description,o=n[1],r=n[2];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Add To-Do"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!(c.trim().length<=1)){var a={id:(new Date).getTime(),desc:c,done:!1};t(a),r()}}},l.a.createElement("input",{type:"text",name:"description",className:"form-control",placeholder:"Task To-Do...",autoComplete:"off",value:c,onChange:o}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-info mt-1 btn-block"},"Add")))},J=function(){return JSON.parse(localStorage.getItem("todos"))||[]},R=function(){var e=Object(n.useReducer)(D,[],J),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);return l.a.createElement("div",null,l.a.createElement("h1",null,"TodoApp ",l.a.createElement("small",null,"Tasks To-Do: ( ",a.length," )")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-7"},l.a.createElement(q,{todos:a,handleDelete:function(e){c({type:"delete",payload:e})},handleToggle:function(e){return c({type:"toggle",payload:e})}})),l.a.createElement("div",{className:"col-5"},l.a.createElement(F,{handleAddTodo:function(e){return c({type:"add",payload:e})}}))))},A=function(){var e=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement("h1",null,"Focus Screen"),l.a.createElement("hr",null),l.a.createElement("input",{ref:e,className:"form-control",placeholder:"Your name"}),l.a.createElement("button",{className:"btn btn-outline-info mt-5",onClick:function(){return e.current.select()}},"Focus"))},L=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"RealExampleRef:"),l.a.createElement("hr",null),a&&l.a.createElement(p,null),l.a.createElement("button",{className:"btn btn-info mt-2",onClick:function(){return c(!a)}},"Show / Hide"))},M=function(){var e=Object(n.useState)({counter1:10,counter2:20,counter3:30,counter4:40}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=a.counter1,r=a.counter2;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Counter1 ",o," "),l.a.createElement("h1",null,"Counter2 ",r," "),l.a.createElement("hr",null),l.a.createElement("button",{className:"btn btn-info ml-3",onClick:function(){c(Object(v.a)(Object(v.a)({},a),{},{counter1:o+1}))}},"Counter1: +1"),l.a.createElement("button",{className:"btn btn-info ml-3",onClick:function(){c(Object(v.a)(Object(v.a)({},a),{},{counter2:r+1}))}},"Counter2: +1"))},B=function(){return l.a.createElement(r.a,null,l.a.createElement(i,null),l.a.createElement("div",null,l.a.createElement("div",{className:"container mt-5"},l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:u}),l.a.createElement(m.b,{exact:!0,path:"/multiple-custom-hooks",component:p}),l.a.createElement(m.b,{exact:!0,path:"/message",component:E}),l.a.createElement(m.b,{exact:!0,path:"/simple-form",component:h}),l.a.createElement(m.b,{exact:!0,path:"/form-with-custom-hook",component:g}),l.a.createElement(m.b,{exact:!0,path:"/father",component:w}),l.a.createElement(m.b,{exact:!0,path:"/callback-hook",component:x}),l.a.createElement(m.b,{exact:!0,path:"/memo-hook",component:j}),l.a.createElement(m.b,{exact:!0,path:"/memorize",component:y}),l.a.createElement(m.b,{exact:!0,path:"/layout",component:S}),l.a.createElement(m.b,{exact:!0,path:"/to-do-app",component:R}),l.a.createElement(m.b,{exact:!0,path:"/focus-screen",component:A}),l.a.createElement(m.b,{exact:!0,path:"/ref-example",component:L}),l.a.createElement(m.b,{exact:!0,path:"/counter-app",component:M}),"                        ",l.a.createElement(m.a,{to:"/"})))))};o.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.96267777.chunk.js.map