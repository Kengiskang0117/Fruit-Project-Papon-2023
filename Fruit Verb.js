 const searchBar = document.getElementById("searchBar");
 const suggestions = document.getElementById("suggestions");

 const fruits = ['apple', 'banana', 'cherry', 'grape', 'orange', 'pear', 'strawberry','pineapple', 'kiwi', 'papaya','date'];

 searchBar.addEventListener('input', function(event) {
     const userInput = event.target.value.toLowerCase();
     const matchingFruits = fruits.filter(fruit => fruit.includes(userInput));

     suggestions.innerHTML = "";
     matchingFruits.forEach(fruit => {
         const suggestion = document.createElement("div");
         suggestion.textContent = fruit;
         suggestions.appendChild(suggestion);
     });

     if (userInput === '') {
         suggestions.style.display = 'none';
     } else {
         suggestions.style.display = 'block';
     }
 });

 suggestions.addEventListener('click', function(event) {
     if (event.target.tagName === 'DIV') {
         searchBar.value = event.target.textContent;
         suggestions.style.display = 'none';
     }
 });

searchBar.addEventListener('input', function(event) {
    const userInput = event.target.value.toLowerCase();
    const matchingFruits = fruits.filter(fruit => fruit.includes(userInput));

    if (userInput === '') {
        suggestions.style.display = 'none';
        submenu.style.display = 'none';
    } else {
        suggestions.style.display = 'block';
        submenu.style.display = 'none';
        suggestions.innerHTML = matchingFruits.map(fruit => {
            const highlightedFruit = fruit.replace(new RegExp(userInput, 'gi'), (match) => `<span class="highlight">${match}</span>`);
            return `<div>${highlightedFruit}</div>`;
        }).join('');
        
        const searchBarRect = searchBar.getBoundingClientRect();
        suggestions.style.left = searchBarRect.left + 'px';
        suggestions.style.top = searchBarRect.bottom + 'px';
    }
});