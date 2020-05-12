(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),c=(a(15),a(16),a(5)),i=a(7),d=a(1),s=a(2),u=a(4),m=a(3),p=a(6),h=a.n(p),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todo,a=e.deleteTodo,n=e.handleChangeStatus;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:h()({completed:t.completed}),key:t.id},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,id:t.id,onChange:function(){return n(t.id)}}),l.a.createElement("label",{htmlFor:t.id},t.title),l.a.createElement("button",{id:t.id,type:"button",className:"destroy",onClick:a})),l.a.createElement("input",{type:"text",className:"edit"})))}}]),a}(l.a.PureComponent),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.deleteTodo,n=e.handleChangeStatus,o=e.handleMarkAll;return l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.length>0&&t.every((function(e){return e.completed})),onChange:o}),t.length>0&&l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(f,{todo:e,handleChangeStatus:n,key:e.id,deleteTodo:a})}))))}}]),a}(l.a.PureComponent),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={title:"",id:0,completed:!1},e.handleSetTitle=function(t){var a=t.target;e.setState({title:a.value.trimLeft().replace(/[^a-z\s]/gi,"")})},e.resetForm=function(){e.setState((function(e){return{title:"",id:e.id+1,completed:!1}}))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,l=a.id,o=a.completed,r=e.props.addNewTodo;n.length?(r({title:n,id:l+1,completed:o}),e.resetForm()):e.setState({title:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.title;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleSetTitle,value:e}))}}]),a}(l.a.Component),g=function(e){var t=e.typeOfFilter,a=e.handleChangeFilter;return l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:h()({selected:"All"===t}),onClick:function(){return a("All")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:h()({selected:"Active"===t}),onClick:function(){return a("Active")}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:h()({selected:"Completed"===t}),onClick:function(){return a("Completed")}},"Completed")))},E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={todos:[],typeOfFilter:"All"},e.addNewTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e.handleMarkAll=function(){e.state.todos.every((function(e){return!0===e.completed}))?e.setState((function(e){return{todos:e.todos.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{completed:!1})}))}})):e.setState((function(e){return{todos:e.todos.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{completed:!0})}))}}))},e.handleChangeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.deleteTodo=function(t){var a=t.target,n=e.state.todos.findIndex((function(e){return e.id===+a.id}));e.setState((function(e){var t=Object(i.a)(e.todos);return t.splice(n,1),{todos:Object(i.a)(t)}}))},e.handleChangeFilter=function(t){e.setState({typeOfFilter:t})},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.typeOfFilter,n=t.filter((function(e){return!1===e.completed})).length,o=Object(i.a)(t);return"All"===a&&(o=Object(i.a)(t)),"Completed"===a&&(o=t.filter((function(e){return e.completed}))),"Active"===a&&(o=t.filter((function(e){return!e.completed}))),l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos")),l.a.createElement(v,{addNewTodo:this.addNewTodo}),l.a.createElement(b,{todos:o,handleChangeStatus:this.handleChangeStatus,deleteTodo:this.deleteTodo,handleMarkAll:this.handleMarkAll}),t.length>0&&l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},n," ","items left"),l.a.createElement(g,{typeOfFilter:a,handleChangeFilter:this.handleChangeFilter}),l.a.createElement("button",{type:"button",onClick:this.clearCompleted,className:"clear-completed"},"Clear completed")))}}]),a}(l.a.Component);r.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0acfeb36.chunk.js.map