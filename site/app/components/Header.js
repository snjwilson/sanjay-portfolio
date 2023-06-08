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

  const handleScroll = (section) => {
    const sectionComp = document.getElementById(section);
    console.log(sectionComp);
    sectionComp.scrollIntoView();
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
        <a onClick={() => handleScroll("home")}>Home</a>
        <a onClick={() => handleScroll("about-me")}>About me</a>
        <a onClick={() => handleScroll("technologies")}>Technologies</a>
        <a onClick={() => handleScroll("experience")}>Experience</a>
        <a onClick={() => handleScroll("work")}>Work</a>
      </Stack>
    </>
  );
};
