// variables del texto
const h1desc = document.getElementById("h1-desc")
const h2show = document.getElementById("h2-show")

// variable del nav-item
const navitem = document.getElementById("nav-item")

// apareciendo el primer texto
navitem.addEventListener("mouseover", ()=>{
    h1desc.innerHTML = ``
    h1desc.innerHTML = 'Elige tu personaje, y crea tu propia historia trepidante de rol. En esta pagina vas a encontrar todo lo necesario para divertirte con tu imaginacion'
})

navitem.addEventListener("mouseout", ()=>{
    h1desc.innerHTML = ``
})

// apareciendo el segundo texto
navitem.addEventListener("mouseover", ()=>{
    h2show.innerHTML = ``
    h2show.innerHTML = `Comenzar Aventura`
})

navitem.addEventListener("mouseout", ()=>{
    h2show.innerHTML = ``
})