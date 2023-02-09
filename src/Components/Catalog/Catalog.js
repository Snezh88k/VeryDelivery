import Category from "../Category/Category.js";
import "./Catalog.css";

const Catalog = () => {
  const Categories = [
    { name: "Молоко и яйца", id: "1" },
    { name: "Овощи и зелень", id: "2" },
    { name: "Фрукты и ягоды", id: "3" },
    { name: "Мясо и птица", id: "4" },
    { name: "Рыба и морепродукты", id: "5" },
    { name: "Заморозка", id: "6" },
    { name: "Вода и напитки", id: "7" },
    { name: "Колбасы и сосиски", id: "8" },
    { name: "Хлеб и выпечка", id: "9" },
    { name: "Макароны и крупы", id: "10" },
  ];

  return (
    <div>
      <div className="name-category">Каталог</div>
      {Categories.map((item) => {
        return <Category data={item} />;
      })}
    </div>
  );
};

export default Catalog;
