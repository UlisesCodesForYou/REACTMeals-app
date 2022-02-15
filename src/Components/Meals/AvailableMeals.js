import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const menuFetcher = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://menu-5b54e-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].Name,
          description: responseData[key].Description, // This transforms the fetched data into the loadedMeals array.
          price: responseData[key].Price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    menuFetcher().catch((error) => {
      // This (error) function is responsible of handling any errors.
      setIsLoading(false);
      error(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
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
