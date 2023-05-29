import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const ReusableBanner = () => {
	return (
		<StyledWrapper>
			<div>ReusableBanner</div>
		</StyledWrapper>
	)
}

export default ReusableBanner