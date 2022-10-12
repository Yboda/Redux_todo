import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  font-family: "Jua", sans-serif;
  width: 500px;
  height: 400px;
  margin: 100px auto;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 20px;
`;

const DetailID = styled.div`
  height: 20px;
  margin: 20px 0 30px 30px;
  font-size: 25px;
`;

const DetailTitle = styled.div`
  height: 70px;
  margin: 20px;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DetailBody = styled.div`
  height: 100px;
  margin: 0 20px 10px 20px;
  font-size: 25px;
`;

const BackBtn = styled.button`
  font-family: "Jua", sans-serif;
  margin: 60px 0 0 350px;
  padding: 10px;
  font-size: 20px;
  background-color: #eee;
  border-color: black;
  color: black;
  cursor: pointer;
  :hover {
    border-color: #8c9eff;
    color: #8c9eff;
  }
`;

function Detail() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  let todo = todos.find((todo) => todo.id === Number(id));

  return (
    <DetailContainer>
      <DetailID>ID : {id}</DetailID>
      <DetailTitle>{todo.title}</DetailTitle>
      <DetailBody>{todo.body}</DetailBody>
      <BackBtn
        onClick={() => {
          Navigate(-1);
        }}
      >
        이전으로
      </BackBtn>
    </DetailContainer>
  );
}

export default Detail;
