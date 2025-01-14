import Link from "next/link";

export default function DistinguisedAlumni({
  picture,
  name,
  program,
  year,
  line1,
  line2,
  url,
}) {
  return (
    <div
      className=" px-2 md:px-3 py-2 sm:py-3 
    bg-[#DEBDDD] 
    flex flex-row
    transition-all duration-200
    bg-opacity-10 
    hover:bg-opacity-50
    border-accent
    border-4
    rounded-2xl
    font-jakarta w-[330px] sm:w-auto "
    
    >
      <div className="w-[120px] h-auto relative overflow-hidden">
        <img src={picture} alt="" className="w-full h-full object-cover rounded-md" />
      </div>

      <div className="flex flex-col px-3 pt-2 md:pt-0 justify-around flex-grow">
        <p className="text-[1.1em] md:text-[1.5em]  md:text-start ">
          {name}
        </p>
        <p className="text-[1em]">
          {program}- {year}
        </p>
        <p className="text-[.9em]">{line1}</p>
        <p className="text-[.9em]">{line2}</p>
        <Link href={url} target="_blank" className="text-accent text-[1em]">
          Profile
        </Link>
      </div>
    </div>
  );
}
