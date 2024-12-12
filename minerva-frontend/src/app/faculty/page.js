import FacultyCard from "../components/Cards/FacultyCard";

const hod = {
  name: "Dr. Sumesh Divakaran",
};

const dummy = [
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
  { name: "Dr Sumesh Divakaran", role: "Associate Professor" },
];

export default function Home() {
  return (
    <>
      <div className="p-8">
        <h1 className="font-saira font-extrabold text-[12vw] md:text-[10vw] lg:text-[8vw] text-[#800080]">
          FACULTY
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center">
          <div className="relative p-3 w-[50vw] md:w-[25vw] lg:w-[19vw] bg-[#800080]">
            <FacultyCard data={hod} />
          </div>
          <h2 className="font-saira font-extrabold text-[11vw] md:text-[9vw] lg:text-[7vw]">
            HEAD OF
            <br /> DEPARTMENT
          </h2>
        </div>
        <h2 className="my-8 font-saira font-extrabold text-[10vw] md:text-[8vw] lg:text-[6vw]">
          FACULTY
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dummy.map((faculty, idx) => (
            <FacultyCard key={idx} data={faculty} />
          ))}
        </ul>
      </div>
      <div className="absolute top-0 h-screen w-[10px] bg-[#800080]"></div>
    </>
  );
}
