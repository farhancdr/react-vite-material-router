import { createTheme } from "@mui/material/styles";
import { red, green, blue, yellow } from "@mui/material/colors";
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
			primary: "#19857b",
			secondary: green.A400
		}
	},
	typography
});

export default theme;
