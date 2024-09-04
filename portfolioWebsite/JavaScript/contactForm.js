document.addEventListener("DOMContentLoaded", function() {
    //Declare all variables and get elements from HTML
    var form = document.getElementById("contact-form");
    var messageInput = document.getElementById("message");
    var charCounter = document.getElementById("char-counter");
    var modal = document.getElementById("thank-you-modal");
    var modalMessage = document.getElementById("modal-message");
    var closeModalButton = document.getElementById("close-modal");
    
    //Initialise character counter max value
    var maxChars = 250;
    charCounter.textContent = `0 / ${maxChars}`;
    
    //Event listener to count how many characters are typed into the input
    messageInput.addEventListener("input", function() {
        var charCount = messageInput.value.length;
        charCounter.textContent = `${charCount} / ${maxChars}`;
        
        //If statement to check if the character limit is reached
        if (charCount >= maxChars) {
            charCounter.style.color = "red"; //Changes text colour of character counter to red when limit is reached
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
        
        //Sets custom message in HTML
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
