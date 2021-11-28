const API_KEY = "56f473b9444b1c3d7d419f5c3e2f1c27";

function onGeoOK(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url)
	.then(response => response.json())
	.then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name; // 지역
		weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;// 날씨 기온
	}); 
}


function onGeoError() {
	alert("위치에 대한 엑세스를 허용해 주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
