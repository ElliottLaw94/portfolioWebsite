document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const messageInput = document.getElementById("message");
    const charCounter = document.getElementById("char-counter");

    const maxChars = 250;
    charCounter.textContent = `0 / ${maxChars} characters`;

    messageInput.addEventListener("input", function() {
        const charCount = messageInput.value.length;
        charCounter.textContent = `${charCount} / ${maxChars} characters`;

        if (charCount > maxChars) {
            charCounter.style.color = "red";
        } else {
            charCounter.style.color = ""; // Reset color when under the limit
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Additional form validation and processing here...

        alert("Thank you for your message!");
        form.reset();
        charCounter.textContent = `0 / ${maxChars} characters`; // Reset counter
    });
});
