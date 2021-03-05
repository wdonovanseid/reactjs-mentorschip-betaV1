import React from "react";
import PropTypes from "prop-types";
import ReusableProfileForm from "./ReusableProfileForm";

function EditProfileForm(props) {
  function handleEditProfileFormSubmission(event) {
    event.preventDefault();
    if (event.target.accountType.value === "Seeker") {
      props.onEditProfile({
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
        scholscholarshipValue: props.profile.scholarshipValue,
        merrits: props.profile.merrits,
        badges: props.profile.badges,
        gameAchievements: props.profile.gameAchievements,
        createdAt: props.profile.createdAt,
        id: props.profile.id
      });
    } else if (event.target.accountType.value === "Guardian") {
      props.onEditProfile({
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
        scholarshipValue: props.profile.scholarshipValue,
        merrits: props.profile.merrits,
        badges: props.profile.badges,
        gameAchievements: props.profile.gameAchievements,
        createdAt: props.profile.createdAt,
        id: props.profile.id
      });
    } else {
      props.onEditProfile({
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
        scholarshipValue: props.profile.scholarshipValue,
        merrits: props.profile.merrits,
        badges: props.profile.badges,
        gameAchievements: props.profile.gameAchievements,
        createdAt: props.profile.createdAt,
        id: props.profile.id
      });
    }
  }
  return (
    <React.Fragment>
      <h2>Edit Profile</h2>
      <hr />
      <ReusableProfileForm
        formSubmissionHandler={handleEditProfileFormSubmission}
        formButtonText="Edit Profile"
        accountType={props.profile.accountType}
        dateOfBirth={props.profile.dateOfBirth}
        firstName={props.profile.firstName}
        lastName={props.profile.lastName}
        userName={props.profile.userName}
        userEmail={props.profile.userEmail}
        userPassword={props.profile.userPassword}
        privacySetting={props.profile.privacySetting}
        guardiansEmail={props.profile.guardiansEmail}
        seekersEmail={props.profile.seekersEmail}
        country={props.profile.country}
        state={props.profile.state}
        city={props.profile.city}
        streetAddress={props.profile.streetAddress}
        zipCode={props.profile.zipCode}
        representation={props.profile.representation}
        nationality={props.profile.nationality}
        gpaScore={props.profile.gpaScore}
        satScore={props.profile.satScore}
        actScore={props.profile.actScore}
        classStanding={props.profile.classStanding}
        achievements={props.profile.achievements}
        academicLevel={props.profile.academicLevel}
        volunteerActivities={props.profile.volunteerActivities}
        communityOrganizations={props.profile.communityOrganizations}
        accolades={props.profile.accolades}
        scholarshipValue={props.profile.scholarshipValue}
        merrits={props.profile.merrits}
        badges={props.profile.badges}
        gameAchievements={props.profile.gameAchievements}
        createdAt={props.profile.createdAt} />
        <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment >
  );
}

EditProfileForm.propTypes = {
  onEditCreation: PropTypes.func,
  profile: PropTypes.object
};

export default EditProfileForm;