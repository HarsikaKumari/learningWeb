function generateTable() {
    //creating table and table body
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    //creating rows
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement("tr");

        //creating cells inside row
        for (let j = 0; j < 3; j++) {
            const td = document.createElement("td");
            td.innerHTML = `Row number ${i} Cell number ${j}`;
            //append cell inside row
            tr.appendChild(td);
        }
        //append row inside table body
        tBody.appendChild(tr);
    }
    //append table body inside table
    table.appendChild(tBody);
    //append table inside body
    document.body.appendChild(table);
    //setting attribute for table
    table.setAttribute("border", "2");
}
