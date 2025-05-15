(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".wysiwygeditor,.wysiwyg-toolbar--popover,.wysiwyg-toolbar--tooltip{--wysiwyg-background-color: #f5f5f5;--wysiwyg-text-color: #333;--wysiwyg-border-color: #ccc;--wysiwyg-border-radius: 4px;--wysiwyg-max-body-height: 300px;all:unset}.wysiwyg-toolbar{background-color:var(--wysiwyg-background-color);border-bottom:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius) var(--wysiwyg-border-radius) 0 0;border-right:2px solid var(--wysiwyg-background-color);margin:0;padding:10px 10px 0;width:100%;font-weight:400}.wysiwyg-toolbar.wysiwyg-toolbar--popover,.wysiwyg-toolbar.wysiwyg-toolbar--tooltip{position:absolute;background-color:var(--wysiwyg-background-color);border:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius);box-shadow:0 0 5px #0000001a;padding:5px 5px 0;z-index:1;display:none;width:auto}.wysiwyg-toolbar .wysiwyg-toolbar-group{display:inline-block;margin:0 15px 0 0;padding:0;vertical-align:middle}.wysiwyg-toolbar .wysiwyg-toolbar-group [data-command],.wysiwyg-toolbar .wysiwyg-toolbar-group .wysiwyg-toolbar-dropdown-toggle{background-color:var(--wysiwyg-background-color);border:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius);color:var(--wysiwyg-text-color);cursor:pointer;font-size:14px;line-height:1.5;margin:0 0 5px;padding:4px 8px;text-align:center;text-decoration:none;display:inline-block;vertical-align:middle;white-space:nowrap;-webkit-user-select:none;user-select:none;position:relative}.wysiwyg-toolbar .wysiwyg-toolbar-group input[data-command]{text-align:start;cursor:text;width:250px;margin-top:1px}.wysiwyg-toolbar .wysiwyg-toolbar-group button[data-command]:hover{filter:brightness(95%)}.wysiwyg-toolbar .wysiwyg-toolbar-group button[data-command]:active,.wysiwyg-toolbar .wysiwyg-toolbar-group button[data-command].active{filter:brightness(90%)}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown{position:relative;display:inline-block}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle{width:120px;text-align:start}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle:hover{filter:brightness(95%)}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle:active{filter:brightness(90%)}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle:after{content:\"▼\";display:inline-block;margin-left:5px;font-size:11px;right:5px;top:50%;transform:translateY(-50%);position:absolute}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content{display:none;flex-direction:column;position:absolute;width:100%;z-index:1}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content.show{display:flex;z-index:2}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content button[data-command]{margin:0;border:1px solid var(--wysiwyg-border-color);border-bottom:none;border-radius:0;text-align:start}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content button[data-command]:first-child{border-radius:var(--wysiwyg-border-radius) var(--wysiwyg-border-radius) 0 0}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content button[data-command]:last-child{border-bottom:1px solid var(--wysiwyg-border-color);border-radius:0 0 var(--wysiwyg-border-radius) var(--wysiwyg-border-radius)}.wysiwyg-body{cursor:text;padding:10px;outline:none;white-space:pre-wrap;word-wrap:break-word;line-height:1.5;color:var(--wysiwyg-text-color);background-color:var(--wysiwyg-background-color);border:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius);resize:vertical;font-weight:400;width:100%;display:inline-block;max-height:var(--wysiwyg-max-body-height);overflow:auto}.wysiwyg-body img{width:100%;height:100%}.wysiwyg-body.dragging{opacity:.6;position:relative}.wysiwyg-body.dragging:after{content:\"Upload\";pointer-events:none;-webkit-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.5em}.wysiwyg-toolbar+.wysiwyg-body{border-top:none;border-radius:0 0 var(--wysiwyg-border-radius) var(--wysiwyg-border-radius)}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();(function(r,d){typeof exports=="object"&&typeof module<"u"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(r=typeof globalThis<"u"?globalThis:r||self,d(r.WYSIWYGEditor={}))})(this,function(r){"use strict";var m=Object.defineProperty;var g=(r,d,s)=>d in r?m(r,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[d]=s;var c=(r,d,s)=>(g(r,typeof d!="symbol"?d+"":d,s),s);const d="",s={FIXED:"fixed",POPOVER:"popover",TOOLTIP:"tooltip"};class y{constructor(t,e=s.FIXED){c(this,"_editor");c(this,"_displayMode");c(this,"_toolbar");c(this,"_toolbarButtons");c(this,"_body");c(this,"_range");if(!Object.values(s).includes(e))throw new Error("Invalid display mode, please use DisplayMode enum");this._editor=document.getElementById(t),this._editor.classList.add("wysiwygeditor"),this._displayMode=e}init(){this._createToolbar(),this._createBody()}_createToolbar(){this._displayMode==s.POPOVER||this._displayMode==s.TOOLTIP?this._createDynamicToolbar():this._createFixedToolbar(),this._toolbarButtons=this._toolbar.querySelectorAll("button[data-command]"),this._toolbarButtons.length>0&&this._createToolbarButtons(),this._toolbar.querySelector(".wysiwyg-toolbar-dropdown")&&this._createToolbarDropdowns()}_createFixedToolbar(){const t=this._editor.querySelector(".wysiwyg-toolbar");t?(t.classList.add("wysiwyg-toolbar--fixed"),this._toolbar=t):(this._editor.insertAdjacentHTML("afterbegin",'<div class="wysiwyg-toolbar wysiwyg-toolbar--fixed"></div>'),this._toolbar=this._editor.querySelector(".wysiwyg-toolbar"),this._toolbar.innerHTML=this._getDefaultToolbarLayout())}_createDynamicToolbar(){const t=this._editor.querySelector(".wysiwyg-toolbar");t?(this._toolbar=t,this._editor.removeChild(this._toolbar)):(this._toolbar=document.createElement("div"),this._toolbar.classList.add("wysiwyg-toolbar"),this._toolbar.innerHTML=this._getDefaultToolbarLayout()),this._toolbar.classList.add(`wysiwyg-toolbar--${this._displayMode}`),document.body.appendChild(this._toolbar)}_getDefaultToolbarLayout(){function t(){return`
                <div class="wysiwyg-toolbar-dropdown">
                    <div class="wysiwyg-toolbar-dropdown-toggle">
                        <span>Normal</span>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown-content">
                        <button type="button" data-command="fontSize" data-value="7">
                            <span>Huge</span>
                        </button>
                        <button type="button" data-command="fontSize" data-value="5">
                            <span>Large</span>
                        </button>
                        <button type="button" data-command="fontSize" data-value="3">
                            <span>Normal</span>
                        </button>
                        <button type="button" data-command="fontSize" data-value="1">
                            <span>Small</span>
                        </button>
                    </div>
                </div>
            `}function e(){return`
                <div class="wysiwyg-toolbar-dropdown">
                    <div class="wysiwyg-toolbar-dropdown-toggle">
                        <span>Sans-Serif</span>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown-content">
                        <button type="button" data-command="fontName" data-value="sans-serif" style="font-family:sans-serif;">
                            <span>Sans-Serif</span>
                        </button>
                        <button type="button" data-command="fontName" data-value="serif" style="font-family:serif;">
                            <span>Serif</span>
                        </button>
                        <button type="button" data-command="fontName" data-value="monospace" style="font-family:monospace;">
                            <span>Monospace</span>
                        </button>
                    </div>
                </div>
            `}function o(){return`
                <button type="button" data-command="bold" style="font-weight:bold;">
                    <span>B</span>
                </button>
                <button type="button" data-command="italic" style="font-style:italic;padding-right:10px;">
                    <span>I</span>
                </button>
                <button type="button" data-command="underline" style="text-decoration:underline;">
                    <span>U</span>
                </button>
                <button type="button" data-command="strikeThrough" style="text-decoration:line-through;">
                    <span>S</span>
                </button>
            `}function n(){return`
                <button type="button" data-command="justifyLeft">
                    <span>L</span>
                </button>
                <button type="button" data-command="justifyCenter">
                    <span>C</span>
                </button>
                <button type="button" data-command="justifyRight">
                    <span>R</span>
                </button>
                <button type="button" data-command="justifyFull">
                    <span>J</span>
                </button>
            `}function a(){return`
                <button type="button" data-command="indent">
                    <span>Indent</span>
                </button>
                <button type="button" data-command="outdent">
                    <span>Outdent</span>
                </button>
            `}function l(){return`
                <button type="button" data-command="insertUnorderedList">
                    <span>UL</span>
                </button>
                <button type="button" data-command="insertOrderedList">
                    <span>OL</span>
                </button>
            `}function i(){return`
                <div class="wysiwyg-toolbar-dropdown">
                    <div class="wysiwyg-toolbar-dropdown-toggle">
                        <span>Link</span>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown-content">
                        <input type="url" data-command="createLink" placeholder="https://example.com">
                    </div>
                </div>
            `}function u(){return`
                <div class="wysiwyg-toolbar-dropdown">
                    <div class="wysiwyg-toolbar-dropdown-toggle">
                        <span>Image Link</span>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown-content">
                        <input type="url" data-command="uploadImage" placeholder="https://example.com">
                    </div>
                </div>
            `}function b(){return`
                <button type="button" data-command="insertImage">
                    <span>Image</span>
                </button>
            `}function p(){return`
                <button type="button" data-command="unlink">
                    <span>Unlink</span>
                </button>
            `}function h(){return`
                <button type="button" data-command="removeFormat">
                    <span>Clear</span>
                </button>
                <button type="button" data-command="undo">
                    <span>Undo</span>
                </button>
                <button type="button" data-command="redo">
                    <span>Redo</span>
                </button>
            `}return`
            <div class="wysiwyg-toolbar-group">
                ${t()}
                ${e()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${o()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${n()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${a()}
                ${l()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${i()}
                ${u()}
                ${b()}
                ${p()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${h()}
            </div>
        `}_openImageDialog(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.multiple=!0,t.click(),t.addEventListener("change",()=>{const e=t.files;e.length!==0&&new Promise(o=>{let n=e.length;for(const a of e){const l=new FileReader;l.onload=()=>{if(!this._range)this._body.focus();else{const i=window.getSelection();i.removeAllRanges(),i.addRange(this._range)}document.execCommand("insertImage",!1,l.result),n--,n===0&&o(e)},l.readAsDataURL(a)}}).then(o=>{this._body.querySelectorAll("img").forEach((n,a)=>{n.style.width="100%",n.addEventListener("mouseover",()=>{n.title=o[a].name})}),t.value=""})})}_createToolbarButtons(){this._toolbarButtons.forEach(e=>{e.getAttribute("type")||e.setAttribute("type","button"),e.addEventListener("click",()=>{e.dataset.command.includes("justify")&&this._toolbar.querySelectorAll('[data-command^="justify"]').forEach(o=>o.classList.remove("active")),document.execCommand(e.dataset.command,!1,e.dataset.value),e.classList.toggle("active"),this._body.focus()})});const t=this._toolbar.querySelector('[data-command="insertImage"]');t&&t.addEventListener("click",async()=>{this._openImageDialog()})}_handleDropdownInput(t,e,o=null,n=null){t.parentElement.previousElementSibling.addEventListener("click",()=>{let a=document.getSelection();a.rangeCount!==0&&(this._range=a.getRangeAt(0),o&&o(t,a))}),t.addEventListener("keypress",a=>{if(a.key==="Enter"){a.preventDefault();const l=window.getSelection();this._range?(l.removeAllRanges(),l.addRange(this._range)):this._body.focus(),document.execCommand(e,!1,t.value),n&&n(t)}})}_createLinkInput(t){this._handleDropdownInput(t,"createLink",(e,o)=>{o=o.anchorNode.parentElement.tagName==="A"?o.anchorNode.parentElement.href:o.toString(),e.value=o},()=>{this._body.querySelectorAll("a").forEach(e=>{var o;e.target="_blank",e.title=e.href,e.innerHTML=((o=e.querySelector("span"))==null?void 0:o.innerHTML)||e.innerHTML,e.addEventListener("click",n=>{n.ctrlKey&&window.open(e.href,"_blank")}),e.addEventListener("mouseover",()=>{document.addEventListener("keydown",n=>{n.ctrlKey&&(e.style.cursor="pointer")}),document.addEventListener("keyup",()=>{e.style.cursor="text"})}),e.addEventListener("mouseout",()=>{e.style.cursor="text"})})})}_createUploadImageInput(t){this._handleDropdownInput(t,"insertImage",null,()=>{this._body.querySelectorAll("img").forEach(e=>{e.style.width="100%",e.title=e.src})})}_createToolbarDropdowns(){this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-toggle").forEach(o=>{o.addEventListener("click",()=>{this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content.show").forEach(n=>{n!==o.nextElementSibling&&n.classList.remove("show")}),o.nextElementSibling.classList.toggle("show")})}),document.addEventListener("click",o=>{o.target.closest(".wysiwyg-toolbar-dropdown")||this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content").forEach(n=>{n.classList.remove("show")})}),this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content button").forEach(o=>{o.addEventListener("click",()=>{o.parentElement.previousElementSibling.querySelector("span").innerText=o.innerText,o.parentElement.classList.remove("show")})});const t=this._toolbar.querySelector('input[data-command="createLink"]');t&&this._createLinkInput(t);const e=this._toolbar.querySelector('input[data-command="uploadImage"]');e&&this._createUploadImageInput(e)}_createBody(){this._displayMode==s.POPOVER||this._displayMode==s.TOOLTIP?this._createDynamicBody():this._createFixedBody(),this._removeEmptyNodes(this._body),this._addBodyEvents()}_createFixedBody(){const t=this._editor.querySelector(".wysiwyg-body");this._body=t,this._body||(this._body=document.createElement("div"),this._body.classList.add("wysiwyg-body"),this._editor.appendChild(this._body)),this._body.setAttribute("contenteditable",!0),this._body.innerHTML=this._body.innerHTML.replace(/\s+/g," ").trim()}_createDynamicBody(){const t=this._editor.querySelector(".wysiwyg-body");t&&this._editor.removeChild(t),this._body=this._editor,t&&(this._body.innerHTML=t.innerHTML.trim()),this._body.classList.add("wysiwyg-body"),this._body.setAttribute("contenteditable",!0)}_makeToolbarReactiveToSelection(){document.addEventListener("selectionchange",t=>{this._body===document.activeElement&&(this._toolbarButtons.forEach(e=>{e.classList.toggle("active",document.queryCommandState(e.dataset.command))}),this._displayMode==s.TOOLTIP&&!this._toolbar.contains(t.target)&&(document.getSelection().toString()===""||document.getSelection().rangeCount===0)&&(this._toolbar.style.display="none"))})}_hideToolbarOnBlur(){this._body.addEventListener("blur",()=>{document.addEventListener("click",t=>{!this._body.contains(t.target)&&!this._toolbar.contains(t.target)&&(this._toolbar.style.display="none")})})}_showToolbarOnFocus(){this._body.addEventListener("focus",()=>{this._toolbar.style.display="block",this._toolbar.style.top=`${this._body.offsetTop-this._toolbar.offsetHeight}px`,this._toolbar.style.left=`${this._body.offsetLeft}px`})}_showToolbarOnSelection(){this._body.addEventListener("mouseup",()=>{const t=document.getSelection();if(t.toString()!==""&&t.rangeCount>0){this._toolbar.style.display="block";const e=t.getRangeAt(0).getBoundingClientRect();this._toolbar.style.top=`${e.top+window.scrollY-this._toolbar.offsetHeight}px`,this._toolbar.style.left=`${e.left+window.scrollX}px`}})}_insertLinkOnPasteEvent(){this._body.addEventListener("paste",t=>{const e=t.clipboardData.getData("text");e.match(/^https?:\/\/.+/)&&(document.execCommand("createLink",!1,e),t.preventDefault(),this._body.querySelectorAll("a").forEach(o=>{var n;o.target="_blank",o.title=o.href,o.innerHTML=((n=o.querySelector("span"))==null?void 0:n.innerHTML)||o.innerHTML,o.addEventListener("click",a=>{a.ctrlKey&&window.open(o.href,"_blank")}),o.addEventListener("mouseover",()=>{document.addEventListener("keydown",a=>{a.ctrlKey&&(o.style.cursor="pointer")}),document.addEventListener("keyup",()=>{o.style.cursor="text"})}),o.addEventListener("mouseout",()=>{o.style.cursor="text"})}))})}_insertDragAndDropEffectEvent(){this._body.addEventListener("dragenter",t=>{t.preventDefault(),this._body.classList.add("dragging")}),this._body.addEventListener("dragleave",t=>{t.preventDefault(),this._body.classList.remove("dragging")}),this._body.addEventListener("drop",t=>{t.preventDefault(),this._body.classList.remove("dragging")})}_addBodyEvents(){this._makeToolbarReactiveToSelection(),this._displayMode!=s.FIXED&&this._hideToolbarOnBlur(),this._displayMode==s.POPOVER&&this._showToolbarOnFocus(),this._displayMode==s.TOOLTIP&&this._showToolbarOnSelection(),this._insertLinkOnPasteEvent(),this._insertDragAndDropEffectEvent()}_removeEmptyNodes(t){for(let e=0;e<t.childNodes.length;e++)t.childNodes[e].nodeType===3&&t.childNodes[e].nodeValue.trim()===""?t.removeChild(t.childNodes[e]):t.childNodes[e].nodeType===1&&this._removeEmptyNodes(t.childNodes[e])}getTextContent(){return this._body.innerText}getHTMLContent(){return this._body.innerHTML}addFullHTMLPage(t){const e=document.createElement("div"),n=new DOMParser().parseFromString(t,"text/html");let a="";a+=n.body?n.body.getAttribute("style"):"",e.setAttribute("style",a),n.querySelectorAll(`
            script, style, link, meta, iframe, object, embed,
            form, input, button, textarea, select, option,
            noscript, svg, math
        `).forEach(i=>i.remove()),n.querySelectorAll("*").forEach(i=>{for(const u of[...i.attributes])u.name.startsWith("on")&&i.removeAttribute(u.name);i.hasAttribute("href")&&i.getAttribute("href").startsWith("javascript:")&&i.removeAttribute("href"),i.hasAttribute("src")&&i.getAttribute("src").startsWith("javascript:")&&i.removeAttribute("src")});const l=n.body?n.body.innerHTML:n.documentElement.innerHTML;e.innerHTML=l,this._body.appendChild(document.createElement("br")),this._body.appendChild(e)}clear(){this._body.innerHTML=""}onChange(t){new MutationObserver(()=>{t(this.getHTMLContent())}).observe(this._body,{childList:!0,subtree:!0,characterData:!0}),this._toolbarButtons.forEach(o=>{o.addEventListener("click",()=>{t(this.getHTMLContent())})})}}typeof window<"u"&&(window.WYSIWYGEditor=y,window.DisplayMode=s),r.DisplayMode=s,r.WYSIWYGEditor=y,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
