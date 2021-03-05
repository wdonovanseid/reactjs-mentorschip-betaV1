import React from "react";

function RegisterAccountForm(props) {
  return (
    <React.Fragment>
      <h1>RegisterAccount</h1>
      <form onSubmit={props.onRegisterFormSubmission}>
        <p>
          <input
          type="text"
          name="userEmail"
          maxLength={20}
          pattern="[]"
          title="u need to do this"
          // required
          />
        </p>
        <p>
          <input
          type="password"
          name="userPassword"
          maxLength={20}
          // required
          />
        </p>
        <button type="submit">Register</button>
      </form>
      <button type="button" onClick={props.onClickingReturnToLogin}>Return To Login</button>
    </React.Fragment>
  );
}

export default RegisterAccountForm;
