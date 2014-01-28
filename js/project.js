(function ($) {
    "use strict";

    var grimmtales = {

        tickets: [
            {
                date: "14-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/91282" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92105" }
                ]
            },
            {
                date: "15-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://google.com" },
                    { time: "5:00pm", url: "http://google.com" },
                    { time: "8:00pm", url: "http://google.com" }
                ]
            },
            {
                date: "16-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://google.com" },
                    { time: "5:00pm", url: "http://google.com" }
                ]
            },
            {
                date: "18-03-2014",
                shows: [
                    { time: "7:30pm", url: "http://google.com" }
                ]
            },
            {
                date: "19-03-2014",
                shows: [
                    { time: "7:30pm", url: "http://google.com" }
                ]
            },
            {
                date: "20-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://google.com" },
                    { time: "8.15pm", url: "http://google.com" }
                ]
            },
            {
                date: "21-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://google.com" },
                    { time: "8.15pm", url: "http://google.com" }
                ]
            },
            {
                date: "22-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://google.com" },
                    { time: "5:00pm", url: "http://google.com" },
                    { time: "8:00pm", url: "http://google.com" }
                ]
            },
            {
                date: "23-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://google.com" },
                    { time: "5:00pm", url: "http://google.com" }
                ]
            },
            {
                date: "25-03-2014",
                shows: [
                    { time: "7:30pm", url: "http://google.com" }
                ]
            },
            {
                date: "26-03-2014",
                shows: [
                    { time: "7:30pm", url: "http://google.com" }
                ]
            },
            {
                date: "27-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://google.com" },
                    { time: "8.15pm", url: "http://google.com" }
                ]
            },
            {
                date: "28-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://google.com" },
                    { time: "8.15pm", url: "http://google.com" }
                ]
            },
            {
                date: "29-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://google.com" },
                    { time: "5:00pm", url: "http://google.com" },
                    { time: "8:00pm", url: "http://google.com" }
                ]
            },
            {
                date: "30-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://google.com" },
                    { time: "5:00pm", url: "http://google.com" }
                ]
            },
            {
                date: "01-04-2014",
                shows: [
                    { time: "7:30pm", url: "http://google.com" }
                ]
            },
            {
                date: "02-04-2014",
                shows: [
                    { time: "7:30pm", url: "http://google.com" }
                ]
            },
            {
                date: "03-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://google.com" },
                    { time: "8.15pm", url: "http://google.com" }
                ]
            },
            {
                date: "04-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "05-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "06-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "08-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "09-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "10-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "11-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "12-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "13-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "15-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "16-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "17-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "18-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "19-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "21-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://google.com" },
                    { time: "5.00pm", url: "http://google.com" },
                    { time: "8.00pm", url: "http://google.com" }
                ]
            },
            {
                date: "22-04-2014",
                shows: [
                    { time: "7.30pm", url: "http://google.com" }
                ]
            },
            {
                date: "23-04-2014",
                shows: [
                    { time: "7.30pm", url: "http://google.com" }
                ]
            },
            {
                date: "24-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://google.com" },
                    { time: "8.15pm", url: "http://google.com" }
                ]
            },
        ],

        init: function () {
            this.bindUIActions();
            $(".fitvid-wrapper").fitVids();
        },

        bindUIActions: function () {
            $(".scroll-nav a").on("click", function (e) { grimmtales.scrollToSection(e); });
            $(".calendar td").on("click", function (e) { grimmtales.showCalendarPopup(e); });
        },

        windowLoaded: function () {
            //
        },

        windowResized: function () {
            //
        },

        windowScrolled: function () {
            //
        },

        scrollToSection: function (e) {
            e.preventDefault();

            var destination = (e.currentTarget.hash);
            var offset = $(destination)[0].offsetTop - 55;

            $("body").animate({ scrollTop: offset }, 600);
        },

        showCalendarPopup: function (e) {
            if ($(e.currentTarget).find(".shows").length > 0) {

                $(".calendar .shows").remove();

            } else {

                // get rid of any existing popup
                $(".calendar .shows").remove();

                // determine date
                var date = $(e.currentTarget).data("date");

                // find date in all events
                var result = $.grep(grimmtales.tickets, function (e) {
                    return e.date === date;
                });
                var shows = result[0].shows;

                // populate a template with times for the date
                var template = $("<div class=\"shows\"></div>");
                var i = 0;
                while (i < shows.length) {
                    if (shows[i].url === "") {
                        $("<div>" + shows[i].time + " <span>Sold Out</span>").appendTo(template);
                    } else {
                        $("<div>" + shows[i].time + " <a target=\"_blank\" class=\"btn\" href=\"" + shows[i].url + "\">Tickets</a></div>").appendTo(template);
                    }
                    i++;
                }

                $(e.currentTarget).append(template);
            }

        }

    };

    // DOM Ready
    $(function () { grimmtales.init(); });
    // Images Loaded
    $(window).load(function () { grimmtales.windowLoaded(); });
    // Window Resized (smart debounced event)
    $(window).bind("debouncedresize", function () { grimmtales.windowResized(); });
    // Window Scrolled
    $(window).on("scroll", function () { grimmtales.windowScrolled(); });

} (jQuery));
