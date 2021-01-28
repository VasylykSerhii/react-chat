
import Home from '@/pages/Home'
import { RouteProps } from 'react-router-dom'

import LogIn from '@pages/Log-In'

const routes: RouteProps[] = [
  { 
    path: '/', 
    exact: true,
    children: <Home/>
  },
  { 
    path: '/log-in', 
    exact: true,
    children: <LogIn/>
  },
]

export default routes

