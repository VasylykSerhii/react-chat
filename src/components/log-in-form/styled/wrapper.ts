import styled from "styled-components";

const Wraper = styled.div`
  width: 450px;
  height: 500px;
  max-width: calc(100% - 30px);
  background-color: ${(props) => props.theme.colors.dark}4c;
  border-top: 4px solid ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Wraper;
