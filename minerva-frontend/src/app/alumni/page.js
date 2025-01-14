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
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  gap-4 px-6 mx-auto justify-items-center sm:justify-items-stretch">
            <DistinguisedAlumni
              picture={"/pfp.png"}
              program={"B-Tech"}
              year={"2026"}
              name={"Arun Natarajan"}
              line1={"Line1"}
              line2={"line2"}
              url={"arunnats.com"}
            />
            <DistinguisedAlumni
              picture={"/pfp.png"}
              program={"B-Tech"}
              year={"2026"}
              name={"Arun Natarajan"}
              line1={"Line1"}
              line2={"line2"}
              url={"arunnats.com"}
            />
            <DistinguisedAlumni
              picture={"/pfp.png"}
              program={"B-Tech"}
              year={"2026"}
              name={"Arun Natarajan"}
              line1={"Line1"}
              line2={"line2"}
              url={"arunnats.com"}
            />
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
