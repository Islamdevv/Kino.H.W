let cont = document.querySelector('.container')

let API = 'https://www.omdbapi.com/?apikey=b6003d8a&s=All';
fetch(API).then((data)=> data.json()).then((unpacked)=> {
    unpacked.Search.forEach((x)=>{
        cont.innerHTML +=`
        <div class='block'>
        <div class='block1'><img width='200px' height='300px'src='${x.Poster}'/>
        <h4>${x.Title}</h4><p>Year: ${x.Year}</p></div>
        </div>
        `
    })
})