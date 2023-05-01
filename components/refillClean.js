import React, { useState } from "react";

const sendOrderToESP8266 = async (selectedPumpNumbers) => {
  try {
    const pumps = selectedPumpNumbers.reduce(
      (acc, curr) => acc | (1 << (curr - 1)),
      0
    );
    const esp8266Url = `http://192.168.2.43?pumps=${pumps}`;
    const response = await fetch(esp8266Url, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const RefillClean = () => {
  const [selectedPumps, setSelectedPumps] = useState({});

  const handleCheckboxChange = (e) => {
    setSelectedPumps({ ...selectedPumps, [e.target.name]: e.target.checked });
  };

  const handleCleanButtonClick = () => {
    console.log("Clean button clicked");
    // Pass selectedPumpNumbers to the sendOrderToESP8266 function
    sendOrderToESP8266(selectedPumpNumbers);
  };

  const selectedPumpNumbers = Object.entries(selectedPumps)
    .filter(([, isSelected]) => isSelected)
    .map(([pumpName]) => pumpName.replace("pump", ""));

  const selectedPumpsText =
    selectedPumpNumbers.length > 0
      ? `Selected pumps: ${selectedPumpNumbers.join(", ")}`
      : "No pumps selected";

  return (
    <div className="pump-selection">
      <h2 className="text-2xl md:text-3xl text-black font-bold mt-20 mb-4 text-center">
        Clean
      </h2>
      <div className="divide-y divide-gray-300">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div
            key={`pump${num}`}
            className="pump-row text-black flex justify-between items-center py-2"
          >
            <label
              htmlFor={`pump${num}`}
              className="text-lg ml-4 cursor-pointer"
            >
              Pump {num}
            </label>
            <div className="w-6 h-6 rounded border border-gray-300 inline-flex items-center justify-center mr-4">
              <input
                type="checkbox"
                id={`pump${num}`}
                name={`pump${num}`}
                className="opacity-0 absolute"
                checked={selectedPumps[`pump${num}`] || false}
                onChange={handleCheckboxChange}
              />
              {selectedPumps[`pump${num}`] && (
                <svg
                  className="fill-current w-4 h-4 text-fuchsia-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              )}
            </div>
          </div>
        ))}
        <div className="py-2 text-black">
          <p className="text-lg ml-4 mt-4">{selectedPumpsText}</p>
        </div>
      </div>
      <button
        className="bg-fuchsia-400 text-white font-semibold text-lg py-3 mt-4 rounded-full shadow-md w-full"
        onClick={handleCleanButtonClick}
      >
        Start cleaning cycle
      </button>
    </div>
  );
};

export default RefillClean;
