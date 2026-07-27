        //Create a time data function
        function currentTime() {

        var d = new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        var ampm;

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (hr == 12) {
            ampm = "PM";
        } else if ( hr > 12 ) {
            hr -= 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }

        var utchr = d.getUTCHours();
        var timeDiff;
        var adjTimeDiff;
        var timeZone;

        timeDiff = hr - utchr;

        if (timeDiff < 0) {
            adjTimeDiff = timeDiff * -1;
        } else {
            adjTimeDiff = timeDiff;
        }

        switch (adjTimeDiff) {
            case 4:
                timeZone = "ET";
                break;
            case 5:
                timeZone = "CT";
                break;
            case 6:
                timeZone = "MT";
                break;
            case 7:
                timeZone = "PT";
                break;
            default:
                timeZone = "GMT";
        }

        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

        document.getElementById("clock").innerText = time;

        }
        
        currentTime();
        setInterval(currentTime, 1000);
