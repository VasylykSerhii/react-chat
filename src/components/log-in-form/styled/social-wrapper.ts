import styled from "styled-components";

const SocialWrapper = styled.div`
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

export default SocialWrapper;
