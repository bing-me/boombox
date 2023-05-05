import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Report Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Lifebouy</Typography>
        <Typography color={medium}>https://www.lifebuoy.com/global</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Over the last century, Lifebuoy has grown to become a worldwide leader,
        bringing hygiene and better health to people around the world
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
