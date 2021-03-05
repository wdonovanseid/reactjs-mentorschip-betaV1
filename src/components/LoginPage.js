import React from "react";

function LoginPage(props) {
  return (
    <React.Fragment>
      <h1>LoginPage</h1>
      <form onSubmit={props.onLoginFormSubmission}>
        <p>
          <input
          type="text"
          name="userEmail"
          maxLength={20}
          // pattern="[]"
          // title="put here what user needs to do to satisfy pattern"
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
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={props.onClickingRegisterNewAccount}>Register new Account</button>
      <button type="button" onClick={props.onClickingReturnToStart}>Return To Start</button>
    </React.Fragment>
  );
}

export default LoginPage;
