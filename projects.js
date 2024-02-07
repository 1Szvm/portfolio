import data from "./portfolio.json" assert{type:"json"}

export function projects(){
    data.forEach(e=>{
        document.querySelector(".projects").innerHTML+=`
        <div class="card" style="width: 18rem;">
            <img src="${e.images}" class="card-img-top text-white" alt="image of the program">
            <div class="card-body">
                <h5 class="card-title text-white">${e.name}</h5>
                <p class="card-text text-white">${e.descr}</p>
                <a herf="${e.gitHub}" class="btn btn-purple"><i class="mx-2 fa-brands fa-github fa-xl" style="color:rgb(45, 45, 60);"></i></i></a>
                <a herf="${e.hosted}" class="btn btn-purple">Visit website</a>
            </div>
        </div>
        `
    })
}