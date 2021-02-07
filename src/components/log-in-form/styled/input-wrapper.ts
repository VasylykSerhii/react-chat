import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${(props) => props.theme.colors.light};
  padding: 0 10px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

export default InputWrapper;
