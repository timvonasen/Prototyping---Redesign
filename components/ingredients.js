import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCard = ({ text, onClick, color, cocktails, backgroundImage }) => {
  return (
    <div
      className={`relative flex flex-col p-4 items-start justify-start h-40 w-80 rounded-md shadow-lg z-10 min-w-[300px] max-w-[400px] cursor-pointer ${color}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      <p className="text-xl font-bold text-white mb-2">{text}</p>
      <div className="grid grid-cols-2 gap-y-1 text-white text-sm">
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
    "white rum",
    "passion fruit puree",
    "lime juice",
    "simple syrup",
    "club soda",
    "peach puree",
    "prosecco",
    "watermelon juice",
    "sparkling water",
    "light rum",
    "pineapple juice",
    "coconut cream",
    "kiwi puree",
    "mango puree",
    "orange juice",
    "strawberry syrup",
    "lemon juice",
    "water",
    "blue curacao",
    "raspberry syrup",
    "gin",
    "orange juice",
    "strawberry syrup",
    "lemon juice",
    "water",
    "blue curacao",
    "raspberry syrup",
    "gin",
  ];

  const [selectedItem, setSelectedItem] = useState(0);
  const [pumpState, setPumpState] = useState(false);

  const togglePump = async (state) => {
    console.log("Toggling pump to state:", state ? "on" : "off"); // Add this line
    try {
      const esp8266Url = `http://172.21.26.133/togglePump?state=${
        state ? "on" : "off"
      }`;
      const response = await fetch(esp8266Url);
      const data = await response.text();
      console.log("Pump toggle response:", data);
    } catch (error) {
      console.error("Error toggling pump:", error);
    }
  };

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
          pump1: "Cranberry juice",
          pump2: "Vodka",
          pump3: "White Rum",
          pump4: "Lime juice",
          pump5: "Coconut milk",
          pump6: "Orange juice",
          pump7: "Pineapple juice",
          pump8: "Soda water",
        };
        break;
      case 2:
        ingredients = {
          pump1: "Whiskey",
          pump2: "Sweet vermouth",
          pump3: "Cherry liqueur",
          pump4: "Orange bitters",
          pump5: "Dry vermouth",
          pump6: "Campari",
          pump7: "Coconut cream",
          pump8: "Pineapple rum",
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
        <h2 className="text-2xl md:text-3xl text-black font-bold mt-12 mb-5">
          Cocktail packs
        </h2>
        <div className="flex justify-center items-center w-full h-1/2 mb-10">
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
                color="bg-yellow-500 opacity-80"
                backgroundImage="/images/packs/lemonydreams.png"
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
                text="Tropical Breeze"
                onClick={() => handleCardClick(1)}
                color="bg-teal-950 opacity-80"
                backgroundImage="/images/packs/Tropicalbreeze.png"
                cocktails={[
                  "Citrus Splash",
                  "Cranberry Cooler ",
                  "Tropical Punch",
                  "Coco Twist",
                  "Pina Colada",
                  "Tropical Paradise",
                  "Lime Spritz",
                  "and 13 more....",
                ]}
              />
            </div>
            <div className="flex justify-center items-center h-full w-full">
              <CarouselCard
                text="Blueberry Moon"
                onClick={() => handleCardClick(2)}
                color="bg-indigo-950 opacity-80"
                backgroundImage="/images/packs/blueberrymoon.png"
                cocktails={[
                  "Manhattan",
                  "Old Fashioned",
                  "Boulevardier",
                  "Negroni",
                  "Rob Roy",
                  "Pina Colada",
                ]}
              />
            </div>
          </Carousel>
        </div>
        <h2 className="text-2xl text-black mt-5 font-bold mb-5">
          Ingredient Setup
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black w-128 max-w-lg px-4"
        >
          {Object.keys(pumpIngredients).map((pump) => (
            <div key={pump} className="flex flex-col mb-4">
              <label htmlFor={pump} className="pb-1 text-sm">
                {pumpTitles[pump]}
              </label>
              <input
                className="border border-gray-400 overflow-visible rounded-md p-2 flex-grow"
                type="text"
                id={pump}
                name={pump}
                value={pumpIngredients[pump]}
                onChange={handleInputChange}
                list="ingredients"
                style={{ width: "320px" }}
              />
            </div>
          ))}
          <datalist id="ingredients">
            {/* Ingredient options go here */}
          </datalist>

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
