import { useTheme } from "@emotion/react";
import {
	Box,
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	Zoom,
} from "@mui/material";
import { styled } from "@mui/system";
import { footerInfo } from "./info";

const imageUrl = require("../../assets/images/design.jpg");

const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: "#000000",
	color: "#ffffff",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}));

const StyledGridImage = styled(Grid)(({ theme }) => ({
	height: "60vh",
	backgroundImage: `url(${imageUrl})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
}));


const StyledGridItems = styled(Grid)(({ theme }) => ({
	'&:not(:last-child)': {
		borderBottom: `1px solid white`,
	},
}));

const Footer = () => {
	const theme = useTheme();

	return (
		<StyledFooter>
			<StyledGrid container spacing={3}>
				<StyledGridImage item lg={7} xl={7} sx={{
					display: {
						xs: "none",
						sm:"none",
						md: "none",
						lg: "block",
						xl: "block"
					}
				}}>

				</StyledGridImage>

				<StyledGridItems item xs={12} sm={12} md={12} lg={5} xl={5} >
					<Stack direction="column" spacing={3} >
						<Typography variant="h2" >
							Contact{" "}
							<span style={{ color: theme.palette.primary.main }}>
								Us
							</span>
						</Typography>
						<>
							<Grid container spacing={3}>
								{
									footerInfo.map((el, i) => (
										<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
											<Stack direction="column" spacing={1.5}>
												<Typography variant="h5">
													{el.title}
												</Typography>
												<Stack direction="column">
													{
														el.texts.map((txt, index) => (
															<Typography variant="body1" key={index}>
																{txt}
															</Typography>
														))
													}
												</Stack>
											</Stack>
										</Grid>
									))
								}
							</Grid>
						</>
					</Stack>
				</StyledGridItems>
			</StyledGrid>
		</StyledFooter>
	);
};

export default Footer;
