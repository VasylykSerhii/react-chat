
import Home from '@/pages/Home'
import { RouteProps } from 'react-router-dom'

const routes: RouteProps[] = [
  { 
    path: '/', 
    exact: true,
    children: <Home/>
  },
  { 
    path: '/about', 
    exact: true,
    children: <p>About</p>
  },
  { 
    path: '/users', 
    exact: true,
    children: <p>Users</p>
  }
]

export default routes

