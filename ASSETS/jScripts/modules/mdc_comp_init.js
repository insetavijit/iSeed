

import {MDCRipple} from '@material/ripple';
import {MDCTemporaryDrawer} from '@material/drawer';


jQuery(document).ready(($)=>{
    ///adding ripple to eatch button 
    $(".btns").each((index, element)=>{
        new MDCRipple(element);
    });

    
    // left - side bar ( + nav - drawer )
    let drawer = new MDCTemporaryDrawer($(".mdc-drawer")[0])
    $('.drawer-mdc').on('click', ()=> {
        drawer.open = true;
    });
});