import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core/";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));
const MainView = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        xs={12}
        sm={12}
        md={12}
        container
        justify="space-evenly"
        alignItems="center"
        direction="row"
        // style={{ backgroundColor: "black" }}
      >
        <Button variant="contained" color="primary">
          Baza pracowników
        </Button>
        <Button variant="contained" color="primary">
          Dodaj nowego pracownika
        </Button>
      </Grid>
    </>
  );
};

export default MainView;
