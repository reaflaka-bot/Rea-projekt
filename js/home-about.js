function searchPage() {
	// Get the search input value
	const searchQuery = document.getElementById("searchQuery").value.trim().toLowerCase();

	// Define the mapping of search queries to page URLs
	const pages = {
		singapore: "/48-Countries-of-Asia/Singapore.html",
		armenia: "/48-Countries-of-Asia/Armenia.html",
		azerbaijan: "/48-Countries-of-Asia/Azerbaijan.html",
		bahrain: "/48-Countries-of-Asia/Bahrain.html",
		bhutan: "/48-Countries-of-Asia/Bhutan.html",
		cypros: "/48-Countries-of-Asia/Cypros.html",
		georgia: "/48-Countries-of-Asia/Georgia.html",
		israel: "/48-Countries-of-Asia/Israel.html",
		jordan: "/48-Countries-of-Asia/Jordan.html",
		kambodia: "/48-Countries-of-Asia/Kambodia.html",
		kuwait: "/48-Countries-of-Asia/Kuwait.html",
		kyrgyzstan: "/48-Countries-of-Asia/Kyrgyzstan.html",
		laos: "/48-Countries-of-Asia/Laos.html",
		lebanon: "/48-Countries-of-Asia/Lebanon",
		maldive: "/48-Countries-of-Asia/Maldive.html",
		mongolia: "/48-Countries-of-Asia/Mongolia.html",
		oman: "/48-Countries-of-Asia/Oman.html",
		qatar: "/48-Countries-of-Asia/Qatar.html",
		"state of palestine": "/48-Countries-of-Asia/State-of-palestine.html",
		tajikistan: "/48-Countries-of-Asia/tajikistan.html",
		"timor leste": "/48-Countries-of-Asia/Timor-leste.html",
		turkmenistan: "/48-Countries-of-Asia/Turkmenistan.html",
		"united arab emirates": "/48-Countries-of-Asia/United-arab-emirates.html",
	};

	// Check if the search query matches any of the predefined destinations
	if (pages[searchQuery]) {
		window.location.href = pages[searchQuery]; // Redirect to the corresponding page
	} else {
		alert("Page not found! Please try a different location.");
	}
}
