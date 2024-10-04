"use client";

import DDay from "@/components/DDay";
import Info from "@/components/Info";

import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import NewIntro from "@/components/NewIntro";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <>
      <Navbar />

      <NewIntro />
      <Info />
      <Journey />
      <Wishlist />
      <DDay />
    </>
  );
}
