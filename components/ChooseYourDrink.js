import React, { useState, useEffect } from "react";
import cocktails from "./cocktailsData";
import Link from "next/link";

const sendOrderToESP8266 = async (drinkId) => {
  try {
    const esp8266Url = `http://172.21.26.133/?id=${drinkId}`;
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

const ChooseYourDrink = () => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [filter, setFilter] = useState("all");
  const [pumpIngredients, setPumpIngredients] = useState({
    pump1: "",
    pump2: "",
    pump3: "",
    pump4: "",
    pump5: "",
    pump6: "",
    pump7: "",
    pump8: "",
  });

  useEffect(() => {
    const storedPumpIngredients = localStorage.getItem("pumpIngredients");
    if (storedPumpIngredients) {
      setPumpIngredients(JSON.parse(storedPumpIngredients));
    }
  }, []);

  const handleCardClick = (cocktail) => {
    if (selectedCocktail && selectedCocktail.id === cocktail.id) {
      setSelectedCocktail(null);
    } else {
      setSelectedCocktail(cocktail);
    }
  };

  const isCocktailAvailable = (cocktail) => {
    return cocktail.ingredients.every((ingredient) =>
      Object.values(pumpIngredients).includes(ingredient)
    );
  };

  const filteredCocktails = () => {
    const allCocktails = cocktails.filter(isCocktailAvailable);

    if (filter === "all") return allCocktails;
    if (filter === "alcoholic") return allCocktails.filter((c) => c.hasAlcohol);
    if (filter === "nonAlcoholic")
      return allCocktails.filter((c) => !c.hasAlcohol);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-white py-4 px-4 border-b border-gray-300">
        <h2 className="text-4xl font-semibold text-black">BlendBorg</h2>
        <div className="mt-6">
          <div className="flex justify-start space-x-4">
            <div className="relative">
              <select
                value={filter}
                onChange={handleFilterChange}
                className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option value="all">All</option>
                <option value="alcoholic">Alcoholic</option>
                <option value="nonAlcoholic">Non-Alcoholic</option>
              </select>
              <svg
                className="w-6 h-6 absolute top-2 right-2 pointer-events-none text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.707a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 pb-24">
        {filteredCocktails().map((cocktail) => (
          <div
            key={cocktail.id}
            className={`relative text-black rounded-lg overflow-hidden cursor-pointer bg-white shadow-lg border border-gray-200 ${
              selectedCocktail && selectedCocktail.id === cocktail.id
                ? "ring-2 ring-fuchsia-400"
                : ""
            }`}
            onClick={() => handleCardClick(cocktail)}
          >
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold">{cocktail.name}</h3>
                <h3 className="text-lg font-bold pr-2">{cocktail.price}</h3>
              </div>
              <p className="text-sm">{cocktail.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedCocktail && (
        <div className="fixed flex flex-col items-center bottom-4 left-0 w-full py-2 px-4">
          <button
            className="w-11/12 text-white font-semibold text-lg bg-fuchsia-400 py-3 rounded-full shadow-md"
            onClick={() => {
              sendOrderToESP8266(selectedCocktail.id);
            }}
          >
            Order {selectedCocktail.name} for{" "}
            {
              cocktails.find((cocktail) => cocktail.id === selectedCocktail.id)
                .price
            }
          </button>
        </div>
      )}
    </div>
  );
};

export default ChooseYourDrink;
