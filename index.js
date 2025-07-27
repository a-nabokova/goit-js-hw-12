import{a as w,S as v,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const S="43833288-fbb1d2e0a0a3e0585e57923e3";async function p(e,o=1){return(await w("https://pixabay.com/api/",{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const h=document.querySelector(".gallery"),q=new v(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function m(e){const o=e.map(({webformatURL:a,largeImageURL:c,tags:t,likes:s,views:i,comments:b,downloads:L})=>` <li class="gallery-item">
        <div class="photo-card">
          <a href="${c}" class="gallery-link">
            <img src="${a}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span class="info-span">${s}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span class="info-span">${i}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span class="info-span">${b}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span class="info-span">${L}</span>
            </p>
          </div>
        </div>
      </li>`).join("");h.insertAdjacentHTML("beforeend",o),q.refresh()}function B(){return h.innerHTML=""}function P(e){e.classList.remove("hidden")}function $(e){e.classList.add("hidden")}function O(e){e.classList.remove("hidden")}function y(e){e.classList.add("hidden")}function H(e){e.disabled=!0}function M(e){e.disabled=!1}const x=document.querySelector(".form"),C=document.querySelector(".input-js"),u=document.querySelector(".loader"),r=document.querySelector(".load-btn");let n=1,d="",g=15,f;x.addEventListener("submit",D);async function D(e){if(e.preventDefault(),y(r),d=C.value.trim(),d===""){l.show({message:"Please fill in the field",color:"red",position:"topRight"});return}n=1,B(),P(u);try{const o=await p(d,n),a=o.hits;if(a.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}m(a),n*g<o.totalHits?O(r):l.show({message:"We are sorry, but you have reached the end of search results.",color:"blue",position:"topRight"})}catch{l.show({message:"Something went wrong",color:"red"})}finally{$(u)}}r.addEventListener("click",E);async function E(){n++,H(r);try{const e=await p(d,n);m(e.hits),(e.hits.length===0||n*g>=e.totalHits)&&(y(r),l.show({message:"We are sorry, but you have reached the end of search results."}));const o=document.querySelector(".gallery-item");o&&(f=o.getBoundingClientRect().height),window.scrollBy({top:f*2,left:0,behavior:"smooth"})}catch(e){console.log(e)}finally{M(r)}}
//# sourceMappingURL=index.js.map
