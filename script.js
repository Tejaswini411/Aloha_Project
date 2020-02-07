document.addEventListener("DOMContentLoaded", function () {

  let inputEmail = document.getElementById('signup-form');
  
  inputEmail.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const text = document.getElementById("input");
    const trimVal = text.value.trim();
    if (trimVal === "") {
      alert("Please submit a valid email address.");
    }
    
    else if (trimVal.length >= 0) {
      alert("Thanks for subscribing!");
    }
    
    text.value = "";
    
  });

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

});