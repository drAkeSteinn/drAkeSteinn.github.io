// Inicializar Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Funcionalidad de Tabs
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');

        // Remover clase active de todos los triggers
        tabTriggers.forEach(t => t.classList.remove('active'));

        // Agregar clase active al trigger clickeado
        this.classList.add('active');

        // Ocultar todos los contenidos de tabs
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Mostrar el contenido del tab seleccionado
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
