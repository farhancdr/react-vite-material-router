import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./auth/UserProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "./theme/GlobalStyles";

import theme from "./theme";

import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<GlobalStyles />
			<Router>
				<UserProvider>
					<App />
				</UserProvider>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
