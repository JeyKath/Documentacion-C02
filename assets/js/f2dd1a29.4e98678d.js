"use strict";(self.webpackChunkproyecto_02=self.webpackChunkproyecto_02||[]).push([[7450],{5680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var r=n(6540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),l=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=t,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,o(o({ref:a},u),{},{components:n})):r.createElement(y,o({ref:a},u))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[p]="string"==typeof e?e:t,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7084:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(8168),t=(n(6540),n(5680));const i={},o="Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",c={unversionedId:"Manual/Manual de Script de Instalaci\xf3n/1 Script de Instalaci\xf3n",id:"Manual/Manual de Script de Instalaci\xf3n/1 Script de Instalaci\xf3n",isDocsHomePage:!1,title:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",description:"Facurador PRO4",source:"@site/docs\\Manual\\Manual de Script de Instalaci\xf3n\\1 Script de Instalaci\xf3n.md",sourceDirName:"Manual/Manual de Script de Instalaci\xf3n",slug:"/Manual/Manual de Script de Instalaci\xf3n/1 Script de Instalaci\xf3n",permalink:"/Documentacion-C02/docs/Manual/Manual de Script de Instalaci\xf3n/1 Script de Instalaci\xf3n",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Manual\\Manual de Script de Instalaci\xf3n\\1 Script de Instalaci\xf3n.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux | Valet",permalink:"/Documentacion-C02/docs/Manual/Manual de Instalaci\xf3n/Pasos"},next:{title:"Pasos",permalink:"/Documentacion-C02/docs/Manual/Manual de Script de Instalaci\xf3n/2 Pasos"}},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",children:[]},{value:"Requisitos previos",id:"requisitos-previos",children:[]}],l={toc:s},u="wrapper";function p(e){let{components:a,...i}=e;return(0,t.yg)(u,(0,r.A)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"docker--gitlab--opci\xf3n-ssl--opci\xf3n-ssh"},"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH"),(0,t.yg)("h6",{id:"facurador-pro4"},(0,t.yg)("em",{parentName:"h6"},"Facurador PRO4")),(0,t.yg)("h2",{id:"descripci\xf3n"},"Descripci\xf3n"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia), su ejecuci\xf3n es muy sencilla.")),(0,t.yg)("h2",{id:"requisitos-previos"},"Requisitos previos"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor informaci\xf3n sobre el acceso SSH visite los siguientes manuales:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#"},"Gu\xeda para acceder con Putty (gesti\xf3n de servidor)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#"},"Gu\xeda para acceder con Winscp (gesti\xf3n de archivos con aplicaci\xf3n de escritorio)")))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalaci\xf3n se encuentre disponible el aplicativo. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta."))),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Instalacion",src:n(6491).A})),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker.")))}p.isMDXComponent=!0},6491:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/instalacion-bc26b12d15b54e99408802ff393f621e.png"}}]);