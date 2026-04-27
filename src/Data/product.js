import zobo from "../assets/zobo.jpeg";
import tigernut from "../assets/tigernut.jpeg";
import yoghurt from "../assets/youghurt.jpeg";
import pineapple from "../assets/pineapple.jpeg";
import watermelon from "../assets/watermelon.jpeg";
import peanut from "../assets/Peanut.png";

const product = [
  {
    id: 1,
    name: "Bethosin Bliss Zobo Drink",
    description:
      "Fresh homemade zobo drink in Nigeria made from natural hibiscus leaves. A healthy and refreshing drink perfect for any time of the day.",
    image: zobo,
    bestSeller: true,

    variants: [
      { size: "35cl", price: 700 },
      { size: "50cl", price: 1000 },
    ],
  },

  {
    id: 3,
    name: "Bethosin Bliss Tigernut Drink",
    description:
      "Creamy tigernut drink made in Nigeria using natural ingredients. Rich in nutrients and perfect for a healthy lifestyle.",
    image: tigernut,
    bestSeller: true,

    variants: [
      { size: "35cl", price: 1500 },
      { size: "50cl", price: 2000 },
    ],
  },

  {
    id: 4,
    name: "Bethosin Bliss Flavoured Yoghurt",
    description:
      "Delicious homemade yoghurt drink. Smooth, creamy and refreshing for everyday enjoyment in Nigeria.",
    image: yoghurt,
    bestSeller: true,

    variants: [
      { size: "35cl", price: 2000 },
      { size: "50cl", price: 2500 },
    ],
  },

  {
    id: 5,
    name: "Bethosin Bliss Coated Peanuts",
    description:
      "Crunchy coated peanuts snack in Nigeria, rich in protein and perfect for quick energy and healthy snacking.",
    image: peanut,

    variants: [
      { size: "Small Pack", price: 1500 },
      { size: "Big Pack", price: 2500 },
    ],
  },

  {
    id: 6,
    name: "Bethosin Bliss Pineapple Ginger Juice",
    description:
      "Fresh pineapple and ginger juice made in Nigeria. A refreshing drink with a spicy twist, perfect for boosting your energy.",
    image: pineapple,
    bestSeller: true,

    variants: [
      { size: "35cl", price: 1200 },
      { size: "50cl", price: 1800 },
    ],
  },

  {
    id: 7,
    name: "Bethosin Bliss Watermelon Apple Juice",
    description:
      "Refreshing watermelon and apple juice made from fresh fruits in Nigeria. Light, sweet and perfect for hydration.",
    image: watermelon,

    variants: [
      { size: "35cl", price: 1200 },
      { size: "50cl", price: 1800 },
    ],
  },
];

export default product;
