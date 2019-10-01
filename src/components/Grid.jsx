import React, { useEffect, useContext } from "react";
import Controls from "./Controls";
import { AppContext } from "../contexts/App";
import useApp from "../contexts/useApp";
import StyledGrid from "./StyledGrid";
import GridItem from "./GridItem";

export default function Grid() {
  const [state] = useContext(AppContext);
  const { initializeGrid } = useApp();

  useEffect(() => {
    initializeGrid();
  }, []);

  return (
    <StyledGrid size={state.size}>
      <div className="desc">
        <h4>Instructions</h4>
        <p>Click on a tile to place an impassable.</p>
        <p>Hover over a tile and press "S" to place the starting location.</p>
        <p>Hover over a tile and press "E" to place the ending location.</p>
        <p>
          API Server might be sleeping so the first call might take a little bit
          longer than expected.
        </p>
      </div>

      <Controls />

      <div className="gridWrap">
        {state.gridInfo.map(item => {
          return <GridItem key={item.id} item={item} />;
        })}
      </div>
    </StyledGrid>
  );
}
