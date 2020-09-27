import React from "react";
import { TextField, Button } from "@material-ui/core";

const WorkersForm = ({
  hours,
  name,
  money,
  surname,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <>
      <TextField
        name="name"
        value={name}
        onChange={handleInputChange}
        label="Name"
      />
      <TextField
        name="surname"
        value={surname}
        onChange={handleInputChange}
        label="Surname"
      />
      <TextField
        name="money"
        value={money}
        onChange={handleInputChange}
        label="Money"
      />
      <TextField
        name="hours"
        value={hours}
        onChange={handleInputChange}
        label="Hours"
      />
      <Button onClick={handleSubmit}>Send</Button>
    </>
  );
};

export default WorkersForm;
