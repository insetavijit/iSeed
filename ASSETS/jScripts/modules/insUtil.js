



jQuery(document).ready(($) => {
    // var _radio = $('.insUtil_radio');
    var tarGetCheckBox = $(".insUtil_checkbox");
    tarGetCheckBox.each((index , element)=>{
        $(element).on("click" , ()=>{
            var currentCheckBox = $($(element)[index]);
            var GetCheckInput = currentCheckBox.data("target");
            
            if(currentCheckBox.hasClass('fa-square')){
                $("#" + GetCheckInput).val("1");
                currentCheckBox.addClass("fa-check-square").removeClass("fa-square").addClass('color-secondary')
            }else{
                currentCheckBox.addClass("fa-square").removeClass("fa-check-square").removeClass('color-secondary')
                $("#" + GetCheckInput).val("0");
            }
        });
    })
});