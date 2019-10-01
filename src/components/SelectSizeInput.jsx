import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { AppContext } from "../contexts/App";
import useApp from "../contexts/useApp";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  }
}));

const items = [4, 5, 6, 7, 8, 9, 10];

export default function SelectSizeInput() {
  const classes = useStyles();
  const [state, setState] = React.useContext(AppContext);
  const { changeMapSize } = useApp();

  function handleChange(event) {
    changeMapSize(event.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="select-size">Select Grid Size</InputLabel>
      <Select
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
    </FormControl>
  );
}
