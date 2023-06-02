import React from "react";
import JavaScriptLogo from "../../dist/images/JavaScript-logo.png";
import ReactLogo from "../../dist/images/React-logo.png";
import NodeLogo from "../../dist/images/NodeJS-logo.png";
import MongoDBLogo from "../../dist/images/MongoDB-logo.png";
import TypeScriptLogo from "../../dist/images/Typescript-logo.png";
import { Stack } from "@mui/material";

export const Technologies = () => {
  return (
    <section className="white">
      <Stack direction={"row"} className="technology-stack" spacing={5}>
        <img src={JavaScriptLogo} alt="JavaScript Logo"></img>
        <img src={TypeScriptLogo} alt="TypeScript Logo" />
        <img src={ReactLogo} alt={"React Logo"}></img>
        <img src={NodeLogo} alt="Node-logo"></img>
        <img src={MongoDBLogo} alt="MongoDB Logo"></img>
      </Stack>
    </section>
  );
};
