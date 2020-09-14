import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";

const Menu = () => {
  // resposive MaterialUI fonts
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <AppBar position="static">
            <Toolbar>
              <Grid item xs={6} md={3}>
                <Typography variant="h4">Work App</Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6">Homepage</Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6">Pracownicy</Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Menu;
