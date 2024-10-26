"use client";

import BG from "@/components/BG";
import DDay from "@/components/DDay";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import NewIntro from "@/components/NewIntro";
import Story from "@/components/Story";
import TimerEle from "@/components/TimerEle";

import { useState } from "react";

export default function Home() {
  const [option, setOption] = useState("Home");

  return (
    <>
      <TimerEle />
      <Navbar option={option} />

      <NewIntro />
      <Info />
      <Story />
      <Journey />
      <BG />

      <DDay />

      <Footer />
    </>
  );
}
