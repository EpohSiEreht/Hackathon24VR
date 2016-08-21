function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var count = minutes + ":" + seconds;

        console.log("loading",count);

        document.getElementById('time').setAttribute('text', 'text: '+count);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var twoMinutes = 60 * 2;
var display = document.querySelector('#time');
startTimer(twoMinutes, display);


AFRAME.registerComponent('count', {

	schema: {
		on: {type: 'string'},
		target: {type: 'selector'}
	},
	init: function () {
	    var timer = 60 * 2, minutes, seconds, count;
	    setInterval(function () {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        count =  minutes + ":" + seconds;

	        console.log("loading",count);

	        document.getElementById('time').setAttribute('text', 'text: '+count);

	        if (--timer < 0) {
	            timer = duration;
	        }
	    }, 1000);
	}
});
