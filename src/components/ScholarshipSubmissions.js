import React from "react";

// this is where all the scholarship submissions that the logged in user has submitted will be
// this will also be where the user will be able to look at the submission in more detail,
// see who has applied to their submission, and then approve or deny submissions

function ScholarshipSubmissions(props) {
  return (
    <React.Fragment>
      <h1>ScholarshipSubmissions</h1>
      
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

export default ScholarshipSubmissions;
