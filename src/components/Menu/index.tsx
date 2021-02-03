import { useHistory } from "react-router-dom";

import { auth } from '../../utils/firebase'
import { MenuWrap, Wraper, LogOutBtn } from './style.component'

const Menu = (): JSX.Element => {
  let history = useHistory();

  const logOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('accessToken')
      history.push("/log-in");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <MenuWrap>
      <Wraper>
        Menu

        <LogOutBtn onClick={logOut}>Log Out</LogOutBtn>
      </Wraper>
    </MenuWrap>
  )
}

export default Menu
