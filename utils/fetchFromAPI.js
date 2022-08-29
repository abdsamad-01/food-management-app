import axios from "axios";

const BASE_URL = 'https://api.spoonacular.com/recipes/';

const options = {
    method: 'GET',
    url: BASE_URL,
    // params: { tags: 'vegetarian,dessert', number: '1' },
    Headers: {
        'Content-Type': 'application/json'
    }
}


axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});


export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}&apiKey=cecaba984f3e4f6bbb6e865544ba0ddc`, options);

    return data;
}



