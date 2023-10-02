const letters = document.querySelectorAll("div");
/*pink, yellow, orange, skin, teal*/
const palette = ['#EAC435', '#1E96FC', '#FF6F59', '#D90368','#A246DD'];
const section = document.querySelector(".letter");
let clickedCount = 0;

section.addEventListener("mouseenter", function() {
    for (const letter of letters){
        letter.addEventListener("mousedown", function() 
        { letter.style.opacity = '0';
        clickedCount++;
        console.log(clickedCount);
          // letter.classList.add("transparent");
          if (clickedCount === 61) {
            // All divs have been clicked
            clickedCount = 0;
            const message = document.createElement("p");
            message.textContent = "All divs have been clicked!";
            section.appendChild(message);
        }
        });
    }
})

section.addEventListener("mouseleave", function(){
        for (const letter of letters){
            letter.style.opacity = '1';
            }
        });

 