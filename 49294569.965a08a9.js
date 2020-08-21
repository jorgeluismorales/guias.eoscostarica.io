(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=b(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(t),m=n,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return t?r.a.createElement(d,c(c({ref:a},l),{},{components:t})):r.a.createElement(d,c({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(2),r=t(6),o=(t(0),t(106)),i={id:"pautas-para-codigo-abierto",title:"Pautas para C\xf3digo Abierto",sidebar_label:"Pautas para C\xf3digo Abierto"},c={unversionedId:"pautas-para-codigo-abierto",id:"pautas-para-codigo-abierto",isDocsHomePage:!1,title:"Pautas para C\xf3digo Abierto",description:"Proceso de Desarrollo",source:"@site/docs/pautas-para-codigo-abierto.md",permalink:"/docs/pautas-para-codigo-abierto",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/pautas-para-codigo-abierto.md",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1598044666,sidebar_label:"Pautas para C\xf3digo Abierto",sidebar:"docs",previous:{title:"Cultura Ingenieril",permalink:"/docs/cultura-ingenieril"},next:{title:"Metodolog\xedas Agiles",permalink:"/docs/metodologias-agiles"}},s=[{value:"Proceso de Desarrollo",id:"proceso-de-desarrollo",children:[]},{value:"Pautas para los <code>pull request</code>",id:"pautas-para-los-pull-request",children:[]},{value:"Pautas para mensajes en los commits",id:"pautas-para-mensajes-en-los-commits",children:[{value:"Formato del mensaje del commit",id:"formato-del-mensaje-del-commit",children:[]},{value:"Revertir",id:"revertir",children:[]},{value:"Tipo",id:"tipo",children:[]},{value:"\xc1mbito",id:"\xe1mbito",children:[]},{value:"Aspecto",id:"aspecto",children:[]},{value:"Cuerpo",id:"cuerpo",children:[]},{value:"Pi\xe9",id:"pi\xe9",children:[]}]},{value:"Reportar bugs",id:"reportar-bugs",children:[]},{value:"Lanzamientos",id:"lanzamientos",children:[{value:"Generaci\xf3n de Registro de cambios",id:"generaci\xf3n-de-registro-de-cambios",children:[]}]},{value:"Herramientas de git avanzadas",id:"herramientas-de-git-avanzadas",children:[]},{value:"Est\xe1ndares de C\xf3digo",id:"est\xe1ndares-de-c\xf3digo",children:[]},{value:"Integraci\xf3n Continua y Entrega",id:"integraci\xf3n-continua-y-entrega",children:[]},{value:"Pre-commit Hooks",id:"pre-commit-hooks",children:[]}],l={rightToc:s};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"proceso-de-desarrollo"},"Proceso de Desarrollo"),Object(o.b)("p",null,"Utilizamos un estilo de tablero Kanban para priorizar nuestro trabajo. Por ejemplo, puedes mirar ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-rate/projects/1"}),"EOS rate project board"),"."),Object(o.b)("p",null,'Hemos a\xf1adido una columna adicional al dise\xf1o automatizado por defecto para mantener una columna "Por Hacer" (To Do) priorizada.\nCuando nuevos issues son creados, necesitas usar expl\xedcitamente la opci\xf3n de proyecto en el issue de GitHub para incluirlo en el tablero; una vez que lo haces, el issue quedar\xe1 autom\xe1ticamente agregado a la columna de issues nuevos.'),Object(o.b)("p",null,'Peri\xf3dicamente movemos los nuevos issues a la columna "Por Hacer" y manualmente le damos la prioridad apropiada.'),Object(o.b)("p",null,'Cuando comienzas a trabajar en una tarea, deber\xedas moverla manualmente a la columna "En Progreso".'),Object(o.b)("p",null,"Usamos el flujo de GitHub ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://guides.github.com/introduction/flow/"}),"https://guides.github.com/introduction/flow/")," para solicitar cambios en el c\xf3digo. Desarrollamos en la rama ",Object(o.b)("code",null,"master")," y ",Object(o.b)("code",null,"release")," usando etiquetas y versionamiento."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://gaboesquivel.com/img/2018/05/github-flow.png",alt:null}))),Object(o.b)("p",null,"New and reopened pull request are automatically added to the board in the In Progress column.\nLos nuevos y reabiertos ",Object(o.b)("code",null,"pull request"),' son aut\xf3maticamente a\xf1adidos al tablero en la columna "En Progreso".'),Object(o.b)("p",null,"Cuando un ",Object(o.b)("code",null,"pull request"),' cerrado es movido a la columna "Hecho - Terminado" autom\xe1ticamente. '),Object(o.b)("h2",{id:"pautas-para-los-pull-request"},"Pautas para los ",Object(o.b)("code",null,"pull request")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Por favor revisa para asegurarte que no hay ning\xfan ",Object(o.b)("code",null,"pull request")," existente tratando de localizar o vincular el ",Object(o.b)("code",null,"issue")," mecionado."),Object(o.b)("li",{parentName:"ul"},"Busca los ",Object(o.b)("code",null,"issues")," relacionados en el registro de ",Object(o.b)("code",null,"issues"),"."),Object(o.b)("li",{parentName:"ul"},"Los cambios no triviales deber\xedan ser discutidos primero en un ",Object(o.b)("code",null,"issue")),Object(o.b)("li",{parentName:"ul"},"Desarrolla en una rama espec\xedfica para caracter\xedsticas (c\xf3digo no estable), nunca en la master: ",Object(o.b)("inlineCode",{parentName:"li"},"git checkout -b topic-branch"),"."),Object(o.b)("li",{parentName:"ul"},"Haz amplias y claras descripciones de los ",Object(o.b)("inlineCode",{parentName:"li"},"pull requests"),"."),Object(o.b)("li",{parentName:"ul"},"Realiza ",Object(o.b)("inlineCode",{parentName:"li"},"pull requests")," at\xf3micos y con un \xe1mbito bien definido. 1 PR por caracter\xedstica o bug."),Object(o.b)("li",{parentName:"ul"},"Vincula el ",Object(o.b)("inlineCode",{parentName:"li"},"issue")," con la descripci\xf3n ",Object(o.b)("inlineCode",{parentName:"li"},"pull request"),"para referencia entre el c\xf3digo y los ",Object(o.b)("inlineCode",{parentName:"li"},"issues"),".")),Object(o.b)("p",null,"Soportamos \xfanicamente ",Object(o.b)("strong",{parentName:"p"},"squash merge")," de los ",Object(o.b)("inlineCode",{parentName:"p"},"pull requests")," como una buena pr\xe1ctica para asegurar que el registro de la rama ",Object(o.b)("inlineCode",{parentName:"p"},"master")," es mantenido limpio y relevante, sin requerir que el ",Object(o.b)("inlineCode",{parentName:"p"},"pull request"),"sea modificado. Esta estrategia requiere que todos los ",Object(o.b)("inlineCode",{parentName:"p"},"pull request"),"sea hechos de forma at\xf3mica, en otras palabras, que resuelvan una \xfanica cosa. Un ",Object(o.b)("inlineCode",{parentName:"p"},"pull request")," por caracter\xedstica, bug o actualizac\xf3n de documentaci\xf3n."),Object(o.b)("h2",{id:"pautas-para-mensajes-en-los-commits"},"Pautas para mensajes en los commits"),Object(o.b)("p",null,"Tenemos reglas muy precisas acerca de c\xf3mo los mensajes de los commits de ",Object(o.b)("inlineCode",{parentName:"p"},"git")," deben ser formateados. Esto permite ",Object(o.b)("strong",{parentName:"p"},"mensajes m\xe1s legibles")," que son f\xe1ciles de seguir cuando se est\xe1 buscando entre la ",Object(o.b)("strong",{parentName:"p"},"historia del proyecto"),". Pero tambi\xe9n, usamos los mensajes de commit de ",Object(o.b)("inlineCode",{parentName:"p"},"git")," para generar el ",Object(o.b)("strong",{parentName:"p"},"registro de cambios del proyecto"),"."),Object(o.b)("p",null,"Seguimos las convenciones de mensajes de commit como se muestra a continuaci\xf3n:"),Object(o.b)("h3",{id:"formato-del-mensaje-del-commit"},"Formato del mensaje del commit"),Object(o.b)("p",null,"Cada mensaje de commit consiste en un ",Object(o.b)("strong",{parentName:"p"},"encabezado"),", un ",Object(o.b)("strong",{parentName:"p"},"cuerpo")," y un ",Object(o.b)("strong",{parentName:"p"},"pi\xe9"),". El encabezado tiene un especial formato que incluye un ",Object(o.b)("strong",{parentName:"p"},"tipo"),", un ",Object(o.b)("strong",{parentName:"p"},"\xe1mbito")," y un ",Object(o.b)("strong",{parentName:"p"},"aspecto o tema"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"<tipo>(<ambito>): <aspecto>\n<BLANK LINE>\n<cuerpo>\n<BLANK LINE>\n<pie>\n")),Object(o.b)("p",null,"El ",Object(o.b)("strong",{parentName:"p"},"encabezado")," es obligatorio y el ",Object(o.b)("strong",{parentName:"p"},"\xe1mbito")," del encabezado es opcional."),Object(o.b)("p",null,"Ninguna l\xednea del mensaje de commit puede ser m\xe1s larga que 100 caracteres. Esto permite que el mensaje sea f\xe1cil de leer en GitHub as\xed como tambi\xe9n en varias herramientas de ",Object(o.b)("inlineCode",{parentName:"p"},"git"),"."),Object(o.b)("p",null,"El pie debe contener ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/closing-issues-via-commit-messages/"}),"una referencia de cierre de un issue"),", si hay alguna."),Object(o.b)("p",null,"Ejemplos:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"docs(changelog): update changelog to beta.5\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"fix(release): need to depend on latest rxjs and zone.js\n\nThe version in our package.json gets copied to the one we publish, and users need the latest of these.\n")),Object(o.b)("p",null,"M\xe1s ejemplos aqu\xed: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/angular/angular/commits/master"}),"samples")),Object(o.b)("h3",{id:"revertir"},"Revertir"),Object(o.b)("p",null,"Si el commit revierte un commit previo, debe empezar con ",Object(o.b)("inlineCode",{parentName:"p"},"revert: "),", seguido por el encabezado del commit revertido. En el cuerpo, deber\xeda decir: ",Object(o.b)("inlineCode",{parentName:"p"},"This reverts commit <hash>"),", donde el hash is el SHA del commit que est\xe1 siendo revertido."),Object(o.b)("h3",{id:"tipo"},"Tipo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"build"),": Cambios que afectan el sistema de operaci\xf3n o dependencias externas (ejemplo scopes: gulp, broccoli, npm)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ci"),": Cambios a los scripts y archivos de configuraci\xf3n de CI (ejemplo scopes: Travis, Circle, BrowserStack, SauceLabs)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"docs"),": Cambios s\xf3lo en la documentaci\xf3n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"feat"),": Una nueva caracter\xedstica"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"fix"),": Un arreglo de un bug"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"perf"),": Cambio en el c\xf3digo que mejora el rendimiento"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"refactor"),": Cambio en el c\xf3digo que no arregla un bug ni a\xf1ade una caracter\xedstica"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style"),": Cambios que no afectar en significado del c\xf3digo (espacios en blanco, formato, puntos y comas olvidados, etc)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"test"),": A\xf1adir pruebas faltantes o corregir las existentes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"content"),": A\xf1adir o remover contenido"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"devtools"),": Heramientas para desarrolladores")),Object(o.b)("h3",{id:"\xe1mbito"},"\xc1mbito"),Object(o.b)("p",null,"El \xe1mbito es el nombre del componente o servicio que afecta, ejemplo:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"common")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"smart-contracts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"webapp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"graphql")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"frontend")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"demux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"docker"))),Object(o.b)("h3",{id:"aspecto"},"Aspecto"),Object(o.b)("p",null,"El aspecto contiene una breve descripci\xf3n del cambio:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'usa el imperativo, tiempo presente: "cambio" no "cambiado" ni "cambios"'),Object(o.b)("li",{parentName:"ul"},"no pongas la primera letra en may\xfascula"),Object(o.b)("li",{parentName:"ul"},"no a\xf1adas (.) al final")),Object(o.b)("h3",{id:"cuerpo"},"Cuerpo"),Object(o.b)("p",null,"Justo como en el ",Object(o.b)("strong",{parentName:"p"},"aspecto"),', usa el imperativo, tiempo presente: "cambio" no "cambiado" ni "cambios".\nEl cuerpo debe incluir la motivaci\xf3n para el cambio y contrastar esto con el comportamiento anterior.'),Object(o.b)("h3",{id:"pi\xe9"},"Pi\xe9"),Object(o.b)("p",null,"El pi\xe9 debe contender cualquier informaci\xf3n acerca de los ",Object(o.b)("strong",{parentName:"p"},"cambios importantes con repercusiones (breaking changes)")," y es tambi\xe9n el lugar para referenciar los ",Object(o.b)("inlineCode",{parentName:"p"},"issues")," de GitHub que el presente commit ",Object(o.b)("strong",{parentName:"p"},"cierra"),"."),Object(o.b)("p",null,"Los ",Object(o.b)("strong",{parentName:"p"},"Breaking Changes")," deben empezar con la palabra",Object(o.b)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," con un espacio o dos nuevas l\xedneas.El resto del mensaje de commit es luego usado para esto."),Object(o.b)("h2",{id:"reportar-bugs"},"Reportar bugs"),Object(o.b)("p",null,"Antes de subir tu ",Object(o.b)("inlineCode",{parentName:"p"},"issue")," por favor revisa que has completado los siguientes pasos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Aseg\xfarate de estar en la \xfaltima versi\xf3n."),Object(o.b)("li",{parentName:"ul"},"Usa la funcionalidad de b\xfasqueda para asegurarte de que el bug no ha sido reportado a\xfan.")),Object(o.b)("p",null,"Los reportes de bug deben contener la siguiente informaci\xf3n:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Summary: Una breve descripci\xf3n."),Object(o.b)("li",{parentName:"ul"},"Steps to reproduce: \xbfC\xf3mo encontraste el bug? Instrucciones para reproducirlo."),Object(o.b)("li",{parentName:"ul"},"Expected behavior: \xbfC\xf3mo esperas que se comporte?"),Object(o.b)("li",{parentName:"ul"},"Actual behavior: \xbfC\xf3mo se comporta actualmente?"),Object(o.b)("li",{parentName:"ul"},"References: V\xednculos a cualquier tag o recursos de informaci\xf3n."),Object(o.b)("li",{parentName:"ul"},"Si es posible, a\xf1adie informaci\xf3n visual del bug. Una captura de pantalla o un gif.")),Object(o.b)("h2",{id:"lanzamientos"},"Lanzamientos"),Object(o.b)("p",null,"Lanzamos el software para producci\xf3n usando las etiquetas de GitHub ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://semver.org"}),"Semver"),', excepto que la versi\xf3n tiene nombres sem\xe1nticos, por ejemplo "Breaking.Feature.Fix" en lugar de "Major.Minor.Patch".'),Object(o.b)("h4",{id:"breakingfeaturefix"},"Breaking.Feature.Fix"),Object(o.b)("p",null,"No decidimos cu\xe1l ser\xe1 la versi\xf3n. Los cambios en el API deciden. Los n\xfameros en la versi\xf3n son para computadoras, no para personas. Los nombres en los lazamientos son para las personas."),Object(o.b)("h5",{id:"breaking"},"Breaking"),Object(o.b)("p",null,'Cualquier "breaking change", no importa cu\xe1n peque\xf1o, incrementa el n\xfamero de la versi\xf3n. Incrementar la versi\xf3n no tiene relaci\xf3n con emitir un lanzamiento.'),Object(o.b)("h5",{id:"caracter\xedstica-feature"},"Caracter\xedstica (Feature)"),Object(o.b)("p",null,"Cuando una nueva caracter\xedstica es a\xf1adida, esto puede ser tan peque\xf1a como propiedad p\xfablica, o tan larga como m\xf3dulo siendo expuesto."),Object(o.b)("h5",{id:"fix"},"Fix"),Object(o.b)("p",null,"Cuando una caracter\xedstica documentada no se comporta como est\xe1 documentada, o cuando un problema de seguridad es descubierto y arreglado sin alterar el comportamiento documentado."),Object(o.b)("h3",{id:"generaci\xf3n-de-registro-de-cambios"},"Generaci\xf3n de Registro de cambios"),Object(o.b)("p",null,"On each release we generate a changelog file to document changes using the standard ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rafinskipg/git-changelog"}),"git-changelog")," package. There's an npm task for it."),Object(o.b)("p",null,"En cada nuevo lanzamiento, generamos un archivo de registro de cambios usando el est\xe1ndar ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rafinskipg/git-changelog"}),"git-changelog"),". Hay una tarea de npm para esto."),Object(o.b)("h2",{id:"herramientas-de-git-avanzadas"},"Herramientas de git avanzadas"),Object(o.b)("p",null,"Hay tambi\xe9n herramientas como ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.github.com/"}),"Hub")," y ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tj/git-extras"}),"git-extras")," que facilitan la interacci\xf3n con GitHub. Puedes aprovechar estas herramientas para contribuir a este repositorio."),Object(o.b)("h2",{id:"est\xe1ndares-de-c\xf3digo"},"Est\xe1ndares de C\xf3digo"),Object(o.b)("p",null,"Usamos ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://standardjs.com"}),"standardjs code style"),"."),Object(o.b)("h2",{id:"integraci\xf3n-continua-y-entrega"},"Integraci\xf3n Continua y Entrega"),Object(o.b)("p",null,"Esto es un trabajo en progeso, problamente usaremos Netlify y TravisCI."),Object(o.b)("h2",{id:"pre-commit-hooks"},"Pre-commit Hooks"),Object(o.b)("p",null,"Usamos los pre-commit hooks para asegurarnos que los est\xe1ndares de c\xf3digo y las convenciones de mensajes son cumplidas."))}b.isMDXComponent=!0}}]);