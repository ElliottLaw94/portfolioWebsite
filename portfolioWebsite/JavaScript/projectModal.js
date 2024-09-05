document.addEventListener("DOMContentLoaded", function() {
    //Declare all variables and get elements from HTML file
    var projectLists = document.querySelectorAll(".project-list"); //Selects all project-list classes from HTML
    var modal = document.getElementById("project-modal"); 
    var modalImage = document.getElementById("modal-image"); 
    var modalTitle = document.getElementById("modal-title"); 
    var modalDescription = document.getElementById("modal-description"); 
    var modalContributionsHeading = document.getElementById("modal-contributions-heading"); 
    var modalContributions = document.getElementById("modal-contributions");
    var closeModalButton = document.getElementById("close-modal");

    //For loop function that checks which project-card has been clicked
    projectLists.forEach(function(projectList) {
        projectList.addEventListener("click", function(event) {
            var clickedCard = event.target.closest(".project-card");

            if (clickedCard) {
                //Extracts data from the clicked card
                var imageSrc = clickedCard.querySelector(".project-art").src;
                var imageAlt = clickedCard.querySelector(".project-art").alt;
                var title = clickedCard.querySelector(".project-title").textContent;
                var description = clickedCard.querySelector(".project-description").textContent;
                var contributionsHeading = clickedCard.querySelector(".contributions-heading").textContent;
                var contributionsList = clickedCard.querySelectorAll(".project-contributions li");
                var contributions = Array.from(contributionsList).map(li => li.textContent);

                //Populates the modal with the extracted data
                modalImage.src = imageSrc;
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalContributionsHeading.textContent = contributionsHeading;
                modalContributions.innerHTML = contributions.map(contribution => `<li>${contribution}</li>`).join("");

                //Show the modal
                modal.style.display = "block";
            }
        })
    });

    //Event listener to close the modal
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
});
