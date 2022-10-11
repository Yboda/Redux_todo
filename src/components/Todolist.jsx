import styled from "styled-components";
import Todoitem from "./Todoitem";

const TodoContainer = styled.div``;

const WorkingZone = styled.div``;

const DoneZone = styled.div``;

function Todolist() {
  return (
    <TodoContainer>
      <WorkingZone>
        <Todoitem />
      </WorkingZone>
      <DoneZone>
        <Todoitem />
      </DoneZone>
    </TodoContainer>
  );
}

export default Todolist;
