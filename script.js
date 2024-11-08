const defaultRecipes = [
    
    {
        name: "Spaghetti Carbonara",
        image: "1.jpg",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese"],
        instructions: "Cook spaghetti. Mix with beaten eggs, pancetta, and cheese."
    },
    {
        name: "Pizza",
        image: "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg",
        ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Toppings (pepperoni, vegetables)"],
        instructions: "Spread sauce on dough, add cheese and toppings. Bake in oven."
    },
    {
        name: "Maggi",
        image: "https://images.medindia.net/health-images/1200_1000/cooked-maggi.jpg",
        ingredients: ["Maggi noodles", "Water", "Maggi tastemaker"],
        instructions: "Boil water, add noodles and tastemaker. Cook until noodles are soft."
    },
    {
        name: "Noodles",
        image: "https://t4.ftcdn.net/jpg/02/68/50/29/360_F_268502905_IWGrN1kHECsQ3JO50PQtiEDdjtF2oCex.jpg",
        ingredients: ["Noodles", "Vegetables", "Soy sauce", "Spices"],
        instructions: "Cook noodles and vegetables together with soy sauce and spices."
    },
    {
        name: "Sandwich",
        image: "https://i.ytimg.com/vi/Grr1Lmv9D14/sddefault.jpg",
        ingredients: ["Bread", "Cheese", "Lettuce", "Tomato", "Meat or tofu"],
        instructions: "Layer ingredients between slices of bread. Toast if desired."
    },
    {
        name: "Kaju Katli",
        image: "https://static.toiimg.com/thumb/55048826.cms?imgsize=392932&width=800&height=800",
        ingredients: ["Cashew nuts", "Sugar", "Water", "Ghee", "Cardamom"],
        instructions: "Grind cashew nuts to a fine powder. Cook sugar and water to make syrup. Mix cashew powder with syrup and ghee. Cook until mixture thickens. Let it cool and cut into pieces."
    },
    {
        name: "Coconut Ladoo",
        image: "https://recipes.net/wp-content/uploads/2022/07/coconut-ladoo-1024x682.jpg",
        ingredients: ["Desiccated coconut", "Condensed milk", "Ghee", "Cardamom"],
        instructions: "Heat ghee in a pan, add desiccated coconut and condensed milk. Cook until the mixture thickens and starts to leave the sides of the pan. Add cardamom. Cool slightly and shape into small balls."
    },
    {
        name: "Besan Ladoo",
        image: "https://www.awesomecuisine.com/wp-content/uploads/2014/08/besan-laddu-500x500.jpg",
        ingredients: ["Besan (gram flour)", "Ghee", "Sugar", "Cardamom", "Chopped nuts"],
        instructions: "Heat ghee in a pan, add besan, and roast until golden brown. Add sugar and cardamom, and mix well. Allow the mixture to cool slightly and shape into round balls. Garnish with chopped nuts."
    },
    {
        name: "Gulab Jamun",
        image: "https://4.imimg.com/data4/TA/KC/MY-36248737/black-gulab-jamun.jpg",
        ingredients: ["Milk powder", "Flour", "Ghee", "Sugar", "Water", "Cardamom", "Rose water"],
        instructions: "Mix milk powder, flour, and ghee to make a dough. Shape into small balls. Heat ghee and fry the balls until golden brown. Prepare sugar syrup with water, sugar, cardamom, and rose water. Soak the fried balls in the syrup."
    },
    {
        name: "Jalebi",
        image: "https://static.toiimg.com/thumb/53099699.cms?imgsize=182393&width=800&height=800",
        ingredients: ["All-purpose flour", "Sugar", "Water", "Yeast", "Saffron", "Cardamom"],
        instructions: "Prepare a batter with flour, water, and yeast. Let it ferment. Heat oil and pour the batter in a circular motion to form spirals. Fry until crispy and dip in sugar syrup flavored with saffron and cardamom."
    },
    {
        name: "Malpua",
        image: "https://www.ammakithaali.com/wp-content/uploads/2021/10/malpuaa.jpg",
        ingredients: ["All-purpose flour", "Milk", "Sugar", "Cardamom", "Bananas", "Ghee"],
        instructions: "Mix flour, milk, and sugar to make a batter. Add mashed bananas and cardamom. Heat ghee in a pan and pour the batter to form pancakes. Fry until golden brown and serve with sugar syrup."
    },
    {
        name: "Aloo Puri",
        image: "https://i.ytimg.com/vi/wggxRnzebd4/maxresdefault.jpg",
        ingredients: ["Potatoes", "Flour", "Water", "Spices (cumin, turmeric, coriander)", "Oil"],
        instructions: "Prepare a dough with flour and water. Roll out and deep fry to make puris. For the aloo curry, boil and mash potatoes, then cook with spices and water until thick. Serve with puris."
    },
    {
        name: "Idli",
        image: "https://kanma.in/wp-content/uploads/2023/11/edli.jpeg",
        ingredients: ["Rice", "Urad dal (black gram)", "Water", "Salt"],
        instructions: "Soak rice and urad dal separately overnight. Grind them to a smooth batter, mix, and ferment overnight. Steam the batter in idli molds until cooked through."
    },
    {
        name: "Sooji Appam",
        image: "https://c.ndtvimg.com/2020-09/mdvmmk0g_appam_625x300_15_September_20.jpg",
        ingredients: ["Semolina (sooji)", "Yogurt", "Sugar", "Cardamom", "Ghee"],
        instructions: "Mix semolina with yogurt, sugar, and cardamom to form a batter. Heat ghee in a pan and pour the batter to form small round cakes. Cook until golden brown on both sides."
    },
    {
        name: "Vegetable Soup",
        image: "",
        ingredients: ["Mixed vegetables (carrots, beans, peas, potatoes)", "Vegetable broth", "Salt", "Pepper", "Herbs (parsley, thyme)"],
        instructions: "Chop vegetables and cook in vegetable broth until tender. Season with salt, pepper, and herbs. Blend if desired for a smooth consistency."
    }
];



