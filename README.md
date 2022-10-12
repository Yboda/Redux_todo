# Redux - Todo List

`App.js`를 `Router`와 연결하고,  
`Router`에서 `Mainpage` 컴포넌트를 메인 페이지로 삼도록 연결했습니다.

---

### < 컴포넌트 구성 >

<br>

`Mainpage`안의 `Header`,`Todoinput`,`Todolist`는 화면상의 순서대로 배치하였습니다.

`Header`는 화면 최상단의 요소로 기능 구현이 필요치 않기에 따로 분리 해 둔 컴포넌트 입니다.

`Todoinput`은 추가하기 기능을 갖는 입력 폼 컴포넌트입니다.

`Todolist`는 `Todoitem`들을 담는 리스트 컴포넌트로, `Todoitem` 컴포넌트를 포함하고 있습니다.

`Todoitem` 컴포넌트에서는 각 아이템의 상세보기 버튼을 통해 상세페이지 역할을 하는 `Detail` 컴포넌트로 이동이 가능하도록 지정을 해 두었고, 아이템의 id값을 params로 받아 이동할 수 있습니다.
