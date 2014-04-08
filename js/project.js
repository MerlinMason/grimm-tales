(function ($) {
    "use strict";

    var grimmtales = {

        tickets: [
            {
                date: "14-03-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "15-03-2014",
                shows: [
                    { time: "2:00pm", url: "" },
                    { time: "5:00pm", url: "" },
                    { time: "8:00pm", url: "" }
                ]
            },
            {
                date: "16-03-2014",
                shows: [
                    { time: "2:00pm", url: "" },
                    { time: "5:00pm", url: "" }
                ]
            },
            {
                date: "18-03-2014",
                shows: [
                    { time: "7:30pm", url: "" }
                ]
            },
            {
                date: "19-03-2014",
                shows: [
                    { time: "7:30pm", url: "" }
                ]
            },
            {
                date: "20-03-2014",
                shows: [
                    { time: "7.30pm", url: "" }
                ]
            },
            {
                date: "21-03-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "22-03-2014",
                shows: [
                    { time: "2:00pm", url: "" },
                    { time: "5:00pm", url: "" },
                    { time: "8:00pm", url: "" },
                ]
            },
            {
                date: "23-03-2014",
                shows: [
                    { time: "2:00pm", url: "" },
                    { time: "5:00pm", url: "" }
                ]
            },
            {
                date: "25-03-2014",
                shows: [
                    { time: "7:30pm", url: "" }
                ]
            },
            {
                date: "26-03-2014",
                shows: [
                    { time: "7:30pm", url: "" }
                ]
            },
            {
                date: "27-03-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "28-03-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "29-03-2014",
                shows: [
                    { time: "2:00pm", url: "" },
                    { time: "5:00pm", url: "" },
                    { time: "8:00pm", url: "" }
                ]
            },
            {
                date: "30-03-2014",
                shows: [
                    { time: "2:00pm", url: "" },
                    { time: "5:00pm", url: "" }
                ]
            },
            {
                date: "01-04-2014",
                shows: [
                    { time: "7:30pm", url: "" }
                ]
            },
            {
                date: "02-04-2014",
                shows: [
                    { time: "7:30pm", url: "" }
                ]
            },
            {
                date: "03-04-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "04-04-2014",
                shows: [

                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "05-04-2014",
                shows: [
                    { time: "2.00pm", url: "" },
                    { time: "5.00pm", url: "" },
                    { time: "8.00pm", url: "" }
                ]
            },
            {
                date: "06-04-2014",
                shows: [
                    { time: "2.00pm", url: "" },
                    { time: "5.00pm", url: "" },

                ]
            },
            {
                date: "08-04-2014",
                shows: [
                    { time: "7.30pm", url: "" },

                ]
            },
            {
                date: "09-04-2014",
                shows: [
                    { time: "3.30pm", url: "http://www.ticketsource.co.uk/date/92159" },
                    { time: "7.30pm", url: "" },

                ]
            },
            {
                date: "10-04-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" },

                ]
            },
            {
                date: "11-04-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" },

                ]
            },
            {
                date: "12-04-2014",
                shows: [
                    { time: "2.00pm", url: "" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92172" },
                    { time: "8.00pm", url: "" }
                ]
            },
            {
                date: "13-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92176" },
                    { time: "5.00pm", url: "" },

                ]
            },
            {
                date: "15-04-2014",
                shows: [
                    { time: "3.30pm", url: "http://www.ticketsource.co.uk/date/92181" },
                    { time: "7.30pm", url: "" },

                ]
            },
            {
                date: "16-04-2014",
                shows: [
                    { time: "3.30pm", url: "http://www.ticketsource.co.uk/date/92184" },
                    { time: "7.30pm", url: "http://www.ticketsource.co.uk/date/92186" },

                ]
            },
            {
                date: "17-04-2014",
                shows: [
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92189" },

                ]
            },
            {
                date: "18-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92193" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92188" },
                    { time: "8.00pm", url: "http://www.ticketsource.co.uk/date/92190" }
                ]
            },
            {
                date: "19-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92195" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92196" },
                    { time: "8.00pm", url: "http://www.ticketsource.co.uk/date/92194" }
                ]
            },
            {
                date: "21-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92199" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92198" },
                    { time: "8.00pm", url: "http://www.ticketsource.co.uk/date/92197" }
                ]
            },
            {
                date: "22-04-2014",
                shows: [
                    { time: "7.30pm", url: "http://www.ticketsource.co.uk/date/92200" }
                ]
            },
            {
                date: "23-04-2014",
                shows: [
                    { time: "7.30pm", url: "http://www.ticketsource.co.uk/date/92202" }
                ]
            },
            {
                date: "24-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92203" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92204" }
                ]
            },
            {
                date: "25-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/101626" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/101627" } 
                ]
            },
            {
                date: "26-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/101628" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/101629" }, 
                    { time: "8.00pm", url: "http://www.ticketsource.co.uk/date/101630" }
                ]
            },
        ],

        init: function () {
            this.bindUIActions();
            this.setCalendar();
            $(".welcome-scene").parallax();
            $(".fitvid-wrapper").fitVids();
            $(".author, .masthead .logo, .for-young, .immersive, .adapted, .philip, .dates").fadeTo(0, 0);

            setTimeout(function () {
                var time = 0;
                $(".author, .masthead .logo, .for-young, .immersive, .adapted, .philip, .dates").each(function () {
                    $(this).delay(time).fadeTo(800, 1);
                    time += 200;
                });
            }, 500);

        },

        bindUIActions: function () {
            $(".scroll-nav a:not(.book-tickets)").on("click", function (e) { grimmtales.scrollToSection(e); });
            $(".calendar td").on("click", function (e) { grimmtales.showCalendarPopup(e); });
            $(".nav-toggle").on("click", function () { grimmtales.toggleNav(); });
        },

        windowResized: function () {
            if ($(window).width() > 728) {
                $(".scroll-nav").css({ "display" : "inline-block" });
            }
        },

        windowLoaded: function () {
            //
        },

        scrollToSection: function (e) {
            e.preventDefault();

            var destination = (e.currentTarget.hash);
            var offset = $(destination)[0].offsetTop - 50;

            $("html, body").animate({ scrollTop: offset }, 600);

            // if it's mobile size hide menu
            if ($(window).width() < 728) {
                $(".scroll-nav").slideUp("fast");
            }
        },

        showCalendarPopup: function (e) {
            if ($(e.currentTarget).find(".shows").length > 0) {

                $(".calendar .shows-wrapper").remove();

            } else {
                // get rid of any existing popup
                $(".calendar .shows-wrapper").remove();

                // create wrapper
                $(e.currentTarget).append("<div class=\"shows-wrapper\"></div>");
                var wrapper = $(e.currentTarget).find(".shows-wrapper");

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

                $(wrapper).append(template);
            }

        },

        toggleNav: function () {
            $(".scroll-nav").slideToggle("fast");
        },

        setCalendar: function () {
            console.log("setting");
            // loop through these because iOS is retarded
            $(".calendar tr").each(function () {
                $(this).find("td:nth-child(4)").addClass("right");
                $(this).find("td:nth-child(5)").addClass("right");
                $(this).find("td:nth-child(6)").addClass("right");
                $(this).find("td:nth-child(7)").addClass("right");
            });
        }

    };

    // DOM Ready
    $(function () { grimmtales.init(); });
    // Window Resized (smart debounced event)
    $(window).bind("debouncedresize", function () { grimmtales.windowResized(); });
    // Images Loaded
    $(window).load(function () { grimmtales.windowLoaded(); });

} (jQuery));
