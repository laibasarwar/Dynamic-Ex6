import React from "react";

function LoginForm() {
  return (
    <form className="FormElement">
      <label htmlfor="userName">UserName</label>
      <input type="texts" name="UserName" />
      <label htmlfor="userPassword">Password</label>
      <input type="texts" name="Password" />
      <button type="submit">submit</button>
    </form>
  );
}

export default LoginForm;
