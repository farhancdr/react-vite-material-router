import React from "react";
import { Link as RLink } from "react-router-dom";

import { Box, Button, Link } from "@mui/material";
import "./style.css";
const NotFound = () => {
	return (
		<>
			<div className="notFound">
				<div id="fx" title="404">
					404
				</div>
				<Link
					className="link"
					as={RLink}
					to="/"
					variant="body2"
					sx={{
						textDecoration: "none",
						fontSize: "1.5rem",
						letterSpacing: "0.5rem",
						color: "text.primary",
						"&:hover": {
							textDecoration: "underline",
							color: "#f50057"
						}
					}}
				>
					{"Go to home"}
				</Link>
			</div>
		</>
	);
};

export default NotFound;
