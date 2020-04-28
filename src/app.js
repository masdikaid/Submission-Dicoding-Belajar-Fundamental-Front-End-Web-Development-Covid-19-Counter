import {fetching} from "./scripts/api.js"
import {renderContentDunia, renderItemNegara} from "./scripts/render.js"

async function renderingData(){
    const ra = await fetching()
    renderContentDunia(ra)
    renderItemNegara(ra)
}
renderingData()