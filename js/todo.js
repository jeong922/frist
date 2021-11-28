const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input"); // toDoForm.querySelector("input"); 이렇게 써도 됨
const toDoList = document.querySelector("#todo-list");
const toDoListModal = document.querySelector("#modal-todo-list");
const toDoListBtn = document.querySelector("#todo-list-btn");
const modal = document.querySelector("#modal");
const todoSpan = document.querySelector("#todo-span");

const TODOS_KEY = "todos";
const TODOFORM_HIDDEN = "hidden";
const MODAL_OVERLAY = "modal-overlay";

let toDos = [];


//todolist 모달창(?)으로 만들기..!!
// -------------------------------------------------------------------
toDoListBtn.addEventListener("mouseover", e => {
	todoSpan.classList.remove(TODOFORM_HIDDEN);
})

toDoListBtn.addEventListener("mouseout", e => {
	todoSpan.classList.add(TODOFORM_HIDDEN);
})

toDoListBtn.addEventListener("click", e => {
	toDoListModal.classList.remove(TODOFORM_HIDDEN);
	modal.classList.remove(TODOFORM_HIDDEN)
}) 
	// 버튼 클릭하면 todo lsit창 나타남

modal.addEventListener("click", e => {
  const eventTarget = e.target;
  if(eventTarget.classList.contains(MODAL_OVERLAY)) {
		toDoListModal.classList.add(TODOFORM_HIDDEN);
		modal.classList.add(TODOFORM_HIDDEN)
	}
})
// todo list 제외 화면의 다른 부분 클릭하면 todo list 닫힘


//----------------------------------------------------------------------
function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deletdToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
	saveToDos();
}
// x button을 누를때 마다 event를 얻고, event는 target을 주고 (target은 button) button의 부모에 접근(button의 부모는 li)

function paintToDo(newTodo) {
	const li = document.createElement("li"); // li 만들기
	li.id = newTodo.id;
	const span = document.createElement("span"); //span 만들기
	span.innerText = newTodo.text; // 텍스트를 span 내부에 넣었고 span안에 넣은 새로운 텍스트는 사용자가 form에서 준 newTodo값
	const button = document.createElement("button"); // button 만들기
	button.innerText = "✖";
	button.addEventListener("click", deletdToDo);
	li.appendChild(span); // li 내부에 span 추가
	li.appendChild(button); // li 내부에 button 추가
	toDoList.appendChild(li); // toDolist 내부에 li 넣기
}

function handleToDoSubmit(event) {
	event.preventDefault(); // event 취소
	const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
	toDoInput.value = ""; // input value 비우기(newTodo가 비워지는건 아님)
	const newTodoObj = {
		text:newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj); // newToDo를 toDos array에 push
	paintToDo(newTodoObj); // 화면에 toDo를 그려줌
	saveToDos(); // toDo들을 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}



