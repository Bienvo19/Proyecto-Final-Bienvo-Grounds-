// Agregar el popup dinámicamente al cuerpo del HTML
document.addEventListener("DOMContentLoaded", function () {
    // HTML del modal
    const modalHTML = `
        <div class="modal fade" id="maintenanceModal" tabindex="-1" aria-labelledby="maintenanceModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="maintenanceModalLabel">Under Maintenance</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="img/menu-3.jpg" alt="Under Maintenance" class="img-fluid mb-3">
                        <p>We apologize for the inconvenience, but this feature is currently under maintenance.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Got it</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Agregar el HTML del modal al cuerpo
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Seleccionar todos los enlaces con una clase específica o href vacío que deben disparar el popup
    const learnMoreButtons = document.querySelectorAll('a[href=""]');  // Selecciona todos los enlaces con href vacío
    learnMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();  // Prevenir el comportamiento por defecto del enlace
            showMaintenancePopup();  // Llamar a la función que muestra el popup
        });
    });
});

// Función para mostrar el popup
function showMaintenancePopup() {
    const maintenanceModal = new bootstrap.Modal(document.getElementById('maintenanceModal'));
    maintenanceModal.show();
}
