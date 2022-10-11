import styled from "styled-components";
import Todoitem from "./Todoitem";

const TodoContainer = styled.div`
  width: 1000px;
  min-width: 600px;
  min-height: 600px;
  background-color: skyblue;
  margin: 20px auto;
`;

const StList = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 0 auto;
`;

// StList 나중에 isdone값으로 조건부스타일링

const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
`;

const StTitle = styled.div`
  width: 30%;
  height: 50px;
  text-align: center;
  font-size: 30px;
  background-color: #8c9eff;
  border: solid 3px black;
  border-radius: 30px;
`;

function Todolist() {
  return (
    <TodoContainer>
      <StList>
        <StTitle>🐣 Todo List</StTitle>
        <ItemContainer>
          <Todoitem />
          <Todoitem />
          <Todoitem />
        </ItemContainer>
      </StList>
      <StList>
        <StTitle>🐥 Done List</StTitle>
        <ItemContainer>
          <Todoitem />
        </ItemContainer>
      </StList>
    </TodoContainer>
  );
}

export default Todolist;
