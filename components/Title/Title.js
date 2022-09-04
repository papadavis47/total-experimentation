import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${(props) => props.inPutColor};
  text-align: center;
  margin-top: 48px;
  text-transform: ${(props) => (props.capitalized ? "capitalize" : null)};
`;

export default Title;
