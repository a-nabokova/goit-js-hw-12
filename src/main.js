import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api'
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, gallery } from './js/render-functions'



const form = document.querySelector('.form');
const input = document.querySelector('.input-js');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn'); 

let page = 1; 
let valueToShow = '';
let perPage = 15;
let galleryCardHeight;

  
form.addEventListener('submit', handleSubmit);

  async function handleSubmit(event) {
   event.preventDefault(); 
   
   
   valueToShow = input.value.trim();
     
    if (valueToShow === '') {
        iziToast.show({
          message: 'Please fill in the field',
          color: 'red',
          position: 'topRight',

        }) 
        return;
    }  

      clearGallery();
      showLoader(loader);

    try {
      const data = await getImagesByQuery(valueToShow, page)
        
      const items = data.hits; 
       
        if (items.length === 0) {
          iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: 'red',
            position: 'topRight',
          });
          return;
        }
      createGallery(items);
       

      if (page * perPage < data.totalHits) {
         showLoadMoreButton(loadBtn);
       }
      
    } catch(error) {
        iziToast.show({
        message: 'Something went wrong',
        color: 'red',
      });
    } finally {
      hideLoader(loader); 
    }
     
}

 

loadBtn.addEventListener('click', onLoadBtn);

async function onLoadBtn() {
  page++;
  loadBtn.disabled = true; 

  try {

    const data = await getImagesByQuery(valueToShow, page);
    createGallery(data.hits); 
    if (page * perPage >= data.totalHits) {
      hideLoadMoreButton(loadBtn);
      iziToast.show({
        message: 'We are sorry, but you have reached the end of search results.'
})
      page = 1; 
    }
    
     const galleryCard = document.querySelector('.gallery-item');

      if(galleryCard) {
        galleryCardHeight = galleryCard.getBoundingClientRect().height;
      }

      window.scrollBy({
      top: galleryCardHeight * 2,
      left: 0,
      behavior: 'smooth',
    });
     

  } catch (error) {
    console.log(error);

  } finally {
    loadBtn.disabled = false; 
  }
   

}