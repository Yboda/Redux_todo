import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  background-color: #8c9eff;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  font-size: 30px;
`;

const StTitle = styled.div`
  margin: 10px;
`;

function Header() {
  return (
    <StHeader>
      <StTitle>💪 My Todo List</StTitle>
      <StTitle>React</StTitle>
    </StHeader>
  );
}

export default Header;
