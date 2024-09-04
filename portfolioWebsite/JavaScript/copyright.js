document.addEventListener("DOMContentLoaded", function() {
    var copyrightButton = document.getElementById("copyright-button");
    var modal = document.getElementById("copyright-modal");
    var closeModalButton = document.getElementById("close-copyright-modal");
    
    //Opens the Copyright pop-up when button is clicked
    copyrightButton.addEventListener("click", function() {
        modal.style.display = "block";
    });
    
    //Close the modal
    window.addEventListener("click", function(event) {
        if(event.target !== modal && event.target !== copyrightButton || event.target === closeModalButton) {
            modal.style.display = "none";
        }
    });
});