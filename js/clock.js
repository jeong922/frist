const clock = document.querySelector("#clock");
const todayInfo = document.querySelector("#today-info");

function getToday() {
	const now = new Date(); // 호출하는 당시의 현재 날짜 시간
	const hours = String(now.getHours()).padStart(2, "0"); 
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");
	const yy = now.getFullYear();
	const mm = now.getMonth() + 1;
	const dd = now.getDate();
	const days = now.getDay();

	const week = ["일", "월", "화", "수", "목", "금", "토"]

	clock.innerText = `${hours} : ${minutes} : ${seconds}`;
	todayInfo.innerText = `${yy}년 ${mm}월 ${dd}일 ${week[days]}요일`;

} 
getToday();
setInterval(getToday, 1000); // 1000ms 마다 getClock() 호출