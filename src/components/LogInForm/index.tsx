import React, { FC, useCallback, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons'

import {
  Wraper, Img, Input, Form, InputWrap, Button, Link, SocialWrap
} from './style-component'

import firebase, { auth } from '@/firebase'
import manImg from '@/assets/images/man-300x300.png'

const LogIn: FC = () => {
  const [isRegister, setIsRegister] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      auth.createUserWithEmailAndPassword(email, password)
    }, [email, password],
  )

  const signIn = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      auth.signInWithEmailAndPassword(email, password)
    }, [email, password],
  )
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
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
