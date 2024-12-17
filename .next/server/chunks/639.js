exports.id=639,exports.ids=[639],exports.modules={562:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});let s=[{id:"en",language:"en",icon:"/_next/static/media/us.4bdf398b.svg"},{id:"de",language:"de",icon:"/_next/static/media/germany.da7b4347.svg"},{id:"es",language:"es",icon:"/_next/static/media/spain.0e1c9862.svg"},{id:"ar",language:"ar",icon:"/_next/static/media/saudi.b562f264.png"},{id:"zh",language:"zh",icon:"/_next/static/media/china.0f35e2e0.svg"}]},8741:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});let s=(0,i(2015).createContext)({})},1899:(e,t,i)=>{"use strict";i.d(t,{A:()=>h});var s=i(8732),a=i(2015),n=i(8741);let r={lang:"en"};function o(e,t){return"CURRENT_LANGUAGE"===t.type?{...e,lang:t.payload}:e}var l=i(2069),d=i(2770),c=i.n(d);let p=c().div`
  font-family: 'Roboto', sans-serif;
  ${({lang:e})=>("ar"===e||"he"===e)&&`
    font-family: 'Cairo', sans-serif;    
    `}
`;i(8899),i(8186),i(7698),i(3950),i(4733),i(7535);let h=({children:e,messages:t})=>{let[i,d]=(0,a.useReducer)(o,r),c=e=>{d({type:"CURRENT_LANGUAGE",payload:e}),localStorage.setItem("lang",e)};return(0,a.useEffect)(()=>{let e=localStorage.getItem("lang");e?c(e):c(navigator.language.split("-")[0])},[]),(0,s.jsx)(n.A.Provider,{value:{state:i,toggleLanguage:c,dispatch:d},children:(0,s.jsx)(l.IntlProvider,{locale:i.lang,messages:t[i.lang],children:(0,s.jsx)(p,{lang:i.lang,children:e})})})}},7165:(e,t,i)=>{"use strict";i.d(t,{A:()=>y});var s=i(8732),a=i(2015),n=i(2770),r=i.n(n),o=i(3234),l=i.n(o),d=i(2069);let c=(0,n.keyframes)`
  from {
    transform: translateY(5px) scale(.8);
  }
  to{
    transform: translateY(0px) scale(1);
  }
`,p=r().div`
  position: fixed;
  bottom: 33px;
  right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 9;
  background: rgb(47, 128, 237);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.stopAnimation {
    animation: 0;
    img {
      width: 22px;
    }
  }
  @media (min-width: 768px) {
    animation: 0.7s ${c} infinite ease-in-out;
    animation-direction: alternate;
  }
  @media (max-width: 767px) {
    bottom: 15px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    height: 30px;
    width: 40px;
    margin-bottom: 0;
    cursor: pointer;
    @media (max-width: 767px) {
      height: 20px;
      width: 25px;
    }
    .envato-buy-button {
      width: 100%;
      border-radius: 0;
    }
  }
`;var h=i(8741);let x={src:"/_next/static/media/cross-btn.9dbaf758.svg"},g={src:"/_next/static/media/language-btn.ebe2d85b.svg"},m=(e,...t)=>e.addEventListener(...t),u=(e,...t)=>e.removeEventListener(...t),f=["mousedown","touchstart"],v=(e,t,i=f)=>{let s=(0,a.useRef)(t);(0,a.useEffect)(()=>{s.current=t},[t]),(0,a.useEffect)(()=>{let t=t=>{let{current:i}=e;i&&!i.contains(t.target)&&s.current(t)};for(let e of i)m(document,e,t);return()=>{for(let e of i)u(document,e,t)}},[i,e])};function y({languageConfig:e}){let{state:{lang:t},toggleLanguage:i}=(0,a.useContext)(h.A),n=(0,a.useRef)(),[r,o]=(0,a.useState)(!1);v(n,function(){o(!1)});let c=(0,a.useCallback)(()=>o(e=>!e),[]);return(0,s.jsxs)(A,{ref:n,children:[r&&(0,s.jsx)(l(),{bottom:!0,duration:800,children:(0,s.jsxs)(w,{className:r?"active":"",children:[(0,s.jsx)(k,{children:(0,s.jsx)(d.FormattedMessage,{id:"headerText",defaultMessage:"Change Language"})}),(0,s.jsx)(N,{children:(0,s.jsx)(b,{lang:t,toggleLanguage:i,config:e})}),(0,s.jsxs)(C,{children:[(0,s.jsx)(d.FormattedMessage,{id:"languageText",defaultMessage:"Language"}),(0,s.jsx)("span",{children:": "}),(0,s.jsx)(d.FormattedMessage,{id:"languageName",defaultMessage:"Country Name"})]})]})}),(0,s.jsx)(p,{onClick:c,className:r?"stopAnimation":"",children:(0,s.jsx)("img",{src:r?x.src:g.src,alt:"switcher"})})]})}function b({toggleLanguage:e,lang:t,config:i=[]}){let a=t=>{e(t.target.value),console.log(t.target.value,"switcher")};return i.map(e=>{let i=e.id===t;return(0,s.jsx)(j,{className:i?"active":"",value:e.language,onClick:a,children:(0,s.jsx)("img",{src:e.icon,alt:"flag",style:{pointerEvents:"none"}})},e.id)})}let j=r().button``,w=r().div`
  position: absolute;
  bottom: 90px;
  right: 4px;
  width: 370px;
  height: 185px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(73, 129, 206, 0.15);
  background: #fff;
  @media (max-width: 480px) {
    width: 320px;
    height: 195px;
    right: 0;
    bottom: 45px;
  }
  @media (max-width: 320px) {
    width: 300px;
    right: -10px;
  }
`,k=r().h3`
  background: #f0f4f8;
  color: #fff;
  margin-bottom: 0;
  padding: 20px 30px;
  font-size: 20px;
  margin-top: 0;
  font-size: 18px;
  font-family: "DM Sans";
  color: rgb(23, 28, 45);
  font-weight: 700;
`,N=r().div`
  padding: 20px 30px 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    padding: 25px 30px 0px;
  }
  button {
    border: 0;
    padding: 0;
    outline: 0;
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    overflow: hidden;
    @media (max-width: 480px) {
      margin-bottom: 10px;
    }
    &.active {
      border: 0;
      img {
        border-radius: 50%;
        border: 4px solid rgb(47, 128, 237);
        object-fit: cover;
      }
    }
    img {
      margin-bottom: 0;
      display: block;
      width: 45px;
      height: 45px;
      @media (max-width: 480px) {
        width: 38px;
        height: 38px;
      }
    }
  }
`,C=r().div`
  position: relative;
  background: #fff;
  padding-left: 30px;
  padding-top: 8px;
  padding-right: 30px;
  span {
    font-size: 16px;
    font-family: "DM Sans";
    color: rgb(23, 28, 45);
    font-weight: 700;
    &:nth-child(1) {
      font-weight: 500;
      color: rgb(23, 28, 45);
    }
  }
`,A=r().div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
`},6878:(e,t,i)=>{"use strict";i.d(t,{A:()=>c});var s=i(8732),a=i(2015),n=i.n(a),r=i(2069);let o=({position:e,digit:t})=>(0,s.jsx)("div",{className:e,children:(0,s.jsx)("span",{children:t})}),l=({digit:e,unit:t="time",countdown:i})=>{let a,n=e;return i&&(a=e+1,a="hours"!==t?60===a?59:a:24===a?23:a),n<10&&(n=`0${n}`),a<10&&(a=`0${a}`),(0,s.jsxs)("div",{className:"NormalUnitContainer",children:[(0,s.jsx)(o,{position:"NormalupperCard",digit:n}),(0,s.jsx)("div",{className:"digitLabel",children:(0,s.jsx)("label",{children:(0,s.jsx)(r.FormattedMessage,{id:t,defaultValue:"unit"})})})]})};class d extends n().Component{constructor(e){super(e),this.state={days:0,hours:0,minutes:0,seconds:0}}componentDidMount(){this.timerID=setInterval(()=>this.updateTime(),50)}componentWillUnmount(){clearInterval(this.timerID)}updateTime(){let e,t,i,s,a;let{days:n,hours:r,minutes:o,seconds:l}=(t=Math.floor((e=Date.parse(this.props.countdown)-Date.parse(new Date))/864e5),i=Math.floor(e/36e5%24),s=Math.floor(e/1e3/60%60),a=Math.floor(e/1e3%60),{time:e,days:t,hours:i,minutes:s,seconds:a});n!==this.state.days&&this.setState({days:n}),r!==this.state.hours&&this.setState({hours:r}),o!==this.state.minutes&&this.setState({minutes:o}),l!==this.state.seconds&&this.setState({seconds:l})}render(){let{days:e,hours:t,minutes:i,seconds:a}=this.state,{countdown:n,divider:r}=this.props;return(0,s.jsxs)("div",{className:"NormalClock",children:[(0,s.jsx)(l,{countdown:n,unit:"days",digit:e}),r?(0,s.jsx)("span",{className:"dividerColon",children:":"}):"",(0,s.jsx)(l,{countdown:n,unit:"hours",digit:t}),r?(0,s.jsx)("span",{className:"dividerColon",children:":"}):"",(0,s.jsx)(l,{countdown:n,unit:"minutes",digit:i}),r?(0,s.jsx)("span",{className:"dividerColon",children:":"}):"",(0,s.jsx)(l,{countdown:n,unit:"seconds",digit:a})]})}}let c=d},2397:(e,t,i)=>{"use strict";i.d(t,{m:()=>n,T:()=>g});var s=i(2770),a=i.n(s);let n=a().div`
  max-width: 1200px;
  margin: 0 auto;
  width: 85%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`;var r=i(8732);i(2015);var o=i(1106),l=i.n(o),d=i(8737),c=i.n(d),p=i(2248);let h=a().div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,x=a().div`
  margin: 0 9px;
  a {
    color: #fff;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #3444f1;
    }
  }
