import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(theme => ({
	typographyStyles: {
		flex: 1,
		color: "#122033"
	}
}));
const Header = () => {
	const classes = useStyles();
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: "#f5f5f5",
				boxShadow: 1
			}}
		>
			<Toolbar>
				<Typography className={classes.typographyStyles}>
					{"The header"}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
