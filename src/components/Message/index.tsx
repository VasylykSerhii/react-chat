import React, { useRef, useEffect } from "react"
import { Wrapper } from './style.component'
import { IChatMessages } from '@/pages/Chat'

import { auth } from "@/firebase";
import { MessageWrap, Avatar, MessageText, Name, Text } from './style.component'

type Props = {
  message: IChatMessages,
  key?: string
}

const Message = ({ message, key }: Props): JSX.Element => {
  return (
    <Wrapper>
      <MessageWrap myMessage={auth?.currentUser?.uid === message.uid}>
        <Avatar src={message.photoURL} />
        <MessageText myMessage={auth?.currentUser?.uid === message.uid}>
          <Name>{message.fullName}</Name>
          <Text>{message.text}</Text>
        </MessageText>
      </MessageWrap>
    </Wrapper >
  )
}

export default Message
