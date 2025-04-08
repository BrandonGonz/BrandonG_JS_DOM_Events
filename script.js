//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
   
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })
   
   //Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

let getButton = document.getElementById('clickMe');

getButton.addEventListener('click', function() {
    getButton.innerText = 'You clicked me!';
})

let colorButton = document.getElementById('randomColorBtn');
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green= Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`

    document.body.style.backgroundColor = randomColor;
}

colorButton.addEventListener('click', getRandomColor)

function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }

   
   let modeButton = document.getElementById('modeToggleBtn');

modeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode'); // adds or removes the class

  if (document.body.classList.contains('dark-mode')) {
    modeButton.innerText = 'light mode';
  } else {
    modeButton.innerText = 'dark mode';
  }
});
