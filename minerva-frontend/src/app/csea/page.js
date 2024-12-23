import Activities from "../components/csea/Activities";
const activitiesDetails = require("./activities.json");
export default function CSEAPage() {
    return (
        <div className="pt-10 mt-10 lg:px-[20vw] md:px-[15vw] px-[10vw] w-[100vw] font-mont">
            <h1 className="md:text-4xl font-mont font-bold text-2xl">
                Computer Science and Engineering Association
            </h1>
            <p className="md:text-lg pt-6">
                The Computer Science and Engineering Association (CSEA) is an
                integral part of the Computer Science and Engineering
                Department. Over the years, CSEA has encouraged the academic and
                scientific development of the department's student body through
                activities such as coding competitions, technical workshops and
                talks by eminent researchers. Annually, the CSEA hosts Code
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
    );
}
