import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Banner from "./sections/banner";
import Why from "./sections/why";
import Gallery from "./sections/gallery";
import Testimonials from "./sections/testimonials";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Home = () => {
	return (
		<StyledWrapper>
			<Banner/>
			<Why/>
			<Gallery/>
			<Testimonials/>
		</StyledWrapper>
	)
}

export default Home