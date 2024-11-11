import { Avatar, Apresentation } from "@/components";
import "./aboutMe.css";
import { FC } from "react";
import { Box } from "@mui/material";

export const AboutMe: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div className="about-me">
        <div className="avatar">
          <Avatar />
        </div>
        <div className="apresentation">
          <Apresentation />
        </div>
      </div>
    </Box>
  );
};
