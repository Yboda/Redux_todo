import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const FormContainer = styled.form`
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
  padding: 5px;
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
  let [input, setInput] = useState({
    title: "",
    body: "",
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!input.title || !input.body) return;
    dispatch(addTodo(input));
    setInput({
      title: "",
      body: "",
    });
  };

  const dispatch = useDispatch();

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <div>
        제목
        <StInput name="title" value={input.title} onChange={onChangeHandler} />
      </div>
      <div>
        내용
        <StInput name="body" value={input.body} onChange={onChangeHandler} />
      </div>
      <StAddBtn type="submit">추가하기</StAddBtn>
    </FormContainer>
  );
}

export default TodoInput;
