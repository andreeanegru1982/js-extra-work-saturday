console.log('OOP for UI');


const container = document.querySelector('.container');
console.log(container);

function panelfactory(parentElement, id, text = '?'){
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = id;
    panel.textContent = text;
    parentElement.append(panel);

    return panel;
}

const p1 = panelfactory(container, 'panel-1');
const p2 = panelfactory(container, 'panel-2');
const p3 = panelfactory(container, 'panel-3');

p1.textContent = '🐰';



