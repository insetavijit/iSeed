function afterSubmitNavSearch_input(input_vals) {
    // main form handler part for ( navSearch )
    console.log(new Date(), input_vals);
}
// login form submision
function afterSubmitLogin( formData ){
    console.log(formData);
}

jQuery(document).ready(($) => {
/**
 * @name 'navBar -search box' 
 * @version {1.0.0.0}
 * Created on: 2018-08-28 17:59:31
 * GMT+0530 (India Standard Time)
 * @author : AVIJIT SARKAR <https://twitter.com/inset_>
 * @description nabbar main search HandlerJs
 * we will handle form submmition with jquery
 */
    var
        navSearchInput = $("#navSearchBox_root form :input"),
        // display - part
        navSearch_displayRoot = $("#display_root"),
        templateShow = $("#showThisTemplate"),
        contentDisplayGrid = $("#navSearchBox_responceDisplay"),
        showHintGrid = $('#navSearchBox_hint'),
        navSearchInput_submit_on_complete = 0;
    //setup the popup display area
    let popper = new Popper(navSearch_displayRoot, templateShow, {
        placement: 'bottom'
    });
    //show the responce pannel : on focus in the search box
    navSearchInput.focusin(() => {
        contentDisplayGrid.removeClass("d-none");
    });
    navSearchInput.focusout(() => {
        contentDisplayGrid.addClass("d-none");
    });
    // we will load the showResult page in every input given
    navSearchInput.on("keyup keypress paste", () => {
        // 1. add the input value to the display container (#navSearchBox_hint)
        showHintGrid.text("Looking for : " + navSearchInput.val())

        // we will submit the form once the user completes typing
        // 2. firest remove any previous timer ( if it's present )
        if (navSearchInput_submit_on_complete !== 0)
            clearTimeout(navSearchInput_submit_on_complete);
        //3. update the timer:
        navSearchInput_submit_on_complete = setTimeout(() => {
            afterSubmitNavSearch_input(navSearchInput.val());
        }, 1000);
    })
/**
 * @name 'loginBox' 
 * @version {1.0.0.0}
 * Created on: 2018-08-28 21:52:22
 * GMT+0530 (India Standard Time)
 * @author : AVIJIT SARKAR <https://twitter.com/inset_>
 * @description login box handler
 */
    var loginfrom = $("#usrLoginfrm") ;
    loginfrom.submit((event)=>{
        event.preventDefault();
        afterSubmitLogin( loginfrom.serialize())
    })
});