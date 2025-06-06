let selector='#new-p-heading li';
$(selector).on('click',function(){
    $(selector).removeClass('active')
    $(this).addClass('active')
})