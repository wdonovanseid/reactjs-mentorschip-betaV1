import React, {useState} from "react";
import { useFirestore } from 'react-redux-firebase';
import infoIcon from './../img/informationIcon.png';

// make sure to lock all inputs with patterns and titles before putting into production
// later add pagination to this with a progress completion bar

function ScholarshipForm(props) {

  const [PlacementType, setPlacementType] = useState("DROP");
  const [SDGSelect, setSDGSelect] = useState("NoPoverty");
  const [SDGGameTask, setSDGGameTask] = useState();
  const [EssayNumber, setEssayNumber] = useState(1);
  const [RecommendationNumber, setRecommendationNumber] = useState(1);
  const [PlantPlacementProtocol, setPlantPlacementProtocol] = useState("DROP");
  const [ScholarshipAwardValue, setScholarshipAwardValue] = useState(0.00);
  const [ScholarshipAwardDivisibility, setScholarshipAwardDivisibility] = useState("divide");
  const [ScholarshipDuration, setScholarshipDuration] = useState("1 Hour");
  const [ScholarshipAwardLimit, setScholarshipAwardLimit] = useState("1-60perHour");
  const [ScholarshipAwardLimitNumber, setScholarshipAwardLimitNumber] = useState(1);
  const [RF1Value, setRF1Value] = useState(false);
  const [RF2Value, setRF2Value] = useState(false);
  const [RF3Value, setRF3Value] = useState(false);
  const [RF4Value, setRF4Value] = useState(false);
  const [RF5Value, setRF5Value] = useState(false);
  const [RF6Value, setRF6Value] = useState(false);
  const [ER1Value, setER1Value] = useState(false);
  const [ER2Value, setER2Value] = useState(false);
  const [ER3Value, setER3Value] = useState(false);
  const [ER3SelectValue, setER3SelectValue] = useState(4);
  const [ER4Value, setER4Value] = useState(false);
  const [ER5Value, setER5Value] = useState(false);
  const [ER6Value, setER6Value] = useState(false);
  const [IR1Value, setIR1Value] = useState(false);
  const [IR2Value, setIR2Value] = useState(false);
  const [IR3Value, setIR3Value] = useState(false);
  const [IR4Value, setIR4Value] = useState(false);
  const [IR5Value, setIR5Value] = useState(false);
  const [IR6Value, setIR6Value] = useState(false);
  const [AQ1Value, setAQ1Value] = useState(false);
  const [AQ2Value, setAQ2Value] = useState(false);
  const [AQ3Value, setAQ3Value] = useState(false);
  const [AQ4Value, setAQ4Value] = useState(false);
  const [AQ5Value, setAQ5Value] = useState(false);
  const [AQ6Value, setAQ6Value] = useState(false);
  const [AQ7Value, setAQ7Value] = useState(false);
  const [ESSPE1Value, setESSPE1Value] = useState(false);
  const [ESSPE2Value, setESSPE2Value] = useState(false);
  const [ESSPE3Value, setESSPE3Value] = useState(false);
  const [ESSPE4Value, setESSPE4Value] = useState(false);
  const [ESSPE5Value, setESSPE5Value] = useState(false);
  const [ESSPSC1Value, setESSPSC1Value] = useState(false);
  const [ESSPSC2Value, setESSPSC2Value] = useState(false);
  const [ESSPSC3Value, setESSPSC3Value] = useState(false);
  const [ESSPSC4Value, setESSPSC4Value] = useState(false);
  const [ESSPSC5Value, setESSPSC5Value] = useState(false);
  const [ESSChosenInstitute, setESSChosenInstitute] = useState("prove");
  const [ProveValue, setProveValue] = useState("accreditation");
  const [ProvideValue, setProvideValue] = useState("certificateOfCompletion");
  const [CompleteValue, setCompleteValue] = useState("18months");

  const firestore = useFirestore();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function calcAwardMax(strLim) {
    switch(strLim) {
      case "1-60perHour":
        return 60;
      case "1-24perDay":
        return 24;
      case "1-7perWeek":
        return 7;
      case "1-30perMonth":
        return 30;
      case "1-365perYear":
        return 365;
    }
  }

  function calculateTotal(placType, awardVal, divis, duration, limit, limNum) {
    if (placType === "DROP" || placType === "TAG") {
      if (divis === "divide") {
        return "$"+numberWithCommas(awardVal)+" divided over each application approved by you";
      } else {
        return "$"+numberWithCommas(awardVal)+" given to each application approved by you";
      }
    }
    if (placType === "PLANT") {
      return "$"+numberWithCommas(awardVal*limNum);
    }
  }

  function handleAddScholarshipCardProposalToFireStore(e) {
    e.preventDefault();
    alert("proposal submitted!");
    // props.onClickingReturnToMainMenu(); // all this function does is send user back to main menu after submitting
    let essayTopicQuestions = [e.target.essayTopicQuestion1.value];
    if (e.target.numberOfEssays.value > 1) {
      essayTopicQuestions.push(e.target.essayTopicQuestion2.value);
    }
    if (e.target.numberOfEssays.value > 2) {
      essayTopicQuestions.push(e.target.essayTopicQuestion3.value);
    }
    if (e.target.numberOfEssays.value > 3) {
      essayTopicQuestions.push(e.target.essayTopicQuestion4.value);
    }
    if (e.target.numberOfEssays.value > 4) {
      essayTopicQuestions.push(e.target.essayTopicQuestion5.value);
    }
    let recommendationLetterQuestions = [e.target.recommendationLetterQuestion1.value];
    if (e.target.numberOfRecommendationLetters.value > 1) {
      recommendationLetterQuestions.push(e.target.recommendationLetterQuestion2.value);
    }
    if (e.target.numberOfRecommendationLetters.value > 2) {
      recommendationLetterQuestions.push(e.target.recommendationLetterQuestion3.value);
    }
    if (e.target.numberOfRecommendationLetters.value > 3) {
      recommendationLetterQuestions.push(e.target.recommendationLetterQuestion4.value);
    }
    if (e.target.numberOfRecommendationLetters.value > 4) {
      recommendationLetterQuestions.push(e.target.recommendationLetterQuestion5.value);
    }

    // this is where email verification or security stuff would go before following code is executed
    // and/or this is where the page would switch over to some security questions
    // i.e. What is your Grandmas middle name kinda stuff before executing the following code

    return firestore.collection('scholarshipCardProposal').add({
      mentorID: e.target.mentorID.value,
      placementType: e.target.placementType.value,
      sustainableDevelopmentGoal: e.target.sustainableDevelopmentGoal.value,
      sdgGameTask: e.target.SDGGameTask.value,
      challengeTaskDescription: e.target.challengeTaskDescription.value,
      captureNumber: e.target.captureNumber.value,
      numberOfEssays: e.target.numberOfEssays.value,
      essayTopicQuestions: essayTopicQuestions,
      numberOfRecommendationLetters: e.target.numberOfRecommendationLetters.value,
      recommendationLetterQuestion: recommendationLetterQuestions,
      plantPlacementProtocol: e.target.plantPlacementProtocol.value,
      dropPlacmentTypeAddress: {
        country: e.target.country.value,
        state: e.target.state.value,
        city: e.target.city.value,
        streetAddress: e.target.streetAddress.value,
        zipCode: e.target.zipCode.value
      },
      tagPlacementInfo: {
        tagIMG: e.target.tagIMG.value,
        gpsCoordinates: [e.target.gpsCoordinatesLat.value, e.target.gpsCoordinatesLong.value],
        tagText: e.target.tagText.value,
      },
      scholarshipAwardInfo: {
        scholarshipAwardValue: e.target.scholarshipAwardValue.value,
        scholarshipAwardValueDivisiblity: e.target.scholarshipAwardValueDivisiblity.value,
        scholarshipAwardLimit: e.target.scholarshipAwardLimit.value,
        scholarshipAwardLimitNumber: e.target.scholarshipAwardLimitNumber.value,
        scholarshipAwardAuto: e.target.scholarshipAwardAuto.value,
      },
      scholarshipDuration: e.target.scholarshipDuration.value,
      relevantField: {
        science: RF1Value,
        technology: RF2Value,
        reality: RF3Value,
        entrepreneurship: RF4Value,
        art: ER5Value,
        math: ER6Value
      },
      eligibilityRequirement: {
        minorityRep: ER1Value,
        currentGradeEnroll: ER2Value,
        currentGradeEnrollOtherSelect: e.target.er2Select.value,
        GPA: ER3Value,
        GPARangeMax: e.target.er3Select.value, 
        GPAOtherInput: e.target.er3Input.value,
        USCitizen: ER4Value,
        pellGrant: ER5Value,
        other: ER6Value,
        otherInput: e.target.er6Input.value
      },
      ineligibilityRequirements: {
        collegeGraduate: IR1Value,
        afterHighschool: IR2Value,
        nonUSCitizen: IR3Value,
        convictedFelon: IR4Value,
        misdemeanors: IR5Value,
        other: IR6Value,
        otherInput: e.target.ir6Input.value,
      },
      achievementQualifications: {
        topTenPercent: AQ1Value,
        deansList: AQ2Value,
        honorRoll: AQ3Value,
        academicSuccess: AQ4Value,
        communityService: AQ5Value,
        volunteerService: AQ6Value,
        other: AQ7Value,
        otherInput: e.target.aq7Input.value,
      },
      eligibleStudentPlan: {
        enroll: {
          fullTime: ESSPE1Value,
          partTime: ESSPE2Value,
          coOp: ESSPE3Value,
          flexSchedule: ESSPE4Value,
          other: ESSPE5Value,
          enrollTimeOtherInput: e.target.enrollTimeOtherInput.value,
        },
        startCollege: {
          fall: ESSPSC1Value,
          winter: ESSPSC2Value,
          spring: ESSPSC3Value,
          summer: ESSPSC4Value,
          other: ESSPSC5Value,
          startCollegeTimeOtherInput: e.target.startCollegeTimeOtherInput.value,
        },
      },
      eligibleStudentChosenInstituteProgram: {
        essChosenInstitute: e.target.ESSChosenInstitute.value,
        proveCreditation: e.target.proveCreditation.value,
        proveCreditationOtherInput: e.target.proveCreditationOtherInput.value,
        provideDegree: e.target.provideDegree.value,
        provideDegreeOtherInput: e.target.provideDegreeOtherInput.value,
        completeTime: e.target.completeTime.value,
        completeTimeOtherInput: e.target.completeTimeOtherInput.value,
      },
      createdAt: firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <React.Fragment>
      <h1>Scholarship Form</h1>
      <hr />
      <form onSubmit={handleAddScholarshipCardProposalToFireStore}>
        <input type="hidden" name="mentorID" value={props.mentorID}></input>
        <p>Select Placement Type:
          <select name="placementType" onChange={(e) => setPlacementType(e.target.value)}>
            <option value="DROP">DROP</option>
            <option value="TAG">TAG</option>
            <option value="PLANT">PLANT</option>
          </select>
          <img
            src={infoIcon}
            className="tooltip"
            alt="information icon"
            title="Placement Types showcase the ways you can curate single, multiple...">
          </img>
        </p>
        <p>Select Sustainable Development Goal:
          <select name="sustainableDevelopmentGoal" onChange={(event) => setSDGSelect(event.target.value)}>
            <option value="NoPoverty">No Poverty</option>
            <option value="ZeroHunger">Zero Hunger</option>
            <option value="LifeOnLand">Life on Land</option>
            {/* later put in all 17 SDG's and */}
          </select>
        </p>
        {SDGSelect === "NoPoverty" &&
        <p>Select SDG Game Task:
          <select name="SDGGameTask">
            <option value="NPVal1">Something to do with no poverty</option>
            <option value="NPVal2">Different value to do with no poverty</option>
          </select>
        </p>}
        {SDGSelect === "ZeroHunger" &&
        <p>Select SDG Game Task:
          <select name="SDGGameTask">
            <option value="ZHVal1">ZH val 1</option>
            <option value="ZHVal2">ZH val 2</option>
          </select>
        </p>}
        {SDGSelect === "LifeOnLand" &&
        <p>Select SDG Game Task:
          <select name="SDGGameTask" onChange={(event) => setSDGGameTask(event.target.value)}>
            <option value="FastestTime">Fastest Time</option>
            <option value="CleanUpBeach">Largest Haul</option>
            <option value="BoldestStrategy">Boldest Strategy</option>
          </select>
        </p>}

        <p>Insert challenge task description
          <input
          type="text"
          name="challengeTaskDescription"
          maxLength={50}
          />
        </p>
        {SDGGameTask === "CleanUpBeach" ?
        <p>Select Capture Number:
          <select name="captureNumber">
            <option selected value="SingleCapture">Single Capture</option>
            <option value="DoubleCapture">Double Capture</option>
          </select>
        </p>:
        <input type="hidden" name="captureNumber" value=""></input>}
        <p>Select Number of Essays:
          <select name="numberOfEssays" onChange={e => setEssayNumber(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </p>
        <p>Insert Essay Topic Question 1
          <input
          type="text"
          name="essayTopicQuestion1"
          maxLength={50}
          />
        </p>
        {EssayNumber === "2" || EssayNumber === "3" || EssayNumber === "4" || EssayNumber === "5" ?
        <p>Insert Essay Topic Question 2
          <input
          type="text"
          name="essayTopicQuestion2"
          maxLength={50}
          />
        </p>:""}
        {EssayNumber === "3" || EssayNumber === "4" || EssayNumber === "5" ?
        <p>Insert Essay Topic Question 3
          <input
          type="text"
          name="essayTopicQuestion3"
          maxLength={50}
          />
        </p>:""}
        {EssayNumber === "4" || EssayNumber === "5" ?
        <p>Insert Essay Topic Question 4
          <input
          type="text"
          name="essayTopicQuestion4"
          maxLength={50}
          />
        </p>:""}
        {EssayNumber === "5" &&
        <p>Insert Essay Topic Question 5
          <input
          type="text"
          name="essayTopicQuestion5"
          maxLength={50}
          />
        </p>}
        <p>Select Number of Recommendation Letters:
          <select name="numberOfRecommendationLetters" onChange={e => setRecommendationNumber(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option> 
          </select>
        </p>
        <p>Insert Custom Question for Recommendation Letter 1
          <input
          type="text"
          name="recommendationLetterQuestion1"
          maxLength={50}
          />
        </p>
        {RecommendationNumber === "2" || RecommendationNumber === "3" || RecommendationNumber === "4" || RecommendationNumber === "5" ?
        <p>Insert Custom Question for Recommendation Letter 2
          <input
          type="text"
          name="recommendationLetterQuestion2"
          maxLength={50}
          />
        </p>:""}
        {RecommendationNumber === "3" || RecommendationNumber === "4" || RecommendationNumber === "5" ?
        <p>Insert Custom Question for Recommendation Letter 3
          <input
          type="text"
          name="recommendationLetterQuestion3"
          maxLength={50}
          />
        </p>:""}
        {RecommendationNumber === "4" || RecommendationNumber === "5" ?
        <p>Insert Custom Question for Recommendation Letter 4
          <input
          type="text"
          name="recommendationLetterQuestion4"
          maxLength={50}
          />
        </p>:""}
        {RecommendationNumber === "5" &&
        <p>Insert Custom Question for Recommendation Letter 5
          <input
          type="text"
          name="recommendationLetterQuestion5"
          maxLength={50}
          />
        </p>}
        {PlacementType === "PLANT" ?
        <p>Select Placement Protocol:
          <select name="plantPlacementProtocol" onChange={(e) => setPlantPlacementProtocol(e.target.value)}>
            <option value="DROP">DROP</option>
            <option value="TAG">TAG</option>
          </select>
        </p>:
        <input type="hidden" name="plantPlacementProtocol" value=""></input>}
        <hr />

        {PlacementType === "DROP" || PlacementType === "PLANT" && PlantPlacementProtocol === "DROP" ?
        <div>
        <h3>Drop Address</h3>
        <p>Country:
          <input
          name='country'
          defaultValue='USA'
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
        <hr />
        </div>:
        <div>
        <input type="hidden" name="country" value=""></input>
        <input type="hidden" name="state" value=""></input>
        <input type="hidden" name="city" value=""></input>
        <input type="hidden" name="streetAddress" value=""></input>
        <input type="hidden" name="zipCode" value=""></input>
        </div>}
        {PlacementType === "TAG" || PlacementType === "PLANT" && PlantPlacementProtocol === "TAG" ?
        <div>
        <p>Insert Tag GPS Coordinates</p>
        {/* later switch this out for googlemaps app to get gps coordinates */}
        <p>Latitude
          <input
          type="number"
          name="gpsCoordinatesLat"
          />
        </p>
        <p>Longitude
          <input
          type="number"
          name="gpsCoordinatesLong"
          />
        </p>
        <p>Upload IMG/JPEG files
          <input
          type="file"
          name="tagIMG"
          />
          {/* be extra careful with the safety procedures for this one */}
          {/* also need to figure out how to make it so you can put up to 3 images */}
        </p>
        <p>Insert Tag Info
          <input
          type="text"
          name="tagText"
          />
        </p>
        <hr />
        </div>:
        <div>
        <input type="hidden" name="gpsCoordinatesLat" value=""></input>
        <input type="hidden" name="gpsCoordinatesLong" value=""></input>
        <input type="hidden" name="tagIMG" value=""></input>
        <input type="hidden" name="tagText" value=""></input>
        </div>}

        <p>Input Scholarship Award Value (U.S. Dollars) $
          <input
          type="number"
          name="scholarshipAwardValue"
          placeholder="0.00"
          step="0.01"
          min="0"
          max="999999.99"
          pattern="^\d*(\.\d{0,2})?$"
          onChange={(event) => setScholarshipAwardValue(event.target.value)}
          />
        </p>
        {PlacementType === "DROP" || PlacementType === "TAG" ?
        <div>
        <p>How many awards should this fund?
          <select name="scholarshipAwardValueDivisiblity" onChange={(e) => setScholarshipAwardDivisibility(e.target.value)}>
            <option value="single">Single</option>
            <option value="divided">Divided</option>
          </select>
        </p>
        <p>Select Duration for this Scholarship Opportunity:
          <select name="scholarshipDuration" onChange={(e) => setScholarshipDuration(e.target.value)}>
            <option value="1 Hour">1 Hour</option>
            <option value="1 Day">1 Day</option>
            <option value="1 Week">1 Week</option>
            <option value="1 Month">1 Month</option>
            <option value="1 Year">1 Year</option>
          </select>
        </p>
        </div>:
        <div>
        <input type="hidden" name="scholarshipAwardValueDivisiblity" value=""></input>
        <input type="hidden" name="scholarshipDuration" value=""></input>
        </div>}
        {PlacementType === "PLANT" ?
        <div>
          <p>Choose Award Limits:
            <select name="scholarshipAwardLimit" onChange={(e) => setScholarshipAwardLimit(e.target.value)}>
              <option value="1-60perHour">1-60 Awards Per Hour</option>
              <option value="1-24perDay">1-24 Awards Per Day</option>
              <option value="1-7perWeek">1-7 Awards Per Week</option>
              <option value="1-30perMonth">1-30 Awards Per Month</option>
              <option value="1-365perYear">1-365 Awards Per Year</option>
            </select>
          </p>
          <p>Number of Awards:
            <input
            type="number"
            name="scholarshipAwardLimitNumber"
            placeholder="1"
            step="1"
            min="1"
            max={calcAwardMax(ScholarshipAwardLimit)}
            onChange={(event) => setScholarshipAwardLimitNumber(event.target.value)}
            />
            {/* double check max setting on this, doesn't seem to be working */}
          </p>
          <p>Automatically Award:
            <select name="scholarshipAwardAuto">
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
          </p>
        </div>:
        <div>
        <input type="hidden" name="scholarshipAwardLimit" value=""></input>
        <input type="hidden" name="scholarshipAwardLimitNumber" value=""></input>
        <input type="hidden" name="scholarshipAwardAuto" value=""></input>
        </div>}
        
        <p>Total Expected Scholarship Awards Value:
          <b>{calculateTotal(PlacementType, ScholarshipAwardValue, ScholarshipAwardDivisibility, ScholarshipDuration, ScholarshipAwardLimit, ScholarshipAwardLimitNumber)}</b>
        </p>

        <p>Select the appropriate field(s) relevant to the purpose of your scholarship application:
          <ul>
            <li><input type="checkbox" name="RF1" onChange={() => setRF1Value(!RF1Value)}></input>Science</li>
            <li><input type="checkbox" name="RF2" onChange={() => setRF2Value(!RF2Value)}></input>Technology</li>
            <li><input type="checkbox" name="RF3" onChange={() => setRF3Value(!RF3Value)}></input>Reality</li>
            <li><input type="checkbox" name="RF4" onChange={() => setRF4Value(!RF4Value)}></input>Entreprenuership</li>
            <li><input type="checkbox" name="RF5" onChange={() => setRF5Value(!RF5Value)}></input>Art</li>
            <li><input type="checkbox" name="RF6" onChange={() => setRF6Value(!RF6Value)}></input>Math</li>
          </ul>
        </p>

        <p>Select ONE or More Eligibility Requirements:
          <ul>
            <li><input type="checkbox" name="ER1" onChange={() => setER1Value(!ER1Value)}></input>Minority Representative</li>
            <li><input type="checkbox" name="ER2" onChange={() => setER2Value(!ER2Value)}></input>Current Grade School Enrollment Status</li>
            {ER2Value === true ?
            <select name="er2Select">
              <option value="elementarySchool">Elementary School</option>
              <option value="middleSchool">Middle School</option>
              <option value="highSchool">High School</option>
            </select>:
            <input type="hidden" name="er2Select" value=""></input>}
            <li><input type="checkbox" name="ER3" onChange={() => setER3Value(!ER3Value)}></input>GPA</li>
            {ER3Value === true ?
            <div>
              <p>Select Range:
              <select name="er3Select" onChange={(e) => setER3SelectValue(e.target.value)}>
                <option value={4}>0-4</option>
                <option value={5}>0-5</option>
                <option value={10}>0-10</option>
              </select>
              </p>
              <p>Input GPA Requirement:
                <input
                type="number"
                name="er3Input"
                defaultValue={0}
                min={0.0}
                max={ER3SelectValue}
                step={0.1}
                />
              {/* later change this to a slider input */}
              </p>
            </div>:
            <div>
              <input type="hidden" name="er3Select" value=""></input>
              <input type="hidden" name="er3Input" value={0}></input>
            </div>}
            <li><input type="checkbox" name="ER4" onChange={() => setER4Value(!ER4Value)}></input>U.S. Citizen</li>
            <li><input type="checkbox" name="ER5" onChange={() => setER5Value(!ER5Value)}></input>Pell Grant Eligible / Significant Unmet Financial Need</li>
            <li><input type="checkbox" name="ER6" onChange={() => setER6Value(!ER6Value)}></input>Other</li>
            {ER6Value === true ?
            <p>Insert Text Here:
              <input
              type="text"
              name="er6Input"
              defaultValue=""
              maxLength={25}
              />
            </p>:
            <input type="hidden" name="er6Input" value=""></input>}
          </ul>
        </p>
        <p>Select ZERO or More Ineligibility Requirements:
          <ul>
            <li><input type="checkbox" name="IR1" onChange={() => setIR1Value(!IR1Value)}></input>College Graduate</li>
            <li><input type="checkbox" name="IR2" onChange={() => setIR2Value(!IR2Value)}></input>More than (+1) Years After Highschool</li>
            <li><input type="checkbox" name="IR3" onChange={() => setIR3Value(!IR3Value)}></input>Non-U.S. Citizen</li>
            <li><input type="checkbox" name="IR4" onChange={() => setIR4Value(!IR4Value)}></input>Convicted Felon</li>
            <li><input type="checkbox" name="IR5" onChange={() => setIR5Value(!IR5Value)}></input>3+ Misdemeanors</li>
            <li><input type="checkbox" name="IR6" onChange={() => setIR6Value(!IR6Value)}></input>Other</li>
            {IR6Value === true ?
            <p>Insert Text Here:
              <input
              type="text"
              name="ir6Input"
              defaultValue=""
              maxLength={25}
              />
            </p>:
            <input type="hidden" name="ir6Input" value=""></input>}
          </ul>
        </p>
        <p>Select ONE or More Achievement Qualifications:
          <ul>
            <li><input type="checkbox" name="AQ1" onChange={() => setAQ1Value(!AQ1Value)}></input>Top 10% of Class</li>
            <li><input type="checkbox" name="AQ2" onChange={() => setAQ2Value(!AQ2Value)}></input>Dean's List</li>
            <li><input type="checkbox" name="AQ3" onChange={() => setAQ3Value(!AQ3Value)}></input>Honor Roll</li>
            <li><input type="checkbox" name="AQ4" onChange={() => setAQ4Value(!AQ4Value)}></input>Academic Success</li>
            <li><input type="checkbox" name="AQ5" onChange={() => setAQ5Value(!AQ5Value)}></input>Community Service</li>
            <li><input type="checkbox" name="AQ6" onChange={() => setAQ6Value(!AQ6Value)}></input>Volunteer Service</li>
            <li><input type="checkbox" name="AQ7" onChange={() => setAQ7Value(!AQ7Value)}></input>Other</li>
            {AQ7Value === true ?
            <p>Insert Text Here:
              <input
              type="text"
              name="aq7Input"
              defaultValue=""
              maxLength={25}
              />
            </p>:
            <input type="hidden" name="aq7Input" value=""></input>}
          </ul>
        </p>
        <p>Eligible Student Seekers Must Plan to ...
          <ul>
            <p>Enroll
              <li><input type="checkbox" name="ESSPE1" onChange={() => setESSPE1Value(!ESSPE1Value)}></input>Full Time</li>
              <li><input type="checkbox" name="ESSPE2" onChange={() => setESSPE2Value(!ESSPE2Value)}></input>Part Time</li>
              <li><input type="checkbox" name="ESSPE3" onChange={() => setESSPE3Value(!ESSPE3Value)}></input>Co-Op</li>
              <li><input type="checkbox" name="ESSPE4" onChange={() => setESSPE4Value(!ESSPE4Value)}></input>Flex Schedule</li>
              <li><input type="checkbox" name="ESSPE5" onChange={() => setESSPE5Value(!ESSPE5Value)}></input>Other</li>
              {ESSPE5Value === true ?
              <p>Insert Text Here:
                <input
                type="text"
                name="enrollTimeOtherInput"
                defaultValue=""
                maxLength={25}
                />
              </p>:
              <input type="hidden" name="enrollTimeOtherInput" value=""></input>}
            </p>
            <p>Start College
              <li><input type="checkbox" name="ESSPSC1" onChange={() => setESSPSC1Value(!ESSPSC1Value)}></input>Fall</li>
              <li><input type="checkbox" name="ESSPSC2" onChange={() => setESSPSC2Value(!ESSPSC2Value)}></input>Winter</li>
              <li><input type="checkbox" name="ESSPSC3" onChange={() => setESSPSC3Value(!ESSPSC3Value)}></input>Spring</li>
              <li><input type="checkbox" name="ESSPSC4" onChange={() => setESSPSC4Value(!ESSPSC4Value)}></input>Summer</li>
              <li><input type="checkbox" name="ESSPSC5" onChange={() => setESSPSC5Value(!ESSPSC5Value)}></input>Other</li>
              {ESSPSC5Value === true ?
              <p>Insert Text Here:
                <input
                type="text"
                name="startCollegeTimeOtherInput"
                defaultValue=""
                maxLength={25}
                />
              </p>:
              <input type="hidden" name="startCollegeTimeOtherInput" value=""></input>}
            </p>
          </ul>
        </p>
        <p>Eligible Student Seeker's Chosen Institution Program Must ...
          <ul>
            <select name="ESSChosenInstitute" onChange={e => setESSChosenInstitute(e.target.value)}>
              <option value="prove">Prove</option>
              <option value="provide">Provide</option>
              <option value="complete">Complete</option>
            </select>
            {ESSChosenInstitute === "prove" ?
            <select name="proveCreditation" onChange={e => setProveValue(e.target.value)}>
              <option value="accreditation">Accreditation</option>
              <option value="non-accreditation">Non-Accreditation</option>
              <option value="other">Other</option>
            </select>:
            <input type="hidden" name="proveCreditation" value=""></input>}
            {ESSChosenInstitute === "prove" && ProveValue === "other" ?
            <input
            type="text"
            name="proveCreditationOtherInput"
            defaultValue=""
            maxLength={25}
            />:
            <input type="hidden" name="proveCreditationOtherInput" value=""></input>}
            {ESSChosenInstitute === "provide" ?
            <select name="provideDegree" onChange={e => setProvideValue(e.target.value)}>
              <option value="certificateOfCompletion">Certificate Of Completion</option>
              <option value="professionalCertification">Professional Certification</option>
              <option value="associatesDegree">Associates Degree</option>
              <option value="bachelorsDegree">Bachelor's Degree</option>
              <option value="mastersDegree">Master's Degree</option>
              <option value="doctorateDegree">Doctorate Degree (PhD, EdD, MD, JD, etc)</option>
              <option value="other">Other</option>
            </select>:
            <input type="hidden" name="provideDegree" value=""></input>}
            {ESSChosenInstitute === "provide" && ProvideValue === "other" ?
            <input
            type="text"
            name="provideDegreeOtherInput"
            defaultValue=""
            maxLength={25}
            />:
            <input type="hidden" name="provideDegreeOtherInput" value=""></input>}
            {ESSChosenInstitute === "complete" ?
            <select name="completeTime" onChange={e => setCompleteValue(e.target.value)}>
              <option value="18months">Accelerated 18 months</option>
              <option value="2years">2 Years</option>
              <option value="4years">4 Years</option>
              <option value="5years">5 Years</option>
              <option value="6years">6 Years</option>
              <option value="8+years">8+ Years</option>
              <option value="other">Other</option>
            </select>:
            <input type="hidden" name="completeTime" value=""></input>}
            {ESSChosenInstitute === "complete" && CompleteValue === "other" ?
            <input
            type="text"
            name="completeTimeOtherInput"
            defaultValue=""
            maxLength={25}
            />:
            <input type="hidden" name="completeTimeOtherInput" value=""></input>}
          </ul>
        </p>
        
        <button type="submit">Submit Scholarship Proposal</button>
      </form>
      <button type="button" onClick={props.onClickingReturnToMainMenu}>Main Menu</button>
    </React.Fragment>
  );
}

export default ScholarshipForm;
