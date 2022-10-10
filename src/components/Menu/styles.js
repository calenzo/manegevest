import styled from "styled-components";

export const Menu = styled.div`
  background-color: black;
  opacity: 50%;
  width: 250px;
  height: 100vh;
  margin-right: 20px;
`;

export const MenuElement = styled.div`
  width: 80%;
  display: flex;
`;

export const MenuElementText = styled.div`
  color: white;
  font-weight: bolder;
  padding: 10px;
  cursor: pointer;
`;

export const MenuInput = styled.input``;

export const MenuButton = styled.input`
  cursor: pointer;
`;

export const MenuAddElement = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;

  input {
    height: 30px;
  }

  input[type="text"] {
    margin-bottom: 2px;
  }

  input[type="button"] {
    margin-top: 5px;
  }
`;
