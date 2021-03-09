import React from "react";
import PropTypes from "prop-types";

// this page can't currently be accessed
// when registration and login get figured out,
// a user should be able to access their own personal profile details if they've created one

function ProfileDetail(props) {
  const { profile } = props;
  return (
    <React.Fragment>
      <h2>{profile.accountType}: {profile.firstName} {profile.lastName} Details</h2>
      <p>Created At: {profile.createdAt}</p>
      <hr />
      <h3>Personal</h3>
      <p>Date of Birth: {profile.dateOfBirth}</p>
      <p>Residence: {profile.country} - {profile.streetAddress}, {profile.city} {profile.state} {profile.zipCode}</p>
      <p>User Name: {profile.privacySetting === "Public" ? profile.userName : profile.id}</p>
      <p>Privacy Setting: {profile.privacySetting}</p>
      <p>Email: {profile.userEmail}</p>
      <p>Password: {profile.userPassword}</p>
      <p>Ethnicity/Representation: {profile.representation}</p>
      <p>Nationality: {profile.nationality}</p>
      {profile.accountType === "Seeker" &&
      <p>Guardian's Email: {profile.guardiansEmail}</p>}
      {profile.accountType === "Guardian" &&
      <div>
        {profile.seekersEmail && profile.seekersEmail.map((email, index) => 
        <p key={index}>Seeker Email {index+1}: {email} <button type="button" onClick={() => props.onClickingDeleteSeekerEmail(profile.id, index)}>Delete</button></p>)}
        <form onSubmit={props.onClickingAddSeekerEmail}>
          <input type="hidden" name="profileID" value={profile.id}></input>
          <input name="newSeekerEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
          <button type="submit">Add Seeker Email</button>
        </form>
      </div>}
      <hr />

      {profile.accountType === "Seeker" &&
      <div>
        <h3>Academics</h3>
        <ul>
          <li>GPA Score: {profile.gpaScore}</li>
          <li>SAT Score: {profile.satScore}</li>
          <li>ACT Score: {profile.actScore}</li>
        </ul>
        <p>Class Standing: {profile.classStanding}</p>
        <p>Achievements: {profile.achievements}</p>
        <p>Academic Level: {profile.academicLevel}</p>
        <hr />
      </div>}

      <h3>Community</h3>
      <p>Volunteer Activities: {profile.volunteerActivities}</p>
      <p>Community Organization(s): {profile.communityOrganizations}</p>
      <p>Accolades: {profile.accolades}</p>
      <hr />

      <h3>Game Stats</h3>
      <p>Scholarship Value: {profile.scholarshipValue}</p>
      <p>Merrits: {profile.merrits}</p>
      <p>Badges: {profile.badges}</p>
      <p>Achievements: {profile.gameAchivements}</p>
      {profile.teamColor ? <p>Team Color: {profile.teamColor}</p> :
      <button type="button" onClick={() => props.onClickingGetTeamColor()}>Get your team color!</button>}
      <hr />

      <button type="button" onClick={props.onClickingEdit}>Update Profile</button>
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

ProfileDetail.propTypes = {
  profile: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingGetTeamColor: PropTypes.func,
  onClickingReturnToMainMenu: PropTypes.func,
  onClickingAddSeekerEmail: PropTypes.func,
  onClickingDeleteSeekerEmail: PropTypes.func
};

export default ProfileDetail;