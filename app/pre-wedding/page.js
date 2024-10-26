"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PreIntro from "@/components/PreIntro";
import PreShow from "@/components/PreShow";
import TimerEle from "@/components/TimerEle";
import { useState } from "react";

export default function Home() {
  const [option, setOption] = useState("Gallery");
  return (
    <>
      <TimerEle />
      <Navbar option={option} />
      <PreIntro />
      <PreShow />
      <Footer />
    </>
  );
}
