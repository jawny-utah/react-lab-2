import React from "react";

import { HowWeWork } from "./Home/HowWeWork";
import { SendInquiry } from "./Home/SendInquiry";
import { Slogan } from "./Home/Slogan";
import { Testimony } from "./Home/Testimony";
import { WelcomeMessage } from "./Home/WelcomeMessage";
import { OurBlog } from "./Home/OurBlog";

const Home = () => {
  return (
    <div>
      <WelcomeMessage />
      <HowWeWork />
      <Slogan />
      <Testimony />
      <SendInquiry />
      <OurBlog />
    </div>
  )
}

export { Home };
