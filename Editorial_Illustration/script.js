

// function getRandomRadius() {
//     return Math.random() < 0.5 ? '8%' : '0%';
// }

function getMoving() {
    return Math.random() < 0.5 ? '0.9' : '1';
   
}


function applyRandomStyles(element) {
    // element.style.borderRadius = getRandomRadius(); 
    element.style.opacity = getMoving(); // Random translation up to 10px
}

var colorBoxes = document.querySelectorAll('div');

colorBoxes.forEach(function(box) {
    applyRandomStyles(box);
  });

  setInterval(function() {
    colorBoxes.forEach(function(box) {
      applyRandomStyles(box);
    });
  }, 100);
 