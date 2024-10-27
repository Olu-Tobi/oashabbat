"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Intro from "@/components/story/Intro";
import TheirStory from "@/components/story/TheirStory";
import TimerEle from "@/components/TimerEle";
import { useState } from "react";

export const revalidate = 60; // Revalidate every 60 seconds

export default function Home() {
  const [option, setOption] = useState("Our Story");

  return (
    <>
      <TimerEle />
      <Navbar option={option} />

      <Intro />
      <TheirStory />
      <Footer />
    </>
  );
}
