import React from "react";

function TitleScreen(props) {
  return (
    <React.Fragment>
      <h1>SPLASH TITLESCREEN</h1>
      <button type="button" onClick={props.onClickingStart}>Start</button>
      {/* <button type="button" onClick={props.onClickingExit}>Exit</button> */}
    </React.Fragment>
  );
}

export default TitleScreen;
