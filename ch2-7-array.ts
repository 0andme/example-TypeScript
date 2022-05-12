// 타입 지정방법
let list: number[] = [1, 2, 3];
// 위의 방식을 더 권장하고 있다. jsx나 tsx에서의 충돌사례가 있다고함
let list2: Array<number> = [1, 2, 3];

// 배열 요소가 넘버와 문자 모두 가능할 때
// 괄호로 묶어야 함
let list3: (number | string)[] = [1, 2, "3"];
