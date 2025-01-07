import ImageHero from "../components/imagehero/Imagehero";
import DistinguisedAlumni from "../components/distinguishedalumni/DistinguisehdAlumni";

export default function DistinguishedAluni() {
  return (
    <>
      <div>
        <ImageHero
          title="Distinguished Alumni"
          font={"65px"}
          mobileFont={"55px"}
          contentdiv={".content-div"}
        />

        <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
          <div className="bg-[#800080] h-[100%] w-[10px] absolute top-0"></div>
          <div className="sm:w-[65%] w-[85%] mx-auto">
            <DistinguisedAlumni
              picture={"/pfp.png"}
              program={"B-Tech"}
              year={"2026"}
              name={"Arun Natarajan"}
              line1={"Line1"}
              line2={"line2"}
              url={"arunnats.com"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
