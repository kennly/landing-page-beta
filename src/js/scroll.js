$(document).ready(function(){

  //Init Scroll Magic
  var controller = new ScrollMagic.Controller();

  //loop through project.
  $('.parallax_scroll').each(function(){
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
    .setClassToggle(this, 'fadeIn')
    .addIndicators({
      name: 'fade scene'
    })
    .addTo(controller)
  });

  // build tween
// var tween = TweenMax.fromTo(".parallax1-text", 1,
//               {right: -100},
//               {left: 100, repeat: -1, yoyo: true, ease: Circ.easeInOut}
//             );

// set start offset
TweenMax.set("#parallax1-text", {left: "-=100"});

var $box = $("#parallax1-text h2");

            var tween = new TimelineMax()
          		.to("$(#parallax1-text)", 1, {top: "-=200",
          				onStart: function () {$box.html("This");},
          				onReverseComplete: function () {$box.html("Let's draw!");}
          			}
          		)

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween(tween)
					.addIndicators({name: "timeline"}) // add indicators (requires plugin)
					.addTo(controller);



});
