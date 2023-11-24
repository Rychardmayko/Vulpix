function calculateHours(index) {
    const startDate = new Date(document.getElementById(`date${index}`).value);
    const startTime = new Date(`1970-01-01T${document.getElementById(`startTime${index}`).value}`);
    const endTime = new Date(`1970-01-01T${document.getElementById(`endTime${index}`).value}`);
    const diff = (endTime - startTime) / 3600000; // Converter milissegundos em horas
    document.getElementById(`totalHours${index}`).textContent = diff.toFixed(2);
    updateTotalHours();
}

function updateTotalHours() {
    let totalHours = 0;
    for (let i = 1; i <= 5; i++) { 
        totalHours += parseFloat(document.getElementById(`totalHours${i}`).textContent);
    }
    document.getElementById("totalWorkedHours").textContent = totalHours.toFixed(2);
}

for (let i = 1; i <= 5; i++) {
    document.getElementById(`startTime${i}`).addEventListener("input", () => calculateHours(i));
    document.getElementById(`endTime${i}`).addEventListener("input", () => calculateHours(i));
}