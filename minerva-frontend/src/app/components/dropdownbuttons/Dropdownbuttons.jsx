import { useState } from "react";

function DropdownButtons({dropdownContent}) {
  const [activeButton, setActiveButton] = useState(null);

  

  const handleButtonClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <div>
      <div
        className="relative flex space-x-4 justify-between py-5 border mt-5"
        style={{ borderColor: "#800080", borderWidth: "3px" }}
      >
        {["Curriculum", "Syllabi", "Ordinances and Regulations"].map(
          (button) => (
            <div key={button} className="">
              <button
                className="px-6 py-2 font-bold rounded hover:bg-gray-300"
                onClick={() => handleButtonClick(button)}
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
          className={` left-0 w-full shadow-lg transition-all duration-300 ease-in-out ${
            activeButton === button ? "opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
          style={{ backgroundColor: "#800080" }}
        >
          <ul className="p-2">
            {dropdownContent[button].map((link, index) => (
              <li key={index} className="px-4 py-2 text-white">
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
