import styled from "styled-components";

export const Wraper = styled.div`
  width: 450px;
  height: 500px;
  max-width: calc(100% - 30px);
  background-color: ${(props) => props.theme.colors.dark}4c;
  border-top: 4px solid ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  box-shadow: 0 -4px ${(props) => props.theme.colors.main};
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  margin-top: -75px;
`;

export const Form = styled.form`
  margin-top: 50px;
  max-width: 300px;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.dark};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.dark}4c;
    font-size: 24px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${(props) => props.theme.colors.light};
  padding: 0 10px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  min-width: 150px;
  min-height: 40px;
  margin-top: 30px;
  background: ${(props) => props.theme.colors.main};
  border: none;
  font-size: 18px;
  border-bottom: 5px solid #cc8f00;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: #cc8f00;
  }
`;

export const Link = styled.button`
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

export const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;

  svg {
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;
