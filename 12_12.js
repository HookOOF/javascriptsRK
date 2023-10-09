document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").onclick = function (o) {
        var positivesum = 0 ;
        var maxx = 0;
        var splitted_text = document.getElementById('1_1').value.split(' ');
        for (const element of splitted_text)
            maxx = Math.max(parseInt(element),maxx)
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }

            if (parseInt(splitted_text[i])==maxx){
                delete splitted_text[i];
            }
        }
        var result = splitted_text.reverse().join(' ');
        cell1.textContent = result;
    }
});
