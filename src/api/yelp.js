import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos',
    // headers: {
    //     "x-rapidapi-key": "ejsnfd3203a72118",
	//     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	//     "useQueryString": true
    // }
})