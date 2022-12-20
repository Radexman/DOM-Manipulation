// ==================== Creating elements and attributes and working with them ========================= //

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// const liText = document.createTextNode('Godfather');
// li.appendChild(liText);
// ul.appendChild(li);

// li.innerText+= ' Mario Puzo';

// li.setAttribute('class', 'list-items');
// li.removeAttribute('class');

// li.classList.add('list-items');

// if (li.hasAttribute('class')) console.log(li.getAttribute('class'));

// =================================== Traversing through the DOM =================================== //

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

// ========================================= Event Listeners ====================================== //

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn() {
//     alert('This Works');
// }
// buttonTwo.addEventListener('click', alertBtn);

// const buttonThree = document.querySelector('.btn-3');

// buttonThree.addEventListener('mouseover', () => {
//     buttonThree.style.backgroundColor = 'red';
// })

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);