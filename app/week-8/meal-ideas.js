"use client";

import { useState, useEffect, } from "react";

// function to fetch API data
async function fetchMealIdeas ({ ingredient }) { 
    try { 
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const data = await response.json()
        console.log(data)
        return data.meals // returns the meal data from the api
    }
    catch (e) { 
        console.error(e)        
    }
}

export default function MealIdeas({ ingredient }) { 
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    const loadMealIdeas = async() => { 
        if (!ingredient) { 
            return 
        }
        setLoading(true);

        // set the result of the data to the meals variable
        const mealIdeaResults = await fetchMealIdeas({ ingredient })
        setMeals(mealIdeaResults || [])
        setLoading(false);
    }

    useEffect(() => { 
        loadMealIdeas();
    }, [ingredient])

return (
    <div className="bg-white border rounded-xl shadow-md p-5 mt-8 md:mt-0 md:ml-6 md:w-1/2">
      {!ingredient ? (
        <h2 className="text-lg font-semibold text-gray-600">
          Select an item to see meal ideas
        </h2>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4 text-purple-700">
            Meal Ideas for <span className="capitalize">{ingredient}</span>
          </h2>

          {loading ? (
            <p className="text-gray-600 italic">Loading...</p>
          ) : meals.length === 0 ? (
            <p className="text-gray-600 italic">No meal ideas found</p>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="p-3 bg-purple-400 hover:bg-purple-800 rounded-lg cursor-pointer"
                >
                  <span className="font-medium">{meal.strMeal}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

