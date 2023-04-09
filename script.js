let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");

sliderPrev.style.display = "none";

document.querySelector(".slider-next").addEventListener("click", function () {
	offset = offset + 256;
	if (offset > 768) {
		offset = 768;
		sliderNext.style.display = "none";
	}

	if (offset > 255) {
		sliderPrev.style.display = "block";
	}

	sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
	offset = offset - 256;
	if (offset < 0) {
		offset = 0;
		sliderPrev.style.display = "none";
	}

	if (offset < 768) {
		sliderNext.style.display = "block";
	}

	if (offset < 255) {
		sliderPrev.style.display = "none";
	}

	sliderLine.style.left = -offset + "px";
});

if (sliderLine.offsetWidth <= 768) {
	sliderNext.style.display = "none";
}
