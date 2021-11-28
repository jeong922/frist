const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout-button")

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAEM_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault(); // 브라우저 기본동작 막기(브라우저 새로고침 막기)
	loginForm.classList.add(HIDDEN_CLASSNAME); // hidden이라는 class name을 더해서 login-form 숨김
	const username = loginInput.value; // 유저 이름을 변수로 저장
	localStorage.setItem(USERNAEM_KEY, username); // local storage에 key = USERNAEM_KEY, value = username 저장
	paintGreetings(username); //
	showLogoutBtn();
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`; // greeting에 "Hello username"으로 텍스트 넣어줌
	greeting.classList.remove(HIDDEN_CLASSNAME); // greeting에서 hidden class 제거
}

// 허접한 로그아웃...
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 
function showLogoutBtn() {
	logout.classList.remove(HIDDEN_CLASSNAME);
}
// logout 버튼 보여줌

logout.addEventListener("click", e => {
	logout.classList.remove(TODOFORM_HIDDEN);
	showLoginForm();
}) 
// logout 버튼 클릭 동작

function showLoginForm() {
	loginInput.value = "";
	localStorage.removeItem(USERNAEM_KEY); // local storage username 삭제
	logout.classList.add(HIDDEN_CLASSNAME); // logout 버튼 감춤
	greeting.classList.add(HIDDEN_CLASSNAME) // greeting 감춤
	loginForm.classList.remove(HIDDEN_CLASSNAME); // loginform 보여줌
}
// logout버튼을 클릭하면 login form을 보여줌

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 

// loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAEM_KEY);
// savedUserName에 local storage에 key 값(username)이 저장 되어 있는지 확인

if(savedUserName === null) {
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greetings and logout button
	paintGreetings(savedUserName);
	showLogoutBtn();
}

