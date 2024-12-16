const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const tableBody = document.querySelector('#userTable tbody');

function fetchData() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        populateTable(data);
        attachSortHandlers(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function populateTable(data) {
    tableBody.innerHTML = ''; 
    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
        `;
        tableBody.appendChild(row);
    });
}

function attachSortHandlers(data) {
    document.getElementById('sortNameAsc').addEventListener('click', () => {
        const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        populateTable(sortedData);
    });

    document.getElementById('sortNameDesc').addEventListener('click', () => {
        const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
        populateTable(sortedData);
    });

    document.getElementById('sortEmailAsc').addEventListener('click', () => {
        const sortedData = [...data].sort((a, b) => a.email.localeCompare(b.email));
        populateTable(sortedData);
    });

    document.getElementById('sortEmailDesc').addEventListener('click', () => {
        const sortedData = [...data].sort((a, b) => b.email.localeCompare(a.email));
        populateTable(sortedData);
    });
}

window.onload = fetchData;
