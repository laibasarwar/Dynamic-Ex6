import React from "react";

function CreateUserForm() {
  return (
    <form className="FormElement">
      <label htmlfor="userName">UserName</label>
      <input type="texts" name="UserName" />
      <button type="submit">submit</button>
    </form>
  );
}

export default CreateUserForm;
