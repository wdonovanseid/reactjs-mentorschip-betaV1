import React from "react";
import PropTypes from "prop-types";

function TeamColorQuestionaire(props) {
  return (
    <React.Fragment>
      <h3>Team Color Questionaire</h3>
      <p>Select either "A" or "B" that most accurately discribes you.</p>
      <form onSubmit={props.formSubmissionHandler}>
        <ul>
          <li>1.
            <p><input type="radio" name="q1" value={1}></input>A. At home, my room has organized drawer and closets. I even try to organize other things around the house.</p>
            <p><input type="radio" name="q1" value={0}></input>B. At home, I like the "lived-in" look. I clean as I see a need and when I have the time.</p>
          </li>
          <li>2.
            <p><input type="radio" name="q2" value={1}></input>A. My desk is usually clean and has everything in place.</p>
            <p><input type="radio" name="q2" value={0}></input>B. I leave my work out on my desk so I can work as I am inspired by ideas.</p>
          </li>
          <li>3.
            <p><input type="radio" name="q3" value={1}></input>A. I like using the "tried and true" method.</p>
            <p><input type="radio" name="q3" value={0}></input>B. I like creating new methods.</p>
          </li>
          <li>4.
            <p><input type="radio" name="q4" value={1}></input>A. I follow directions carefully when I build a model, make a craft, etc.</p>
            <p><input type="radio" name="q4" value={0}></input>B. I like to build a model my way, making my own creation.</p>
          </li>
          <li>5.
            <p><input type="radio" name="q5" value={1}></input>A. I complete one project at a time.</p>
            <p><input type="radio" name="q5" value={0}></input>B. I like to start many different projects, but do not like to finish them.</p>
          </li>
          <li>6. When I am asked to write a report on a subject, I........
            <p><input type="radio" name="q6" value={1}></input>A. research information, then outline and organize my writing.</p>
            <p><input type="radio" name="q6" value={0}></input>B. work in my own self-inspired direction.</p>
          </li>
          <li>7. When I had to do a project in class, I.....
            <p><input type="radio" name="q7" value={1}></input>A. used my parents' ideas, a book's illustrated project or modeled another student's project who received an "A+" from my teacher.</p>
            <p><input type="radio" name="q7" value={0}></input>B. loved the challenge, and like a "mad scientist," I produced a unique project.</p>
          </li>
          <li>8. When I am in charge of a big job with many people working, I usually...
            <p><input type="radio" name="q8" value={1}></input>A. organize, give everyone their responsibilities, make lists, and make sure everyone finishes their part on time.</p>
            <p><input type="radio" name="q8" value={0}></input>B. work at my own pace, let others work on the job as they want. I want to take care of needs/problems as they arise.</p>
          </li>
          <li>9. Which of these activities would you like to do the most?
            <p><input type="radio" name="q9" value={1}></input>A. planning the details for a trip/project</p>
            <p><input type="radio" name="q9" value={0}></input>B. creating an original art form</p>
          </li>
        </ul>
        <button type="submit">Submit Questionaire</button>
      </form>
      <button type="button" onClick={props.onClickingReturnToProfile}>Return to Profile</button>
    </React.Fragment>
  );
}

TeamColorQuestionaire.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default TeamColorQuestionaire;