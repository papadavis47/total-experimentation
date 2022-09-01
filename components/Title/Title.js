import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.inPutColor};
  text-align: center;
  margin-top: 50px;
  text-transform: ${(props) => (props.capitalized ? "capitalize" : null)};
`;

export default Title;
