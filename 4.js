document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var newRow2 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var text = document.createElement("td");
    text.textContent = "Index:";
    var inputt = document.createElement("input");
    newRow.appendChild(cell1);
    newRow2.appendChild(text);
    newRow2.appendChild(inputt);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").before(newRow2);
    document.getElementById("start").onclick = function (o) {
        
    
        var multiplication = 1 ; 
        var splitted_text = document.getElementById('1_1').value.split(' ');
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }
            if (parseInt(splitted_text[i])%3==0){
                multiplication*=parseInt(splitted_text[i]);
            }

            
        }
        if ((inputt.value<=splitted_text.length-1)&& (inputt.value>=0))
            var indexx = inputt.value;
        else{
            alert('Not possible')
            return
        }
        if (multiplication==1){
            splitted_text[indexx] = 0; 
            var result = splitted_text.join(' ');
            cell1.textContent = result;
            return
        }
        splitted_text[indexx] = multiplication; 
        var result = splitted_text.join(' ');
        cell1.textContent = result;
    }
});
