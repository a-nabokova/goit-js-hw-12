import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api'
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, disableLoadBtn, enableLoadBtn, gallery } from './js/render-functions'



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
        hideLoadMoreButton(loadBtn); 

   
   
   valueToShow = input.value.trim();
     
    if (valueToShow === '') {
        iziToast.show({
          message: 'Please fill in the field',
          color: 'red',
          position: 'topRight',

        }) 
        return;
    }  

    page = 1;

    clearGallery(gallery);
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
} else {
  iziToast.show({
    message: 'We are sorry, but you have reached the end of search results.',
    color: 'blue',
    position: 'topRight',
  });
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
  disableLoadBtn(loadBtn); 

  try {

    const data = await getImagesByQuery(valueToShow, page);
    createGallery(data.hits); 
    if (data.hits.length === 0 || page * perPage >= data.totalHits) {
      hideLoadMoreButton(loadBtn);
      iziToast.show({
        message: 'We are sorry, but you have reached the end of search results.'
})
      
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
    enableLoadBtn(loadBtn); 
  }
   

}