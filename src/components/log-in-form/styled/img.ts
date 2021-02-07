import styled from "styled-components";

const Img = styled.img`
  width: 150px;
  height: 150px;
  box-shadow: 0 -4px ${(props) => props.theme.colors.main};
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  margin-top: -75px;
`;

export default Img;
