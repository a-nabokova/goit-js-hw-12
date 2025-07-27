
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import { loader } from '../main';
// import { loadBtn } from '../main';
 
export const gallery = document.querySelector('.gallery');
 


 const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });

 

export function createGallery(images) {
   const markup =  images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return ` <li class="gallery-item">
        <div class="photo-card">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span class="info-span">${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span class="info-span">${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span class="info-span">${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span class="info-span">${downloads}</span>
            </p>
          </div>
        </div>
      </li>`
     }
    ).join('');

      gallery.insertAdjacentHTML('beforeend', markup);


 lightbox.refresh();
}



export function clearGallery() {
    return gallery.innerHTML = '';
 
}

export function showLoader(loader) {
     loader.classList.remove('hidden');

}

export function hideLoader(loader) {
    loader.classList.add('hidden');
}

export function showLoadMoreButton(loadBtn) {
  loadBtn.classList.remove('hidden');
}

export function hideLoadMoreButton(loadBtn) {
  loadBtn.classList.add('hidden');
}

export function disableLoadBtn(loadBtn) {
  loadBtn.disabled = true;
}

export function enableLoadBtn(loadBtn) {
  loadBtn.disabled = false;
}

  