document.getElementById('loadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file to load.');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
        document.getElementById('editor').value = event.target.result;
        updateOutput(event.target.result);
    };
    
    reader.readAsText(file);
});

document.getElementById('saveButton').addEventListener('click', () => {
    const text = document.getElementById('editor').value;
    const blob = new Blob([text], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.js';
    a.click();
    
    URL.revokeObjectURL(url);
});

let zoomLevel = 1;
const minZoomLevel = 0.5; // Set a minimum zoom level to avoid excessive zooming out

document.getElementById('zoomInButton').addEventListener('click', () => {
    zoomLevel += 0.1;
    updateZoom();
});

document.getElementById('zoomOutButton').addEventListener('click', () => {
    zoomLevel = Math.max(minZoomLevel, zoomLevel - 0.1); // Ensure we don't go below min zoom level
    updateZoom();
});

function updateZoom() {
    document.getElementById('editor').style.transform = `scale(${zoomLevel})`;
    document.getElementById('output').style.transform = `scale(${zoomLevel})`;
}

document.getElementById('editor').addEventListener('input', (e) => {
    const inputText = e.target.value;
    updateOutput(inputText);
});

function updateOutput(text) {
    const formattedText = text.split('').map(letter => `<span class="text-effect">${letter}</span>`).join('');
    document.getElementById('output').innerHTML = formattedText;
}

document.getElementById('settingsButton').addEventListener('click', () => {
    document.getElementById('settingsPanel').style.display = 'block';
});

document.getElementById('closeSettings').addEventListener('click', () => {
    document.getElementById('settingsPanel').style.display = 'none';
});

document.getElementById('fontSize').addEventListener('input', (e) => {
    const fontSize = e.target.value;
    document.getElementById('editor').style.fontSize = `${fontSize}px`;
    document.getElementById('output').style.fontSize = `${fontSize}px`;
});
