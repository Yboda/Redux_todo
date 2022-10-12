// 1. Action Value
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "DELETE_TODO";

// // 2. Action Creator   ↓ 페이로드를꼭 인자로 넣어줘야함
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: 0,
      title: todo.title,
      body: todo.body,
      isDone: false,
    },
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

// 3. Initial State
const initialState = [
  {
    id: 1,
    title: "열공하기",
    body: "열심히 공부하자!",
    isDone: false,
  },
  {
    id: 2,
    title: "마음껏 쉬기",
    body: "이제 딴짓 금지..",
    isDone: true,
  },
];

// 4. Reducer   기본형태코드 복붙해서 시작! 그 후 로직 구현
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          ...action.todo,
          id: state[state.length - 1]?.id + 1 || 0,
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

// 5. export default reducer
export default TodoReducer;
