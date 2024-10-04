"use client";

import DDay from "@/components/DDay";
import Info from "@/components/Info";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import NewIntro from "@/components/NewIntro";
import Wishlist from "@/components/Wishlist";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {!loaded && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Image src="/logod.svg" width={200} height={200} alt="logo" />
        </div>
      )}
      {loaded && (
        <div>
          <Navbar />

          <NewIntro />
          <Info />
          <Journey />
          <Wishlist />
          <DDay />
        </div>
      )}
    </>
  );
}
