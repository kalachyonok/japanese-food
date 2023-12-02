import styles from "./MealList.module.css";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";
import { useEffect, useState } from "react";

export const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://japanise-food-29468-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key={meal.id}
      id={meal.id}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
