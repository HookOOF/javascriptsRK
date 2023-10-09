document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").onclick = function (o) {
        var positivesum = 0 ;
        var splitted_text = document.getElementById('1_1').value.split(' ');
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }

            if (parseInt(splitted_text[i])>0){
                positivesum+=i;
            }
        }
        var res = factorial(positivesum);
        cell1.textContent = res;
    }
});



function factorial(o){
    if (o==0){
        return 1;
    }
    return o*factorial(o-1);
}
