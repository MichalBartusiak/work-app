import React from "react";
import { Typography, Paper, Card } from "@material-ui/core";
const MainContent = () => {
  return (
    <div className="mainContent">
      <Typography gutterBottom={true} variant="h2">
        Czym jest Work App?
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Work App jest aplikacją przeznaczoną dla niewielkich przedsiębiorstw,
        zatrudniających małą liczbe ludzi. Pomaga ona w zarządzaniu
        pracownikami, ich stawkami godzinowmi oraz wypłatam, co pozwala na
        bieżąco śledzić wydatki firmy na pracowników. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Possimus non hic cupiditate dolorum
        voluptate eligendi doloremque culpa, aperiam asperiores? Incidunt vel
        tempore hic numquam? Debitis atque aliquid similique placeat obcaecati?
      </Typography>
    </div>
  );
};

export default MainContent;
