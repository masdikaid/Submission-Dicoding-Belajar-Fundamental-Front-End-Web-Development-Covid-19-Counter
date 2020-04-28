import {fetching} from "./api.js"
import {renderContentDunia, renderItemNegara} from "./render.js"

async function renderingData(){
    const ra = await fetching()
    renderContentDunia(ra)
    renderItemNegara(ra)
}
renderingData()