import React from "react";
import PropTypes from "prop-types";

// form for both creating and editing a users profile

function ReusableForm(props) {
  return (
    <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <input type="hidden" value={props.userID}></input>
            <input type="hidden" name="accountType" value={props.accountType}></input>
            {/* Malicious user could access these hidden values and change them */}
            <h3>Personal</h3>
            <p>Date of Birth:
              <input
              type='date'
              name='dateOfBirth'
              defaultValue={props.dateOfBirth ? props.dateOfBirth : ''}
              required />
            </p>
            <p>First Name:
              <input
              type='text'
              name='firstName'
              defaultValue={props.firstName ? props.firstName : ''}
              pattern="[a-zA-Z']+"
              title="test test"
              maxLength='12'
              required />
            </p>
            <p>Last Name:
              <input
              type='text'
              name='lastName'
              defaultValue={props.lastName ? props.lastName : ''}
              required />
            </p>
            {props.formButtonText === "Submit Profile" ?
            <p>User Name:
              <input
              type="text"
              name='userName'
              value={props.userName}
              readOnly
              required />
            </p> :
            <p>User Name:
              <input
              type="name"
              name='userName'
              defaultValue={props.userName ? props.userName : ''}
              maxLength="25"
              required />
            </p>}
            {props.formButtonText === "Submit Profile" ?
            <p>User Email:
              <input
              type="email"
              name='userEmail'
              value={props.userEmail}
              readOnly
              required />
            </p> :
            <p>User Email:
              <input
              type="email"
              name='userEmail'
              defaultValue={props.userEmail ? props.userEmail : ''}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              maxLength="25"
              required />
            </p>}
            {props.formButtonText === "Submit Profile" ?
            <p>User Password:
            <input
              type='password'
              name='userPassword'
              value={props.userPassword}
              readOnly
              required />
            </p> :
            <p>User Password:
              <input
              type='password'
              name='userPassword'
              defaultValue={props.userPassword ? props.userPassword : ''}
              maxLength="25"
              required />
            </p>}
            <p>Privacy Setting:
              <li><input type="radio" name="privacySetting" value="Public" defaultChecked></input>Public</li>
              <li><input type="radio" name="privacySetting" value="Private"></input>Private</li>
            </p>
            {props.accountType === "Seeker" &&
            <p>Guardian's Email:
              <input
              type="email"
              name='guardiansEmail'
              defaultValue={props.guardiansEmail ? props.guardiansEmail : ''}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              maxLength="25"
              required />
            </p>}
            {props.accountType === "Guardian" && props.formButtonText !== "Edit Profile" &&
            <p>Seeker's Email:
              <input
              type="email"
              name='seekersEmail'
              defaultValue={props.seekersEmail ? props.seekersEmail : ''}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              maxLength="25"
              required />
            </p>}
            <p>Country:
              <input
              name='country'
              defaultValue={props.country ? props.country : ''}
              required />
            </p>
            <p>State:
              <select name="state">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </p>
            <p>City:
              <input
              type='text'
              name='city'
              placeholder='Seattle'
              defaultValue={props.city ? props.city : ''}
              required />
            </p>
            <p>Street Address:
              <textarea
              name='streetAddress'
              placeholder='1234 Seasame Street Unit G'
              defaultValue={props.streetAddress ? props.streetAddress : ''}
              required />
            </p>
            <p>Zip Code:
              <input
              type='text'
              name='zipCode'
              pattern="[0-9]{5}"
              maxLength='12'
              defaultValue={props.zipCode ? props.zipCode : ''}
              required />
            </p>
            <p>Ethnicity/Representation:
              <input
              type='text'
              name='representation'
              defaultValue={props.representation ? props.representation : ''}
              required />
            </p>
            <p>Nationality:
              <input
              type='text'
              name='nationality'
              defaultValue={props.nationality ? props.nationality : ''}
              required />
            </p>
            <hr />

            {props.accountType === 'Seeker' &&
            <div>
              <h3>Academic</h3>
              <p>GPA Score:
                <input
                type='number'
                name='gpaScore'
                defaultValue={props.gpaScore ? props.gpaScore : ''}
                min="0.1"
                max="4.0"
                step="0.1"
                />
              </p>
              <p>SAT Score:
                <input
                type='number'
                name='satScore'
                defaultValue={props.satScore ? props.satScore : ''}
                />
              </p>
              <p>ACT Score:
                <input
                type='number'
                name='actScore'
                defaultValue={props.actScore ? props.actScore : ''}
                />
              </p>
              <p>Class Standing:
                <input
                type='text'
                name='classStanding'
                defaultValue={props.classStanding ? props.classStanding : ''}
                required />
              </p>
              <p>Achievements:
                <textarea
                type='text'
                name='achievements'
                defaultValue={props.achievements ? props.achievements : ''}
                required />
              </p>
              <p>Academic Level:
                <select name='academicLevel'>
                  <option value="Pre-College">Pre-College</option>
                  <option value="In-College">In-College</option>
                  <option value="College Graduate">College Graduate</option>
                </select>
              </p>
              <hr />
            </div>}

            <h3>Community</h3>
            <p>Volunteer Activities:
              <textarea
              type='text'
              name='volunteerActivities'
              defaultValue={props.volunteerActivities ? props.volunteerActivities : ''}
              />
            </p>
            <p>Community Organization(s):
              <textarea
              type='text'
              name='communityOrganizations'
              defaultValue={props.communityOrganizations ? props.communityOrganizations : ''}
              />
            </p>
            <p>Accolades:
              <input
              type='text'
              name='accolades'
              defaultValue={props.accolades ? props.accolades : ''}
              />
            </p>
            <hr />
            <p>Interest:
              <li><input type="radio" name="interestKeyWord" value="Science"></input>Science</li>
              <li><input type="radio" name="interestKeyWord" value="Technology"></input>Technology</li>
              <li><input type="radio" name="interestKeyWord" value="Reality"></input>Reality</li>
              <li><input type="radio" name="interestKeyWord" value="Entrepreneurship"></input>Entrepreneurship</li>
              <li><input type="radio" name="interestKeyWord" value="Art"></input>Art</li>
              <li><input type="radio" name="interestKeyWord" value="Math"></input>Math</li>
            </p>
            <hr />

            <button type="submit">{props.formButtonText}</button>
        </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  formButtonText: PropTypes.string,
  dateOfBirth: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  guardiansEmail: PropTypes.string,
  seekersEmail: PropTypes.array,
  country: PropTypes.string,
  city: PropTypes.string,
  streetAddress: PropTypes.string,
  zipCode: PropTypes.string,
  representation: PropTypes.string,
  nationality: PropTypes.string,
  gpaScore: PropTypes.number,
  satScore: PropTypes.number,
  actScore: PropTypes.number,
  classStanding: PropTypes.string,
  achievements: PropTypes.string,
  academicLevel: PropTypes.string,
  volunteerActivities: PropTypes.string,
  communityOrganizations: PropTypes.string,
  accolades: PropTypes.string
};

export default ReusableForm;