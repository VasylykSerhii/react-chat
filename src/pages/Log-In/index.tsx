import React, { FC } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from "react-router-dom";

import { auth } from '@/firebase'
import { Wrapper } from './style.component'
import LogInForm from '@/components/LogInForm'

const LogIn: FC = () => {
  const [user] = useAuthState(auth);

  return user
    ? <Redirect to="/" />
    : <Wrapper>
        <LogInForm />
      </Wrapper>

}

export default LogIn
