import{a as L,S as w,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const v="43833288-fbb1d2e0a0a3e0585e57923e3";async function f(e,o=1){return(await L("https://pixabay.com/api/",{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const m=document.querySelector(".gallery"),S=new w(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function h(e){const o=e.map(({webformatURL:r,largeImageURL:l,tags:t,likes:s,views:n,comments:g,downloads:b})=>` <li class="gallery-item">
        <div class="photo-card">
          <a href="${l}" class="gallery-link">
            <img src="${r}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span class="info-span">${s}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span class="info-span">${n}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span class="info-span">${g}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span class="info-span">${b}</span>
            </p>
          </div>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",o),S.refresh()}function q(){return m.innerHTML=""}function P(e){e.classList.remove("hidden")}function B(e){e.classList.add("hidden")}function $(e){e.classList.remove("hidden")}function O(e){e.classList.add("hidden")}const H=document.querySelector(".form"),M=document.querySelector(".input-js"),u=document.querySelector(".loader"),i=document.querySelector(".load-btn");let a=1,d="",y=15,p;H.addEventListener("submit",x);async function x(e){if(e.preventDefault(),d=M.value.trim(),d===""){c.show({message:"Please fill in the field",color:"red",position:"topRight"});return}q(),P(u);try{const o=await f(d,a),r=o.hits;if(r.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}h(r),a*y<o.totalHits&&$(i)}catch{c.show({message:"Something went wrong",color:"red"})}finally{B(u)}}i.addEventListener("click",C);async function C(){a++,i.disabled=!0;try{const e=await f(d,a);h(e.hits),a*y>=e.totalHits&&(O(i),c.show({message:"We are sorry, but you have reached the end of search results."}),a=1);const o=document.querySelector(".gallery-item");o&&(p=o.getBoundingClientRect().height),window.scrollBy({top:p*2,left:0,behavior:"smooth"})}catch(e){console.log(e)}finally{i.disabled=!1}}
//# sourceMappingURL=index.js.map
