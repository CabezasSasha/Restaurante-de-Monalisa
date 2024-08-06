function toggleVisibility() {
    var nota = document.querySelector('.Nota');
    nota.classList.toggle('visible');
}

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('visible');
}