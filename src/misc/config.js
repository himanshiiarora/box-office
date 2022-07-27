const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
    const response = await fetch(`${API_BASE_URL}${queryString}`).then(r => r.json())
    return response;

    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //   .then(r => r.json())
    //   .then(result => {
    //     setResults(result);
    //     console.log(result);
    //   // It will fetch some data from the given link by using the input and then the response 'r' will be 
    //   // converted to json and then the result will be rendered
    // });
}