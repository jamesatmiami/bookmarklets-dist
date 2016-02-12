!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(6),o=n(a),i=r(7),u=n(i),s=r(2);!function(){function e(e,t){return new u["default"](e,"IMAGE INFO")}var t=[{selector:"area",color:"teal",label:"area"},{selector:"img",color:"olive",label:"img"},{selector:"svg",color:"purple",label:"svg"}],r=t.map(function(e){return e.selector}).join(", "),n={msgTitle:"Images",msgText:"No image elements ("+r+") found.",targetList:t,cssClass:s.imagesCss,getInfo:e,dndFlag:!0},a=new o["default"]("a11yImages",n);a.run()}()},function(e,t,r){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function a(e,t){var r=e.getAttribute(t);return null===r?"":n(r)}function o(e){var t=e.tagName.toLowerCase();switch(t){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function i(e){var t=e.getAttribute("alt");return null!==t?0===n(t).length:!1}function u(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function s(e,t){var r=t,n=getComputedStyle(e,":before").content,a=getComputedStyle(e,":after").content;return"none"!==n&&(r=n+r),"none"!==a&&(r+=a),r}function l(e,t){var r="";if(e===t)return"";switch(e.nodeType){case Node.ELEMENT_NODE:if(o(e))r=a(e,"alt");else if((0,y.isEmbeddedControl)(e))r=(0,y.getEmbeddedControlValue)(e);else if(e.hasChildNodes()){for(var i=e.childNodes,u=[],c=0;c<i.length;c++){var m=l(i[c],t);m.length&&u.push(m)}r=u.length?u.join(" "):""}r=s(e,r);break;case Node.TEXT_NODE:r=n(e.textContent)}return r}function c(e,t){var r="";if(e.hasChildNodes()){for(var n=e.childNodes,a=[],o=0;o<n.length;o++){var i=l(n[o],t);i.length&&a.push(i)}r=a.length?a.join(" "):""}return s(e,r)}function m(e,t){var r=[],a=void 0;return Array.prototype.forEach.call(e.childNodes,function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(a=c(e),a.length&&r.push(a));break;case Node.TEXT_NODE:a=n(e.textContent),a.length&&r.push(a)}}),r.length?r.join(" "):""}function d(e,t){var r=void 0;return r=a(e,t),r.length?{name:r,source:t}:null}function f(e){var t=e.getAttribute("alt");return null!==t?(t=n(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function b(e){var t=void 0;return t=c(e),t.length?{name:t,source:"contents"}:null}function p(e){return e.length?{name:e,source:"default"}:null}function g(e,t){var r=e.querySelector(t);if(r){var n=c(r);if(n.length)return{name:n,source:t+" element"}}return null}function h(e){var t=void 0,r=void 0;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'),r&&(t=c(r,e),t.length))?{name:t,source:"label reference"}:"function"==typeof e.closest&&(r=e.closest("label"),r&&(t=c(r,e),t.length))?{name:t,source:"label encapsulation"}:null}function v(e){function t(e){return e.hasAttribute("open")}var r=void 0,n=void 0;if(n=e.querySelector("summary"),n&&(r=c(n)),t(e)){if(r+=m(e,function(e){return"summary"!==e.tagName.toLowerCase()}),r.length)return{name:r,source:"contents"}}else if(r.length)return{name:r,source:"summary element"};return null}Object.defineProperty(t,"__esModule",{value:!0}),t.normalize=n,t.getAttributeValue=a,t.hasEmptyAltText=i,t.isLabelableElement=u,t.getElementContents=c,t.nameFromAttribute=d,t.nameFromAltAttribute=f,t.nameFromContents=b,t.nameFromDefault=p,t.nameFromDescendant=g,t.nameFromLabelElement=h,t.nameFromDetailsOrSummary=v;var y=r(9)},function(e,t,r){"use strict";function n(e){function t(e){for(var t=!0;t;){var r=e;if(t=!1,r.nodeType===Node.DOCUMENT_NODE)return!0;var n=window.getComputedStyle(r,null),a=n.getPropertyValue("display"),o=n.getPropertyValue("visibility"),i=r.getAttribute("hidden"),u=r.getAttribute("aria-hidden");if("none"===a||"hidden"===o||null!==i||"true"===u)return!1;e=r.parentNode,t=!0,n=a=o=i=u=void 0}}return t(e)}function a(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function o(e,t){return"function"==typeof e.closest?t.some(function(t){return null!==e.closest(t)}):!1}function i(e,t){var r=e.parentElement.tagName.toLowerCase();return r?t.some(function(e){return r===e}):!1}function u(e){var t=e.targetList,r=e.cssClass,a=e.getInfo,o=e.evalInfo,i=e.dndFlag,u=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);m&&t.length&&console.log(e.label+": "+t.length),"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){if(n(t)){var s=a(t,e);m&&s.accName&&console.log("accName: "+s.accName.name),o&&o(s,e);var d=t.getBoundingClientRect(),f=(0,l.createOverlay)(e,d,r);i&&(0,l.addDragAndDrop)(f);var b=f.firstChild;b.title=(0,c.formatInfo)(s),document.body.appendChild(f),u+=1}})}),u}function s(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=a,t.isDescendantOf=o,t.hasParentWithName=i,t.addNodes=u,t.removeNodes=s;var l=r(11),c=r(4),m=!1,d="a11yGfdXALm0";t.formsCss=d;var f="a11yGfdXALm1";t.headingsCss=f;var b="a11yGfdXALm2";t.imagesCss=b;var p="a11yGfdXALm3";t.landmarksCss=p;var g="a11yGfdXALm4";t.listsCss=g;var h="a11yGfdXALm5";t.interactiveCss=h},function(e,t,r){"use strict";function n(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r?!0:"optgroup"===r&&"select"===n?!0:"datalist"===r?!0:!1}function a(e){for(var t=e.split(" "),r=function(e){var r=t[e].toLowerCase(),n=l.find(function(e){return e===r});return n?{v:n}:void 0},n=0;n<t.length;n++){var a=r(n);if("object"==typeof a)return a.v}return null}function o(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return a((0,s.getAttributeValue)(e,"role"));switch(t){case"a":if(e.hasAttribute("href"))return"link";break;case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!(0,u.isDescendantOf)(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":return"heading";case"h2":return"heading";case"h3":return"heading";case"h4":return"heading";case"h5":return"heading";case"h6":return"heading";case"header":if(!(0,u.isDescendantOf)(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!(0,s.hasEmptyAltText)(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if((0,u.hasParentWithName)(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(n(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":return"rowgroup";case"tfoot":return"rowgroup";case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function i(e){var t=o(e);if(null===t)return!1;var r=["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"],n=r.find(function(e){return e===t});return"undefined"!=typeof n}Object.defineProperty(t,"__esModule",{value:!0}),t.getValidRole=a,t.getAriaRole=o,t.nameFromIncludesContents=i;var u=r(2),s=r(1),l=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"]},function(e,t,r){"use strict";function n(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var a=(0,o.getAttributeValue)(e,"for");a.length&&(r+=' [for="'+a+'"]')}if((0,o.isLabelableElement)(e)){var i=e.id;i&&i.length&&(r+=' [id="'+i+'"]')}if(e.hasAttribute("role")){var u=(0,o.getAttributeValue)(e,"role");u.length&&(r+=' [role="'+u+'"]')}return r}function a(e){var t="",r=e.title,n=e.element,a=e.grpLabels,o=e.accName,i=e.accDesc,u=e.role,s=e.props;if(t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),a&&a.length)for(var l=a.length-1;l>=0;l--)t+="\nGRP. LABEL: "+a[l].name+"\nFROM: "+a[l].source;return o&&(t+="\nACC. NAME: "+o.name+"\nFROM: "+o.source),i&&(t+="\nACC. DESC: "+i.name+"\nFROM: "+i.source),u&&(t+="\nROLE: "+u),s&&(t+="\nPROPERTIES: "+s),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementInfo=n,t.formatInfo=a;var o=r(1)},function(e,t){"use strict";function r(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,r="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:r}}function n(e,t,n){function a(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-m+"px",e.style.top=t.clientY+n.y-d+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function o(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",o,!0),document.removeEventListener("mousemove",a,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",o),e.detachEvent("onmouseup",o),e.detachEvent("onmousemove",a),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var i=r(),u=n.clientX+i.x,s=n.clientY+i.y,l=e.offsetLeft,c=e.offsetTop,m=u-l,d=s-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",a,!0),document.addEventListener("mouseup",o,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",a),e.attachEvent("onmouseup",o),e.attachEvent("onlosecapture",o)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=r,t.drag=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(2),u=r(8),s=n(u),l=function(){function e(t,r){var n=this;return a(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=r.cssClass,this.msgTitle=r.msgTitle,this.msgText=r.msgText,this.params=r,this.show=!1,window.addEventListener("resize",function(e){(0,i.removeNodes)(n.cssClass),s.resize(),n.show=!1}),void(window[t]=this))}return o(e,[{key:"run",value:function(){s.hide(),this.show=!this.show,this.show?0===(0,i.addNodes)(this.params)&&(s.show(this.msgTitle,this.msgText),this.show=!1):(0,i.removeNodes)(this.cssClass)}}]),e}();t["default"]=l,e.exports=t["default"]},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(null===e||null===t)return!1;var r=e.name,n=t.name;return"string"==typeof r&&"string"==typeof n?r.toLowerCase().includes(n.toLowerCase()):!1}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(10),u=r(4),s=r(3),l=function(){function e(t,r){n(this,e),this.title=r,this.element=(0,u.getElementInfo)(t),this.grpLabels=(0,i.getGroupingLabels)(t),this.accName=(0,i.getAccessibleName)(t),this.accDesc=(0,i.getAccessibleDesc)(t),this.role=(0,s.getAriaRole)(t),a(this.accName,this.accDesc)&&(this.accDesc=null)}return o(e,[{key:"addProps",value:function(e){this.props=e}}]),e}();t["default"]=l,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=(0,l.getScrollOffsets)();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function a(e){var t=document.createElement("div"),r=document.createElement("button");return t.className="oaa-message-dialog",n(t),r.onclick=e,t.appendChild(r),document.body.appendChild(t),t}function o(e){e&&document.body.removeChild(e)}function i(e,t){var r,n;window[c]||(window[c]=a(u)),r=document.createElement("h2"),r.innerHTML=e,window[c].appendChild(r),n=document.createElement("div"),n.innerHTML=t,window[c].appendChild(n)}function u(){window[c]&&(o(window[c]),delete window[c])}function s(){window[c]&&n(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=i,t.hide=u,t.resize=s;var l=r(5),c="a11yMessageDialog"},function(e,t,r){"use strict";function n(e){return(0,f.normalize)(e.value)}function a(e){var t=void 0;return t=(0,f.getAttributeValue)(e,"aria-valuetext"),t.length?t:(t=(0,f.getAttributeValue)(e,"aria-valuenow"),t.length?t:n(e))}function o(e){var t=["email","password","search","tel","text","url"],r=e.tagName.toLowerCase(),a=e.type;return"input"===r&&-1!==t.indexOf(a)?n(e):"textarea"===r?n(e):""}function i(e){var t=["email","search","tel","text","url"],r=e.tagName.toLowerCase(),a=e.type;return"input"===r&&-1!==t.indexOf(a)?n(e):""}function u(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"range"===r?a(e):""}function s(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"number"===r?a(e):""}function l(e){var t=e.tagName.toLowerCase();if("select"===t){for(var r=[],n=e.selectedOptions,a=0;a<n.length;a++){var o=n[a],i=(0,f.normalize)(o.value);i.length&&r.push(i)}if(r.length)return r.join(" ")}return""}function c(e){var t=["textbox","combobox","listbox","slider","spinbutton"],r=(0,d.getAriaRole)(e);return-1!==t.indexOf(r)}function m(e){var t=(0,d.getAriaRole)(e);switch(t){case"textbox":return o(e);case"combobox":return i(e);case"listbox":return l(e);case"slider":return u(e);case"spinbutton":return s(e)}return""}Object.defineProperty(t,"__esModule",{value:!0}),t.isEmbeddedControl=c,t.getEmbeddedControlValue=m;var d=r(3),f=r(1)},function(e,t,r){"use strict";function n(e){function t(e,r){var n=e.closest("fieldset");if(n){var a=n.querySelector("legend");if(a){var o=(0,l.getElementContents)(a);o.length&&r.push({name:o,source:"fieldset/legend"})}t(n.parentNode,r)}}var r=[];return"function"!=typeof e.closest?r:(t(e,r),r)}function a(e){return(0,l.isLabelableElement)(e)?n(e):[]}function o(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=e.tagName.toLowerCase(),n=(0,c.getAriaRole)(e),a=null;if(n&&("presentation"===n||"none"===n))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(a=(0,l.nameFromLabelElement)(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":a=(0,l.nameFromLabelElement)(e),null===a&&(a=(0,l.nameFromAttribute)(e,"placeholder"));break;case"button":a=(0,l.nameFromAttribute)(e,"value");break;case"reset":a=(0,l.nameFromAttribute)(e,"value"),null===a&&(a=(0,l.nameFromDefault)("Reset"));break;case"submit":a=(0,l.nameFromAttribute)(e,"value"),null===a&&(a=(0,l.nameFromDefault)("Submit"));break;case"image":a=(0,l.nameFromAltAttribute)(e),null===a&&(a=(0,l.nameFromAttribute)(e,"value"));break;default:a=(0,l.nameFromLabelElement)(e)}break;case"button":a=(0,l.nameFromContents)(e);break;case"label":a=(0,l.nameFromContents)(e);break;case"keygen":case"meter":case"output":case"progress":case"select":a=(0,l.nameFromLabelElement)(e);break;case"textarea":a=(0,l.nameFromLabelElement)(e),null===a&&(a=(0,l.nameFromAttribute)(e,"placeholder"));break;case"audio":a={name:"NOT YET IMPLEMENTED",source:""};break;case"embed":a={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":a=(0,l.nameFromAttribute)(e,"title");break;case"img":case"area":a=(0,l.nameFromAltAttribute)(e);break;case"object":a={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":a=(0,l.nameFromDescendant)(e,"title");break;case"video":a={name:"NOT YET IMPLEMENTED",source:""};break;case"a":a=(0,l.nameFromContents)(e);break;case"details":a=(0,l.nameFromDetailsOrSummary)(e);break;case"figure":a=(0,l.nameFromDescendant)(e,"figcaption");break;case"table":a=(0,l.nameFromDescendant)(e,"caption");break;default:((0,c.nameFromIncludesContents)(e)||t)&&(a=(0,l.nameFromContents)(e))}return null===a&&(a=(0,l.nameFromAttribute)(e,"title")),a}function i(e,t){var r=(0,l.getAttributeValue)(e,t),n=void 0,a=void 0,o=void 0,i=void 0,s=[];if(r.length)for(n=r.split(" "),a=0;a<n.length;a++)o=document.getElementById(n[a]),o&&(i=u(o,!0),i&&i.name.length&&s.push(i.name));return s.length?{name:s.join(" "),source:t}:null}function u(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=i(e,"aria-labelledby")),null===r&&(r=(0,l.nameFromAttribute)(e,"aria-label")),null===r&&(r=o(e,t)),r}function s(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=i(e,"aria-describedby")),null===r&&(r=(0,l.nameFromAttribute)(e,"title")),r}Object.defineProperty(t,"__esModule",{value:!0}),t.getGroupingLabels=a,t.nameFromNativeSemantics=o,t.getAccessibleName=u,t.getAccessibleDesc=s;var l=r(1),c=r(3)},function(e,t,r){"use strict";function n(e,t,r){var n=document.createElement("div"),a=document.createElement("div"),u=(0,o.getScrollOffsets)(),s=34,l=27;return n.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),n.startLeft=t.left+u.x+"px",n.startTop=t.top+u.y+"px",n.style.left=n.startLeft,n.style.top=n.startTop,n.style.width=Math.max(t.width,s)+"px",n.style.height=Math.max(t.height,l)+"px",n.style.borderColor=e.color,n.style.zIndex=i,a.setAttribute("class","oaa-overlay-label"),a.style.backgroundColor=e.color,a.innerHTML=e.label,n.appendChild(a),n}function a(e){function t(e){var t=100;e.style.zIndex=i+=t}function r(e){e.style.left=e.startLeft,e.style.top=e.startTop}var n=e.firstChild;n.onmousedown=function(e){(0,o.drag)(this.parentNode,t,e)},n.ondblclick=function(e){r(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=n,t.addDragAndDrop=a;var o=r(5),i=1e5}]);