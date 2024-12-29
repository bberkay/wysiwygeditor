import './style.css';

export const DisplayMode = {
    FIXED: 'fixed',
    POPOVER: 'popover',
    TOOLTIP: 'tooltip'
};

export default class WYSIWYGEditor {
    _editor;
    _displayMode;
    _toolbar;
    _toolbarButtons;
    _body;
    _range;

    /**
     * @description Create a new WYSIWYG editor
     * @param {string} editorId The id of the editor element
     * @param {DisplayMode} mode The display mode of the editor
     */
    constructor(editorId, mode = DisplayMode.FIXED) {
        this._editor = document.getElementById(editorId);
        if (!Object.values(DisplayMode).includes(mode))
            throw new Error('Invalid display mode, please use DisplayMode enum');
        this._displayMode = mode;
    }

    /**
     * @description Initialize the editor
     * @returns {void}
     */
    init(){
        this._createToolbar();
        this._createBody();
    }

    /**
     * @private
     * @description Create the toolbar layout and append it to the editor
     * or the body depending on the display mode
     * @returns {void}
     */
    _createToolbar(){
        if(this._displayMode == DisplayMode.POPOVER || this._displayMode == DisplayMode.TOOLTIP)
            this._createDynamicToolbar();
        else
            this._createFixedToolbar();

        this._toolbarButtons = this._toolbar.querySelectorAll('button[data-command]');
        if(this._toolbarButtons.length > 0)
            this._createToolbarButtons();

        if(this._toolbar.querySelector('.wysiwyg-toolbar-dropdown'))
            this._createToolbarDropdowns();
    }

    /**
     * @private
     * @description Create the fixed toolbar layout and append it to the editor
     * @returns {void}
     */
    _createFixedToolbar(){
        const currentToolbar = this._editor.querySelector('.wysiwyg-toolbar');
        if(!currentToolbar){
            this._editor.insertAdjacentHTML('afterbegin', '<div class="wysiwyg-toolbar wysiwyg-toolbar--fixed"></div>');
            this._toolbar = this._editor.querySelector('.wysiwyg-toolbar');
            this._toolbar.innerHTML = this._getDefaultToolbarLayout();
        }else{
            currentToolbar.classList.add('wysiwyg-toolbar--fixed');
            this._toolbar = currentToolbar;
        }
    }

