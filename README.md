<h1 align="center"> Lightweight WYSIWYG Editor</h1>

<a href="https://bberkay.github.io/lightweight-wysiwyg-editor/">Live Demo</a>

A simple and lightweight WYSIWYG editor written in vanilla JavaScript. Designed to be easy to use and easy to customize.

## Features

- Different toolbar behavior modes consisting of `DisplayMode.Fixed`, `DisplayMode.Popover`, and `DisplayMode.Tooltip`.
- Customizable toolbar layout, buttons, and styles.
- Drag and drop image upload, copy-paste link on selected text, and more.

## Usage

#### Fixed Display Mode

- The fixed editor is initialized with the fixed display mode(default)
- The fixed display mode is triggered when the editor is loaded

```html
<html>
    <head>
        <link rel="stylesheet" href="wysiwyg.css">
    </head>
    <body>
        <!-- Without any customization -->
        <div id="wysiwyg-editor-fixed-example"></div>

        <script src="wysiwyg.js"></script>
        <script>
            const editorFixed = new WYSIWYGEditor('wysiwyg-editor-fixed-example');
            editorFixed.init();
        </script>
    </body>
</html>
```

#### Popover Display Mode

- The popover editor is initialized with the popover display mode
- The popover display mode is triggered when the toolbar button is clicked

```html
<html>
    <head>
        <link rel="stylesheet" href="wysiwyg.css">
    </head>
    <body>
        <!-- Without any customization -->
        <div id="wysiwyg-editor-popover-example"></div>

        <script src="wysiwyg.js"></script>
        <script>
            const editorPopover = new WYSIWYGEditor('wysiwyg-editor-popover-example', { displayMode: DisplayMode.Popover });
            editorPopover.init();
        </script>
    </body>
</html>
```

#### Tooltip Display Mode

- The tooltip editor is initialized with the tooltip display mode
- The tooltip display mode is triggered when the toolbar button is hovered

```html
<html>
    <head>
        <link rel="stylesheet" href="wysiwyg.css">
    </head>
    <body>
        <!-- Without any customization -->
        <div id="wysiwyg-editor-tooltip-example"></div>

        <script src="wysiwyg.js"></script>
        <script>
            const editorTooltip = new WYSIWYGEditor('wysiwyg-editor-tooltip-example', { displayMode: DisplayMode.Tooltip });
            editorTooltip.init();
        </script>
    </body>
</html>
```

#### Public Methods
<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>init()</td>
        <td>Initialize the editor.</td>
    </tr>
    <tr>
        <td>getTextContent()</td>
        <td>Get the content of the body's innerText.</td>
    </tr>
    <tr>
        <td>getHTMLContent()</td>
        <td>Get the content of the body's innerHTML.</td>
    </tr>
    <tr>
        <td>setHTMLContent(content: string)</td>
        <td>Set the content of the body's innerHTML.</td>
    </tr>
    <tr>
        <td>setTextContent(content: string)</td>
        <td>Set the content of the body's innerText.</td>
    </tr>
    <tr>
        <td>addHTMLContent(content: string)</td>
        <td>Add content to the body's innerHTML.</td>
    </tr>
    <tr>
        <td>addTextContent(content: string)</td>
        <td>Add content to the body's innerText.</td>
    </tr>
    <tr>
        <td>addFullHTMLPage(content: string):</td>
        <td>Add full HTML page to the editor(this will be added inside the iframe tag)</td>
    </tr>
    <tr>
        <td>clearContent()</td>
        <td>Clear the content of the body.</td>
    </tr>
    <tr>
        <td>onChange(callback: (data: string) => void)</td>
        <td>Listen to the changes in the editor.</td>
    </tr>
</table>

## Customization

- You can customize the toolbar by creating a new toolbar inside the `wysiwyg-toolbar`
div. The only thing you need to do is to add the `data-command` and `data-value`
attributes to the buttons. Also, default layout can be changed from the <a href="https://github.com/bberkay/lightweight-wysiwyg-editor/blob/main/src/wysiwyg.js#L103">wysiwyg.js</a> file.
- Initial content can be set by adding the content inside the div that has the class `wysiwyg-body`.
- For customizing the styles, you can add your own styles to the <a href="https://github.com/bberkay/lightweight-wysiwyg-editor/blob/main/src/wysiwyg.css">wysiwyg.css</a> file.

```html
<html>
    <head>
        <link rel="stylesheet" href="wysiwyg.css">
    </head>
    <body>
        <!-- With customization -->
        <div id="wysiwyg-editor-fixed-example">
            <div class="wysiwyg-toolbar">
                <div class="wysiwyg-toolbar-group">
                    <div class="wysiwyg-toolbar-dropdown">
                        <div class="wysiwyg-toolbar-dropdown-toggle">
                            <span>Normal</span>
                        </div>
                        <div class="wysiwyg-toolbar-dropdown-content">
                            <button data-command="fontSize" data-value="7">Huge</button>
                            <button data-command="fontSize" data-value="5">Large</button>
                            <button data-command="fontSize" data-value="3">Normal</button>
                            <button data-command="fontSize" data-value="1">Small</button>
                        </div>
                    </div>
                    <div class="wysiwyg-toolbar-dropdown">
                        <div class="wysiwyg-toolbar-dropdown-toggle">
                            <span>Sans-Serif</span>
                        </div>
                        <div class="wysiwyg-toolbar-dropdown-content">
                            <button data-command="fontName" data-value="sans-serif" style="font-family:sans-serif;">Sans-Serif</button>
                            <button data-command="fontName" data-value="serif" style="font-family:serif;">Serif</button>
                            <button data-command="fontName" data-value="monospace" style="font-family:monospace;">Monospace</button>
                        </div>
                    </div>
                </div>
                <div class="wysiwyg-toolbar-group">
                    <button data-command="bold" style="font-weight:bold;">B</button>
                    <button data-command="italic" style="font-style:italic;">I</button>
                    <button data-command="underline" style="text-decoration:underline;">U</button>
                    <button data-command="strikeThrough" style="text-decoration:line-through;">S</button>
                </div>
            </div>
            <div class="wysiwyg-body">
                <h3>WYSIWYG Editor</h3>
                <p>Write something here...</p>
            </div>
        </div>

        <script src="wysiwyg.js"></script>
        <script>
            const editorTooltip = new WYSIWYGEditor('wysiwyg-editor-fixed-example', { displayMode: DisplayMode.Fixed });
            editorTooltip.init();
        </script>
    </body>
</html>
```

<hr>
<p align="center"><a href="mailto:berkaykayaforbusiness@outlook.com">berkaykayaforbusiness@outlook.com</a></p>