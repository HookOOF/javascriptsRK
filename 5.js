document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").onclick = function (o) {
        var even = 0 ;
        var fstentry = 0;
        var flag = true; 
        var splitted_text = document.getElementById('1_1').value.split(' ');
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }

            if (parseInt(splitted_text[i])%2==0){
                even+=parseInt(splitted_text[i]);
            }
            if ((parseInt(splitted_text[i])%6==0)){
                fstentry = i ; 
                flag = false;
            }
        }
        if (!flag)
            splitted_text[fstentry]=even;
        else{
            var result = splitted_text.join(' ');
            cell1.textContent = result;
            return
        }
        var result = splitted_text.join(' ');
        cell1.textContent = result;
    }
});
