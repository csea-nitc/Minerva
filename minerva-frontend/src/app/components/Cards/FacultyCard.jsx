export default function FacultyCard({ data }) {
  return (
    <div>
      <div className="relative p-3 w-[50vw] md:w-[25vw] lg:w-[19vw] bg-[#800080]">
        <img className="w-[100%]" src="/image.png" alt="" />
        <div className="bg-[#800080] text-white tracking-wide m-1 p-2 absolute bottom-0 left-0 w-min text-nowrap flex flex-col items-center">
          <span className="font-teko text-[4.1vw] md:text-[3vw] lg:text-[1.7vw]">
            {data.name}
          </span>
          {data.role && (
            <span className="font-teko text-[3.4vw] md:text-[2.5vw] lg:text-[1.2vw]">
              {data.role}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
