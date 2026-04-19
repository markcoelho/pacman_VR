// food-placer.js
// Modified version - moves with IJKL keys, places food with spacebar

// Initialize variables
let foodplacer = document.querySelector('#foodplacer');
let position = foodplacer.object3D.position;
position.y -= 1;

// Movement speed
const speed = 0.5;

// Keyboard controls
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'i': // Move right
            position.x += speed;
            break;
        case 'k': // Move left
            position.x -= speed;
            break;
        case 'j': // Move forward
            position.z -= speed;
            break;
        case 'l': // Move backward
            position.z += speed;
            break;
        case ' ': // Spacebar - place food
        case 'Space':
            event.preventDefault();
            placeFood();
            break;
    }
});

// Function to place food
function placeFood() {
    let food = document.createElement('a-entity');
    food.setAttribute('geometry', 'primitive: sphere; radius: 0.2');
    food.setAttribute('material', 'color: red');
    food.setAttribute('position', `${position.x} 2 ${position.z}`);
    food.setAttribute('class', 'food');
    document.querySelector('#foods').appendChild(food);
    
    console.log(`Food placed at: x=${position.x}, y=2, z=${position.z}`);
}

console.log('Food placer ready! I=right, K=left, J=forward, L=backward, SPACEBAR=place food');