import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import profileImage from "../../dist/images/SanjayAvatar.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to Sanjay's Home</h1>
      <Avatar
        alt="Sanjay Profile Picture"
        src={profileImage}
        sx={{ width: "10rem", height: "10rem", marginTop: "1rem" }}
      />
      <Stack direction={"row"} spacing={5} sx={{ marginTop: "2rem" }}>
        <a href="https://www.linkedin.com/in/sanjay-wilson/" target="_blank">
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </a>
        <a href="https://github.com/snjwilson" target="_blank">
          <GitHubIcon sx={{ fontSize: 50 }} />
        </a>
        <a href="mailto:sanjaywilsonktm@gmail.com" target="_blank">
          <EmailIcon sx={{ fontSize: 50 }} />
        </a>
      </Stack>
    </section>
  );
};
