
const initSlider() =() => {
	const imgList = document.qureySelector(".slider-wrapper .img-list");
	const slideButtons = document.qureySelectorAll(".slider-wrapper .slide-button");

	slideButtons.forEach(button => {
		button.addEventListener("click", () => {
			const direction = button.id ==="prev-slide" ? -1 : 1;
			const scrollAmount = img-List.clientWidth * direction;
			imgList.scrollBy({left: scrollAmount, behaviour: "smooth"});


		});
	});
}

window.addEventListener("load", initSlider);