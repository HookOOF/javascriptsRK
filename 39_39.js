document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").onclick = function (o) {
        var counter = 0 ;
        var flag;
        var splitted_text = document.getElementById('1_1').value.split(' ');
        if (parseInt(splitted_text[0])<0){
            flag = false;
        }
        else
            flag = true;
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }
            if (parseInt(splitted_text[i])>=0){
                if (!flag){
                    counter++;
                    flag=true;
                }
            }
            else{
                if (flag){
                counter++;
                flag=false;
                }
            }

        }
        cell1.textContent = counter ; 
    }

            
});


