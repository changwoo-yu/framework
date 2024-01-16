/**
 * 할 일 목록과 체크박스와 내용들을 보여주는 함수
 * @param {object}todo - todo 객체
 * @param {string}todo.text - 할 일의 내용을 보여줌
 * @param {boolean}todo.complited - 할 일을 완료 했는지 보여줌
 * @returns {string} 해당하는 할 일을 모두 만들고 문자열로 반환
 */
const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ""}>
      <div class="view">
        <input 
          ${completed ? "checked" : ""}
          class="toggle" 
          type="checkbox">
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}">
    </li>`;
};

/**
 * 할 일의 갯수를 나타내주는 함수
 * @param {Array} todos - 완료하지 않은것만 뽑아서 notCompleted 변수에 넣음
 * @param {object} length - 완료되지 않은걸 length에 할당
 * @returns 완료되지 않은게 1개라면 1 Item left 반환, 그 외에는 완료되지 않은 length(갯수)와 Items left 반환
 */
const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);

  const { length } = notCompleted;
  if (length === 1) {
    return "1 Item left";
  }

  return `${length} Items left`;
};

/**
 * targetElement와 state를 매개변수로 받는데 state는 currentFilter, todos 두개의 속성을 가지고 있음
 * cloneNode() 메서드는 DOM노드를 복제하는데 사용함
 * targetElement를 모든 자손까지 복제해서 element변수에 넣어줌
 * 복제한 element에서 list,counter,filters변수를 만들어서 querySelector를 통해 각각 클래스를 가져옴 
 */
export default (targetElement, state) => {
  const { currentFilter, todos } = state;

  const element = targetElement.cloneNode(true);

  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.innerHTML = todos.map(getTodoElement).join("");
  counter.textContent = getTodoCount(todos);

  Array.from(filters.querySelectorAll("li a")).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });

  return element;
};
