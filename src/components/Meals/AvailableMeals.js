import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tapsilog",
    description: "Silog is a portmanteau of its two components: sinangag (garlic fried rice) and itlog (egg).",
    price: 35.99,
  },
  {
    id: "m2",
    name: "Lumpiang Shanghai",
    description: "filling of ground pork mixed with veggies like carrots",
    price: 6.99,
  },
  {
    id: "m3",
    name: "Barbecue",
    description: "Caramelization, causes roasted vegetables to get sweeter, and meat becomes more savory thanks to the Maillard Reaction or Smoking.",
    price: 24.99,
  },
  {
    id: "m4",
    name: "Isaw",
    description: "dipped in vinegar or sukang pinakurat (vinegar with onions, peppers, and other spices).",
    price: 14.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
