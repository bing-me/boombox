import { Box } from "@mui/material";

const API_URL = process.env.REACT_APP_API_URL

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${API_URL}assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
