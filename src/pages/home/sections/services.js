import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import TitleSubtitle from "../../../layout/titlesubtitle";

const StyledWrapper = styled(Box)(({ theme }) => ({
	marginTop: "-50px",
	paddingTop: "50px",
	paddingBottom: "50px",
	backgroundColor: "red"
}));

const HomeServices = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<TitleSubtitle
					title="What we do"
					color="#fff"
				/>
			</Container>
		</StyledWrapper>
	)
}

export default HomeServices