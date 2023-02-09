import { useSelector } from "react-redux";

const NameCategory = () => {
  const nameCatagory = useSelector((state) => {
    return state.ListOfExercisesReducer.list[0];
  });

  return <div>Name</div>;
};

export default NameCategory;
