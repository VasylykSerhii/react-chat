import styled from "styled-components";

const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: ${(props) => (props.myMessage ? "row-reverse" : "row")};
`;

export default MessageWrapper;
