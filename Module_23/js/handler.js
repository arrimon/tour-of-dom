console.log('Event Handler Js Connected')

document.getElementById('btn-up-title')
    .addEventListener('click', function(){
        // console.log('Click BTN');
        const titleText = document.getElementById('title-text');
        // console.log(titleText);
        titleText.innerText = 'Update Title with Event Handler';

        const nameCorrection = document.getElementById('name-correction');
        nameCorrection.innerHTML = 'Md Abu Rayhan Rimon';
    })


// Update name with Input Field
document.getElementById('update-name')
    .addEventListener('click', function(){
        // console.log('Just Click Update Button')
        // get the text from input field
        const inputName = document.getElementById('input-name');
        const name = inputName.value;
        // console.log(inputName)
        // console.log(name)

        // set the name
        const nameParagraph = document.getElementById('name');
        nameParagraph.innerText = name
    })