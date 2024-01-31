import { motto,panelBackgrounds } from "./assets.js";

motto.forEach(word=>{
    document.querySelector('.panels').innerHTML+=`<div class="panel">${word}</div>`
})
let panelsNLsit=document.querySelectorAll(".panel")
panelsNLsit.forEach((obj,index)=>obj.style.backgroundImage=`url(${panelBackgrounds[index]})`)

document.querySelector(".panels").addEventListener("click",toggelOpen)

function toggelOpen(e){
    if(e.target.classList.contains("open")){
        e.target.classList.toggle("open")
    }else{
        let panelsNLsit=document.querySelectorAll(".panel")
        panelsNLsit.forEach(obj=>{
            if(obj.classList.contains("open")){
                obj.classList.toggle("open")
            }
        })
        e.target.classList.toggle("open")
    }
}