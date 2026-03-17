/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

const btn = document.getElementById('btn')
let h4Nab = document.querySelector('h4')
let h1Nab = document.querySelector('h1')

btn.addEventListener('click', printActivity)

function printActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
   .then(data => {
            h4Nab.textContent = data.activity
            h1Nab.textContent = "🤩 Happy Bot 🤩"
            
            h4Nab.classList.remove("pop-in")
            h1Nab.classList.remove("pop-in")

            void h4Nab.offsetWidth
            void h1Nab.offsetWidth

            h4Nab.classList.add("pop-in")
            h1Nab.classList.add("pop-in")
        })
        
        
}

