document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").onclick = function (o) {
        var num = 0 ;
        var maxcount = 0 ;
        var tempcount = 0 ;
        var splitted_text = document.getElementById('1_1').value.split(' ');
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }
            for (var j=i;j<=splitted_text.length-1;j++){
                if(splitted_text[i] == splitted_text[j])
                    tempcount++;
            }
            if (tempcount>maxcount){
                maxcount=tempcount;
                num = splitted_text[i];
            }
            if (tempcount==maxcount){
                if (num>splitted_text[i])
                    num=splitted_text[i];
            }
            tempcount=0;
        }
        cell1.textContent = num ; 
    }

            
});


