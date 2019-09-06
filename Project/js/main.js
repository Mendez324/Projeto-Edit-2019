$(document).ready(function(){

  $('.c-mmenu__mobile-burguer').click(function(){
		$(".c-mmenu__espan").toggleClass('cross');
			
	});
    
  $('.c-slider__slides').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });



  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Saltyest Popcorn</small>';
      }
    }
  });


  $(".c-form__fsubmit").click (
    
    $('.c-form').validate({ 
      rules: {
          username: {
              required: true,
          },
          email: {
              required: true,
              email: true
          },
          city: {
            required: true
          },
          country: {
            required: true
          },
          textarea: {
            required: true
          }
  
      }
    })
  );
  

  
});



