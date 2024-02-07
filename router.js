import { about } from "./motto.js"

const routes={
    '':'home.html',
    'about':'about.html',
    'contact':'contact.html'
}
const loadPage=async(url, domObj)=>{
    const respomse=await fetch(url)
    const html=await respomse.text()
    domObj.innerHTML=html
    if(url=="about.html"){
      about()
    }
}

window.addEventListener("hashchange",()=>{
    navgate()
})

function navgate(){
    let hash=window.location.hash.substring(1)
    let page=routes[hash]||"404.html"
    loadPage(page,document.querySelector(".content"))
}

loadPage("home.html",document.querySelector(".content"))