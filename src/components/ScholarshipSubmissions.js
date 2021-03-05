import React from "react";

function ScholarshipSubmissions(props) {
  return (
    <React.Fragment>
      <h1>ScholarshipSubmissions</h1>
      
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

export default ScholarshipSubmissions;
