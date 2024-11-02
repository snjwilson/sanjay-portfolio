import React from "react";
import { Stack, Typography, Paper } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export const Work = () => {
  const works = [
    {
      title: "30 small JavaScript projects",
      link: "https://snjwilson.github.io/JavaScript30/",
    },
    {
      title: "MIT Scratch app clone",
      link: "https://sleepy-stonebraker-30b8f4.netlify.app/",
    },
    {
      title: "128 Game similiar to 2048 game",
      link: "https://snjwilson.github.io/128-game/",
    },
  ];
  return (
    <section id="work">
      <Stack direction={"row"} spacing={5}>
        {works.map((w, i) => (
          <Paper style={{ padding: "1em" }}>
            <iframe key={`work${i}`} src={w.link} />
            <Typography
              variant="h5"
              component="h5"
              style={{ paddingTop: "0.5em" }}
            >
              {w.title}
            </Typography>
            <LaunchIcon
              className="work-link"
              onClick={() => window.open(w.link)}
            />
          </Paper>
        ))}
      </Stack>
    </section>
  );
};
