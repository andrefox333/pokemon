import React from "react";
import { AppProvider } from "./contexts/App";
import Grid from "./components/Grid";
import StyledApp from "./StyledApp";
import Notification from "./components/Notification";
function App() {
  return (
    <StyledApp>
      <AppProvider>
        <Notification />
        <Grid />
      </AppProvider>
    </StyledApp>
  );
}

export default App;
