import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export default Wrapper;
