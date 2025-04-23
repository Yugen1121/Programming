import { useEffect, useState } from "react";
import ApiFetch from "./ApiFetch";
import {useState} from "react";
function MealPlanner(){
    
    const [meals, updateMeals] = useState(null)
    const [error, updateError] = useState(null);

    useEffect(()=>{
        ApiFetch('https://api.api-ninjas.com/v1/nutrition?query=sadasdsa', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'oT2BcV4EzNa+nmi3iquAcw==uw3ZYFD5eGanlLOa'
        }
      })
        .then((data)=>{
            updateMeals(data)
        })
        .catch(error => {
            updateError(error);
        })
    }, [])
    
}

export default MealPlanner;