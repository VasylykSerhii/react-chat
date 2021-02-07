import styled from "styled-components";

const Button = styled.button`
  min-width: 150px;
  min-height: 40px;
  margin-top: 30px;
  background: ${(props) => props.theme.colors.main};
  border: none;
  font-size: 18px;
  border-bottom: 5px solid #cc8f00;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: #cc8f00;
  }
`;

export default Button;
