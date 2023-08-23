const searchBar = document.getElementById('searchBar');
const suggestions = document.getElementById('suggestions');

const fruits = ['strawberries', 'apple', 'orange', 'banana', 'mandarin', 'watermelon', 'pineapple', 'pear'];

searchBar.addEventListener('input', function() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.startsWith(searchTerm));

    if (searchTerm === '') {
        suggestions.style.display = 'none';
    } else {
        suggestions.style.display = 'block';
        suggestions.innerHTML = filteredFruits.map(fruit => `<div>${fruit}</div>`).join('');
    }
});

suggestions.addEventListener('click', function(event){
    if (event.target.tagName === 'DIV') {
        searchBar.value = event.target.textContent;
        suggestions.style.display = 'none';
    }
});