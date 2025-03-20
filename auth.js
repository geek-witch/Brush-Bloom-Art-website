document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const loginCard = document.getElementById("login-card")
    const forgotPasswordCard = document.getElementById("forgot-password-card")
    const resetPasswordCard = document.getElementById("reset-password-card")
  
    const loginForm = document.getElementById("login-form")
    const forgotPasswordForm = document.getElementById("forgot-password-form")
    const resetPasswordForm = document.getElementById("reset-password-form")
  
    const loginMessage = document.getElementById("login-message")
    const forgotMessage = document.getElementById("forgot-message")
    const resetMessage = document.getElementById("reset-message")
  
    const forgotPasswordLink = document.getElementById("forgot-password-link")
    const backToLoginBtn = document.getElementById("back-to-login")
    const cancelResetBtn = document.getElementById("cancel-reset")
  
    // Check URL for reset token
    function checkForResetToken() {
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get("token")
  
      if (token) {
        // Show reset password form and set token value
        document.getElementById("reset-token").value = token
        showCard(resetPasswordCard)
      }
    }
  
    // Run token check on page load
    checkForResetToken()
  
    // Event Listeners for navigation between cards
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault()
      showCard(forgotPasswordCard)
    })
  
    backToLoginBtn.addEventListener("click", () => {
      showCard(loginCard)
    })
  
    cancelResetBtn.addEventListener("click", () => {
      showCard(loginCard)
    })
  
    // Form Submissions
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const rememberMe = document.getElementById("rememberMe").checked
  
      // Show loading state
      const submitBtn = loginForm.querySelector('button[type="submit"]')
      const originalBtnText = submitBtn.textContent
      submitBtn.disabled = true
      submitBtn.textContent = "Logging in..."
  
      // Simulate AJAX request (replace with actual AJAX in production)
      setTimeout(() => {
        // This is where you'd normally make an AJAX call to your server
        // For demo purposes, we're just simulating a successful login
  
        // Reset button state
        submitBtn.disabled = false
        submitBtn.textContent = originalBtnText
  
        // Redirect on success (uncomment in production)
        // window.location.href = 'dashboard.html';
  
        // For demo, show success message
        showMessage(loginMessage, "success", "Login successful! Redirecting...")
      }, 1500)
    })
  
    forgotPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("forgot-email").value
  
      // Show loading state
      const submitBtn = forgotPasswordForm.querySelector('button[type="submit"]')
      const originalBtnText = submitBtn.textContent
      submitBtn.disabled = true
      submitBtn.textContent = "Sending..."
  
      // Simulate AJAX request (replace with actual AJAX in production)
      setTimeout(() => {
        // This is where you'd normally make an AJAX call to your server
        // For demo purposes, we're just simulating a successful request
  
        // Reset button state
        submitBtn.disabled = false
        submitBtn.textContent = originalBtnText
  
        // Show success message
        showMessage(forgotMessage, "success", "Password reset link sent! Please check your email.")
  
        // Clear the email field
        document.getElementById("forgot-email").value = ""
      }, 1500)
    })
  
    resetPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const token = document.getElementById("reset-token").value
      const newPassword = document.getElementById("new-password").value
      const confirmPassword = document.getElementById("confirm-password").value
  
      // Validate passwords match
      if (newPassword !== confirmPassword) {
        showMessage(resetMessage, "danger", "Passwords do not match.")
        return
      }
  
      // Validate password length
      if (newPassword.length < 6) {
        showMessage(resetMessage, "danger", "Password must be at least 6 characters long.")
        return
      }
  
      // Show loading state
      const submitBtn = resetPasswordForm.querySelector('button[type="submit"]')
      const originalBtnText = submitBtn.textContent
      submitBtn.disabled = true
      submitBtn.textContent = "Resetting..."
  
      // Simulate AJAX request (replace with actual AJAX in production)
      setTimeout(() => {
        // This is where you'd normally make an AJAX call to your server
        // For demo purposes, we're just simulating a successful request
  
        // Reset button state
        submitBtn.disabled = false
        submitBtn.textContent = originalBtnText
  
        // Show success message
        showMessage(resetMessage, "success", "Password reset successful! You can now login with your new password.")
  
        // Clear form fields
        document.getElementById("new-password").value = ""
        document.getElementById("confirm-password").value = ""
  
        // Redirect to login after 3 seconds
        setTimeout(() => {
          showCard(loginCard)
          // Remove token from URL without refreshing page
          window.history.replaceState({}, document.title, window.location.pathname)
        }, 3000)
      }, 1500)
    })
  
    // Helper Functions
    function showCard(cardToShow) {
      // Hide all cards
      loginCard.classList.add("d-none")
      forgotPasswordCard.classList.add("d-none")
      resetPasswordCard.classList.add("d-none")
  
      // Show the selected card
      cardToShow.classList.remove("d-none")
  
      // Clear all messages
      clearMessages()
    }
  
    function showMessage(element, type, text) {
      element.textContent = text
      element.className = `alert alert-${type} mt-3`
      element.classList.remove("d-none")
    }
  
    function clearMessages() {
      loginMessage.classList.add("d-none")
      forgotMessage.classList.add("d-none")
      resetMessage.classList.add("d-none")
    }
  
    // The following functions would be implemented in a real application
    // They are placeholders for the actual AJAX calls to your server
  
    // Function to handle the actual password reset request
    function requestPasswordReset(email) {
      // This would be an AJAX call to your server
      // Example using fetch:
      /*
          return fetch('api/forgot-password.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
          })
          .then(response => response.json());
          */
    }
  
    // Function to handle the actual password reset
    function resetPassword(token, newPassword) {
      // This would be an AJAX call to your server
      // Example using fetch:
      /*
          return fetch('api/reset-password.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token, newPassword }),
          })
          .then(response => response.json());
          */
    }
  })
  
  