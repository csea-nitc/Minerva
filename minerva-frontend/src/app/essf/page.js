const bankDetails = require("./bankDetails.json");
const studentRepresentatives = require("./studentRepresentatives.json");
import ImageHero from "../components/imagehero/Imagehero";
export default function ESSFPage() {
  return (
    <>
      <ImageHero
        title={"Emergency Student Support Fund"}
        font={"80px"}
        mobileFont={"20px"}
        contentdiv={".content-div"}
        increasedHeight={1}
        imgpath={"/essf.jpeg"}
      />
      <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
        <div className="sm:w-[65%] w-[85%] mx-auto py-10">
          <div className="font-jakarta pt-6 pb-6 ">
            <h2 className="md:text-2xl font-bold text-[#800080]">
              What is ESSF?
            </h2>
            <p className="md:text-lg pt-2">
              ESSF(Emergency Student Support Fund) aims to support (without much
              formalities or paperwork) the monetary needs of{" "}
              <b>full time B.Tech CSE students</b> who are currently on rolls.
              The funds are provided as a loan without any interest, without
              accepting any collateral or guarantee of repayment.
            </p>
            <p className="md:text-lg pt-2">
              The students are expected to repay the loan when they are in a
              better financial situation. This fund is for the students and
              managed primarily by the students themseleves. More details about
              ESSF may also be obtained from the Representatives.
            </p>
            <h2 className="md:text-2xl pt-6 font-bold text-[#800080]">
              How to apply for ESSF?
            </h2>
            <div className="md:text-lg pt-2">
              Any full time B.Tech CSE student of NITC in need of funds is
              requested to contact the following student representatives by
              email:
              <div className="pt-6 pb-6">
                {studentRepresentatives.map((representative) => (
                  <div key={representative.email}>
                    <p>{representative.name}</p>
                    <a
                      href={"mailto:" + representative.email}
                      className="text-blue-500 underline hover:text-blue-700 focus:text-blue-700"
                    >
                      {representative.email}
                    </a>
                    <p>{representative.position}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="md:text-lg pt-2">
              The application form is available with the above representatives.
              Upon receiving the completed application form, the representatives
              will make the decision to approve the amount, if necessary, after
              consulting with the applicant's Faculty Advisor and / or the HOD.
            </p>
            <h2 className="md:text-2xl pt-6 font-bold text-[#800080]">
              How to contribute/repay?
            </h2>
            <p className="md:text-lg pt-2">
              The funds will be sent and repaid by online banking transactions.
              If you wish to repay the loan / contribute to this fund, online
              transfers may be made to the following account. There is no tax
              exemption for contributions to ESSF.
            </p>
            <div className="pt-6 pb-6">
              {bankDetails.map((bankDetail) => (
                <div key={bankDetail.name} className="pt-2 pb-2">
                  <p>A/c No:{bankDetail.accNo}</p>
                  <p>Name: {bankDetail.name}</p>
                  <p>Branch: {bankDetail.branch}</p>
                  <p>IFSC: {bankDetail.ifsc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
