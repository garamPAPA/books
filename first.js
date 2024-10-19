// ...............search..............
let search = document.querySelector(".search-icon")
let nav = document.querySelector(".navbar")
let closeicon = document.querySelector(".close-icon")
let searchbtn = document.querySelector(".close")
// ......contact.......................
let contactclose = document.querySelector(".contact-close")
let contact = document.querySelector(".contact")
let contacticon = document.querySelector(".contact-icon")


search.addEventListener("click",()=>{
    nav.style.display = 'none'
    searchbtn.style.display = 'flex'
})
closeicon.addEventListener("click",()=>{
    searchbtn.style.display = 'none'
    nav.style.display = 'flex'
})

// contact......................................

contacticon.addEventListener("click",()=>{
    contact.style.display = 'flex'
    nav.style.display = 'none'
})
contactclose.addEventListener("click",()=>{
    nav.style.display = 'flex'
    contact.style.display = 'none'
})
