import axios from "axios";

const api = axios.create({
    baseURL: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    //params: {sign: 'aquarius', day: 'today'},
    /*headers: {
      'x-rapidapi-key': '2c3d2bb68fmsha8b6a9686fae0d6p1840efjsn986c2755db2b',
      'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }*/
})

/*axios.request(api).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});*/

export default api;