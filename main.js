let currentPos = 0;

function slideNext() {
	const track = document.querySelector(".posters");
	const cards = document.querySelectorAll(".card");
	if (cards.length === 0) return;
	const firstCard = cards[0];
	const cardWidth = firstCard.getBoundingClientRect().width;
	track.style.transition = "transform 0.5s ease-in-out";
	track.style.transform = `translateX(-${cardWidth}px)`;
	setTimeout(() => {
		track.style.transition = "none";
		track.style.transform = "translateX(0)";
		track.appendChild(firstCard);
	}, 510);
}

function selectCard(img) {
	const clickedCard = img.closest(".card");
	const isAlreadySelected =
		clickedCard.classList.contains("selected");
	document
		.querySelectorAll(".card")
		.forEach((c) => c.classList.remove("selected"));
	if (!isAlreadySelected) {
		clickedCard.classList.add("selected");
	}
}

function takeBounty(btn) {
	const card = btn.closest(".card");
	const name = card.querySelector("img").alt;
	alert(`You took the bounty on: ${name}!`);
	card.classList.remove("selected");
}

function skipBounty(btn) {
	btn.closest(".card").classList.remove("selected");
}

function takeBounty(btn) {
	const card = btn.closest(".card");
	const name = card.querySelector("img").alt;

	const shot = new Audio(
		"../Posters/bountyposters/gunshot.mp3",
	);
	shot.play();

	alert(`You took the bounty on: ${name}!`);
}

const audio = document.getElementById("bgmusic");

// Attempt autoplay immediately
audio.play().catch(() => {
	// If blocked, play on first user interaction
	document.addEventListener("click", () => audio.play(), {
		once: true,
	});
	document.addEventListener("keydown", () => audio.play(), {
		once: true,
	});
});
