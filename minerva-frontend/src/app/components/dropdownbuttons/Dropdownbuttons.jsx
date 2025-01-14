import { useState } from "react";

function DropdownButtons({dropdownContent}) {
  const [activeButton, setActiveButton] = useState("Curriculum");
    const [isOpen, setIsOpen] = useState(false);
  

  const handleButtonClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <div className=" sm:px-0 font-jakarta">
      <div
        className="hidden sm:flex relative z-0 justify-between  mt-5"
        style={{ borderColor: "#800080", borderWidth: "3px" ,borderRightWidth:"0"}}
      >
        {["Curriculum", "Syllabi", "Ordinances and Regulations"].map(
          (button) => (
            <div key={button} className="flex flex-1 font-bold   justify-center py-2 border-r-[3px] border-black"    style={{ borderColor: "#800080",color: "#800080"  }} >
              <button
                className="sm:px-6 text-[1.3em] sm:text-[1.5em] rounded  uppercase"
                onClick={() => handleButtonClick(button)
                  
                }
              >
                {button}
              </button>
            </div>
          )
        )}
      </div>

      <div className="sm:hidden flex flex-col items-center w-full mt-5 px-4 ">
  <div className="relative w-full ">
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen ? "true" : "false"}
      className="w-[100%] flex justify-between items-center px-4 py-2 text-[1.5em] font-extrabold text-[#800080] border-b-4 border-[#800080]"
    >
      <span>{activeButton}</span>
      {/* Arrow Icon */}
      <svg
        className={`w-6 h-6 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {isOpen && (
      <ul className="z-10 w-full mt-2 mb-4 bg-[#800080]">
        {["Curriculum", "Syllabi", "Ordinances and Regulations"].map(
          (button) => (
            <li
              key={button}
              onClick={() => {
                handleButtonClick(button);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-white hover:bg-white hover:text-[#800080] cursor-pointer transition-colors duration-100"
            >
              {button}
            </li>
          )
        )}
      </ul>
    )}
  </div>
</div>


        <div className="px-4 sm:px-0 mt-5 sm:mt-0 text-sm sm:text-lg">
      {["Curriculum", "Syllabi", "Ordinances and Regulations"].map((button) => (
        <div
        key={button}
          className={`shadow-lg relative  transition-all rounded-xl sm:rounded-none duration-400  ${
            activeButton === button ? "h-auto opacity-100 " : "max-h-0 py-0 opacity-0 "
          }`}
          style={{ backgroundColor: "#800080" }}
        >
          <ul className="p-2 rounded-xl">
            {dropdownContent[button].map((link, index) => (
              <li key={index} className="px-4 py-2 text-white text-[1.3em]">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}

export default DropdownButtons;
