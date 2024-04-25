$(document).ready(function() {
    var currentIndex = 0;
    var totalItems = $('.home-header .row:first-of-type .thumbnail').length; // Assuming equal count for thumbnails and single-info

    $('.btn-next').click(function() {
        var nextIndex = (currentIndex + 1) % totalItems; // Wrap around to the first item
        animateTransition(currentIndex, nextIndex);
        currentIndex = nextIndex;
    });

    $('.btn-prev').click(function() {
        var prevIndex = (currentIndex - 1 + totalItems) % totalItems; // Wrap around to the last item
        animateTransition(currentIndex, prevIndex);
        currentIndex = prevIndex;
    });

    function animateTransition(currentIndex, nextIndex) {
        // Animate current elements out
        $('.thumbnail').eq(currentIndex).removeClass('visible');
        $('.single-info').eq(currentIndex).removeClass('visible');

        // Ensure next elements are ready (initially set hidden properties)
        $('.thumbnail').eq(nextIndex).addClass('hidden');
        $('.single-info').eq(nextIndex).addClass('hidden');

        setTimeout(function() {
            // Hide current elements fully
            $('.thumbnail').eq(currentIndex).addClass('hidden');
            $('.single-info').eq(currentIndex).addClass('hidden');

            // Show next elements
            $('.thumbnail').eq(nextIndex).removeClass('hidden').addClass('visible');
            $('.single-info').eq(nextIndex).removeClass('hidden').addClass('visible');
        }, 100); // Delay matches CSS transition timing
    }
});


$(document).ready(() => {
    // Define the scroll object with methods to stop and start scrolling
    var scroll = {
        stop: function() {
            // Disable scroll by setting 'overflow' to 'hidden' on the body
            $('body').css('overflow', 'hidden');
        },
        start: function() {
            // Enable scroll by resetting 'overflow' on the body
            $('body').css('overflow', '');
        }
    };

    // Event handler for clicking the hamburger menu
    $(".hamburger").click(function() {
        if ($(".nav-wrapper").hasClass('active')) {
            $(".nav-wrapper").removeClass('active');
            scroll.start();
        } else {
            $(".nav-wrapper").addClass('active');
            scroll.stop();
        }
    });

    // Event handler for pressing the escape key
    $(document).keydown(function(e) {
        if (e.keyCode == 27) { // Escape key
            if ($('.nav-wrapper').hasClass('active')) {
                $('.nav-wrapper').removeClass('active');
                scroll.start();
            }
        }
    });

    // Event handler for clicking the mobile background
    $(document).on('click', '.mobile-bg', function() {
        if ($('.nav-wrapper').hasClass('active')) {
            $('.nav-wrapper').removeClass('active');
            scroll.start();
        }
    });
});




