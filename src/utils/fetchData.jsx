//configured to make a GET request to an API
export const exerciseOptions = {
  method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
//   params: {
//     limit: '10',
//     offset: '0'
//   },
headers: {
  //The API key ensures that only authorized requests can access the API. 
  //It helps the API provider monitor usage, prevent abuse, and manage billing.
  'x-rapidapi-key': '250d7db7a4mshf7d11781a4dac42p107f74jsn6d59bf8dc767',
  //The host header helps RapidAPI identify which specific API endpoint the 
  //request should be routed to, ensuring that the request reaches the correct service.
  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
}
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

 //makes a network request to the specified URL with the given options.
export const fetchData = async (url, options) => {
     //waits for the fetch request to complete and stores the response.
    const response = await fetch(url, options);
    //since we are using fetch not axios so we need to extract the data
    //extracts the JSON data from the response
    const data = await response.json();

    return data;
}