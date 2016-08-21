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

    el.addEventListener(data.on, function () {
    	cat_count++;
      console.log("cat_count:",cat_count)

    });
  }

});

// // click-listener component to pass window clicks to an entity.
// AFRAME.registerComponent('cat-click', {
//   init: function () {
//   	var data = this.data;
//     var el = this.el;
//     this.addEventListener('click', function () {
//       el.emit('click', null, false);
//       console.log("cat-click")
//     });
//   }
// });