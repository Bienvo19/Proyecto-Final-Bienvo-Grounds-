// Agregar el popup dinámicamente al cuerpo del HTML
document.addEventListener("DOMContentLoaded", function () {
    // HTML del modal de éxito
    const successModalHTML = `
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="successModalLabel">Success</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="img/menu-3.jpg" alt="Success" class="img-fluid mb-3">
                        <p>Your data has been sent successfully!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Agregar el HTML del modal al cuerpo
    document.body.insertAdjacentHTML('beforeend', successModalHTML);

    // Obtener el formulario y añadir un evento submit
    const form = document.querySelector('form.mb-5');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();  // Prevenir el envío real del formulario
            showSuccessPopup();  // Mostrar el popup de éxito
        });
    }

    // Obtener el botón "Book Now" y agregar el evento click
    const bookNowButton = document.querySelector('button[type="submit"].btn.btn-primary');
    if (bookNowButton) {
        bookNowButton.addEventListener('click', function (e) {
            e.preventDefault();  // Prevenir el comportamiento por defecto del botón
            showSuccessPopup();  // Mostrar el popup de éxito
        });
    }
});

// Función para mostrar el popup de éxito
function showSuccessPopup() {
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
}
