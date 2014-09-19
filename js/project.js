(function ($) {
    "use strict";

    var grimmtales = {

        init: function () {
            this.bindUIActions();

            $(".welcome-scene").parallax();
            $(".fitvid-wrapper").fitVids();
            $(".author, .masthead .logo, .for-young, .immersive, .adapted, .philip, .dates").fadeTo(0, 0);

            this.getShows();
            this.setCalendar();

            setTimeout(function () {
                var time = 0;
                $(".author, .masthead .logo, .for-young, .immersive, .adapted, .philip, .dates").each(function () {
                    $(this).delay(time).fadeTo(800, 1);
                    time += 200;
                });
            }, 500);

        },

        bindUIActions: function () {
            $(".scroll-nav a").on("click", function (e) { grimmtales.scrollToSection(e); });
            $(".calendar td").on("click", function (e) { grimmtales.showCalendarPopup(e); });
            $(".nav-toggle").on("click", function () { grimmtales.toggleNav(); });
        },

        windowResized: function () {
            if ($(window).width() > 728) {
                $(".scroll-nav").css({ "display" : "inline-block" });
            }
        },

        getShows: function () {
            $.ajax({
                url: "http://donhoubicycles.com/stubs/shows.json",
                dataType: "json"
            })
            .done(function (response) {
                $.each(response.Shows.Show, function () {
                    var dateTime = this.Starts.split("T");
                    this.Date = dateTime[0];
                    this.Time = dateTime[1];
                });
                grimmtales.shows = response.Shows.Show;
            })
            .fail(function () {
                $(".all-tickets").hide();
                $(".tickets-fallback").show();
            });
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
                var shows = $.grep(grimmtales.shows, function (e) {
                    return e.Date === date;
                });

                // populate a template with times for the date
                var template = $("<div class=\"shows\"></div>");
                var i = 0;

                if (shows.length) {
                    while (i < shows.length) {
                        if (shows[i].OnSale) {
                            $("<div>" + shows[i].Time + " <a target=\"_blank\" class=\"btn\" href=\"" + shows[i].DesktopUrl + "\">Tickets</a></div>").appendTo(template);
                        } else {
                            $("<div>" + shows[i].Time + " <span>Sold Out</span>").appendTo(template);
                        }
                        i++;
                    }
                } else {
                    $("<div>Sorry, no shows today</div>").appendTo(template);
                }

                $(wrapper).append(template);

            }

        },

        toggleNav: function () {
            $(".scroll-nav").slideToggle("fast");
        },

        setCalendar: function () {
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

} (jQuery));
