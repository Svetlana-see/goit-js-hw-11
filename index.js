import{a as y,S as g,i as n}from"./assets/vendor-Z6SuAarM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",v="54469620-809557b4428fb405aef4b70a6";async function L(s,r){const a={key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await y.get(h,{params:a})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=document.querySelector(".load-more"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:p,downloads:m})=>`
<li class="gallery-item">
  <a href="${o}">
    <img src="${a}" alt="${e}" loading="lazy" />
  </a>
  <div class="info">
    <div class="info-item">
      <p class="label">Likes</p>
      <p class="value">${t}</p>
    </div>
    <div class="info-item">
      <p class="label">Views</p>
      <p class="value">${i}</p>
    </div>
    <div class="info-item">
      <p class="label">Comments</p>
      <p class="value">${p}</p>
    </div>
    <div class="info-item">
      <p class="label">Downloads</p>
      <p class="value">${m}</p>
    </div>
  </div>
</li>`).join("");d.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){d.innerHTML=""}function q(){u.classList.remove("is-hidden")}function P(){u.classList.add("is-hidden")}function $(){f.classList.remove("is-hidden")}function M(){f.classList.add("is-hidden")}const O=document.querySelector(".form");let c=1,l="";O.addEventListener("submit",async s=>{if(s.preventDefault(),l=s.target.elements["search-text"].value.trim(),!l){n.warning({message:"Please enter a search query"});return}c=1,S(),M(),q();try{const r=await L(l,c);if(r.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}w(r.hits),r.totalHits>15&&$()}catch{n.error({message:"Something went wrong. Please try again later."})}finally{P()}});
//# sourceMappingURL=index.js.map
