import { MealList } from "./MealList.js";
import { PromoText } from "./PromoText.js";
import React from "react";

export const Meals = () => {
  return (
    <React.Fragment>
      <PromoText />
      <MealList />
    </React.Fragment>
  );
};
