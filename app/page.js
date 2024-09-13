import DDay from "@/components/DDay";
import Info from "@/components/Info";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Info />
      <Wishlist />
      <Journey />
      <DDay />
    </>
  );
}
