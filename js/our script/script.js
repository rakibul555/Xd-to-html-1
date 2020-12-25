$(document).ready(function(){

    //Sticky menu
    $(document).on("scroll", function () {
        $(this).scrollTop() > 25 ? $(".navbar").addClass("sticky") : $(".navbar").removeClass("sticky");
    });
    $(document).on("scroll", function () {
        $(this).scrollTop() > 100 ? $(".navbar").addClass("sti") : $(".navbar").removeClass("sti");
    })





 
    $('#youtube').magnificPopup({
        type: 'iframe',
        
        iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
            },
            srcAction: 'iframe_src',
          }
      });
        





    

});