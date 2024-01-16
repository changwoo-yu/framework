//구조분해할당 : 객체의 속성을 해체해서 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식
//객체구조분해할당 문법을 사용하였고 window에서 faker를 뽑아와서 faker를 간결하게 사용할 수 있습니다.
const { faker } = window;

/**
 * @param {string} text - faker라이브러리에서 가운데 공백이 있는 두개의 랜덤 단어를 생성
 * @param {boolean} completed - faker라이브러리에서 boolean값인 true와 false를 랜덤으로 생성
 * @returns {object} 생성한 text와 completed를 랜덤으로 반환
 */
const createElement = () => ({
  text: faker.random.words(2),
  completed: faker.random.boolean(),
});

/**
 * 두개의 매개변수를 받아서 elementFactory함수를 number만큼 랜덤으로 생성하는 함수
 * @param {array} elementFactory - elementFactory 함수를 호출해서 새로운 요소를 만듦
 * @param {number} number - elementFactory 함수를 호출할 횟수를 정해줌
 * @returns {array} number만큼 생성한 새로운 요소를 array 배열에 넣어 반환
 */
const repeat = (elementFactory, number) => {
  const array = [];
  for (let index = 0; index < number; index++) {
    array.push(elementFactory());
  }
  return array;
};

/**
 * createElement 함수를 howMany만큼 랜덤으로 생성하는 함수
 * @param {number} howMany - faker라이브러리에서 10개의 숫자중 랜덤으로 생성
 * @returns repeat 함수에 두 인자를 호출하고 결과를 반환
 */
export default () => {
  const howMany = faker.random.number(10);
  return repeat(createElement, howMany);
};
