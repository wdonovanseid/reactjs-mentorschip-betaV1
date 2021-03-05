import React from "react";

function MainGame(props) {
  return (
    <React.Fragment>
      <h1>MainGame</h1>
      
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

export default MainGame;
