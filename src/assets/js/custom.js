/*jQuery(document).ready(function(){
    setTimeout(menuclick, 3000);
    setTimeout(menuclickclose, 3000);
});
function menuclick(){
    $('#menu-open').click(function(){
        $('.side-menu').addClass('open');
    });    
}
function menuclickclose(){
    $('.menu-details ul li').click(function(){
        $('.side-menu').removeClass('open');
    })
}*/




const newLocal = setInterval(function () {
    $('#menu-open').click(function () {
        $('.side-menu').addClass('open');
    });
    $('.menu-details ul li').click(function(){
        $('.side-menu').removeClass('open');
    })
}, 1000);




