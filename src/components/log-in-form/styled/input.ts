import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.dark};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.dark}4c;
    font-size: 24px;
  }
`;

export default Input;
