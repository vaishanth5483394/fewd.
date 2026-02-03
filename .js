// Sample recipes data
const recipes = [
    { name: 'Pasta Carbonara', difficulty: 'Medium', time: 25 },
    { name: 'Chicken Stir Fry', difficulty: 'Easy', time: 20 },
    { name: 'Beef Stew', difficulty: 'Hard', time: 120 },
    { name: 'Salad', difficulty: 'Easy', time: 10 },
    { name: 'Cake', difficulty: 'Medium', time: 60 },
    { name: 'Soup', difficulty: 'Easy', time: 30 },
    { name: 'Pizza', difficulty: 'Hard', time: 45 },
];

// Current filter and sort state
let currentFilter = 'all';
let currentSort = 'name';

// Pure function to filter recipes
function filterRecipes(recipes, filter) {
    switch (filter) {
        case 'easy':
            return recipes.filter(recipe => recipe.difficulty === 'Easy');
        case 'medium':
            return recipes.filter(recipe => recipe.difficulty === 'Medium');
        case 'hard':
            return recipes.filter(recipe => recipe.difficulty === 'Hard');
        case 'quick':
            return recipes.filter(recipe => recipe.time < 30);
        default:
            return recipes;
    }
}

// Pure function to sort recipes
function sortRecipes(recipes, sort) {
    const sorted = [...recipes]; // Copy to avoid mutation
    if (sort === 'name') {
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'time') {
        return sorted.sort((a, b) => a.time - b.time);
    }
    return sorted;
}

// Function to update display
function updateDisplay() {
    const filtered = filterRecipes(recipes, currentFilter);
    const sorted = sortRecipes(filtered, currentSort);
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    sorted.forEach(recipe => {
        const div = document.createElement('div');
        div.className = 'recipe';
        div.innerHTML = `<h3>${recipe.name}</h3><p>Difficulty: ${recipe.difficulty}</p><p>Time: ${recipe.time} min</p>`;
        recipeList.appendChild(div);
    });
}

// Event listeners for filters
document.getElementById('all').addEventListener('click', () => {
    currentFilter = 'all';
    updateDisplay();
});

document.getElementById('easy').addEventListener('click', () => {
    currentFilter = 'easy';
    updateDisplay();
});

document.getElementById('medium').addEventListener('click', () => {
    currentFilter = 'medium';
    updateDisplay();
});

document.getElementById('hard').addEventListener('click', () => {
    currentFilter = 'hard';
    updateDisplay();
});

document.getElementById('quick').addEventListener('click', () => {
    currentFilter = 'quick';
    updateDisplay();
});

// Event listeners for sorts
document.getElementById('name').addEventListener('click', () => {
    currentSort = 'name';
    updateDisplay();
});

document.getElementById('time').addEventListener('click', () => {
    currentSort = 'time';
    updateDisplay();
});

// Initial display
updateDisplay();
