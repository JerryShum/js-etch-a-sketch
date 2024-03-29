//! Selecting/Creating Elements
const gridContainerElement = document.querySelector('.grid-container');
const gridRowElement = document.createElement('div');
const gridNodeElement = document.createElement('div')

console.log(gridRowElement);


//! Logic

let n = 16;

// Inserting n elements into gridContainerElement
for (let i = 0; i < n; i++) {
    let clone = gridRowElement.cloneNode(true);
    clone.className = "grid-row";
    gridContainerElement.appendChild(clone);

    for (let j = 0; j < n; j++) {
        let nodeClone = gridNodeElement.cloneNode(true);
        nodeClone.className = "grid-node";
        clone.appendChild(nodeClone)

        //* Hover Effect
        nodeClone.addEventListener('mouseover', () => nodeClone.classList.add('grid-node-active'))
        // nodeClone.addEventListener('mouseout', () => nodeClone.classList.remove('grid-node-active'))
    }

}

