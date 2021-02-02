import React, { FC, ReactNode, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import firebase, { firestore, auth } from "@/firebase";
import Layout from '@/components/Layout'
import { Wrapper, Chat, Messages, InputWrap, Textarea, StyledIcon } from './style.component'
import Message from '@/components/Message'

export interface IChatMessages {
  text: string,
  createdAt?: {
    nanosecond: number,
    seconds: number
  },
  uid: string,
  id?: string,
  photoURL: string,
}

const Home: FC = () => {
  const [message, setMessage] = useState('')
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);
  const [messages] = useCollectionData<IChatMessages>(query, { idField: 'id' });

  const handleChange = (event) => {
    setMessage(event.target.outerText);
  };

  const send = async (e) => {
    if ((e.ctrlKey && e.charCode === 13) || e.type === "click") {
      await messagesRef.add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: auth?.currentUser?.uid || null,
        photoURL: auth?.currentUser?.photoURL || null
      }).then(function () {
        setMessage("")
      })
    }
  }

  
  // console.log(messages);
  return (
    <Layout>
      <Wrapper>
        <Chat>
          <Messages>
            {
              messages?.map(message =>
                <Message
                  key={message.id}
                  message={message}
                />)
            }
          </Messages>
          <InputWrap>
            <Textarea
              contentEditable={true}
              onInput={handleChange}
              onKeyPress={send}
              value={message}
            >
            </Textarea>

            <StyledIcon
              icon={faPaperPlane}
              size="lg"
              onClick={send}
            />
          </InputWrap>
        </Chat>
      </Wrapper>
    </Layout>
  )
}

export default Home
