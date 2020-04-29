import 'bootstrap'
import 'regenerator-runtime'
import 'bootstrap/dist/css/bootstrap.min.css'
import {fetching} from "./scripts/api.js"
import {renderContentDunia, renderItemNegara} from "./scripts/render.js"
import './scripts/customelement.js'
import './scripts/searching.js'

async function renderingData(){
    const ra = await fetching()
    renderContentDunia(ra)
    renderItemNegara(ra)
}
renderingData()