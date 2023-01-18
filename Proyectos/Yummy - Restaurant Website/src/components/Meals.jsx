import React from "react";
import { meals } from "../Data";

const Meal = () => {
  return (
    <div className="section" id="meal">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">
          Platillos más vendidos
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {meals.map((meal) => {
            return (
              <div
                className="p-4 shadow-lg hover:shadow transition-all duration-300"
                key={meal.id}
              >
                <img
                  src={meal.image}
                  alt=""
                  className="rounded-lg mb-4 transition hover:scale-150"
                />
                <div className="flex items-center justify-between mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold">
                    {meal.name}
                  </div>
                  <div className="flex items-center gap-3">
                    <button>-</button>
                    <span className="text-[0.85rem]">2</span>
                    <button>+</button>
                  </div>
                </div>
                <p className="text-[0.85rem] opacity-70 mb-4">
                  Ingredientes:
                  {meal.ingredients}
                </p>
                <div className="flex items-center justify-between font-bold">
                  <span>{meal.price}</span>
                  <span className="btn cursor-pointer p-3 opacity-40 transition hover:opacity-80">
                    Añadir al carrito
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meal;
