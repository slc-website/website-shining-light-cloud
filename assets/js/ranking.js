// DATA MEMBER
let members = [
    { name: "Member 1", point: 120 },
    { name: "Member 2", point: 115 },
    { name: "Member 3", point: 110 },
    { name: "Member 4", point: 100 },
    { name: "Member 5", point: 95 },
    { name: "Member 6", point: 90 },
    { name: "Member 7", point: 85 },
    { name: "Member 8", point: 80 },
    { name: "Member 9", point: 75 },
    { name: "Member 10", point: 70 }
];

const tableBody = document.getElementById("ranking-body");
const searchInput = document.getElementById("search");

function renderTable(data) {
    tableBody.innerHTML = "";

    data.sort((a, b) => b.point - a.point);

    data.forEach((member, index) => {
        let row = document.createElement("tr");

        if (index === 0) row.classList.add("top1");
        if (index === 1) row.classList.add("top2");
        if (index === 2) row.classList.add("top3");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${member.name}</td>
            <td>${member.point}</td>
        `;

        tableBody.appendChild(row);
    });
}

searchInput.addEventListener("input", () => {
    let keyword = searchInput.value.toLowerCase();

    let filtered = members.filter(m =>
        m.name.toLowerCase().includes(keyword)
    );

    renderTable(filtered);
});

renderTable(members);