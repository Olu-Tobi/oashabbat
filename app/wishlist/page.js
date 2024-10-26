"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TimerEle from "@/components/TimerEle";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <>
      <TimerEle />
      <Navbar />
      <Wishlist />
      <Footer />
    </>
  );
}
