import{i as p,a as B,S as I}from"./assets/vendor-951421c8.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("loader-container"),l=document.getElementById("searchForm"),d=document.getElementById("searchInput"),i=document.getElementById("gallery"),e=document.getElementById("loadMoreButton"),o=document.getElementById("endMessage"),r="41934305-8f787e974a2ef1238ff7fef77";let c=1,y=0,u="";f(n),e.style.display="none",o.style.display="none",l.addEventListener("submit",async function(t){t.preventDefault(),c=1,e.style.display="none",b();const a=d.value.trim();if(a===""){p.error({title:"Error",message:"Please enter a search term"}),f(n);return}u=a,L(),$(n);try{await m(u)}finally{f(n)}});async function m(t){try{g();const a=await B.get("https://pixabay.com/api/",{params:{key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:c}});if(y=a.data.totalHits,a.data.hits.length===0)p.error({title:"Error",message:"No images found for the provided search term"});else if(x(a.data.hits),c*40>=y?(e.style.display="none",w()):e.style.display="block",c>1){const v=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:v*2,behavior:"smooth"})}}catch{p.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{h()}}function L(){i.innerHTML=""}function w(){o.style.display="block"}function b(){o.style.display="none"}e.addEventListener("click",async function(){c++,E(),g(),await m(u),h()});function E(){e.style.display="none"}function $(t){t&&(t.style.display="block")}function f(t){t&&(t.style.display="none")}function g(){const t=document.createElement("div");t.textContent="Loading images, please wait...",t.classList.add("loading-text"),e.parentNode.insertBefore(t,e.nextSibling)}function h(){const t=document.querySelector(".loading-text");t&&t.remove()}function x(t){const a=t.map(s=>`
          <div class="gallery-item">
            <a href="${s.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${s.likes}, Views: ${s.views}, Comments: ${s.comments}, Downloads: ${s.downloads}">
              <img src="${s.webformatURL}" alt="${s.tags}" data-src="${s.largeImageURL}" data-caption="Likes: ${s.likes}, Views: ${s.views}, Comments: ${s.comments}, Downloads: ${s.downloads}">
            </a>
            <div class="image-stats">
              <div class="stat-item">
                <p class="stat-label">Likes:</p>
                <p class="stat-value">${s.likes}</p>
              </div>
              <div class="stat-item">
                <p class="stat-label">Views:</p>
                <p class="stat-value">${s.views}</p>
              </div>
              <div class="stat-item">
                <p class="stat-label">Comments:</p>
                <p class="stat-value">${s.comments}</p>
              </div>
              <div class="stat-item">
                <p class="stat-label">Downloads:</p>
                <p class="stat-value">${s.downloads}</p>
              </div>
            </div>
          </div>
        `).join("");i.insertAdjacentHTML("beforeend",a),new I(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
