/*! For license information please see 973.996078c9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{7973:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a,r=n(2791),s=n(9434),i=n(885),o=n(6052),c=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.items},d=n(8174),u=(n(5462),n(168)),m=n(6794),x=n(2554),f=n(5899),_=(0,x.F4)(a||(a=(0,u.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),b=(0,m.Z)(f.frZ,{target:"eebnqfe0"})("animation:",_," 0.85s linear infinite;");b.defaultProps={size:40};var h="ContactEditor_FormEdit__u3Qim",j="ContactEditor_FormLabelEdit__ul2rA",p="ContactEditor_FormBtnEdit__nK0vb",v="ContactEditor_FormInputEdit__EXW93",C=n(184),N=function(e){var t=e.id,n=e.name,a=e.number,r=e.toggleModal,i=(0,s.I0)(),u=(0,s.v9)(l),m=(0,s.v9)(c);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,a=n.elements.name.value,s=n.elements.number.value;if(u.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return d.Am.warning("".concat(a," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.")),void n.reset();i((0,o.mP)({id:t,newName:a,newNumber:s})),n.reset(),r()},children:[(0,C.jsxs)("label",{className:j,children:[m?"Wait for add...":"Name",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:v,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:n})]}),(0,C.jsx)("br",{}),(0,C.jsxs)("label",{className:j,children:[m?"...":"Number",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:a})]}),(0,C.jsx)("br",{}),(0,C.jsx)("button",{className:p,type:"submit",disabled:m,children:m?(0,C.jsx)(b,{size:"32",children:"Add contact"}):"Edit contact"})]}),(0,C.jsx)(d.Ix,{autoClose:1500,theme:"colored"})]})},g=n(4164),w="Modal_Overlay__yoxbg",F="Modal_Modal__I1UYJ",L=document.querySelector("#modal-root");function y(e){var t=e.children,n=e.onClose;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,g.createPortal)((0,C.jsx)("div",{className:w,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,C.jsx)("div",{className:F,children:t})}),L)}var E="ContactListItem_ContactListItem__sSK4a",I="ContactListItem_ContactListText__A1dah",A="ContactListItem_ContactListNumber__2WeGK",z="ContactListItem_ContactListEditBtn__V1H9K",k="ContactListItem_ContactListDeleteBtn__TE5BB",B=function(e){var t=e.id,n=e.name,a=e.number,l=(0,r.useState)(!1),d=(0,i.Z)(l,2),u=d[0],m=d[1],x=(0,s.I0)(),f=(0,s.v9)(c),_=function(){m(!u)};return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("li",{className:E,children:[(0,C.jsxs)("p",{className:I,children:[n,":",(0,C.jsxs)("span",{className:A,children:[" ",a]})]}),(0,C.jsx)("button",{type:"button",className:z,onClick:function(){_()},disabled:f,children:f?[(0,C.jsx)(b,{size:"18"})," Editing..."]:"Edit"}),(0,C.jsx)("button",{type:"button",className:k,onClick:function(){return x((0,o.GK)(t))},disabled:f,children:f?[(0,C.jsx)(b,{size:"18"})," Deleting..."]:"Delete"}),u&&(0,C.jsx)(y,{onClose:_,children:(0,C.jsx)(N,{id:t,name:n,number:a,toggleModal:_})})]})})},Z="ContactList_ContactList__2mXfy",q=function(e){var t=e.visibleContacts;return(0,C.jsx)("ul",{className:Z,children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,C.jsx)(B,{id:t,name:n,number:a},t)}))})},P="ContactForm_Form__IBmOq",S="ContactForm_FormLabel__SwfwS",M="ContactForm_FormBtn__qtcqm",T="ContactForm_FormInput__s9Pni",K=function(){var e=(0,s.I0)(),t=(0,s.v9)(l),n=(0,s.v9)(c);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("form",{className:P,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r=a.elements.name.value,s=a.elements.number.value;if(t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})))return d.Am.warning("".concat(r," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.")),void a.reset();e((0,o.uK)({name:r,number:s})),a.reset()},children:[(0,C.jsxs)("label",{className:S,children:[n?"Wait for add...":"Name",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:T,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsx)("br",{}),(0,C.jsxs)("label",{className:S,children:[n?"...":"Number",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:T,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)("br",{}),(0,C.jsx)("button",{className:M,type:"submit",disabled:n,children:n?(0,C.jsx)(b,{size:"32",children:"Add contact"}):"Add contact"})]}),(0,C.jsx)(d.Ix,{autoClose:1500,theme:"colored"})]})},D=function(e){return e.filter},V="Container_Container__dPyVg",O=function(e){var t=e.children;return(0,C.jsx)("div",{className:V,children:t})},W=n(8966),J=function(){return(0,C.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,C.jsx)(W.Bb,{width:"100%"})]})},G="Filter_FilterLabel__OSs84",X="Filter_FilterInput__-+rOd",$=n(1634),H=function(){var e=(0,s.I0)(),t=(0,s.v9)(D);console.log("Filter==>filter:",t);return(0,C.jsxs)("label",{className:G,children:["Find contacts by name",(0,C.jsx)("input",{className:X,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,$.B)({filterValue:n}))}})]})};function Q(){var e=(0,s.I0)(),t=(0,s.v9)(c),n=(0,s.v9)(D),a=(0,s.v9)(l);(0,r.useEffect)((function(){e((0,o.yF)())}),[e]);var i=function(){var e=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),d=a.length;return(0,C.jsxs)(O,{children:[(0,C.jsx)(K,{}),(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsxs)("p",{children:["Total: ",d]}),t&&(0,C.jsx)(J,{}),a.length>0&&!t&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(H,{}),(0,C.jsx)(q,{visibleContacts:i})]})]})}}}]);
//# sourceMappingURL=973.996078c9.chunk.js.map