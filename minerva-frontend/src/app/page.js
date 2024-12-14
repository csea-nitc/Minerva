
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
