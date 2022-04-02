import { Grid, Typography, Box, Container } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
const Home = () => {
	return (
		<>
			<Header />
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid
						item
						xs={12}
						sx={{
							height: "100vh",
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Box
							sx={{
								mx: "auto",
								width: 200,
								p: 1,
								m: 1,
								bgcolor: theme =>
									theme.palette.mode === "dark" ? "#101010" : "grey.50",
								color: theme =>
									theme.palette.mode === "dark" ? "grey.300" : "grey.800",
								border: "1px solid",
								borderColor: theme =>
									theme.palette.mode === "dark" ? "grey.800" : "grey.300",
								borderRadius: 2,
								textAlign: "center",
								fontSize: "0.875rem",
								fontWeight: "700"
							}}
						>
							Home page
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home;
