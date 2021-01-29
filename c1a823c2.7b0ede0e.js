(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(127)),s={id:"instalacion-de-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos"},i={unversionedId:"tutoriales/instalacion-de-nodos",id:"tutoriales/instalacion-de-nodos",isDocsHomePage:!1,title:"Instalaci\xf3n de Nodos",description:"Versi\xf3n EOSIO : v2.0.6",source:"@site/docs/tutoriales/instalacion-de-nodos.md",slug:"/tutoriales/instalacion-de-nodos",permalink:"/docs/tutoriales/instalacion-de-nodos",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/instalacion-de-nodos.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611951502,sidebar_label:"Instalaci\xf3n de Nodos",sidebar:"docs",previous:{title:"Componentes EOSIO",permalink:"/docs/aprender-eosio/componentes-eosio"},next:{title:"Contrato Hola Mundo",permalink:"/docs/tutoriales/contrato-hola-mundo"}},c=[{value:"Instale EOSIO desde binarios precompilados",id:"instale-eosio-desde-binarios-precompilados",children:[{value:"Desinstalar",id:"desinstalar",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Versi\xf3n EOSIO : ",Object(o.b)("inlineCode",{parentName:"p"},"v2.0.6")),Object(o.b)("p",null,"Chain ID: ",Object(o.b)("inlineCode",{parentName:"p"},"2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840")),Object(o.b)("p",null,"Archivo G\xe9nesis : ",Object(o.b)("inlineCode",{parentName:"p"},"genesis.json")),Object(o.b)("h2",{id:"instale-eosio-desde-binarios-precompilados"},"Instale EOSIO desde binarios precompilados"),Object(o.b)("p",null,"Descargue la \xfaltima versi\xf3n de EOSIO para su sistema operativo desde: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.6"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.6")),Object(o.b)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",Object(o.b)("inlineCode",{parentName:"p"},"eosio_2.0.6-1-ubuntu-18.04_amd64.deb")),Object(o.b)("p",null,"Puedes usar apt para instalarlo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/eosio/eos/releases/download/v2.0.6/eosio_2.0.6-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.6-1-ubuntu-18.04_amd64.deb\n")),Object(o.b)("p",null,"Descargar\xe1 todas las dependencias e instalar\xe1 EOSIO a ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.6")),Object(o.b)("h3",{id:"desinstalar"},"Desinstalar"),Object(o.b)("p",null,"Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/eosio_uninstall.sh\n")))}d.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,O=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(O,i(i({ref:t},l),{},{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);