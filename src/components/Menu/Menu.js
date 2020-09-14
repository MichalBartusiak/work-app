import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Grid container>
        <AppBar position="static">
          <Toolbar>
            <Grid item xs={7} md={3}>
              <Typography variant="h4" component="h1">
                <NavLink exact to="/" activeClassName="active">
                  Work App
                </NavLink>
              </Typography>
            </Grid>
            <Grid item xs={5} md={9}>
              <Typography variant="h6">
                <NavLink exact to="/workers" activeClassName="active">
                  Pracownicy
                </NavLink>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default Menu;
