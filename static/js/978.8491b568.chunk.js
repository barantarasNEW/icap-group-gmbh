"use strict";(self.webpackChunkicap_group_gmbh=self.webpackChunkicap_group_gmbh||[]).push([[978],{978:function(s,e,r){r.r(e),r.d(e,{default:function(){return S}});var n=r(439),a=r(791),c=r(689),t=r(820),i=r(213),o=r(87),l=r(184),m=function(){return(0,l.jsx)("nav",{className:"additional-bar",children:(0,l.jsx)("ul",{className:"additional-bar__list",children:(0,l.jsx)("li",{className:"additional-bar__item",children:(0,l.jsx)(o.rU,{to:"https://calendly.com/icapgroup/start",className:"btn",target:"_blank",children:"Contact us"})})})})},u=function(){var s=(0,c.TH)().pathname,e="/"===s||"/home"===s?[]:s.split("/").slice(1);return(0,l.jsxs)("ul",{className:"bread-crumbs",children:[(0,l.jsx)("li",{className:"bread-crumbs__item",children:(0,l.jsx)(o.rU,{to:"/",className:"bread-crumbs__link",children:(0,l.jsx)("img",{className:"bread-crumbs__icon--home",src:"".concat(".","/assets/icons/home.svg"),alt:"icon"})})}),e.map((function(s){return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("li",{className:"bread-crumbs__item",children:(0,l.jsx)("img",{className:"bread-crumbs__icon",src:"".concat(".","/assets/icons/arrow-right.svg"),alt:"icon"})}),(0,l.jsx)("li",{className:"bread-crumbs__item",children:s})]},s)}))]})},d=function(){return(0,l.jsxs)(o.rU,{to:"/",className:"logo",children:[(0,l.jsx)("img",{className:"logo__icon",src:"".concat(".","/assets/icons/logo.png"),alt:"logo"}),(0,l.jsx)("p",{className:"logo__text",children:"IGG"})]})},h=[{href:"/",name:"Home"},{href:"/solutions",name:"Solutions"}],j=function(){return(0,l.jsx)("nav",{className:"navbar",children:(0,l.jsx)("ul",{className:"navbar__list",children:h.map((function(s){var e=s.href,r=s.name;return(0,l.jsx)("li",{className:"navbar__item",children:(0,l.jsx)(o.OL,{to:e,className:"navbar__link",children:r})},e)}))})})},x=function(s){var e=s.isMenu,r=s.onClick;return(0,l.jsx)("header",{className:"header",children:(0,l.jsxs)("div",{className:"header__wrapper",children:[(0,l.jsxs)("div",{className:"header__top",children:[(0,l.jsx)(d,{}),(0,l.jsx)(j,{}),(0,l.jsx)(m,{})]}),(0,l.jsxs)("div",{className:"header__menu",children:[(0,l.jsx)(d,{}),(0,l.jsx)("button",{className:"additional-bar__btn",onClick:r,children:e?(0,l.jsx)(i.ySC,{size:27}):(0,l.jsx)(t.qTj,{size:27})})]}),(0,l.jsx)("div",{className:"header__bottom",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(u,{})})})]})})},_=function(){return(0,l.jsxs)("div",{className:"move",children:["Back to top",(0,l.jsx)("button",{className:"move__btn",onClick:function(){window.scrollTo({top:0})},children:(0,l.jsx)("img",{className:"move__icon",src:"".concat(".","/assets/icons/arrow.svg"),alt:"icon"})})]})},f=[{href:"https://www.linkedin.com/company/icap-group-gmbh/?viewAsMember=true",icon:"".concat(".","/assets/icons/in.svg")},{href:"https://www.instagram.com/wallpapers_quotely/",icon:"".concat(".","/assets/icons/instagram.svg")}],v=function(){return(0,l.jsx)("ul",{className:"nets__list",children:f.map((function(s){var e=s.href,r=s.icon;return(0,l.jsx)("li",{className:"nets__item",children:(0,l.jsx)(o.rU,{to:e,className:"nets__link",target:"_blank",children:(0,l.jsx)("img",{className:"nets__icon",src:r,alt:"icon"})})},e)}))})},b=function(){return(0,l.jsx)("footer",{className:"footer",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"footer__wrapper",children:[(0,l.jsx)(d,{}),(0,l.jsx)(v,{}),(0,l.jsx)(_,{})]})})})},N=r(931),p=r(671),g=r(466),w=r(136),k=r(516),y=function(s){(0,w.Z)(r,s);var e=(0,k.Z)(r);function r(s){var n;return(0,p.Z)(this,r),(n=e.call(this,s)).state={hasError:!1,error:null,errorInfo:null},n}return(0,g.Z)(r,[{key:"componentDidCatch",value:function(s,e){console.error("Error:",s),console.error("Error Info:",e),this.setState({errorInfo:e})}},{key:"render",value:function(){return this.state.hasError?(0,l.jsxs)("div",{className:"error-boundary",children:[(0,l.jsx)("h1",{className:"error-boundary__title",children:"Something went wrong"}),(0,l.jsx)("p",{children:this.state.error&&this.state.error.toString()})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(s){return{hasError:!0,error:s,errorInfo:null}}}]),r}(a.Component),C=y,E=function(s){var e=s.isMenu;return(0,l.jsxs)("div",{className:"menu",style:{transform:"translateX(".concat(e?"0":"100%",")")},children:[(0,l.jsx)(j,{}),(0,l.jsx)(m,{})]})},S=function(){var s=(0,c.TH)().pathname,e=(0,a.useState)(!1),r=(0,n.Z)(e,2),t=r[0],i=r[1];return(0,a.useEffect)((function(){i(!1),document.body.style.overflow="scroll"}),[s]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{isMenu:t,onClick:function(){return i((function(s){return s?(document.body.style.overflow="scroll",!1):(document.body.style.overflow="hidden",!0)}))}}),(0,l.jsx)(E,{isMenu:t}),(0,l.jsx)("main",{className:"main",children:(0,l.jsx)(C,{children:(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(N.Z,{}),children:(0,l.jsx)(c.j3,{})})})}),(0,l.jsx)(b,{})]})}},931:function(s,e,r){r.d(e,{Z:function(){return c}});var n=r(164),a=r(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,n.createPortal)((0,a.jsx)("div",{className:"lds-dual-ring"}),document.getElementById("portal"))})}}}]);
//# sourceMappingURL=978.8491b568.chunk.js.map