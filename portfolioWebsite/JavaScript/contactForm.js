document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    var messageInput = document.getElementById("message");
    var charCounter = document.getElementById("char-counter");
    var modal = document.getElementById("thank-you-modal");
    var modalMessage = document.getElementById("modal-message");
    var closeModalButton = document.getElementById("close-modal");

    var maxChars = 250;
    charCounter.textContent = `0 / ${maxChars}`;

    messageInput.addEventListener("input", function() {
        var charCount = messageInput.value.length;
        charCounter.textContent = `${charCount} / ${maxChars}`;

        if (charCount >= maxChars) {
            charCounter.style.color = "red"; //Changes text colour of character count to red when limit is reached
        } 
        else {
            charCounter.style.color = "var(--text-colour)"; //Resets the colour when under the limit
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); //Prevents default form submission
        
        //Gets the name and message
        var userName = document.getElementById("name").value;
        var userMessage = messageInput.value;
        
        //Enables the use of return key to generate <br> in HTML
        var formattedMessage = userMessage.replace(/\n/g, "<br>");
        
        //Sets custom confirmation message in HTML
        modalMessage.innerHTML = `
            <p>Thank you, <strong>${userName}</strong>!</p>
            <p><strong>Your message:</strong><br>"${formattedMessage}"</p>
            <p><strong>Has been recieved!</strong></p>
            <p>We will aim to get back to you as soon as possible.</p>
        `;
        
        //Shows the modal
        modal.style.display = "block";

        
        form.reset(); //Resets the form
        charCounter.textContent = `0 / ${maxChars} characters`; //Resets the character counter
        charCounter.style.color = "var(--text-colour)"; //Resets the character counter text colour on submission
    });
    
    //Closes the modal when the user clicks the close button
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
});
