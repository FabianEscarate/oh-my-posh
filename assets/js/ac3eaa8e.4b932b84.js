(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(125)),o={id:"contributing_started",title:"Get Started",sidebar_label:"Get Started"},l={unversionedId:"contributing_started",id:"contributing_started",isDocsHomePage:!1,title:"Get Started",description:"Install dependencies",source:"@site/docs/contributing-started.mdx",slug:"/contributing_started",permalink:"/docs/contributing_started",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/contributing-started.mdx",version:"current",sidebar_label:"Get Started",sidebar:"docs",previous:{title:"YouTube Music",permalink:"/docs/ytm"},next:{title:"Add Segment",permalink:"/docs/contributing_segment"}},c=[{value:"Install dependencies",id:"install-dependencies",children:[{value:"go",id:"go",children:[]},{value:"golangci-lint",id:"golangci-lint",children:[]}]},{value:"Get the source code",id:"get-the-source-code",children:[]},{value:"Running tests",id:"running-tests",children:[{value:"Unit tests",id:"unit-tests",children:[]},{value:"golangci-lint",id:"golangci-lint-1",children:[]}]},{value:"Building the app",id:"building-the-app",children:[]},{value:"Get an editor",id:"get-an-editor",children:[{value:"Extra tips",id:"extra-tips",children:[]}]},{value:"Up Next",id:"up-next",children:[]}],s={toc:c};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(r.b)("h3",{id:"go"},"go"),Object(r.b)("p",null,"The codebase is in ",Object(r.b)("a",{parentName:"p",href:"https://golang.org"},"go"),", meaning we need a working go setup before we can do anything else.\nHave a look at the ",Object(r.b)("a",{parentName:"p",href:"https://golang.org/doc/install"},"go guide")," to get up and running with go in no time!"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Oh my Posh needs at least go 1.16."))),Object(r.b)("h3",{id:"golangci-lint"},"golangci-lint"),Object(r.b)("p",null,"To make sure we keep on writing quality code, ",Object(r.b)("a",{parentName:"p",href:"https://golangci-lint.run"},"golang-ci lint")," is used to validate the changes.\nHave a look at the ",Object(r.b)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"local installation guide")," to make sure you can validate this yourself as well."),Object(r.b)("h2",{id:"get-the-source-code"},"Get the source code"),Object(r.b)("p",null,"The source is hosted on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/JanDeDobbeleer/oh-my-posh"},"Github"),". When you want to contribute, create a ",Object(r.b)("a",{parentName:"p",href:"https://guides.github.com/activities/forking/"},"fork")," so you can make changes in\nyour repository and create pull request in the official Oh my Posh repository."),Object(r.b)("p",null,"Clone your fork of Oh my Posh locally, replace ",Object(r.b)("inlineCode",{parentName:"p"},"<user>")," with your Github username."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:<user>/oh-my-posh.git\n")),Object(r.b)("h2",{id:"running-tests"},"Running tests"),Object(r.b)("p",null,"The go source code can be found in the ",Object(r.b)("inlineCode",{parentName:"p"},"src/")," directory, make sure to change to that one before continuing."),Object(r.b)("h3",{id:"unit-tests"},"Unit tests"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"go test -v\n")),Object(r.b)("h3",{id:"golangci-lint-1"},"golangci-lint"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"golangci-lint run\n")),Object(r.b)("h2",{id:"building-the-app"},"Building the app"),Object(r.b)("p",null,"The easiest way to validate your changes is to write tests. Unfortunately, as it's a visual tool, you'll want to validate\nthe changes by running the prompt in your shell as well. You can make use of go's ",Object(r.b)("inlineCode",{parentName:"p"},"bin")," folder which is usually added to\nyour path to add your own Oh my Posh binary to and immediately see the changes appear in your shell."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"go build -o $GOPATH/bin/oh-my-posh\n")),Object(r.b)("h2",{id:"get-an-editor"},"Get an editor"),Object(r.b)("p",null,"A default config(.vscode folder) for ",Object(r.b)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," is available in the repo:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"golangci-lint is configured as the default linter.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recommended extensions available for a smooth bootstrap."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"recommended extensions",src:n(216).default,title:"Recommended extensions"}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Default run and debug configurations available."))),Object(r.b)("p",null,"Once the extensions are installed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Debug can be started by hitting F5."),Object(r.b)("li",{parentName:"ul"},"All tests can be run using the Test explorer.")),Object(r.b)("h3",{id:"extra-tips"},"Extra tips"),Object(r.b)("h4",{id:"configure-delve-in-vs-code"},"Configure Delve in VS Code"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/go-delve/delve"},"Delve")," config is restrictive by default(string limit especially). You can expand some limits in VS Code(",Object(r.b)("inlineCode",{parentName:"p"},"settings.json")," or directly in ",Object(r.b)("inlineCode",{parentName:"p"},"launch.json"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'"go.delveConfig": {\n\n  "dlvLoadConfig": {\n    "followPointers": true,\n    "maxVariableRecurse": 3,\n    "maxStringLen": 400,\n    "maxArrayValues": 400,\n    "maxStructFields": -1\n  },\n  "apiVersion": 2,\n  "showGlobalVariables": false\n}\n')),Object(r.b)("h2",{id:"up-next"},"Up Next"),Object(r.b)("p",null,"With everything set up, you're ready to start making changes and create your first ",Object(r.b)("a",{parentName:"p",href:"https://github.com/JanDeDobbeleer/oh-my-posh/pulls"},"PR"),"!"))}b.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,g=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(g,l(l({ref:t},s),{},{components:n})):i.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/recommended_extensions-7d5808834cb0c035bb9cc14318214cd5.png"}}]);