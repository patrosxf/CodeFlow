<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script Editor</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Script Editor</h1>
            <div class="controls">
                <input type="file" id="fileInput" accept=".js" />
                <button id="loadButton">Load</button>
                <button id="saveButton">Save</button>
            </div>
            <div class="settings">
                <button id="settingsButton">Settings</button>
            </div>
        </header>
        <div id="editorContainer">
            <textarea id="editor" placeholder="Write your script here..."></textarea>
            <div id="output" class="output"></div>
        </div>
        <div id="zoomControls">
            <button id="zoomInButton">Zoom In</button>
            <button id="zoomOutButton">Zoom Out</button>
        </div>
    </div>
    <div id="settingsPanel" class="settings-panel">
        <h2>Settings</h2>
        <label for="fontSize">Font Size:</label>
        <input type="number" id="fontSize" value="16" min="8" max="72" />
        <button id="closeSettings">Close</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
