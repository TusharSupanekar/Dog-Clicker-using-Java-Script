let img = document.querySelector('#dogimage')
let dogbutton = document.querySelector('#dogbutton')

const newimage=()=>{

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((e)=>e.json())
    .then((i)=>{
        console.log(i.message);
        img.innerHTML=`<img src="${i.message}" height="300" width="300">`
    })
}

// newimage()

dogbutton.onclick=()=>newimage()
