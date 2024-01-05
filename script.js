//! Selecting/Creating Elements
const gridContainerElement = document.querySelector('.grid-container');


//! Logic

// Inserting n elements into gridContainerElement
for (let i = 0; i < 16 * 16; i++) {
    gridContainerElement.insertAdjacentHTML('beforeend', "<div class='grid-node'></div>")
}