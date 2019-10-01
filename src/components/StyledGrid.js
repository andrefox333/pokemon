import styled from "styled-components";

function calculateGridColumns(size) {
  let column = "";

  for (let index = 0; index < size; index++) {
    column += "1fr ";
  }

  return column;
}
export default styled.div`
  max-width: 600px;
  margin: 24px auto;
  .gridWrap {
    margin-top: 24px;
    display: grid;
    grid-template-columns: ${props => calculateGridColumns(props.size)};
    grid-template-rows: ${props => calculateGridColumns(props.size)};
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
