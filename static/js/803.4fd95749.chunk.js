/*! For license information please see 803.4fd95749.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[803],{5700:function(e,t,n){n.d(t,{W:function(){return s}});n(2791);var a="Container_Container__dPyVg",r=n(3329),s=function(e){var t=e.children;return(0,r.jsx)("div",{className:a,children:t})}},854:function(e,t,n){n.d(t,{a:function(){return s}});n(2791);var a=n(5243),r=n(3329),s=function(){return(0,r.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,r.jsx)(a.Bb,{width:"100%"})]})}},803:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a,r=n(2791),s=n(9434),i=n(885),o=n(6052),c=n(1438),l=n(168),u=n(6794),d=n(2554),m=n(5899),f=(0,d.F4)(a||(a=(0,l.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),_=(0,u.Z)(m.frZ,{target:"eebnqfe0"})("animation:",f," 0.85s linear infinite;");_.defaultProps={size:40};var b="ContactEditor_FormEdit__u3Qim",h="ContactEditor_FormLabelEdit__ul2rA",x="ContactEditor_FormBtnEdit__nK0vb",j="ContactEditor_FormInputEdit__EXW93",p=n(3329),v=function(e){var t=e.id,n=e.name,a=e.number,r=e.toggleModal,i=(0,s.I0)(),l=(0,s.v9)(c.NH);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{className:b,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,a=n.elements.name.value,s=n.elements.number.value;i((0,o.mP)({id:t,newName:a,newNumber:s})),n.reset(),r()},children:[(0,p.jsxs)("label",{className:h,children:[l?"Please wait...":"Name",(0,p.jsx)("br",{}),(0,p.jsx)("input",{className:j,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:n})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("label",{className:h,children:[l?"...":"Number",(0,p.jsx)("br",{}),(0,p.jsx)("input",{className:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:a})]}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{className:x,type:"submit",disabled:l,children:l?(0,p.jsx)(_,{size:"32",children:"Add contact"}):"Edit contact"})]})})},C=n(4164),N="Modal_Overlay__yoxbg",g="Modal_Modal__I1UYJ",y=document.querySelector("#modal-root");function w(e){var t=e.children,n=e.onClose;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,C.createPortal)((0,p.jsx)("div",{className:N,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,p.jsx)("div",{className:g,children:t})}),y)}var F="ContactListItem_ContactListItem__sSK4a",L="ContactListItem_ContactListText__A1dah",E="ContactListItem_ContactListNumber__2WeGK",I="ContactListItem_ContactListEditBtn__V1H9K",A="ContactListItem_ContactListDeleteBtn__TE5BB",k=function(e){var t=e.id,n=e.name,a=e.number,l=(0,r.useState)(!1),u=(0,i.Z)(l,2),d=u[0],m=u[1],f=(0,s.I0)(),_=(0,s.v9)(c.NH),b=function(){m(!d)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("li",{className:F,children:[(0,p.jsxs)("p",{className:L,children:[n,":",(0,p.jsxs)("span",{className:E,children:[" ",a]})]}),(0,p.jsx)("button",{type:"button",className:I,onClick:function(){b()},disabled:_,children:"Edit"}),(0,p.jsx)("button",{type:"button",className:A,onClick:function(){return f((0,o.GK)(t))},disabled:_,children:"Delete"}),d&&(0,p.jsx)(w,{onClose:b,children:(0,p.jsx)(v,{id:t,name:n,number:a,toggleModal:b})})]})})},z="ContactList_ContactList__2mXfy",B=function(e){var t=e.visibleContacts;return(0,p.jsx)("ul",{className:z,children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,p.jsx)(k,{id:t,name:n,number:a},t)}))})},P=n(8174),Z=(n(5462),"ContactForm_Form__IBmOq"),q="ContactForm_FormLabel__SwfwS",S="ContactForm_FormBtn__qtcqm",M="ContactForm_FormInput__s9Pni",T=function(){var e=(0,s.I0)(),t=(0,s.v9)(c.oy),n=(0,s.v9)(c.NH);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:Z,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r=a.elements.name.value,s=a.elements.number.value;if(t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})))return P.Am.warning("".concat(r," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.")),void a.reset();e((0,o.uK)({name:r,number:s})),a.reset()},children:[(0,p.jsxs)("label",{className:q,children:[n?"Please wait...":"Name",(0,p.jsx)("br",{}),(0,p.jsx)("input",{className:M,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("label",{className:q,children:[n?"...":"Number",(0,p.jsx)("br",{}),(0,p.jsx)("input",{className:M,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{className:S,type:"submit",disabled:n,children:n?(0,p.jsx)(_,{size:"32",children:"Add contact"}):"Add contact"})]}),(0,p.jsx)(P.Ix,{autoClose:1500,theme:"colored"})]})},H=function(e){return e.filter},K=n(5700),O=n(854),V=n(1634),D="Filter_FilterLabel__OSs84",W="Filter_FilterInput__-+rOd",J=function(){var e=(0,s.I0)(),t=(0,s.v9)(H);return(0,p.jsxs)("label",{className:D,children:["Find contacts by name",(0,p.jsx)("input",{className:W,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,V.B)({filterValue:n}))}})]})};function G(){var e=(0,s.I0)(),t=(0,s.v9)(c.NH),n=(0,s.v9)(H),a=(0,s.v9)(c.oy);(0,r.useEffect)((function(){e((0,o.yF)())}),[e]);var i=function(){var e=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),l=a.length;return(0,p.jsxs)(K.W,{children:[(0,p.jsx)(T,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsxs)("p",{children:["Total: ",l]}),t&&(0,p.jsx)(O.a,{}),a.length>0&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(J,{}),(0,p.jsx)(B,{visibleContacts:i})]})]})}},1438:function(e,t,n){n.d(t,{NH:function(){return a},O3:function(){return s},oy:function(){return r}});var a=function(e){return e.contacts.isLoading},r=function(e){return e.contacts.items},s=function(e){return e.contacts.uploadContacts}}}]);
//# sourceMappingURL=803.4fd95749.chunk.js.map