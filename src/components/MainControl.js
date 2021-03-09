import React, {useState} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from '../actions/index.js';
import { withFirestore } from 'react-redux-firebase';
import NewProfileForm from './NewProfileForm';
import ProfileDetail from './ProfileDetails';
import EditProfileForm from './EditProfileForm';
import TeamColorQuestionaire from './TeamColorQuestionaire';
import LoginPage from './LoginPage.js';
import MainGame from './MainGame.js';
import MainMenu from './MainMenu.js';
import ScholarshipForm from './ScholarshipForm.js';
import SettingsPage from './SettingsPage.js';
import TitleScreen from './TitleScreen.js';
import RegisterAccountForm from './RegisterAccountForm.js';
import ScholarshipSubmissions from './ScholarshipSubmissions.js';

class MainControl extends React.Component {

  // the following constructor and corresponding parts are just there for testing purposes
  // when the register and account registration stuff get figured out, these kind of values would be taken
  // and used in the sequential parts of the application
  
  constructor() {
    super();
    this.state = {
      accountType: "Seeker",
      userName: "",
      userEmail: "",
      userPassword: "",
      userID: "",
    };
    this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserIDChange = this.handleUserIDChange.bind(this);
  }

  handleAccountTypeChange(e) {
    this.setState({ accountType: e.target.value });
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ userEmail: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ userPassword: e.target.value });
  }

  handleUserIDChange(e) {
    this.setState({ userID: e.target.value });
  }

  handleShowLoginForm = () => {
    this.props.dispatch(a.showLoginForm);
  }

  handleShowStartScreen = () => {
    this.props.dispatch(a.showTitleScreen);
  }

  handleShowMainGame = () => {
    this.props.dispatch(a.showMainGame);
  }

  handleShowNewProfileForm = () => {
    this.props.dispatch(a.showNewProfileForm);
  }

  handleShowProfileDetails = () => {
    this.props.dispatch(a.showProfileDetails);
  }

  handleShowEditProfileForm = () => {
    this.props.dispatch(a.showEditProfileForm);
  }

  handleShowProfileDetails = () => {
    this.props.dispatch(a.showProfileDetails);
  }

  handleShowSettingsPage = () => {
    this.props.dispatch(a.showSettingsPage);
  }

  handleShowScholarshipForm = () => {
    this.props.dispatch(a.showScholarshipForm);
  }

  handleShowScholarshipSubmissions = () => {
    this.props.dispatch(a.showScholarshipSubmissions);
  }

  handleShowTeamColorQuestionaire = () => {
    this.props.dispatch(a.showTeamColorQuestionaire);
  }

  handleShowMainMenu = () => {
    this.props.dispatch(a.showMainMenu);
  }

  handleShowRegisterAccountForm = () => {
    this.props.dispatch(a.showRegisterAccountForm);
  }

  handleLogin = (e, id) => {
    // // check to see if userEmail and userPassword match in firestore
    // // if they match, pull data from firestore and put in userInfo
    // // if not, do some alert thingy
    e.preventDefault();
    // this.setState({userInfo: {}})
    // if (e.target.userEmail.value && e.target.userPassword.value) {
    //   this.setState({
    //     currentPage: "MAIN_MENU",
    //     userInfo: {
    //       userEmail: e.target.userEmail.value,
    //       userPassword: e.target.userPassword.value,
    //       userAccountType: e.target.userAccountType.value
    //     }
    //   });
    // } else {
    //   alert("Nothing found matching");
    // }

    // this.props.firestore.get({collection: 'profiles', doc: id}).then((profile) => {
    //   const firestoreProfile = {
    //     names: profile.get("names"),
    //     location: profile.get("location"),
    //     issue: profile.get("issue"),
    //     id: profile.id
    //   }
    //   this.setState({selectedProfile: firestoreProfile });
    // });

    // this.props.dispatch(a.loggedUser())
    this.props.dispatch(a.showMainMenu);
  }

  render() {
    let currentlyVisibleScreen = null;
    if (this.props.currentPage === "profileDetail") {
      currentlyVisibleScreen =
      <ProfileDetail
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "newProfile") {
      currentlyVisibleScreen =
      <NewProfileForm
        onClickingReturnToMainMenu={this.handleShowMainMenu}
        accountType={this.state.accountType}
        userName={this.state.userName}
        userEmail={this.state.userEmail}
        userPassword={this.state.userPassword}
      />
    } else if (this.props.currentPage === "editProfile") {
      currentlyVisibleScreen =
      <EditProfileForm
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "teamColorQuestionaire") {
      currentlyVisibleScreen =
      <TeamColorQuestionaire
        onClickingReturnToProfile={this.handleShowProfileDetails}
      />
    } else if (this.props.currentPage === "scholarshipForm") {
      currentlyVisibleScreen =
      <ScholarshipForm
        mentorID={this.state.userID}
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "scholarshipSubmissions") {
      currentlyVisibleScreen =
      <ScholarshipSubmissions
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "settings") {
      currentlyVisibleScreen =
      <SettingsPage
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "mainGame") {
      currentlyVisibleScreen =
      <MainGame
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "mainMenu") {
      currentlyVisibleScreen =
      <MainMenu
        userInfo = {this.state}
        onClickingPlayGame = {this.handleShowMainGame}
        onClickingCreateScholarship = {this.handleShowScholarshipForm}
        onClickingCheckScholarshipSubmissions = {this.handleShowScholarshipSubmissions}
        onClickingProfile = {this.handleShowProfileDetails}
        onClickingCreateProfile = {this.handleShowNewProfileForm}
        onClickingSettings = {this.handleShowSettingsPage}
        onClickingLogOff = {this.handleShowLoginForm}
      />
    } else if (this.props.currentPage === "loginForm") {
      currentlyVisibleScreen =
      <LoginPage
        onLoginFormSubmission={this.handleLogin}
        onClickingRegisterNewAccount={this.handleShowRegisterAccountForm}
        onClickingReturnToStart={this.handleShowStartScreen}
      />
    } else if (this.props.currentPage === "registerAccountForm") {
      currentlyVisibleScreen =
      <RegisterAccountForm
        onClickingReturnToLogin={this.handleShowLoginForm}
      />
    } else {
      currentlyVisibleScreen =
      <TitleScreen
        onClickingStart={this.handleShowLoginForm}
        // onClickingExit={}
      />
    }
    return (
      <React.Fragment>
        <h4>TEMPORARY</h4>
        <p>Account Type:
        <select value={this.state.accountType} onChange={this.handleAccountTypeChange}>
          <option value="Seeker">Seeker</option>
          <option value="Mentor">Mentor</option>
          <option value="Guardian">Guardian</option>
        </select>
      </p>
      <p>User Name: <input name="userName" onChange={this.handleUserNameChange}></input></p>
      <p>User Email: <input name="userEmail" onChange={this.handleEmailChange}></input></p>
      <p>User Password: <input name="userPassword" onChange={this.handlePasswordChange}></input></p>
      <p>User ID: <input name="userID" onChange={this.handleUserIDChange}></input></p>
      <hr />
      {currentlyVisibleScreen}
      </React.Fragment>
    );
  }
}

MainControl.propTypes = {
  currentPage: PropTypes.string,
  loggedUser: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    loggedUser: state.loggedUser
  }
}

MainControl = connect(mapStateToProps)(MainControl);

export default withFirestore(MainControl);
