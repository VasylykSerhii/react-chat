import { useHistory } from "react-router-dom";

import { auth } from "utils";
import { MenuWrapper, Wrapper, LogOutButton } from "./styled";

const Menu = (): JSX.Element => {
  const history = useHistory();

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("accessToken");
        history.push("/log-in");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <MenuWrapper>
      <Wrapper>
        Menu
        <LogOutButton onClick={logOut}>Log Out</LogOutButton>
      </Wrapper>
    </MenuWrapper>
  );
};

export default Menu;
