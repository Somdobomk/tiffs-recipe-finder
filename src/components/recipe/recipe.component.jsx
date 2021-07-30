import React from 'react';
import './recipe.styles.css';

export const Recipe = ({ title, calories, totalTime, image, ingredients, url }) => (
  <div className="recipe">
    <h1 className="recipe_title">{title}</h1>
    <div className="image_div">
      <img className="image" src={image} alt="" />
    </div>
    {/* <p className="calories">Calories: {parseInt(calories)} Kcal</p> */}
    <p className="calories">Calories: {parseInt(calories)} </p>
    <p className="totalTime"><i className="far fa-clock"></i>{totalTime}</p>

    <h2>Ingredients:</h2>
    <ul className="ingredients">
      {ingredients.map((ingredient, index) => (
        <li className="ingredient" key={index}>
          <i className="fas fa-caret-right" /> {ingredient.text}
        </li>
      ))}
      {/* <p className="url"><a href = "URL_ENTERED">{url}</a></p> */}
    </ul>
  </div>
);
