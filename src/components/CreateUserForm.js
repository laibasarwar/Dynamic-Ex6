import React from "react";

function CreateUserForm(signUpUser) {
  return (
    <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />

      <button type="submit">submit</button>
    </form>
  );
}

export default CreateUserForm;
