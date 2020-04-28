import 'bootstrap'
import 'regenerator-runtime'
import {fetching} from "./scripts/api.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import {renderContentDunia, renderItemNegara, renderGrafik} from "./scripts/render.js"

async function renderingData(){
    const ra = await fetching()
    renderContentDunia(ra)
    renderItemNegara(ra)
    renderGrafik()
}
renderingData()