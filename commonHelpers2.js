import{S as h,i as y}from"./assets/vendor-18365dff.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/error-80ee8afe.svg",b="https://pixabay.com/api/",c={key:"41647148-76dbe9dab66bab2692c283b6e",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60},S=new h(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery-form"),f=document.querySelector(".search-input"),m=document.querySelector(".gallery"),i=document.querySelector(".loader");u.addEventListener("submit",o=>w(o));function w(o){if(o.preventDefault(),!f.value.trim()){l("Please fill in the search field");return}L().then(r=>v(r)).catch(r=>l(`Something was wrong ${r}`))}function L(){m.innerHTML="",i.style.display="inline-block",c.q=f.value.trim();const o=new URLSearchParams(c).toString();return fetch(`${b}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function v(o){if(!o.total){l("Sorry, there are no images matching your search query. Please, try again!"),i.style.display="none";return}const r=o.hits.map(({largeImageURL:a,webformatURL:n,tags:e,likes:t,views:s,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img class="api-img" src="${n}" alt="${e}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${t}</span>
              <span><b>Views:</b> <br/>${s}</span>
              <span><b>Comments:</b> <br/>${p}</span>
              <span><b>Downloads:</b> <br/>${d}</span>
            </div>
          </a>
        </li>
                  `).join("");m.insertAdjacentHTML("afterbegin",r),i.style.display="none",S.refresh(),u.reset()}function l(o){y.show({position:"topRight",iconUrl:g,message:o,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}
//# sourceMappingURL=commonHelpers2.js.map
