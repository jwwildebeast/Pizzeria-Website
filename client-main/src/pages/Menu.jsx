import React from "react";
import Pizza from "../components/Pizza";
import pizzas from '../menuData';

const Menu = () => {
  return (
    <div className="row">
      {pizzas.map((pizza, index) => {
        return (
          <div key={index} className="col-md-4">
            <div>
              <Pizza pizza={pizza}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu;

