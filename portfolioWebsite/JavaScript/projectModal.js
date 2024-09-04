document.addEventListener("DOMContentLoaded", function() {
    var projectLists = document.querySelectorAll(".project-list");
    var modal = document.getElementById("project-modal");
    var modalImage = document.getElementById("modal-image");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
    var modalContributionsHeading = document.getElementById("modal-contributions-heading");
    var modalContributions = document.getElementById("modal-contributions");

    projectLists.forEach(function(projectList) {
    projectList.addEventListener("click", function(event) {
        var clickedCard = event.target.closest(".card");
        
        if (clickedCard) {
            // Extract data from the clicked card
            var imageSrc = clickedCard.querySelector(".project-art").src;
            var imageAlt = clickedCard.querySelector(".project-art").alt;
            var title = clickedCard.querySelector(".project-title").textContent;
            var description = clickedCard.querySelector(".project-description").textContent;
            var contributionsHeading = clickedCard.querySelector(".contributions-heading").textContent;
            var contributionsList = clickedCard.querySelectorAll(".project-contributions li");
            var contributions = Array.from(contributionsList).map(li => li.textContent);

            // Populate the modal with the extracted data
            modalImage.src = imageSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalContributionsHeading.textContent = contributionsHeading;
            modalContributions.innerHTML = contributions.map(contribution => `<li>${contribution}</li>`).join("");

            // Show the modal
            modal.style.display = "block";
        }
    })});

    // Add an event listener to close the modal
    var closeModalButton = document.getElementById("close-modal");
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
});
