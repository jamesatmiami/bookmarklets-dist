!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(6),a=n(o),l=r(7),i=n(l),u=r(2);!function(){function e(e,t){return new i["default"](e,"INTERACTIVE INFO")}function t(e,t){t.color=null===e.accName?"maroon":"#008080"}var r=[{selector:"a",color:"olive",label:"a"},{selector:"audio[controls]",color:"olive",label:"audio"},{selector:"button",color:"olive",label:"button"},{selector:"embed",color:"purple",label:"embed"},{selector:"iframe",color:"teal",label:"iframe"},{selector:"img[usemap]",color:"maroon",label:"img"},{selector:"input",color:"navy",label:"input"},{selector:"keygen",color:"teal",label:"keygen"},{selector:"label",color:"purple",label:"label"},{selector:"object[usemap]",color:"gray",label:"object"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"navy",label:"textarea"},{selector:"video[controls]",color:"navy",label:"video"},{selector:"meter",color:"maroon",label:"meter"},{selector:"output",color:"brown",label:"output"},{selector:"progress",color:"gray",label:"progress"},{selector:"area",color:"brown",label:"area"},{selector:"details",color:"purple",label:"details"},{selector:"svg",color:"green",label:"svg"},{selector:"[tabindex]",color:"teal",label:"tabindex"}],n=r.map(function(e){return e.selector}).join(", "),o={msgTitle:"Interactive",msgText:"No interactive elements ("+n+") found.",targetList:r,cssClass:u.interactiveCss,getInfo:e,evalInfo:t,dndFlag:!0},l=new a["default"]("a11yInteractive",o);l.run()}()},function(e,t,r){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function o(e,t){var r=e.getAttribute(t);return null===r?"":n(r)}function a(e){var t=e.tagName.toLowerCase();switch(t){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function l(e){var t=e.getAttribute("alt");return null!==t?0===n(t).length:!1}function i(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function u(e,t){var r=t,n=getComputedStyle(e,":before").content,o=getComputedStyle(e,":after").content;return"none"!==n&&(r=n+r),"none"!==o&&(r+=o),r}function s(e,t){var r="";if(e===t)return"";switch(e.nodeType){case Node.ELEMENT_NODE:if(a(e))r=o(e,"alt");else if((0,y.isEmbeddedControl)(e))r=(0,y.getEmbeddedControlValue)(e);else if(e.hasChildNodes()){for(var l=e.childNodes,i=[],c=0;c<l.length;c++){var m=s(l[c],t);m.length&&i.push(m)}r=i.length?i.join(" "):""}r=u(e,r);break;case Node.TEXT_NODE:r=n(e.textContent)}return r}function c(e,t){var r="";if(e.hasChildNodes()){for(var n=e.childNodes,o=[],a=0;a<n.length;a++){var l=s(n[a],t);l.length&&o.push(l)}r=o.length?o.join(" "):""}return u(e,r)}function m(e,t){var r=[],o=void 0;return Array.prototype.forEach.call(e.childNodes,function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(o=c(e),o.length&&r.push(o));break;case Node.TEXT_NODE:o=n(e.textContent),o.length&&r.push(o)}}),r.length?r.join(" "):""}function d(e,t){var r=void 0;return r=o(e,t),r.length?{name:r,source:t}:null}function f(e){var t=e.getAttribute("alt");return null!==t?(t=n(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function b(e){var t=void 0;return t=c(e),t.length?{name:t,source:"contents"}:null}function p(e){return e.length?{name:e,source:"default"}:null}function g(e,t){var r=e.querySelector(t);if(r){var n=c(r);if(n.length)return{name:n,source:t+" element"}}return null}function h(e){var t=void 0,r=void 0;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'),r&&(t=c(r,e),t.length))?{name:t,source:"label reference"}:"function"==typeof e.closest&&(r=e.closest("label"),r&&(t=c(r,e),t.length))?{name:t,source:"label encapsulation"}:null}function v(e){function t(e){return e.hasAttribute("open")}var r=void 0,n=void 0;if(n=e.querySelector("summary"),n&&(r=c(n)),t(e)){if(r+=m(e,function(e){return"summary"!==e.tagName.toLowerCase()}),r.length)return{name:r,source:"contents"}}else if(r.length)return{name:r,source:"summary element"};return null}Object.defineProperty(t,"__esModule",{value:!0}),t.normalize=n,t.getAttributeValue=o,t.hasEmptyAltText=l,t.isLabelableElement=i,t.getElementContents=c,t.nameFromAttribute=d,t.nameFromAltAttribute=f,t.nameFromContents=b,t.nameFromDefault=p,t.nameFromDescendant=g,t.nameFromLabelElement=h,t.nameFromDetailsOrSummary=v;var y=r(9)},function(e,t,r){"use strict";function n(e){function t(e){for(var t=!0;t;){var r=e;if(t=!1,r.nodeType===Node.DOCUMENT_NODE)return!0;var n=window.getComputedStyle(r,null),o=n.getPropertyValue("display"),a=n.getPropertyValue("visibility"),l=r.getAttribute("hidden"),i=r.getAttribute("aria-hidden");if("none"===o||"hidden"===a||null!==l||"true"===i)return!1;e=r.parentNode,t=!0,n=o=a=l=i=void 0}}return t(e)}function o(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function a(e,t){return"function"==typeof e.closest?t.some(function(t){return null!==e.closest(t)}):!1}function l(e,t){var r=e.parentElement.tagName.toLowerCase();return r?t.some(function(e){return r===e}):!1}function i(e){var t=e.targetList,r=e.cssClass,o=e.getInfo,a=e.evalInfo,l=e.dndFlag,i=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);m&&t.length&&console.log(e.label+": "+t.length),"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){if(n(t)){var u=o(t,e);m&&u.accName&&console.log("accName: "+u.accName.name),a&&a(u,e);var d=t.getBoundingClientRect(),f=(0,s.createOverlay)(e,d,r);l&&(0,s.addDragAndDrop)(f);var b=f.firstChild;b.title=(0,c.formatInfo)(u),document.body.appendChild(f),i+=1}})}),i}function u(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=o,t.isDescendantOf=a,t.hasParentWithName=l,t.addNodes=i,t.removeNodes=u;var s=r(11),c=r(4),m=!1,d="a11yGfdXALm0";t.formsCss=d;var f="a11yGfdXALm1";t.headingsCss=f;var b="a11yGfdXALm2";t.imagesCss=b;var p="a11yGfdXALm3";t.landmarksCss=p;var g="a11yGfdXALm4";t.listsCss=g;var h="a11yGfdXALm5";t.interactiveCss=h},function(e,t,r){"use strict";function n(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r?!0:"optgroup"===r&&"select"===n?!0:"datalist"===r?!0:!1}function o(e){for(var t=e.split(" "),r=function(e){var r=t[e].toLowerCase(),n=s.find(function(e){return e===r});return n?{v:n}:void 0},n=0;n<t.length;n++){var o=r(n);if("object"==typeof o)return o.v}return null}function a(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return o((0,u.getAttributeValue)(e,"role"));switch(t){case"a":if(e.hasAttribute("href"))return"link";break;case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!(0,i.isDescendantOf)(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":return"heading";case"h2":return"heading";case"h3":return"heading";case"h4":return"heading";case"h5":return"heading";case"h6":return"heading";case"header":if(!(0,i.isDescendantOf)(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!(0,u.hasEmptyAltText)(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if((0,i.hasParentWithName)(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(n(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":return"rowgroup";case"tfoot":return"rowgroup";case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function l(e){var t=a(e);if(null===t)return!1;var r=["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"],n=r.find(function(e){return e===t});return"undefined"!=typeof n}Object.defineProperty(t,"__esModule",{value:!0}),t.getValidRole=o,t.getAriaRole=a,t.nameFromIncludesContents=l;var i=r(2),u=r(1),s=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"]},function(e,t,r){"use strict";function n(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var o=(0,a.getAttributeValue)(e,"for");o.length&&(r+=' [for="'+o+'"]')}if((0,a.isLabelableElement)(e)){var l=e.id;l&&l.length&&(r+=' [id="'+l+'"]')}if(e.hasAttribute("role")){var i=(0,a.getAttributeValue)(e,"role");i.length&&(r+=' [role="'+i+'"]')}return r}function o(e){var t="",r=e.title,n=e.element,o=e.grpLabels,a=e.accName,l=e.accDesc,i=e.role,u=e.props;if(t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),o&&o.length)for(var s=o.length-1;s>=0;s--)t+="\nGRP. LABEL: "+o[s].name+"\nFROM: "+o[s].source;return a&&(t+="\nACC. NAME: "+a.name+"\nFROM: "+a.source),l&&(t+="\nACC. DESC: "+l.name+"\nFROM: "+l.source),i&&(t+="\nROLE: "+i),u&&(t+="\nPROPERTIES: "+u),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementInfo=n,t.formatInfo=o;var a=r(1)},function(e,t){"use strict";function r(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,r="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:r}}function n(e,t,n){function o(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-m+"px",e.style.top=t.clientY+n.y-d+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",o,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",o),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var l=r(),i=n.clientX+l.x,u=n.clientY+l.y,s=e.offsetLeft,c=e.offsetTop,m=i-s,d=u-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",o),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=r,t.drag=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),i=r(8),u=n(i),s=function(){function e(t,r){var n=this;return o(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=r.cssClass,this.msgTitle=r.msgTitle,this.msgText=r.msgText,this.params=r,this.show=!1,window.addEventListener("resize",function(e){(0,l.removeNodes)(n.cssClass),u.resize(),n.show=!1}),void(window[t]=this))}return a(e,[{key:"run",value:function(){u.hide(),this.show=!this.show,this.show?0===(0,l.addNodes)(this.params)&&(u.show(this.msgTitle,this.msgText),this.show=!1):(0,l.removeNodes)(this.cssClass)}}]),e}();t["default"]=s,e.exports=t["default"]},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(null===e||null===t)return!1;var r=e.name,n=t.name;return"string"==typeof r&&"string"==typeof n?r.toLowerCase().includes(n.toLowerCase()):!1}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(10),i=r(4),u=r(3),s=function(){function e(t,r){n(this,e),this.title=r,this.element=(0,i.getElementInfo)(t),this.grpLabels=(0,l.getGroupingLabels)(t),this.accName=(0,l.getAccessibleName)(t),this.accDesc=(0,l.getAccessibleDesc)(t),this.role=(0,u.getAriaRole)(t),o(this.accName,this.accDesc)&&(this.accDesc=null)}return a(e,[{key:"addProps",value:function(e){this.props=e}}]),e}();t["default"]=s,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=(0,s.getScrollOffsets)();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function o(e){var t=document.createElement("div"),r=document.createElement("button");return t.className="oaa-message-dialog",n(t),r.onclick=e,t.appendChild(r),document.body.appendChild(t),t}function a(e){e&&document.body.removeChild(e)}function l(e,t){var r,n;window[c]||(window[c]=o(i)),r=document.createElement("h2"),r.innerHTML=e,window[c].appendChild(r),n=document.createElement("div"),n.innerHTML=t,window[c].appendChild(n)}function i(){window[c]&&(a(window[c]),delete window[c])}function u(){window[c]&&n(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=l,t.hide=i,t.resize=u;var s=r(5),c="a11yMessageDialog"},function(e,t,r){"use strict";function n(e){return(0,f.normalize)(e.value)}function o(e){var t=void 0;return t=(0,f.getAttributeValue)(e,"aria-valuetext"),t.length?t:(t=(0,f.getAttributeValue)(e,"aria-valuenow"),t.length?t:n(e))}function a(e){var t=["email","password","search","tel","text","url"],r=e.tagName.toLowerCase(),o=e.type;return"input"===r&&-1!==t.indexOf(o)?n(e):"textarea"===r?n(e):""}function l(e){var t=["email","search","tel","text","url"],r=e.tagName.toLowerCase(),o=e.type;return"input"===r&&-1!==t.indexOf(o)?n(e):""}function i(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"range"===r?o(e):""}function u(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"number"===r?o(e):""}function s(e){var t=e.tagName.toLowerCase();if("select"===t){for(var r=[],n=e.selectedOptions,o=0;o<n.length;o++){var a=n[o],l=(0,f.normalize)(a.value);l.length&&r.push(l)}if(r.length)return r.join(" ")}return""}function c(e){var t=["textbox","combobox","listbox","slider","spinbutton"],r=(0,d.getAriaRole)(e);return-1!==t.indexOf(r)}function m(e){var t=(0,d.getAriaRole)(e);switch(t){case"textbox":return a(e);case"combobox":return l(e);case"listbox":return s(e);case"slider":return i(e);case"spinbutton":return u(e)}return""}Object.defineProperty(t,"__esModule",{value:!0}),t.isEmbeddedControl=c,t.getEmbeddedControlValue=m;var d=r(3),f=r(1)},function(e,t,r){"use strict";function n(e){function t(e,r){var n=e.closest("fieldset");if(n){var o=n.querySelector("legend");if(o){var a=(0,s.getElementContents)(o);a.length&&r.push({name:a,source:"fieldset/legend"})}t(n.parentNode,r)}}var r=[];return"function"!=typeof e.closest?r:(t(e,r),r)}function o(e){return(0,s.isLabelableElement)(e)?n(e):[]}function a(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=e.tagName.toLowerCase(),n=(0,c.getAriaRole)(e),o=null;if(n&&("presentation"===n||"none"===n))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(o=(0,s.nameFromLabelElement)(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":o=(0,s.nameFromLabelElement)(e),null===o&&(o=(0,s.nameFromAttribute)(e,"placeholder"));break;case"button":o=(0,s.nameFromAttribute)(e,"value");break;case"reset":o=(0,s.nameFromAttribute)(e,"value"),null===o&&(o=(0,s.nameFromDefault)("Reset"));break;case"submit":o=(0,s.nameFromAttribute)(e,"value"),null===o&&(o=(0,s.nameFromDefault)("Submit"));break;case"image":o=(0,s.nameFromAltAttribute)(e),null===o&&(o=(0,s.nameFromAttribute)(e,"value"));break;default:o=(0,s.nameFromLabelElement)(e)}break;case"button":o=(0,s.nameFromContents)(e);break;case"label":o=(0,s.nameFromContents)(e);break;case"keygen":case"meter":case"output":case"progress":case"select":o=(0,s.nameFromLabelElement)(e);break;case"textarea":o=(0,s.nameFromLabelElement)(e),null===o&&(o=(0,s.nameFromAttribute)(e,"placeholder"));break;case"audio":o={name:"NOT YET IMPLEMENTED",source:""};break;case"embed":o={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":o=(0,s.nameFromAttribute)(e,"title");break;case"img":case"area":o=(0,s.nameFromAltAttribute)(e);break;case"object":o={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":o=(0,s.nameFromDescendant)(e,"title");break;case"video":o={name:"NOT YET IMPLEMENTED",source:""};break;case"a":o=(0,s.nameFromContents)(e);break;case"details":o=(0,s.nameFromDetailsOrSummary)(e);break;case"figure":o=(0,s.nameFromDescendant)(e,"figcaption");break;case"table":o=(0,s.nameFromDescendant)(e,"caption");break;default:((0,c.nameFromIncludesContents)(e)||t)&&(o=(0,s.nameFromContents)(e))}return null===o&&(o=(0,s.nameFromAttribute)(e,"title")),o}function l(e,t){var r=(0,s.getAttributeValue)(e,t),n=void 0,o=void 0,a=void 0,l=void 0,u=[];if(r.length)for(n=r.split(" "),o=0;o<n.length;o++)a=document.getElementById(n[o]),a&&(l=i(a,!0),l&&l.name.length&&u.push(l.name));return u.length?{name:u.join(" "),source:t}:null}function i(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=l(e,"aria-labelledby")),null===r&&(r=(0,s.nameFromAttribute)(e,"aria-label")),null===r&&(r=a(e,t)),r}function u(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=l(e,"aria-describedby")),null===r&&(r=(0,s.nameFromAttribute)(e,"title")),r}Object.defineProperty(t,"__esModule",{value:!0}),t.getGroupingLabels=o,t.nameFromNativeSemantics=a,t.getAccessibleName=i,t.getAccessibleDesc=u;var s=r(1),c=r(3)},function(e,t,r){"use strict";function n(e,t,r){var n=document.createElement("div"),o=document.createElement("div"),i=(0,a.getScrollOffsets)(),u=34,s=27;return n.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),n.startLeft=t.left+i.x+"px",n.startTop=t.top+i.y+"px",n.style.left=n.startLeft,n.style.top=n.startTop,n.style.width=Math.max(t.width,u)+"px",n.style.height=Math.max(t.height,s)+"px",n.style.borderColor=e.color,n.style.zIndex=l,o.setAttribute("class","oaa-overlay-label"),o.style.backgroundColor=e.color,o.innerHTML=e.label,n.appendChild(o),n}function o(e){function t(e){var t=100;e.style.zIndex=l+=t}function r(e){e.style.left=e.startLeft,e.style.top=e.startTop}var n=e.firstChild;n.onmousedown=function(e){(0,a.drag)(this.parentNode,t,e)},n.ondblclick=function(e){r(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=n,t.addDragAndDrop=o;var a=r(5),l=1e5}]);