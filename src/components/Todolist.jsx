import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import Todoitem from "./Todoitem";
import { toggleTodo, removeTodo } from "../redux/modules/todos";

const TodoContainer = styled.div`
  width: 1000px;
  min-width: 600px;
  min-height: 600px;
  margin: 20px auto;
`;

const StList = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 20px;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  border-radius: 20px;
`;

const StTitle = styled.div`
  width: 30%;
  height: 50px;
  text-align: center;
  font-size: 30px;
  background-color: #8c9eff;
  border-radius: 20px;
`;

function Todolist() {
  const todos = useSelector((state) => {
    console.log(state.todos);
    return state.todos;
  });
  const dispatch = useDispatch();

  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  const onRemove = useCallback((id) => dispatch(removeTodo(id)), [dispatch]);

  return (
    <TodoContainer>
      <StList>
        <StTitle>🐣 Todo List</StTitle>
        <ItemContainer>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <Todoitem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            ))}
        </ItemContainer>
      </StList>
      <StList>
        <StTitle>🐥 Done List</StTitle>
        <ItemContainer>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => (
              <Todoitem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            ))}
        </ItemContainer>
      </StList>
    </TodoContainer>
  );
}

export default Todolist;
