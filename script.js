function Subscribe()
{ 
   alert ("Thanks for subscribing!"); 

} 









            $(document).ready(function(){
                $('.productwrapper').slick({
                    dots: true, autoplay: true, infinite: false, slidesToShow: 4,
                    slidesToScroll: 1, 
                    responsive : [{ breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                        }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                            slidesToShow: 1,
                            }

                    }]

                });
            });



