(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),o=n(5),l=n.n(o),i=n(6),u=n(1),d=n(2),p=n(4),m=n(3),f=(n(17),n(18),"https://mate-api.herokuapp.com/");var h=n(9),v=n.n(h),E=(n(19),n(10)),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={select:""},e.filterTitle=function(t){var n=t.target.value,a=e.props.todos.filter((function(e){return!!e.title&&e.title.includes(n)}));e.props.newState(a)},e.handleSelection=function(t){var n=t.target,a=n.name,r=n.value,c=e.props.todos;switch(r){case"completed":c=c.filter((function(e){return e.completed}));break;case"active":c=c.filter((function(e){return!e.completed}));break;default:case"all":}e.props.newState(c),e.setState(Object(E.a)({},a,r))},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Filter",onChange:this.filterTitle})),r.a.createElement("select",{name:"select",value:this.state.select,onChange:this.handleSelection},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed")))}}]),n}(r.a.Component),_=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:e.props.todos},e.newState=function(t){e.setState({todos:t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.selectUser,t=this.state.todos;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement(b,{todos:this.props.todos,newState:this.newState}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(t){return r.a.createElement("li",{key:t.id,className:v()("TodoList__item",{"TodoList__item--unchecked":!t.completed},{"TodoList__item--checked":t.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){e(t.userId)}},"User\xa0",t.userId))})))))}}]),n}(r.a.Component),y=(n(20),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUser:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,t=this.props.userId,fetch("".concat(f,"users/").concat(t)).then((function(e){return e.json().then((function(e){return e.data}))}));case 3:e.t1=e.sent,e.t2={selectedUser:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}var t}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.selectedUser,t=this.props.clearUser;return r.a.createElement("div",{className:"CurrentUser"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:"," ",e.id)),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",onClick:t},"Clear")):r.a.createElement("p",null,"Loading..."))}}]),n}(r.a.Component)),U=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"todos")).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({todos:t.data.filter((function(e){return e.title}))});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},t.length>0&&r.a.createElement(_,{selectUser:this.selectUser,todos:t})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(y,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(U,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f0fcbde7.chunk.js.map