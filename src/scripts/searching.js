const search = document.getElementById("search")
search.addEventListener('input',()=> {
    const input = document.getElementById("search")
    const filter = input.value.toUpperCase()
    const cont = document.querySelectorAll("negara-item>div>div>h5")
    for (let i = 0; i < cont.length; i++) {
        const el = cont[i].innerText
        if(el.toUpperCase().indexOf(filter) > -1 ){
            document.querySelectorAll("negara-item")[i].classList.add("order-first")
        }else{
            document.querySelectorAll("negara-item")[i].classList.remove("order-first")
        }
    }
})
