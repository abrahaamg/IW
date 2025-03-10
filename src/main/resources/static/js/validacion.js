document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-register");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evitar envío automático

        // Limpiar mensajes previos
        document.querySelectorAll(".error-message").forEach(span => span.textContent = "");
        statusMessage.textContent = ""; // Limpiar mensaje de estado
        statusMessage.className = ""; // Quitar clases previas

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
            let errorSpan = document.getElementById(`error-${id}`);
            if (!errorSpan) {
                errorSpan = document.createElement("span");
                errorSpan.id = `error-${id}`;
                errorSpan.className = "error-message";
                document.getElementById(id).parentNode.appendChild(errorSpan);
            }
            errorSpan.textContent = message;
            errorSpan.style.color = "red";
            valid = false;
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

        if (!valid) return; // Si hay errores, no continuar

        // Enviar los datos al servidor como JSON
        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ dni, name, surname, username, email, pwd: password }),
            });

            const data = await response.text(); // Obtener la respuesta en texto

            if (response.ok) {
                statusMessage.textContent = "Registro exitoso.";
                statusMessage.className = "alert alert-success";
                form.reset(); // Limpiar formulario tras el registro exitoso
            } else {
                statusMessage.textContent = "Error en el registro: " + data;
                statusMessage.className = "alert alert-danger";
            }
        } catch (error) {
            console.error("Error en la validación:", error);
            statusMessage.textContent = "Ocurrió un error al registrar el usuario.";
            statusMessage.className = "alert alert-danger";
        }
    });
});
