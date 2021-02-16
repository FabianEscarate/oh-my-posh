(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||i;return t?o.a.createElement(m,l(l({ref:n},s),{},{components:t})):o.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(110)),a={id:"node",title:"Node",sidebar_label:"Node"},l={unversionedId:"node",id:"node",isDocsHomePage:!1,title:"Node",description:"What",source:"@site/docs/segment-node.md",slug:"/node",permalink:"/docs/node",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-node.md",version:"current",sidebar_label:"Node",sidebar:"docs",previous:{title:"Kubectl Context",permalink:"/docs/kubectl"},next:{title:"os",permalink:"/docs/os"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what"},"What"),Object(i.b)("p",null,"Display the currently active node version."),Object(i.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "node",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#6CA35E",\n  "properties": {\n    "prefix": " \\uE718 "\n  }\n}\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"display_version: ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," - display the node version - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"display_error: ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the version information - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"missing_command_text: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),Object(i.b)("li",{parentName:"ul"},"display_mode: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"always"),": The segment is always displayed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"files"),": The segment is only displayed when ",Object(i.b)("inlineCode",{parentName:"li"},"*.js"),", ",Object(i.b)("inlineCode",{parentName:"li"},"*.ts"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," files are present (default)"))),Object(i.b)("li",{parentName:"ul"},"enable_version_mismatch: ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," - color the segment when the version in ",Object(i.b)("inlineCode",{parentName:"li"},".nvmrc")," doesn't match the\nreturned node version"),Object(i.b)("li",{parentName:"ul"},"color_background: ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," - color the background or foreground for ",Object(i.b)("inlineCode",{parentName:"li"},"version_mismatch_color")," - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"version_mismatch_color: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," ","[color][colors]"," - the color to use for ",Object(i.b)("inlineCode",{parentName:"li"},"enable_version_mismatch")," - defaults to\nsegment's background or foreground color")))}p.isMDXComponent=!0}}]);