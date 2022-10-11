import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

const StContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  background-color: skyblue;
`;

function App() {
  return (
    <StContainer>
      <Header />
      <Todolist />
    </StContainer>
  );
}

export default App;