    /**
     * @private
     * @description Create the dynamic(popover or tooltip) toolbar layout and
     * append it to the body
     * @returns {void}
     */
    _createDynamicToolbar(){
        const currentToolbar = this._editor.querySelector('.wysiwyg-toolbar');
        if(!currentToolbar){
            this._toolbar = document.createElement('div');
            this._toolbar.classList.add('wysiwyg-toolbar');
            this._toolbar.innerHTML = this._getDefaultToolbarLayout();
        }else{
            this._toolbar = currentToolbar;
            this._editor.removeChild(this._toolbar);
        }
        this._toolbar.classList.add(`wysiwyg-toolbar--${this._displayMode}`);
        document.body.appendChild(this._toolbar);
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
    _getDefaultToolbarLayout(){
        function getFontSizeDropdown(){
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

        function getFontFamilyDropdown(){
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

        function getLetterStyleButtons(){
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

        function getAlignmentButtons(){
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

        function getIndentationButtons(){
            return `
                <button type="button" data-command="indent">
                    <span>Indent</span>
                </button>
                <button type="button" data-command="outdent">
                    <span>Outdent</span>
                </button>
            `;
        }

        function getListButtons(){
            return `
                <button type="button" data-command="insertUnorderedList">
                    <span>UL</span>
                </button>
                <button type="button" data-command="insertOrderedList">
                    <span>OL</span>
                </button>
            `;
        }

        function getTextLinkDropdown(){
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

        function getImageLinkDropdown(){
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

        function getImageUploadButton(){
            return `
                <button type="button" data-command="insertImage">
                    <span>Image</span>
                </button>
            `;
        }

        function getUnlinkButton(){
            return `
                <button type="button" data-command="unlink">
                    <span>Unlink</span>
                </button>
            `;
        }

        function getMiscButtons(){
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
                ${getFontSizeDropdown()}
                ${getFontFamilyDropdown()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${getLetterStyleButtons()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${getAlignmentButtons()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${getIndentationButtons()}
                ${getListButtons()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${getTextLinkDropdown()}
                ${getImageLinkDropdown()}
                ${getImageUploadButton()}
                ${getUnlinkButton()}
            </div>
            <div class="wysiwyg-toolbar-group">
                ${getMiscButtons()}
            </div>
        `;
    }

    /**
     * @private
     * @description Insert image(s) to the body
     * @returns {void}
     */
    _openImageDialog(){
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.click(); // Trigger the file upload dialog
        input.addEventListener('change', () => {
            const files = input.files;
            if (files.length === 0) return;
            new Promise((resolve) => {
                let remainingCount = files.length;
                for (const file of files) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (!this._range) this._body.focus();
                        else {
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(this._range);
                        }
                        document.execCommand('insertImage', false, reader.result);
                        remainingCount--;
                        if (remainingCount === 0)
                            resolve(files);
                    };
                    reader.readAsDataURL(file);
                }
            }).then((files) => {
                this._body.querySelectorAll('img').forEach((image, index) => {
                    image.style.width = '100%';
                    image.addEventListener('mouseover', () => { image.title = files[index].name });
                });
                input.value = '';
            });
        });
    }

    /**
     * @private
     * @description Create the toolbar buttons and add the execCommand functionality
     * @returns {void}
     */
    _createToolbarButtons(){
        // Add the execCommand functionality to the buttons
        this._toolbarButtons.forEach(button => {
            if(!button.getAttribute("type")) button.setAttribute('type', 'button');
            button.addEventListener("click", () => {
                if(button.dataset.command.includes('justify'))
                    this._toolbar.querySelectorAll('[data-command^="justify"]').forEach(button => button.classList.remove('active'));
                document.execCommand(button.dataset.command, false, button.dataset.value);
                button.classList.toggle('active');
                this._body.focus();
            });
        });

        const insertImageBtn = this._toolbar.querySelector('[data-command="insertImage"]');
        if(insertImageBtn)
            insertImageBtn.addEventListener('click', async () => { this._openImageDialog() });
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
    _handleDropdownInput(input, command, afterClickCallback = null, afterExecCallback = null){
        input.parentElement.previousElementSibling.addEventListener('click', () => {
            let selection = document.getSelection();
            if (selection.rangeCount === 0) return;
            this._range = selection.getRangeAt(0);
            if(afterClickCallback) afterClickCallback(input, selection);
        });

        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const selection = window.getSelection();
                if (this._range) {
                    selection.removeAllRanges();
                    selection.addRange(this._range);
                }else{
                    this._body.focus();
                }

                document.execCommand(command, false, input.value);
                if(afterExecCallback) afterExecCallback(input);
            }
        });
    }

    /**
     * @private
     * @description Create the link input and add the functionality
     * @param {HTMLInputElement} input The input element
     * @returns {void}
     */
    _createLinkInput(input){
        this._handleDropdownInput(input, 'createLink', (createLinkInput, selection) => {
            selection = selection.anchorNode.parentElement.tagName === "A" ? selection.anchorNode.parentElement.href : selection.toString();
            createLinkInput.value = selection;
        }, () => {
            this._body.querySelectorAll('a').forEach(link => {
                link.target = '_blank';
                link.title = link.href;
                link.innerHTML = link.querySelector('span')?.innerHTML || link.innerHTML;
                link.addEventListener('click', (e) => { if(e.ctrlKey) window.open(link.href, '_blank') });
                link.addEventListener('mouseover', () => {
                    document.addEventListener('keydown', (e) => { if(e.ctrlKey) link.style.cursor = 'pointer' });
                    document.addEventListener('keyup', () => { link.style.cursor = 'text' });
                });
                link.addEventListener('mouseout', () => { link.style.cursor = 'text' });
            });
        });
    }

    /**
     * @private
     * @description Create the image upload input and add the functionality
     * @param {HTMLInputElement} input The input element
     * @returns {void}
     */
    _createUploadImageInput(input){
        this._handleDropdownInput(input, 'insertImage', null, () => {
            this._body.querySelectorAll('img').forEach(image => {
                image.style.width = '100%';
                image.title = image.src;
            });
        });
    }

    /**
     * @private
     * @description Create the toolbar dropdowns and add the functionality
     * @returns {void}
     */
    _createToolbarDropdowns(){
        this._toolbar.querySelectorAll('.wysiwyg-toolbar-dropdown-toggle').forEach(button => {
            button.addEventListener('click', () => {
                // Prevent opening multiple dropdowns at the same time
                this._toolbar.querySelectorAll('.wysiwyg-toolbar-dropdown-content.show').forEach(dropdown => {
                    if (dropdown !== button.nextElementSibling)
                        dropdown.classList.remove('show');
                });

                button.nextElementSibling.classList.toggle('show');
            });
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.wysiwyg-toolbar-dropdown')){
                this._toolbar.querySelectorAll('.wysiwyg-toolbar-dropdown-content').forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });

        // Close the dropdown when clicking on a button of the dropdown
        this._toolbar.querySelectorAll(".wysiwyg-toolbar-dropdown-content button").forEach(button => {
            button.addEventListener('click', () => {
                button.parentElement.previousElementSibling.querySelector('span').innerText = button.innerText;
                button.parentElement.classList.remove('show');
            });
        });

        // Custom dropdowns
        const createLinkInput = this._toolbar.querySelector('input[data-command="createLink"]');
        if(createLinkInput) this._createLinkInput(createLinkInput);

        const uploadImageInput = this._toolbar.querySelector('input[data-command="uploadImage"]');
        if(uploadImageInput) this._createUploadImageInput(uploadImageInput);
    }

    /**
     * @private
     * @description Create the body layout and append it to the editor
     * @returns {void}
     */
    _createBody(){
        if(this._displayMode == DisplayMode.POPOVER || this._displayMode == DisplayMode.TOOLTIP)
            this._createDynamicBody();
        else
            this._createFixedBody();

        // Remove whitespaces
        this._removeEmptyNodes(this._body);

        // Add events to the body
        this._addBodyEvents();
    }

    /**
     * @private
     * @description Makes body suitable for fixed toolbar.
     * @returns {void}
     */
    _createFixedBody(){
        const body = this._editor.querySelector('.wysiwyg-body');
        this._body = body;
        if(!this._body){
            this._body = document.createElement('div');
            this._body.classList.add('wysiwyg-body');
            this._editor.appendChild(this._body);
        }
        this._body.setAttribute('contenteditable', true);
        this._body.innerHTML = this._body.innerHTML.replace(/\s+/g, ' ').trim();
    }

    /**
     * @private
     * @description Makes body suitable for dynamic(tooltip or popover)
     * toolbar.
     * @returns {void}
     */
    _createDynamicBody(){
        const body = this._editor.querySelector('.wysiwyg-body');
        if(body) this._editor.removeChild(body);
        this._body = this._editor;
        if(body) this._body.innerHTML = body.innerHTML.trim();
        this._body.classList.add('wysiwyg-body');
        this._body.setAttribute('contenteditable', true);
    }

    /**
     * @private
     * @description Update the toolbar button state when the selection changes
     * @returns {void}
     */
    _makeToolbarReactiveToSelection(){
        document.addEventListener('selectionchange', (event) => {
            if(this._body !== document.activeElement) return;
            this._toolbarButtons.forEach(button => {
                button.classList.toggle('active', document.queryCommandState(button.dataset.command));
            });

            // If the selection is empty, hide the toolbar
            if(
                this._displayMode == DisplayMode.TOOLTIP
                && !this._toolbar.contains(event.target)
                && (document.getSelection().toString() === '' || document.getSelection().rangeCount === 0)
            )
                this._toolbar.style.display = 'none';
        });
    }

    /**
     * @private
     * @description Hide the toolbar when the body is blurred(if toolbar isn't fixed)
     * @returns {void}
     */
    _hideToolbarOnBlur(){
        this._body.addEventListener('blur', () => {
            document.addEventListener('click', (event) => {
                if (!this._body.contains(event.target) && !this._toolbar.contains(event.target))
                    this._toolbar.style.display = 'none';
            });
        });
    }

    /**
     * @private
     * @description Show the toolbar when the body is focused
     */
    _showToolbarOnFocus(){
        this._body.addEventListener('focus', () => {
            this._toolbar.style.display = 'block';
            this._toolbar.style.top = `${this._body.offsetTop - this._toolbar.offsetHeight}px`;
            this._toolbar.style.left = `${this._body.offsetLeft}px`;
        });
    }

    /**
     * @private
     * @description Show the toolbar when selecting text
     * @returns {void}
     */
    _showToolbarOnSelection(){
        this._body.addEventListener('mouseup', () => {
            const selection = document.getSelection();
            if (selection.toString() !== '' && selection.rangeCount > 0) {
                this._toolbar.style.display = 'block';
                const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
                this._toolbar.style.top = `${selectionRect.top + window.scrollY - this._toolbar.offsetHeight}px`;
                this._toolbar.style.left = `${selectionRect.left + window.scrollX}px`;
            }
        });
    }

    /**
     * @private
     * @description Insert the link when user paste the URL over the selected text
     * @returns {void}
     */
    _insertLinkOnPasteEvent(){
        this._body.addEventListener('paste', (event) => {
            const url = (event.clipboardData).getData('text');
            if (url.match(/^https?:\/\/.+/)){
                document.execCommand('createLink', false, url);
                event.preventDefault(); // Prevent pasting the URL as text
                this._body.querySelectorAll('a').forEach(link => {
                    link.target = '_blank';
                    link.title = link.href;
                    link.innerHTML = link.querySelector('span')?.innerHTML || link.innerHTML;
                    link.addEventListener('click', (e) => { if(e.ctrlKey) window.open(link.href, '_blank') });
                    link.addEventListener('mouseover', () => {
                        document.addEventListener('keydown', (e) => { if(e.ctrlKey) link.style.cursor = 'pointer' });
                        document.addEventListener('keyup', () => { link.style.cursor = 'text' });
                    });
                    link.addEventListener('mouseout', () => { link.style.cursor = 'text' });
                });
            }
        });
    }

    /**
     * @private
     * @description Add necessary events to the body
     * @returns {void}
     */
    _addBodyEvents(){
        this._makeToolbarReactiveToSelection();

        if(this._displayMode != DisplayMode.FIXED)
            this._hideToolbarOnBlur();

        if(this._displayMode == DisplayMode.POPOVER)
           this._showToolbarOnFocus();

        if(this._displayMode == DisplayMode.TOOLTIP)
            this._showToolbarOnSelection();

        // Events for the body.
        this._insertLinkOnPasteEvent();
    }

    /**
     * @private
     * @description Remove empty nodes from the given node and
     * its children
     * @param {HTMLElement} node
     * @returns {void}
     */
    _removeEmptyNodes(node) {
        for (let i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].nodeType === 3 && node.childNodes[i].nodeValue.trim() === '')
                node.removeChild(node.childNodes[i]);
            else if (node.childNodes[i].nodeType === 1)
                this._removeEmptyNodes(node.childNodes[i]);
        }
    }

    /**
     * @description Get the content of the body's innerText
     * @returns {string}
     */
    getTextContent(){
        return this._body.innerText;
    }

    /**
     * @description Get the content of the body's innerHTML
     * @returns {string}
     */
    getHTMLContent(){
        const iframeContent = this._body.querySelector('iframe')?.contentWindow.document.body.outerHTML;
        return this._body.innerHTML.replace("<iframe>", "").replace("</iframe>", "") + (iframeContent ? "<iframe>" + iframeContent + "</iframe>" : "");
    }

    /**
     * @description Add content to the body
     * @param {string} text The content to be added
     * @example editor.addContent('<p>Hello World</p>');
     * @example editor.addContent('Hello World');
     * @returns {void}
     */
    addHTMLContent(text){
        this._body.innerHTML += text;
    }

    /**
     * @description Add text content to the body
     * @param {string} text The text content to be added
     * @example editor.addTextContent('Hello World');
     * @returns {void}
     */
    addTextContent(text){
        this._body.innerText += text;
    }

    /**
     * @description Set the content of the body(override the existing content)
     * @param {string} text The content to be set
     * @example editor.setContent('<p>Hello World</p>');
     * @example editor.setContent('Hello World');
     * @returns {void}
     */
    setHTMLContent(text){
        this._body.innerHTML = text;
    }

    /**
     * @description Set the text content of the body(override the existing content)
     * @param {string} text The text content to be set
     * @example editor.setTextContent('Hello World');
     * @returns {void}
     */
    setTextContent(text){
        this._body.innerText = text;
    }

    /**
     * @description Add full HTML content to the body(does not override the existing content)
     * @param {string} html The full HTML content to be added
     * @example editor.addFullHTML('<html><body><p>Hello World</p></body></html>');
     * @returns {void}
     */
    addFullHTMLPage(html){
        let iframe = document.createElement('iframe');
        this._body.appendChild(document.createElement('br'));
        this._body.appendChild(iframe);
        iframe = iframe.contentWindow ? iframe.contentWindow.document : iframe.document;
        iframe.open();
        iframe.writeln(html);
        iframe.close();
        iframe.querySelector('body').setAttribute('contenteditable', true);
    }

    /**
     * @description Clear the content of the body
     * @returns {void}
     */
    clearContent(){
        this._body.innerHTML = '';
    }

    /**
     * @description Run a function when the content changes
     * @param {function} callback The function to be called when the content changes
     * @example editor.onChange((content) => { console.log(content) });
     * @returns {void}
     */
    onChange(callback){
        const observer = new MutationObserver(() => {
            callback(this.getHTMLContent());
        });

        observer.observe(this._body, {
            childList: true,
            subtree: true,
            characterData: true
        });

        this._toolbarButtons.forEach(button => {
            button.addEventListener('click', () => {
                callback(this.getHTMLContent());
            });
        });
    }
}
