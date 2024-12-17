document.getElementById('diaryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const mood = document.getElementById('mood').value;
    const highlights = document.getElementById('highlights').value;
    const goals = document.getElementById('goals').value;
    const lessons = document.getElementById('lessons').value;
    const gratitude = document.getElementById('gratitude').value;
    const date = new Date().toLocaleDateString();

    const entry = {
        date,
        mood,
        highlights,
        goals,
        lessons,
        gratitude
    };

    saveEntry(entry);
    displayEntries();
});

function saveEntry(entry) {
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.push(entry);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
}

function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';

    entries.forEach(entry => {
        const div = document.createElement('div');
        div.classList.add('entry');
        div.innerHTML = `
            <h3>${entry.date}</h3>
            <p><strong>Mood:</strong> ${entry.mood}</p>
            <p><strong>Highlights:</strong> ${entry.highlights}</p>
            <p><strong>Goals:</strong> ${entry.goals}</p>
            <p><strong>Lessons Learned:</strong> ${entry.lessons}</p>
            <p><strong>Gratitude:</strong> ${entry.gratitude}</p>
        `;
        entriesContainer.appendChild(div);
    });
}

// Display existing entries when the page loads
displayEntries();
