import Image from "next/image";
import dynamic from "next/dynamic";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import History from "./components/history/History";
import McaProgramme from "./components/mca_programme/mcaProgramme";
import Hero from "./components/heropage/Hero";
import Data from "./data.json";

export default function Home() {
  return (
    <div>
      <Hero props={Data}/>
      <div className="text-5xl">h</div>
    </div>
  );
}
