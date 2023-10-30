import { Notiflix } from "notiflix";
import { refs } from "./refs";
import axios from "axios";
const URL = 'https://api.thecatapi.com/v1';
const KEY = '"live_ua9txp5doSpZ6sxxYDQB4TcrFSWzLOSPZRPPqKwMKrBnHOKkZsE1cUeB11RK1E1w';

axios.defaults.headers.common[`${KEY}`]

export function fetchBreeds() {

    return axios.get(`${URL}/breeds`)
.then(({status,data}) => {
    if(!status === 200) {
        throw new Error(response.status)
    }
    return data})
    }






export function fetchCatByBreed(breedId) {
    const options = {
        params: {
            breed_ids: `${breedId}`
        },
        }
        return axios.get(`${URL}/images/search`, options)
        .then(({status,data}) => {
            if(!status === 200) {
                throw new Error(response.status)
            }
            return data;
        }).then(([{url}]) =>{ 
 fetchBreeds().then((data) => {
const {name,temperament,description} = data.find(el => el.id === breedId);
            return refs.wrapperCat.innerHTML =
            `
            <img class="cat__img" src="${url}" alt=${name} width='500'>
            <div class="cat__thumb">
            <h2>${name}</h2>
            <h3>${temperament}</h3>
            <p>${description}</p></div>`
         });
         return url;

            })

        }


