import chart from 'tui-chart'

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
    news.classList.add("card-sm","col-md-6","col-lg-4","my-2","container")
    news.innerHTML=`
                <div class="shadow-sm card">
                <header class="p-2"><h4 class="font-weight-bold ml-3 my-2" >${items.negara}</h4></header>
                <div class="container d-flex">
                    <div class="flex-grow-1">
                        <div>
                            <header><p class=" my-0 font-weight-bold" >Positif</p></header>
                            <h6 class="my-0 mb-1 font-weight-bold">${items.positif}</h6>
                        </div>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <header><p class="my-0 font-weight-bold" >Sembuh</p></header>
                                <h6 class="my-0 font-weight-bold">${items.sembuh}</h6>
                            </div>
                            <div class="flex-grow-1">
                                <header><p class="my-0 font-weight-bold">Meninggal</p></header>
                                <h6 class="my-0 font-weight-bold">${items.meninggal}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1 card p-2 mb-4 justify-content-center align-items-center border-danger">
                        <header><p class="font-weight-bold" >Total</p></header>
                        <h4 class="font-weight-bold" >${items.total}</h4>
                    </div>
                </div>
            </div>
        `
        element.appendChild(news)
    })
}

function renderGrafik(){
    setTimeout(()=>{
        const element = document.querySelector("#grafik")
        const data = {
            categories: ["Covid-19"],
            series: [
                {
                    name: 'Positif',
                    data: getInnerDunia("terkonfirmasi")
                },
                {
                    name: 'sembuh',
                    data: getInnerDunia("sembuh")
                },
                {
                    name: 'Meninggal',
                    data: getInnerDunia("meninggal")
                },
            ]
        }
        var options = {
            chartExportMenu: {
                visible: false  // default is true.
            },
            chart: {
                width: "400",
                height: "400",
                title: 'Grafik Covid-19 Dunia',
                format: function(value, chartType, areaType, valuetype, legendName) {
                    if (areaType === 'makingSeriesLabel') { // formatting at series area
                        value = value + ' Jiwa';
                    }
        
                    return value;
                }
            },
            series: {
                showLabel: true,
                showLegend: true,
                labelAlign: 'outer'
            },
            tooltip: {
                suffix: '%'
            },
            legend: {
                visible: false
            }
        };
        var theme = {
            series: {
                series: {
                    colors: [
                        '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
                        '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
                    ]
                },
                label: {
                    color: '#fff',
                    fontFamily: 'sans-serif'
                }
            }
        };
        
        // For apply theme
        
        chart.registerTheme('myTheme', theme);
        options.theme = 'myTheme';
        
        chart.pieChart(element, data, options);
    },1500)    

}

export {renderContentDunia, renderItemNegara, renderGrafik}