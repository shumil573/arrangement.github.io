(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{50:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);n(41);var i=n(9),c=(n(43),n(10)),r=n(27),s=n(28),a=n(30),o=n(29),u=(n(44),n(8)),l=n(0),h=n.n(l),j=n(23),d=n.n(j),f=(n(50),n(51),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))}),p=n(2);function b(e){return Object(p.jsxs)(u.a,{onClick:e.onClick,type:"primary",children:["+",e.value,"s"]})}function O(e){return Object(p.jsxs)(u.a,{onClick:e.onClick,type:"dashed",children:[e.value,"s"]})}function m(e){return Object(p.jsxs)(u.a,{onClick:e.onClick,type:"primary",children:["+",e.value,"min"]})}function k(e){return Object(p.jsxs)(u.a,{onClick:e.onClick,type:"dashed",children:[e.value,"min"]})}var x=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderSeconds",value:function(e){var t=this;return e>=0?Object(p.jsx)(b,{value:e,onClick:function(){return t.props.onClick(e)}}):Object(p.jsx)(O,{value:e,onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return this.renderSeconds(this.props.time)}}]),n}(h.a.Component),C=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderMinutes",value:function(e){var t=this;return e>=0?Object(p.jsx)(m,{value:e,onClick:function(){return t.props.onClick(60*e)}}):Object(p.jsx)(k,{value:e,onClick:function(){return t.props.onClick(60*e)}})}},{key:"render",value:function(){return this.renderMinutes(this.props.time)}}]),n}(h.a.Component),y=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).start=function(){console.log("start!"),console.log(i.state.timeSum);var e=i.state.timeSum;if(e>0){i.setState({counting:!0,cur:e})}},i.resume=function(){var e=i.state.timeSum,t=Math.floor(e/60),n=e%60;i.setState({cached:!1,higher:t,lower:n})},i.reset=function(){if(!0===i.state.counting){var e=i.state.timeSum,t=Math.floor(e/60),n=e%60;i.setState({cached:!0,counting:!1,cur:0,higher:t,lower:n})}else if(!1===i.state.counting){i.setState({timeSum:0,cur:0,cached:!1,higher:0,lower:0})}},i.state={date:new Date,timeSum:0,cur:0,counting:!1,higher:0,lower:0,cached:!1},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){if(!0===this.state.counting){var e=this.state.cur;if(e>0){e-=1;var t=Math.floor(e/60),n=e%60;this.setState({cur:e,higher:t,lower:n})}else this.setState({counting:!1,cached:!0})}}},{key:"handleClick",value:function(e){var t=this.state.timeSum;t=t+e>=0?t+e:0;var n=Math.floor(t/60),i=t%60;this.setState({timeSum:t,higher:n,lower:i}),console.log(typeof this.state.timeSum,this.state.timeSum),console.log(this.state.higher,this.state.lower)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(i.a,{justify:"center",style:{marginTop:"16px"},children:[Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(x,{time:10,onClick:function(t){return e.handleClick(t)}})}),Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(x,{time:15,onClick:function(t){return e.handleClick(t)}})})]}),Object(p.jsxs)(i.a,{justify:"center",children:[Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(x,{time:-10,onClick:function(t){return e.handleClick(t)}})}),Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(x,{time:-15,onClick:function(t){return e.handleClick(t)}})})]}),Object(p.jsxs)(i.a,{justify:"center",style:{marginTop:"16px"},children:[Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(C,{time:1,onClick:function(t){return e.handleClick(t)}})}),Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(C,{time:5,onClick:function(t){return e.handleClick(t)}})}),Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(C,{time:10,onClick:function(t){return e.handleClick(t)}})})]}),Object(p.jsxs)(i.a,{justify:"center",children:[Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(C,{time:-1,onClick:function(t){return e.handleClick(t)}})}),Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(C,{time:-5,onClick:function(t){return e.handleClick(t)}})}),Object(p.jsx)(c.a,{span:"4",children:Object(p.jsx)(C,{time:-10,onClick:function(t){return e.handleClick(t)}})})]}),!0===this.state.counting&&Object(p.jsxs)("div",{children:[Object(p.jsx)(i.a,{justify:"center",style:{marginTop:"16px"},children:Object(p.jsxs)(u.a,{type:"default",children:["\u5012\u8ba1\u65f6",this.state.higher,"'",this.state.lower,"''"]})}),Object(p.jsx)(i.a,{justify:"center",children:Object(p.jsx)(u.a,{onClick:function(){return e.reset()},type:"dashed",children:"\u505c\u6b62\u8ba1\u65f6"})})]}),!1===this.state.counting&&!1===this.state.cached&&Object(p.jsxs)("div",{children:[Object(p.jsx)(i.a,{justify:"center",style:{marginTop:"16px"},children:Object(p.jsxs)(u.a,{onClick:function(){return e.start()},type:"primary",children:[this.state.higher,"'",this.state.lower,"''\u5f00\u59cb\u8ba1\u65f6"]})}),Object(p.jsx)(i.a,{justify:"center",children:Object(p.jsx)(u.a,{onClick:function(){return e.reset()},type:"dashed",children:"\u91cd\u7f6e"})})]}),!1===this.state.counting&&!0===this.state.cached&&Object(p.jsxs)("div",{children:[Object(p.jsx)(i.a,{justify:"center",style:{marginTop:"16px"},children:Object(p.jsxs)(u.a,{onClick:function(){return e.resume()},type:"primary",children:["\u6fc0\u6d3b\u4e0a\u6b21\u8ba1\u65f6\u65f6\u957f ",this.state.higher,"'",this.state.lower,"''"]})}),Object(p.jsx)(i.a,{justify:"center",children:Object(p.jsx)(u.a,{onClick:function(){return e.reset()},type:"dashed",children:"\u91cd\u7f6e"})})]})]})}}]),n}(h.a.Component);d.a.render(Object(p.jsx)(y,{}),document.getElementById("root")),f()}},[[55,1,2]]]);
//# sourceMappingURL=main.b474b1ce.chunk.js.map