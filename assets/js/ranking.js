
let members = [
    { name: "Alissa", point: 6690 },
    { name: "Gian", point: 3230 },
    { name: "Alena", point: 3200 },
    { name: "Marven", point: 2910 },
    { name: "Ama", point: 2550 },
    { name: "Lyyna", point: 2180 },
    { name: "Varlendes", point: 2020 },
    { name: "Melody", point: 1270 },
    { name: "Canny", point: 1150 },
    { name: "Athaya", point: 1150 },
];

const tableBody = document.getElementById("ranking-body");
const searchInput = document.getElementById("search");

function renderTable(data) {
    tableBody.innerHTML = "";

    const sorted = [...data].sort((a, b) => b.point - a.point);

    sorted.forEach((member, index) => {
        const row = document.createElement("tr");

        if (index === 0) row.classList.add("top1");
        else if (index === 1) row.classList.add("top2");
        else if (index === 2) row.classList.add("top3");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${member.name}</td>
            <td>${member.point}</td>
        `;

        tableBody.appendChild(row);
    });
}

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filtered = members.filter(m =>
        m.name.toLowerCase().includes(keyword)
    );

    renderTable(filtered);
});

renderTable(members);