import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
const MainView = () => {
  return (
    <>
      <Grid container>
        <AppBar position="static">
          <Toolbar>
            <Grid item xs={6} md={2}>
              <Typography variant="h6">Homepage</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="h6">Baza pracowników</Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default MainView;
