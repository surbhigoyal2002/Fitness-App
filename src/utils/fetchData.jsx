//configured to make a GET request to an API
export const exerciseOptions = {
  method: 'GET',
  headers: {
    //The API key ensures that only authorized requests can access the API. 
    //It helps the API provider monitor usage, prevent abuse, and manage billing.
    'x-rapidapi-key': '250d7db7a4mshf7d11781a4dac42p107f74jsn6d59bf8dc767',
    //The host header helps RapidAPI identify which specific API endpoint the 
    //request should be routed to, ensuring that the request reaches the correct service.
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '250d7db7a4mshf7d11781a4dac42p107f74jsn6d59bf8dc767',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


 //makes a network request to the specified URL with the given options.
// export const fetchData = async (url, options) => {
//      //waits for the fetch request to complete and stores the response.
//     const response = await fetch(url, options);
//     //since we are using fetch not axios so we need to extract the data
//     //extracts the JSON data from the response
//     const data = await response.json();

//     return data;
// }
export const fetchData = async (url, options) => {
  try {
      // Wait for the fetch request to complete
      const response = await fetch(url, options);

      // Check if the response status is in the successful range (200-299)
      if (!response.ok) {
          // If the response is not okay, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the raw text response
      const text = await response.text();
      console.log('Response Text:', text);

      // Try to parse the JSON data from the response text
      const data = JSON.parse(text);
      return data;

  } catch (error) {
      // Handle and log any errors that occurred during the fetch or JSON parsing
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error if needed, or handle it appropriately
  }
};
