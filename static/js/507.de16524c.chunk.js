"use strict";(self.webpackChunkrajus_application_2=self.webpackChunkrajus_application_2||[]).push([[507],{1055:(e,t,s)=>{s.d(t,{b:()=>a});s(2791);var l=s(184);const a=e=>{let{fillColor:t="#000000",className:s="",...a}=e;return(0,l.jsx)("svg",{fill:t,xmlns:"http://www.w3.org/2000/svg",className:s,...a,children:(0,l.jsx)("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"})})}},2229:(e,t,s)=>{s.d(t,{zx:()=>n,Ei:()=>m,II:()=>f,x1:()=>g,aV:()=>p,jL:()=>N,iR:()=>I,rs:()=>_,xv:()=>A});var l=s(2791),a=s(184);const r={round:"rounded-[20px]",circle:"rounded-[50%]"},i={fill:{white_A700:"bg-white-A700 shadow-bs",indigo_700:"bg-indigo-700 shadow-bs text-white-A700",indigo_600:"bg-indigo-600 text-white-A700",gray_102:"bg-gray-102"},outline:{green_600:"border-2 border-green-600 border-solid",red_700:"border-2 border-red-700 border-solid",indigo_600:"border border-indigo-600 border-solid text-indigo-600",indigo_500:"border border-indigo-500 border-solid text-indigo-500"}},x={xs:"p-2",sm:"p-3",md:"p-[15px]",lg:"p-5"},n=e=>{var t;let{children:s,className:l="",leftIcon:n,rightIcon:m,shape:c="",size:d="",variant:o="",color:u="",...f}=e;return(0,a.jsxs)("button",{className:"".concat(l," ").concat(c&&r[c]||""," ").concat(d&&x[d]||""," ").concat(o&&(null===(t=i[o])||void 0===t?void 0:t[u])||""),...f,children:[!!n&&n,s,!!m&&m]})},m=e=>{let{className:t,src:s="defaultNoData.png",alt:l="testImg",...r}=e;return(0,a.jsx)("img",{className:t,src:s,alt:l,...r,loading:"lazy"})},c=e=>{let{errors:t=[],className:s=""}=e;return(null===t||void 0===t?void 0:t.length)>0&&(0,a.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(s),children:t.join(", ")})},d={gradient:{white_A700_26_white_A700_26:"bg-gradient  text-white-A700"},fill:{gray_101:"bg-gray-101",white_A700:"bg-white-A700 text-bluegray-900"}},o={round:"rounded-[15px]"},u={xs:"p-4",sm:"pb-[21px] sm:pl-5 pl-[21px] pt-[22px]"},f=l.forwardRef(((e,t)=>{var s;let{wrapClassName:l="",className:r="",name:i="",placeholder:x="",type:n="text",children:m,errors:f=[],label:g="",prefix:p,suffix:h,onChange:j,shape:v="",size:w="xs",variant:N="fill",color:y="",...b}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"".concat(l," \n              ").concat(o[v]||""," \n              ").concat((null===(s=d[N])||void 0===s?void 0:s[y])||""," \n              ").concat(u[w]||""),children:[!!g&&g,!!p&&p,(0,a.jsx)("input",{ref:t,className:"".concat(r," bg-transparent border-0"),type:n,name:i,onChange:e=>{var t;j&&j(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:x,...b}),!!h&&h]}),!!f&&(0,a.jsx)(c,{errors:f})]})})),g=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:t,...s})},p=e=>{let{children:t,className:s,...l}=e;return(0,a.jsx)("div",{className:s,...l,children:t})};var h=s(8359);const j={fill:{white_A700:"bg-white-A700 text-bluegray-900"}},v={round:"rounded-[15px]"},w={xs:"pl-4 py-4"},N=l.forwardRef(((e,t)=>{var s;let{children:r,placeholder:i="Select",className:x="",options:n=[],isSearchable:m=!1,placeholderClassName:d="",isMulti:o=!1,onChange:u,value:f="",errors:g=[],indicator:p,shape:N="round",size:y="xs",variant:b="fill",color:I="white_A700",...z}=e;const[_,R]=l.useState(f);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.ZP,{ref:t,options:n,className:"".concat(x," ").concat(N&&v[N]||""," ").concat(y&&w[y]||""," ").concat(b&&(null===(s=j[b])||void 0===s?void 0:s[I])||""),placeholder:(0,a.jsx)("div",{className:d,children:i}),isSearchable:m,isMulti:o,components:{IndicatorSeparator:()=>null,...p&&{DropdownIndicator:()=>p}},value:_,onChange:e=>{R(e),o?null===u||void 0===u||u((null===e||void 0===e?void 0:e.map((e=>e.value)))||[]):null===u||void 0===u||u(null===e||void 0===e?void 0:e.value)},styles:{container:e=>({...e,zIndex:0}),control:e=>({...e,backgroundColor:"transparent",border:"0 !important",boxShadow:"0 !important",minHeight:"auto","&:hover":{border:"0 !important"}}),option:(e,t)=>({...e,color:t.isSelected&&"#fafafa",backgroundColor:t.isSelected&&"#314ca3","&:hover":{backgroundColor:"#314ca3",color:"#314ca3"}}),singleValue:e=>({...e,color:"inherit"}),input:e=>({...e,color:"inherit",margin:"0",padding:"0"}),valueContainer:e=>({...e,padding:"0"}),dropdownIndicator:e=>({...e,paddingTop:"0px",paddingBottom:"0px"}),clearIndicator:e=>({...e,padding:"0"}),multiValueLabel:e=>({...e,padding:"0"}),menuPortal:e=>({...e,zIndex:999999}),placeholder:e=>({...e,margin:0})},menuPortalTarget:document.body,closeMenuOnScroll:e=>"scrollContainer"===e.target.id,...z}),(0,a.jsx)(c,{errors:g}),r]})}));N.defaultProps={placeholder:"Select",className:"",isSearchable:!1,placeholderClassName:"",isMulti:!1,value:"",shape:"round",variant:"fill",color:"white_A700",size:"xs",options:[],onChange:()=>{}};var y=s(1052),b=s.n(y);s(6505);const I=l.forwardRef(((e,t)=>{let{className:s,items:r,centerMode:i,magnifiedIndex:x=0,activeSlideCSS:n="scale-75",...m}=e;const c=i?r.map(((e,t)=>{var s;return(e=>(null===m||void 0===m?void 0:m.activeIndex)+x>=(null===r||void 0===r?void 0:r.length)?e!==(null===m||void 0===m?void 0:m.activeIndex)+x-(null===r||void 0===r?void 0:r.length):e!==m.activeIndex+x)(t)?l.cloneElement(e,{...e.props,className:[null===(s=e.props)||void 0===s?void 0:s.className,n].filter(Boolean).join(" ")}):l.cloneElement(e)})):r;return(0,a.jsx)("div",{className:s,children:(0,a.jsx)(b(),{items:c,disableDotsControls:!0,touchTracking:!0,...m,disableButtonsControls:!0,infinite:!0,mouseTracking:!0,ref:t})})}));var z=s(5102);const _=e=>{let{onColor:t,offColor:s,onHandleColor:r,offHandleColor:i,value:x,className:n,checkedIcon:m=(0,a.jsx)(a.Fragment,{}),uncheckedIcon:d=(0,a.jsx)(a.Fragment,{}),errors:o=[],onChange:u}=e;const[f,g]=l.useState(x);return(0,a.jsxs)("div",{className:"".concat(n),children:[(0,a.jsx)(z.Z,{checked:f,onChange:e=>{g(e),null===u||void 0===u||u(e)},onColor:t,offColor:s,onHandleColor:r,offHandleColor:i,checkedIcon:m,uncheckedIcon:d}),(0,a.jsx)(c,{errors:o})]})};_.defaultProps={value:!1,className:"",checkedIcon:(0,a.jsx)(a.Fragment,{}),onChange:()=>{},uncheckedIcon:(0,a.jsx)(a.Fragment,{})};const R={txtInterMedium18Bluegray400:"font-inter font-medium",txtInterRegular20:"font-inter font-normal",txtInterSemiBold22Bluegray800:"font-inter font-semibold",txtInterBold25:"font-bold font-inter",txtInterSemiBold25:"font-inter font-semibold",txtInterRegular12WhiteA700:"font-inter font-normal",txtInterMedium15Bluegray400:"font-inter font-medium",txtInterSemiBold28:"font-inter font-semibold",txtInterRegular15Bluegray400:"font-inter font-normal",txtLatoRegular12:"font-lato font-normal",txtInterMedium15Indigo500:"font-inter font-medium",txtInterRegular12Bluegray400:"font-inter font-normal",txtInterMedium18:"font-inter font-medium",txtInterRegular16Bluegray900:"font-inter font-normal",txtInterRegular16Bluegray400:"font-inter font-normal",txtInterMedium16Green600:"font-inter font-medium",txtInterMedium13:"font-inter font-medium",txtInterBold15:"font-bold font-inter",txtInterMedium16BlueA700:"font-inter font-medium",txtInterSemiBold20Bluegray900:"font-inter font-semibold",txtInterBold16:"font-bold font-inter",txtInterMedium16:"font-inter font-medium",txtInterMedium16Indigo600:"font-inter font-medium",txtInterSemiBold18:"font-inter font-semibold",txtInterMedium17:"font-inter font-medium",txtInterMedium16Red700:"font-inter font-medium",txtInterMedium14:"font-inter font-medium",txtInterSemiBold17:"font-inter font-semibold",txtInterMedium15:"font-inter font-medium",txtInterSemiBold22:"font-inter font-semibold",txtInterSemiBold20:"font-inter font-semibold",txtInterRegular12:"font-inter font-normal",txtInterRegular13:"font-inter font-normal",txtInterRegular14:"font-inter font-normal",txtInterMedium16Bluegray400:"font-inter font-medium",txtInterRegular15:"font-inter font-normal",txtInterMedium16Bluegray900:"font-inter font-medium",txtInterRegular16:"font-inter font-normal",txtInterBold16Indigo600:"font-bold font-inter"},A=e=>{let{children:t,className:s="",size:l,as:r,...i}=e;const x=r||"p";return(0,a.jsx)(x,{className:"text-left ".concat(s," ").concat(l&&R[l]),...i,children:t})}},5751:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var l=s(2791),a=s(1975),r=s(6871),i=s(2229),x=s(1055),n=s(184);const m=()=>{const e=(0,r.s0)(),[t,s]=l.useState("");return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto pb-[30px] w-full",children:[(0,n.jsx)(a.YE,{className:"!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-full",children:[(0,n.jsx)(i.Ei,{className:"h-10 md:h-auto object-cover w-[65%]",src:"images/img_logo.png",alt:"Logo"}),(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-[34px] items-center justify-start w-[72%] md:w-full",children:[(0,n.jsx)(i.x1,{className:"bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5"}),(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-start w-[78%]",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_home.svg",alt:"home"}),(0,n.jsx)(i.xv,{className:"text-indigo-600 text-lg",size:"txtInterMedium18",children:"Dashboard"})]})]}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/transaction"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[73%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_glyph.svg",alt:"Glyph"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Transactions"})]})}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/accounts"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[59%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_user.svg",alt:"user"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Accounts"})]})}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/investments"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[70%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_map.svg",alt:"map"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Investments"})]})}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/creditcards"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[72%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_file.svg",alt:"file"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Credit Cards"})]})}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/loan"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[45%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_question.svg",alt:"question"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Loans"})]})}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/services"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[56%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_service1.svg",alt:"serviceOne"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Services"})]})}),(0,n.jsx)("div",{className:"flex flex-col items-center justify-start p-[17px] w-full",children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-center w-3/4 md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_lightbulb.svg",alt:"lightbulb"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"My Privileges"})]})}),(0,n.jsx)("div",{className:"common-pointer flex flex-col items-start justify-start p-[17px] w-full",onClick:()=>e("/settingeditprofile"),children:(0,n.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-1/2 md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[25px] w-[25px]",src:"images/img_settings.svg",alt:"settings"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-lg",size:"txtInterMedium18Bluegray400",children:"Setting"})]})})]})]})}),(0,n.jsxs)("div",{className:"flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full",children:[(0,n.jsxs)("div",{className:"bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full",children:[(0,n.jsx)(i.xv,{className:"ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900",size:"txtInterSemiBold28",children:"Overview"}),(0,n.jsx)(i.II,{name:"GroupEight",placeholder:"Search for something",value:t,onChange:e=>s(e),className:"!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-[15px] text-left w-full",wrapClassName:"flex md:flex-1 md:ml-[0] ml-[471px] md:mt-0 my-[5px] rounded-[25px] w-[23%] md:w-full",prefix:(0,n.jsx)(i.Ei,{className:"cursor-pointer h-5 ml-[25px] mr-[15px] my-[15px]",src:"images/img_search.svg",alt:"search"}),suffix:(0,n.jsx)(x.b,{fillColor:"#888ea2",className:"cursor-pointer h-5 my-auto",onClick:()=>s(""),style:{visibility:(null===t||void 0===t?void 0:t.length)<=0?"hidden":"visible"},height:20,width:20,viewBox:"0 0 20 20"}),color:"gray_101"}),(0,n.jsx)(i.zx,{className:"flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]",shape:"circle",color:"gray_102",size:"sm",variant:"fill",children:(0,n.jsx)(i.Ei,{className:"h-[25px]",src:"images/img_settings_50X50.svg",alt:"settings One"})}),(0,n.jsx)(i.zx,{className:"flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]",shape:"circle",color:"gray_102",size:"sm",variant:"fill",children:(0,n.jsx)(i.Ei,{className:"h-[25px]",src:"images/img_notification.svg",alt:"notification"})}),(0,n.jsx)(i.Ei,{className:"h-[60px] md:h-auto md:ml-[0] ml-[35px] rounded-[50%] w-[60px]",src:"images/img_ellipse1.png",alt:"EllipseOne"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-start w-[94%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex md:flex-col flex-row gap-[30px] items-center justify-between w-full",children:[(0,n.jsx)("div",{className:"flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center justify-start w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row sm:gap-10 items-center justify-between w-full",children:[(0,n.jsx)(i.xv,{className:"text-[22px] text-bluegray-900 sm:text-lg md:text-xl",size:"txtInterSemiBold22",children:"My Cards"}),(0,n.jsx)(i.xv,{className:"common-pointer text-[17px] text-bluegray-900",size:"txtInterSemiBold17",onClick:()=>e("/creditcards"),children:"See All"})]}),(0,n.jsxs)("div",{className:"flex md:flex-col flex-row gap-[30px] items-center justify-between w-full",children:[(0,n.jsxs)("div",{className:"bg-indigo-600 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-[29px] items-start justify-start w-[87%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row items-start justify-between w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-white-A700 text-xs",size:"txtLatoRegular12",children:"Balance"}),(0,n.jsx)(i.xv,{className:"mt-1 text-white-A700 text-xl",size:"txtInterRegular20",children:"$5,756"})]}),(0,n.jsx)(i.Ei,{className:"h-[34px] md:h-auto object-cover w-[34px]",src:"images/img_chipcard.png",alt:"ChipCard"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-white-A700_b2 text-xs",size:"txtInterRegular12",children:"CARD HOLDER"}),(0,n.jsx)(i.xv,{className:"mt-1 text-[15px] text-white-A700",size:"txtInterRegular15",children:"Eddy Cusuma"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-white-A700_b2 text-xs",size:"txtInterRegular12",children:"VALID THRU"}),(0,n.jsx)(i.xv,{className:"mt-1 text-[15px] text-white-A700",size:"txtInterRegular15",children:"12/22"})]})]})]}),(0,n.jsx)(i.II,{name:"Group319",placeholder:"3778 **** **** 1234",className:"leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:text-lg text-[22px] text-left w-full",wrapClassName:"flex rounded-bl-[25px] rounded-br-[25px] w-full",suffix:(0,n.jsx)(i.Ei,{className:"ml-[35px] mr-6 my-5",src:"images/img_contrast.svg",alt:"contrast"}),size:"sm",variant:"gradient",color:"white_A700_26_white_A700_26"})]}),(0,n.jsxs)("div",{className:"bg-indigo-500 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-[29px] items-start justify-start w-[87%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row items-start justify-between w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-white-A700 text-xs",size:"txtLatoRegular12",children:"Balance"}),(0,n.jsx)(i.xv,{className:"mt-1 text-white-A700 text-xl",size:"txtInterRegular20",children:"$5,756"})]}),(0,n.jsx)(i.Ei,{className:"h-[34px] md:h-auto object-cover w-[34px]",src:"images/img_chipcard.png",alt:"ChipCard One"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-white-A700_b2 text-xs",size:"txtInterRegular12",children:"CARD HOLDER"}),(0,n.jsx)(i.xv,{className:"mt-1 text-[15px] text-white-A700",size:"txtInterRegular15",children:"Eddy Cusuma"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-white-A700_b2 text-xs",size:"txtInterRegular12",children:"VALID THRU"}),(0,n.jsx)(i.xv,{className:"mt-1 text-[15px] text-white-A700",size:"txtInterRegular15",children:"12/22"})]})]})]}),(0,n.jsx)(i.II,{name:"Group319 One",placeholder:"3778 **** **** 1234",className:"leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:text-lg text-[22px] text-left w-full",wrapClassName:"flex rounded-bl-[25px] rounded-br-[25px] w-full",suffix:(0,n.jsx)(i.Ei,{className:"ml-[35px] mr-6 my-5",src:"images/img_contrast.svg",alt:"contrast"}),size:"sm",variant:"gradient",color:"white_A700_26_white_A700_26"})]})]})]})}),(0,n.jsxs)("div",{className:"flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[22px] text-bluegray-900 sm:text-lg md:text-xl",size:"txtInterSemiBold22",children:"Recent Transaction"}),(0,n.jsxs)(i.aV,{className:"bg-white-A700 flex flex-col gap-2.5 items-center p-6 sm:px-5 rounded-[25px] w-full",orientation:"vertical",children:[(0,n.jsxs)("div",{className:"flex flex-1 flex-row items-center justify-start w-full",children:[(0,n.jsx)(i.zx,{className:"flex h-[55px] items-center justify-center rounded-[50%] w-[55px]",color:"gray_102",size:"sm",variant:"fill",children:(0,n.jsx)(i.Ei,{className:"h-7",src:"images/img_videocamera.svg",alt:"videocamera"})}),(0,n.jsxs)("div",{className:"flex flex-col gap-[7px] items-start justify-start ml-[17px]",children:[(0,n.jsx)(i.xv,{className:"text-base text-bluegray-600",size:"txtInterMedium16",children:"Deposit from my Card"}),(0,n.jsx)(i.xv,{className:"text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"28 January 2021"})]}),(0,n.jsx)(i.xv,{className:"ml-[13px] text-base text-red-700",size:"txtInterMedium16Red700",children:"-$850"})]}),(0,n.jsxs)("div",{className:"flex flex-1 flex-row items-center justify-start w-full",children:[(0,n.jsx)(i.zx,{className:"flex h-[55px] items-center justify-center rounded-[50%] w-[55px]",color:"gray_102",size:"sm",variant:"fill",children:(0,n.jsx)(i.Ei,{className:"h-7",src:"images/img_link.svg",alt:"link"})}),(0,n.jsxs)("div",{className:"flex flex-col gap-[7px] items-center justify-start ml-[17px]",children:[(0,n.jsx)(i.xv,{className:"text-base text-bluegray-600",size:"txtInterMedium16",children:"Deposit Paypal"}),(0,n.jsx)(i.xv,{className:"text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"25 January 2021"})]}),(0,n.jsx)(i.xv,{className:"ml-[46px] text-base text-green-600",size:"txtInterMedium16Green600",children:"+$2,500"})]}),(0,n.jsxs)("div",{className:"flex flex-1 flex-row items-center justify-start w-full",children:[(0,n.jsx)(i.zx,{className:"flex h-[55px] items-center justify-center rounded-[50%] w-[55px]",color:"gray_102",size:"sm",variant:"fill",children:(0,n.jsx)(i.Ei,{className:"h-7",src:"images/img_clock.svg",alt:"clock"})}),(0,n.jsxs)("div",{className:"flex flex-col gap-[7px] items-start justify-start ml-[17px]",children:[(0,n.jsx)(i.xv,{className:"text-base text-bluegray-600",size:"txtInterMedium16",children:"Jemi Wilson"}),(0,n.jsx)(i.xv,{className:"text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"21 January 2021"})]}),(0,n.jsx)(i.xv,{className:"ml-12 text-base text-green-600",size:"txtInterMedium16Green600",children:"+$5,400"})]})]})]})]}),(0,n.jsxs)("div",{className:"flex md:flex-col flex-row gap-[30px] items-center justify-between w-full",children:[(0,n.jsxs)("div",{className:"flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[66%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[22px] text-bluegray-900 sm:text-lg md:text-xl",size:"txtInterSemiBold22",children:"Weekly Activity"}),(0,n.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-[22px] items-end justify-start p-7 sm:px-5 rounded-[25px] w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-[30px] items-center justify-end w-[30%] md:w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-2.5 items-start justify-start w-[38%]",children:[(0,n.jsx)("div",{className:"bg-indigo-200 h-[15px] rounded-[50%] w-[15px]"}),(0,n.jsx)(i.xv,{className:"text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"Diposit"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-2.5 items-start justify-start w-[47%]",children:[(0,n.jsx)("div",{className:"bg-indigo-600 h-[15px] rounded-[50%] w-[15px]"}),(0,n.jsx)(i.xv,{className:"text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"Withdraw"})]})]}),(0,n.jsx)("div",{className:"flex flex-col items-center justify-start mr-0.5 w-[99%] md:w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[9px] justify-start w-full",children:[(0,n.jsxs)("div",{className:"flex md:flex-col flex-row gap-2.5 items-center justify-between w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-[21px] items-start justify-start",children:[(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"500"}),(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"400"}),(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"300"}),(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"200"}),(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"100"}),(0,n.jsx)(i.xv,{className:"ml-3.5 md:ml-[0] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"0"})]}),(0,n.jsx)(i.Ei,{className:"h-[186px]",src:"images/img_group899.svg",alt:"Group899"})]}),(0,n.jsxs)("div",{className:"flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[72px] w-[84%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Sat"}),(0,n.jsx)(i.xv,{className:"sm:ml-[0] ml-[67px] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Sun"}),(0,n.jsx)(i.xv,{className:"sm:ml-[0] ml-[65px] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Mon"}),(0,n.jsx)(i.xv,{className:"sm:ml-[0] ml-[65px] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Tue"}),(0,n.jsx)(i.xv,{className:"ml-16 sm:ml-[0] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Wed"}),(0,n.jsx)(i.xv,{className:"ml-16 sm:ml-[0] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Thu"}),(0,n.jsx)(i.xv,{className:"h-4 sm:ml-[0] ml-[70px] text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"Fri"})]})]})})]})]}),(0,n.jsxs)("div",{className:"flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[32%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[22px] text-bluegray-900 sm:text-lg md:text-xl",size:"txtInterSemiBold22",children:"Expense Statistics"}),(0,n.jsx)("div",{className:"bg-white-A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded-[25px] w-full",children:(0,n.jsxs)("div",{className:"md:h-[186px] h-[259px] relative w-[94%]",children:[(0,n.jsx)("div",{className:"absolute bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start left-[7%] p-[33px] sm:px-5 top-[0]",style:{backgroundImage:"url('images/img_group900.svg')"},children:(0,n.jsxs)(i.xv,{className:"leading-[18.00px] mb-[22px] text-[13px] text-center text-white-A700",size:"txtInterMedium13",children:[(0,n.jsx)("span",{className:"text-white-A700 font-inter text-base font-bold",children:(0,n.jsxs)(n.Fragment,{children:["30%",(0,n.jsx)("br",{})]})}),(0,n.jsx)("span",{className:"text-white-A700 font-inter font-bold",children:"Entertainment"})]})}),(0,n.jsx)("div",{className:"absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[189px] items-center justify-start left-[0] p-3.5",style:{backgroundImage:"url('images/img_group903.svg')"},children:(0,n.jsxs)(i.xv,{className:"leading-[18.00px] my-[59px] text-[13px] text-center text-white-A700",size:"txtInterMedium13",children:[(0,n.jsx)("span",{className:"text-white-A700 font-inter text-base font-bold",children:(0,n.jsxs)(n.Fragment,{children:["20%",(0,n.jsx)("br",{})]})}),(0,n.jsx)("span",{className:"text-white-A700 font-inter font-bold",children:"Investment"})]})}),(0,n.jsx)("div",{className:"absolute bg-cover bg-no-repeat flex flex-col h-[102px] items-end justify-end p-1.5 right-[0] top-[11%]",style:{backgroundImage:"url('images/img_group901.svg')"},children:(0,n.jsxs)(i.xv,{className:"leading-[18.00px] mr-[19px] mt-12 text-[13px] text-center text-white-A700",size:"txtInterMedium13",children:[(0,n.jsx)("span",{className:"text-white-A700 font-inter text-base font-bold",children:(0,n.jsxs)(n.Fragment,{children:["15%",(0,n.jsx)("br",{})]})}),(0,n.jsx)("span",{className:"text-white-A700 font-inter font-bold",children:"Bill Expense"})]})}),(0,n.jsx)("div",{className:"absolute bg-indigo-200 bottom-[0] flex flex-col h-[119px] items-center justify-start p-[23px] sm:px-5 right-[12%] w-[119px]",children:(0,n.jsxs)(i.xv,{className:"leading-[18.00px] mb-[33px] text-[13px] text-center text-white-A700",size:"txtInterMedium13",children:[(0,n.jsx)("span",{className:"text-white-A700 font-inter text-base font-bold",children:(0,n.jsxs)(n.Fragment,{children:["35%",(0,n.jsx)("br",{})]})}),(0,n.jsx)("span",{className:"text-white-A700 font-inter font-bold",children:"Others"})]})})]})})]})]}),(0,n.jsxs)("div",{className:"flex md:flex-col flex-row gap-[30px] items-center justify-between w-full",children:[(0,n.jsxs)("div",{className:"flex md:flex-1 flex-col gap-5 items-start justify-start w-[41%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[22px] text-bluegray-800 sm:text-lg md:text-xl",size:"txtInterSemiBold22Bluegray800",children:"Quick Transfer"}),(0,n.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-[29px] items-center justify-center p-[25px] sm:px-5 rounded-[25px] w-full",children:[(0,n.jsxs)("div",{className:"flex sm:flex-col flex-row gap-[33px] items-center justify-between mt-2.5 w-full",children:[(0,n.jsxs)(i.aV,{className:"sm:flex-col flex-row gap-[30px] grid grid-cols-3",orientation:"horizontal",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[70px] md:h-auto rounded-[50%] w-[70px]",src:"images/img_ellipse18.png",alt:"EllipseEighteen"}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-indigo-700",size:"txtInterBold16",children:"Livia Bator"}),(0,n.jsx)(i.xv,{className:"mt-[5px] text-[15px] text-bluegray-400",size:"txtInterBold15",children:"CEO"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[70px] md:h-auto rounded-[50%] w-[70px]",src:"images/img_ellipse19.png",alt:"EllipseNineteen"}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-bluegray-800",size:"txtInterRegular16",children:"Randy Press"}),(0,n.jsx)(i.xv,{className:"mt-[5px] text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"Director"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[70px] md:h-auto rounded-[50%] w-[70px]",src:"images/img_ellipse17.png",alt:"EllipseSeventeen"}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-bluegray-800",size:"txtInterRegular16",children:"Workman"}),(0,n.jsx)(i.xv,{className:"mt-[5px] text-[15px] text-bluegray-400",size:"txtInterRegular15Bluegray400",children:"Designer"})]})]})]}),(0,n.jsx)(i.zx,{className:"flex h-[50px] items-center justify-center mb-9 sm:mt-0 mt-[41px] w-[50px]",shape:"circle",color:"white_A700",size:"sm",variant:"fill",children:(0,n.jsx)(i.Ei,{className:"h-6",src:"images/img_arrowright_bluegray_400.svg",alt:"arrowright"})})]}),(0,n.jsxs)("div",{className:"flex sm:flex-col flex-row gap-[27px] items-center justify-between mb-2.5 w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-bluegray-400",size:"txtInterRegular16Bluegray400",children:"Write Amount"}),(0,n.jsxs)("div",{className:"bg-gray-102 flex sm:flex-1 flex-row items-center justify-between sm:pl-5 pl-[30px] rounded-[25px] w-[68%] sm:w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-indigo-700",size:"txtInterBold16",children:"525.50"}),(0,n.jsx)(i.zx,{className:"cursor-pointer font-medium leading-[normal] min-w-[125px] rounded-[25px] text-base text-center",color:"indigo_700",size:"md",variant:"fill",children:"Send"})]})]})]})]}),(0,n.jsxs)("div",{className:"flex md:flex-1 flex-col gap-5 items-start justify-start w-[58%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[22px] text-bluegray-900 sm:text-lg md:text-xl",size:"txtInterSemiBold22",children:"Balance History"}),(0,n.jsxs)("div",{className:"bg-white-A700 md:h-[205px] h-[276px] sm:h-[349px] p-5 relative rounded-[25px] w-full",children:[(0,n.jsx)(i.Ei,{className:"h-[185px] ml-auto mr-[5px] mt-[15px] w-[87%]",src:"images/img_group.svg",alt:"Group"}),(0,n.jsxs)("div",{className:"absolute md:h-[205px] h-[216px] sm:h-[349px] inset-[0] justify-center m-auto w-[93%] sm:w-full",children:[(0,n.jsxs)("div",{className:"absolute flex flex-col gap-9 items-start justify-start left-[0] pl-[3px] top-[0] w-[8%]",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-2 items-end justify-between w-[95%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"800"}),(0,n.jsx)("div",{className:"bg-bluegray-400 h-px my-1 w-[16%]"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-2 items-end justify-between w-[95%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"600"}),(0,n.jsx)("div",{className:"bg-bluegray-400 h-px my-1 w-[16%]"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-2 items-end justify-between w-[98%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"400"}),(0,n.jsx)("div",{className:"bg-bluegray-400 h-px my-1 w-[16%]"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-2 items-start justify-between w-[93%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-[13px] text-bluegray-400",size:"txtInterRegular13",children:"200"}),(0,n.jsx)("div",{className:"bg-bluegray-400 h-px my-[5px] w-[17%]"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-[9px] items-start justify-end ml-4 md:ml-[0] w-[56%] md:w-full",children:[(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-xs",size:"txtInterRegular12Bluegray400",children:"0"}),(0,n.jsx)("div",{className:"bg-bluegray-400 h-px my-1 w-[28%]"})]})]}),(0,n.jsxs)("div",{className:"absolute bottom-[0] flex flex-col items-start justify-start right-[0] w-[93%]",children:[(0,n.jsx)(i.Ei,{className:"h-[177px] md:h-auto object-cover w-full",src:"images/img_vector.png",alt:"Vector Five"}),(0,n.jsx)("div",{className:"flex flex-col items-center justify-start mt-1 w-[91%] md:w-full",children:(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,n.jsxs)("div",{className:"flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[95%] md:w-full",children:[(0,n.jsx)(i.Ei,{className:"h-1 w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group One"}),(0,n.jsx)(i.Ei,{className:"h-1 sm:ml-[0] ml-[78px] w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group Two"}),(0,n.jsx)(i.Ei,{className:"h-1 sm:ml-[0] ml-[78px] w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group Three"}),(0,n.jsx)(i.Ei,{className:"h-1 sm:ml-[0] ml-[78px] w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group Four"}),(0,n.jsx)(i.Ei,{className:"h-1 sm:ml-[0] ml-[79px] w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group Five"}),(0,n.jsx)(i.Ei,{className:"h-1 sm:ml-[0] ml-[78px] w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group Six"}),(0,n.jsx)(i.Ei,{className:"h-1 sm:ml-[0] ml-[78px] w-[1%]",src:"images/img_group_bluegray_400.svg",alt:"Group Seven"})]}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-between mt-[3px] w-full",children:[(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:"Jul"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:"Aug"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:"Sep"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:"Oct"}),(0,n.jsxs)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:["Nov"," "]}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:"Dec"}),(0,n.jsx)(i.xv,{className:"text-bluegray-400 text-sm",size:"txtInterRegular14",children:"Jan"})]})]})})]})]})]})]})]})]})]})]})})}}}]);
//# sourceMappingURL=507.de16524c.chunk.js.map