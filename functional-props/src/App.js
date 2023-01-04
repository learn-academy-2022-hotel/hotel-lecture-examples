import './App.css';
import React, { useState } from 'react'
import FoodItem from "./components/FoodItem";

const App = () => {

  const [menu, setMenu] = useState([
    { name: "Lofthaus Sugar Cookies", ordered: false },
    { name: "Prime Rib", ordered: false},
    { name: "Eggnog", ordered: false},
    { name: "Mac & Cheese", ordered: false},
    { name: "Lumpia", ordered: false}

  ])
//  set selectedItem to represent the index of the clicked on food item
  const orderMenuItem =(selectedItem)=> {
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }


  return (
    <>
      <h1>Hotel Holiday Happening</h1>
      <h3>Menu</h3>
      {menu.map((value, index)=> {
        return(
          <FoodItem 
            foodItem={value} 
            orderMenuItem={orderMenuItem}
            index={index}
         
          />
        )
      }
      ) }
    </>
  );
}

export default App;
