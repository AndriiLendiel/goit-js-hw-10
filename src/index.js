



import Notiflix from "notiflix";
import { refs } from "./js/refs";
import { fetchBreeds } from "./js/CatsAPI";
import { fetchCatByBreed } from "./js/CatsAPI";
import 'slim-select/dist/slimselect.css';
import SlimSelect from "slim-select";



let arr = [];




fetchBreeds().then(data => {
data.map(({name,id}) =>{
arr.push({text: name, value: id });
})

new SlimSelect({
    select: '.breed-select',
    settings: {
        placeholderText: 'Custom Placeholder Text',
      },
    data: arr,
});
}).catch(error =>{
    fetchError() 
    })



refs.breedSelect.addEventListener('change', handleChange)




function handleChange(e) {
    e.preventDefault();
refs.loader.classList.remove('is-hidden')
fetchCatByBreed(e.currentTarget.value).then(data => {
refs.loader.classList.add('is-hidden');

Notiflix.Notify.success('Success');
refs.wrapperCat.classList.remove('is-hidden');
})
.catch(error => {
    fetchError() 
})

}

function fetchError() {
    refs.loader.classList.add('is-hidden')
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
}





















