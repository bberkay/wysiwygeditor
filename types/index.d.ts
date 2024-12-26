declare const DisplayMode: {
    readonly FIXED: 'fixed';
    readonly POPOVER: 'popover';
    readonly TOOLTIP: 'tooltip';
};

type DisplayModeType = typeof DisplayMode[keyof typeof DisplayMode];

declare class WYSIWYGEditor {
    /**
     * @description Create a new WYSIWYG editor
     * @param {string} editorId The id of the editor element
     * @param {DisplayMode} mode The display mode of the editor
     */
    constructor(editorId: string, mode?: DisplayModeType);

    /**
     * @description Initialize the editor
     * @returns {void}
     */
    init(): void;

    /**
     * @description Get the content of the body's innerText
     * @returns {string}
     */
    getTextContent(): string;

    /**
     * @description Get the content of the body's innerHTML
     * @returns {string}
     */
    getHTMLContent(): string;

    /**
     * @description Add content to the body
     * @param {string} text The content to be added
     * @example editor.addContent('<p>Hello World</p>');
     * @example editor.addContent('Hello World');
     * @returns {void}
     */
    addHTMLContent(text: string): void;

    /**
     * @description Add text content to the body
     * @param {string} text The text content to be added
     * @example editor.addTextContent('Hello World');
     * @returns {void}
     */
    addTextContent(text: string): void;

    /**
     * @description Set the content of the body(override the existing content)
     * @param {string} text The content to be set
     * @example editor.setContent('<p>Hello World</p>');
     * @example editor.setContent('Hello World');
     * @returns {void}
     */
    setHTMLContent(text: string): void;

    /**
     * @description Set the text content of the body(override the existing content)
     * @param {string} text The text content to be set
     * @example editor.setTextContent('Hello World');
     * @returns {void}
     */
    setTextContent(text: string): void;

    /**
     * @description Add full HTML content to the body(does not override the existing content)
     * @param {string} html The full HTML content to be added
     * @example editor.addFullHTML('<html><body><p>Hello World</p></body></html>');
     * @returns {void}
     */
    addFullHTMLPage(html: string): void;

    /**
     * @description Clear the content of the body
     * @returns {void}
     */
    clearContent(): void;

    /**
     * @description Run a function when the content changes
     * @param {function} callback The function to be called when the content changes
     * @example editor.onChange((content) => { console.log(content) });
     * @returns {void}
     */
    onChange(callback: (content: string) => void): void;
}

export { WYSIWYGEditor, DisplayMode, DisplayModeType };

