const genreSelect = document.querySelector("input");
const reviews = document.getElementById("review_block").children;
const childArray = Array.from(reviews);

genreSelect.oninput = (e) => {
	let rating = 0;
	if (e.target.value !== "") {
		rating = parseInt(e.target.value);
	}
	console.log(rating);
	childArray.forEach((child) => {
		const classList = child.classList;
		if (parseInt(classList[1]) >= rating) {
			child.style.display = "block";
		} else {
			child.style.display = "none";
		}
	});
};
