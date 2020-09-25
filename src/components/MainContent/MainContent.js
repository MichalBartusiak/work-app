import React from "react";
import { Typography } from "@material-ui/core";
const MainContent = () => {
  return (
    <div className="mainContent">
      <Typography gutterBottom={true} variant="h2">
        Czym jest Work App?
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Work App jest aplikacją przeznaczoną dla niewielkich przedsiębiorstw,
        zatrudniających małą liczbe ludzi. Pomaga ona na bieżąco śledzić wydatki
        firmy na pracowników.
      </Typography>
    </div>
  );
};

export default MainContent;
