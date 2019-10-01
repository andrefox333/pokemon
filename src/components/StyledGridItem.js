import styled from "styled-components";
import grassTileImg from "../assets/grasstile.png";
import rockTileImg from "../assets/rocktile.png";

export default styled.div`
  box-sizing: content-box;
  cursor: pointer;
  padding: 10px;
  transition: 0.2s;
  border: 4px solid ${props => (props.passage ? "yellow" : "grey")};
  background-size: cover;
  background-image: url(${({ impassable }) =>
    impassable ? rockTileImg : grassTileImg});

  &:hover {
    border-color: red;
  }

  &:before {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }

  img {
    width: 90%;
  }
`;
