var fadeUpIn = {
  keyframes: [
    { transform: 'translateY(-100%)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 }
  ],
  timing: {
      duration: 500,
      delay: 0,
      easing: 'cubic-bezier(.4,0,0,1)',
      fill: 'both'
  }
}

var fadeLeftIn = {
  keyframes: [
    { transform: 'translateX(-25%)', opacity: 0 },
    { transform: 'translateX(0)', opacity: 1 }
  ],
  timing: {
      duration: 500,
      delay: 0,
      easing: 'cubic-bezier(.4,0,0,1)',
      fill: 'both'
  }
}

var fadeScaleUp = {
  keyframes: [
    { transform: 'scale(0.75)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 }
  ],
  timing: {
      duration: 500,
      delay: 0,
      easing: 'cubic-bezier(.4,0,0,1)',
      fill: 'both'
  }
}

var kenBurnsUp = {
  keyframes: [
    { transform: 'translateY(0%)'},
    { transform: 'translateY(25%)'}
  ],
  timing: {
      duration: 8000,
      delay: 0,
      easing: 'linear',
      fill: 'both'
  }
}


export {
  fadeUpIn,
  fadeLeftIn,
  fadeScaleUp,
  kenBurnsUp
}
