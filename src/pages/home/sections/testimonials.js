import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "../../../layout/titlesubtitle";
import { testimonials } from "../info";

import { FaQuoteLeft } from "react-icons/fa"

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px"
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: "90px",
	height: "90px",
	border: `5px solid ${theme.palette.primary.main}`,
}))

const styledIcon = {
	position: "relative",
	zIndex: 5,
	fontSize: "50px"
}

const Testimonials = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title="Our Testimonials"
						subtitle="What our happy customers say"
					/>
					
					<div>
						<Grid container spacing={3}>
							{
								testimonials.map((el, i) => (
									<Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={i}>
										<Card>
											<CardContent>
												<FaQuoteLeft style={styledIcon}/>
												
												<Stack direction="column" spacing={3}>
													<Typography variant="body1" color="text.secondary">
														{el.description}
													</Typography>

													<Stack direction="row" spacing={3}>

														<StyledAvatar src={el.image} alt={el.fullname + " testimonial"}/>
														<Stack direction="column" >
															<Typography variant="h4" color="text.secondary">
																{el.fullname}
															</Typography>

															<Typography variant="subtitle1" color="text.secondary">
																{el.role}
															</Typography>
														</Stack>
													</Stack>

												</Stack>
											</CardContent>
										</Card>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default Testimonials