import ReactMarkdown from "react-markdown";

export default function DistinguisedAlumni({
  picture,
  name,
  program,
  year,
  line1,
  line2,
  url,
}) {
  const markdownLink = url ? `[Profile](${url})` : "";

  return (
    <div
      className="px-4 md:px-6 py-6 
    bg-[#DEBDDD] 
    flex flex-row
    transition-all duration-200
    bg-opacity-10 
    hover:bg-opacity-50
    border-accent
    border-4
    rounded-2xl
    font-jakarta w-[360px] sm:w-auto"
    >
      <div
        className="w-[130px] h-[130px] relative overflow-hidden flex-shrink-0"
        style={{ borderRadius: "8px", border: "2px solid #800080" }}
      >
        <img
          src={picture}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col px-4 justify-between flex-grow">
        <p className="text-[1.2em] md:text-[1.5em] font-semibold text-gray-900">
          {name}
        </p>
        <p className="text-[1em] font-medium text-gray-700">
          {program} - {year}
        </p>
        <p className="text-[0.95em] text-gray-700">{line1}</p>
        <p className="text-[0.95em] text-gray-700">{line2}</p>
        {url && (
          <div className="mt-2">
            <ReactMarkdown className="text-accent text-[1em] font-medium">
              {markdownLink}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
