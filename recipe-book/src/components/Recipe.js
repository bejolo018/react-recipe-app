import React from 'react'
import style from './recipe.module.css';
import '../App.css';

const Recipe = ({title, calories, image, ingredients}) => {

    function calorieRound(){
        return Math.round(calories)
    }

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className="calories">{calorieRound()} calories</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>))
                }
            </ol>
            
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe