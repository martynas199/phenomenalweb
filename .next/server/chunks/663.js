"use strict";exports.id=663,exports.ids=[663],exports.modules={7045:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(2015);function a(e,t=0){let[r,i]=(0,o.useState)(!1);function s(){i(!1)}return(0,o.useRef)(),{clear:s,start:function(){i(!0)},stop:s,isActive:r}}},8406:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(8732),a=r(2015),i=r(9825),s=r.n(i),n=r(2069),l=r(2770),d=r.n(l);let p=d().button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #028489;
  min-height: 48px;
  min-width: 48px;
  border-radius: 3px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border: 0;
  transition: all 0.3s ease;
  @media (max-width: 480px) {
    font-size: 15px;
  }
  span.btn-text {
    padding-left: 4px;
    padding-right: 4px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;p.displayName="ButtonStyle";var c=r(1569);let x=({type:e,title:t,icon:r,disabled:i,iconPosition:s,onClick:l,loader:d,loaderColor:x,isMaterial:u,isLoading:f,className:g,...m})=>{let b=["reusecore__button"];f&&b.push("is-loading"),u&&b.push("is-material"),g&&b.push(g);let h=!1!==f?(0,o.jsx)(a.Fragment,{children:d||(0,o.jsx)(c.A,{loaderColor:x||"#30C56D"})}):r&&(0,o.jsx)("span",{className:"btn-icon",children:r}),w=s||"right";return(0,o.jsxs)(p,{type:e,className:b.join(" "),icon:r,disabled:i,"icon-position":w,onClick:l,...m,children:["left"===w&&h,t&&(0,o.jsx)("span",{className:"btn-text",children:(0,o.jsx)(n.FormattedMessage,{id:t,defaultMessage:"button"})}),"right"===w&&h]})};x.propTypes={className:s().string,type:s().oneOf(["button","submit","reset"]),icon:s().object,loader:s().object,isMaterial:s().bool,isLoading:s().bool,loaderColor:s().string,disabled:s().bool,iconPosition:s().oneOf(["left","right"]),variant:s().oneOf(["textButton","outlined","fab","extendedFab"]),colors:s().oneOf(["primary","secondary","warning","error","primaryWithBg","secondaryWithBg","warningWithBg","errorWithBg"]),onClick:s().func},x.defaultProps={disabled:!1,isMaterial:!1,isLoading:!1,type:"button"};let u=x},1569:(e,t,r)=>{r.d(t,{A:()=>x});var o=r(8732);r(2015);var a=r(9825),i=r.n(a),s=r(2770),n=r.n(s);let l=(0,s.keyframes)`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
  }
`,d=(0,s.css)`
  animation: ${l} 1s linear infinite;
`,p=n().span`
  /* loader default style */
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: ${e=>e.loaderColor?e.loaderColor:"#000000"};
  border-top-color: transparent !important;

  /* animation goes here */
  ${d}
`;p.displayName="LoaderStyle";let c=({loaderColor:e,className:t,...r})=>{let a=["reusecore__loader"];return t&&a.push(t),(0,o.jsx)(p,{className:a.join(" "),loaderColor:e,...r})};c.propTypes={className:i().string,width:i().oneOfType([i().string,i().number]),height:i().oneOfType([i().string,i().number]),loaderColor:i().string},c.defaultProps={};let x=c},8262:(e,t,r)=>{r.d(t,{A:()=>w});var o=r(8732),a=r(2015),i=r(8737),s=r(5592),n=r(4683),l=r(3234),d=r.n(l),p=r(2069),c=r(7045),x=r(9400),u=r(8406),f=r(1569),g=r(2770),m=r.n(g);let b=m().form`
  position: relative;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  button {
    border-radius: 3px;
    background-image: linear-gradient(
      31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    padding: 12px 33px 15px 34px;
    height: 46px;
    border-radius: 4em;
    min-width: 160px;
    min-height: auto;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 6px 20px;
    transition: all 0.35s ease;
    @media (min-width: 767px) {
      min-width: 150px;
      padding: 12px 15px 15px;
    }
    .btn-text {
      padding: 0;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 15px;
    }
  }
  /* max-width: 100%; */
  margin-top: 30px;
  z-index: 2;

  @media (max-width: 575px) {
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
  .field-wrapper {
    text-align: justify;
    margin: 0 0 30px 0;
    width: 100%;
    .form-field--is-active {
      label {
        color: #040718;
      }
    }
    .form-field__control {
      &:after {
        height: 1px;
        background: #040718;
      }
    }

    input {
      height: 42px;
    }

    input,
    textarea {
      border-color: #dadadd;
      color: #040718;
    }
    & label {
      color: #9b9ca3;
      font-size: 14px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
    }
  }
`,h=m().div`
  color: ${e=>(e.success,"rgb(250, 251, 255)")};
  position: absolute;
  border-radius: 5px;
  background-color: ${e=>e.success?"rgb(14, 158, 105)":"rgb(246, 86, 86)"};
  box-shadow: ${e=>e.success?"0px 5px 18.8px 1.2px rgba(17, 182, 122, 0.5)":"0px 5px 18.8px 1.2px rgba(246, 86, 86, 0.35)"};
  font-size: 14px;
  font-family: 'Roboto';
  left: ${e=>e.success?"25%":"0"};
  bottom: -50px;
  padding: 6px 16px;
  transition: all 250ms linear;
  text-align: center;
  width: auto;
  left: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  gap: 8px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    position: static;
    bottom: 0;
    left: 0;
    margin-top: 15px;
    transform: translate(0);
  }
  span {
    padding-left: 20px;
    padding-right: 20px;
  }
`;function w(){let[e,t]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),[g,m]=(0,a.useState)(""),[w,y]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),[M,_]=(0,a.useState)(null),[k,C]=(0,a.useState)(null),[F,L]=(0,a.useState)(!1),{start:N}=(0,c.A)(()=>{w&&y(!1),v&&j(!1)},3500),z=e=>{e?k.current.classList.add("form-field--is-active"):(k.current.classList.remove("form-field--is-active"),""===M.current.value?k.current.classList.remove("form-field--is-filled"):k.current.classList.add("form-field--is-filled")),console.log(M.current.value)},A=async e=>{e.preventDefault(),L(!0),console.log("contact form"),setTimeout(function(){L(!1),j(!0),N(),t(""),l(""),m(""),z(!1)},2e3)};return(0,o.jsxs)(b,{onSubmit:A,children:[(0,o.jsx)(x.A,{labelText:"nameInputLabel",type:"text",required:"required",value:r,error:w,success:v,onChange:(e,t)=>{let r=e.current.value;console.log("name",e),_(e),C(t),l(r)}}),(0,o.jsx)(x.A,{labelText:"emailInputLabel",type:"email",required:"required",value:e,error:w,success:v,onChange:(e,r)=>{let o=e.current.value;console.log("email",e),_(e),C(r),t(o)}}),(0,o.jsx)(x.A,{labelText:"messageInputLabel",type:"textarea",required:"required",value:g,error:w,success:v,onChange:(e,t)=>{let r=e.current.value;console.log("message",e),_(e),C(t),m(r)}}),(0,o.jsx)(u.A,{type:"submit",title:"contactFormButton",isLoading:F,loader:(0,o.jsx)(f.A,{loaderColor:"white"})}),w&&(0,o.jsx)(d(),{bottom:!0,duration:2e3,children:(0,o.jsxs)(h,{error:!0,children:[(0,o.jsx)(i.Icon,{icon:n.ic_cancel}),(0,o.jsx)(p.FormattedMessage,{id:"errorMsg",defaultMessage:"errorMessage"})]})}),v&&(0,o.jsx)(d(),{bottom:!0,duration:2e3,children:(0,o.jsxs)(h,{success:!0,children:[(0,o.jsx)(i.Icon,{icon:s.ic_check_circle}),(0,o.jsx)(p.FormattedMessage,{id:"successMsg",defaultMessage:"successMessage"})]})})]})}},9400:(e,t,r)=>{r.d(t,{A:()=>f});var o=r(8732),a=r(2015),i=r(2069),s=r(2770),n=r.n(s);let l=n().div`
  width: 316px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`,d=n().div`
  display: block;
  width: 100%;
  /* margin-bottom: 16px; */

  &.form-field--is-active {
    .form-field__control {
      &::after {
        /* border-bottom: 1px solid rgb(142, 199, 255); */
        /* transform: scaleX(110); */
        transform: scaleX(1);
      }
    }
    .form-field__label {
      color: rgb(142, 199, 255);
      font-size: 0.75rem;
      transform: translateY(-28px);
    }
  }
  &.form-field--is-filled {
    .form-field__label {
      font-size: 0.75rem;
      transform: translateY(-28px);
    }
    .form-field__control {
      &::after {
        /* border-bottom: 1px solid rgb(142, 199, 255); */
        /* transform: scaleX(110); */
        transform: scaleX(1);
      }
    }
  }
`,p=n().div`
  background: transparent;
  /* border-radius: 8px 8px 0 0; */
  /* overflow: hidden; */
  position: relative;
  width: 100%;

  &::after {
    /* border-bottom: 1px solid rgb(142, 199, 255); */
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    margin: 0 auto;
    position: absolute;
    /* right: -15px; */
    right: 0;
    transform: scaleX(0);
    transition: all 0.4s;
    width: 100%;
    height: 2px;
    background-color: rgb(142, 199, 255);
  }
`,c=n().label`
  box-sizing: border-box;
  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  transition: all 0.4s;
  width: 100%;
  font-size: 16px;
  font-family: 'Roboto';
  color: rgb(142, 199, 255);
  letter-spacing: -0.15px;
  padding: 12px 0px 0;
  pointer-events: none;
  font-weight: 300;
`,x=n().input`
  appearance: none;
  background: transparent;
  border: 0;
  display: block;
  font-size: 14px;
  outline: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 48px;
  margin-top: 0;
  color: rgba(142, 199, 255, 0.6);

  &:focus {
    outline: none;
  }
`,u=n().textarea`
  appearance: none;
  background: transparent;
  border: 0;
  display: block;
  font-size: 14px;
  outline: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 48px;
  margin-top: 0;
  color: rgba(142, 199, 255, 0.6);

  &:focus {
    outline: none;
  }
`;function f({id:e,type:t,labelText:r,helpText:s,error:n,success:f,name:g,onChange:m,className:b,value:h,...w}){let y=(0,a.useRef)(null),v=(0,a.useRef)(null),j=e=>{e?v.current.classList.add("form-field--is-active"):(v.current.classList.remove("form-field--is-active"),""===y.current.value?v.current.classList.remove("form-field--is-filled"):v.current.classList.add("form-field--is-filled")),console.log(y.current.value)},M=()=>{j(!1)},_=()=>{j(!0)},k=()=>{m(y,v)};return(0,o.jsx)(l,{className:`field-wrapper ${b||""}`.trim(),children:(0,o.jsx)(d,{ref:v,children:(0,o.jsxs)(p,{className:"form-field__control",children:[(0,o.jsx)(c,{htmlFor:e,className:"form-field__label",children:(0,o.jsx)(i.FormattedMessage,{id:r,defaultMessage:r})}),(0,o.jsx)("div",{style:{position:"relative",overflow:"hidden",width:"100%"},children:"textarea"===t?(0,o.jsx)(u,{id:e,type:t,name:g,ref:y,className:"form-field__input",onBlur:M,onFocus:_,onChange:k,value:h,...w}):(0,o.jsx)(x,{id:e,type:t,name:g,ref:y,className:"form-field__input",onBlur:M,onFocus:_,onChange:k,value:h,...w})})]})})})}},5818:(e,t,r)=>{r.d(t,{A:()=>v});var o=r(8732);r(2015);var a=r(9825),i=r.n(a),s=r(8737),n=r(5592),l=r(4683),d=r(3234),p=r.n(d),c=r(36),x=r.n(c),u=r(2770),f=r.n(u),g=r(2069);let m=f().div`
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`,b=f().label``,h=f().span``,w=f().div`
  color: ${e=>(e.success,"rgb(250, 251, 255)")};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background-color: ${e=>e.success?"rgb(14, 158, 105)":"rgb(246, 86, 86)"};
  font-size: 14px;
  font-family: "Roboto";
  color: rgb(250, 251, 255);
  left: ${e=>e.success?"17%":"0"};
  bottom: -60px;
  box-shadow: ${e=>e.success?"0px 5px 18.8px 1.2px rgba(17, 182, 122, 0.5)":"0px 5px 18.8px 1.2px rgba(246, 86, 86, 0.35)"};
  padding: 6px 16px;
  transition: all 250ms linear;
  width: 90%;
  text-align: center;
  z-index: 99;
  @media (max-width: 600px) {
    left: 5%;
    bottom: -110px;
  }
  // i {
  //   position: absolute;
  //   top: 4px;
  // }
  span {
    padding-left: 20px;
    padding-right: 20px;
  }
`,y=f().input`
  background-color: rgb(239, 245, 249);
  border: transparent;
  height: 48px;
  border-radius: 28px;
  padding-left: 30px;
  width: 316px;
  padding-right: 30px;
  @media (max-width: 600px) {
    width: 100%;
  }
  &::placeholder {
    font-size: 15px;
    font-family: "Roboto";
    color: rgb(142, 147, 154);
  }
  &:focus {
    outline: none;
  }
`;function v({label:e,id:t,helpText:r,error:a,success:i,defaultLabel:d,type:c,placeholder:u,name:f,value:v,onBlur:j,onFocus:M,onChange:_,className:k,errorMessage:C,successMessage:F,...L}){return(0,o.jsxs)(m,{className:`field-wrapper ${k||""}`.trim(),children:[e&&(0,o.jsx)(b,{htmlFor:t,children:(0,o.jsx)(g.FormattedMessage,{id:e,defaultMessage:e})}),(0,o.jsx)(g.FormattedMessage,{id:u,defaultMessage:u,children:e=>(0,o.jsx)(y,{placeholder:e,id:t,type:c,name:f,value:v,onChange:_,autoComplete:"off",...L})}),r&&(0,o.jsx)(h,{children:(0,o.jsx)(g.FormattedMessage,{id:r,defaultMessage:r})}),a&&(0,o.jsx)(x(),{duration:1e3,children:(0,o.jsxs)(w,{error:!0,className:"feedback",children:[(0,o.jsx)(s.Icon,{icon:l.ic_cancel}),(0,o.jsx)(g.FormattedMessage,{id:"errorMsg",defaultMessage:"errorMessage"})]})}),i&&(0,o.jsx)(p(),{bottom:!0,duration:2e3,children:(0,o.jsxs)(w,{success:!0,className:"feedback",children:[(0,o.jsx)(s.Icon,{icon:n.ic_check_circle}),(0,o.jsx)(g.FormattedMessage,{id:F,defaultMessage:"successMessage"})]})})]})}v.propTypes={className:i().string,label:i().string,value:i().string,type:i().oneOf(["text","email","number","password"]),onBlur:i().func,onFocus:i().func,onChange:i().func},y.defaultProps={type:"text"}}};