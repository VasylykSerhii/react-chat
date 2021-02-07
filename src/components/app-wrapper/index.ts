import styled from "styled-components";

const AppWrapper = styled.section`
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.gray};
  min-width: 100vw;
  min-height: 100vh;
`;

export default AppWrapper;
