import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  const [filterBy, setFilterBy] = useState("All");
  
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
     return food.cuisine === filterBy;
   }
  });

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  
  


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    /*console.log(foods)
    console.log(newFood);*/
    // USE THE SPREAD OPERATOR, BECAUSE REACT WILL NOT RENDER AN ARRAY THAT ISN'T DIFFERENTreturn setFoods(foods.push(newFood));
    const anotherArray = [...foods, newFood]
    setFoods(anotherArray)
   
  }

  /*function handleLiClick(id){
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);  
  }*/
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  /*const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));*/
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
   </div>
  );
}

export default SpicyFoodList;
