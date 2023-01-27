let ClickLi = document.querySelectorAll(".our-work ul li")
let RowElement = document.querySelectorAll(".our-work .row")

ClickLi.forEach(element => {
    element.onclick = function (el) {
        for (let i = 0; i < RowElement.length; i++){
            
            if (element.dataset.row === RowElement[i].dataset.row) {
                RowElement[i].classList.toggle("open")
            } else {
                RowElement[i].classList.remove("open")
            }
        }
    }
    element.addEventListener("click", (e) => {
        
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            // Remove class active from all li
            element.classList.remove("active")

            // Add class active to all li
            e.target.classList.add("active")
            e.target.classList.add("rounded-pill")

        })
    })
});
