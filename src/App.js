import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MainContent from "./components/MainContent/MainContent";
import { Grid, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch as RouterSwitch,
} from "react-router-dom";
import theme from "./components/themes/Theme";
import Workers from "./components/Workers/Workers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Menu />
            </Grid>
            <Grid item xs={12}>
              <RouterSwitch>
                <Route exact path="/" component>
                  <MainContent />
                </Route>
                <Route path="/workers">
                  <Workers />
                </Route>
              </RouterSwitch>
            </Grid>
          </Grid>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
