"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TimerEle from "@/components/TimerEle";
import Wishlist from "@/components/Wishlist";

export const revalidate = 60; // Revalidate every 60 seconds

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
