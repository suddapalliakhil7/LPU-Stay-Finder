
const searchInput = document.getElementById("search");
const roomFilter = document.getElementById("room-filter");
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const noResults = document.createElement("p");
noResults.id = "no-results";
noResults.textContent = "No accommodation found!";
noResults.style.display = "none";

cardContainer.after(noResults);

function searchAccommodation() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const filterValue = roomFilter.value.toLowerCase();

    let visibleCards = 0;

    cards.forEach(function(card) {
        const cardText = card.textContent.toLowerCase();

        const matchesSearch = cardText.includes(searchValue);
        const matchesFilter =
            filterValue === "all" || cardText.includes(filterValue);

        if (matchesSearch && matchesFilter) {
            card.style.display = "";
            visibleCards++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = visibleCards === 0 ? "block" : "none";
}

searchInput.addEventListener("input", searchAccommodation);
roomFilter.addEventListener("change", searchAccommodation);


const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("student-name").value;
        const accommodation = document.getElementById("accommodation").value;

        const message = document.getElementById("booking-message");

        message.textContent =
            "Thank you, " + name +
            "! Your booking request for " +
            accommodation + " has been submitted successfully.";

        bookingForm.reset();

    });

}
