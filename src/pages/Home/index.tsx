import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from "@/redux/reducers";
import { getStateCreation } from "@/redux/chat/actionsCreators";

const Home: FC = () => {
  const dispatch = useDispatch()
  const chats = useSelector((state: AppState) => state.chats)

  const handleClick = () => {
    dispatch(getStateCreation())
  }

  console.log(chats);
  return (
    <div>
      Home
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home
