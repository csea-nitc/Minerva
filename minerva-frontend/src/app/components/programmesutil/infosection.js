import DropdownButtons from "../dropdownbuttons/Dropdownbuttons";
export default function InfoSection({
  title,
  para1,
  para2,
  img1,
  img2,
  downloadables,
}) {
 

  return (
    <div className="flex flex-col">
      <div className="mt-8">
        <div className="text-[5em] font-extrabold text" style={{ color: "#800080" }}>
          /// {title}
        </div>
        <div
          className="h-[7px]  w-full mt-4"
          style={{ backgroundColor: "#800080" }}
        ></div>

        <DropdownButtons dropdownContent={downloadables} />

        <div className="font-montserrat font-semibold text-[1em] leading-[35px]">
          <div className="py-[4em] text-justify flex">
            <p className=" w-1/2 ">{para1}</p>

            <div className=" pl-[70px]">
              <img
                src={img1}
                className="w-full object-cover h-[300px] shadow-[-20px_20px_0px_#800080]"
              />
            </div>
          </div>

          <div className="my-6 text-justify flex">
            <div className=" pl-[20px] flex ">
              <img
                src={img2}
                className="w-full h-auto shadow-[-20px_20px_0px_#800080]"
              />
            </div>

            <p className=" w-1/2 pl-[50px] ">{para2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
