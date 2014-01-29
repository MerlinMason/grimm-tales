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
                    { time: "5.30pm", url: "" },
                    { time: "8.15pm", url: "" }
                ]
            },
            {
                date: "21-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92112" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92113" }
                ]
            },
            {
                date: "22-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://www.ticketsource.co.uk/date/92115" },
                    { time: "5:00pm", url: "http://www.ticketsource.co.uk/date/92114" },
                    { time: "8:00pm", url: "http://www.ticketsource.co.uk/date/92117" },
                ]
            },
            {
                date: "23-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://www.ticketsource.co.uk/date/92118" },
                    { time: "5:00pm", url: "http://www.ticketsource.co.uk/date/92119" }
                ]
            },
            {
                date: "25-03-2014",
                shows: [
                    { time: "7:30pm", url: "http://www.ticketsource.co.uk/date/92121" }
                ]
            },
            {
                date: "26-03-2014",
                shows: [
                    { time: "7:30pm", url: "http://www.ticketsource.co.uk/date/92125" }
                ]
            },
            {
                date: "27-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92126" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92127" }
                ]
            },
            {
                date: "28-03-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92129" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92128" }
                ]
            },
            {
                date: "29-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://www.ticketsource.co.uk/date/92131" },
                    { time: "5:00pm", url: "http://www.ticketsource.co.uk/date/92132" },
                    { time: "8:00pm", url: "http://www.ticketsource.co.uk/date/92133" }
                ]
            },
            {
                date: "30-03-2014",
                shows: [
                    { time: "2:00pm", url: "http://www.ticketsource.co.uk/date/92134" },
                    { time: "5:00pm", url: "http://www.ticketsource.co.uk/date/92135" }
                ]
            },
            {
                date: "01-04-2014",
                shows: [
                    { time: "7:30pm", url: "http://www.ticketsource.co.uk/date/92136" }
                ]
            },
            {
                date: "02-04-2014",
                shows: [
                    { time: "7:30pm", url: "http://www.ticketsource.co.uk/date/92137" }
                ]
            },
            {
                date: "03-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92139" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92140" }
                ]
            },
            {
                date: "04-04-2014",
                shows: [

                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92142" },
                    { time: "8.15pm", url: "http://www..ticketsource.co.uk/date/92143" }
                ]
            },
            {
                date: "05-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92144" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92145" },
                    { time: "8.00pm", url: "http://www.ticketsource.co.uk/date/92146" }
                ]
            },
            {
                date: "06-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92148" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92147" },

                ]
            },
            {
                date: "08-04-2014",
                shows: [
                    { time: "7.30pm", url: "http://www.ticketsource.co.uk/date/92154" },

                ]
            },
            {
                date: "09-04-2014",
                shows: [
                    { time: "3.30pm", url: "http://www.ticketsource.co.uk/date/92159" },
                    { time: "7.30pm", url: "http://www.ticketsource.co.uk/date/92160" },

                ]
            },
            {
                date: "10-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92164" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92165" },

                ]
            },
            {
                date: "11-04-2014",
                shows: [
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92168" },
                    { time: "8.15pm", url: "http://www.ticketsource.co.uk/date/92167" },

                ]
            },
            {
                date: "12-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92171" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92172" },
                    { time: "8.00pm", url: "http://www.ticketsource.co.uk/date/92173" }
                ]
            },
            {
                date: "13-04-2014",
                shows: [
                    { time: "2.00pm", url: "http://www.ticketsource.co.uk/date/92176" },
                    { time: "5.00pm", url: "http://www.ticketsource.co.uk/date/92174" },

                ]
            },
            {
                date: "15-04-2014",
                shows: [
                    { time: "3.30pm", url: "http://www.ticketsource.co.uk/date/92181" },
                    { time: "7.30pm", url: "http://www.ticketsource.co.uk/date/92182" },

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
                    { time: "5.30pm", url: "http://www.ticketsource.co.uk/date/92191" },
                    { time: "58.15pm", url: "http://www.ticketsource.co.uk/date/92189" },

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
        ],

        init: function () {
            this.bindUIActions();
            $(".welcome-scene").parallax();
            $(".fitvid-wrapper").fitVids();
        },

        bindUIActions: function () {
            $(".scroll-nav a:not(.book-tickets)").on("click", function (e) { grimmtales.scrollToSection(e); });
            $(".calendar td").on("click", function (e) { grimmtales.showCalendarPopup(e); });
        },

        windowLoaded: function () {
            //
        },

        scrollToSection: function (e) {
            e.preventDefault();

            var destination = (e.currentTarget.hash);
            var offset = $(destination)[0].offsetTop - 50;

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

} (jQuery));
