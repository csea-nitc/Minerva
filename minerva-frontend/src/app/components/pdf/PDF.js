import Link from "next/link";

export default function PDF({ title, url }) {
  return (
    <>
      <div className="w-[400px] min-w-[200px] px-4 py-2 rounded bg-[#DEBDDD] flex justify-between items-center">
        <p className="font-jakarta text-lg" style={{ wordSpacing: "4px" }}>
          {title}
        </p>
        <Link href={url} target="_blank">
          <img src="/pdf-icon.svg" className="h-8" />
        </Link>
      </div>
    </>
  );
}
