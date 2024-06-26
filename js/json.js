let memberInfo = [
  {
    name : "이영지",
    age : 21,
    job : "래퍼",
    addr : "서울시 강남구 청담동"
  },
  {
    name : "미미",
    age : 24,
    job : "오마이걸",
    addr : "서울시 강남구 역삼동"
  },
  {
    name : "안유진",
    age : 20,
    job : "아이브",
    addr : "서울시 강북구"
  }
];
// 객체 리터럴 -> json(직렬화)
let json = JSON.stringify(memberInfo);
console.log(json);
//json -> 객체 리터럴(역직렬화)
let objectjson = JSON.parse(json);
console.log(objectjson);
//Axois에서는 자동으로 해준다.

const jsonData = '[{"id": "user1", "password": "pass1", "name": "안유진", "phone": "010-1234-5678", "email": "user1@example.com"}, {"id": "user2", "password": "pass2", "name": "유나", "phone": "010-2345-6789", "email": "user2@example.com"}, {"id": "user3", "password": "pass3", "name": "이은지", "phone": "010-3456-7890", "email": "user3@example.com"}, {"id": "user4", "password": "pass4", "name": "카즈하", "phone": "010-4567-8901", "email": "user4@example.com"}, {"id": "user5", "password": "pass5", "name": "채원", "phone": "010-5678-9012", "email": "user5@example.com"}, {"id": "user6", "password": "pass6", "name": "은채", "phone": "010-6789-0123", "email": "user6@example.com"}, {"id": "user7", "password": "pass7", "name": "지수", "phone": "010-7890-1234", "email": "user7@example.com"}, {"id": "user8", "password": "pass8", "name": "아린", "phone": "010-8901-2345", "email": "user8@example.com"}, {"id": "user9", "password": "pass9", "name": "박준형", "phone": "010-9012-3456", "email": "user9@example.com"}, {"id": "user10", "password": "pass10", "name": "김지원", "phone": "010-0123-4567", "email": "user10@example.com"}]';

// JSON 데이터를 객체 리터럴로 변환
const members = JSON.parse(jsonData);
// HTML 테이블 생성
const html = `
  <table border="1" cellspacing="0" style="border-collapse: collapse;">
    <thead>
      <tr>
        <th>ID</th>
        <th>Password</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      ${members.map(member => `
        <tr>
          <td>${member.id}</td>
          <td>${member.password}</td>
          <td>${member.name}</td>
          <td>${member.phone}</td>
          <td>${member.email}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;

// HTML 테이블 출력
document.body.innerHTML = html;