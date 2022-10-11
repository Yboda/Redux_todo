import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import TodoInput from "./components/Todoinput";

const StContainer = styled.div`
  max-width: 100rem;
  min-height: 800px;
  margin: 0 auto;
  font-family: "Jua", sans-serif;
`;

function App() {
  return (
    <StContainer>
      <Header />
      <TodoInput />
      <Todolist />
    </StContainer>
  );
}

export default App;
