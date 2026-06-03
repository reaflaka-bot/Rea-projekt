document.addEventListener("DOMContentLoaded", function () {
	const reservationForm = document.querySelector("form");

	reservationForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent page reload

		const formData = new FormData(reservationForm);
		const userData = {};

		formData.forEach((value, key) => {
			userData[key] = value;
		});

		// Display a confirmation message
		alert("Reservation Successful! Check your email for confirmation.");

		// Log data (for debugging)
		console.log("User Reservation Details:", userData);

		// Here you can send data to a backend using fetch()
		// Example:
		// fetch('/submit-reservation', {
		//   method: 'POST',
		//   body: JSON.stringify(userData),
		//   headers: { 'Content-Type': 'application/json' }
		// }).then(response => response.json())
		// .then(data => console.log("Server Response:", data));
	});
});
document.addEventListener("DOMContentLoaded", function () {
	const reserveButtons = document.querySelectorAll(".reserve");

	reserveButtons.forEach((button) => {
		button.addEventListener("click", function () {
			alert("Reservation feature coming soon!");
			// You can replace the alert with a redirect or form popup:
			// window.location.href = "reservation_page.html";
		});
	});
});

// Toggle menu on hamburger click
function toggleMenu() {
	document.querySelector(".hamburger").classList.toggle("active");
	document.querySelector(".menu").classList.toggle("active");
}

// Your existing JavaScript functions
function searchPage() {
	// Add search functionality here
}

// searchbar button active

function searchPage() {
	// Get the search input value
	const searchQuery = document.getElementById("searchQuery").value.trim().toLowerCase();

	// Define the mapping of search queries to page URLs
	const pages = {
		singapore: "Singapore.html",
		armenia: "Armenia.html",
		azerbaijan: "Azerbaijan.html",
		bahrain: "Bahrain.html",
		bhutan: "Bhutan.html",
		cypros: "Cypros.html",
		georgia: "Georgia.html",
		israel: "Israel.html",
		jordan: "Jordan.html",
		kambodia: "Kambodia.html",
		kuwait: "Kuwait.html",
		kyrgyzstan: "Kyrgyzstan.html",
		laos: "Laos.html",
		lebanon: "Lebanon",
		maldive: "Maldive.html",
		mongolia: "Mongolia.html",
		oman: "Oman.html",
		qatar: "Qatar.html",
		"state of palestine": "State-of-palestine.html",
		tajikistan: "tajikistan.html",
		"timor leste": "Timor-leste.html",
		turkmenistan: "Turkmenistan.html",
		"united arab emirates": "United-arab-emirates.html",
	};

	// Check if the search query matches any of the predefined destinations
	if (pages[searchQuery]) {
		window.location.href = pages[searchQuery]; // Redirect to the corresponding page
	} else {
		alert("Page not found! Please try a different location.");
	}
}
document.getElementById("bookingForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevents the form from submitting

	const bookingData = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value,
		date: document.getElementById("date").value,
		restorant: document.getElementById("restorant").value,
		hotel: document.getElementById("hotel").value,
	};

	// Save the booking data to localStorage
	localStorage.setItem("bookingData", JSON.stringify(bookingData));

	// Alert the user
	alert("Your booking has been saved!");
});
