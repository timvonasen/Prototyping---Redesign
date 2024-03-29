const cocktails = [
  {
    id: 1,
    name: "Citrus Splash",
    image: "/images/cocktails/vodkacitrussplash.png",
    description: "Vodka, Lime juice, Orange juice",
    ingredients: ["Vodka", "Lime juice", "Orange juice"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 2,
    name: "Cranberry Cooler",
    image: "/images/cocktails/vodkacranberrycooler.png",
    description: "Vodka, Cranberry juice, Soda water",
    ingredients: ["Vodka", "Cranberry juice", "Soda water"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 3,
    name: "Tropical Punch",
    image: "/images/cocktails/tropicalvodkapunch.png",
    description: "Vodka, Pineapple juice, Coconut milk, Orange juice",
    ingredients: ["Vodka", "Pineapple juice", "Coconut milk", "Orange juice"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 4,
    name: "Coco Twist",
    image: "/images/cocktails/vodkacocotwist.png",
    description: "Vodka, Coconut milk, Pineapple juice",
    ingredients: ["Vodka", "Coconut milk", "Pineapple juice"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 5,
    name: "Cranberry Lime",
    image: "/images/cocktails/vodkacranberrylime.png",
    description: "Vodka, Cranberry juice, Lime juice",
    ingredients: ["Vodka", "Cranberry juice", "Lime juice"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 6,
    name: "Soda Splash",
    image: "/images/cocktails/sodavodkasplash.png",
    description: "Vodka, Lime juice, Soda water",
    ingredients: ["Vodka", "Lime juice", "Soda water"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 7,
    name: "Vodka Sunset",
    image: "/images/cocktails/vodkasunset.png",
    description: "Vodka, Orange juice, Cranberry juice, Soda water",
    ingredients: ["Vodka", "Orange juice", "Cranberry juice", "Soda water"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 8,
    name: "Coconut Breeze",
    image: "/images/cocktails/coconutvodkabreeze.png",
    description: "Vodka, Coconut milk, Cranberry juice",
    ingredients: ["Vodka", "Coconut milk", "Cranberry juice"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 9,
    name: "Pina Colada",
    image: "/images/cocktails/pinacolada.png",
    description: "White Rum, Pineapple juice, Coconut milk",
    ingredients: ["White Rum", "Pineapple juice", "Coconut milk"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 10,
    name: "Caribbean Spritz",
    image: "/images/cocktails/caribbeanspritz.png",
    description: "White Rum, Lime juice, Pineapple juice, Soda water",
    ingredients: ["White Rum", "Lime juice", "Pineapple juice", "Soda water"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 11,
    name: "Coco-Citrus Cooler",
    image: "/images/cocktails/cococitruscooler.png",
    description: "White Rum, Lime juice, Coconut milk",
    ingredients: ["White Rum", "Lime juice", "Coconut milk"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 12,
    name: "Coconut Lime Spritz",
    image: "/images/cocktails/coconutlimespritz.png",
    description: "White Rum, Coconut milk, Lime juice, Soda water",
    ingredients: ["White Rum", "Coconut milk", "Lime juice", "Soda water"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 13,
    name: "Caribbean Breeze",
    image: "/images/cocktails/caribbeanbreeze.png",
    description:
      "White Rum, Pineapple juice, Lime juice, Cranberry juice, Soda water",
    ingredients: [
      "White Rum",
      "Pineapple juice",
      "Lime juice",
      "Cranberry juice",
      "Soda water",
    ],
    price: "6€",
    hasAlcohol: true,
  },
  {
    id: 14,
    name: "Coconut Cran Cooler",
    image: "/images/cocktails/coconutcrancooler.png",
    description: "White Rum, Coconut milk, Cranberry juice, Soda water",
    ingredients: ["White Rum", "Coconut milk", "Cranberry juice", "Soda water"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 15,
    name: "Tropical Orange Punch",
    image: "/images/cocktails/tropicalorangepunch.png",
    description: "Orange juice, Pineapple juice, Coconut milk",
    ingredients: ["Orange juice", "Pineapple juice", "Coconut milk"],
    price: "4€",
    hasAlcohol: false,
  },
  {
    id: 16,
    name: "Tropical Fizz",
    image: "/images/cocktails/tropicalfizz.png",
    description: "Pineapple juice, Orange juice, Lime juice, Soda water",
    ingredients: [
      "Pineapple juice",
      "Orange juice",
      "Lime juice",
      "Soda water",
    ],
    price: "4€",
    hasAlcohol: false,
  },
  {
    id: 17,
    name: "Cranberry Tropic",
    image: "/images/cocktails/cranberrytropic.png",
    description: "Pineapple juice, Cranberry juice, Orange juice, Coconut milk",
    ingredients: [
      "Pineapple juice",
      "Cranberry juice",
      "Orange juice",
      "Coconut milk",
    ],
    price: "4€",
    hasAlcohol: false,
  },
  {
    id: 18,
    name: "Cranberry Citrus Splash",
    image: "/images/cocktails/cranberrycitrussplash.png",
    description: "Cranberry juice, Lime juice, Orange juice",
    ingredients: ["Cranberry juice", "Lime juice", "Orange juice"],
    price: "4€",
    hasAlcohol: false,
  },
  {
    id: 19,
    name: "Tropical Paradise",
    image: "/images/cocktails/tropicalparadise.png",
    description: "Pineapple juice, Coconut milk, Orange juice, Cranberry juice",
    ingredients: [
      "Pineapple juice",
      "Coconut milk",
      "Orange juice",
      "Cranberry juice",
    ],
    price: "4€",
    hasAlcohol: false,
  },
  {
    id: 20,
    name: "Citrus Fizz",
    image: "/images/cocktails/citrusfizz.png",
    description: "Lime juice, Orange juice, Soda water",
    ingredients: ["Lime juice", "Orange juice", "Soda water"],
    price: "4€",
    hasAlcohol: false,
  },
  {
    id: 21,
    name: "Bee's Knees",
    image: "/images/cocktails/bekne.jpeg",
    description: "Gin, Lime juice, Simple syrup",
    ingredients: ["Gin", "Lime juice", "Simple syrup"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 22,
    name: "Caipiroska",
    image: "/images/cocktails/caip.jpeg",
    description: "Vodka, Lime juice, Simple syrup",
    ingredients: ["Vodka", "Lime juice", "Simple syrup"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 23,
    name: "Mojito",
    image: "/images/cocktails/mojito.jpeg",
    description: "Rum, Lime juice, Simple syrup, Mint leaves, Club soda",
    ingredients: [
      "Rum",
      "Lime juice",
      "Simple syrup",
      "Mint leaves",
      "Club soda",
    ],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 24,
    name: "Blue Hawaii",
    image: "/images/cocktails/bluehawaii.jpeg",
    description: "Rum, Lime juice, Simple syrup, Blue curacao, Pineapple juice",
    ingredients: [
      "Rum",
      "Lime juice",
      "Simple syrup",
      "Blue curacao",
      "Pineapple juice",
    ],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 25,
    name: "Margarita",
    image: "/images/cocktails/margarita.jpeg",
    description: "Tequila, Lime juice, Triple sec, Salt",
    ingredients: ["Tequila", "Lime juice", "Triple sec"],
    price: "5€",
    hasAlcohol: true,
  },
  {
    id: 26,
    name: "Daiquiri",
    image: "/images/cocktails/daiquiri.jpeg",
    description: "Rum, Lime juice, Simple syrup",
    ingredients: ["Rum", "Lime juice", "Simple syrup"],
    price: "5€",
    hasAlcohol: true,
  },
];

export default cocktails;
