export function about(){
    const motto="Try Fail Learn Succeed Repeat".split(" ")
    const panelBackgrounds = [
        'https://source.unsplash.com/NtbsSBlnMm0/1500x1500&#39',
        'https://source.unsplash.com/cGXdjyP6-NU/1500x1500&#39',
        'https://source.unsplash.com/s9CC2SKySJM/1500x1500&#39',
        'https://source.unsplash.com/aVJh5bgtd8o/1500x1500&#39',
        'https://source.unsplash.com/3MNzGlQM7qs/1500x1500&#39'
    ];
    console.log();
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
}