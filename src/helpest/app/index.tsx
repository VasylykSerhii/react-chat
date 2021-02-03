import React, { FC } from "react";
import styled from "styled-components"

import Routes from "../../utils/routes";
import Theme from "helpest/app/theme";
import './reset.css'

const Wrapper = styled.section`
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.gray};
  min-width: 100vw;
  min-height: 100vh;
`
const App: FC = () => {
  return (
    <Theme>
      <Wrapper>
        <Routes />
      </Wrapper>
    </Theme>
  );
}

export default App;
