import{i as f,a as b,S as $}from"./assets/vendor-951421c8.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("loader-container"),l=document.getElementById("searchForm"),d=document.getElementById("searchInput"),c=document.getElementById("gallery"),e=document.getElementById("loadMoreButton"),s=document.getElementById("endMessage"),r="41934305-8f787e974a2ef1238ff7fef77";let i=1,y=0,u="";p(n),e.style.display="none",s.style.display="none",l.addEventListener("submit",async function(a){a.preventDefault(),i=1,e.style.display="none",v();const o=d.value.trim();if(o===""){f.error({title:"Error",message:"Please enter a search term"}),p(n);return}u=o,w(n);try{await m(u)}finally{p(n)}});async function m(a){try{const o=await b.get("https://pixabay.com/api/",{params:{key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:i}});if(y=o.data.totalHits,o.data.hits.length===0)f.error({title:"Error",message:"No images found for the provided search term"});else if(L(o.data.hits),i*40>=y?(e.style.display="none",g()):e.style.display="block",i>1){const h=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:h*2,behavior:"smooth"})}}catch{f.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}function g(){s.style.display="block"}function v(){s.style.display="none"}e.addEventListener("click",async function(){i++,await m(u)});function w(a){a&&(a.style.display="block")}function p(a){a&&(a.style.display="none")}function L(a){const o=a.map(t=>`
          <div class="gallery-item">
            <a href="${t.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${t.likes}, Views: ${t.views}, Comments: ${t.comments}, Downloads: ${t.downloads}">
              <img src="${t.webformatURL}" alt="${t.tags}" data-src="${t.largeImageURL}" data-caption="Likes: ${t.likes}, Views: ${t.views}, Comments: ${t.comments}, Downloads: ${t.downloads}">
            </a>
            <div class="image-stats">
              <div class="stat-item">
                <p class="stat-label">Likes:</p>
                <p class="stat-value">${t.likes}</p>
              </div>
              <div class="stat-item">
                <p class="stat-label">Views:</p>
                <p class="stat-value">${t.views}</p>
              </div>
              <div class="stat-item">
                <p class="stat-label">Comments:</p>
                <p class="stat-value">${t.comments}</p>
              </div>
              <div class="stat-item">
                <p class="stat-label">Downloads:</p>
                <p class="stat-value">${t.downloads}</p>
              </div>
            </div>
          </div>
        `).join("");c.insertAdjacentHTML("beforeend",o),new $(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
