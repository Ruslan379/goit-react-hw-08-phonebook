/*! For license information please see 248.ec21f3e2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{4248:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var s,a=n(2791),r=n(9434),i=n(8427),l=function(e){return e.tasks.isLoading},o=function(e){return e.tasks.items},c=n(168),u=n(6794),m=n(2554),d=n(5899),_=(0,m.F4)(s||(s=(0,c.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),b=(0,u.Z)(d.frZ,{target:"eebnqfe0"})("animation:",_," 0.85s linear infinite;");b.defaultProps={size:40};var f="Task_ContactListItem__WYtbi",x="Task_ContactListText__s+bVg",h="Task_ContactListNumber__lqI8z",j="Task_ContactListEditBtn__yxVxT",p="Task_ContactListDeleteBtn__Vmo4l",v=n(184),g=function(e){var t=e.id,n=e.name,s=e.number,a=(0,r.I0)(),o=(0,r.v9)(l);console.log("Tasks==>isLoading:",o);return(0,v.jsxs)("li",{className:f,children:[(0,v.jsxs)("p",{className:x,children:[n,":",(0,v.jsxs)("span",{className:h,children:[" ",s]})]}),(0,v.jsx)("button",{type:"button",className:j,onClick:function(){var e="RoseEDIT",n="000-00-00";console.log("id:",t),console.log("newName:",e),console.log("newNumber:",n),a((0,i.mP)({id:t,newName:e,newNumber:n}))},disabled:o,children:o?[(0,v.jsx)(b,{size:"18"})," Editing..."]:"Edit"}),(0,v.jsx)("button",{type:"button",className:p,onClick:function(){return a((0,i._5)(t))},disabled:o,children:o?[(0,v.jsx)(b,{size:"18"})," Deleting..."]:"Delete"})]})},k="TaskList_ContactList__ZVQgm",N=function(e){var t=e.visibleContacts;return(0,v.jsx)("ul",{className:k,children:t.map((function(e){var t=e.id,n=e.name,s=e.number;return(0,v.jsx)(g,{id:t,name:n,number:s},t)}))})},C="TaskEditor_Form__wa-SE",T="TaskEditor_FormLabel__4glZA",w="TaskEditor_FormBtn__tHm6t",L="TaskEditor_FormInput__+5PdH",F=function(){var e=(0,r.I0)();return(0,v.jsxs)("form",{className:C,onSubmit:function(t){t.preventDefault();var n=t.currentTarget,s=n.elements.name.value,a=n.elements.number.value;if(""!==s&&""!==a)return e((0,i.gI)({name:s,number:a})),void n.reset();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},children:[(0,v.jsxs)("label",{className:T,children:["Name",(0,v.jsx)("br",{}),(0,v.jsx)("input",{className:L,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsx)("br",{}),(0,v.jsxs)("label",{className:T,children:["Number",(0,v.jsx)("br",{}),(0,v.jsx)("input",{className:L,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("br",{}),(0,v.jsx)("button",{className:w,type:"submit",children:"Add contact"})]})},y=function(e){return e.filter},E="Container_Container__dPyVg",I=function(e){var t=e.children;return(0,v.jsx)("div",{className:E,children:t})},z=n(8966),Z=function(){return(0,v.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,v.jsx)(z.Bb,{width:"100%"})]})},A="Filter_FilterLabel__OSs84",B="Filter_FilterInput__-+rOd",P=n(1634),V=function(){var e=(0,r.I0)(),t=(0,r.v9)(y);console.log("Filter==>filter:",t);return(0,v.jsxs)("label",{className:A,children:["Find contacts by name",(0,v.jsx)("input",{className:B,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,P.B)({filterValue:n}))}})]})};function D(){var e=(0,r.I0)(),t=(0,r.v9)(l);console.log("Tasks==>isLoading:",t);var n=(0,r.v9)(y);console.log("Tasks==>filter:",n);var s=(0,r.v9)(o);console.log("Tasks==>contacts:",s),(0,a.useEffect)((function(){e((0,i.Jv)())}),[e]);var c=function(){var e=n.toLowerCase();return s.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),u=s.length;return(0,v.jsxs)(I,{children:[(0,v.jsx)(F,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsxs)("p",{children:["Total: ",u]}),t&&(0,v.jsx)(Z,{}),s.length>0&&!t&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(V,{}),(0,v.jsx)(N,{visibleContacts:c})]})]})}}}]);
//# sourceMappingURL=248.ec21f3e2.chunk.js.map