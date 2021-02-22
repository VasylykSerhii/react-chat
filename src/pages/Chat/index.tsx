import React, { useRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { firestore } from "utils";
import Layout from "components/layout";
import {
  ChatWrapper,
  Chat,
  ChatMessages,
} from "./style.component";
import Message from "components/message";
import ChatSendMessage from 'components/chat-send-message'
export interface IChatMessages {
  text: string;
  createdAt?: {
    nanosecond: number;
    seconds: number;
  };
  uid: string;
  id?: string;
  photoURL: string;
  fullName: string;
}

const ChatPage = (): JSX.Element => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);
  const [messages] = useCollectionData<IChatMessages>(query, { idField: "id" });
  const last = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (last && last.current) {
      last.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, last]);

  return (
    <Layout>
      <ChatWrapper>
        <Chat>
          <ChatMessages>
            {messages?.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            <span ref={last}></span>
          </ChatMessages>
          <ChatSendMessage />
        </Chat>
      </ChatWrapper>
    </Layout>
  );
};

export default ChatPage;
