const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const display_switch = document.querySelector("#display-switch")
const list_view = document.querySelector("#list-view")
const grid_view = document.querySelector("#grid-view")
const display_image = document.querySelector("#display-image")

display_switch.addEventListener("click", ()=>{
    if(display_switch.getAttribute("data-bs-title") == "List View"){
        display_switch.setAttribute("data-bs-title", "Grid View")
        display_image.setAttribute("src", "/static/images/grid.png")
        list_view.style.display = "block"
        grid_view.style.display = "none"
    }
    else{
        display_switch.setAttribute("data-bs-title", "List View")
        display_image.setAttribute("src", "/static/images/list.png")
        list_view.style.display = "none"
        grid_view.style.display = "block"
    }
})