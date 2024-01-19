// getTodos.js와 view.js 파일을 가져옵니다.
import getTodos from "./getTodos.js";
import view from "./view.js";

/**
 * @param {object} state - 할 일의 목록과 현재 필터를 나타내는 객체
 */
const state = {
  todos: getTodos(),
  currentFilter: "All",
};
/**
 * .todoapp 클래스를 선택하여 main 변수에 할당 
 */ 
const main = document.querySelector(".todoapp");

// window.requestAnimationFrame()는 브라우저가 다음 리페인트를 수행하기 전에 애니메이션 함수를 호출하도록 요청
// 주어진 콜백 함수를 다음 화면 갱신이 일어날때 실행하도록 스케줄링하여 애니메이션을 효율적이고 부드럽게 보여줌

// view() 함수에 main, state를 넣어서 호출하면 state가 변경될때마다 main을 새로 갱신해주고 newMain에 할당 
// main.replaceWith(newMain) 호출해서 replaceWith을 통해 main을 newMain으로 교체 
window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
