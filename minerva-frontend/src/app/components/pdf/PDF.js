import Link from "next/link";

export default function PDF({ title, url }) {
  return (
    <Link 
      href={url} 
      target="_blank" 
      className="w-full px-3 sm:px-4 py-2 sm:py-3 
        rounded bg-[#DEBDDD] 
        flex justify-between items-center 
        gap-3 
        transition-all duration-2=100 
        hover:bg-opacity-90 "
    >
      <div className="flex justify-between items-center w-full">
        <p className="font-jakarta text-base sm:text-lg flex-1 
          truncate pr-2" 
          style={{ wordSpacing: "4px" }}>
          {title}
        </p>
        <img 
          src="/pdf-icon.svg" 
          className="h-6 sm:h-8 w-auto flex-shrink-0 transition-transform duration-200 hover:scale-110" 
          alt="PDF Download"
        />
      </div>
    </Link>
  );
}
