import Link from "next/link";

export default function PDF({ title, url }) {
  return (
    <div className="w-full px-3 sm:px-4 py-2 sm:py-3 
      rounded bg-[#DEBDDD] 
      flex justify-between items-center 
      gap-3 
      transition-all duration-200 
      hover:bg-opacity-90">
      <p className="font-jakarta text-base sm:text-lg flex-1 
        truncate pr-2" 
        style={{ wordSpacing: "4px" }}>
        {title}
      </p>
      <Link 
        href={url} 
        target="_blank"
        className="flex-shrink-0 transition-transform duration-200 hover:scale-110">
        <img 
          src="/pdf-icon.svg" 
          className="h-6 sm:h-8 w-auto" 
          alt="PDF Download"
        />
      </Link>
    </div>
  );
}