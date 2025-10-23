import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,k as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,w as E,x as D,y as O}from"./index-znbU-3nB.js";function k(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=k(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function A(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=k(e))&&(r&&(r+=` `),r+=t);return r}var j={data:``},M=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||j},N=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,P=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,I=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?I(o,a):a+`{`+I(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=I(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=I.p?I.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},L={},ee=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+ee(e[n]);return t}return e},R=(e,t,n,r,i)=>{let a=ee(e),o=L[a]||(L[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!L[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=N.exec(e.replace(P,``));)t[4]?r.shift():t[3]?(n=t[3].replace(F,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(F,` `).trim();return r[0]})(e):e;L[o]=I(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&L.g?L.g:null;return n&&(L.g=L[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(L[o],t,r,s),o},z=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:I(e,``):!1===e?``:e}return e+r+(a??``)},``);function B(e){let t=this||{},n=e.call?e(t.p):e;return R(n.unshift?n.raw?z(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,M(t.target),t.g,t.o,t.k)}B.bind({g:1}),B.bind({k:1});var V=typeof window>`u`;function H(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function U(e,t){let n=e.find(e=>e.routeId===t.id);return n?H(n):`gray`}function te(){let[e,t]=_(!1);return(V?u:b)(()=>{t(!0)}),e}var W=e=>{let t=Object.getOwnPropertyNames(Object(e)),n=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return`unable to stringify`}};function G(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var K={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{90:`e5`,70:`b3`,20:`33`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`},lineHeight:{xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`},weight:{normal:`400`,medium:`500`,semibold:`600`,bold:`700`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},border:{radius:{xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,full:`9999px`}},size:{0:`0px`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,5:`calc(var(--tsrd-font-size) * 1.25)`,8:`calc(var(--tsrd-font-size) * 2)`}},q=e=>{let{colors:t,font:n,size:r,alpha:i,border:a}=K,{fontFamily:o,lineHeight:s,size:c}=n,l=e?B.bind({target:e}):B;return{devtoolsPanelContainer:l`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>l`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?l`
          transition: none;
        `:l`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?l`
          pointer-events: auto;
          transform: translateY(0);
        `:l`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:l`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${o.sans};
      gap: ${K.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:l`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:l`
      display: flex;
      font-size: ${c.sm};
      font-family: ${o.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${c.xs};
      }
    `,dragHandle:l`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:l`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:l`
      padding: ${K.size[2]};
    `,row:l`
      display: flex;
      align-items: center;
      padding: ${K.size[2]} ${K.size[2.5]};
      gap: ${K.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:l`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${K.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${K.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:l`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${K.size[0]} ${K.size[2.5]};
      border-radius: ${a.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:l`
      color: ${t.yellow[300]};
    `,detailsContent:l`
      padding: ${K.size[1.5]} ${K.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:l`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${a.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[l`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${o.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=l`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=l`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(l`
          border-right: 1px solid ${K.colors.gray[500]};
        `),a},detailsHeaderInfo:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[l`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${a.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=l`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:l`
      flex: 1;
      line-height: ${s.xs};
    `,ageTicker:e=>{let n=[l`
        display: flex;
        gap: ${r[1]};
        font-size: ${c.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${s.xs};
      `];if(e){let e=l`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:l`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:l`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${s.xs};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[l`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${c.xs};
        line-height: ${s.xs};
      `];if(!e){let e=l`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:l`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:l`
      color: ${t.gray[400]};
      font-size: ${c.xs};
      line-height: ${s.xs};
    `,nestedRouteRow:e=>l`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:l`
      font-size: ${c.xs};
      line-height: ${s.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:l`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:l`
      padding: ${r[1]} ${r[2]};
      font-size: ${K.font.size.xs};
    `,maskedBadgeContainer:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:l`
      display: flex;
      flex-direction: column;
      padding: ${K.size[2]};
      font-size: ${K.font.size.xs};
      color: ${K.colors.gray[300]};
      line-height: ${K.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return l`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${K.border.radius.sm};
        font-weight: ${K.font.weight.normal};
        background-color: ${K.colors[n][900]}${K.alpha[90]};
        color: ${K.colors[n][300]};
        border: 1px solid ${K.colors[n][600]};
        margin-bottom: ${K.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:l`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:l`
      display: flex;
    `,mainCloseBtn:l`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${a.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>l`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?l`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:l`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:l`
      width: 1px;
      background: ${K.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:l`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:l`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:l`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:l`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:l`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:l`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${c.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function J(){let e=E(s),[t]=_(q(e));return t}var Y=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function X(e,t){let[n,r]=_();return u(()=>{let n=Y(e);r(n??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var ne=i(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),Z=i(`<div>`),re=i(`<button><span> `),ie=i(`<div><div><button> [<!> ... <!>]`),ae=i(`<button><span></span> 🔄 `),oe=i(`<span>:`),se=i(`<span>`),ce=({expanded:e,style:t={}})=>{let n=fe();return(()=>{var t=ne(),r=t.firstChild;return b(i=>{var a=n().expander,o=A(n().expanderIcon(e));return a!==i.e&&g(t,i.e=a),o!==i.t&&c(r,`class`,i.t=o),i},{e:void 0,t:void 0}),t})()};function le(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function ue(e){return Symbol.iterator in e}function Q({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:r,...i}){let[a,s]=_(!!t),c=()=>s(e=>!e),l=d(()=>typeof e()),u=d(()=>{let n=[],i=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};return Array.isArray(e())?n=e().map((e,t)=>i({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&ue(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>i({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>i({label:e,value:t}))),r?r(n):n}),f=d(()=>le(u(),n)),[p,m]=_([]),[h,v]=_(void 0),y=fe(),x=()=>{v(e()())},S=t=>w(Q,T({value:e,filterSubEntries:r},i,t));return(()=>{var t=Z();return o(t,(()=>{var t=d(()=>!!f().length);return()=>t()?[(()=>{var e=re(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>c(),o(e,w(ce,{get expanded(){return a()??!1}}),t),o(e,()=>i.label,t),o(t,()=>String(l).toLowerCase()===`iterable`?`(Iterable) `:``,n),o(t,()=>u().length,n),o(t,()=>u().length>1?`items`:`item`,null),b(n=>{var r=y().expandButton,i=y().info;return r!==n.e&&g(e,n.e=r),i!==n.t&&g(t,n.t=i),n},{e:void 0,t:void 0}),e})(),d(()=>d(()=>!!(a()??!1))()?d(()=>f().length===1)()?(()=>{var e=Z();return o(e,()=>u().map((e,t)=>S(e))),b(()=>g(e,y().subEntries)),e})():(()=>{var e=Z();return o(e,()=>f().map((e,t)=>(()=>{var r=ie(),i=r.firstChild,a=i.firstChild,s=a.firstChild,c=s.nextSibling,l=c.nextSibling.nextSibling;return l.nextSibling,a.$$click=()=>m(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),o(a,w(ce,{get expanded(){return p().includes(t)}}),s),o(a,t*n,c),o(a,t*n+n-1,l),o(i,(()=>{var n=d(()=>!!p().includes(t));return()=>n()?(()=>{var t=Z();return o(t,()=>e.map(e=>S(e))),b(()=>g(t,y().subEntries)),t})():null})(),null),b(e=>{var t=y().entry,n=A(y().labelButton,`labelButton`);return t!==e.e&&g(i,e.e=t),n!==e.t&&g(a,e.t=n),e},{e:void 0,t:void 0}),r})())),b(()=>g(e,y().subEntries)),e})():null)]:(()=>{var t=d(()=>l()===`function`);return()=>t()?w(Q,{get label(){return(()=>{var e=ae(),t=e.firstChild;return e.$$click=x,o(t,()=>i.label),b(()=>g(e,y().refreshValueBtn)),e})()},value:h,defaultExpanded:{}}):[(()=>{var e=oe(),t=e.firstChild;return o(e,()=>i.label,t),e})(),` `,(()=>{var t=se();return o(t,()=>W(e())),b(()=>g(t,y().value)),t})()]})()})()),b(()=>g(t,y().entry)),t})()}var de=e=>{let{colors:t,font:n,size:r}=K,{fontFamily:i,lineHeight:a,size:o}=n,s=e?B.bind({target:e}):B;return{entry:s`
      font-family: ${i.mono};
      font-size: ${o.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:s`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:s`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?s`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:s`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:s`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:s`
      color: ${t.purple[400]};
    `,subEntries:s`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:s`
      color: ${t.gray[500]};
      font-size: ${o[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:s`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${i.mono};
      font-size: ${o.xs};
    `}};function fe(){let e=E(s),[t]=_(de(e));return t}f([`click`]);var pe=i(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function me(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function he({match:e,router:t}){let n=J();if(!e)return null;let r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;let i=Date.now()-e.updatedAt,a=r.options.staleTime??t().options.defaultStaleTime??0,s=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=pe(),t=e.firstChild,r=t.nextSibling.nextSibling,c=r.nextSibling.nextSibling;return o(t,()=>me(i)),o(r,()=>me(a)),o(c,()=>me(s)),b(()=>g(e,A(n().ageTicker(i>a)))),e})()}var ge=i(`<button type=button>➔`);function _e({to:e,params:t,search:n,router:r}){let i=J();return(()=>{var a=ge();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},c(a,`title`,`Navigate to ${e}`),b(()=>g(a,i().navigateButton)),a})()}f([`click`]);var ve=i(`<button><div>TANSTACK</div><div>TanStack Router v1`),ye=i(`<div><div>`),be=i(`<code> `),$=i(`<code>`),xe=i(`<div><div role=button><div>`),Se=i(`<div>`),Ce=i(`<div><ul>`),we=i(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),Te=i(`<div><span>masked`),Ee=i(`<div role=button><div>`),De=i(`<li><div>`),Oe=i(`<li>This panel displays the most recent 15 navigations.`),ke=i(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),Ae=i(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),je=i(`<div>Loader Data`),Me=i(`<div><div><span>Search Params</span></div><div>`),Ne=i(`<span style=margin-left:0.5rem;>`),Pe=i(`<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">`),Fe=15;function Ie(e){let{className:t,...n}=e,r=J();return(()=>{var e=ve(),i=e.firstChild,a=i.nextSibling;return D(e,T(n,{get class(){return A(r().logo,t?t():``)}}),!1,!0),b(e=>{var t=r().tanstackLogo,n=r().routerLogo;return t!==e.e&&g(i,e.e=t),n!==e.t&&g(a,e.t=n),e},{e:void 0,t:void 0}),e})()}function Le(e){return(()=>{var t=ye(),n=t.firstChild;return t.style.setProperty(`display`,`flex`),t.style.setProperty(`align-items`,`center`),t.style.setProperty(`width`,`100%`),o(t,()=>e.left,n),n.style.setProperty(`flex-grow`,`1`),n.style.setProperty(`min-width`,`0`),o(n,()=>e.children),o(t,()=>e.right,null),b(()=>g(t,e.class)),t})()}function Re({routerState:e,router:i,route:a,isRoot:s,activeId:l,setActiveId:u}){let f=J(),p=d(()=>e().pendingMatches||e().matches),m=d(()=>e().matches.find(e=>e.routeId===a.id)),h=d(()=>{try{if(m()?.params){let e=m()?.params,n=a.path||t(a.id);if(n.startsWith(`$`)){let t=n.slice(1);if(e[t])return`(${e[t]})`}}return``}catch{return``}}),_=d(()=>{if(s||!a.path)return;let e=Object.assign({},...p().map(e=>e.params)),t=n({path:a.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:i().pathParamsDecodeCharMap});return t.isMissingParams?void 0:t.interpolatedPath});return(()=>{var n=xe(),v=n.firstChild,x=v.firstChild;return v.$$click=()=>{m()&&u(l()===a.id?``:a.id)},o(v,w(Le,{get class(){return A(f().routesRow(!!m()))},get left(){return w(y,{get when(){return _()},children:e=>w(_e,{get to(){return e()},router:i})})},get right(){return w(he,{get match(){return m()},router:i})},get children(){return[(()=>{var e=be(),n=e.firstChild;return o(e,()=>s?r:a.path||t(a.id),n),b(()=>g(e,f().code)),e})(),(()=>{var e=$();return o(e,h),b(()=>g(e,f().routeParamInfo)),e})()]}}),null),o(n,(()=>{var t=d(()=>!!a.children?.length);return()=>t()?(()=>{var t=Se();return o(t,()=>[...a.children].sort((e,t)=>e.rank-t.rank).map(t=>w(Re,{routerState:e,router:i,route:t,activeId:l,setActiveId:u}))),b(()=>g(t,f().nestedRouteRow(!!s))),t})():null})(),null),b(e=>{var t=`Open match details for ${a.id}`,n=A(f().routesRowContainer(a.id===l(),!!m())),r=A(f().matchIndicator(U(p(),a)));return t!==e.e&&c(v,`aria-label`,e.e=t),n!==e.t&&g(v,e.t=n),r!==e.a&&g(x,e.a=r),e},{e:void 0,t:void 0,a:void 0}),n})()}var ze=function({...t}){let{isOpen:n=!0,setIsOpen:i,handleDragStart:s,router:f,routerState:p,shadowDOMTarget:v,...y}=t,{onCloseClick:C}=a(),E=J(),{className:O,style:k,...j}=y;h(f,`No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually.`);let[M,N]=X(`tanstackRouterDevtoolsActiveTab`,`routes`),[P,F]=X(`tanstackRouterDevtoolsActiveRouteId`,``),[I,L]=_([]),[ee,R]=_(!1);u(()=>{let t=p().matches,n=t[t.length-1];if(!n)return;let r=e(()=>I()),i=r[0],a=i&&i.pathname===n.pathname&&JSON.stringify(i.search??{})===JSON.stringify(n.search??{});(!i||!a)&&(r.length>=Fe&&R(!0),L(e=>{let t=[n,...e];return t.splice(Fe),t}))});let z=d(()=>[...p().pendingMatches??[],...p().matches,...p().cachedMatches].find(e=>e.routeId===P()||e.id===P())),B=d(()=>Object.keys(p().location.search).length),V=d(()=>({...f(),state:p()})),U=d(()=>Object.fromEntries(G(Object.keys(V()),[`state`,`routesById`,`routesByPath`,`flatRoutes`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,V()[e]]).filter(e=>typeof e[1]!=`function`&&![`__store`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),te=d(()=>z()?.loaderData),W=d(()=>z()),K=d(()=>p().location.search);return(()=>{var e=we(),t=e.firstChild,n=t.firstChild,a=t.nextSibling,u=a.firstChild,h=u.nextSibling,_=h.firstChild,v=a.nextSibling,y=v.firstChild,L=y.firstChild;L.firstChild;var R=L.nextSibling,V=R.firstChild,G=R.nextSibling,q=G.firstChild,J=q.firstChild,Y=J.nextSibling,X=Y.nextSibling,ne=q.nextSibling,Z=G.nextSibling;return D(e,T({get class(){return A(E().devtoolsPanel,`TanStackRouterDevtoolsPanel`,O?O():``)},get style(){return k?k():``}},j),!1,!0),o(e,s?(()=>{var e=Se();return l(e,`mousedown`,s,!0),b(()=>g(e,E().dragHandle)),e})():null,t),t.$$click=e=>{i&&i(!1),C(e)},o(u,w(Ie,{"aria-hidden":!0,onClick:e=>{i&&i(!1),C(e)}})),o(_,w(Q,{label:`Router`,value:U,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),o(L,(()=>{var e=d(()=>!!p().location.maskedLocation);return()=>e()?(()=>{var e=Te(),t=e.firstChild;return b(n=>{var r=E().maskedBadgeContainer,i=E().maskedBadge;return r!==n.e&&g(e,n.e=r),i!==n.t&&g(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),o(V,()=>p().location.pathname),o(R,(()=>{var e=d(()=>!!p().location.maskedLocation);return()=>e()?(()=>{var e=$();return o(e,()=>p().location.maskedLocation?.pathname),b(()=>g(e,E().maskedLocation)),e})():null})(),null),J.$$click=()=>{N(`routes`)},Y.$$click=()=>{N(`matches`)},X.$$click=()=>{N(`history`)},o(Z,w(S,{get children(){return[w(m,{get when(){return M()===`routes`},get children(){return w(Re,{routerState:p,router:f,get route(){return f().routeTree},isRoot:!0,activeId:P,setActiveId:F})}}),w(m,{get when(){return M()===`matches`},get children(){var e=Se();return o(e,()=>(p().pendingMatches?.length?p().pendingMatches:p().matches)?.map((e,t)=>(()=>{var t=Ee(),n=t.firstChild;return t.$$click=()=>F(P()===e.id?``:e.id),o(t,w(Le,{get left(){return w(_e,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:f})},get right(){return w(he,{match:e,router:f})},get children(){var t=$();return o(t,()=>`${e.routeId===`__root__`?r:e.pathname}`),b(()=>g(t,E().matchID)),t}}),null),b(r=>{var i=`Open match details for ${e.id}`,a=A(E().matchRow(e===z())),o=A(E().matchIndicator(H(e)));return i!==r.e&&c(t,`aria-label`,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),e}}),w(m,{get when(){return M()===`history`},get children(){var e=Ce(),t=e.firstChild;return o(t,w(x,{get each(){return I()},children:(e,t)=>(()=>{var n=De(),i=n.firstChild;return o(n,w(Le,{get left(){return w(_e,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:f})},get right(){return w(he,{match:e,router:f})},get children(){var t=$();return o(t,()=>`${e.routeId===`__root__`?r:e.pathname}`),b(()=>g(t,E().matchID)),t}}),null),b(r=>{var a=A(E().matchRow(e===z())),o=A(E().matchIndicator(t()===0?`green`:`gray`));return a!==r.e&&g(n,r.e=a),o!==r.t&&g(i,r.t=o),r},{e:void 0,t:void 0}),n})()}),null),o(t,(()=>{var e=d(()=>!!ee());return()=>e()?(()=>{var e=Oe();return b(()=>g(e,E().historyOverflowContainer)),e})():null})(),null),e}})]}})),o(v,(()=>{var e=d(()=>!!p().cachedMatches.length);return()=>e()?(()=>{var e=ke(),t=e.firstChild,n=t.firstChild.nextSibling,r=t.nextSibling;return o(r,()=>p().cachedMatches.map(e=>(()=>{var t=Ee(),n=t.firstChild;return t.$$click=()=>F(P()===e.id?``:e.id),o(t,w(Le,{get left(){return w(_e,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:f})},get right(){return w(he,{match:e,router:f})},get children(){var t=$();return o(t,()=>`${e.id}`),b(()=>g(t,E().matchID)),t}}),null),b(r=>{var i=`Open match details for ${e.id}`,a=A(E().matchRow(e===z())),o=A(E().matchIndicator(H(e)));return i!==r.e&&c(t,`aria-label`,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),b(r=>{var i=E().cachedMatchesContainer,a=E().detailsHeader,o=E().detailsHeaderInfo;return i!==r.e&&g(e,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),o(e,(()=>{var e=d(()=>!!(z()&&z()?.status));return()=>e()?(()=>{var e=Ae(),t=e.firstChild,n=t.nextSibling,r=n.firstChild,i=r.firstChild,a=i.firstChild,s=i.nextSibling,c=s.firstChild.nextSibling,l=c.firstChild,u=s.nextSibling,f=u.firstChild.nextSibling,m=u.nextSibling,h=m.firstChild.nextSibling,_=n.nextSibling,v=_.nextSibling;return o(a,(()=>{var e=d(()=>!!(z()?.status===`success`&&z()?.isFetching));return()=>e()?`fetching`:z()?.status})()),o(l,()=>z()?.id),o(f,(()=>{var e=d(()=>!!p().pendingMatches?.find(e=>e.id===z()?.id));return()=>e()?`Pending`:p().matches.find(e=>e.id===z()?.id)?`Active`:`Cached`})()),o(h,(()=>{var e=d(()=>!!z()?.updatedAt);return()=>e()?new Date(z()?.updatedAt).toLocaleTimeString():`N/A`})()),o(e,(()=>{var e=d(()=>!!te());return()=>e()?[(()=>{var e=je();return b(()=>g(e,E().detailsHeader)),e})(),(()=>{var e=Se();return o(e,w(Q,{label:`loaderData`,value:te,defaultExpanded:{}})),b(()=>g(e,E().detailsContent)),e})()]:null})(),_),o(v,w(Q,{label:`Match`,value:W,defaultExpanded:{}})),b(n=>{var a=E().thirdContainer,o=E().detailsHeader,l=E().matchDetails,d=E().matchStatus(z()?.status,z()?.isFetching),p=E().matchDetailsInfoLabel,y=E().matchDetailsInfo,b=E().matchDetailsInfoLabel,x=E().matchDetailsInfo,S=E().matchDetailsInfoLabel,C=E().matchDetailsInfo,w=E().detailsHeader,T=E().detailsContent;return a!==n.e&&g(e,n.e=a),o!==n.t&&g(t,n.t=o),l!==n.a&&g(r,n.a=l),d!==n.o&&g(i,n.o=d),p!==n.i&&g(s,n.i=p),y!==n.n&&g(c,n.n=y),b!==n.s&&g(u,n.s=b),x!==n.h&&g(f,n.h=x),S!==n.r&&g(m,n.r=S),C!==n.d&&g(h,n.d=C),w!==n.l&&g(_,n.l=w),T!==n.u&&g(v,n.u=T),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),o(e,(()=>{var e=d(()=>!!B());return()=>e()?(()=>{var e=Me(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return o(t,typeof navigator<`u`?(()=>{var e=Ne();return o(e,w(Be,{getValue:()=>{let e=p().location.search;return JSON.stringify(e)}})),e})():null,null),o(n,w(Q,{value:K,get defaultExpanded(){return Object.keys(p().location.search).reduce((e,t)=>(e[t]={},e),{})}})),b(r=>{var i=E().fourthContainer,a=E().detailsHeader,o=E().detailsContent;return i!==r.e&&g(e,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),b(e=>{var r=E().panelCloseBtn,i=E().panelCloseBtnIcon,o=E().firstContainer,s=E().row,l=E().routerExplorerContainer,d=E().routerExplorer,f=E().secondContainer,p=E().matchesContainer,m=E().detailsHeader,b=E().detailsContent,x=E().detailsHeader,S=E().routeMatchesToggle,C=M()===`routes`,w=A(E().routeMatchesToggleBtn(M()===`routes`,!0)),T=M()===`matches`,D=A(E().routeMatchesToggleBtn(M()===`matches`,!0)),O=M()===`history`,k=A(E().routeMatchesToggleBtn(M()===`history`,!1)),j=E().detailsHeaderInfo,N=A(E().routesContainer);return r!==e.e&&g(t,e.e=r),i!==e.t&&c(n,`class`,e.t=i),o!==e.a&&g(a,e.a=o),s!==e.o&&g(u,e.o=s),l!==e.i&&g(h,e.i=l),d!==e.n&&g(_,e.n=d),f!==e.s&&g(v,e.s=f),p!==e.h&&g(y,e.h=p),m!==e.r&&g(L,e.r=m),b!==e.d&&g(R,e.d=b),x!==e.l&&g(G,e.l=x),S!==e.u&&g(q,e.u=S),C!==e.c&&(J.disabled=e.c=C),w!==e.w&&g(J,e.w=w),T!==e.m&&(Y.disabled=e.m=T),D!==e.f&&g(Y,e.f=D),O!==e.y&&(X.disabled=e.y=O),k!==e.g&&g(X,e.g=k),j!==e.p&&g(ne,e.p=j),N!==e.b&&g(Z,e.b=N),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),e})()};function Be({getValue:e}){let[t,n]=_(!1),r=null,i=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),r&&clearTimeout(r),r=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return O(()=>{r&&clearTimeout(r)}),(()=>{var e=Pe();return e.$$click=i,o(e,()=>t()?`✅`:`📋`),b(()=>c(e,`title`,t()?`Copied!`:`Copy`)),e})()}f([`click`,`mousedown`]);var Ve=i(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);function He(){let e=p();return(()=>{var t=Ve(),n=t.firstChild.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,s=o.firstChild,l=o.nextSibling,u=l.nextSibling,d=u.firstChild,f=u.nextSibling,p=f.firstChild,m=f.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,k=D.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,N=M.firstChild,P=M.nextSibling,F=P.nextSibling,I=F.firstChild,L=F.nextSibling,ee=L.firstChild,R=L.nextSibling,z=R.firstChild.nextSibling,B=z.nextSibling,V=R.nextSibling,H=V.firstChild,U=V.nextSibling,te=U.firstChild,W=U.nextSibling,G=W.firstChild,K=G.nextSibling,q=K.nextSibling,J=q.nextSibling,Y=J.nextSibling,X=Y.nextSibling,ne=X.nextSibling,Z=ne.nextSibling,re=Z.nextSibling,ie=re.nextSibling,ae=ie.nextSibling,oe=ae.nextSibling,se=oe.nextSibling,ce=se.nextSibling,le=W.nextSibling,ue=le.firstChild,Q=le.nextSibling,de=Q.firstChild,fe=Q.nextSibling,pe=fe.nextSibling,me=pe.nextSibling,he=me.firstChild,ge=me.nextSibling,_e=ge.firstChild,ve=ge.nextSibling,ye=ve.firstChild.firstChild,be=ye.nextSibling,$=be.nextSibling,xe=$.nextSibling,Se=xe.nextSibling,Ce=Se.nextSibling,we=Ce.nextSibling,Te=we.nextSibling,Ee=Te.nextSibling,De=Ee.nextSibling,Oe=De.nextSibling,ke=Oe.nextSibling,Ae=ke.nextSibling,je=Ae.nextSibling,Me=je.nextSibling,Ne=Me.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling;return c(n,`id`,`a-${e}`),c(r,`fill`,`url(#a-${e})`),c(a,`id`,`b-${e}`),c(o,`id`,`c-${e}`),c(s,`filter`,`url(#b-${e})`),c(l,`mask`,`url(#c-${e})`),c(d,`id`,`d-${e}`),c(f,`id`,`e-${e}`),c(p,`filter`,`url(#d-${e})`),c(m,`mask`,`url(#e-${e})`),c(g,`id`,`f-${e}`),c(_,`id`,`g-${e}`),c(v,`filter`,`url(#f-${e})`),c(y,`mask`,`url(#g-${e})`),c(x,`id`,`h-${e}`),c(S,`id`,`i-${e}`),c(C,`filter`,`url(#h-${e})`),c(w,`mask`,`url(#i-${e})`),c(E,`id`,`j-${e}`),c(D,`id`,`k-${e}`),c(O,`filter`,`url(#j-${e})`),c(k,`mask`,`url(#k-${e})`),c(j,`id`,`l-${e}`),c(M,`id`,`m-${e}`),c(N,`filter`,`url(#l-${e})`),c(P,`mask`,`url(#m-${e})`),c(I,`id`,`n-${e}`),c(L,`id`,`o-${e}`),c(ee,`filter`,`url(#n-${e})`),c(R,`mask`,`url(#o-${e})`),c(z,`id`,`p-${e}`),c(B,`fill`,`url(#p-${e})`),c(H,`id`,`q-${e}`),c(U,`id`,`r-${e}`),c(te,`filter`,`url(#q-${e})`),c(W,`mask`,`url(#r-${e})`),c(G,`id`,`s-${e}`),c(K,`fill`,`url(#s-${e})`),c(q,`id`,`t-${e}`),c(J,`fill`,`url(#t-${e})`),c(Y,`id`,`u-${e}`),c(X,`fill`,`url(#u-${e})`),c(ne,`id`,`v-${e}`),c(Z,`fill`,`url(#v-${e})`),c(re,`id`,`w-${e}`),c(ie,`fill`,`url(#w-${e})`),c(ae,`id`,`x-${e}`),c(oe,`fill`,`url(#x-${e})`),c(se,`id`,`y-${e}`),c(ce,`fill`,`url(#y-${e})`),c(ue,`id`,`z-${e}`),c(Q,`id`,`A-${e}`),c(de,`filter`,`url(#z-${e})`),c(fe,`id`,`B-${e}`),c(pe,`fill`,`url(#B-${e})`),c(pe,`mask`,`url(#A-${e})`),c(he,`id`,`C-${e}`),c(ge,`id`,`D-${e}`),c(_e,`filter`,`url(#C-${e})`),c(ve,`mask`,`url(#D-${e})`),c(ye,`id`,`E-${e}`),c(be,`fill`,`url(#E-${e})`),c($,`id`,`F-${e}`),c(xe,`stroke`,`url(#F-${e})`),c(Se,`id`,`G-${e}`),c(Ce,`stroke`,`url(#G-${e})`),c(we,`id`,`H-${e}`),c(Te,`stroke`,`url(#H-${e})`),c(Ee,`id`,`I-${e}`),c(De,`stroke`,`url(#I-${e})`),c(Oe,`id`,`J-${e}`),c(ke,`stroke`,`url(#J-${e})`),c(Ae,`id`,`K-${e}`),c(je,`stroke`,`url(#K-${e})`),c(Me,`id`,`L-${e}`),c(Ne,`stroke`,`url(#L-${e})`),c(Pe,`id`,`M-${e}`),c(Fe,`stroke`,`url(#M-${e})`),t})()}var Ue=i(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);function We({initialIsOpen:e,panelProps:t={},closeButtonProps:n={},toggleButtonProps:r={},position:i=`bottom-left`,containerElement:a=`footer`,router:s,routerState:c,shadowDOMTarget:l}){let[f,p]=_(),m,[h,y]=X(`tanstackRouterDevtoolsOpen`,e),[x,S]=X(`tanstackRouterDevtoolsHeight`,null),[E,O]=_(!1),[k,j]=_(!1),M=te(),N=J(),P=(e,t)=>{if(t.button!==0)return;j(!0);let n={originalHeight:e?.getBoundingClientRect().height??0,pageY:t.pageY},r=e=>{let t=n.pageY-e.pageY,r=n.originalHeight+t;S(r),y(!(r<70))},i=()=>{j(!1),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseUp`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)};h(),u(()=>{O(h()??!1)}),u(()=>{if(E()){let e=f()?.parentElement?.style.paddingBottom,t=()=>{let e=m.getBoundingClientRect().height;f()?.parentElement&&p(t=>(t?.parentElement&&(t.parentElement.style.paddingBottom=`${e}px`),t))};if(t(),typeof window<`u`)return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),f()?.parentElement&&typeof e==`string`&&p(t=>(t.parentElement.style.paddingBottom=e,t))}}else f()?.parentElement&&p(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),u(()=>{if(f()){let e=f(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}});let{style:F={},...I}=t,{style:L={},onClick:ee,...R}=n,{onClick:z,class:B,...V}=r;if(!M())return null;let H=d(()=>x()??500),U=d(()=>A(N().devtoolsPanelContainer,N().devtoolsPanelContainerVisibility(!!h()),N().devtoolsPanelContainerResizing(k),N().devtoolsPanelContainerAnimation(E(),H()+16))),W=d(()=>({height:`${H()}px`,...F||{}})),G=d(()=>A(N().mainCloseBtn,N().mainCloseBtnPosition(i),N().mainCloseBtnAnimation(!!h()),B));return w(v,{component:a,ref:p,class:`TanStackRouterDevtools`,get children(){return[w(C.Provider,{value:{onCloseClick:ee??(()=>{})},get children(){return w(ze,T({ref(e){var t=m;typeof t==`function`?t(e):m=e}},I,{router:s,routerState:c,className:U,style:W,get isOpen(){return E()},setIsOpen:y,handleDragStart:e=>P(m,e),shadowDOMTarget:l}))}}),(()=>{var e=Ue(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=t.nextSibling,a=i.nextSibling;return D(e,T(V,{"aria-label":`Open TanStack Router Devtools`,onClick:e=>{y(!0),z&&z(e)},get class(){return G()}}),!1,!0),o(n,w(He,{})),o(r,w(He,{})),b(e=>{var o=N().mainCloseBtnIconContainer,s=N().mainCloseBtnIconOuter,c=N().mainCloseBtnIconInner,l=N().mainCloseBtnDivider,u=N().routerLogoCloseButton;return o!==e.e&&g(t,e.e=o),s!==e.t&&g(n,e.t=s),c!==e.a&&g(r,e.a=c),l!==e.o&&g(i,e.o=l),u!==e.i&&g(a,e.i=u),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()]}})}export{We as FloatingTanStackRouterDevtools,We as default};