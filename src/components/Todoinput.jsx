import styled from "styled-components";

const FormContainer = styled.div`
  width: 850px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px auto;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px #8c9eff;
  padding: 0 10px;
`;

const StInput = styled.input`
  font-size: 20px;
  margin: 10px;
  border-color: #8c9eff;
  border-radius: 20px;
`;

const StAddBtn = styled.button`
  font-family: "Jua", sans-serif;
  padding: 5px;
  margin: 15px;
  background-color: #8c9eff;
  border: solid 3px #8c9eff;
  color: #fff;
  border-radius: 20px;
  font-size: 22px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: #805acb;
    border: solid 3px #805acb;
    color: #fff;
  }
`;

function TodoInput() {
  return (
    <div className="form-container">
      <FormContainer>
        <div>
          제목
          <StInput />
        </div>
        <div>
          내용
          <StInput />
        </div>
        <StAddBtn>추가하기</StAddBtn>
      </FormContainer>
    </div>
  );
}

export default TodoInput;
