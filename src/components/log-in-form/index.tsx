import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlus, faFacebook } from "@fortawesome/free-brands-svg-icons";

import {
  Wrapper,
  Img,
  Input,
  Form,
  InputWrapper,
  Button,
  Link,
  SocialWrapper,
} from "./styled";

import { firebase, auth } from "utils";
import { getUseCreation } from "redux/user/actions-creators";
import manImg from "assets/images/man-300x300.png";

const LogIn: FC = () => {
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      auth.createUserWithEmailAndPassword(email, password);
    },
    [email, password]
  );

  const signIn = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      auth.signInWithEmailAndPassword(email, password).then((res) => {
        dispatch(getUseCreation(res));
        history.push("/");
      });
    },
    [dispatch, email, history, password]
  );
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(getUseCreation(result));
        history.push("/");
      })
      .catch((error) => {
        // TODO: Handle Errors here.
      });
  };

  return (
    <Wrapper>
      <Img src={manImg} alt="avatar" />
      <Form>
        <InputWrapper>
          <FontAwesomeIcon icon={faUser} size="lg" color="#222831" />
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <FontAwesomeIcon icon={faLock} size="lg" color="#222831" />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button onClick={isRegister ? register : signIn} type="button">
          {isRegister ? "Sign Up" : "Sign In"}
        </Button>
      </Form>
      <Link>Recover password</Link>
      <Link onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Sign In" : "Sign Up"}
      </Link>
      <SocialWrapper>
        <FontAwesomeIcon
          icon={faGooglePlus}
          size="2x"
          color="#eeeeee"
          onClick={signInWithGoogle}
        />
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#eeeeee" />
      </SocialWrapper>
    </Wrapper>
  );
};

export default LogIn;
