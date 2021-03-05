import React from "react";
import PropTypes from "prop-types";
import ReusableProfileForm from './ReusableProfileForm';

import { useFirestore } from 'react-redux-firebase'

// There is probably a much better way to format this instead of repeating code

function NewProfileForm(props) {
  const firestore = useFirestore();
  function handleAddProfileToFirestore(event) {
    event.preventDefault();
    alert("profile submitted!");
    // props.onNewProfileCreation(); all this does is reverts back to main menu
    if (event.target.accountType.value === "Seeker") {
      return firestore.collection('profiles').add({
        accountType: event.target.accountType.value,
        dateOfBirth: event.target.dateOfBirth.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        userName: event.target.userName.value,
        userEmail: event.target.userEmail.value,
        userPassword: event.target.userPassword.value,
        privacySetting: event.target.privacySetting.value,
        guardiansEmail: event.target.guardiansEmail.value,
        country: event.target.country.value,
        state: event.target.state.value,
        city: event.target.city.value,
        streetAddress: event.target.streetAddress.value,
        zipCode: event.target.zipCode.value,
        representation: event.target.representation.value,
        nationality: event.target.nationality.value,
        gpaScore: event.target.gpaScore.value,
        satScore: event.target.satScore.value,
        actScore: event.target.actScore.value,
        classStanding: event.target.classStanding.value,
        achievements: event.target.achievements.value,
        academicLevel: event.target.academicLevel.value,
        volunteerActivities: event.target.volunteerActivities.value,
        communityOrganizations: event.target.communityOrganizations.value,
        accolades: event.target.accolades.value,
        scholarshipValue: 0,
        merrits: "None",
        badges: "None",
        gameAchievements: "None",
        interestKeyWord: event.target.interestKeyWord.value,
        createdAt: firestore.FieldValue.serverTimestamp()
      });
    } else if (event.target.accountType.value === "Guardian") {
      return firestore.collection('profiles').add({
          accountType: event.target.accountType.value,
          dateOfBirth: event.target.dateOfBirth.value,
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          userName: event.target.userName.value,
          userEmail: event.target.userEmail.value,
          userPassword: event.target.userPassword.value,
          privacySetting: event.target.privacySetting.value,
          seekersEmail: [event.target.seekersEmail.value],
          country: event.target.country.value,
          state: event.target.state.value,
          city: event.target.city.value,
          streetAddress: event.target.streetAddress.value,
          zipCode: event.target.zipCode.value,
          representation: event.target.representation.value,
          nationality: event.target.nationality.value,
          volunteerActivities: event.target.volunteerActivities.value,
          communityOrganizations: event.target.communityOrganizations.value,
          accolades: event.target.accolades.value,
          scholarshipValue: 0,
          merrits: "None",
          badges: "None",
          gameAchievements: "None",
          interestKeyWord: event.target.interestKeyWord.value,
          createdAt: firestore.FieldValue.serverTimestamp()
      });
    } else {
      return firestore.collection('profiles').add({
          userID: event.target.userID.value,
          accountType: event.target.accountType.value,
          dateOfBirth: event.target.dateOfBirth.value,
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          userName: event.target.userName.value,
          userEmail: event.target.userEmail.value,
          userPassword: event.target.userPassword.value,
          privacySetting: event.target.privacySetting.value,
          country: event.target.country.value,
          state: event.target.state.value,
          city: event.target.city.value,
          streetAddress: event.target.streetAddress.value,
          zipCode: event.target.zipCode.value,
          representation: event.target.representation.value,
          nationality: event.target.nationality.value,
          volunteerActivities: event.target.volunteerActivities.value,
          communityOrganizations: event.target.communityOrganizations.value,
          accolades: event.target.accolades.value,
          scholarshipValue: 0,
          merrits: "None",
          badges: "None",
          gameAchievements: "None",
          interestKeyWord: event.target.interestKeyWord.value,
          createdAt: firestore.FieldValue.serverTimestamp()
      });
    }
  }

  return (
    <React.Fragment>
      <h2>Add a new Profile</h2>
      <hr />
      <ReusableProfileForm
        formSubmissionHandler={handleAddProfileToFirestore}
        formButtonText="Submit Profile"
        accountType={props.accountType}
        userName={props.userName}
        userEmail={props.userEmail}
        userPassword={props.userPassword}
        userID={props.userID}
      />
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

NewProfileForm.propTypes = {
  onNewProfileCreation: PropTypes.func,
  accountType: PropTypes.string
};

export default NewProfileForm;