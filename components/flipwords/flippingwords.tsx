import React from "react";
import { FlipWords } from "../ui/flipwords";

export function FlipWordsDemo() {
  const words = ["Digital  Marketing", "Web  Development", "BMS", "CCTV  Services"];

  return (

      <div className="">
        <FlipWords words={words} /> <br />
      </div>
  );
}
