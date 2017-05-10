require('../../vendor/jquery.inputmask.js');

// var mask_phone = function () {
//         $('._phone-mask').inputmask('+9(999) 999-99-99', {
//             placeholder: '_',
//             showMaskOnHover: false
//         });
//     };

$('.mask_phone').inputmask("+7(999)999-99-99", {
    placeholder: '_',
    showMaskOnHover: false
});