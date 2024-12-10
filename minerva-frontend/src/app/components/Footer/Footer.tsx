export default function Footer() {
  return (
    <>
      <footer className="px-[3%] py-[1%] bg-[#800080] font-verdana">
        <div className="py-2 flex justify-between items-center border-b border-b-white">
          <div>
            <div className="px-4 flex gap-4">
              <img src="/nitc-logo.png" alt="" />
              <div>
                <p className="font-bold text-lg">
                  Department of Computer <br />
                  Science and Engineering
                </p>
                <span className="text-lg">National Intitute of Technology Calicut</span>
              </div>
            </div>
            <img
              className="-translate-x-7 w-[1000px]"
              src="/csea-temp-footer.png"
              alt=""
            />
          </div>
          <div className="max-w-[350px] flex-grow">
            <div className="text-lg">
              <p className="px-2 py-4 border-b border-white">Terms of Use</p>
              <p className="px-2 py-4 border-b border-white">
                Accessibility Statement
              </p>
              <p className="px-2 py-4 border-b border-white">About the Site</p>
              <p className="px-2 py-4 border-b border-white">Feedback</p>
              <p className="px-2 py-4 border-b border-white">Credits</p>
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-between">
          <div>
            <p>Copyright © 2010-2016 CSED, NIT Calicut</p>
            <p>All Rights Reserved</p>
          </div>
          <div>
            <p>Powered by Drupal</p>
          </div>
        </div>
      </footer>
    </>
  );
}
