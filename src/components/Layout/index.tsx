import React, { FC, ReactNode } from "react";
import Menu from "components/menu";

import { Wraper } from "./style.component";

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <Wraper>
      <Menu />
      <main>{children}</main>
    </Wraper>
  );
};

export default Layout;
