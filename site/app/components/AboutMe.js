import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Looks3Icon from "@mui/icons-material/Looks3";
import { red, green } from "@mui/material/colors";

export const AboutMe = () => {
  return (
    <section>
      <h2>
        Software developer with{" "}
        <Looks3Icon sx={{ fontSize: 40, color: green[400] }} /> years of
        experience. I <FavoriteIcon sx={{ color: red[500] }} /> black coffee and
        dogs.
      </h2>
      <h2>JavaScript is my go to programming language.</h2>
    </section>
  );
};
