<p align="center">
<img alt="Choreo.js" src="https://raw.githubusercontent.com/Samlilli/choreo-js/master/git.png" width="548">
</p>
[![npm version](https://badge.fury.io/js/choreo.js.svg)](https://badge.fury.io/js/choreo.js)
Choreo.js is a lightweight helper for the Web Animations Javascript API, that allows you to:
  * Choreograph scenes of animation on one or more elements
  * Set animation intervals on a group of elements to get smooth sequential effects
  * Trigger animation scenes based on whether the elements are in or partially in the viewport
  * Provides a small animation library, with the option to create your own

## Before you get creating slick animation sequences with Choreo.js
It's important to remember that the Web Animation API is [not quite fully supported](http://caniuse.com/#feat=web-animation) by all browsers.
Choreo has a dependency on the `web-animation-next` polyfill to solve that. Make sure you include it before executing scenes:

`https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.2.2/web-animations-next.min.js`

## Usage
Install using npm:
`$ npm install choreo.js --save-dev`

Create as many scenes as you like using the `createScene` method, as shown below:
```js
import createScene from 'choreo.js';

createScene({
  sceneDelay: 300,                          
  elements: ['.element', '.element2'],     
  animationType: 'fadeUpIn',               
  interval: 50,                            
  trigger: 'onlyWhenInView'                                                  
})
```
## Configuration Options
* `sceneDelay`: Scene delay (ms) sets a global animation delay by overriding the animations delay (specified in animationType)
* `elements`: Pass in an array of classes as strings, in order that you'd like them to execute
* `animationType`: Either use the built in animations by passing in string names, or define your own animation objects like this:
```js
let fadeUpIn = {
  keyframes: [
    { transform: 'translateY(-100%)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 }
  ],
  timing: {
      duration: 500,
      delay: 0, // This is overridden by sceneDelay in your createScene object
      easing: 'cubic-bezier(.4,0,0,1)',
      fill: 'both'
  }
}
```
Read up on the [Web Animation API documentation](https://developer.mozilla.org/en/docs/Web/API/Animation) for more specific information on defining custom keyframes & timing.


* `interval`: Defines the delay between each element animating to get smooth sequential motion effects
* `trigger`: Takes either `'onlyWhenInView'` or `'onlyWhenInPartialView'` - These allow animation to be triggered when the element is either fully in the viewport or partially shown.


## Example

<img alt="Choreo.js" src="https://github.com/Samlilli/choreo-js/blob/master/choreo.gif">


## Roadmap
If I get the time, these are a few pointers for the roadmap:
  * Allow elements in a scene to take their own animationType
  * Provide an `executeScene()` method to wrap scenes and pass triggers or mouse events/other interactions

## License

MIT © [Sam Lillicrap](https://github.com/samlilli)
