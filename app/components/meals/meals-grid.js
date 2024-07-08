import MealItem from "@/app/components/meals/meal.item";
import classes from './meals-grid.module.css';

export default function MealsGrid({meals}){

    return (
        <ul>
           <li>
                {meals.map((meal =>
                <MealItem 
                    key={meal.id}
                    {...meal} />
                ))}
           </li>
        </ul>
    );
}