import {isInViewport, isPartiallyInViewport} from './constants/is-in-viewport';
import * as animations from './constants/animation-types';

let createScene = ({sceneDelay, elements, animationType, interval, trigger}) => {

    //Join elements from array into string
    var userElements = elements.join();
    var userNodes = document.querySelectorAll(userElements);

    // if typeOf string then get a default animationType
    // if typeOf object, use the users animation object (do nothing)
    if(typeof animationType === 'string'){
      var animationType = animations[`${animationType}`];
    }

    // If user has set a sceneDelay lets overwrite the animation delay with their choice
    if(sceneDelay){
      animationType.timing.delay = sceneDelay
    }

    // For each node passed create the animation at the specified interval and play
    // Unless the 'onlyWhenInView' or 'onlyWhenInPartialView' parameters are true
    userNodes.forEach((link, i) => {
      // Incremental bringing into the scene
      let thisTiming = i*interval;
      animationType.timing.delay = animationType.timing.delay + thisTiming;
      // Using web animation API polyfill constructors to build animations
      let keyframes = new KeyframeEffect(link, animationType.keyframes, animationType.timing);
      let animation = new Animation(keyframes, document.timeline);

      const inViewPortChecker = () => {
        window.addEventListener('scroll', inViewPortChecker);
        if(isInViewport(elements)){
          animation.play();
          window.removeEventListener('scroll', inViewPortChecker);
        }
      }

      const partialInViewPortChecker = () => {
        window.addEventListener('scroll', partialInViewPortChecker);
        if(isPartiallyInViewport(elements)){
          animation.play();
          window.removeEventListener('scroll', partialInViewPortChecker);
        }
      }

      // Decide how the animation should be triggered based on user specification
      switch (trigger) {
      case 'onlyWhenInView': inViewPortChecker();
        break;
      case 'onlyWhenInPartialView': partialInViewPortChecker();
        break;
      default: animation.play();
      }

    }
  )
}

export default createScene;
