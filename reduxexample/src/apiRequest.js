import { product } from "./productSlice"
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': '372e1be677mshb27e20e9a8d6ffbp116237jsn3d8a3869bb79',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};


async function Request(dispatch,id){
 await axios.request(options).then(function (response) {
	    console.log(response.data);
      dispatch(product(response.data.products))
    }).catch(function (error) {
        console.error(error);
    });
}
// Request()

  export default Request;