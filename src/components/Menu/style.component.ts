import styled from "styled-components";

export const MenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 88px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;

export const Wraper = styled.div`
  width: 1200px;
  max-width: calc(100% - 60px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogOutBtn = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.light};
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
`;
