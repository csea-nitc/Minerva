import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";

export default function Home() {
    return (
        <div>
            <Sidebar />
            <main className="m-0 p-0 bg-white ">
                {/* <h1 className="text-black">Test</h1> */}
                <Profile />
                <Vision />
                <Mission />
            </main>
        </div>
    );
}
