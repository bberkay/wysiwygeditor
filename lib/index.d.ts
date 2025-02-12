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
    clear(): void;

    /**
     * @description Run a function when the content changes
     * @param {function} callback The function to be called when the content changes
     * @example editor.onChange((content) => { console.log(content) });
     * @returns {void}
     */
    onChange(callback: (content: string) => void): void;
}

export { WYSIWYGEditor, DisplayMode, DisplayModeType };
