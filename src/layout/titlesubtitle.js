import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Stack)(({ theme }) => ({}));

const TitleSubtitle = ({ title, subtitle, text, color, center }) => {
	return (
		<StyledWrapper
			spacing={1.5}
			direction="column"
			alignItems={center ? "center" : "flex-start"}
		>
			<Typography
				variant="h4"
				color="text.primary"
				sx={{
					textTransform: "uppercase",
					color: color ? color : "inherit",
				}}
			>
				{title}
			</Typography>

			<Typography
				variant="h3"
				color="text.primary"
				sx={{ color: color ? color : "inherit" }}
			>
				{subtitle ? subtitle : ""}
			</Typography>

			{text
				? text.map((p, i) => (
						<Typography
							variant="body1"
							color="text.secondary"
							key={i}
						>
							{p}
						</Typography>
				  ))
				: ""}
		</StyledWrapper>
	);
};

export default TitleSubtitle;
