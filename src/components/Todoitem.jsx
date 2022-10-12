import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const StItem = styled.div`
  margin: 20px 0px 20px 20px;
  width: 300px;
  height: 200px;
  background-color: #fff;
  border: solid 3px #8c9eff;
  border-radius: 20px;
`;

const StTitle = styled.div`
  height: 70px;
  margin: 5px;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StBody = styled.div`
  height: 40px;
  margin: 0 20px 10px 20px;
  font-size: 20px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const StBtn = styled.button`
  font-family: "Jua", sans-serif;
  padding: 6px 10px 4px 10px;
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  background-color: #fff;
  color: ${(props) => props.color};
  border: solid 1px ${(props) => props.color};
`;

const DetailBtn = styled.button`
  font-family: "Jua", sans-serif;
  margin: 5px 0 0 230px;
  padding-top: 2px;
  background-color: #eee;
  border-color: #8c9eff;
  color: #8c9eff;
  cursor: pointer;
`;

function TodoItem({ todo, onToggle, onRemove }) {
  const Navigate = useNavigate();

  return (
    <StItem>
      <DetailBtn
        todo={todo}
        onClick={() => {
          Navigate("/" + todo?.id);
        }}
      >
        상세보기
      </DetailBtn>
      <StTitle>{todo?.title}</StTitle>
      <StBody>{todo?.body}</StBody>
      <BtnBox>
        {todo?.isDone === false ? (
          <StBtn onClick={() => onToggle(todo?.id)} color={"#8c9eff"}>
            완료
          </StBtn>
        ) : (
          <StBtn onClick={() => onToggle(todo?.id)} color={"pink"}>
            취소
          </StBtn>
        )}
        <StBtn onClick={() => onRemove(todo?.id)} color={"red"}>
          삭제
        </StBtn>
      </BtnBox>
    </StItem>
  );
}

export default TodoItem;
