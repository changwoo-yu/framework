// getTodos.js와 view.js 파일을 가져옵니다.
import getTodos from "./getTodos.js";
import view from "./view.js";


const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
