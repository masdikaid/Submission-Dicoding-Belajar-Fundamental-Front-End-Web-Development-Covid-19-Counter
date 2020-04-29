class HeaderBarElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <header>
            <div class="shadow-sm container-fluid bg-white p-2 pt-3">
                <div class="container d-flex justify-content-start align-items-start">
                <h3 class="font-weight-bold">COVID-19 Care</h3>
                </div>
            </div>
        </header>
        `
    }
}


class WorldInfoElement extends HTMLElement {
    set data(data){
        this._data = data
        this.render()
    }

    render(){
        this.innerHTML=`
            <div class="d-lg-flex bg-white my-4 shadow">
                <section class="p-2 container" id="dunia">
                    <header class="pt-2"><h4 class="ml-3 p-2 mt-2 font-weight-bold">Dunia</h4></header>
                    <div class="shadow-sm container py-2 card">
                        <div class="col-12 p-2">
                            <header class="font-weight-bold">Positif</header>
                            <h4 id="terkonfirmasi" class="font-weight-bold">${this._data.positif}</h4>
                        </div>
                        <div class="d-flex">
                            <div class="flex-grow-1 p-2">
                                <header><h6 class="font-weight-bold">Sembuh</h6></header>
                                <h4 id="sembuh" class="font-weight-bold">${this._data.sembuh}</h4>
                            </div>
                            <div class="flex-grow-1 p-2">
                                <header><h6 class="font-weight-bold">Kematian</h6></header>
                                <h4 id="meninggal" class="font-weight-bold">${this._data.meninggal}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="shadow-sm p-2 my-2 card d-flex flex-row align-items-center">
                        <header class="px-2 font-weight-bold">Total</header>
                        <div class="px-2 font-weight-bold" id="total"><h3 class="font-weight-bold">${this._data.total}</h3></div>
                    </div>
                </section>
        
        
                <section id="grafik" class="p-2 overflow-hidden container d-none d-md-flex align-items-center">
                </section>
            </div>
        `
    }
}


class CountryInfoElement extends HTMLElement {
    set contents(datas){
        this._datas = datas
        this.render()
    }
    
    render(){
        this.classList.add("row")
        this._datas.forEach(data => {
            const contents= document.createElement('negara-item')
            contents.content=data
            this.appendChild(contents)
        })
    }
}


class ContentCountryElement extends HTMLElement {
    set content(data){
        this._data = data
        this.render()
    }

    render(){
        this.classList.add("col-md-6","col-lg-4","my-2")
        this.innerHTML=`
            <div class="card shadow-sm">
                <div class="p-0 card-header bg-white"><h5 class=" m-3 font-weight-bold text-center">${this._data.negara}</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="pt-3 col-6">
                            <header class="font-weight-bold">Positif</header>
                            <h6 class="font-weight-bold">${this._data.positif}</h6>
                        </div>
                        <div class="p-3 border border-danger rounded-lg">
                            <header class="text-center font-weight-bold">Total</header>
                            <h5 class="text-center font-weight-bold">${this._data.total}</h5>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="row">
                            <div class="col-6">
                                <header class="font-weight-bold">Sembuh</header>
                                <h6 class="font-weight-bold">${this._data.sembuh}</h6>
                            </div>
                            <div class="col-6">
                                <header class="font-weight-bold">Meninggal</header>
                                <h6 class="font-weight-bold">${this._data.meninggal}</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
        `
    }
}

customElements.define("content-dunia",WorldInfoElement)
customElements.define("header-bar",HeaderBarElement)
customElements.define("negara-container",CountryInfoElement)
customElements.define("negara-item",ContentCountryElement)
