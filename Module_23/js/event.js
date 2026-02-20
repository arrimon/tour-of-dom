console.log("It's comming from js/event file")

// Option 2 for Event Handler
function makeYellow(){
    document.body.style.backgroundColor = 'Beige';
}
function makeCadetBlue(){
    document.body.style.backgroundColor = 'CadetBlue';
}
function makeLavender(){
    document.body.style.backgroundColor = 'Lavender';
}
function makeLightBlue(){
    document.body.style.backgroundColor = 'LightBlue';
}

// Option 3 for Event Handler 
const makeBgBlue = document.getElementById('btn-bg-blue');
// console.log(makeBgBlue);
makeBgBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'RoyalBlue';
}

// Option 3.1 for Event Handler
const makeBgPurple = document.getElementById('btn-bg-purple');
// console.log(makeBgBlue);
makeBgPurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


// Option 4: addEventListener (Best Practice)
// document.getElementById('id-name').addEventListener('Event Type', handler)
document.getElementById('btn-bg-green').addEventListener('click', function makeGreen(){
    console.log('Color name: SeaGreen')
    document.body.style.backgroundColor = 'SeaGreen';
})

document.getElementById('btn-bg-gold')
    .addEventListener('click', function makeGolden(){
        console.log('Color name: GoldenRod')
        document.body.style.backgroundColor = 'GoldenRod';
    })