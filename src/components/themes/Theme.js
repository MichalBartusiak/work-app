const { createMuiTheme, responsiveFontSizes } = require("@material-ui/core");

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
export default theme;
