// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const header = document.createElement('div');

    const h1 = document.createElement('h1');

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    header.className = 'header';
    span1.className = 'date';
    span2.className = 'temp';

    h1.innerHTML = 'Lambda Time';

    span1.innerHTML = 'MARCH 28, 2019';
    span2.innerHTML = '98°';

    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);

    return header;

}

document.querySelector('.header-container').appendChild(Header());
