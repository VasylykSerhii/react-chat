import { IChatMessages } from "pages/Chat";

import { auth } from "utils";
import {
  MessageWrapper,
  Wrapper,
  Avatar,
  MessageText,
  Name,
  Text,
} from "./styled";

type Props = {
  message: IChatMessages;
};

const Message = ({ message }: Props): JSX.Element => {
  return (
    <Wrapper>
      <MessageWrapper myMessage={auth?.currentUser?.uid === message.uid}>
        <Avatar src={message.photoURL} />
        <MessageText myMessage={auth?.currentUser?.uid === message.uid}>
          <Name>{message.fullName}</Name>
          <Text>{message.text}</Text>
        </MessageText>
      </MessageWrapper>
    </Wrapper>
  );
};

export default Message;
