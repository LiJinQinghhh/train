$(function(){
    $('#dropBtn').click(()=>{
        $('#dropMenu').slideToggle(200);

    })
    $('.drop-item').click(()=>{
        $('#dropMenu').slideToggle();
    })
})