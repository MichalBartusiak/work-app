import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";
import WorkersForm from "../WorkersForm/WorkersForm";

const Workers = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    money: 0,
    hours: 0,
    summary: 0,
  });
  const [data, setData] = useState([]);
  //Form logic
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
    setState({ name: "", surname: "", money: 0, hours: 0, summary: 0 });
  };
  // MUI Table data
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
      <WorkersForm
        name={state.name}
        surname={state.surname}
        money={state.money}
        hours={state.hours}
        summary={state.summary}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Workers;
