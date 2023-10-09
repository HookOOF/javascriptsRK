var counter = 0 ;
document.addEventListener("DOMContentLoaded", function () {
    var rowcllct = document.getElementById("rowcollector");
    document.getElementById("start").onclick = function (o) {
        document.getElementById('2').classList.remove('hidden');
        document.getElementById('3').classList.remove('hidden');
        summ();
    }

    document.getElementById("submit").onclick = function (o) {
        document.getElementById('1').classList.remove('hidden');
        console.log("Started");
        var newRow = document.createElement("tr");
        var cell1 = document.createElement("td");   
        var cell2 = document.createElement("td");
        cell1.textContent = document.getElementById('1_1').value;
        cell2.setAttribute("onclick","changeCellColor(this)");
        cell1.setAttribute("onclick","copyRow(this)");
        cell2.textContent = document.getElementById('1_2').value;
        if (parseInt(cell2.textContent)<0 || !parseInt(cell2.textContent)){
            alert('Item cant be placed')
            return
        }
        
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        rowcllct.appendChild(newRow);
        document.getElementById('1_1').era
    }
});

function summ() {
    var sum=0;
    var rowcllct = document.getElementById("3_1");
    var rows = rowcllct.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        sum+=parseInt(cells[1].textContent);

        }
    document.getElementById("2_1").textContent = sum;
}

var n = 0 ;
function changeCellColor(cell) {
    n%=5;
    switch(n){
        case 0:
            cell.style.backgroundColor = "green";
            break;
        case 1:
            cell.style.backgroundColor = "yellow";
            break;
        case 2:
            cell.style.backgroundColor = "red";
            break;
        case 3:
            cell.style.backgroundColor = "blue";
            break;
        case 4:
            cell.style.backgroundColor = "white";
            break;
    }
    n++;
}

function copyRow(cell) {
    
    var row = cell.parentElement; 
    var newRow = row.cloneNode(true);
    var cells = newRow.getElementsByTagName('td');
    cells[0].setAttribute("onclick","")
    cells[1].setAttribute("onclick","")
    var copiedRows = document.getElementById("3_1");
    copiedRows.appendChild(newRow);
}