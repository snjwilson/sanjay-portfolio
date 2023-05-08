import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import profileImage from "../dist/images/SanjayAvatar.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Looks3Icon from "@mui/icons-material/Looks3";
import { red, green } from "@mui/material/colors";

export default function App() {
  return (
    <>
      <section>
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
      <section>
        <h2>
          Software developer with{" "}
          <Looks3Icon sx={{ fontSize: 40, color: green[400] }} /> years of
          experience. I <FavoriteIcon sx={{ color: red[500] }} /> black coffee
          and dogs. Check out some of my work below
        </h2>
      </section>
    </>
  );
}
