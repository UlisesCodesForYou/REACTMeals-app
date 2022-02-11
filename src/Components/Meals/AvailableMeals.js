import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";



const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li>
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card className={classes.Card}>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
