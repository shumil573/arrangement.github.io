(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);n(104);var c=n(100),i=(n(106),n(74)),r=n(50),s=n(51),a=n(54),l=n(53),o=n(0),u=n.n(o),j=n(9),h=n.n(j),b=(n(111),n(112),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))}),d=n(11),O=n(10);function f(e){return Object(O.jsxs)(d.a,{onClick:e.onClick,type:"primary",children:["+",e.value,"s"]})}function m(e){return Object(O.jsxs)(d.a,{onClick:e.onClick,children:[e.value,"s"]})}function x(e){return Object(O.jsxs)(d.a,{onClick:e.onClick,type:"primary",children:["+",e.value,"min"]})}function p(e){return Object(O.jsxs)(d.a,{onClick:e.onClick,children:[e.value,"min"]})}var k=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderSeconds",value:function(e){var t=this;return e>=0?Object(O.jsx)(f,{value:e,onClick:function(){return t.props.onClick(e)}}):Object(O.jsx)(m,{value:e,onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return this.renderSeconds(this.props.time)}}]),n}(u.a.Component),C=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderMinutes",value:function(e){var t=this;return e>=0?Object(O.jsx)(x,{value:e,onClick:function(){return t.props.onClick(60*e)}}):Object(O.jsx)(p,{value:e,onClick:function(){return t.props.onClick(60*e)}})}},{key:"render",value:function(){return this.renderMinutes(this.props.time)}}]),n}(u.a.Component),v=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).start=function(){console.log("start!"),console.log(c.state.timeSum);var e=c.state.timeSum;if(e>0){c.setState({counting:!0,cur:e})}},c.resume=function(){var e=c.state.timeSum,t=Math.floor(e/60),n=e%60;c.setState({cached:!1,higher:t,lower:n})},c.reset=function(){if(!0===c.state.counting){var e=c.state.timeSum,t=Math.floor(e/60),n=e%60;c.setState({cached:!0,counting:!1,cur:0,higher:t,lower:n})}else if(!1===c.state.counting){c.setState({timeSum:0,cur:0,cached:!1,higher:0,lower:0})}},c.state={date:new Date,ClickTime:new Date,timeSum:0,cur:0,counting:!1,higher:0,lower:0,cached:!1},c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){if(!0===this.state.counting){var e=this.state.cur;if(e>0){e-=1;var t=Math.floor(e/60),n=e%60;this.setState({cur:e,higher:t,lower:n})}else this.setState({counting:!1,cached:!0})}}},{key:"handleClick",value:function(e){var t=this.state.timeSum;t=t+e>=0?t+e:0;var n=Math.floor(t/60),c=t%60;this.setState({timeSum:t,higher:n,lower:c}),console.log(typeof this.state.timeSum,this.state.timeSum),console.log(this.state.higher,this.state.lower)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(c.a,{children:[Object(O.jsx)(i.a,{children:Object(O.jsx)(k,{time:10,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(i.a,{children:Object(O.jsx)(k,{time:15,onClick:function(t){return e.handleClick(t)}})})]}),Object(O.jsxs)(d.b,{children:[Object(O.jsx)(d.b.Item,{children:Object(O.jsx)(k,{time:10,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(d.b.Item,{children:Object(O.jsx)(k,{time:15,onClick:function(t){return e.handleClick(t)}})})]}),Object(O.jsx)(d.c,{}),Object(O.jsxs)(d.b,{justify:"center",children:[Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(k,{time:-10,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(k,{time:-15,onClick:function(t){return e.handleClick(t)}})})]}),Object(O.jsx)(d.c,{}),Object(O.jsxs)(d.b,{justify:"center",style:{marginTop:"16px"},children:[Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(C,{time:1,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(C,{time:5,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(C,{time:10,onClick:function(t){return e.handleClick(t)}})})]}),Object(O.jsx)(d.c,{}),Object(O.jsxs)(d.b,{justify:"center",children:[Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(C,{time:-1,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(C,{time:-5,onClick:function(t){return e.handleClick(t)}})}),Object(O.jsx)(d.b.Item,{span:"4",children:Object(O.jsx)(C,{time:-10,onClick:function(t){return e.handleClick(t)}})})]}),!0===this.state.counting&&Object(O.jsxs)("div",{children:[Object(O.jsx)(d.c,{}),Object(O.jsx)(d.b,{justify:"center",style:{marginTop:"16px"},children:Object(O.jsxs)(d.a,{type:"default",children:["\u5012\u8ba1\u65f6",this.state.higher,"'",this.state.lower,"''"]})}),Object(O.jsx)(d.b,{justify:"center",children:Object(O.jsx)(d.a,{onClick:function(){return e.reset()},type:"dashed",children:"\u505c\u6b62\u8ba1\u65f6"})})]}),!1===this.state.counting&&!1===this.state.cached&&Object(O.jsxs)("div",{children:[Object(O.jsx)(d.c,{}),Object(O.jsx)(d.b,{justify:"center",style:{marginTop:"16px"},children:Object(O.jsxs)(d.a,{onClick:function(){return e.start()},type:"primary",children:[this.state.higher,"'",this.state.lower,"''\u5f00\u59cb\u8ba1\u65f6"]})}),Object(O.jsx)(d.b,{justify:"center",children:Object(O.jsx)(d.a,{onClick:function(){return e.reset()},type:"dashed",children:"\u91cd\u7f6e"})})]}),!1===this.state.counting&&!0===this.state.cached&&Object(O.jsxs)("div",{children:[Object(O.jsx)(d.c,{}),Object(O.jsx)(d.b,{justify:"center",style:{marginTop:"16px"},children:Object(O.jsxs)(d.a,{onClick:function(){return e.resume()},type:"primary",children:["\u6fc0\u6d3b\u4e0a\u6b21\u8ba1\u65f6\u65f6\u957f ",this.state.higher,"'",this.state.lower,"''"]})}),Object(O.jsx)(d.b,{justify:"center",children:Object(O.jsx)(d.a,{onClick:function(){return e.reset()},type:"dashed",children:"\u91cd\u7f6e"})})]})]})}}]),n}(u.a.Component);h.a.render(Object(O.jsx)(v,{}),document.getElementById("root")),b()}},[[185,1,2]]]);
//# sourceMappingURL=main.14ffc1de.chunk.js.map