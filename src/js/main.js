(function($) {
  "use strict";
  
  /*------------------------------------------------------------------
  [Table of contents]
  
  -------------------------------------------------------------------*/
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  
  $(function(){
    
/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

/*--------------------------------------------------------------
COUNTER JS INIT
--------------------------------------------------------------*/
var nexto_counter = $('#nexto-counter');
  if(nexto_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(nexto_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.nexto-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}

/*--------------------------------------------------------------
NEXTO SLIDER ONE
--------------------------------------------------------------*/

var nexto_slider_one = $('.nexto-slider-one');
  if(nexto_slider_one.is_exist()){
    nexto_slider_one.slick({
      infinite: true,
      center: true,
      slidesToShow: 4, 
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      dots: false,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
    
      ]
    });
  }



  
  
  
  });/*End document ready*/
  
  
  $(window).on("resize", function(){
    
  
  }); // end window resize
  
  
  $(window).on("load" ,function(){
  


  
  /*--------------------------------------------------------------
  FOUR COLUMN FILTER JS INIT
  ------------------------------------------------------------*/
  var comenci_filter3 = $('#comenci-four-column');
  if(comenci_filter3.is_exist()){
    var $container = $(comenci_filter3),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 4;
        } else if (w > 900) {
          columnNum  = 3;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.comenci-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
  
      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    });
  }
  
  
  }); // End window LODE
  

  
  
  
  
  
  
  })(jQuery);
  
  
  
  
  
  
  