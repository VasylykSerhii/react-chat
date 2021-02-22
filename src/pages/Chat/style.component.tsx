import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 88px);
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222831;
  width: 600px;
  height: 600px;
  max-width: calc(100% - 30px);
  max-height: calc(100% - 30px);
  overflow: hidden;
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
`;
