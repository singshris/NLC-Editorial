const letters = document.querySelectorAll("div");
/*pink, yellow, orange, skin, teal*/
const palette = ['#EAC435', '#1E96FC', '#FF6F59', '#D90368','#A246DD'];
const section = document.querySelector(".letter");
let clickedCount = 0;

section.addEventListener("mouseenter", function() {
    for (const letter of letters){
        letter.addEventListener("mouseenter", function() 
        { letter.style.opacity = '0';
        clickedCount++;
        console.log(clickedCount);
          // letter.classList.add("transparent");
          if (clickedCount === 61) {
            // All divs have been clicked
            clickedCount = 0;
            var image = document.createElement("img");
            image.src = "coin.jpeg"
            image.classList.add("coin");
            // message.textContent = `€1`;
            section.appendChild(image);
        }
        });
    }
})

section.addEventListener("mouseleave", function(){
        for (const letter of letters){
            letter.style.opacity = '1';
            clickedCount = 0;
            }
        });

 