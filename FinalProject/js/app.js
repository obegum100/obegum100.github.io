 $(document).ready(function() {
             var scrollLink = $('.scrollLink');

//             //     //smooth scrolling
//             //     scrollLink.click(function(e) {
//             //         e.preventDefault();
//             //         $('body,html').animate({
//             //             scrollTop: $(this.hash).offset().top
//             //         }, 1000)
//             //     })

//             //     //Active link switching
//             //     $(window).scroll(function() {
//             //         var scrollbarlocation = $(this).scrollTop();
//             //         scrollLink.each(function() {
//             //             var sectionOffset = $(this.hash).offset().top

//             //             if (sectionOffset <= scrollbarlocation) {
//             //                 $(this).parent().addClass('active');
//             //             }
//             //         })
//             //     })
//             // });

            $("a.scrollLink").click(function(event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
            });

    });    

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = $('.navigationHeader');

// Get the offset position of the navbar
var sticky = navbar.offset().top;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass('sticky')
  } else {
    navbar.removeClass('sticky'); 
  }
}
