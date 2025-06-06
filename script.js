/* ul filters */
let selector = '#new-p-heading li';
$(selector).on('click', function () {
    $(selector).removeClass('active')
    $(this).addClass('active')
})

$(document).ready(function () {
    $('#new-p-heading li').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'All') {
            $('.new-product-box').show('0');
        } else {
            $('.new-product-box').not('.' + value).hide('0');
            $('.new-product-box').filter('.' + value).show('0');
        }
    })
})