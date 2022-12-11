import React from "react";

import { Header } from "./AboutUs/Header";
import { WhoWeAre } from "./AboutUs/WhoWeAre";
import { Process } from "./AboutUs/Process";
import { MissionAndFocus } from "./AboutUs/MissionAndFocus";
import { Benefits } from "./AboutUs/Benefits";
import { OurTeam } from "./AboutUs/OurTeam";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <WhoWeAre />
      <Process />
      <MissionAndFocus />
      <Benefits />
      <OurTeam />
    </div>
  )
}

export { AboutUs };
