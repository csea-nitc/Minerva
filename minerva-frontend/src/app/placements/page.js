import ImageHero from "../components/imagehero/Imagehero";
import PDF from "../components/pdf/PDF";

export default function Placements() {
  return (
    <>
      <div>
        <ImageHero
          title="PLACEMENTS"
          font={"60px"}
          mobileFont={"50px"}
          contentdiv={".content-div"}
        />
        <div className="mt-24">
          <p className="text-center font-teko text-[3vw]">
            Btech - Computer Science and Engineering
          </p>
          <div className="w-[60%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src="/graph.png" />
              </div>
              <div className="p-2 rounded-xl bg-[#C891C8] flex flex-col items-center">
                <p className="font-teko">Year</p>
                <div className="flex-growf aspect-square">vcwsed</div>
                <div className="flex gap-4">
                  <p className="font-teko text-xl">
                    Average
                    <br />
                    Salary (lpa)
                  </p>
                  <div className="flex items-center border border-[#800080] rounded-l-xl rounded-r-2xl">
                    <div className="rounded-l-xl rounded-r-3xl bg-[#800080]">
                      <img src="/Group.png" className="px-4 py-2" />
                    </div>
                    <p className="px-6 font-teko font-bold text-[2vw] text-[#800080]">
                      19.37
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 flex flex-col items-center gap-2">
          <PDF
            title="2023 B.Tech CSE Syllabus"
            url="https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2024/10/2024102841.pdf"
          />
        </div>
      </div>
    </>
  );
}
