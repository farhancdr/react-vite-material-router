import { createTheme } from "@mui/material/styles";
import { red, green, grey } from "@mui/material/colors";
import typography from "./typography";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#19857b"
		},
		secondary: {
			main: "#19857b"
		},
		error: {
			main: red.A400
		},
		text: {
			primary: "#616161",
			secondary: grey.A700
		}
	},
	typography
});

export default theme;
