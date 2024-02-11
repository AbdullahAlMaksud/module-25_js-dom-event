console.log('This is separate js file')


//Option 1 :  Directly On HTML element
//    <button onclick="console.log(65)">Another Button</button>


//-------------------------------------------------
//IMPORTANT: We will use this
//Option 2 : add onclick function on HTML Element
//    <button onclick="makered()">Make Red</button>
function makered() {
    document.body.style.backgroundColor = 'red';
}
//----------------------------------------------------
//Option 3 : whth getElementById
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'Blue';
}

//Option 3 : Another [We will use this sometime]
const makePurpleButton = document.getElementById('make-purple')

makePurpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple'
}

//Option 4 : 
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//Option 4 : Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

//--------------------------------------------------
//IMPORTANT: We will use this Sometimes
//Option 4 : Final
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenRod';
    
    document.body.style.fontSize = '2rem';
})
//--------------------------------------------------