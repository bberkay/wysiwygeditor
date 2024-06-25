<h1 align="center">Lightweight WYSIWYG Editor</h1>

<a href="https://bberkay.github.io/lightweight-wysiwyg-editor/">Live Demo</a>

### Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Usage](#usage)
4. [Customization](#customization)

## Introduction

A simple and lightweight WYSIWYG editor written in vanilla JavaScript. Designed to be easy to use and easy to customize.
A simple and lightweight WYSIWYG editor written in vanilla JavaScript. Designed to be easy to use and easy to customize.

<img src="https://lh3.googleusercontent.com/fife/ALs6j_FD3S0KXNuITWL0YewP3ByQQozKO1Yl0MM9RqaDUbMFrSQP8XeQhD_YW1e6uBaeCZ6_J7sIUkDdpIEiJpZVhqS4DD5KG6ySKcXAmig8QftjCJXzftduirehAP2-shp6UMmYG5WSARmMOI0KppB_NaoUtmdSfrMJ9FmwPOz2LmfI8Io2vvUIf3WJcWS7qgT3wk2OuJu9tiiZyHk93eHbxmz_b-CUB3QMRBp9YppyE2nObop9ye2YvA1fzWrySPdADfgRkPifO42SG1-fDoji-ra6YWT6PXV5uYjPp4TEcIywFpiTK7caS6k7CBmMuOMkctrFqTn4l7dEwesnWRjbafVWdZOGp91-JzGzEKYqLmJNbIwzYZ0C4MNm0Xh5dRCiWNofiaB4zGyBb-5Cl4A7VTRmgGk2VwRqhKdl_7hAZ_ol4-G89d7EPKxhMN67J20FHn1oAjH1nIzyGsNJMD5iwpLVnaxgC-kBAaaOOyomL-RPsicrGkKGhKGbyMeA_lOn7sViBtO61tJqvoVrgD2WLkUnPhJpQf-TBYtqXbv4MlyADpYtfqL1ESfNuswD9La7zLQj9kxhYieb-l3QGzb0oNAc3yc48Q7qKNJ-jyzJ73FON-CbQtSm7w31zvBpM46wa0SttLCCbS7WXGb7l9EnF2b6kniFvD5ct-ib0bHXuCY3QZCnBPriARY8g0v26A4vdilT_VARgwEauNJvmD1FM_BZQDz84WOfiwo-O1lpwzUViDq-IzJ-5voJsMB7dg3immRqUvaCoS8A41TtJ5lthlTCw0mBAUzQjR9RM52fSVSDJ53YQmXt86gsbSfytB_ZDCRMKxZkXspqkr5P6rO0KOhHAI2FXfFiuNyTFZoE9grqDHfkuNLRvGcL-tDKqeRM8xjVHXeuELv3Wmp_YlUFYyrpSO0znWCrHbkTRYz-WjJDS0khDqJjabxZWsIHXiPEDGQXeYqm3rojEc3OSVq7JidmnK7FDJ3KYVrbCJcKzPhNpVMMjb8TxK5HzrRglVtGSCytSM2w6-owwsbllSKQL-ai44etOgp4NbCzkmIK1ZKHiEsq2BDzooAW8c1MIKH-wpOuG9Yz45jS7QbjMnKdYR85G9uUvbZeUz2LqAJfEKye5FPiv1GZHAZHsySFagN_AKXDHweD5uZW33Sh5Kf_6HnuWhxQ-Jhyi3QGZtENDo2eLQbkOFgUQdFF8E4tDpAhsi3uGFTFSUqqKyHmhqtcoh0z0EDCUoO4db2m-U4C9KBv7rxe-mtE8TkAItBmxNMRyGpNjH4rNfM9WPjRmtljNPU9fwyeyZFfV-atQ9ak1h2fM2rxHI1DVrzwEmVTNjG3c1KuUfYKyR_nrq_WBiXewKm2e663cvPUbQYTKh7Vz8XC723-eJNLTwqSZpqOe-TyH6QXVSWSnpgivM1ZdiFyo63CqnfV-Z_JZktfIDDnloqgx3noYM_MwjsQZy5VzmC9y60xolrVLlchfxT95_A2DV50nfxV-GA2u9exxbAlpBJeF4NVfVEKEFp8dffuIqSTCffzux9AjsRYiwoIyxGYWwV-_DFwFVXg4FYJ4cIQ7Pq8lsQ8UeedgqTMuamGt3-pA35wfRzVPgtKnQw8=w1280-h937">

## Features

- Different toolbar behavior modes consisting of `DisplayMode.Fixed`, `DisplayMode.Popover`, and `DisplayMode.Tooltip`.
- Customizable toolbar layout, buttons, and styles.
- Drag and drop image upload, copy-paste link on selected text, and more.

## Usage

#### Quick Start

```html
<html>
    <head>
        <!-- Include the stylesheet -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bberkay/lightweight-wysiwyg-editor@main/src/wysiwyg.css">
    </head>
    <body>
        <!-- Create a div element with an id -->
        <div id="editor"></div>

        <!-- Include the script -->
        <script src="https://cdn.jsdelivr.net/gh/bberkay/lightweight-wysiwyg-editor@main/src/wysiwyg.js"></script>
        <script>
            // Initialize the editor
            const editor = new WYSIWYGEditor('editor');
            editor.init();
        </script>
    </body>
</html>
```

#### Fixed Display Mode

- The fixed editor is initialized with the fixed display mode(default)
- The fixed display mode is triggered when the editor is loaded

```html
<!-- Without any customization -->
<div id="wysiwyg-editor-fixed-example"></div>

<script>
    const editorFixed = new WYSIWYGEditor('wysiwyg-editor-fixed-example');
    editorFixed.init();
</script>
```

#### Popover Display Mode

- The popover editor is initialized with the popover display mode
- The popover display mode is triggered when the toolbar button is clicked

```html
<!-- Without any customization -->
<div id="wysiwyg-editor-popover-example"></div>

<script>
    const editorPopover = new WYSIWYGEditor('wysiwyg-editor-popover-example', { displayMode: DisplayMode.Popover });
    editorPopover.init();
</script>
```

#### Tooltip Display Mode

- The tooltip editor is initialized with the tooltip display mode
- The tooltip display mode is triggered when the toolbar button is hovered

```html
<!-- Without any customization -->
<div id="wysiwyg-editor-tooltip-example"></div>

<script>
    const editorTooltip = new WYSIWYGEditor('wysiwyg-editor-tooltip-example', { displayMode: DisplayMode.Tooltip });
    editorTooltip.init();
</script>
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

For example:
```html
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

<script>
    const editorTooltip = new WYSIWYGEditor('wysiwyg-editor-fixed-example', { displayMode: DisplayMode.Fixed });
    editorTooltip.init();
</script>
```

<hr>
<p align="center"><a href="mailto:berkaykayaforbusiness@outlook.com">berkaykayaforbusiness@outlook.com</a></p>
