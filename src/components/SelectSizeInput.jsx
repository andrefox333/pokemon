import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { AppContext } from "../contexts/App";
import useApp from "../contexts/useApp";
import StyledSelectSizeInput from "./StyledSelectSizeInput";

const items = [4, 5, 6, 7, 8, 9, 10];

export default function SelectSizeInput() {
  const [state, setState] = React.useContext(AppContext);
  const { changeMapSize } = useApp();

  function handleChange(event) {
    changeMapSize(event.target.value);
  }

  return (
    <StyledSelectSizeInput>
      <InputLabel htmlFor="select-size">Select Grid Size</InputLabel>
      <Select
        className="selectWrapper"
        variant="outlined"
        value={state.size}
        onChange={handleChange}
        inputProps={{
          name: "size",
          id: "select-size"
        }}
      >
        {items.map(item => {
          return (
            <MenuItem key={item} value={item}>
              {item}x{item}
            </MenuItem>
          );
        })}
      </Select>
    </StyledSelectSizeInput>
  );
}
