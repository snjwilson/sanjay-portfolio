import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

export const Footer = () => {
  return (
    <footer>
      Made with <FavoriteIcon sx={{ fontSize: "90%", color: red[500] }} /> by
      Sanjay Wilson
    </footer>
  );
};
