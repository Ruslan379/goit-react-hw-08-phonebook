/*! For license information please see 853.8d036e85.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{4853:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var n=s(2791),a=s(9434),r=s(8427),i="Task_ContactListItem__WYtbi",o="Task_ContactListText__s+bVg",c="Task_ContactListNumber__lqI8z",l="Task_ContactListBtn__ydimP",m=s(184),u=function(e){var t=e.id,s=e.name,n=e.number,u=(0,a.I0)();return(0,m.jsxs)("li",{className:i,children:[(0,m.jsxs)("p",{className:o,children:[s,":",(0,m.jsxs)("span",{className:c,children:[" ",n]})]}),(0,m.jsx)("button",{type:"button",className:l,onClick:function(){var e="RoseEDIT",s="000-00-00";console.log("id:",t),console.log("newName:",e),console.log("newNumber:",s),u((0,r.mP)({id:t,newName:e,newNumber:s}))},children:"Edit"}),(0,m.jsx)("button",{type:"button",className:l,onClick:function(){return u((0,r._5)(t))},children:"Delete"})]})},d=function(e){return e.tasks.isLoading},_=function(e){return e.tasks.items},b="TaskList_ContactList__ZVQgm",p=function(){var e=(0,a.v9)(_);return console.log("TaskList==>tasks:",e),(0,m.jsx)("ul",{className:b,children:e.map((function(e){var t=e.id,s=e.name,n=e.number;return(0,m.jsx)(u,{id:t,name:s,number:n},t)}))})},h="TaskEditor_Form__wa-SE",x="TaskEditor_FormLabel__4glZA",k="TaskEditor_FormBtn__tHm6t",f="TaskEditor_FormInput__+5PdH",j=function(){var e=(0,a.I0)();return(0,m.jsxs)("form",{className:h,onSubmit:function(t){t.preventDefault();var s=t.currentTarget,n=s.elements.name.value,a=s.elements.number.value;if(""!==n&&""!==a)return e((0,r.gI)({name:n,number:a})),void s.reset();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},children:[(0,m.jsxs)("label",{className:x,children:["Name",(0,m.jsx)("br",{}),(0,m.jsx)("input",{className:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsx)("br",{}),(0,m.jsxs)("label",{className:x,children:["Number",(0,m.jsx)("br",{}),(0,m.jsx)("input",{className:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{className:k,type:"submit",children:"Add contact"})]})};function N(){var e=(0,a.I0)(),t=(0,a.v9)(d);return(0,n.useEffect)((function(){e((0,r.Jv)())}),[e]),console.log("Tasks==>isLoading:",t),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{}),(0,m.jsx)("div",{children:t&&"Request in progress..."}),!t&&(0,m.jsx)(p,{})]})}}}]);
//# sourceMappingURL=853.8d036e85.chunk.js.map