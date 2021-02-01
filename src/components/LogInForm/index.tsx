import React, { FC, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons'

import {
  Wraper, Img, Input, Form, InputWrap, Button, Link, SocialWrap
} from './style-component'

import firebase, { auth } from '@/firebase'
import manImg from '@/assets/images/man-300x300.png'
import { getUseCreation } from '@/redux/user/actionsCreators'

const LogIn: FC = () => {
  const dispatch = useDispatch()
  const [isRegister, setIsRegister] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory();

  const register = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      auth.createUserWithEmailAndPassword(email, password)
    }, [email, password],
  )

  const signIn = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      auth.signInWithEmailAndPassword(email, password)
        .then(res =>  history.push("/"))
    }, [email, password],
  )
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        dispatch(getUseCreation(result))
        history.push("/");
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  return (
    <Wraper>
      <Img src={manImg} alt="avatar" />
      <Form>
        <InputWrap>
          <FontAwesomeIcon icon={faUser} size="lg" color="#222831" />
          <Input
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </InputWrap>
        <InputWrap>
          <FontAwesomeIcon icon={faLock} size="lg" color="#222831" />
          <Input
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}

          />
        </InputWrap>
        <Button
          onClick={isRegister ? register : signIn}
          type="button"
        >{isRegister ? "Sign Up" : "Sign In"}</Button>
      </Form>
      <Link>Recover password</Link>
      <Link onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Sign In" : "Sign Up"}
      </Link>
      <SocialWrap>
        <FontAwesomeIcon
          icon={faGooglePlus}
          size="2x"
          color="#eeeeee"
          onClick={signInWithGoogle}
        />
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#eeeeee" />
      </SocialWrap>
    </Wraper>
  )
}

export default LogIn
