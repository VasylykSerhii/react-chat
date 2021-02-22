import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextareaAutosize from 'react-textarea-autosize';

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
