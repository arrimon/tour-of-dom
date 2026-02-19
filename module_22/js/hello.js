console.log('Come from Another files');
// const innerTextData = document.getElementById('players-container').innerText;
// const innerHtmlData = document.getElementById('players-container').innerHTML;
// console.log(`${innerTextData}+ <\n> + ${innerHtmlData}`);

const htmlSections = document.querySelectorAll('section')
// console.log(htmlSections)
// for (const sec of htmlSections){
//     console.log(sec)
//     sec.style.backgroundColor = 'WhiteSmoke';
//     sec.style.padding = '20px'
//     sec.style.margin = '20px 0'

// }
// for (const sec of htmlSections){
//     sec.classList.add('section-card')

// }
const childNotes = document.getElementById('players-container').childNodes;
const childNote = document.getElementById('players-container').childNodes[1];
console.log(childNotes, childNote)