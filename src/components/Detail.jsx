import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 500px;
  height: 400px;
  margin: 100px auto;
  background-color: white;
  border-radius: 20px;
`;

function Detail({ todo }) {
  const Navigate = useNavigate();
  console.log(todo);
  return (
    <DetailContainer>
      <div>Todo ID</div>
      <div>Todo 제목</div>
      <div>Todo 내용</div>
      <button
        onClick={() => {
          Navigate(-1);
        }}
      >
        이전으로
      </button>
    </DetailContainer>
  );
}

export default Detail;
