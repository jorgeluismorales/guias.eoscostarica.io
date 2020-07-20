(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{190:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(9),c=(t(0),t(196)),o={id:"plantilla-para-backend",title:"Plantilla para Backend",sidebar_label:"Plantilla para Backend"},i={id:"plantilla-para-backend",isDocsHomePage:!1,title:"Plantilla para Backend",description:"Una plantilla altamente escalable con las mejores pr\xe1cticas, hecha para un inicio r\xe1pido de proyectos backend.",source:"@site/docs/plantilla-para-backend.md",permalink:"/docs/plantilla-para-backend",lastUpdatedBy:"Jean",lastUpdatedAt:1595266382,sidebar_label:"Plantilla para Backend",sidebar:"docs",previous:{title:"Plantilla para Aplicaci\xf3n Web",permalink:"/docs/plantilla-para-aplicacion-web"},next:{title:"Proyectos de C\xf3digo Abierto",permalink:"/docs/proyectos-de-codigo-abierto"}},l=[],p={rightToc:l};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Una plantilla altamente escalable con las mejores pr\xe1cticas, hecha para un inicio r\xe1pido de proyectos backend."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GitHub")," : ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/eoscostarica/backend-boilerplate"}),"https://github.com/eoscostarica/backend-boilerplate"))),Object(c.b)("p",null,"Esta plantilla presenta todas las \xfaltimas herramientas y buenas pr\xe1cticas en la industria."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://hasura.io"}),"hasura")))),Object(c.b)("p",null,"El motor de GraphQL de Hasura es un servicio de c\xf3digo abierto que conecta su base de datos y microservicios y autogenera un backend GraphQL con ACL listo para producci\xf3n."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://hapi.dev/"}),"hapi")))),Object(c.b)("p",null,"Un servicio backend para l\xf3gica de negocios personalizadas, integrado con Hasura, usando ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://hasura.io/docs/1.0/graphql/manual/actions/index.html#actions"}),"actions"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://docs.docker.com/compose/"}),"docker-compose")),"\nCompose es una herramienta para definir y correr aplicaciones de docker con m\xfaltiples contenedores.")))}s.isMDXComponent=!0},196:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=s(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return t?r.a.createElement(m,i(i({ref:a},p),{},{components:t})):r.a.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);