import React from 'react'

const FoodItem = (props, thing) => {
  console.log("props: ", props)
  return(
    <>
      <h4>{props.foodItem.name}</h4>
      {/* conditional rendering -- shortcut from */}
      {!props.foodItem.ordered && <h4>NOT ORDERED!</h4>}
      {/* add anonymous function to stop the Immediate invoked functionality */}
      <button onClick={()=> {props.orderMenuItem(props.index)}}>Order</button>

          {/*
           anonymous function syntax:  
           const notAnonymous = ()=> {}
           */}
    </>
    )
}

export default FoodItem