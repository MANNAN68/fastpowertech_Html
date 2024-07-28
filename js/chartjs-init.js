(function ($) {
  "use strict";

  /* function draw() {
		
	} */

  var sfcchart = (function () {
    let draw = Chart.controllers.line.__super__.draw; //draw shadow

    var screenWidth = $(window).width();

    var areaChart2 = function () {
      //gradient area chart
      if (jQuery("#areaChart_2").length > 0) {
        const areaChart_2 = document
          .getElementById("areaChart_2")
          .getContext("2d");
        //generate gradient
        const areaChart_2gradientStroke = areaChart_2.createLinearGradient(
          0,
          1,
          0,
          500
        );
        areaChart_2gradientStroke.addColorStop(0, "rgba(65, 201, 70, 0.2)");
        areaChart_2gradientStroke.addColorStop(1, "rgba(255, 255, 255, 0.051)");

        areaChart_2.height = 100;

        new Chart(areaChart_2, {
          type: "line",
          data: {
            defaultFontFamily: "Poppins",
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "",
                data: [
                  2000, 3000, 4000, 4500, 5000, 5500, 6000, 10000, 5000, 12000,
                  15000,
                ],
                borderColor: "#41C946",
                borderWidth: "2",
                backgroundColor: areaChart_2gradientStroke,
              },
            ],
          },
          options: {
            legend: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: 20500,
                    min: 0,
                    stepSize: 3000,
                    padding: 5,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    padding: 5,
                  },
                },
              ],
            },
          },
        });
      }
    };

    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        areaChart2();
      },
    };
  })();

  jQuery(window).on("load", function () {
    sfcchart.load();
  });
})(jQuery);
