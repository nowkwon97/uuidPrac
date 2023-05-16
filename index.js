import { v4 as uuidv4 } from 'uuid';


const uniqueId = uuidv4();
console.log(uniqueId);
console.log(typeof(uniqueId));
// c61ef77c-4f6d-498d-9615-2ce5f47a4f79
// a45f6330-ffe0-485d-89fa-a5d073b22b83
// 알파벳과 문자가 조합된 문자열을 출력한다.
// 위와 같이 실행마다 다른 값을 출력함 -> 고유성 확보 가능
// 세션ID로 활용이 가능하다.