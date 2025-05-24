import tiramisu from "../image/tiramisu.jpg";
import lotus from "../image/lotus.jpg";
import zamel from "../image/zamel.jpg";
import Strawberrycheesecake from "../image/Strawberrycheesecake.jpg";
const items = [
  {
    id: 1,
    name: "Lotus Cheesecake",
    category: "Dessert",
    description: "A rich cheesecake infused with Lotus Biscoff flavor.",
    detailedDescription:
      "Indulge in the perfect blend of creamy cheesecake and caramelized Lotus Biscoff spread, layered over a crunchy Biscoff cookie crust. A must-try for cookie butter lovers.",
    image: lotus,
    popular: true,
    sizes: [{ S: 3.0 }, { M: 7.5 }],
  },
  {
    id: 4,
    name: "Strawberry Cheesecake",
    category: "Dessert",
    description: "Cheesecake topped with fresh strawberries.",
    detailedDescription:
      "A smooth and creamy cheesecake topped with a generous layer of fresh strawberries and strawberry glaze. Balanced in sweetness and bursting with fruity flavor.",
    image: Strawberrycheesecake,
    popular: true,
    sizes: [{ S: 3.0 }, { M: 7.5 }],
  },
  {
    id: 2,
    name: "Tiramisu",
    category: "Dessert",
    description: "Classic Italian dessert with coffee and mascarpone.",
    detailedDescription:
      "This authentic Italian dessert features layers of espresso-soaked ladyfingers and rich mascarpone cream, finished with a dusting of cocoa powder. Elegant and irresistible.",
    image: tiramisu,
    popular: true,
    sizes: [{ S: 3.3 }, { M: 7.5 }],
  },
  {
    id: 3,
    name: "Lazy Cat (Ahmad Al Zamel Trend)",
    category: "Trending",
    description: "Trendy dessert inspired by Ahmad Al Zamel's Lazy Cat.",
    detailedDescription:
      "A playful and delicious dessert inspired by the Lazy Cat meme, featuring layers of chocolate mousse, crushed biscuits, and a touch of humor. A viral treat that tastes as good as it looks.",
    image: zamel,
    popular: true,
    sizes: [{ S: 3.0 }, { M: 7.5 }],
  },
];

export default items;
