import{S as d,i as y}from"./assets/vendor-18365dff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="/goit-js-hw-11/assets/error-80ee8afe.svg",g="https://pixabay.com/api/",c={key:"41647148-76dbe9dab66bab2692c283b6e",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60},b=new d(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),S=document.querySelector(".gallery-form"),u=document.querySelector(".search-input"),f=document.querySelector(".gallery"),i=document.querySelector(".loader");S.addEventListener("submit",w);function w(o){if(o.preventDefault(),!u.value.trim()){l("Please fill in the search field");return}const t=o.currentTarget;L().then(s=>v(s)).catch(s=>l(`Something was wrong ${s}`)).finally(()=>{t.reset(),b.refresh()})}function L(){f.innerHTML="",i.style.display="inline-block",c.q=u.value.trim();const o=new URLSearchParams(c).toString();return fetch(`${g}?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function v(o){if(!o.total){l("Sorry, there are no images matching your search query. Please, try again!"),i.style.display="none";return}const t=o.hits.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:n,comments:m,downloads:p})=>`<li class="gallery-item">
          <a href="${s}">
            <img class="api-img" src="${a}" alt="${e}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${r}</span>
              <span><b>Views:</b> <br/>${n}</span>
              <span><b>Comments:</b> <br/>${m}</span>
              <span><b>Downloads:</b> <br/>${p}</span>
            </div>
          </a>
        </li>`).join("");f.insertAdjacentHTML("afterbegin",t),i.style.display="none"}function l(o){y.show({position:"topRight",iconUrl:h,message:o,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}
//# sourceMappingURL=commonHelpers2.js.map
