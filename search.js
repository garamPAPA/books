var data = {
    "data": [
        { "name": "Abhi", "class": "Bca", "number": "9045085112" },
        { "name": "vibhu", "class": "bsc", "number": "9651521536" },
        { "name": "sarthak", "class": "11th", "number": "7301094994" },
        { "name": "shivank", "class": "teacher", "number": "8706049238"},
        { "name": "piyush", "class": "LLB", "number": "8081148509"},
        { "name": "raghav", "class": "bca", "number": "7454894651"},
        // Add more entries as needed
    ]
};

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; // Clear previous results

    const filteredData = data.data.filter(item => {
        return item.name.toLowerCase().includes(query) || 
               item.class.toLowerCase().includes(query) || 
               item.number.includes(query);
    });
console.log(filteredData);
    filteredData.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        resultItem.innerHTML = `<strong>Name:</strong> ${item.name} <br> <strong>Class:</strong> ${item.class} <br> <strong>Number:</strong> ${item.number}`;
        resultsContainer.appendChild(resultItem);
    });
});