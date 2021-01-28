import React, {FC} from 'react'

import { Wrapper } from './style.component'
import LogInForm from '@/components/LogInForm'

const LogIn:FC = () => {
  return (
    <Wrapper>
      <LogInForm />
    </Wrapper>
  )
}

export default LogIn
