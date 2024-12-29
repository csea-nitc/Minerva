import Activities from "../components/csea/Activities";
import ImageHero from "../components/imagehero/Imagehero";
const activitiesDetails = require("./activities.json");
export default function CSEAPage() {
    return (
        <>
            <ImageHero
                title={"Computer Science and Engineering Association"}
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
                increasedHeight={1}
            />
            <div className="py-10 w-[100vw] mt-[50vh] sm:mt-[60vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="sm:w-[65%] w-[85%] mx-auto">
                    <p className="md:text-lg pt-6 font-mont">
                        The Computer Science and Engineering Association (CSEA)
                        is an integral part of the Computer Science and
                        Engineering Department. Over the years, CSEA has
                        encouraged the academic and scientific development of
                        the department's student body through activities such as
                        coding competitions, technical workshops and talks by
                        eminent researchers. Annually, the CSEA hosts Code
                        Maestros, Technical workshops, Linux Fest, FOSSMeet and
                        job/internship talks.
                    </p>
                    <p className="md:text-lg pt-6">
                        <strong>Homepage: </strong>{" "}
                        <a
                            href="http://assoc.cse.nitc.ac.in"
                            target="_blank"
                            className="text-blue-500 underline hover:text-blue-700 focus:text-blue-700"
                        >
                            http://assoc.cse.nitc.ac.in
                        </a>
                    </p>
                    <Activities activitiesDetails={activitiesDetails} />
                </div>
            </div>
        </>
    );
}
