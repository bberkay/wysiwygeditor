(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".wysiwygeditor,.wysiwyg-toolbar--popover,.wysiwyg-toolbar--tooltip{--wysiwyg-background-color: #f5f5f5;--wysiwyg-text-color: #333;--wysiwyg-border-color: #ccc;--wysiwyg-border-radius: 4px;--wysiwyg-max-body-height: 300px;all:unset}.wysiwyg-toolbar{background-color:var(--wysiwyg-background-color);border-bottom:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius) var(--wysiwyg-border-radius) 0 0;border-right:2px solid var(--wysiwyg-background-color);margin:0;padding:10px 10px 0;width:100%;font-weight:400}.wysiwyg-toolbar.wysiwyg-toolbar--popover,.wysiwyg-toolbar.wysiwyg-toolbar--tooltip{position:absolute;background-color:var(--wysiwyg-background-color);border:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius);box-shadow:0 0 5px #0000001a;padding:5px 5px 0;z-index:1;display:none;width:auto}.wysiwyg-toolbar .wysiwyg-toolbar-group{display:inline-block;margin:0 15px 0 0;padding:0;vertical-align:middle}.wysiwyg-toolbar .wysiwyg-toolbar-group [data-command],.wysiwyg-toolbar .wysiwyg-toolbar-group .wysiwyg-toolbar-dropdown-toggle{background-color:var(--wysiwyg-background-color);border:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius);color:var(--wysiwyg-text-color);cursor:pointer;font-size:14px;line-height:1.5;margin:0 0 5px;padding:4px 8px;text-align:center;text-decoration:none;display:inline-block;vertical-align:middle;white-space:nowrap;-webkit-user-select:none;user-select:none;position:relative}.wysiwyg-toolbar .wysiwyg-toolbar-group input[data-command]{text-align:start;cursor:text;width:250px;margin-top:1px}.wysiwyg-toolbar .wysiwyg-toolbar-group button[data-command]:hover{filter:brightness(95%)}.wysiwyg-toolbar .wysiwyg-toolbar-group button[data-command]:active,.wysiwyg-toolbar .wysiwyg-toolbar-group button[data-command].active{filter:brightness(90%)}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown{position:relative;display:inline-block}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle{width:120px;text-align:start}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle:hover{filter:brightness(95%)}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle:active{filter:brightness(90%)}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-toggle:after{content:\"▼\";display:inline-block;margin-left:5px;font-size:11px;right:5px;top:50%;transform:translateY(-50%);position:absolute}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content{display:none;flex-direction:column;position:absolute;width:100%;z-index:1}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content.show{display:flex;z-index:2}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content button[data-command]{margin:0;border:1px solid var(--wysiwyg-border-color);border-bottom:none;border-radius:0;text-align:start}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content button[data-command]:first-child{border-radius:var(--wysiwyg-border-radius) var(--wysiwyg-border-radius) 0 0}.wysiwyg-toolbar .wysiwyg-toolbar-dropdown .wysiwyg-toolbar-dropdown-content button[data-command]:last-child{border-bottom:1px solid var(--wysiwyg-border-color);border-radius:0 0 var(--wysiwyg-border-radius) var(--wysiwyg-border-radius)}.wysiwyg-body{cursor:text;padding:10px;outline:none;white-space:pre-wrap;word-wrap:break-word;line-height:1.5;color:var(--wysiwyg-text-color);background-color:var(--wysiwyg-background-color);border:1px solid var(--wysiwyg-border-color);border-radius:var(--wysiwyg-border-radius);resize:vertical;font-weight:400;width:100%;display:inline-block;max-height:var(--wysiwyg-max-body-height);overflow:auto}.wysiwyg-body img{width:100%;height:100%}.wysiwyg-body.dragging{opacity:.6;position:relative}.wysiwyg-body.dragging:after{content:\"Upload\";pointer-events:none;-webkit-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.5em}.wysiwyg-toolbar+.wysiwyg-body{border-top:none;border-radius:0 0 var(--wysiwyg-border-radius) var(--wysiwyg-border-radius)}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();var p = Object.defineProperty;
var h = (l, t, e) => t in l ? p(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var d = (l, t, e) => (h(l, typeof t != "symbol" ? t + "" : t, e), e);
const i = {
  FIXED: "fixed",
  POPOVER: "popover",
  TOOLTIP: "tooltip"
};
class m {
  /**
   * @description Create a new WYSIWYG editor
   * @param {string} editorId The id of the editor element
   * @param {DisplayMode} mode The display mode of the editor
   */
  constructor(t, e = i.FIXED) {
    d(this, "_editor");
    d(this, "_displayMode");
    d(this, "_toolbar");
    d(this, "_toolbarButtons");
    d(this, "_body");
    d(this, "_range");
    if (!Object.values(i).includes(e))
      throw new Error("Invalid display mode, please use DisplayMode enum");
    this._editor = document.getElementById(t), this._editor.classList.add("wysiwygeditor"), this._displayMode = e;
  }
  /**
   * @description Initialize the editor
   * @returns {void}
   */
  init() {
    this._createToolbar(), this._createBody();
  }
  /**
   * @private
   * @description Create the toolbar layout and append it to the editor
   * or the body depending on the display mode
   * @returns {void}
   */
  _createToolbar() {
    this._displayMode == i.POPOVER || this._displayMode == i.TOOLTIP ? this._createDynamicToolbar() : this._createFixedToolbar(), this._toolbarButtons = this._toolbar.querySelectorAll("button[data-command]"), this._toolbarButtons.length > 0 && this._createToolbarButtons(), this._toolbar.querySelector(".wysiwyg-toolbar-dropdown") && this._createToolbarDropdowns();
  }
  /**
   * @private
   * @description Create the fixed toolbar layout and append it to the editor
   * @returns {void}
   */
  _createFixedToolbar() {
    const t = this._editor.querySelector(".wysiwyg-toolbar");
    t ? (t.classList.add("wysiwyg-toolbar--fixed"), this._toolbar = t) : (this._editor.insertAdjacentHTML("afterbegin", '<div class="wysiwyg-toolbar wysiwyg-toolbar--fixed"></div>'), this._toolbar = this._editor.querySelector(".wysiwyg-toolbar"), this._toolbar.innerHTML = this._getDefaultToolbarLayout());
  }
  /**
   * @private
   * @description Create the dynamic(popover or tooltip) toolbar layout and
   * append it to the body
   * @returns {void}
   */
  _createDynamicToolbar() {
    const t = this._editor.querySelector(".wysiwyg-toolbar");
    t ? (this._toolbar = t, this._editor.removeChild(this._toolbar)) : (this._toolbar = document.createElement("div"), this._toolbar.classList.add("wysiwyg-toolbar"), this._toolbar.innerHTML = this._getDefaultToolbarLayout()), this._toolbar.classList.add(`wysiwyg-toolbar--${this._displayMode}`), document.body.appendChild(this._toolbar);
  }
  /**
   * @private
   * @description This is the default toolbar layout, you can customize
   * it(from here or .html file, for more information please
   * check the index.html from the original example) or create
   * your own layout using the same structure as long as you keep
   * the data-command and data-value attributes for the functionality
   * of each button.
   * @returns {string} The default toolbar layout
   */
  _getDefaultToolbarLayout() {
    function t() {
      return `
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
            `;
    }
    function e() {
      return `
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
            `;
    }
    function o() {
      return `
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
            `;
    }
    function n() {
      return `
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
            `;
    }
    function a() {
      return `
                <button type="button" data-command="indent">
                    <span>Indent</span>
                </button>
                <button type="button" data-command="outdent">
                    <span>Outdent</span>
                </button>
            `;
    }
    function r() {
      return `
                <button type="button" data-command="insertUnorderedList">
                    <span>UL</span>
                </button>
                <button type="button" data-command="insertOrderedList">
                    <span>OL</span>
                </button>
            `;
    }
    function s() {
      return `
                <div class="wysiwyg-toolbar-dropdown">
                    <div class="wysiwyg-toolbar-dropdown-toggle">
                        <span>Link</span>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown-content">
                        <input type="url" data-command="createLink" placeholder="https://example.com">
                    </div>
                </div>
            `;
    }
    function c() {
      return `
                <div class="wysiwyg-toolbar-dropdown">
                    <div class="wysiwyg-toolbar-dropdown-toggle">
                        <span>Image Link</span>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown-content">
                        <input type="url" data-command="uploadImage" placeholder="https://example.com">
                    </div>
                </div>
            `;
    }
    function u() {
      return `
                <button type="button" data-command="insertImage">
                    <span>Image</span>
                </button>
            `;
    }
    function y() {
      return `
                <button type="button" data-command="unlink">
                    <span>Unlink</span>
                </button>
            `;
    }
    function b() {
      return `
                <button type="button" data-command="removeFormat">
                    <span>Clear</span>
                </button>
                <button type="button" data-command="undo">
                    <span>Undo</span>
                </button>
                <button type="button" data-command="redo">
                    <span>Redo</span>
                </button>
            `;
    }
    return `
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
                ${r()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${s()}
                ${c()}
                ${u()}
                ${y()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${b()}
            </div>
        `;
  }
  /**
   * @private
   * @description Insert image(s) to the body
   * @returns {void}
   */
  _openImageDialog() {
    const t = document.createElement("input");
    t.type = "file", t.accept = "image/*", t.multiple = !0, t.click(), t.addEventListener("change", () => {
      const e = t.files;
      e.length !== 0 && new Promise((o) => {
        let n = e.length;
        for (const a of e) {
          const r = new FileReader();
          r.onload = () => {
            if (!this._range)
              this._body.focus();
            else {
              const s = window.getSelection();
              s.removeAllRanges(), s.addRange(this._range);
            }
            document.execCommand("insertImage", !1, r.result), n--, n === 0 && o(e);
          }, r.readAsDataURL(a);
        }
      }).then((o) => {
        this._body.querySelectorAll("img").forEach((n, a) => {
          n.style.width = "100%", n.addEventListener("mouseover", () => {
            n.title = o[a].name;
          });
        }), t.value = "";
      });
    });
  }
  /**
   * @private
   * @description Create the toolbar buttons and add the execCommand functionality
   * @returns {void}
   */
  _createToolbarButtons() {
    this._toolbarButtons.forEach((e) => {
      e.getAttribute("type") || e.setAttribute("type", "button"), e.addEventListener("click", () => {
        e.dataset.command.includes("justify") && this._toolbar.querySelectorAll('[data-command^="justify"]').forEach((o) => o.classList.remove("active")), document.execCommand(e.dataset.command, !1, e.dataset.value), e.classList.toggle("active"), this._body.focus();
      });
    });
    const t = this._toolbar.querySelector('[data-command="insertImage"]');
    t && t.addEventListener("click", async () => {
      this._openImageDialog();
    });
  }
  /**
   * @private
   * @description Handle the dropdown input functionality
   * @param {HTMLInputElement} input The input element
   * @param {string} command The command to be executed
   * @param {function} afterClickCallback The callback function to be called after clicking the input
   * @param {function} afterExecCallback The callback function to be called after executing the command
   * @returns {void}
   */
  _handleDropdownInput(t, e, o = null, n = null) {
    t.parentElement.previousElementSibling.addEventListener("click", () => {
      let a = document.getSelection();
      a.rangeCount !== 0 && (this._range = a.getRangeAt(0), o && o(t, a));
    }), t.addEventListener("keypress", (a) => {
      if (a.key === "Enter") {
        a.preventDefault();
        const r = window.getSelection();
        this._range ? (r.removeAllRanges(), r.addRange(this._range)) : this._body.focus(), document.execCommand(e, !1, t.value), n && n(t);
      }
    });
  }
  /**
   * @private
   * @description Create the link input and add the functionality
   * @param {HTMLInputElement} input The input element
   * @returns {void}
   */
  _createLinkInput(t) {
    this._handleDropdownInput(t, "createLink", (e, o) => {
      o = o.anchorNode.parentElement.tagName === "A" ? o.anchorNode.parentElement.href : o.toString(), e.value = o;
    }, () => {
      this._body.querySelectorAll("a").forEach((e) => {
        var o;
        e.target = "_blank", e.title = e.href, e.innerHTML = ((o = e.querySelector("span")) == null ? void 0 : o.innerHTML) || e.innerHTML, e.addEventListener("click", (n) => {
          n.ctrlKey && window.open(e.href, "_blank");
        }), e.addEventListener("mouseover", () => {
          document.addEventListener("keydown", (n) => {
            n.ctrlKey && (e.style.cursor = "pointer");
          }), document.addEventListener("keyup", () => {
            e.style.cursor = "text";
          });
        }), e.addEventListener("mouseout", () => {
          e.style.cursor = "text";
        });
      });
    });
  }
  /**
   * @private
   * @description Create the image upload input and add the functionality
   * @param {HTMLInputElement} input The input element
   * @returns {void}
   */
  _createUploadImageInput(t) {
    this._handleDropdownInput(t, "insertImage", null, () => {
      this._body.querySelectorAll("img").forEach((e) => {
        e.style.width = "100%", e.title = e.src;
      });
    });
  }
  /**
   * @private
   * @description Create the toolbar dropdowns and add the functionality
   * @returns {void}
   */
  _createToolbarDropdowns() {
    this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-toggle").forEach((o) => {
      o.addEventListener("click", () => {
        this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content.show").forEach((n) => {
          n !== o.nextElementSibling && n.classList.remove("show");
        }), o.nextElementSibling.classList.toggle("show");
      });
    }), document.addEventListener("click", (o) => {
      o.target.closest(".wysiwyg-toolbar-dropdown") || this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content").forEach((n) => {
        n.classList.remove("show");
      });
    }), this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content button").forEach((o) => {
      o.addEventListener("click", () => {
        o.parentElement.previousElementSibling.querySelector("span").innerText = o.innerText, o.parentElement.classList.remove("show");
      });
    });
    const t = this._toolbar.querySelector('input[data-command="createLink"]');
    t && this._createLinkInput(t);
    const e = this._toolbar.querySelector('input[data-command="uploadImage"]');
    e && this._createUploadImageInput(e);
  }
  /**
   * @private
   * @description Create the body layout and append it to the editor
   * @returns {void}
   */
  _createBody() {
    this._displayMode == i.POPOVER || this._displayMode == i.TOOLTIP ? this._createDynamicBody() : this._createFixedBody(), this._removeEmptyNodes(this._body), this._addBodyEvents();
  }
  /**
   * @private
   * @description Makes body suitable for fixed toolbar.
   * @returns {void}
   */
  _createFixedBody() {
    const t = this._editor.querySelector(".wysiwyg-body");
    this._body = t, this._body || (this._body = document.createElement("div"), this._body.classList.add("wysiwyg-body"), this._editor.appendChild(this._body)), this._body.setAttribute("contenteditable", !0), this._body.innerHTML = this._body.innerHTML.replace(/\s+/g, " ").trim();
  }
  /**
   * @private
   * @description Makes body suitable for dynamic(tooltip or popover)
   * toolbar.
   * @returns {void}
   */
  _createDynamicBody() {
    const t = this._editor.querySelector(".wysiwyg-body");
    t && this._editor.removeChild(t), this._body = this._editor, t && (this._body.innerHTML = t.innerHTML.trim()), this._body.classList.add("wysiwyg-body"), this._body.setAttribute("contenteditable", !0);
  }
  /**
   * @private
   * @description Update the toolbar button state when the selection changes
   * @returns {void}
   */
  _makeToolbarReactiveToSelection() {
    document.addEventListener("selectionchange", (t) => {
      this._body === document.activeElement && (this._toolbarButtons.forEach((e) => {
        e.classList.toggle("active", document.queryCommandState(e.dataset.command));
      }), this._displayMode == i.TOOLTIP && !this._toolbar.contains(t.target) && (document.getSelection().toString() === "" || document.getSelection().rangeCount === 0) && (this._toolbar.style.display = "none"));
    });
  }
  /**
   * @private
   * @description Hide the toolbar when the body is blurred(if toolbar isn't fixed)
   * @returns {void}
   */
  _hideToolbarOnBlur() {
    this._body.addEventListener("blur", () => {
      document.addEventListener("click", (t) => {
        !this._body.contains(t.target) && !this._toolbar.contains(t.target) && (this._toolbar.style.display = "none");
      });
    });
  }
  /**
   * @private
   * @description Show the toolbar when the body is focused
   */
  _showToolbarOnFocus() {
    this._body.addEventListener("focus", () => {
      this._toolbar.style.display = "block", this._toolbar.style.top = `${this._body.offsetTop - this._toolbar.offsetHeight}px`, this._toolbar.style.left = `${this._body.offsetLeft}px`;
    });
  }
  /**
   * @private
   * @description Show the toolbar when selecting text
   * @returns {void}
   */
  _showToolbarOnSelection() {
    this._body.addEventListener("mouseup", () => {
      const t = document.getSelection();
      if (t.toString() !== "" && t.rangeCount > 0) {
        this._toolbar.style.display = "block";
        const e = t.getRangeAt(0).getBoundingClientRect();
        this._toolbar.style.top = `${e.top + window.scrollY - this._toolbar.offsetHeight}px`, this._toolbar.style.left = `${e.left + window.scrollX}px`;
      }
    });
  }
  /**
   * @private
   * @description Insert the link when user paste the URL over the selected text
   * @returns {void}
   */
  _insertLinkOnPasteEvent() {
    this._body.addEventListener("paste", (t) => {
      const e = t.clipboardData.getData("text");
      e.match(/^https?:\/\/.+/) && (document.execCommand("createLink", !1, e), t.preventDefault(), this._body.querySelectorAll("a").forEach((o) => {
        var n;
        o.target = "_blank", o.title = o.href, o.innerHTML = ((n = o.querySelector("span")) == null ? void 0 : n.innerHTML) || o.innerHTML, o.addEventListener("click", (a) => {
          a.ctrlKey && window.open(o.href, "_blank");
        }), o.addEventListener("mouseover", () => {
          document.addEventListener("keydown", (a) => {
            a.ctrlKey && (o.style.cursor = "pointer");
          }), document.addEventListener("keyup", () => {
            o.style.cursor = "text";
          });
        }), o.addEventListener("mouseout", () => {
          o.style.cursor = "text";
        });
      }));
    });
  }
  /**
   * @private
   * @description Show a dragging effect when user drags over the body.
   * @returns {void}
   */
  _insertDragAndDropEffectEvent() {
    this._body.addEventListener("dragenter", (t) => {
      t.preventDefault(), this._body.classList.add("dragging");
    }), this._body.addEventListener("dragleave", (t) => {
      t.preventDefault(), this._body.classList.remove("dragging");
    }), this._body.addEventListener("drop", (t) => {
      t.preventDefault(), this._body.classList.remove("dragging");
    });
  }
  /**
   * @private
   * @description Add necessary events to the body
   * @returns {void}
   */
  _addBodyEvents() {
    this._makeToolbarReactiveToSelection(), this._displayMode != i.FIXED && this._hideToolbarOnBlur(), this._displayMode == i.POPOVER && this._showToolbarOnFocus(), this._displayMode == i.TOOLTIP && this._showToolbarOnSelection(), this._insertLinkOnPasteEvent(), this._insertDragAndDropEffectEvent();
  }
  /**
   * @private
   * @description Remove empty nodes from the given node and
   * its children
   * @param {HTMLElement} node
   * @returns {void}
   */
  _removeEmptyNodes(t) {
    for (let e = 0; e < t.childNodes.length; e++)
      t.childNodes[e].nodeType === 3 && t.childNodes[e].nodeValue.trim() === "" ? t.removeChild(t.childNodes[e]) : t.childNodes[e].nodeType === 1 && this._removeEmptyNodes(t.childNodes[e]);
  }
  /**
   * @description Get the content of the body's innerText
   * @returns {string}
   */
  getTextContent() {
    return this._body.innerText;
  }
  /**
   * @description Get the content of the body's innerHTML
   * @returns {string}
   */
  getHTMLContent() {
    return this._body.innerHTML;
  }
  /**
   * @description Adds sanitized HTML content to the editor's body.
   *              - Extracts only the <body> content if available, otherwise uses full HTML.
   *              - Removes all security-sensitive elements and attributes.
   * @param {string} html The full HTML content to be added
   * @example editor.addFullHTMLPage('<html><body><p>Hello World</p></body></html>');
   * @returns {void}
   */
  addFullHTMLPage(t) {
    const e = document.createElement("div"), n = new DOMParser().parseFromString(t, "text/html");
    let a = "";
    a += n.body ? n.body.getAttribute("style") : "", e.setAttribute("style", a), n.querySelectorAll(`
            script, style, link, meta, iframe, object, embed,
            form, input, button, textarea, select, option,
            noscript, svg, math
        `).forEach((s) => s.remove()), n.querySelectorAll("*").forEach((s) => {
      for (const c of [...s.attributes])
        c.name.startsWith("on") && s.removeAttribute(c.name);
      s.hasAttribute("href") && s.getAttribute("href").startsWith("javascript:") && s.removeAttribute("href"), s.hasAttribute("src") && s.getAttribute("src").startsWith("javascript:") && s.removeAttribute("src");
    });
    const r = n.body ? n.body.innerHTML : n.documentElement.innerHTML;
    e.innerHTML = r, this._body.appendChild(document.createElement("br")), this._body.appendChild(e);
  }
  /**
   * @description Clear the content of the body
   * @returns {void}
   */
  clear() {
    this._body.innerHTML = "";
  }
  /**
   * @description Run a function when the content changes
   * @param {function} callback The function to be called when the content changes
   * @example editor.onChange((content) => { console.log(content) });
   * @returns {void}
   */
  onChange(t) {
    new MutationObserver(() => {
      t(this.getHTMLContent());
    }).observe(this._body, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), this._toolbarButtons.forEach((o) => {
      o.addEventListener("click", () => {
        t(this.getHTMLContent());
      });
    });
  }
}
typeof window < "u" && (window.WYSIWYGEditor = m, window.DisplayMode = i);
export {
  i as DisplayMode,
  m as WYSIWYGEditor
};
