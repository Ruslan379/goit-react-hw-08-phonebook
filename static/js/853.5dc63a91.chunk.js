"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{4853:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(2791),s=n(9434),a=n(8427),i="Task_wrapper__zvx3s",u="Task_text__IwwM2",c="Task_button__dYLbw",o=n(184),l=function(t){var e=t.id,n=t.text,r=(0,s.I0)();return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("p",{className:u,children:n}),(0,o.jsx)("button",{type:"button",className:c,onClick:function(){return r((0,a._5)(e))},children:"Delete"})]})},_=function(t){return t.tasks.loading},d=function(t){return t.tasks.items},f="TaskList_list__Q1M-x",x=function(){var t=(0,s.v9)(d);return(0,o.jsx)("ul",{className:f,children:t.map((function(t){var e=t.id,n=t.text;return(0,o.jsx)("li",{children:(0,o.jsx)(l,{id:e,text:n})},e)}))})},m="TaskEditor_form__NXWha",k="TaskEditor_input__WXNoz",v="TaskEditor_button__qGfcX",h=function(){var t=(0,s.I0)();return(0,o.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,r=n.elements.text.value;if(""!==r)return t((0,a.gI)(r)),void n.reset();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},children:[(0,o.jsx)("input",{name:"text",className:k}),(0,o.jsx)("button",{type:"submit",className:v,children:"Add todo"})]})};function p(){var t=(0,s.I0)(),e=(0,s.v9)(_);return(0,r.useEffect)((function(){t((0,a.Jv)())}),[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsx)("div",{children:e&&"Request in progress..."}),(0,o.jsx)(x,{})]})}}}]);
//# sourceMappingURL=853.5dc63a91.chunk.js.map