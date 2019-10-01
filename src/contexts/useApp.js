import { useContext } from "react";
import { AppContext } from "./App";
import { findPath } from "./useAppService";
import * as utils from "./useAppUtils";

const useApp = () => {
  const [state, setState] = useContext(AppContext);

  /**
   * It creates the gridInfo array with the proper x,y coordinates
   * */
  function initializeGrid() {
    const newGrid = utils.getNewGrid(state.size);
    setState(prevState => ({ ...prevState, gridInfo: newGrid }));
  }

  /**
   * It handles the map size select dropdown
   * @param {Number} size
   * */
  function changeMapSize(size) {
    const newGrid = utils.getNewGrid(size);
    setState(prevState => ({ ...prevState, size, gridInfo: newGrid }));
  }

  /**
   * It toggles the impassable flag of a grid item
   * @param {Number} gridId
   * */
  function toggleImpassable(gridId) {
    const index = state.gridInfo.findIndex(({ id }) => id === gridId);

    const clonedGridInfo = [...state.gridInfo];

    clonedGridInfo[index] = {
      ...clonedGridInfo[index],
      impassable: !clonedGridInfo[index].impassable
    };

    setState(prevState => ({ ...prevState, gridInfo: clonedGridInfo }));
  }

  /**
   * It toggles the snackbar with a message
   * @param {String} snackbarMsg
   * @param {Boolean} snackbar
   * */
  function toggleSnackbar(snackbarMsg, snackbar) {
    setState(prevState => ({
      ...prevState,
      snackbarMsg,
      snackbar
    }));
  }

  /**
   * It sets the starting location
   * @param {Number} id
   * */
  function setStartingLoc(id) {
    setState(prevState => ({ ...prevState, startingLoc: id }));
  }

  /**
   * It sets the ending location
   * @param {Number} id
   * */
  function setEndingLoc(id) {
    setState(prevState => ({ ...prevState, endingLoc: id }));
  }

  /**
   * Handles the API call to find the proper path
   * */
  async function handleFindPath() {
    const impassables = state.gridInfo.filter(item => {
      return item.impassable;
    });

    const startingLoc = state.gridInfo.find(
      item => item.id === state.startingLoc
    );

    const endingLoc = state.gridInfo.find(item => item.id === state.endingLoc);

    const response = await findPath({
      sideLength: state.size,
      impassables,
      startingLoc,
      endingLoc
    }).catch(error => {
      const message =
        error.response.data.message || "Server error. Please try again.";

      toggleSnackbar(message, true);

      setState(prevState => ({
        ...prevState,
        gridInfo: utils.resetGrid(state.gridInfo)
      }));

      return error;
    });

    if (response.moves) {
      const newGrid = utils.setFoundPaths(
        state.gridInfo,
        state.startingLoc,
        state.size,
        response.moves
      );
      setState(prevState => ({ ...prevState, gridInfo: newGrid }));
    }
  }

  return {
    initializeGrid,
    handleFindPath,
    changeMapSize,
    setStartingLoc,
    setEndingLoc,
    toggleSnackbar,
    toggleImpassable
  };
};

export default useApp;
