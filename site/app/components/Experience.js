import React from "react";
import { Stack, Typography } from "@mui/material";

export const Experience = () => {
  return (
    <section id="experience">
      <Stack sx={{ textAlign: "left" }}>
      <>
          <h2>IBM INDIA SOFTWARE LABS</h2>
          <div className="experience-vertical-line">
            <Stack direction={"column"} justifyContent={"space-between"}>
              <Typography />
              <span>{"Software Developer Oct 2023 - Present"}</span>
            </Stack>
          </div>
        </>
        <>
          <h2>INFOSYS LIMITED</h2>
          <div className="experience-vertical-line">
            <Stack direction={"column"} justifyContent={"space-between"}>
              <Typography />
              <span>{"Associate consultant Jan 2023 - Sep 2023"}</span>
              <span>{"Associate Business Analyst Oct 2021 - Dec 2022"}</span>
            </Stack>
          </div>
        </>
        <>
          <h2>BAZINGA MEDIA PRIVATE LIMITED</h2>
          <div className="experience-vertical-line">
            <Stack direction={"column"} justifyContent={"space-between"}>
              <span>{"Associate Software Developer Jun 2020 - Jul 2021"}</span>
              <span>{"Fullstack Developer Intern Feb 2020 - May 2020"}</span>
            </Stack>
          </div>
        </>
      </Stack>
    </section>
  );
};
