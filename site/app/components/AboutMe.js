import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Looks5Icon from "@mui/icons-material/Looks5";
import { red, green } from "@mui/material/colors";

export const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>
        Software developer with{" "}
        <Looks5Icon sx={{ fontSize: 40, color: green[400] }} /> years of
        experience. I <FavoriteIcon sx={{ color: red[500] }} /> black coffee and
        dogs.
      </h2>
      <h2>JavaScript is my go to programming language.</h2>
    </section>
  );
};
