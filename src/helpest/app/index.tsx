import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components"

import routes from "@/routes.tsx";
import { PrivateRoute } from '@/helpest/PrivateRouter'
import Theme from "@/helpest/app/theme";
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
        <Switch>
          {routes.map((route, idx) => (
            <PrivateRoute
              key={idx}
              {...route}
            />
          ))}
        </Switch>
      </Wrapper>
    </Theme>
  );
}

export default App;
