document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".auth-tab");
    const forms = document.querySelectorAll(".auth-form");
    const forgotPasswordLink = document.querySelector("#forgot-password-link");
    const forgotPasswordModal = document.getElementById("forgot-password-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const closeModalButton = document.getElementById("close-modal");
    const togglePasswordButtons = document.querySelectorAll(".toggle-password");

    // Tab switching
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            forms.forEach((form) => form.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(`${tab.dataset.tab}-form`).classList.add("active");
        });
    });

    // Forgot Password Modal
    forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault();
        forgotPasswordModal.classList.add("active");
        modalOverlay.classList.add("active");
    });

    closeModalButton.addEventListener("click", () => {
        forgotPasswordModal.classList.remove("active");
        modalOverlay.classList.remove("active");
    });

    modalOverlay.addEventListener("click", () => {
        forgotPasswordModal.classList.remove("active");
        modalOverlay.classList.remove("active");
    });

    // Handle Forgot Password Form Submission
    document.getElementById("forgot-password-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("reset-email").value;

        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Password reset link sent to ${email}`);
        forgotPasswordModal.classList.remove("active");
        modalOverlay.classList.remove("active");
    });

    // Toggle password visibility
    togglePasswordButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.682 1.662-1.208 2.385M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>`;
            } else {
                input.type = "password";
                button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.682 1.662-1.208 2.385M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>`;
            }
        });
    });
});