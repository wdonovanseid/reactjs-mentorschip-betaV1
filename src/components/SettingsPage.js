import React from "react";

function Settings(props) {
  return (
    <React.Fragment>
      <p>This is where settings would go</p>
      
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

export default Settings;
