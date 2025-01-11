import { useState } from "react";

function DropdownButtons({dropdownContent}) {
  const [activeButton, setActiveButton] = useState(null);

  

  const handleButtonClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <div className="px-1  sm:px-0">
      <div
        className="relative z-0 flex  justify-between  mt-5"
        style={{ borderColor: "#800080", borderWidth: "3px" ,borderRightWidth:"0"}}
      >
        {["Curriculum", "Syllabi", "Ordinances and Regulations"].map(
          (button) => (
            <div key={button} className="flex flex-1   justify-center py-2 border-r-[3px] border-black"    style={{ borderColor: "#800080",color: "#800080"  }} >
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

      {["Curriculum", "Syllabi", "Ordinances and Regulations"].map((button) => (
        <div
        key={button}
          className={`shadow-lg  transition-all duration-400  ${
            activeButton === button ? "h-auto opacity-100 " : "max-h-0 py-0 opacity-0 "
          }`}
          style={{ backgroundColor: "#800080" }}
        >
          <ul className="p-2">
            {dropdownContent[button].map((link, index) => (
              <li key={index} className="px-4 py-2 text-white text-[1.3em]">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DropdownButtons;
