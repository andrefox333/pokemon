import React from "react";
import { Button } from "@material-ui/core";

import useApp from "../contexts/useApp";
import SelectSizeInput from "./SelectSizeInput";
import StyledControls from "./StyledControls";

export default function Controls() {
  const { handleFindPath } = useApp();
  return (
    <StyledControls>
      <SelectSizeInput />
      <Button onClick={handleFindPath} color="primary" variant="contained">
        Find Path
      </Button>
    </StyledControls>
  );
}
