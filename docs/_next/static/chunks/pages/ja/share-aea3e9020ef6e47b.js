(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{6449:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ja/share",function(){return t(7179)}])},7179:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var s=t(5893),l=t(9417),r=t(7814),i=t(7294),a=(0,i.forwardRef)(function(e,n){var t,a=e.comment,o=e.onChange,c=(0,i.useState)(!1),d=c[0],u=c[1];return((0,i.useImperativeHandle)(n,function(){return{finishEditing:function(){u(!1)}}}),d||""!=a)?d?(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:["コメント",(0,s.jsx)("small",{className:"ml-2",children:"コメントが2行以上の場合、1行目がタイトルとして表示されます。"})]}),(0,s.jsx)("textarea",{rows:4,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"この本は...",value:a,onChange:function(e){o(e.target.value)}})]}):(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:" lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",title:"Woman holding a mug"}),(0,s.jsx)("div",{className:"border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",children:(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsxs)("p",{className:"text-sm text-gray-600 flex items-center",children:[(0,s.jsx)(r.G,{icon:l.Mzg}),(0,s.jsx)("span",{className:"pl-1",children:"コメント"}),(0,s.jsxs)("span",{className:"font-bold text-secondary",children:["(",(0,s.jsx)("u",{className:"cursor-pointer",onClick:function(){u(!0)},children:"編集"})," ","/"," ",(0,s.jsx)("u",{className:"cursor-pointer",onClick:function(){o(""),u(!0)},children:"新しくコメントする"}),")"]})]}),(t=a.split("\n")).length>1?(0,s.jsxs)("div",{children:[" ",(0,s.jsx)("div",{className:"text-gray-900 font-bold text-xl my-2",children:t[0]}),(0,s.jsx)("p",{className:"text-gray-700 text-base",children:t.slice(1).join("\n")})]}):(0,s.jsx)("p",{className:"text-gray-700 text-base",children:a})]})})]}):(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("span",{className:"underline cursor-pointer",onClick:function(){u(!0)},children:"この本にコメントを残す"})})}),o=function(e){var n=e.src;return(0,s.jsx)("img",{src:n,alt:"",style:{position:"relative",minWidth:"60px",maxWidth:"100px",height:"100px",maxHeight:"200px"},className:"object-contain"})};function c(e,n,t){var s="".concat(location.origin,"/ja/share?isbn=").concat(e,"&from=").concat(n);return""!=t&&(s+="&comment=".concat(encodeURIComponent(t))),s}var d=t(4274),u=t(7568),x=t(655),m=t(9669),h=t.n(m);function f(e){var n,t="".concat("https://www.googleapis.com/books/v1/volumes","?q="),s=e.q,l=!1;return(null==s?void 0:s.intitle)&&(l=!0,t+="intitle:".concat(encodeURI(s.intitle))),(null==s?void 0:s.isbn)&&(l&&(t+="+"),l=!0,t+="isbn:"+s.isbn),h().get("".concat(t,"&startIndex=").concat(null!==(n=e.startIndex)&&void 0!==n?n:0))}function b(){return(b=(0,u.Z)(function(e){var n,t,s,l;return(0,x.__generator)(this,function(n){switch(n.label){case 0:return[4,f({q:{isbn:e}})];case 1:return[2,null!=(l=(null!==(s=null==(t=n.sent().data)?void 0:t.items)&&void 0!==s?s:[]).find(function(n){return n.volumeInfo.industryIdentifiers.find(function(n){return n.identifier==e})}))?l:null]}})})).apply(this,arguments)}var p=function(){return(0,s.jsxs)("div",{className:"flex justify-center p-10",children:[(0,s.jsx)("div",{className:"animate-ping h-2 w-2 bg-my-color rounded-full"}),(0,s.jsx)("div",{className:"animate-ping h-2 w-2 bg-my-color rounded-full mx-4"}),(0,s.jsx)("div",{className:"animate-ping h-2 w-2 bg-my-color rounded-full"})]})},v=(0,i.forwardRef)(function(e,n){var t=function(){m(!1)},a=(0,i.useState)(!1),d=a[0],m=a[1],h=(0,i.useState)(""),b=h[0],v=h[1],j=(0,i.useState)([]),g=j[0],N=j[1],w=(0,i.useState)(!0),y=w[0],k=w[1];function I(e){return C.apply(this,arguments)}function C(){return(C=(0,u.Z)(function(e){var n,t,s;return(0,x.__generator)(this,function(l){switch(l.label){case 0:return k(!0),m(!0),[4,f({q:{intitle:e}})];case 1:return t=l.sent(),v(e),N(null!==(s=null===(n=t.data)||void 0===n?void 0:n.items)&&void 0!==s?s:[]),k(!1),[2]}})})).apply(this,arguments)}return((0,i.useImperativeHandle)(n,function(){return{openModal:I,closeModal:t}}),d)?(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 overflow-hidden",children:(0,s.jsxs)("div",{className:"relative h-5/6 w-full mx-4 lg:mx-0 lg:w-3/4 md:p-4 bg-white rounded-md shadow-xl overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("h3",{className:"text-left",children:[(0,s.jsxs)("b",{children:["「",b,"」"]}),"で検索"]}),(0,s.jsx)(r.G,{className:"text-3xl p-2 cursor-pointer",icon:l.g82,onClick:t})]}),(0,s.jsx)("hr",{className:"mb-3"}),y?(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(p,{})}):(0,s.jsx)("ul",{className:"m-2 text-left text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-pointer",children:g.filter(function(e){var n,t,s=null==e?void 0:null===(n=e.volumeInfo)||void 0===n?void 0:null===(t=n.industryIdentifiers)||void 0===t?void 0:t[0];return"ISBN_10"==s.type||"ISBN_13"==s.type}).map(function(e){var n,t;return(0,s.jsx)("li",{onClick:function(){var n=c(e.volumeInfo.industryIdentifiers[0].identifier,"googlebooks","");window.open(n,"_blank")},className:"py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600",children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(o,{src:null!==(t=null===(n=e.volumeInfo.imageLinks)||void 0===n?void 0:n.smallThumbnail)&&void 0!==t?t:""}),(0,s.jsxs)("div",{className:"pl-2",children:[e.volumeInfo.title,(0,s.jsx)("br",{}),(0,s.jsxs)("small",{className:"text-secondary",children:["ISBN :"," ",e.volumeInfo.industryIdentifiers[0].identifier]})]})]})},e.id)})})]})}):(0,s.jsx)("span",{})});function j(e){var n=e.buttonText,t=e.editingText,l=e.onClick;return""!=t?(0,s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2 w-100 whitespace-nowrap",onClick:l,children:n}):(0,s.jsx)("span",{})}var g=function(e){var n=e.errorText,t=(0,i.useState)(""),a=t[0],o=t[1],u=(0,i.useState)(""),x=u[0],m=u[1],h=(0,i.useState)(""),f=h[0],b=h[1],p=(0,i.useState)(""),g=p[0],N=p[1],w=(0,i.useRef)(null),y="Kindle(電子書籍)のURLは現在非対応です。Amazonの商品ページで紙の書籍を選択してください。";return(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("h1",{className:"pt-5 text-2xl pb-2 text-slate-700",children:[(0,s.jsx)(r.G,{icon:l.FL8}),(0,s.jsx)("span",{className:"ml-1",children:"以下の方法で書籍を共有できます。"})]}),(0,s.jsx)("p",{className:"text-red-600",children:n}),(0,s.jsx)("hr",{className:"mb-4"}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"flex items-end",children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"ISBNで共有"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",inputMode:"email",placeholder:"9784798056920",value:a,onChange:function(e){o(e.target.value)}})]}),(0,s.jsx)(j,{buttonText:"共有",editingText:a,onClick:function(){location.href=c(a,"openbd","")}})]}),(0,s.jsx)("p",{className:"text-left text-secondary",children:(0,s.jsxs)("small",{children:[(0,s.jsx)(r.G,{icon:l.VdD}),(0,s.jsx)("span",{className:"ml-1",children:"書籍のバーコードからISBNを読み取る機能は今後実装予定です。"})]})})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"flex items-end",children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"タイトルで調べる"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",inputMode:"text",placeholder:"この素晴らしい...",value:x,onChange:function(e){m(e.target.value)}})]}),(0,s.jsx)(j,{buttonText:"調べる",editingText:x,onClick:function(){var e;null===(e=w.current)||void 0===e||e.openModal(x)}})]}),(0,s.jsx)(v,{ref:w})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"flex items-end",children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"Amazon URLで共有"}),(0,s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",inputMode:"url",placeholder:"https://www.amazon.co.jp/dp/4088831209/...",value:f,onChange:function(e){b(e.target.value)}})]}),(0,s.jsx)(j,{buttonText:"共有",editingText:f,onClick:function(){var e=(0,d.convertUrl2Isbn13)(f);""!=e.isbn?location.href=c(e.isbn,"openbd",""):"KINDLE"==e.error?N(y):N("無効なURLです。")}})]}),(0,s.jsx)("p",{className:"text-red-600",children:g}),function(){if(g==y)return(0,s.jsx)("div",{className:"p-10 mx-auto",children:(0,s.jsx)("img",{src:"https://i.gyazo.com/c13353fcbacce087b7dd3a42985d19c0.png",style:{maxHeight:"89px",width:"100%",objectFit:"contain"},alt:""})})}()]})]})},N=t(4184),w=t.n(N),y=t(1664),k=t.n(y),I=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],a=w()("w-full","flex-grow","lg:flex","lg:items-center","lg:w-auto",{hidden:!n,block:n});return(0,s.jsx)("header",{children:(0,s.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-my-color p-6",children:[(0,s.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:(0,s.jsx)(k(),{href:"/ja/share",children:(0,s.jsxs)("a",{className:"font-semibold text-xl tracking-tight",children:[(0,s.jsx)(r.G,{icon:l.FL8}),(0,s.jsx)("span",{className:"ml-1",children:"Share Books"})]})})}),(0,s.jsx)("div",{className:"block lg:hidden",children:(0,s.jsx)("button",{onClick:function(){return t(!n)},className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",children:(0,s.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("title",{children:"Menu"}),(0,s.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("div",{className:"text-sm lg:flex-grow"}),(0,s.jsx)("div",{children:(0,s.jsx)(k(),{href:"/ja/share",children:(0,s.jsx)("a",{className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",children:"本を探す"})})})]})]})})},C=t(9528),S=t.n(C),_=t(9008),T=t.n(_),R=t(1163),E=function(){var e=function(){return"string"==typeof r?decodeURIComponent(r):""},n=(0,R.useRouter)().query,t=n.isbn,l=n.from,r=n.comment,d=(0,i.useState)(null),u=d[0],x=d[1],m=(0,i.useState)(""),h=m[0],f=m[1],v=(0,i.useState)(!1),j=v[0],N=v[1],w=(0,i.useState)(!1),y=w[0],k=w[1],C=(0,i.useRef)(null);(0,i.useEffect)(function(){L(e())},[r]);var _=(0,i.useState)(e()),E=_[0],L=_[1];return(0,i.useEffect)(function(){if("string"==typeof t)switch(N(!1),"string"==typeof l?l:""){case"opendb":default:var e;S().get(t).then(function(e){var n,t,s,l=null===(n=e.data)||void 0===n?void 0:n[0];l?(x({title:l.summary.title,author:l.summary.author,isbn:l.summary.isbn,publisher:l.summary.publisher,thumbnail:l.summary.cover,description:null!==(s=null===(t=l.onix.CollateralDetail.TextContent)||void 0===t?void 0:t[0].Text)&&void 0!==s?s:"",from:"openbd"}),N(!1)):f("書籍情報を見つけることができませんでした。")}).catch(function(){f("通信エラー。時間を置いてからご確認ください。")});break;case"googlebooks":(function(e){return b.apply(this,arguments)})(t).then(function(e){if(e){var n,s,l;x({title:e.volumeInfo.title,author:e.volumeInfo.authors.join(" "),isbn:t,publisher:e.volumeInfo.publisher,thumbnail:null!==(l=null===(n=e.volumeInfo)||void 0===n?void 0:null===(s=n.imageLinks)||void 0===s?void 0:s.smallThumbnail)&&void 0!==l?l:"",description:e.volumeInfo.description,from:"googlebooks"}),N(!1)}else f("書籍情報を見つけることができませんでした。")}).catch(function(){f("通信エラー。時間を置いてからご確認ください。")})}else N(!0)},[l,t]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(T(),{children:[(0,s.jsx)("title",{children:"本を友だちに紹介する - Share Books"}),(0,s.jsx)("meta",{name:"description",content:"書籍共有できるURLを発行します。ご自由にお使いください。"}),(0,s.jsx)("link",{rel:"icon",href:"/images/icon.png"}),(0,s.jsx)("link",{rel:"canonical",href:"https://books.sn-10.net/ja/share"})]}),(0,s.jsx)(I,{}),(0,s.jsx)("main",{children:(0,s.jsx)("div",{className:"w-full px-2 ",children:j||""!=h?(0,s.jsx)(g,{errorText:h}):u?(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-center pt-5 pb-2",children:[function(){if(""!=u.thumbnail)return(0,s.jsx)("span",{className:"mr-2",children:(0,s.jsx)(o,{src:u.thumbnail})})}(),(0,s.jsx)("span",{className:"text-3xl",children:u.title})]}),(0,s.jsxs)("p",{className:"text-secondary text-center",children:[(0,s.jsxs)("span",{className:"text-xl",children:["ISBN : ",u.isbn]}),(0,s.jsx)("button",{className:"text-sm bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded ml-2",onClick:function(){navigator.clipboard.writeText(u.isbn)},children:"コピー"})]}),(0,s.jsxs)("p",{className:"text-center",children:["著者 : ",u.author," / 出版社 :",u.publisher]}),(0,s.jsx)("p",{className:"text-center mt-1",children:u.description}),(0,s.jsxs)("div",{className:"p-10",children:[(0,s.jsx)(a,{comment:E,onChange:function(e){L(e)},ref:C}),(0,s.jsxs)("div",{className:"text-center mt-4",children:[(0,s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",onClick:function(){var e;k(!0),null==C||null===(e=C.current)||void 0===e||e.finishEditing(),navigator.clipboard.writeText(c(u.isbn,u.from,E))},children:"この本を共有する"}),function(){if(y)return(0,s.jsx)("p",{className:"text-center text-secondary",children:(0,s.jsx)("small",{children:"共有URLをコピーしました。"})})}()]})]})]}):(0,s.jsx)("div",{children:(0,s.jsx)(p,{})})})}),(0,s.jsxs)("footer",{children:[(0,s.jsx)("hr",{}),(0,s.jsx)("p",{className:"text-center",children:(0,s.jsx)("a",{className:"underline",href:"https://hello.sn-10.net",children:"sn-10.net"})})]})]})}}},function(e){e.O(0,[976,83,774,888,179],function(){return e(e.s=6449)}),_N_E=e.O()}]);