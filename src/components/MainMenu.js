import React, {useState} from "react";

function MainMenu(props) {

    return (
      <React.Fragment>
        <h1>MainMenu</h1>
        <hr />
        <button type="button" onClick={props.onClickingPlayGame}>Play Game</button>
        {props.userInfo.accountType === "Mentor" &&
        <button type="button" onClick={props.onClickingCreateScholarship}>Create Scholarship</button>}
        {props.userInfo.accountType === "Mentor" &&
        <button type="button" onClick={props.onClickingCheckScholarshipSubmissions}>Check Scholarship Submissions</button>}
        {props.userInfo.profile ?
        <button type="button" onClick={props.onClickingProfile}>Profile</button>:
        <button type="button" onClick={props.onClickingCreateProfile}>Create Profile</button>}
        <button type="button" onClick={props.onClickingSettings}>Settings</button>
        <button type="button" onClick={props.onClickingLogOff}>Log Off</button>
      </React.Fragment>
    );

}

export default MainMenu;
