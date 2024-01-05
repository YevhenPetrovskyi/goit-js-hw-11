import{S as y,i as h}from"./assets/vendor-18365dff.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/error-80ee8afe.svg",b="https://pixabay.com/api/",i={key:"41647148-76dbe9dab66bab2692c283b6e",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60},S=new y(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery-form"),u=document.querySelector(".search-input"),f=document.querySelector(".gallery"),l=document.querySelector(".loader");c.addEventListener("submit",o=>{if(o.preventDefault(),!u.value.trim()){p("Please fill in the search field");return}L().then(r=>v(r)).catch(r=>console.error("Error:",r))});function L(){f.innerHTML="",l.style.display="inline-block",i.q=u.value.trim();const o=new URLSearchParams(i).toString();return fetch(`${b}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function v(o){if(!o.total){p("Sorry, there are no images matching your search query. Please, try again!"),l.style.display="none";return}const r=o.hits.map(({largeImageURL:a,webformatURL:n,tags:e,likes:t,views:s,comments:d,downloads:m})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img class="api-img" src="${n}" alt="${e}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${t}</span>
              <span><b>Views:</b> <br/>${s}</span>
              <span><b>Comments:</b> <br/>${d}</span>
              <span><b>Downloads:</b> <br/>${m}</span>
            </div>
          </a>
        </li>
                  `).join("");f.insertAdjacentHTML("afterbegin",r),l.style.display="none",i.q="",S.refresh(),c.reset()}function p(o){h.show({position:"topRight",iconUrl:g,message:o,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}
//# sourceMappingURL=commonHelpers2.js.map
