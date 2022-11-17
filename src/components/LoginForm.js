import React from "react";

function LoginForm() {
  return (
    <form className="FormElement">
      <label htmlFor="userName">UserName</label>
      <input type="texts" name="UserName" />

      <label htmlFor="userPassword">Password</label>
      <input type="texts" name="Password" />

      <button type="submit">submit</button>
    </form>
  );
}

export default LoginForm;
