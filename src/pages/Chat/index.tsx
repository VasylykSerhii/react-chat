import React, { useRef, useState, useEffect } from 'react'
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
  fullName: string
}

const Home = (): JSX.Element => {
  const [message, setMessage] = useState('')
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);
  const [messages] = useCollectionData<IChatMessages>(query, { idField: 'id' });
  const textDiv = useRef<HTMLDivElement>(null)
  const last = useRef<HTMLSpanElement>(null);
  
  const handleChange = (e) => {
    setMessage(e.target.outerText);
  };

  const send = async (e) => {
    if ((!e.ctrlKey && e.charCode === 13) || e.type === "click") {
      await messagesRef.add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: auth?.currentUser?.uid,
        photoURL: auth?.currentUser?.photoURL,
        fullName: auth?.currentUser?.displayName
      }).then(function () {
        if (textDiv && textDiv.current) {
          textDiv.current.innerHTML = ''
        }
        setMessage("")
      })
    }
  }

  useEffect(() => {
    if (last && last.current) {
      last.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message])

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
            <span ref={last}></span>
          </Messages>
          <InputWrap>
            <Textarea
              contentEditable={true}
              onInput={handleChange}
              onKeyPress={send}
              ref={textDiv}
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
