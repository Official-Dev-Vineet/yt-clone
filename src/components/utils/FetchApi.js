import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b11835b5bdmsha015712e30472dfp18d9b9jsn8eaae440785f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchAPI = async (url) => {
 const {data} =  await axios.get(`${BASE_URL}/${url}`,options);
 return data ;
}