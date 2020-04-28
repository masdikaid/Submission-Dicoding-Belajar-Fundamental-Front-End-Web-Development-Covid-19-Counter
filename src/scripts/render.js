function renderContentDunia(data){
    data.forEach( d => {
        setTimeout(()=>{
            setInnerDunia("terkonfirmasi",parseInt(getInnerDunia("terkonfirmasi"))+d.positif)
            setInnerDunia("sembuh",parseInt(getInnerDunia("sembuh"))+d.sembuh)
            setInnerDunia("meninggal",parseInt(getInnerDunia("meninggal"))+d.meninggal)
            setInnerDunia("total",parseInt(getInnerDunia("total"))+d.total)
        },500)
    })
}

function getInnerDunia(id){
    return document.querySelector(`#${id}`).innerHTML;
}

function setInnerDunia(id, value){
    document.querySelector(`#${id}`).innerHTML= `${value}`
}

function renderItemNegara(data){
    const element = document.getElementById("section")
    data.forEach( items => {
        const news = document.createElement("article")
    news.classList.add("my-2","container","card")
    news.innerHTML=`
                <header class="p-2"><h6>${items.negara}</h6></header>
                <div class="container d-flex">
                    <div class="flex-grow-1">
                        <div>
                            <header><h6>Positif</h6></header>
                            <p>${items.positif}</p>
                        </div>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <header><h6>Sembuh</h6></header>
                                <p>${items.sembuh}</p>
                            </div>
                            <div class="flex-grow-1">
                                <header><h6>Meninggal</h6></header>
                                <p>${items.meninggal}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1 card p-2 mb-4 justify-content-center align-items-center">
                        <header><h6>Total</h6></header>
                        <p>${items.total}</p>
                    </div>
                </div>
        `
        element.appendChild(news)
    })
}

export {renderContentDunia, renderItemNegara}