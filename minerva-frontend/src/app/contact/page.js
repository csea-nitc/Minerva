const hodDetails = require("./hodDetails.json");
export default function ContactUsPage() {
    return (
        <div className="pt-10 mt-10 lg:px-[20vw] md:px-[15vw] px-[10vw] w-[100vw]">
            <h1 className="md:text-4xl font-mont font-bold text-2xl">
                Contact Us
            </h1>
            <div className="font-mont pt-6 pb-6">
                <h2 className="md:text-2xl font-bold">Office Address:</h2>
                <p>
                    <strong>Place Holder &darr;&darr;&darr;</strong>
                </p>
                <img src="/csea-temp-footer.png" alt="" />
                <p>
                    <strong>Place Holder &uarr;&uarr;&uarr;</strong>
                </p>
                <p className="md:text-lg pt-6">
                    Department of Computer Science and Engineering National
                    Institute of Technology Calicut NIT Campus PO, Calicut,
                    Kerala - 673 601, India <br />
                    Phone: +91 495 2286800 <br />
                    Fax: +91 495 2287250
                </p>
                <h2 className="md:text-2xl pt-6 font-bold">
                    Office Working Hours:
                </h2>
                <p className="md:text-lg pt-2">
                    9 AM to 5.50 PM, Mondays through Fridays
                </p>
                <h2 className="md:text-2xl pt-6 font-bold">
                    Head of the Department:
                </h2>
                <p className="md:text-lg pt-2">
                    <a
                        href={hodDetails.link}
                        target="_blank"
                        className="text-blue-500 underline hover:text-blue-700 focus:text-blue-700"
                    >
                        {hodDetails.name}
                    </a>
                    <br />
                    <strong>Email ID:</strong>{" "}
                    <a
                        href="mailto:hodcsed@nitc.ac.in"
                        className="text-blue-500 underline hover:text-blue-700 focus:text-blue-700"
                    >
                        hodcsed@nitc.ac.in
                    </a>
                </p>
            </div>
        </div>
    );
}