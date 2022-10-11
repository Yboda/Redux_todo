const initialState = [
  {
    id: 1,
    title: "공부하기",
    body: "공부를 열심히 하자 ;-;",
    isDone: false,
  },
  {
    id: 2,
    title: "뚜비랑놀기",
    body: "뚜비랑 놀장! >.<",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
