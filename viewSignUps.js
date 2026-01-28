const tableBody = document.getElementById("tableBody");
const clubFilter = document.getElementById("clubFilter");
const total = document.getElementById("total");

let signups = JSON.parse(localStorage.getItem("signups")) || [];

init();

function init() {
    populateDropdown();
    displayTable(signups);
}

function populateDropdown() {
    clubFilter.innerHTML = `<option value="ALL">ALL</option>`;

    const clubs = [...new Set(signups.map(s => s.club))];
    clubs.forEach(c => {
        clubFilter.innerHTML += `<option value="${c}">${c}</option>`;
    });

    clubFilter.addEventListener("change", filterTable);
}

function filterTable() {
    const selected = clubFilter.value;
    if (selected === "ALL") {
        displayTable(signups);
    } else {
        displayTable(signups.filter(s => s.club === selected));
    }
}

function displayTable(data) {
    tableBody.innerHTML = "";
    total.textContent = data.length;

    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7">No Sign Ups for the club</td></tr>`;
        return;
    }

    data.forEach(s => {
        tableBody.innerHTML += `
        <tr>
            <td>${s.club}</td>
            <td>${s.id}</td>
            <td>${s.fullname}</td>
            <td>${s.grade}</td>
            <td>${s.email}</td>
            <td>${s.mobile}</td>
            <td>${s.training}</td>
        </tr>`;
    });
}
