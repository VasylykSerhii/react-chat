import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const MessageWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: ${(props) => (props.myMessage ? "row-reverse" : "row")};
`;
export const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const MessageText = styled.div`
  margin: 0 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.myMessage ? "flex-end" : "flex-start")};
`;

export const Name = styled.p`
  background-color: #30475e;
  padding: 5px 10px;
  border-radius: 16px;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 0.4px;
`;

export const Text = styled.p`
  margin-bottom: 0;
`;
