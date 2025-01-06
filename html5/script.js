const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

// Open file selector on click
dropZone.addEventListener('click', () => fileInput.click());

// Handle drag over
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

// Handle drag leave
dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

// Handle drop
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

// Handle file selection through input
fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
});

// Handle files
function handleFiles(files) {
    fileList.innerHTML = ''; // Clear previous list
    Array.from(files).forEach((file, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `${index + 1}. ${file.name} (${file.size} bytes)`;
        fileList.appendChild(listItem);
    });
}
