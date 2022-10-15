/*! For license information please see 267.8e584fd4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{2267:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a,r=n(2791),s=n(9434),i=n(885),l=n(8427),o=function(e){return e.tasks.isLoading},c=function(e){return e.tasks.items},d="ContactEditor_FormEdit__u3Qim",u="ContactEditor_FormLabelEdit__ul2rA",m="ContactEditor_FormBtnEdit__nK0vb",_="ContactEditor_FormInputEdit__EXW93",b=n(184),x=function(e){var t=e.id,n=e.name,a=e.number,r=e.toggleModal,i=(0,s.I0)();return(0,b.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,a=n.elements.name.value,s=n.elements.number.value;if(""!==a&&""!==s)return i((0,l.mP)({id:t,newName:a,newNumber:s})),n.reset(),void r();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},children:[(0,b.jsxs)("label",{className:u,children:["Name",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:_,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:n})]}),(0,b.jsx)("br",{}),(0,b.jsxs)("label",{className:u,children:["Number",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:a})]}),(0,b.jsx)("br",{}),(0,b.jsx)("button",{className:m,type:"submit",children:"Edit contact"})]})},f=n(168),h=n(6794),p=n(2554),j=n(5899),v=(0,p.F4)(a||(a=(0,f.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),C=(0,h.Z)(j.frZ,{target:"eebnqfe0"})("animation:",v," 0.85s linear infinite;");C.defaultProps={size:40};var N=n(4164),g="Modal_Overlay__yoxbg",E="Modal_Modal__I1UYJ",y=document.querySelector("#modal-root");function L(e){var t=e.children,n=e.onClose;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,N.createPortal)((0,b.jsx)("div",{className:g,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,b.jsx)("div",{className:E,children:t})}),y)}var w="ContactListItem_ContactListItem__sSK4a",F="ContactListItem_ContactListText__A1dah",k="ContactListItem_ContactListNumber__2WeGK",I="ContactListItem_ContactListEditBtn__V1H9K",A="ContactListItem_ContactListDeleteBtn__TE5BB",T=function(e){var t=e.id,n=e.name,a=e.number,c=(0,r.useState)(!1),d=(0,i.Z)(c,2),u=d[0],m=d[1],_=(0,s.I0)(),f=(0,s.v9)(o),h=function(){m(!u)};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("li",{className:w,children:[(0,b.jsxs)("p",{className:F,children:[n,":",(0,b.jsxs)("span",{className:k,children:[" ",a]})]}),(0,b.jsx)("button",{type:"button",className:I,onClick:function(){h()},disabled:f,children:f?[(0,b.jsx)(C,{size:"18"})," Editing..."]:"Edit"}),(0,b.jsx)("button",{type:"button",className:A,onClick:function(){return _((0,l._5)(t))},disabled:f,children:f?[(0,b.jsx)(C,{size:"18"})," Deleting..."]:"Delete"}),u&&(0,b.jsx)(L,{onClose:h,children:(0,b.jsx)(x,{id:t,name:n,number:a,toggleModal:h})})]})})},Z="TaskList_ContactList__ZVQgm",z=function(e){var t=e.visibleContacts;return(0,b.jsx)("ul",{className:Z,children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,b.jsx)(T,{id:t,name:n,number:a},t)}))})},B="TaskEditor_Form__wa-SE",P="TaskEditor_FormLabel__4glZA",M="TaskEditor_FormBtn__tHm6t",S="TaskEditor_FormInput__+5PdH",q=function(){var e=(0,s.I0)();return(0,b.jsxs)("form",{className:B,onSubmit:function(t){t.preventDefault();var n=t.currentTarget,a=n.elements.name.value,r=n.elements.number.value;if(""!==a&&""!==r)return e((0,l.gI)({name:a,number:r})),void n.reset();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},children:[(0,b.jsxs)("label",{className:P,children:["Name",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:S,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsx)("br",{}),(0,b.jsxs)("label",{className:P,children:["Number",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:S,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("br",{}),(0,b.jsx)("button",{className:M,type:"submit",children:"Add contact"})]})},V=function(e){return e.filter},D="Container_Container__dPyVg",J=function(e){var t=e.children;return(0,b.jsx)("div",{className:D,children:t})},K=n(8966),H=function(){return(0,b.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,b.jsx)(K.Bb,{width:"100%"})]})},O="Filter_FilterLabel__OSs84",Q="Filter_FilterInput__-+rOd",W=n(1634),$=function(){var e=(0,s.I0)(),t=(0,s.v9)(V);console.log("Filter==>filter:",t);return(0,b.jsxs)("label",{className:O,children:["Find contacts by name",(0,b.jsx)("input",{className:Q,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,W.B)({filterValue:n}))}})]})};function G(){var e=(0,s.I0)(),t=(0,s.v9)(o),n=(0,s.v9)(V),a=(0,s.v9)(c);(0,r.useEffect)((function(){e((0,l.Jv)())}),[e]);var i=function(){var e=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),d=a.length;return(0,b.jsxs)(J,{children:[(0,b.jsx)(q,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsxs)("p",{children:["Total: ",d]}),t&&(0,b.jsx)(H,{}),a.length>0&&!t&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)($,{}),(0,b.jsx)(z,{visibleContacts:i})]})]})}}}]);
//# sourceMappingURL=267.8e584fd4.chunk.js.map