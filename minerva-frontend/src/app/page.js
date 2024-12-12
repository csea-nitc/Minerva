import Image from "next/image";
import dynamic from "next/dynamic";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import History from "./components/history/History";
import McaProgramme from "./components/mca_programme/mcaProgramme";

export default function Home() {
  return (
    <>
      {" "}
      <div>
        {" "}
        <div className="overflow-hidden">
          <img src="landing.png" className="w-full"></img>
        </div>
        <div>
          <Sidebar />
          <main className="m-0 p-0 bg-white">
            <Profile />
            <Vision />
            <Mission />
            <History />
            <McaProgramme />
          </main>
        </div>
      </div>
    </>
  );
}
