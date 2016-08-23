jQuery(window).load(function(){

    jQuery(".btn-nav").toggle(function(){
        jQuery(".menu-primary").addClass("active");
    },function(){
        jQuery(".menu-primary").removeClass("active");
    })
    
});