import { useSelector, useDispatch } from "react-redux";
import { checkFilter } from "../../redux/action.js";
import "./Category.css";

const Category = (props) => {
  const name = props.data.name;
  const id = props.data.id;

  //   const allWorkouts = useSelector((state) => console.log(state));

  const dispatch = useDispatch();

  const exerciseDelete = () => {
    dispatch(checkFilter(id, name));
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      onClick={() => exerciseDelete(id)}
    >
      <div className="img_fone"></div>
      <div style={{ marginLeft: "10px", fontWeight: "600" }}>{name}</div>
    </div>
  );
};

export default Category;
