import chart from 'tui-chart'

function renderContentDunia(data){
    let arr = {
        positif:0,
        sembuh:0,
        meninggal:0,
        total:0
    }
    data.forEach( d => {
        arr.positif += d.positif
        arr.sembuh += d.sembuh
        arr.meninggal += d.meninggal
        arr.total += d.total
    })
    const element = document.createElement("content-dunia")
    element.data = arr
    const target = document.getElementById("main")
    target.insertBefore(element, target.firstChild)
    renderGrafik(arr)
}

function getInnerDunia(id){
    return document.querySelector(`#${id}`).innerHTML;
}

function setInnerDunia(id, value){
    document.querySelector(`#${id}`).innerHTML= `${value}`
}

function renderItemNegara(data){
    const elements = document.createElement('negara-container')
    elements.contents = data
    document.getElementById('section').appendChild(elements)

}

function renderGrafik(datas){
    setTimeout(()=>{
        const element = document.querySelector("#grafik")
        const data = {
            categories: ["Covid-19"],
            series: [
                {
                    name: 'Positif',
                    data: datas.positif
                },
                {
                    name: 'sembuh',
                    data: datas.sembuh
                },
                {
                    name: 'Meninggal',
                    data: datas.meninggal
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

export {renderContentDunia, renderItemNegara}