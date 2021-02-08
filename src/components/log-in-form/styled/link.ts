import styled from "styled-components";

const Link = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.light};
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
`;
export default Link;
