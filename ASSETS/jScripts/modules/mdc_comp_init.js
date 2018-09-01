

import {MDCRipple} from '@material/ripple';
import {MDCTemporaryDrawer} from '@material/drawer';

    var drawer = new MDCTemporaryDrawer($(".mdc-drawer")[0])

jQuery(document).ready(($)=>{
    ///adding ripple to eatch button 
    $(".btns").each((index, element)=>{
        new MDCRipple(element);
    });

    
    // left - side bar ( + nav - drawer )
    
    $('.drawer-mdc').on('click', ()=> {
        drawer.open = true;
    });
});