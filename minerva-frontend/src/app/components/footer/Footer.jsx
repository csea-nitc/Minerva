import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="px-[3%] py-[1%] bg-[#800080] font-verdana text-white z-10 relative">
        <div className="py-2 flex flex-col md:flex-row justify-around items-center gap-6 border-b border-b-white ">
          <div>
            <div className="px-2 md:px-4 flex items-center gap-6">
              <img className="h-[96px] w-[81px]" src="/nitc-logo.png" alt="" />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw]">
                  Department of Computer <br />
                  Science and Engineering
                </p>
                <span className="text-lg font-mont">
                  National Intitute of Technology Calicut
                </span>
              </div>
            </div>
            <img
              className="-translate-x-7 w-[800px] hidden md:block"
              src="/csea-temp-footer.png"
              alt=""
            />
          </div>
          <div className="max-w-[400px] flex-grow">
            <div className="flex flex-col text-nowrap text-[4vw] sm:[3vw] md:text-[2vw] lg:[1.4vw] xl:text-[1.2vw]">
              <p className="px-2 py-4 border-b border-white"></p>
              <Link className="px-2 py-4 border-b border-white" href="/terms">
                Terms of Use
              </Link>
              <Link className="px-2 py-4 border-b border-white" href="/accessibility">
                Accessibility Statement
              </Link>
              <Link className="px-2 py-4 border-b border-white" href="/about-site">
                About the Site
              </Link>
              <Link className="px-2 py-4 border-b border-white" href="/feedback">
                Feedback
              </Link>
              <Link className="px-2 py-4 border-b border-white" href="">
                Credits
              </Link>
            </div>
          </div>
          <img
            className="w-[1000px] block md:hidden"
            src="/csea-temp-footer.png"
            alt=""
          />
        </div>
        <div className="py-4 flex justify-between tracking-wide">
          <div className="flex flex-col gap-2">
            <p>Copyright © 2024-2025 CSED, NIT Calicut</p>
            <p>All Rights Reserved</p>
          </div>
          <div>
            <p>Created by the CSEA and CSED</p>
          </div>
        </div>
      </footer>
    </>
  );
}
