import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCard = ({ text, onClick, color, cocktails }) => {
  return (
    <div
      className={`relative flex flex-col p-4 items-start justify-start h-40 w-80 rounded-md shadow-lg z-10 min-w-[300px] max-w-[400px] cursor-pointer ${color}`}
      onClick={onClick}
    >
      <p className="text-xl font-bold text-white mb-3">{text}</p>
      <p className="text-sm font-bold text-white mb-2">Possible Drinks</p>
      <div className="grid grid-cols-2 gap-y-0,5 text-white text-sm">
        {cocktails.map((cocktail, index) => (
          <p key={index} className="text-left">
            {cocktail}
          </p>
        ))}
      </div>
    </div>
  );
};

const OwnerPage = () => {
  const ingredients = [
    "Gin",
    "Simple syrup",
    "Vodka",
    "Rum",
    "Mint leaves",
    "Club soda",
    "Blue curacao",
    "Pineapple juice",
    "Tequila",
    "Lime juice",
    "Triple sec",
    "Salt",
    "Apple juice",
    "Water",
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  const handleCardClick = (index) => {
    setSelectedItem(index);
    let ingredients;
    switch (index) {
      case 0:
        ingredients = {
          pump1: "Rum",
          pump2: "Blue curacao",
          pump3: "Simple syrup",
          pump4: "Lime juice",
          pump5: "Pineapple juice",
          pump6: "Gin",
          pump7: "Vodka",
          pump8: "Triple sec",
        };
        break;
      case 1:
        ingredients = {
          pump1: "Ingredient 1B",
          pump2: "Ingredient 2B",
          pump3: "Ingredient 3B",
          pump4: "Ingredient 4B",
          pump5: "Ingredient 5B",
          pump6: "Ingredient 6B",
          pump7: "Ingredient 7B",
          pump8: "Ingredient 8B",
        };
        break;
      case 2:
        ingredients = {
          pump1: "Ingredient 1C",
          pump2: "Ingredient 2C",
          pump3: "Ingredient 3C",
          pump4: "Ingredient 4C",
          pump5: "Ingredient 5C",
          pump6: "Ingredient 6C",
          pump7: "Ingredient 7C",
          pump8: "Ingredient 8C",
        };
        break;
      default:
        break;
    }
    setPumpIngredients(ingredients);
  };

  const pumpTitles = {
    pump1: "Pump 1",
    pump2: "Pump 2",
    pump3: "Pump 3",
    pump4: "Pump 4",
    pump5: "Pump 5",
    pump6: "Pump 6",
    pump7: "Pump 7",
    pump8: "Pump 8",
  };

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

  const router = useRouter();

  useEffect(() => {
    const storedPumpIngredients = localStorage.getItem("pumpIngredients");
    if (storedPumpIngredients) {
      setPumpIngredients(JSON.parse(storedPumpIngredients));
    }
  }, []);

  const handleInputChange = (e) => {
    setPumpIngredients({
      ...pumpIngredients,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("pumpIngredients", JSON.stringify(pumpIngredients));
  };

  const goBackToIndex = () => {
    router.push("/");
  };

  return (
    <div className="bg-white h-full min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-2xl md:text-3xl text-black font-bold mt-20 mb-4">
          Cocktail packs
        </h2>

        <div className="flex justify-center items-center w-full h-1/2 mb-8">
          <Carousel
            className="w-full h-full flex justify-center items-center"
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop
            useKeyboardArrows
            selectedItem={selectedItem}
          >
            <div className="flex justify-center items-center h-full w-full">
              <CarouselCard
                text="Lemony Dream´s"
                onClick={() => handleCardClick(0)}
                color="bg-yellow-500 opacity-60"
                cocktails={[
                  "Bee's Knees",
                  "Caipiroska",
                  "Blue Hawaii",
                  "Blue Daiquiri",
                  "Lime juice",
                  "Pineapple juice",
                ]}
              />
            </div>
            <div className="flex justify-center items-center h-full w-full">
              <CarouselCard
                text="College budget"
                onClick={() => handleCardClick(1)}
                color="bg-teal-950 opacity-80"
                cocktails={[
                  "Cocktail 1B",
                  "Cocktail 2B",
                  "Cocktail 3B",
                  "Cocktail 4B",
                  "Cocktail 5B",
                  "Cocktail 6B",
                ]}
              />
            </div>
            <div className="flex justify-center items-center h-full w-full">
              <CarouselCard
                text="Blueberry Moon"
                onClick={() => handleCardClick(2)}
                color="bg-indigo-950 opacity-80"
                cocktails={[
                  "Cocktail 1C",
                  "Cocktail 2C",
                  "Cocktail 3C",
                  "Cocktail 4C",
                  "Cocktail 5C",
                  "Cocktail 6C",
                ]}
              />
            </div>
          </Carousel>
        </div>

        <h2 className="text-2xl text-black font-bold mb-4">Ingredient Setup</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black w-full max-w-lg px-4"
        >
          {Object.keys(pumpIngredients).map((pump) => (
            <div key={pump} className="flex items-center mb-4">
              <label htmlFor={pump} className="mr-2">
                {pumpTitles[pump]}:
              </label>
              <input
                className="border border-gray-400 overflow-visible w-64 rounded-md p-2 flex-grow"
                type="text"
                id={pump}
                name={pump}
                value={pumpIngredients[pump]}
                onChange={handleInputChange}
                list="ingredients"
              />
            </div>
          ))}
          <datalist id="ingredients">
            {ingredients.map((ingredient, index) => (
              <option key={index} value={ingredient} />
            ))}
          </datalist>
          <button
            className="bg-fuchsia-400 text-white font-semibold text-lg py-3 mt-4 rounded-full shadow-md w-full"
            type="submit"
          >
            Save Ingredients
          </button>
          <button
            className="bg-gray-300 text-black font-semibold text-lg py-3 mt-4 rounded-full shadow-md w-full mb-4"
            onClick={goBackToIndex}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerPage;
