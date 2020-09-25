import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { TextField, Button } from "@material-ui/core";
const Workers = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    money: "",
    hours: "",
    summary: 0,
  });
  const [data, setData] = useState([]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, money, hours } = state;
    setData([
      ...data,
      [name, surname, money, hours, (state.summary = money * hours)],
    ]);
    setState({ name: "", surname: "", money: "", hours: "", summary: "" });
  };
  const columns = ["Imię", "Nazwisko", "zł/h", "Liczba godzin", "Wypłata"];
  const options = {
    filterType: "checkbox",
  };
  return (
    <div className="workers">
      <MUIDataTable
        title={"Pracownicy"}
        data={data}
        columns={columns}
        options={options}
      />
      <TextField
        name="name"
        value={state.name}
        onChange={handleInputChange}
        label="Name"
      />
      <TextField
        name="surname"
        value={state.surname}
        onChange={handleInputChange}
        label="Surname"
      />
      <TextField
        name="money"
        value={state.money}
        onChange={handleInputChange}
        label="Money"
      />
      <TextField
        name="hours"
        value={state.hours}
        onChange={handleInputChange}
        label="Hours"
      />
      <Button onClick={handleSubmit}>Send</Button>
    </div>
  );
};

export default Workers;
