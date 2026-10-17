import React from "react";
import { Composition } from "remotion";
import { RishehIntro } from "./scenes/RishehIntro";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="RishehIntro"
      component={RishehIntro}
      durationInFrames={360}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
