(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{216:function(t,e,n){},363:function(t,e,n){"use strict";n.r(e);n(361);var c=n(191),s=(n(362),n(192)),i=(n(208),n(126)),r=n(130),o=n(131),a=n(135),l=n(134),u=(n(364),n(133)),j=n(0),d=n.n(j),h=n(14),b=n.n(h),m=(n(216),n(38)),f=n.n(m),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),i(t),r(t)}))},x=(n(217),n(26)),p=n(15);u.a.RangePicker;function v(t){return Object(p.jsxs)(x.a,{onClick:t.onClick,type:"primary",children:["+",t.value,"s"]})}function k(t){return Object(p.jsxs)(x.a,{onClick:t.onClick,children:[t.value,"s"]})}function C(t){return Object(p.jsxs)(x.a,{onClick:t.onClick,type:"primary",children:["+",t.value,"min"]})}function g(t){return Object(p.jsxs)(x.a,{onClick:t.onClick,type:"dashed",children:[t.value,"min"]})}var M=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"renderSeconds",value:function(t){var e=this;return t>=0?Object(p.jsx)(v,{value:t,onClick:function(){return e.props.onClick(t)}}):Object(p.jsx)(k,{value:t,onClick:function(){return e.props.onClick(t)}})}},{key:"render",value:function(){return this.renderSeconds(this.props.time)}}]),n}(d.a.Component),y=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"renderMinutes",value:function(t){var e=this;return t>=0?Object(p.jsx)(C,{value:t,onClick:function(){return e.props.onClick(60*t)}}):Object(p.jsx)(g,{value:t,onClick:function(){return e.props.onClick(60*t)}})}},{key:"render",value:function(){return this.renderMinutes(this.props.time)}}]),n}(d.a.Component),S=[{title:"todo",dataIndex:"desc",key:"desc"},{title:"\u6b7b\u7ebf",dataIndex:"ddl",render:function(t,e){var n=e.ddl;return[Object(p.jsx)(u.a,{value:f()(n),format:"MM-DD-HH:mm",disabled:!0,children:" "})]}}],F=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).start=function(){console.log("start!"),console.log(c.state.timeSum);var t=c.state.timeSum;if(t>0&&0==c.state.counting){var e=f()().format();f()().add(t,"seconds");console.log(f()().toString()),console.log(e);var n=f.a.duration(t,"seconds");n.get("hours"),n.get("minutes"),n.get("seconds");c.setState({counting:!0,cur:t})}},c.resume=function(){var t=c.state.timeSum,e=Math.floor(t/3600),n=Math.floor(t/60),s=t%60;c.setState({cached:!1,hours:e,mins:n,ss:s})},c.reset=function(){if(!0===c.state.counting){var t=c.state.timeSum,e=Math.floor(t/3600),n=Math.floor(t/60),s=t%60;c.setState({cached:!0,counting:!1,cur:0,hours:e,mins:n,ss:s})}else if(!1===c.state.counting){c.setState({timeSum:0,cur:0,cached:!1,hours:0,mins:0,ss:0})}},c.stop=function(){var t=c.state.timeSum,e=Math.floor(t/3600),n=Math.floor(t/60),s=t%60;c.setState({cached:!0,counting:!1,old_hours:e,old_mins:n,old_ss:s})},c.state={timeSum:0,cur:0,counting:!1,hours:0,mins:0,ss:0,old_hours:0,old_mins:0,old_ss:0,start:0,end:0,cached:!1,dataSource:[{ddl:"2021-05-17T17:46:56+08:00",desc:"\u8fd9\u662f\u5199\u6b7b\u7684\u5b9e\u4f8b\u4e00"},{ddl:"Mon May 17 2021 17:46:56 GMT+0800",desc:"Mon May 17 2021 17:46:56 GMT+0800"},{ddl:"2013-02-08 09:30:26",desc:"moment().format()"}]},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"tick",value:function(){if(!0===this.state.counting){var t=this.state.cur;if(t>0){t-=1;var e=Math.floor(t/60),n=t%60;this.setState({cur:t,mins:e,ss:n})}else if(0==t&&1==this.state.counting){var c=this.state.timeSum,s=Math.floor(c/3600),r=Math.floor(c/60),o=c%60;window.Notification&&"denied"!==Notification.permission?Notification.requestPermission((function(t){new Notification("\u65f6\u95f4\u5230\uff01",{body:r+"\u5206"+o+"\u79d2\u8ba1\u65f6\u7ed3\u675f"})})):(x.d.fail("Toast\uff01\u8be5\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u901a\u77e5!"+r+"\u5206"+o+"\u79d2\u8ba1\u65f6\u65f6\u95f4\u5230",2),i.b.error("Error\uff01\u8be5\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u901a\u77e5!"+r+"\u5206"+o+"\u79d2\u8ba1\u65f6\u65f6\u95f4\u5230"),console.alert("Alert\uff01\u8be5\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u901a\u77e5!"+r+"\u5206"+o+"\u79d2\u8ba1\u65f6\u65f6\u95f4\u5230")),this.setState({counting:!1,cached:!0,old_hours:s,old_mins:r,old_ss:o})}}}},{key:"handleClick",value:function(t){var e=this.state.timeSum;e=e+t>=0?e+t:0;var n=Math.floor(e/3600),c=Math.floor(e/60),s=e%60;0==this.state.counting&&0==this.state.cached&&(this.setState({timeSum:e,hours:n,mins:c,ss:s}),console.log(typeof this.state.timeSum,this.state.timeSum),console.log(this.state.mins,this.state.ss))}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(s.a,{className:"site-page-header",onBack:function(){return null},title:"\u5e9f\u5b85\u517b\u809d\u5b9d",subTitle:"\u618b\u73a9\u4e86\uff0c\u5b66\u4e60\u53bb\u5427"}),Object(p.jsxs)(x.f,{size:"lg",children:[Object(p.jsx)(x.e,{}),Object(p.jsxs)(x.b,{children:[Object(p.jsx)(x.b.Header,{title:Object(p.jsx)("span",{children:"\u8fde\u809d\u8ba1\u65f6\u5668"}),thumb:Object(p.jsxs)("svg",{t:"1621233122743",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2395",width:"30",height:"30",children:[Object(p.jsx)("path",{d:"M472.32 562.3808m-393.4208 0a393.4208 393.4208 0 1 0 786.8416 0 393.4208 393.4208 0 1 0-786.8416 0Z",fill:"#80B7F9","p-id":"2396"}),Object(p.jsx)("path",{d:"M953.9072 499.8144c-18.6368-226.9696-199.6288-407.9616-426.5984-426.5984-20.9408-1.7408-38.7584 15.104-38.7072 36.096 0.2048 125.184 1.4336 256.1024 1.5872 393.1136 0.0512 19.9168 16.1792 36.096 36.096 36.096h391.5776c20.992 0 37.7344-17.8176 36.0448-38.7072z",fill:"#80B7F9","p-id":"2397"}),Object(p.jsx)("path",{d:"M488.7552 169.3696c0.4096 106.8544 1.28 217.7536 1.4336 333.056 0.0512 19.9168 16.1792 36.096 36.096 36.096h338.6368c-11.9808-200.7552-174.4384-360.8576-376.1664-369.152z",fill:"#3E8BF8","p-id":"2398"})]})}),Object(p.jsxs)(x.b.Body,{children:[Object(p.jsxs)(x.c,{justify:"center",children:[Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(M,{time:10,onClick:function(e){return t.handleClick(e)}})}),Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(M,{time:15,onClick:function(e){return t.handleClick(e)}})})]}),Object(p.jsxs)(x.c,{justify:"center",children:[Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(M,{time:-10,onClick:function(e){return t.handleClick(e)}})}),Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(M,{time:-15,onClick:function(e){return t.handleClick(e)}})})]}),Object(p.jsx)(x.e,{}),Object(p.jsxs)(x.c,{justify:"center",children:[Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(y,{time:1,onClick:function(e){return t.handleClick(e)}})}),Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(y,{time:5,onClick:function(e){return t.handleClick(e)}})}),Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(y,{time:10,onClick:function(e){return t.handleClick(e)}})})]}),Object(p.jsxs)(x.c,{justify:"center",children:[Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(y,{time:-1,onClick:function(e){return t.handleClick(e)}})}),Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(y,{time:-5,onClick:function(e){return t.handleClick(e)}})}),Object(p.jsx)(x.c.Item,{children:Object(p.jsx)(y,{time:-10,onClick:function(e){return t.handleClick(e)}})})]}),Object(p.jsx)(x.e,{}),!0===this.state.counting&&Object(p.jsxs)("div",{children:[Object(p.jsxs)(x.a,{disabled:!0,children:["\u5012\u8ba1\u65f6",this.state.mins,"'",this.state.ss,"''"]}),Object(p.jsx)(x.a,{onClick:function(){return t.stop()},children:"\u505c\u6b62\u8ba1\u65f6"})]}),!1===this.state.counting&&!1===this.state.cached&&Object(p.jsxs)("div",{children:[Object(p.jsxs)(x.a,{onClick:function(){return t.start()},type:"primary",children:[this.state.mins,"'",this.state.ss,"''\u5f00\u59cb\u8ba1\u65f6"]}),Object(p.jsx)(x.a,{onClick:function(){return t.reset()},children:"\u91cd\u7f6e"})]}),!1===this.state.counting&&!0===this.state.cached&&Object(p.jsxs)("div",{children:[Object(p.jsxs)(x.a,{onClick:function(){return t.resume()},type:"primary",children:["\u6fc0\u6d3b\u4e0a\u6b21\u8ba1\u65f6\u65f6\u957f ",this.state.old_mins,"'",this.state.old_ss,"''"]}),Object(p.jsx)(x.a,{onClick:function(){return t.reset()},children:"\u91cd\u7f6e"})]})]})]}),Object(p.jsx)(x.e,{}),Object(p.jsxs)(x.b,{children:[Object(p.jsx)(x.b.Header,{title:Object(p.jsx)("span",{children:"todo\u5012\u8ba1\u65f6"}),thumb:Object(p.jsxs)("svg",{t:"1621233024225",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1829",width:"30",height:"30",children:[Object(p.jsx)("path",{d:"M713.3184 905.2672h-482.816c-73.5232 0-133.12-59.5968-133.12-133.12V267.4176c0-73.5232 59.5968-133.12 133.12-133.12h503.296c73.5232 0 133.12 59.5968 133.12 133.12v484.3008c0 84.7872-68.8128 153.5488-153.6 153.5488z",fill:"#80B7F9","p-id":"1830"}),Object(p.jsx)("path",{d:"M695.296 729.4464m-234.752 0a234.752 234.752 0 1 0 469.504 0 234.752 234.752 0 1 0-469.504 0Z",fill:"#80B7F9","p-id":"1831"}),Object(p.jsx)("path",{d:"M866.9184 757.6576v-188.5696c-42.8544-45.824-103.8336-74.5472-171.52-74.5472-129.6896 0-234.752 105.1136-234.752 234.752 0 70.0928 30.7712 132.9664 79.4624 175.9744h179.1488c81.5104 0 147.6608-66.0992 147.6608-147.6096z",fill:"#3E8BF8","p-id":"1832"}),Object(p.jsx)("path",{d:"M308.5824 230.5536c-21.76 0-39.3728-17.6128-39.3728-39.3728V97.6896c0-21.76 17.6128-39.3728 39.3728-39.3728s39.3728 17.6128 39.3728 39.3728v93.4912c0 21.7088-17.664 39.3728-39.3728 39.3728zM659.3024 230.5536c-21.76 0-39.3728-17.6128-39.3728-39.3728V97.6896c0-21.76 17.6128-39.3728 39.3728-39.3728s39.3728 17.6128 39.3728 39.3728v93.4912c0 21.7088-17.664 39.3728-39.3728 39.3728z",fill:"#80B7F9","p-id":"1833"}),Object(p.jsx)("path",{d:"M269.2096 134.2976v56.8832c0 21.76 17.6128 39.3728 39.3728 39.3728s39.3728-17.6128 39.3728-39.3728V134.2976H269.2096zM619.9296 134.2976v56.8832c0 21.76 17.6128 39.3728 39.3728 39.3728s39.3728-17.6128 39.3728-39.3728V134.2976h-78.7456z",fill:"#3E8BF8","p-id":"1834"}),Object(p.jsx)("path",{d:"M757.0944 371.2512H207.104c-22.6304 0-40.96-18.3296-40.96-40.96s18.3296-40.96 40.96-40.96h549.9904c22.6304 0 40.96 18.3296 40.96 40.96s-18.3296 40.96-40.96 40.96zM273.5104 559.7184H207.104c-22.6304 0-40.96-18.3296-40.96-40.96s18.3296-40.96 40.96-40.96h66.4064c22.6304 0 40.96 18.3296 40.96 40.96s-18.3296 40.96-40.96 40.96zM463.7184 559.7184H397.312c-22.6304 0-40.96-18.3296-40.96-40.96s18.3296-40.96 40.96-40.96h66.4064c22.6304 0 40.96 18.3296 40.96 40.96s-18.3808 40.96-40.96 40.96zM666.4704 838.4512c-11.1616 0-21.8112-4.5568-29.5424-12.5952l-65.4848-68.1984a40.93952 40.93952 0 0 1 1.1776-57.9072 40.93952 40.93952 0 0 1 57.9072 1.1776l35.0208 36.5056 93.6448-103.4752a40.96 40.96 0 0 1 57.856-2.8672 40.91904 40.91904 0 0 1 2.8672 57.856l-123.136 136.0384a40.96 40.96 0 0 1-29.7472 13.4656h-0.5632z",fill:"#FFFFFF","p-id":"1835"})]})}),Object(p.jsx)(x.b.Body,{children:Object(p.jsx)(x.c,{justify:"center",children:Object(p.jsx)(c.a,{dataSource:this.state.dataSource,columns:S})})})]})]}),Object(p.jsx)(u.a,{value:f()("2013-02-08 09:30:26"),format:"MM-DD-HH:mm",disabled:!0})]})}}]),n}(d.a.Component);b.a.render(Object(p.jsx)(F,{}),document.getElementById("root")),O()}},[[363,1,2]]]);
//# sourceMappingURL=main.86605b9b.chunk.js.map