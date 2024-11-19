// Масив для зберігання даних
let crossings = [
    { id: 1, name: 'Іваненко Іван Іванович', date: '2024-11-18', country: 'Польща' },
    { id: 2, name: 'Петренко Петро Петрович', date: '2024-11-19', country: 'Угорщина' },
];

// Функція для відображення даних у таблиці
function renderTable() {
    const tableBody = document.querySelector('#crossingTable tbody');
    tableBody.innerHTML = ''; // Очищуємо таблицю

    crossings.forEach((crossing, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${crossing.name}</td>
            <td>${crossing.date}</td>
            <td>${crossing.country}</td>
            <td>
                <button onclick="editEntry(${crossing.id})">Редагувати</button>
                <button onclick="deleteEntry(${crossing.id})">Видалити</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Функція для додавання нового запису
function addEntry(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const country = document.getElementById('country').value;

    const newEntry = {
        id: Date.now(), // Унікальний ідентифікатор
        name,
        date,
        country,
    };

    crossings.push(newEntry); // Додаємо запис у масив
    renderTable(); // Оновлюємо таблицю

    // Очищуємо форму
    event.target.reset();
}

// Функція для видалення запису
function deleteEntry(id) {
    crossings = crossings.filter(crossing => crossing.id !== id);
    renderTable();
}

// Функція для редагування запису
function editEntry(id) {
    const entry = crossings.find(crossing => crossing.id === id);

    if (entry) {
        const newName = prompt('Введіть новий ПІБ:', entry.name);
        const newDate = prompt('Введіть нову дату (yyyy-mm-dd):', entry.date);
        const newCountry = prompt('Введіть нову країну:', entry.country);

        if (newName && newDate && newCountry) {
            entry.name = newName;
            entry.date = newDate;
            entry.country = newCountry;
            renderTable();
        }
    }
}

// Додаємо обробник для форми
document.getElementById('addForm').addEventListener('submit', addEntry);

// Ініціалізація таблиці
renderTable();
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
