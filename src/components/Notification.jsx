import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import useApp from "../contexts/useApp";
import { AppContext } from "../contexts/App";

export default function SimpleSnackbar() {
  const [state] = useContext(AppContext);
  const { toggleSnackbar } = useApp();

  function handleOnClose() {
    toggleSnackbar(null, false);
  }
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={state.snackbar}
      autoHideDuration={6000}
      onClose={handleOnClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{state.snackbarMsg}</span>}
    />
  );
}
