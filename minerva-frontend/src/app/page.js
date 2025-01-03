import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import History from "./components/history/History";
import McaProgramme from "./components/mca_programme/mcaProgramme";
import Hero from "./components/heropage/Hero";
import Data from "./data.json";
import Navbar from "./components/navbar/Navbar";
import Herosupport from "./components/herosupport/Herosupport";

export default function Home() {
  return (
    <div>

      <Hero props={Data} />
      <Herosupport/>
       <div className="overflow-hidden">
            <div>
                <Sidebar />
                <main className="m-0 p-0 bg-white overflow-hidden">
                    {/* <h1 className="text-black">Test</h1> */}
                    <Profile />
                    <Vision />
                    <Mission />
                    <History />
                    <McaProgramme />
                </main>
            </div>
        </div>
    );
}
