/*! For license information please see 356.e2cef176.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[356],{5700:function(e,t,n){n.d(t,{W:function(){return s}});n(2791);var a="Container_Container__dPyVg",r=n(3329),s=function(e){var t=e.children;return(0,r.jsx)("div",{className:a,children:t})}},854:function(e,t,n){n.d(t,{a:function(){return s}});n(2791);var a=n(5243),r=n(3329),s=function(){return(0,r.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,r.jsx)(a.Bb,{width:"100%"})]})}},6356:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a,r=n(2791),s=n(9434),i=n(6052),o=n(1438),c=function(e){return e.filter},l=n(5700),u=n(8174),d=(n(5462),n(168)),m=n(6794),f=n(2554),_=n(5899),x=(0,f.F4)(a||(a=(0,d.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),b=(0,m.Z)(_.frZ,{target:"eebnqfe0"})("animation:",x," 0.85s linear infinite;");b.defaultProps={size:40};var h="ContactForm_Form__IBmOq",j="ContactForm_FormLabel__SwfwS",v="ContactForm_FormBtn__qtcqm",p="ContactForm_FormInput__s9Pni",C=n(3329),N=function(){var e=(0,s.I0)(),t=(0,s.v9)(o.oy),n=(0,s.v9)(o.NH);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("form",{className:h,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r=a.elements.name.value,s=a.elements.number.value;if(t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})))return u.Am.warning("".concat(r," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.")),void a.reset();e((0,i.uK)({name:r,number:s})),a.reset()},children:[(0,C.jsxs)("label",{className:j,children:[n?"Please wait...":"Name",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:p,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsx)("br",{}),(0,C.jsxs)("label",{className:j,children:[n?"...":"Number",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)("br",{}),(0,C.jsx)("button",{className:v,type:"submit",disabled:n,children:n?(0,C.jsx)(b,{size:"32",children:"Add contact"}):"Add contact"})]}),(0,C.jsx)(u.Ix,{autoClose:1500,theme:"colored"})]})},y=n(854),g=n(1634),F="Filter_FilterLabel__OSs84",w="Filter_FilterInput__-+rOd",L=function(){var e=(0,s.I0)(),t=(0,s.v9)(c);return(0,C.jsxs)("label",{className:F,children:["Find contacts by name",(0,C.jsx)("input",{className:w,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,g.B)({filterValue:n}))}})]})},A=n(885),E="ContactEditor_FormEdit__u3Qim",I="ContactEditor_FormLabelEdit__ul2rA",k="ContactEditor_FormBtnEdit__nK0vb",z="ContactEditor_FormInputEdit__EXW93",B=function(e){var t=e.id,n=e.name,a=e.number,r=e.toggleModal,c=(0,s.I0)(),l=(0,s.v9)(o.NH);return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("form",{className:E,onSubmit:function(e){e.preventDefault();var n=e.currentTarget;c((0,i.mP)({id:t,name:n.elements.name.value,number:n.elements.number.value})),n.reset(),r()},children:[(0,C.jsxs)("label",{className:I,children:[l?"Please wait...":"Name",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:z,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:n})]}),(0,C.jsx)("br",{}),(0,C.jsxs)("label",{className:I,children:[l?"...":"Number",(0,C.jsx)("br",{}),(0,C.jsx)("input",{className:z,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:a})]}),(0,C.jsx)("br",{}),(0,C.jsx)("button",{className:k,type:"submit",disabled:l,children:l?(0,C.jsx)(b,{size:"32",children:"Add contact"}):"Edit contact"})]})})},Z=n(4164),P="Modal_Overlay__yoxbg",q="Modal_Modal__I1UYJ",D=document.querySelector("#modal-root");function S(e){var t=e.children,n=e.onClose;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,Z.createPortal)((0,C.jsx)("div",{className:P,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,C.jsx)("div",{className:q,children:t})}),D)}var H="ContactListItem_ContactListItem__sSK4a",K="ContactListItem_ContactListText__A1dah",M="ContactListItem_ContactListNumber__2WeGK",T="ContactListItem_ContactListEditBtn__V1H9K",O="ContactListItem_ContactListDeleteBtn__TE5BB",V=function(e){var t=e.id,n=e.name,a=e.number,c=(0,r.useState)(!1),l=(0,A.Z)(c,2),u=l[0],d=l[1],m=(0,s.I0)(),f=(0,s.v9)(o.NH),_=function(){d(!u)};return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("li",{className:H,children:[(0,C.jsxs)("p",{className:K,children:[n,":",(0,C.jsxs)("span",{className:M,children:[" ",a]})]}),(0,C.jsx)("button",{type:"button",className:T,onClick:function(){_()},disabled:f,children:"Edit"}),(0,C.jsx)("button",{type:"button",className:O,onClick:function(){return m((0,i.GK)(t))},disabled:f,children:"Delete"}),u&&(0,C.jsx)(S,{onClose:_,children:(0,C.jsx)(B,{id:t,name:n,number:a,toggleModal:_})})]})})},W="ContactList_ContactList__2mXfy",G=function(e){var t=e.visibleContacts;return(0,C.jsx)("ul",{className:W,children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,C.jsx)(V,{id:t,name:n,number:a},t)}))})},J=n(7762),X="DeleteAllContacts_DeleteAllContactsBtn__4R-sx";function $(){var e=(0,s.I0)(),t=(0,s.v9)(o.NH),n=(0,s.v9)(o.oy);return(0,C.jsx)(l.W,{children:(0,C.jsx)("button",{type:"button",className:X,onClick:function(){var t,a=(0,J.Z)(n);try{for(a.s();!(t=a.n()).done;){var r=t.value.id;e((0,i.GK)(r))}}catch(s){a.e(s)}finally{a.f()}},disabled:t,children:t?[(0,C.jsx)(b,{size:"18"})," Deleting all Contacts..."]:"Delete all Contacts"})})}function Q(){var e=(0,s.I0)(),t=(0,s.v9)(o.NH),n=(0,s.v9)(c),a=(0,s.v9)(o.oy);(0,r.useEffect)((function(){e((0,i.yF)())}),[e]);var u=function(){var e=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),d=a.length;return(0,C.jsxs)(l.W,{children:[(0,C.jsx)(N,{}),(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsxs)("p",{children:["Total: ",d]}),t&&(0,C.jsx)(y.a,{}),a.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(L,{}),(0,C.jsx)(G,{visibleContacts:u}),(0,C.jsx)($,{})]})]})}},1438:function(e,t,n){n.d(t,{NH:function(){return a},O3:function(){return s},oy:function(){return r}});var a=function(e){return e.contacts.isLoading},r=function(e){return e.contacts.items},s=function(e){return e.contacts.uploadContacts}}}]);
//# sourceMappingURL=356.e2cef176.chunk.js.map