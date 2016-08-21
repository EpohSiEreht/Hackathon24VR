var gameHTML = '<a-entity id="score" text="text: 0;" position="-0.20 1 -2" look-at="#player"></a-entity> <a-entity template="src: #enemies" data-num="20"></a-entity> <a-entity id="start" position="0 1 -2" scale=".5 .5 .5" look-at="#player"> <a-image id="start" src="#start" width="4" height="1" opacity="1" set-hover> <a-animation attribute="scale" from="1 0 1" to="0.75 0.75 0.75" delay="1500" dur="200" fill="both" easing="ease-out"></a-animation> <a-animation attribute="position" from="0 -3 0" to="0 -0.7 0" delay="1000" dur="1000" fill="both" easing="ease-out"></a-animation> <a-event name="mouseenter" scale="0.9 0.9 0.9"></a-event> <a-event name="mouseleave" scale=".75 .75 .75"></a-event> <a-event name="click" link="/index.html"></a-event> </a-image> </a-entity> <a-entity id="music"  position="-10 1 -2" look-at="#player" sound="src: #bg-music; autoplay: true"></a-entity> <a-camera id="player" position="0 1.8 0" click-listener> <a-cursor color="red"> </a-camera> <a-sky src="#grass"></a-sky>';

AFRAME.registerComponent('link', {
	schema: {default: ''},
	init: function () {
	  var url = this.data;
	  this.el.addEventListener('click', function () {
	    window.location.href = url;
	  });
	}
});