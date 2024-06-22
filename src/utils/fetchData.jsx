export const exerciseOptions = {
  method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
//   params: {
//     limit: '10',
//     offset: '0'
//   },
headers: {
  'x-rapidapi-key': '250d7db7a4mshf7d11781a4dac42p107f74jsn6d59bf8dc767',
  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
}
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    //since we are using fetch not axios so we need to extract the data
    const data = await response.json();

    return data;
}