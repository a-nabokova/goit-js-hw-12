
 import axios from "axios";

const API_KEY = '43833288-fbb1d2e0a0a3e0585e57923e3'; 

 
  
export async function getImagesByQuery(query, page = 1) {

    
        const response = await  axios('https://pixabay.com/api/', {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: 'horizontal',
                safesearch: true,
                per_page: 15,
                page: page,
            }
        })
       
        return response.data;

    
}