import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import Todoitem from "./Todoitem";

const TodoContainer = styled.div`
  width: 1000px;
  min-width: 600px;
  min-height: 600px;
  margin: 20px auto;
`;

const StList = styled.ul`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 20px;
  list-style: none;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  flex-wrap: wrap;
`;

const StTitle = styled.div`
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 30px;
  background-color: #8c9eff;
  border-radius: 20px;
`;

function Todolist() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <TodoContainer>
      <StList>
        <StTitle>🐣 Todo List</StTitle>
        <ItemContainer>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <Todoitem key={todo.id} todo={todo} />
            ))}
        </ItemContainer>
      </StList>
      <StList>
        <StTitle>🐥 Done List</StTitle>
        <ItemContainer>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => (
              <Todoitem key={todo.id} todo={todo} />
            ))}
        </ItemContainer>
      </StList>
    </TodoContainer>
  );
}

export default Todolist;
