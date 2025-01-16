import Link from "next/link";
import ImageHero from "../components/imagehero/Imagehero";

export default function page() {
  return (
    <>
      <ImageHero
        title={"Credits"}
        font={"80px"}
        mobileFont={"20px"}
        contentdiv={".content-div"}
      />
      <div className="px-[13%] md:px-[17%] font-jakarta text-lg w-[100vw] mt-[40vh] sm:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div>
          <p className="py-4 px-[3%] font-jakarta text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            corporis molestiae velit dolorum qui maiores facilis quisquam dolor
            nisi iure explicabo, sunt, vero ab similique numquam, deserunt harum
            fugit quasi repellat. Laborum excepturi exercitationem nam alias
            animi cumque facere dolore sed earum sit. Soluta molestiae eos
            quisquam explicabo dolores alias earum inventore ab! Soluta
            repudiandae, minus enim delectus debitis odit.
          </p>
        </div>
        <div className="py-4">
          <h2 className="font-semibold text-2xl text-accent">Project Lead</h2>
          <ul className="flex flex-col ">
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Arun
              </span>{" "}
              - B.Tech CSE 2026
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Hafeez
              </span>{" "}
              - B.Tech CSE 2026
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Adithya Kamble
              </span>{" "}
              - B.Tech CSE 2026
            </Link>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-semibold text-2xl text-accent">Developers</h2>
          <ul className="flex flex-col ">
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Nadeem M Siyam
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Devadath A Kartha
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Rohith S Nair
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Richie James
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Rithvik
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-semibold text-2xl text-accent">
            Design and Implementation
          </h2>
          <ul className="flex flex-col ">
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Tarun Pradeep
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Visruth Mohandas
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Neha Suresh
              </span>{" "}
              - B.Tech CSE 2027
            </Link>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-semibold text-2xl text-accent">Advisors</h2>
          <ul className="flex flex-col ">
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Dr. XYZ Kumar
              </span>{" "}
              - Professor CSED
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Dr. ABC Kumar
              </span>{" "}
              - Professor CSED
            </Link>
            <Link href={""}>
              <span className="underline underline-offset-2 text-blue-600">
                Dr. MNO Kumar
              </span>{" "}
              - Professor CSED
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
