import { Wrapper } from "./style.component";
import { IChatMessages } from "pages/chat";

import { auth } from "../../utils/firebase";
import {
  MessageWrap,
  Avatar,
  MessageText,
  Name,
  Text,
} from "./style.component";

type Props = {
  message: IChatMessages;
};

const Message = ({ message }: Props): JSX.Element => {
  return (
    <Wrapper>
      <MessageWrap myMessage={auth?.currentUser?.uid === message.uid}>
        <Avatar src={message.photoURL} />
        <MessageText myMessage={auth?.currentUser?.uid === message.uid}>
          <Name>{message.fullName}</Name>
          <Text>{message.text}</Text>
        </MessageText>
      </MessageWrap>
    </Wrapper>
  );
};

export default Message;
