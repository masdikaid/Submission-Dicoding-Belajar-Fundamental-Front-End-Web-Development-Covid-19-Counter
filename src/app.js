import 'bootstrap'
import 'regenerator-runtime'
import {fetching} from "./scripts/api.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import {renderContentDunia, renderItemNegara} from "./scripts/render.js"
import './scripts/customelement.js'

async function renderingData(){
    const ra = await fetching()
    renderContentDunia(ra)
    renderItemNegara(ra)
}
renderingData()