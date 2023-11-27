 
// nav open close 

document.addEventListener('DOMContentLoaded', function () {
  // open
  const open = document.querySelectorAll('.navbar-open');
  const menu = document.querySelectorAll('.navbar-menu');

  if (open.length && menu.length) {
    for (var i = 0; i < open.length; i++) {
      open[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close

  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');

        }
      });
    }
  }
});






// section backgroundColor changing 


$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  // Change 33% earlier than scroll position so color is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 2);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();


//  count days 



// Set the target date to 100 days from now
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 100);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);




// road map slide 

var swiper = new Swiper(".roadmap", {
  slidesPerView: 3,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  autoplay: {
    delay: 1000,  // Delay between slides in milliseconds (3 seconds in this example)
    disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the carousel (optional)
  },
  speed: 3000,

  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    520: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,

    },

    900: {
      slidesPerView: 3,

    },

    1190: {

      slidesPerView: 4,
      spaceBetween: 5,

    }
  },
});





// team slider 

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  speed: 800,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',



  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 5,
    },
  },
});


// accordion 

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});





// ico chart 

const dataBarCustomOptions = {
  type: "bar",
  data: {
    labels: ["Contingency", "Investor", "Business Development", "Legal & Regulation", "Czech Republic", "Poland"],
    datasets: [
      {
        label: "Traffic",
        data: [30, 15, 62, 65, 61, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  },
};

const optionsBarCustomOptions = {
  options: {
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "green",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "gray",
        },
      },
      y: {
        ticks: {
          color: "rgb(43,174,148)",
        },
      },
    },
  },
};

new te.Chart(
  document.getElementById("bar-chart-custom-options"),
  dataBarCustomOptions,
  optionsBarCustomOptions
);