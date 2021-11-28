const images = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // images중 하나를 랜덤으로 선택

const backgroudImage = document.createElement("img");
const container = document.querySelector(".full-background");

backgroudImage.src = `img/${chosenImage}`; // 이미지를 선택

container.appendChild(backgroudImage); // full-background에 이미지 첨부

// ----------------------------------------------------------------
// 브라우저창 크기에 따라 일정 비율로 배경이미지 크기 변하게 만들기
function handleWindow(e) {
	const windowWidth = e.target.innerWidth;
	const windowHeight = e.target.innerHeight;
	const broswerRatio = windowWidth / windowHeight;
	const imageRatio = 1920 / 1080;
	if(imageRatio > broswerRatio) {
		container.style.height = "100%";
		container.style.width = `${windowHeight * imageRatio}px`;
		container.style.left = `${(windowWidth - windowHeight * imageRatio) / 2}px`;
		container.style.top = "0";
	} else {
		container.style.height = `${windowWidth / imageRatio}px`;
		container.style.width = "100%";
		container.style.left = "0";
		container.style.top = `${(windowHeight - windowWidth / imageRatio) / 2}px`;
	}
};

window.addEventListener("resize", handleWindow);
window.dispatchEvent(new Event('resize')); // 강제로 resize 이벤트 발생 시킴

