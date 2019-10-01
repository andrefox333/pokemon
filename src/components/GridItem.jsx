import React, { useContext } from "react";
import StyledGridItem from "./StyledGridItem";
import useApp from "../contexts/useApp";
import { AppContext } from "../contexts/App";
import bulbasaurImg from "../assets/bulbasaur.png";
import finishImg from "../assets/finishtile.png";

export default function GridItem({ item }) {
  const [state] = useContext(AppContext);
  const { toggleImpassable, setStartingLoc, setEndingLoc } = useApp();

  function handleOnClick() {
    if (state.startingLoc !== item.id && state.endingLoc !== item.id) {
      toggleImpassable(item.id);
    }
  }

  function handleOnKeyPress(e) {
    if (!item.impassable) {
      if (e.keyCode === 83) {
        /* Pressing S */
        if (state.endingLoc === item.id) {
          setEndingLoc(null);
        }
        const value = state.startingLoc === item.id ? null : item.id;
        setStartingLoc(value);
      } else if (e.keyCode === 69) {
        /* Pressing E */
        if (state.startingLoc === item.id) {
          setStartingLoc(null);
        }
        const value = state.endingLoc === item.id ? null : item.id;
        setEndingLoc(value);
      }
    }
  }

  function handleOnMouseEnter(e) {
    e.target.focus();
  }

  return (
    <StyledGridItem
      impassable={item.impassable}
      passage={item.passage}
      tabIndex={item.id}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyPress}
      onMouseEnter={handleOnMouseEnter}
    >
      {state.startingLoc === item.id && <img src={bulbasaurImg} />}
      {state.endingLoc === item.id && <img src={finishImg} />}
    </StyledGridItem>
  );
}
