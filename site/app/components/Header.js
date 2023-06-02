import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    attachScrollHandler();
    return () => removeScrollHandler();
  }, []);

  const attachScrollHandler = () => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  };

  const removeScrollHandler = () => {
    window.removeEventListener("scroll", () => {
      console.log("removed scroll handler");
    });
  };

  return (
    <>
      <Stack
        direction={"row"}
        spacing={5}
        justifyContent={"flex-end"}
        alignItems={"center"}
        sx={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          zIndex: "100",
          position: "sticky",
          top: 0,
        }}
        className={scrollY > 0 ? "black" : "no-black"}
      >
        <a onClick={() => scrollTo(0, 0)}>Home</a>
        <a onClick={() => scrollTo(0, 1000)}>About me</a>
        <a onClick={() => scrollTo(0, 2000)}>Technologies</a>
        <a onClick={() => scrollTo(0, 3000)}>Experience</a>
        <a onClick={() => scrollTo(0, 4000)}>Work</a>
      </Stack>
    </>
  );
};
