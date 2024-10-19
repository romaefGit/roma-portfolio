/**
 * https://animate.style/
 * This are the animations that were supported by the library on 01 dec 2023
 */
export type AnimationList =
  // Attention seekers
  | 'bounce'
  | 'flash'
  | 'pulse'
  | 'rubberBand'
  | 'shakeX'
  | 'shakeY'
  | 'headShake'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'jello'
  | 'heartBeat'

  // Back entrances
  | 'backInDown'
  | 'backInLeft'
  | 'backInRight'
  | 'backInUp'

  // Back exits
  | 'backOutDown'
  | 'backOutLeft'
  | 'backOutRight'
  | 'backOutUp'

  // Bouncing entrances
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceInUp'

  // Bouncing exits
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'bounceOutUp'

  // Fading entrances
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInTopLeft'
  | 'fadeInTopRight'
  | 'fadeInBottomLeft'
  | 'fadeInBottomRight'

  // Fading exits
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  | 'fadeOutTopLeft'
  | 'fadeOutTopRight'
  | 'fadeOutBottomRight'
  | 'fadeOutBottomLeft'

  // Flippers
  | 'flip'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'

  // Lightspeed
  | 'lightSpeedInRight'
  | 'lightSpeedInLeft'
  | 'lightSpeedOutRight'
  | 'lightSpeedOutLeft'

  // Rotating entrances
  | 'rotateIn'
  | 'rotateInDownLeft'
  | 'rotateInDownRight'
  | 'rotateInUpLeft'
  | 'rotateInUpRight'

  // Rotating exits
  | 'rotateOut'
  | 'rotateOutDownLeft'
  | 'rotateOutDownRight'
  | 'rotateOutUpLeft'
  | 'rotateOutUpRight'

  // Specials
  | 'hinge'
  | 'jackInTheBox'
  | 'rollIn'
  | 'rollOut'

  // Zooming entrances
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomInUp'

  // Zooming exits
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutLeft'
  | 'zoomOutRight'
  | 'zoomOutUp'

  // Sliding entrances
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'

  // Sliding exits
  | 'slideOutDown'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'slideOutUp'

  // FROM US
  | 'zoomHoldScale' // it has an automatic zoomOutScale
  | 'oneBounce'
  | 'oneBoringBounce' // slow and calm bounce
  | 'tinyRubberBand';

/**
 * CSS
  /* All animations will take twice as long to finish
  :root {
    --animate-duration: 2s;
  }

  /* Only this element will take half the time to finish
  .my-element {
    --animate-duration: 0.5s;
  }
*/
export type AnimateDuration =
  | 'slow' //	2s
  | 'slower' //	3s
  | 'fast' //	800ms
  | 'faster'; //	500ms

/**
 * CSS
 * /* All delay classes will take 2x longer to start
  :root {
    --animate-delay: 2s;
  }

  /* All delay classes will take half the time to start
  :root {
    --animate-delay: 0.5s;
  }
 */
export type AnimateDelay =
  | 'delay-2s' //	2s
  | 'delay-3s' //	3s
  | 'delay-4s' //	4s
  | 'delay-5s'; //	5s
/**
 * CSS
  The element will repeat the animation 2x
  It's better to set this property locally and not globally or
  you might end up with a messy situation
    .my-element {
      --animate-repeat: 2;
    }
*/
export type AnimateIteration =
  | 'repeat-1' // 1
  | 'repeat-2' // 2
  | 'repeat-3' // 3
  | 'infinite'; // infinite
