import React, { useRef, useState, useEffect, useCallback } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { firebase, firestore, auth } from "utils";
import Layout from "components/layout";
import {
  ChatWrapper,
  Chat,
  ChatMessages,
  ChatInputWrapper,
  ChatTextarea,
  ChatStyledIcon,
} from "./style.component";
import Message from "components/message";

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
  const [message, setMessage] = useState("");
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);
  const [messages] = useCollectionData<IChatMessages>(query, { idField: "id" });
  const textDiv = useRef<HTMLDivElement>(null);
  const last = useRef<HTMLSpanElement>(null);

  const handleChange = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [],
  )

  const send = async (e) => {
    if (message !== '') {
      if ((!e.ctrlKey && e.charCode === 13) || e.type === "click") {
        await messagesRef
          .add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth?.currentUser?.uid,
            photoURL: auth?.currentUser?.photoURL,
            fullName: auth?.currentUser?.displayName,
          })
          .then(function () {
            if (textDiv && textDiv.current) {
              textDiv.current.innerHTML = "";
            }
            setMessage("");
          });
      }
    }
  };

  useEffect(() => {
    if (last && last.current) {
      last.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message, last]);

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
          <ChatInputWrapper>
            <ChatTextarea
              onChange={handleChange}
              // onKeyPress={send}
              value={message}
              maxRows={5}
            ></ChatTextarea>

            <ChatStyledIcon icon={faPaperPlane} size="lg" onClick={send} />
          </ChatInputWrapper>
        </Chat>
      </ChatWrapper>
    </Layout>
  );
};

export default ChatPage;
