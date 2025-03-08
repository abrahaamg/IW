document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-register");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evitar envío automático

        // Limpiar mensajes previos
        document.querySelectorAll(".error-message").forEach(span => span.textContent = "");

        // Obtener valores de los campos
        const dni = document.getElementById("dni").value.trim();
        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pwd").value.trim();

        let valid = true;

        // Función para mostrar errores
        const showError = (id, message) => {
            const errorSpan = document.getElementById(`error-${id}`);
            if (errorSpan) {
                errorSpan.textContent = message;
                errorSpan.style.color = "red";
                valid = false;
            }
        };

        // Validaciones básicas
        if (!dni) showError("dni", "El DNI es obligatorio.");
        if (!name) showError("name", "El nombre es obligatorio.");
        if (!surname) showError("surname", "Los apellidos son obligatorios.");
        if (!username) showError("username", "El nombre de usuario es obligatorio.");
        if (!email) showError("email", "El email es obligatorio.");
        if (!password) showError("pwd", "La contraseña es obligatoria.");

        // Validar formato de email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email && !emailPattern.test(email)) {
            showError("email", "Introduce un email válido.");
        }

        // Validar contraseña (mínimo 8 caracteres)
        if (password && password.length < 8) {
            showError("pwd", "La contraseña debe tener al menos 8 caracteres.");
        }

        if (!valid) return; // Si hay errores, no seguir

        // Verificar si el usuario ya está registrado con AJAX
        try {
            const response = await fetch("/check-username", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({ username, email }),
            });

            const data = await response.json();

            if (data.exists) {
                showError("username", "El nombre de usuario ya está registrado.");
                showError("email", "El email ya está registrado.");
            } else {
                form.submit(); // Si no hay errores, enviar formulario
            }
        } catch (error) {
            console.error("Error en la validación:", error);
        }
    });
});
