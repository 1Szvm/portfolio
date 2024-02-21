import data from "./projects.json" assert { type: 'json' };
export function renderProjecrs(){
  data.forEach(element => {
    document.querySelector(".projects").innerHTML+=
    `
    <div class="card m-2 text-white" style="width: 18rem;">
      <img class="card-img-top" src=${element.mainImg} alt="">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.descr}</p>
        <a href="${element.gitHub}" class="btn btn-purple" target="_blank"><i class="mx-2 fa-brands fa-github fa-2xl"></i></a>
        <a href="${element.hosted}" class="btn btn-purple" target="_blank">Visit Website</a>
      </div>
    </div>
    `
  });
};