`,g=({items:e=[],className:t,iconSize:i=22})=>e?(0,r.jsx)(h,{className:`social_profiles ${t||""}`.trim(),children:e.map(e=>(0,r.jsx)(x,{className:"social_profile_item",children:(0,r.jsx)(l(),{href:e.url||"#",children:(0,r.jsx)(c(),{icon:e.icon||p.socialDribbbleOutline,size:i})})},`social-item-${e.id}`))}):null},7195:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var s=i(8732),a=i(4953),n=i.n(a);let r=({children:e})=>(0,s.jsx)(s.Fragment,{children:e}),o=n()(()=>Promise.resolve(r),{ssr:!1})},2327:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var s=i(8732);function a({Component:e,pageProps:t}){return(0,s.jsx)(e,{...t})}i(745)},9407:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var s=i(8732),a=i(883),n=i.n(a),r=i(2770);class o extends n(){static async getInitialProps(e){let t=new r.ServerStyleSheet,i=e.renderPage;try{e.renderPage=()=>i({enhanceApp:e=>i=>t.collectStyles((0,s.jsx)(e,{...i}))});let a=await n().getInitialProps(e);return{...a,styles:(0,s.jsxs)(s.Fragment,{children:[a.styles,t.getStyleElement()]})}}finally{t.seal()}}render(){return(0,s.jsxs)(a.Html,{children:[(0,s.jsxs)(a.Head,{children:[(0,s.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"https://s3.amazonaws.com/redqteam.com/deadline/favicon/favicon.png"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=DM+Sans:400,400i,500,500i,700,700i&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:300,400,500,700,900&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Anton&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:700&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"})]}),(0,s.jsxs)("body",{children:[(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}}},745:()=>{}};