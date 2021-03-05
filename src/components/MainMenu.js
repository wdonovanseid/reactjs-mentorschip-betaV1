import React, {useState} from "react";

// import { useSelector } from 'react-redux'
// import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function MainMenu(props) {

  // useFirestoreConnect([
  //   { collection: 'profiles',
  //     doc: profileId } // find way to pass profileId in
  // ]);
  // const profiles = useSelector(state => state.firestore.ordered.profiles);
  // if (isLoaded(profiles)) {

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

  // } else {
  //   return (
  //     <React.Fragment>
  //       <h3>Loading...</h3>
  //     </React.Fragment>
  //   )
  // }

}

export default MainMenu;
