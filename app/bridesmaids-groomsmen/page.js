"use client";
import BGP from "@/components/bg/BGP";
import Intro from "@/components/bg/Intro";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import TimerEle from "@/components/TimerEle";
import { useState } from "react";

export const revalidate = 60; // Revalidate every 60 seconds

export default function Home() {
  const [option, setOption] = useState("Bridesmaid & Groomsmen");

  return (
    <>
      <TimerEle />
      <Navbar option={option} />
      <Intro />
      <BGP />
      <Footer />
    </>
  );
}
