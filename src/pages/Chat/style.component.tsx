import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextareaAutosize from 'react-textarea-autosize';

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

export const ChatInputWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 35%;
  min-height: 40px;
  background-color: #30475e;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const ChatTextarea = styled(TextareaAutosize)`
  width: calc(100% - 30px);
  height: 100%;
  padding: 10px;
  overflow-y: auto;
  color: #dddddd;
  background-color: transparent;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const ChatStyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #dddddd;
`;
