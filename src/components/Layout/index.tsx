import React, { FC, ReactNode } from "react";

import { Menu } from "components";
import { Wrapper } from "./styled";

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      <Menu />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
