var cat_count = 0;

console.log("loading")

/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('cat-click', {

	schema: {
    on: {type: 'string'},
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var update_count = document.getElementById("update_count");

    el.addEventListener(data.on, function () {
    	cat_count++;
    	update_count.
      console.log("cat_count:",cat_count);
    });
  }

});

AFRAME.registerComponent('update-cat', {
	schema: {
    text: {type: 'string'}
  },

  init: function () {
  	var data = this.data;
    var el = this.el;

    window.addEventListener('click', function () {
      data.text = cat_count;
    });
  }
});