// Initialize recipes from localStorage or use defaultRecipes
let recipes = JSON.parse(localStorage.getItem('recipes')) || defaultRecipes;

// DOM Elements
const recipeList = document.getElementById('recipeList');
const searchInput = document.getElementById('searchInput');
const addRecipeBtn = document.getElementById('addRecipeBtn');
const addRecipeForm = document.getElementById('addRecipeForm');
const modalOverlay = document.getElementById('modalOverlay');
const recipeForm = document.getElementById('recipeForm');

// Function to Display Recipes
function displayRecipes(filteredRecipes = recipes) {
recipeList.innerHTML = '';

if (filteredRecipes.length === 0) {
    recipeList.innerHTML = '<p style="text-align:center; width:100%;">No recipes found.</p>';
    return;
}

filteredRecipes.forEach((recipe, index) => {
    const recipeItem = document.createElement('div');
    recipeItem.className = 'recipe-item';

    // Recipe Content
    recipeItem.innerHTML = `
        <button class="delete-btn" title="Delete Recipe">&times;</button>
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-details">
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
    `;

    // Delete Recipe Event
    recipeItem.querySelector('.delete-btn').addEventListener('click', () => {
        deleteRecipe(index);
    });

    recipeList.appendChild(recipeItem);
});
}

// Function to Search Recipes
function searchRecipes() {
const searchTerm = searchInput.value.toLowerCase();
const filteredRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm) ||
           recipe.ingredients.join(', ').toLowerCase().includes(searchTerm);
});

displayRecipes(filteredRecipes);
}

// Function to Add Recipe
function addRecipe(event) {
event.preventDefault();

const newRecipe = {
    name: document.getElementById('name').value,
    image: document.getElementById('image').value,
    ingredients: document.getElementById('ingredients').value.split(',').map(item => item.trim()),
    instructions: document.getElementById('instructions').value
};

recipes.push(newRecipe);
localStorage.setItem('recipes', JSON.stringify(recipes));

// Clear Form and Close Modal
recipeForm.reset();
closeModal();

// Refresh Recipe List
displayRecipes();
}

// Function to Delete Recipe
function deleteRecipe(index) {
recipes.splice(index, 1);
localStorage.setItem('recipes', JSON.stringify(recipes));
displayRecipes();
}

// Function to Show Add Recipe Form
function showAddRecipeForm() {
addRecipeForm.style.display = 'block';
modalOverlay.style.display = 'block';
}

// Function to Close Modal
function closeModal() {
addRecipeForm.style.display = 'none';
modalOverlay.style.display = 'none';
}

// Event Listeners
addRecipeBtn.addEventListener('click', showAddRecipeForm);
modalOverlay.addEventListener('click', closeModal);
recipeForm.addEventListener('submit', addRecipe);
searchInput.addEventListener('input', searchRecipes);

// Initial Display of Recipes
displayRecipes();
