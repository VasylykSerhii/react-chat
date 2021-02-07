import styled from "styled-components";

const MessageText = styled.div`
  margin: 0 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.myMessage ? "flex-end" : "flex-start")};
`;

export default MessageText;
