import ProductCard from "../Product_card/Product_card";
import { useSelector } from "react-redux";
import "./Products.css";

const Products = (props) => {
  const allWorkouts = useSelector((state) => {
    return state.ListOfExercisesReducer.list[0][0];
  });

  const allWorkoutsss = useSelector((state) => {
    return state.ListOfExercisesReducer.list[0][1];
  });

  console.log(allWorkoutsss, "ss");
  console.log(allWorkouts, "sZs");

  const ProductsArr = [
    {
      id: "1201",
      backgroundImage:
        "https://avatars.mds.yandex.net/get-eda/3506804/139e171219ebdffb7099a0d8d25abbc0/400x400nocrop",
      name: "Йогурт",
      catagory: "1",
      pod_category: "milk",
      weight: "1000 г",
      makeBy: "Russia",
      country: "Russia",
      price: "45RUB",
      nalichie: "yes",
    },
    {
      id: "1201",
      backgroundImage:
        "https://avatars.mds.yandex.net/get-eda/3506804/139e171219ebdffb7099a0d8d25abbc0/400x400nocrop",
      name: "Йогурт",
      catagory: "1",
      pod_category: "milk",
      weight: "1000 г",
      makeBy: "Russia",
      country: "Russia",
      price: "45RUB",
      nalichie: "yes",
    },
    {
      id: "1201",
      backgroundImage:
        "https://avatars.mds.yandex.net/get-eda/3506804/139e171219ebdffb7099a0d8d25abbc0/400x400nocrop",
      name: "Йогурт",
      catagory: "1",
      pod_category: "milk",
      weight: "1000 г",
      makeBy: "Russia",
      country: "Russia",
      price: "45RUB",
      nalichie: "yes",
    },
    {
      id: "1201",
      backgroundImage:
        "https://avatars.mds.yandex.net/get-eda/3506804/139e171219ebdffb7099a0d8d25abbc0/400x400nocrop",
      name: "Йогурт",
      catagory: "1",
      pod_category: "milk",
      weight: "1000 г",
      makeBy: "Russia",
      country: "Russia",
      price: "45RUB",
      nalichie: "yes",
    },
    {
      id: "1201",
      backgroundImage:
        "https://avatars.mds.yandex.net/get-eda/3506804/139e171219ebdffb7099a0d8d25abbc0/400x400nocrop",
      name: "Йогурт",
      catagory: "1",
      pod_category: "milk",
      weight: "1000 г",
      makeBy: "Russia",
      country: "Russia",
      price: "45RUB",
      nalichie: "yes",
    },

    {
      id: "1202",
      backgroundImage:
        "https://avatars.mds.yandex.net/get-eda/3454897/f2970754f9fa027955abb408218a3929/400x400nocrop",
      name: "Бананы",
      catagory: "1",
      pod_category: "milk",
      weight: "500 г",
      makeBy: "Russia",
      country: "Russia",
      price: "66RUB",
      nalichie: "yes",
    },

    {
      id: "1203",
      backgroundImage:
        "  https://avatars.mds.yandex.net/get-eda/3507668/f7b408ceb28d0265df56a35b980c6d41/400x400nocrop",
      name: "Молоко",
      catagory: "2",
      pod_category: "milk",
      weight: "500 г",
      makeBy: "Russia",
      country: "Russia",
      price: "120RUB",
      nalichie: "yes",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="category_name">{allWorkoutsss}</div>
      <div className="products_block">
        {ProductsArr.map((item) => {
          if (item.catagory == allWorkouts) {
            return <ProductCard data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Products;
