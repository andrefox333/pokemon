import React from "react";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = props => {
  const [state, setState] = React.useState({
    size: 4,
    startingLoc: null,
    endingLoc: null,
    gridInfo: []
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
