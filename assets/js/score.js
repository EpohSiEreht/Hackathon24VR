var score = 0;

AFRAME.registerComponent('click-cat', {

	schema: {
		on: {type: 'string'},
		target: {type: 'selector'}
	},
	init: function () {
	  var el = this.el;
	  var data = this.data;

	  el.addEventListener(data.on, function() {
	  	score++;
	  	localStorage.setItem("score", score);
	  	var currentScore = score;
	  	document.getElementById('score').setAttribute('text', 'text: '+currentScore);
	  })
	}
});
