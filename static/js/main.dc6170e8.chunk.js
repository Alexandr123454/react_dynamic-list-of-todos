(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(21)},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(6),s=n.n(a),c=n(4),i=n(1),u=n.n(i),l=n(10),d=n(3),m=n(7),p=n(8),f=n(11),b=n(9),y=n(2),h=n(12),v=function(t){var e=t.sortByName,n=t.sortByTitle,o=t.sortByCompleted;return r.a.createElement("div",{className:"button_list"},r.a.createElement("button",{type:"button",onClick:function(){e("name")},className:"sort_button"},"Sort By Name"),r.a.createElement("button",{type:"button",onClick:function(){n("title")},className:"sort_button"},"Sort By Title"),r.a.createElement("button",{type:"button",onClick:function(){o("completed")},className:"sort_button"},"Sort By Completed"))},B=function(t){var e=t.usersItem;return r.a.createElement("div",{className:"user-item"},r.a.createElement("div",null,"Name:",r.a.createElement("b",null,e.user.name)))},j=function(t){var e=t.todoItem;return r.a.createElement("li",{className:"todo-item"},r.a.createElement("div",null,e.title),r.a.createElement("input",{className:"checkbox",type:"checkbox",defaultChecked:e.completed}))},E=function(t){var e=t.todosItems;return r.a.createElement("ul",{className:"list"},e.map(function(t){return r.a.createElement("div",{key:t.id,className:"todo_list"},r.a.createElement(B,{usersItem:t}),r.a.createElement(j,{todoItem:t}))}))},N=function(){var t=Object(d.a)(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/todos",t.next=3,fetch("https://jsonplaceholder.typicode.com/todos");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(d.a)(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/users",t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),C=(n(20),function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(f.a)(this,Object(b.a)(e).call(this,t))).LoadData=Object(d.a)(u.a.mark(function t(){var e,o,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),t.next=3,k();case 3:return e=t.sent,t.next=6,N();case 6:o=t.sent,r=o.map(function(t){return Object(l.a)({},t,{user:e.find(function(e){return e.id===t.userId})})}),console.log(r),n.setState({todos:r,sortedTodos:r,isLoaded:!0,isLoading:!1});case 10:case"end":return t.stop()}},t)})),n.state={todos:[],sortedTodos:[],isLoaded:!1,isLoading:!1,direction:1},n.sortByName=n.sortByName.bind(Object(y.a)(n)),n.sortByTitle=n.sortByTitle.bind(Object(y.a)(n)),n.sortByCompleted=n.sortByCompleted.bind(Object(y.a)(n)),n}return Object(h.a)(e,t),Object(p.a)(e,[{key:"sortByName",value:function(t){this.setState(function(e){return{direction:1===e.direction?-1:1,sortedTodos:Object(c.a)(e.todos).sort(function(n,o){return e.direction*n.user[t].localeCompare(o.user[t])})}})}},{key:"sortByTitle",value:function(t){this.setState(function(e){return{direction:1===e.direction?-1:1,sortedTodos:Object(c.a)(e.todos).sort(function(n,o){return e.direction*n[t].localeCompare(o[t])})}})}},{key:"sortByCompleted",value:function(t){this.setState(function(e){return{direction:1===e.direction?-1:1,sortedTodos:Object(c.a)(e.todos).sort(function(n,o){return e.direction*(n[t]-o[t])})}})}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement("div",null,r.a.createElement(v,{sortByName:this.sortByName,sortByTitle:this.sortByTitle,sortByCompleted:this.sortByCompleted}),r.a.createElement(E,{todosItems:this.state.sortedTodos})):r.a.createElement("div",{className:"button_load"},r.a.createElement("button",{className:"button",onClick:this.LoadData,type:"button"},this.state.isLoading?"Loading...":"Load"))}}]),e}(r.a.Component));s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.dc6170e8.chunk.js.map