(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return d}));var r=t(3),n=t(7),o=(t(0),t(134)),i={id:"protocolo-eosio",title:"Protocolo EOSIO",sidebar_label:"Protocolo EOSIO"},l={unversionedId:"aprender-eosio/protocolo-eosio",id:"aprender-eosio/protocolo-eosio",isDocsHomePage:!1,title:"Protocolo EOSIO",description:'EOSIO es software de c\xf3digo abierto que permite lanzar redes blockhain altamente configurables sobre las cuales desarrolladores y emprendedores pueden correr aplicaciones blockchain de alto rendimiento. EOSIO fue creado en el 2018 y es mantenido por la empresa Block One. La primera red p\xfablica lanzada sobre EOSIO se llama EOS, tambi\xe9n referida como "mainnet". EOS es una de m\xfaltiples redes blockchain p\xfablicas actualmente utilizado EOSIO. Puede ver la siguiente lista de redes EOSIO. Tambi\xe9n existen m\xfaltiples redes privadas que actualmente utilizan EOSIO.',source:"@site/docs/aprender-eosio/protocolo-eosio.md",slug:"/aprender-eosio/protocolo-eosio",permalink:"/docs/aprender-eosio/protocolo-eosio",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/protocolo-eosio.md",version:"current",lastUpdatedBy:"JustinCast",lastUpdatedAt:1613154639,sidebar_label:"Protocolo EOSIO",sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/kubernetes"},next:{title:"Mecanismo de Consenso",permalink:"/docs/aprender-eosio/mecanismo-de-consenso"}},s=[{value:"Contratos del Sistema",id:"contratos-del-sistema",children:[]}],c={toc:s};function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"EOSIO es software de c\xf3digo abierto que permite lanzar redes blockhain altamente configurables sobre las cuales desarrolladores y emprendedores pueden correr aplicaciones blockchain de alto rendimiento. ",Object(o.b)("a",{parentName:"p",href:"https://eos.io/"},"EOSIO")," fue creado en el 2018 y es mantenido por la empresa ",Object(o.b)("a",{parentName:"p",href:"https://block.one/"},"Block One"),'. La primera red p\xfablica lanzada sobre EOSIO se llama EOS, tambi\xe9n referida como "mainnet". EOS es una de m\xfaltiples redes blockchain p\xfablicas actualmente utilizado EOSIO. Puede ver la siguiente ',Object(o.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/comunidad/redes-eosio"},"lista de redes EOSIO"),". Tambi\xe9n existen m\xfaltiples redes privadas que actualmente utilizan EOSIO."),Object(o.b)("p",null,"Algunas de las caracter\xedsticas innovadoras de EOSIO incluyen:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Trasacciones gratuitas")," con limites de consumo"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Baja latencia")," en confirmaci\xf3n de bloques nuevos (0.5 segundos)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tolerante a fallas bizantinas BFT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Nombres de cuentas legibles por humanos")," (",Object(o.b)("inlineCode",{parentName:"li"},"cuentaeosio1"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Permisos ACL")," basados en roles jer\xe1rquicos"),Object(o.b)("li",{parentName:"ul"},"Contratos actualizables ",Object(o.b)("strong",{parentName:"li"},"escritos en C++")," facilitan el uso a programadores"),Object(o.b)("li",{parentName:"ul"},"Soporte para llaves protegidas por ",Object(o.b)("strong",{parentName:"li"},"hardware biom\xe9trico")," (",Object(o.b)("inlineCode",{parentName:"li"},"Apple Secure Enclave"),")"),Object(o.b)("li",{parentName:"ul"},"Dise\xf1ado para la ",Object(o.b)("strong",{parentName:"li"},"comunicaci\xf3n Inter-Blockchain")),Object(o.b)("li",{parentName:"ul"},"Dise\xf1ado para la validaci\xf3n del cliente de encabezado escaso"),Object(o.b)("li",{parentName:"ul"},"Transacciones peri\xf3dicas programadas"),Object(o.b)("li",{parentName:"ul"},"Seguridad con retraso de tiempo"),Object(o.b)("li",{parentName:"ul"},"Dise\xf1ado para la ejecuci\xf3n paralela de la l\xf3gica de validaci\xf3n sin contexto")),Object(o.b)("p",null,"Otra caracter\xedstica importante de una red blockchain basada en el protocolo EOSIO tiene una arquitectura flexible, en la cual gran parte de las reglas de operaci\xf3n se definen a trav\xe9s de los ",Object(o.b)("strong",{parentName:"p"},"contratos del sistema"),"."),Object(o.b)("p",null,"Esta flexibilidad se debe a que los contratos de sistema constituyen un m\xf3dulo separado del protocolo base de EOSIO. De esta forma, las funciones centrales de los nodos y el mecanismo de producci\xf3n de bloques se mantiene separado de los ",Object(o.b)("strong",{parentName:"p"},"contratos de sistema"),"."),Object(o.b)("h2",{id:"contratos-del-sistema"},"Contratos del Sistema"),Object(o.b)("p",null,"Los contratos de sistema permiten a las redes EOSIO:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configurar f\xe1cilmente la gobernanza de la red mediante contratos inteligentes"),Object(o.b)("li",{parentName:"ul"},"Tener reglas transparentes de operaci\xf3n del sistema"),Object(o.b)("li",{parentName:"ul"},"Sincronizar los cambios en las reglas de operaci\xf3n de forma instant\xe1nea en toda la red, lo que reduce la administraci\xf3n y los costos de las actualizaciones de gobernanza"),Object(o.b)("li",{parentName:"ul"},"Mantener la compatibilidad total con otras cadenas de bloques EOSIO")))}d.isMDXComponent=!0},134:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),d=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return t?n.a.createElement(m,l(l({ref:a},c),{},{components:t})):n.a.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);