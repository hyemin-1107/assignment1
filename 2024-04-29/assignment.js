// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의
// 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의
// 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록
// solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도
// 가장 앞에 있는 사람의 이름을 포함합니다.

// ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	=> ["nami", "vex"]

function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}

// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을
// 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때,
// todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는
// solution 함수를 작성해 주세요.

// ["problemsolving", "practiceguitar", "swim", "studygraph"]
// [true, false, true, false]	= >  ["practiceguitar", "studygraph"]

function solution(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < finished.length; i++) {
    if (finished[i] === false) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}

function solution(todo_list, finished) {
  return todo_list.filter((e, i) => !finished[i]);
}
