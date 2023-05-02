import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import cocktails from "./cocktailsData";

const sendOrderToESP8266 = async (drinkId, drinkName, drinkDescription) => {
  try {
    const esp8266Url = `http://172.21.24.91/?id=${drinkId}&name=${encodeURIComponent(
      drinkName
    )}&description=${encodeURIComponent(drinkDescription)}`;
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

  return (
    <div className="relative ">
      <Header />
      <div className="flex justify-start space-x-4 my-2 mx-4">
        <button
          className={`${
            filter === "all" ? "bg-fuchsia-400" : "bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "alcoholic" ? "bg-fuchsia-400" : "bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setFilter("alcoholic")}
        >
          Alcoholic
        </button>
        <button
          className={`${
            filter === "nonAlcoholic" ? "bg-fuchsia-400" : "bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setFilter("nonAlcoholic")}
        >
          Non-Alcoholic
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 pb-24">
        {filteredCocktails().map((cocktail) => (
          <div
            key={cocktail.id}
            className={`relative text-black rounded-lg overflow-hidden cursor-pointer bg-white shadow-lg ${
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
            <div className="p-2">
              <h3 className="text-lg font-bold">
                {cocktail.name}&nbsp;{cocktail.price}
              </h3>
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
              sendOrderToESP8266(
                selectedCocktail.id,
                selectedCocktail.name,
                selectedCocktail.description
              );
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
