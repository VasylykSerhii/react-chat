import React, {useState, useCallback} from 'react'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { firebase, firestore, auth } from "utils";
import {
  ChatInputWrapper,
  ChatTextarea,
  ChatStyledIcon,
} from "./style.component";

function ChatSendMessage() {
  const [message, setMessage] = useState("");
  const messagesRef = firestore.collection("messages");

  const handleChange = useCallback(
    (e) => setMessage(e.target.value),[]
  )

  const send = async (e) => {
    if (message.trim().length > 0) {
      if (e.keyCode === 13 || e.type === "click") {
        await messagesRef
          .add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth?.currentUser?.uid,
            photoURL: auth?.currentUser?.photoURL,
            fullName: auth?.currentUser?.displayName,
          })
          .then(function () {
            setMessage("");
          });
      }
    }
  };

  return (
    <ChatInputWrapper>
      <ChatTextarea
        onChange={handleChange}
        onKeyDown={send}
        value={message}
        maxRows={5}
      ></ChatTextarea>

      <ChatStyledIcon icon={faPaperPlane} size="sm" onClick={send} />
    </ChatInputWrapper>
  )
}

export default ChatSendMessage
